"use client";
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';

export default function SimpleContactForm() {
  const t = useTranslations();
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
    e.stopPropagation();
    console.log('🚀 FORMULARIO SIMPLE INICIADO');
    console.log('📋 Datos del formulario:', formData);
    
    // Validaciones básicas
    if (!formData.name.trim()) {
      setStatus('error');
      setMessage(t.formErrorNameRequired);
      console.log('❌ Error: Nombre requerido');
      return;
    }
    
    if (!formData.email.trim()) {
      setStatus('error');
      setMessage(t.formErrorEmailRequired);
      console.log('❌ Error: Email requerido');
      return;
    }
    
    setStatus('loading');
    setMessage(t.formSending);

    try {
      console.log('📡 Enviando datos:', formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📩 Respuesta:', response.status);
      
      const data = await response.json();
      console.log('📄 Data:', data);

      if (response.ok) {
        setStatus('success');
        setMessage('¡Mensaje enviado correctamente! Te contactaremos pronto.');
        setFormData({ name: '', email: '', company: '', message: '' });
        console.log('✅ ÉXITO TOTAL');
      } else {
        setStatus('error');
        setMessage(data.error || 'Error al enviar');
        console.log('❌ Error API:', data);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Error de conexión');
      console.log('🚨 Error conexión:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 relative z-50">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Contacta con 7Pixels
      </h3>
      
      <form 
        onSubmit={handleSubmit} 
        className="space-y-4"
        onClick={(e) => {
          console.log('📝 Click en formulario');
          e.stopPropagation();
        }}
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        
        <div>
          <input
            type="text"
            name="company"
            placeholder="Tu empresa (opcional)"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        
        <div>
          <textarea
            name="message"
            placeholder={t.formPlaceholderMessage}
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full p-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50"
          onClick={(e) => {
            console.log('🔘 CLICK DETECTADO EN BOTÓN');
            e.stopPropagation();
          }}
        >
          {status === 'loading' ? t.formSending : t.formButtonStart}
        </button>
      </form>
      
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
  );
}
