'use client';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero hero-with-bg">
      <div className="hero-content">
        <h1>
          Por una Gestión donde cada parte avance integrándose sin fricción. Así fluye la transformación.
        </h1>
        
        <p>
          Nos especializamos en generar soluciones sostenibles adecuadas a los recursos de proyectos y organizaciones.
        </p>
      </div>
    </section>
  );
}