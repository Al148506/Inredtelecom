import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/header.css";

export default function AppHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    // Debounce para mejor performance
    let debounceTimer: ReturnType<typeof setTimeout>;
    
    const handleSectionChange = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const sections = ["home", "about", "services", "works", "testimonials", "contact"];
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Configuración especial para el final del documento
        if (scrollPosition + windowHeight >= documentHeight - 50) {
          setActiveSection("contact");
          return;
        }

        // Configuración con hysteresis para evitar parpadeos
        
        let bestSection = activeSection; // Mantener sección actual por defecto
        let bestScore = -Infinity;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;
            
            // Calcular distancia del centro de la sección al centro de la pantalla
            const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
            
            // Penalizar secciones que están muy lejos del viewport
            if (rect.bottom < 0 || rect.top > windowHeight) continue;
            
            // Calcular score basado en visibilidad y posición central
            const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
            const visibilityRatio = visibleHeight / rect.height;
            
            // Score que favorece secciones más visibles y centradas
            const score = (visibilityRatio * 100) - (distanceFromCenter / 10);
            
            // Hysteresis: dar ventaja a la sección actual
            const finalScore = section === activeSection ? score + 20 : score;
            
            if (finalScore > bestScore && visibilityRatio > 0.3) {
              bestScore = finalScore;
              bestSection = section;
            }
          }
        }

        // Solo cambiar si hay una diferencia significativa
        if (bestSection !== activeSection && bestScore > 30) {
          setActiveSection(bestSection);
        }
      }, 50); // Debounce de 50ms
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleSectionChange, { passive: true });
    
    // Llamar una vez al montar para establecer el estado inicial
    handleScroll();
    handleSectionChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionChange);
      clearTimeout(debounceTimer);
    };
  }, [activeSection]); // Añadir activeSection como dependencia

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start" 
      });
    }
  };

  return (
    <div id="header" className={scrolled ? "scrolled" : ""}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            INREDTELECOM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link 
                href="#home"
                className={activeSection === "home" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("home");
                }}
              >
                Inicio
              </Nav.Link>
              <Nav.Link 
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("about");
                }}
              >
                Acerca de
              </Nav.Link>
              <Nav.Link 
                href="#services"
                className={activeSection === "services" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("services");
                }}
              >
                Servicios
              </Nav.Link>
              <Nav.Link 
                href="#works"
                className={activeSection === "works" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("works");
                }}
              >
                Trabajos
              </Nav.Link>
              <Nav.Link 
                href="#testimonials"
                className={activeSection === "testimonials" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("testimonials");
                }}
              >
                Testimonios
              </Nav.Link>
              <Nav.Link 
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
              >
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}