'use client';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>
          Por una Gestión donde cada parte avance integrándose sin fricción. Así fluye la transformación.
        </h1>
        
        <p>
          Nos especializamos en generar soluciones sostenibles adecuadas a los recursos de proyectos y organizaciones.
        </p>
        
        <div className="hero-buttons">
          <button
            onClick={() => scrollToSection('contacto')}
            className="btn-primary"
          >
            CONTACTO
          </button>
          <button
            onClick={() => scrollToSection('servicios')}
            className="btn-secondary"
          >
            SERVICIOS
          </button>
        </div>
      </div>
    </section>
  );
}