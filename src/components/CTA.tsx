'use client';

export default function CTA() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section section-green">
      <div className="container">
        <h2>GRS – Gestión de Recursos Sustentables (GRS)</h2>
        
        <p>
          Acompañamos cada etapa con soluciones sostenibles y medibles.
        </p>
        
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => scrollToSection('contacto')}
            style={{
              backgroundColor: 'white',
              color: '#1D622E',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1.125rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            CONTACTO
          </button>
        </div>
      </div>
    </section>
  );
}