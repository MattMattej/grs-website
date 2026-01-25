'use client';

import { useState } from 'react';

export default function Servicios() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      title: "CALIDAD",
      items: [
        "Diseño y Mejora de Procesos.",
        "Asesoramiento sobre normativa técnica, legal y reglamentaria.",
        "Implementación de Buenas Prácticas de Manufactura.",
        "Implementación de Sistemas de Gestión según requisitos ISO 9001, ISO 13485, PS 9000."
      ],
      logo: "/logocalidad.png"
    },
    {
      title: "AMBIENTAL",
      items: [
        "Planes de Gestión de Residuos.",
        "Planes de Gestión Ambiental.",
        "Gestión Ambiental de Obras.",
        "Evaluación de Impacto Ambiental.",
        "Gestión sustentable de Recursos Naturales.",
        "Gestión sustentable de Recursos Naturales con un enfoque de diseño y valorización del paisaje de los predios de las organizaciones y de su entorno.",
        "Implementación de Sistemas de Gestión según requisitos ISO 14000.",
        "Integración de la Gestión Ambiental a esquemas.",
        "Integramos herramientas de sostenibilidad y certificación (como Sistema B, LEED).",
        "Diseñamos e implementamos estrategias de sostenibilidad con enfoque de triple impacto, adaptadas a cada realidad sectorial."
      ],
      logo: "/logoambiental.png"
    },
    {
      title: "RECURSOS NATURALES Y PAISAJISMO",
      items: [
        "Mapeo de recursos naturales y del paisaje para identificar riesgos y oportunidades (suelo, agua, biodiversidad, cobertura vegetal).",
        "Recuperación de áreas degradadas.",
        "Diseño y ejecución de planes de revegetación con especies nativas.",
        "Control y manejo de especies invasoras en predios empresariales.",
        "Tratamiento de aguas grises y negras con Fitorremediación.",
        "Paisajismo sostenible en predios, plantas industriales o emprendimientos turísticos/inmobiliarios.",
        "Programas participativos de sensibilización sobre biodiversidad y paisaje dentro de la empresa.",
        "Generación de material visual de los proyectos implementados, para mejorar la imagen ambiental corporativa."
      ],
      logo: "/logoambiental.png"
    },
    {
      title: "SEGURIDAD Y SALUD EN EL TRABAJO",
      items: [
        "Elaboración de Plan de Seguridad y Plan de Prevención de Riesgos Laborales.",
        "Estudio e implementación de acciones de intervención según desviaciones indicadas por inspectores de entes reguladores.",
        "Cumplimiento Normativo (habilitaciones, planes y procedimientos, entre otros).",
        "Gestión de Contratistas.",
        "Inspecciones de Seguridad.",
        "Asesoramiento en la compra de equipos de protección personal y vestimenta de trabajo."
      ],
      logo: "/logoseguridad.png"
    },
    {
      title: "FORMACIÓN - CAPACITACIÓN",
      items: [
        "Formación para desarrollar competencias que preparan a la persona para enfrentar diversos contextos.",
        "Talleres de Capacitación para adquirir o actualizar conocimientos concretos para desempeñar una tarea o función determinada.",
        "Planes de Formación - Capacitación adaptados a la realidad y objetivos de la organización.",
        "Actividades presenciales o virtuales sincrónica ó asincrónicas.",
        "Plataforma de aprendizaje para cursos y evaluaciones abiertos a la disponibilidad de tiempo del usuario."
      ],
      logo: "/logocalidad.png"
    },
    {
      title: "AUDITORÍAS INTERNAS",
      items: [
        "Auditoría como proceso de aprendizaje, promoviendo una cultura de gestión consciente y participativa.",
        "Más de 30 años de experiencia nos permiten ofrecer una visión estratégica sólida en gestión institucional.",
        "Comprometidos con la ética, la confidencialidad y la valoración genuina de los saberes organizacionales en cada proceso de auditoría."
      ],
      logo: "/logocalidad.png"
    }
  ];

  return (
    <section id="servicios" className="section section-gray section-with-bg section-bg-services">
      <div className="container">
        <h2>SERVICIOS</h2>
        
        <p>
          Consultoría especializada en la transformación de sistemas de gestión, en plataformas sostenibles, capaces de generar la mejora continua en todos los niveles de la organización.
        </p>

        <div className="grid grid-2 grid-3-mobile servicios-grid">
          {services.map((service, index) => (
            <div key={index} className="card servicio-card servicio-accordion">
              <button
                className="servicio-header"
                onClick={() => toggleService(index)}
                aria-expanded={openIndex === index}
              >
                <div className="servicio-card-image-mobile">
                  <img 
                    src={service.logo} 
                    alt={`${service.title} - Isologo GRS`}
                    className="servicio-isologo-mobile"
                  />
                </div>
                <div className="servicio-title-wrapper">
                  <h3>{service.title}</h3>
                </div>
                <span className="servicio-toggle-icon">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div className={`servicio-content ${openIndex === index ? 'open' : ''}`}>
                <div className="servicio-card-image-desktop">
                  <img 
                    src={service.logo} 
                    alt={`${service.title} - Isologo GRS`}
                    className="servicio-isologo"
                  />
                </div>
                <h3 className="servicio-title-desktop">{service.title}</h3>
                <ul>
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}