'use client';

export default function Nosotros() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const metrics = [
    { value: "+ 50", label: "proyectos de Certificación ISO" },
    { value: "+ 80", label: "auditorías de SGI" },
    { value: "+ 1000", label: "auditorías ambientales" },
    { value: "+ 40", label: "sectores de experiencia" },
  ];

  return (
    <section id="nosotros" className="section section-white">
      <div className="container">
        <h2>NOSOTROS</h2>
        
        <p>
          Somos una consultora creada a partir de años de experiencia en la implementación y auditoría de sistemas de gestión integrados: calidad, medio ambiente y seguridad. La dirección estratégica está a cargo de Alejandra Pacheco y Carmen Delfino, con amplia trayectoria que comparten la visión de aportar soluciones a medida con impacto sostenible. Nos acompañan equipos de trabajo, integrando diferentes miradas y saberes, cuando hay que diseñar respuestas más completas y efectivas a los desafíos de cada cliente.
        </p>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <button
            onClick={() => scrollToSection('servicios')}
            className="btn-primary"
          >
            VER SERVICIOS
          </button>
        </div>

        <div className="grid grid-4">
          {metrics.map((metric, index) => (
            <div key={index} className="metric">
              <div className="metric-value">
                {metric.value}
              </div>
              <div className="metric-label">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}