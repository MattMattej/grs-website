'use client';

export default function Contacto() {
  return (
    <section id="contacto" className="section section-white section-with-bg section-bg-contacto">
      <div className="container">
        <h2>CONTACTO</h2>
        <p>¿Tienes alguna consulta? Estamos aquí para ayudarte con soluciones sostenibles.</p>

        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div className="contact-text">
              <h3>Email</h3>
              <div className="contact-emails">
                <a href="mailto:alejandrapacheco@grsasesorias.com" className="contact-email-link">
                  alejandrapacheco@grsasesorias.com
                </a>
                <a href="mailto:carmendelfino@grsasesorias.com" className="contact-email-link">
                  carmendelfino@grsasesorias.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}