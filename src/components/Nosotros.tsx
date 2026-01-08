'use client';

import { useState, useEffect, useRef } from 'react';

export default function Nosotros() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const metrics = [
    { value: 50, label: "proyectos de Certificación ISO" },
    { value: 100, label: "auditorías de SGI" },
    { value: 500, label: "auditorías ambientales" },
    { value: 40, label: "sectores de experiencia" },
  ];

  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const hasAnimatedRef = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            metrics.forEach((metric, index) => {
              const duration = 2000;
              const steps = 60;
              const increment = metric.value / steps;
              let current = 0;
              const timer = setInterval(() => {
                current += increment;
                if (current >= metric.value) {
                  current = metric.value;
                  clearInterval(timer);
                }
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(current);
                  return newCounters;
                });
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="nosotros" className="section section-white section-with-bg section-bg-stones">
      <div className="container">
        <h2 className="nosotros-title">NOSOTROS</h2>
        
        <p className="nosotros-text">
          Somos una consultora creada a partir de años de experiencia en la implementación y auditoría de sistemas de gestión integrados: calidad, medio ambiente y seguridad. La dirección estratégica está a cargo de <a href="https://www.linkedin.com/in/alejandra-pacheco25/" target="_blank" rel="noopener noreferrer" className="linkedin-link">Alejandra Pacheco</a> y <a href="https://www.linkedin.com/in/carmen-delfino-88a5a122/" target="_blank" rel="noopener noreferrer" className="linkedin-link">Carmen Delfino</a>, con amplia trayectoria que comparten la visión de aportar soluciones a medida con impacto sostenible. Nos acompañan equipos de trabajo, integrando diferentes miradas y saberes, cuando hay que diseñar respuestas más completas y efectivas a los desafíos de cada cliente.
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
                +{counters[index]}
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