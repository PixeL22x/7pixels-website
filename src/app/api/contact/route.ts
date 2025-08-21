import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Enviar email con Resend (mucho más simple!)
    const { data, error } = await resend.emails.send({
      from: '7Pixels <contacto@7pixels.es>', // Tu dominio verificado
      to: ['pieroarbuluromanxd@gmail.com'], // Email personal hasta configurar email profesional
      subject: `Nuevo contacto desde 7Pixels.es - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">7Pixels</h1>
            <p style="color: white; margin: 5px 0;">Nuevo mensaje de contacto</p>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">Información del contacto:</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #10b981;">👤 Nombre:</strong>
              <p style="margin: 5px 0; color: #374151;">${name}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #10b981;">📧 Email:</strong>
              <p style="margin: 5px 0; color: #374151;">${email}</p>
            </div>
            
            ${company ? `
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <strong style="color: #10b981;">🏢 Empresa:</strong>
              <p style="margin: 5px 0; color: #374151;">${company}</p>
            </div>
            ` : ''}
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <strong style="color: #10b981;">💬 Mensaje:</strong>
              <p style="margin: 10px 0; color: #374151; line-height: 1.6;">${message}</p>
            </div>
            
            <div style="background: #10b981; color: white; padding: 15px; border-radius: 8px; text-align: center;">
              <p style="margin: 0;">📅 Recibido el ${new Date().toLocaleString('es-ES')}</p>
            </div>
          </div>
          
          <div style="background: #1f2937; padding: 20px; text-align: center;">
            <p style="color: #9ca3af; margin: 0;">
              © 2024 7Pixels - Agencia de Marketing Digital
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return NextResponse.json(
        { error: 'Error al enviar el email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: '¡Mensaje enviado correctamente!', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
