'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3>GRS – Gestión de Recursos Sustentables</h3>
            <p>
              Consultoría especializada en la transformación de sistemas de gestión, en plataformas sostenibles, capaces de generar la mejora continua en todos los niveles de la organización.
            </p>
          </div>

          <div>
            <h3>Navegación</h3>
            <nav className="footer-nav">
              <button onClick={() => scrollToSection('nosotros')}>NOSOTROS</button>
              <button onClick={() => scrollToSection('servicios')}>SERVICIOS</button>
              <button onClick={() => scrollToSection('contacto')}>CONTACTO</button>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© GRS – Gestión de Recursos Sustentables. Todos los derechos reservados.</p>
          <p>Desarrollado con ❤️ para un futuro sostenible</p>
        </div>
      </div>
    </footer>
  );
}