"use client";
import { useState } from 'react';

export default function TestContacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🚀 INICIANDO ENVÍO');
    console.log('📋 Datos:', formData);
    
    // Validaciones
    if (!formData.name.trim()) {
      setStatus('error');
      setMessage('El nombre es requerido');
      console.log('❌ Nombre requerido');
      return;
    }
    
    if (!formData.email.trim()) {
      setStatus('error');
      setMessage('El email es requerido');
      console.log('❌ Email requerido');
      return;
    }
    
    if (!formData.message.trim()) {
      setStatus('error');
      setMessage('El mensaje es requerido');
      console.log('❌ Mensaje requerido');
      return;
    }

    setStatus('loading');
    setMessage('Enviando mensaje...');
    console.log('📡 Enviando a API...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📩 Respuesta API:', response.status);
      const data = await response.json();
      console.log('📄 Data recibida:', data);

      if (response.ok) {
        setStatus('success');
        setMessage('¡Mensaje enviado correctamente! Te contactaremos pronto.');
        setFormData({ name: '', email: '', company: '', message: '' });
        console.log('✅ ÉXITO TOTAL - Revisa pieroarbuluromanxd@gmail.com');
      } else {
        setStatus('error');
        setMessage(data.error || 'Error al enviar el mensaje');
        console.log('❌ Error API:', data);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Error de conexión. Inténtalo de nuevo.');
      console.log('🚨 Error conexión:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            7Pixels
          </h1>
          <h2 className="text-2xl font-bold text-white mb-2">
            Test de Contacto
          </h2>
          <p className="text-gray-300">
            Formulario aislado para testing
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">
                Nombre *
              </label>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2">
                Empresa
              </label>
              <input
                type="text"
                name="company"
                placeholder="Tu empresa (opcional)"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2">
                Mensaje *
              </label>
              <textarea
                name="message"
                placeholder="Cuéntanos sobre tu proyecto..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 resize-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                '🚀 Enviar Mensaje'
              )}
            </button>
          </form>
          
          {/* Status Message */}
          {message && (
            <div className={`mt-4 p-3 rounded-lg text-center font-medium ${
              status === 'success' 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                : status === 'error'
                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
            }`}>
              {message}
            </div>
          )}
        </div>

        {/* Debug Info */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>🔍 Abre F12 → Console para ver logs de debugging</p>
          <p>📧 Los emails llegaran a: pieroarbuluromanxd@gmail.com</p>
        </div>

        {/* Back Button */}
        <div className="mt-4 text-center">
          <a 
            href="/"
            className="inline-block px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300"
          >
            ← Volver a 7Pixels
          </a>
        </div>
      </div>
    </div>
  );
}
