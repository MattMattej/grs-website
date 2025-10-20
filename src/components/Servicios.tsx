'use client';

export default function Servicios() {
  const services = [
    {
      title: "CALIDAD",
      items: [
        "Implementación de Sistemas de Gestión según requisitos ISO 9001 e ISO 13485, ISO 14001, ISO 45001.",
        "Capacitación según necesidades de formación, adaptadas a la realidad y objetivos de la organización.",
        "Auditorías Internas",
        "Diseño y Mejora de Procesos",
        "Asesoramiento sobre normativa técnica, legal y reglamentaria.",
        "Implementación de Buenas Prácticas de Manufactura."
      ]
    },
    {
      title: "AMBIENTAL",
      items: [
        "Planes de Gestión de Residuos",
        "Planes de Gestión Ambiental",
        "Gestión Ambiental de Obras",
        "Evaluación de Impacto Ambiental"
      ]
    },
    {
      title: "RECURSOS NATURALES – PAISAJISMO",
      items: [
        "Mapeo de recursos naturales y del paisaje para identificar riesgos y oportunidades (suelo, agua, biodiversidad, cobertura vegetal)",
        "Recuperación de áreas degradadas",
        "Diseño y ejecución de planes de revegetación con especies nativas",
        "Control y manejo de especies invasoras en predios empresariales",
        "Paisajismo sostenible en predios, plantas industriales o emprendimientos turísticos/inmobiliarios",
        "Programas participativos de sensibilización sobre biodiversidad y paisaje dentro de la empresa",
        "Generación de material visual de los proyectos implementados, para mejorar la imagen ambiental corporativa"
      ],
      description: "Gestión sustentable de Recursos Naturales con un enfoque de diseño y valorización del paisaje de los predios de las organizaciones y de su entorno."
    },
    {
      title: "SEGURIDAD Y SALUD EN EL TRABAJO",
      items: [
        "Elaboración de Plan de Seguridad y Plan de Prevención de Riesgos Laborales",
        "Estudio e implementación de acciones de intervención según desviaciones indicadas por inspectores de entes reguladores",
        "Habilitación Industrial (Decreto 284/74)",
        "Gestión de Contratistas",
        "Inspecciones de Seguridad",
        "Asesoramiento en la compra de equipos de protección personal y vestimenta de trabajo"
      ]
    }
  ];

  return (
    <section id="servicios" className="section section-gray">
      <div className="container">
        <h2>SERVICIOS</h2>
        
        <p>
          Consultoría especializada en la transformación de sistemas de gestión, en plataformas sostenibles, capaces de generar la mejora continua en todos los niveles de la organización.
        </p>

        <div className="grid grid-2">
          {services.map((service, index) => (
            <div key={index} className="card">
              <h3>{service.title}</h3>
              
              {service.description && (
                <p style={{ textAlign: 'left', marginBottom: '1.5rem', color: '#6b7280' }}>
                  {service.description}
                </p>
              )}
              
              <ul>
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}