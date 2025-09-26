import React from "react";
import "../styles/contact.css";

/* Íconos (omitidos por brevedad); reutiliza IconLocation, IconPhone, IconMail del componente anterior */

export const ContactWithMap: React.FC = () => {
  const MAP_SRC =
    "https://www.google.com/maps?q=Calle%20Mesa%20De%20La%20Virgen%20102%2C%20Le%C3%B3n%20de%20los%20Aldama%2C%20Guanajuato%2C%20Mexico&output=embed"; // Dirección desde la imagen

  return (
    <main className="contact-layout" aria-label="Contacto y ubicación">
      {/* Columna izquierda: Contact Card */}
      <section
        className="contact-card"
        aria-labelledby="contact-title"
        id="contact"
      >
        <div className="contact-content">
          <h1 id="contact-title" className="company">
            INREDTELECOM
          </h1>
          <p className="subtitle">Atención Ing. David Castro</p>

          <ul className="info">
            <li>
              <span className="icon">{/* <IconLocation/> */}</span>
              <div>
                <div className="label">Dirección</div>
                <div className="value">Calle Mesa De La Virgen 102</div>
                <div className="value">
                  León de los Aldama, Guanajuato, Mexico
                </div>
              </div>
            </li>
            <li>
              <span className="icon">{/* <IconPhone/> */}</span>
              <div>
                <div className="label">Teléfono</div>
                <a className="value link" href="tel:+524779303110">
                  477 930 31 10
                </a>
              </div>
            </li>
            <li>
              <span className="icon">{/* <IconPhone/> */}</span>
              <div>
                <div className="label">Celular</div>
                <a className="value link" href="tel:+524491108665">
                  449 110 86 65
                </a>
              </div>
            </li>
            <li>
              <span className="icon">{/* <IconMail/> */}</span>
              <div>
                <div className="label">E‑mail</div>
                <a className="value link" href="mailto:inredtelecom@gmail.com">
                  inredtelecom@gmail.com
                </a>
              </div>
            </li>
          </ul>

          <div className="hours">
            <span className="hours-dot" aria-hidden />
            <span className="hours-text">Abre hoy 09:00 a.m. – 08:00 p.m.</span>
          </div>
        </div>
      </section>

      {/* Columna derecha: Mapa */}
      <aside className="map-card" aria-labelledby="map-title">
        <div className="map-header">
          <h2 id="map-title">Ubicación</h2>
          <a
            className="map-link"
            href="https://www.google.com/maps/place/Calle+Mesa+De+La+Virgen+102,+Le%C3%B3n+de+los+Aldama,+Guanajuato,+Mexico"
            target="_blank"
            rel="noreferrer"
          >
            Ver en Maps
          </a>
        </div>
        <div className="map-embed">
          <iframe
            title="Mapa INREDTELECOM"
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="map-caption">
          Calle Mesa De La Virgen 102, León de los Aldama, Guanajuato, Mexico
        </p>
      </aside>
    </main>
  );
};

export default ContactWithMap;
