import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar datos requeridos
    if (!body.nombre || !body.email || !body.mensaje || !body.consentimiento) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Aquí puedes agregar la lógica para enviar el email
    // Por ejemplo, usando un servicio como SendGrid, Resend, o Nodemailer
    
    // Simular envío exitoso
    console.log('Nuevo mensaje de contacto:', {
      nombre: body.nombre,
      email: body.email,
      telefono: body.telefono,
      empresa: body.empresa,
      mensaje: body.mensaje,
      fecha: new Date().toISOString()
    });

    // En un entorno de producción, aquí enviarías el email real
    // await sendEmail({
    //   to: 'info@grs.com.ar',
    //   subject: `Nuevo mensaje de contacto de ${body.nombre}`,
    //   html: `
    //     <h2>Nuevo mensaje de contacto</h2>
    //     <p><strong>Nombre:</strong> ${body.nombre}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Teléfono:</strong> ${body.telefono || 'No proporcionado'}</p>
    //     <p><strong>Empresa:</strong> ${body.empresa || 'No proporcionada'}</p>
    //     <p><strong>Mensaje:</strong></p>
    //     <p>${body.mensaje}</p>
    //   `
    // });

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error al procesar el formulario:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
