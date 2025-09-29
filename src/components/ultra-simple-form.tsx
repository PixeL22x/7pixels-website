"use client";
import { useTranslations } from '@/hooks/useTranslations';

export default function UltraSimpleForm() {
  const t = useTranslations();
  const handleClick = () => {
    console.log('🔥🔥🔥 BOTÓN CLICKEADO - DEFINITIVO');
    alert('¡BOTÓN FUNCIONANDO!');
    
    // Enviar directamente
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Usuario',
        email: 'test@ejemplo.com',
        company: 'Test Company',
        message: 'Mensaje de prueba desde formulario ultra simple'
      })
    })
    .then(response => {
      console.log('📡 Respuesta:', response.status);
      return response.json();
    })
    .then(data => {
      console.log('📄 Data:', data);
      alert(t.ultraFormSuccess);
    })
    .catch(error => {
      console.log('❌ Error:', error);
      alert(t.ultraFormError + error.message);
    });
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '10px',
      textAlign: 'center'
    }}>
      <h3 style={{color: 'white', marginBottom: '20px'}}>
        {t.ultraFormTitle}
      </h3>
      
      <button
        onClick={handleClick}
        onMouseDown={() => console.log('🖱️ MOUSE DOWN')}
        onMouseUp={() => console.log('🖱️ MOUSE UP')}
        style={{
          width: '100%',
          padding: '15px',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        {t.ultraFormButton}
      </button>
      
      <p style={{color: 'white', marginTop: '10px', fontSize: '12px'}}>
        {t.ultraFormMessage}
      </p>
    </div>
  );
}
