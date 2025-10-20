'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <button
            onClick={() => scrollToSection('hero')}
            className="logo"
          >
            GRS – Gestión de Recursos Sustentables
          </button>

          <nav className="nav">
            <button
              onClick={() => scrollToSection('nosotros')}
            >
              NOSOTROS
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
            >
              SERVICIOS
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
            >
              CONTACTO
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ display: 'none' }}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}