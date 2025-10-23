import { useState, useEffect, useMemo } from 'react';

export interface ProjectMetadata {
  url?: string;
  title?: string;
  description?: string;
  loading: boolean;
  error?: string;
}

// Función para extraer metadatos usando fetch y parsing del HTML
const extractMetadata = async (url: string): Promise<Partial<ProjectMetadata>> => {
  try {
    // Usar múltiples proxies como fallback
    const proxies = [
      `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
      `https://cors-anywhere.herokuapp.com/${url}`,
      `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`
    ];
    
    let html = '';
    let lastError = null;
    
    // Intentar con cada proxy hasta que uno funcione
    for (const proxyUrl of proxies) {
      try {
        // Crear un timeout de 10 segundos
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        const response = await fetch(proxyUrl, {
          headers: {
            'Accept': 'application/json, text/html, */*',
          },
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const text = await response.text();
        
        // Intentar parsear como JSON
        try {
          const data = JSON.parse(text);
          
          if (data.contents) {
            html = data.contents;
            break;
          } else if (data.status && data.status.http_code === 200) {
            html = data.contents || '';
            break;
          }
        } catch {
          // Si no es JSON válido, usar el texto directamente
          if (text.includes('<html') || text.includes('<!DOCTYPE')) {
            html = text;
            break;
          }
        }
      } catch (error) {
        lastError = error;
        console.warn(`Proxy failed: ${proxyUrl}`, error);
        continue;
      }
    }
    
    if (!html) {
      throw lastError || new Error('No se pudo obtener el contenido de la página');
    }
    
    // Crear un parser temporal para extraer metadatos
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Extraer título
    const title = doc.querySelector('title')?.textContent || 
                 doc.querySelector('meta[property="og:title"]')?.getAttribute('content') ||
                 doc.querySelector('meta[name="title"]')?.getAttribute('content');
    
    // Extraer descripción
    const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') ||
                       doc.querySelector('meta[property="og:description"]')?.getAttribute('content') ||
                       doc.querySelector('meta[name="twitter:description"]')?.getAttribute('content');
    
    return {
      url,
      title: title?.trim(),
      description: description?.trim()
    };
  } catch (error) {
    console.error('Error extracting metadata:', error);
    throw error;
  }
};

export const useMetadata = (url: string): ProjectMetadata => {
  const [metadata, setMetadata] = useState<ProjectMetadata>({
    loading: true,
    error: undefined
  });

  useEffect(() => {
    // Desactivar en desarrollo para evitar problemas de CORS
    if (process.env.NODE_ENV === 'development') {
      setMetadata({
        loading: false,
        error: 'Desactivado en desarrollo'
      });
      return;
    }

    const fetchMetadata = async () => {
      try {
        setMetadata(prev => ({ ...prev, loading: true, error: undefined }));
        
        const scrapedData = await extractMetadata(url);
        
        setMetadata({
          ...scrapedData,
          loading: false,
          error: undefined
        });
      } catch (error) {
        console.error('Error fetching metadata:', error);
        setMetadata({
          loading: false,
          error: error instanceof Error ? error.message : 'Error desconocido'
        });
      }
    };

    if (url) {
      fetchMetadata();
    }
  }, [url]);

  return metadata;
};

// Hook para obtener metadatos de múltiples URLs
export const useMultipleMetadata = (urls: string[]): ProjectMetadata[] => {
  // Estabilizar el array de URLs para evitar bucles infinitos
  const stableUrls = useMemo(() => urls, [urls]);
  
  const [metadataList, setMetadataList] = useState<ProjectMetadata[]>(
    stableUrls.map(() => ({ loading: true }))
  );

  useEffect(() => {
    // Desactivar en desarrollo para evitar problemas de CORS
    if (process.env.NODE_ENV === 'development') {
      setMetadataList(stableUrls.map(() => ({
        loading: false,
        error: 'Desactivado en desarrollo'
      })));
      return;
    }

    const fetchAllMetadata = async () => {
               const promises = stableUrls.map(async (url) => {
                 try {
                   const scrapedData = await extractMetadata(url);

                   return {
                     ...scrapedData,
                     loading: false,
                     error: undefined
                   };
                 } catch (error) {
                   console.error(`Error fetching metadata for ${url}:`, error);
                   return {
                     loading: false,
                     error: error instanceof Error ? error.message : 'Error desconocido'
                   };
                 }
               });

      const results = await Promise.all(promises);
      setMetadataList(results);
    };

    if (stableUrls.length > 0) {
      fetchAllMetadata();
    }
  }, [stableUrls]);

  return metadataList;
};
