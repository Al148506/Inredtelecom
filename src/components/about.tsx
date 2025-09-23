// src/components/AppAbout.tsx
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../styles/abouts.css";
import img1 from "../assets/images/INREDTELECOM/ingruizcastro.png";

// inside component file
const features = [
  {
    id: 1,
    title: "Misión",
    text: "Proveer tecnología y servicios en sistemas, redes y telecomunicaciones que permitan a su empresa operar con eficiencia hoy y estar preparada para el futuro.",
    icon: "fa-bullseye",
  },
  {
    id: 2,
    title: "Visión",
    text: "Ser el aliado técnico que optimice procesos empresariales mediante soluciones de conectividad.",
    icon: "fa-eye",
  },
  {
    id: 3,
    title: "Valores",
    text: "Excelencia, confianza, credibilidad y honestidad.",
    icon: "fa-handshake",
  },
  {
    id: 4,
    title: "Servicios",
    text: "Cableado estructurado, fibra óptica, enlaces inalámbricos, torres, CCTV, Wi-Fi, VHF/UHF.",
    icon: "fa-tools",
  },
  {
    id: 5,
    title: "Experiencia",
    text: "Técnicos certificados y respaldo de fabricantes.",
    icon: "fa-certificate",
  },
];
export default function AppAbout() {
  return (
    <section
      id="about"
      className="block about-block"
      aria-labelledby="about-title"
    >
      <Container fluid className="px-4">
        <div className="about-header">
          <div className="header-content">
            <h2 id="about-title" className="section-title">
              Acerca de <span className="brand-highlight">INREDTELECOM</span>
            </h2>
            <p className="section-subtitle">
              INREDTELECOM, fundada en 1999, brinda soluciones en redes y
              telecomunicaciones para empresas de todos los tamaños, con
              ingenieros certificados en análisis, diseño, instalación y
              mantenimiento de sistemas de conectividad.
            </p>
          </div>
        </div>

        <Row className="align-items-center">
          <Col md={6} className="about-image-col">
            <Image
              src={img1}
              alt="Instalación de telecomunicaciones INREDTELECOM"
              rounded
              fluid
            />
          </Col>

          <Col md={6} className="about-content-col">
            <div className="features-grid">
              {features.map((f) => (
                <article
                  key={f.id}
                  className="feature-card"
                  role="article"
                  aria-labelledby={`feature-${f.id}`}
                >
                  <div className="feature-header">
                    <div className="feature-icon" aria-hidden="true">
                      <i className={`fas ${f.icon}`}></i>
                    </div>
                    <h3 id={`feature-${f.id}`} className="feature-title">
                      {f.title}
                    </h3>
                  </div>
                  <p className="feature-content">{f.text}</p>
                </article>
              ))}
            </div>

            <div className="signature-section">
              <div className="signature-line"></div>
              <div className="signature-content">
                <p className="signature-text">
                  <strong>Atentamente:</strong>
                  <br />
                  <span className="director-name">
                    Ing. David Mariano Castro Ruiz
                  </span>
                  <br />
                  <span className="director-title">Director Operativo</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
