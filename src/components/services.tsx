import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/services.css";
const servicesData = [
  {
    id: 1,
    icon: "fas fa-bolt",
    title: "Pararrayos y Tierras Físicas",
    description:
      "Instalaciones de sistemas de protección contra descargas atmosféricas y puestas a tierra para hogares, oficinas e instalaciones industriales.",
  },
  {
    id: 2,
    icon: "fas fa-wifi",
    title: "Enlaces Inalámbricos y Antenas RF",
    description:
      "Configuración e instalación de enlaces inalámbricos, antenas de radiofrecuencia y amplificadores de señal celular para casa, oficina y edificios corporativos.",
  },
  {
    id: 3,
    icon: "fas fa-broadcast-tower",
    title: "Torres y Radiocomunicación",
    description:
      "Instalación y mantenimiento de torres arriostradas y auto soportadas, e instalación de antenas VHF/UHF para radiocomunicación confiable.",
  },
  {
    id: 4,
    icon: "fas fa-solar-panel",
    title: "Fotovoltaico y Paneles Solares",
    description:
      "Instalación de equipo fotovoltaico y paneles solares con integración eléctrica segura y eficiente.",
  },
  {
    id: 5,
    icon: "fas fa-plug", // si no existe en tu kit, usa "fas fa-plug" o "fas fa-lightbulb"
    title: "Fibra Óptica",
    description:
      "Enlaces, instalaciones, conectorización y empalmes de fibra óptica para redes de alto desempeño.",
  },
  {
    id: 6,
    icon: "fas fa-network-wired",
    title: "Redes, Voz, Datos y Wi‑Fi",
    description:
      "Implementaciones empresariales y profesionales de cableado y conectividad interior (LAN/WLAN) en oficinas.",
  },
  {
    id: 7,
    icon: "fas fa-project-diagram",
    title: "Canalizaciones y Cableado",
    description:
      "Instalaciones de canalizaciones y cableado estructurado (Panduit / Tyton) con organización y etiquetado.",
  },
  {
    id: 8,
    icon: "fas fa-video",
    title: "CCTV y SITE",
    description:
      "Instalación, configuración, reparación, mantenimiento preventivo y correctivo de sistemas CCTV y cuartos de comunicación (SITE).",
  },
  {
    id: 9,
    icon: "fas fa-tools",
    title: "Venta e Implementación de Equipos",
    description:
      "Venta, instalación y configuración de switches Cisco; venta de equipo de cómputo; cámaras y equipos de seguridad para CCTV; y antenas de microondas (Ubiquiti, LigoWave, Guest Internet).",
  },
];

export default function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nuestros Servicios</h2>
          <div className="subtitle">Soluciones a tu alcance</div>
          <div className="accent" aria-hidden="true" />
        </div>

        <Row>
          {servicesData.map((s) => (
            <Col key={s.id} md={6} lg={4} className="col">
              <article className="holder" tabIndex={0}>
                <div className="icon">
                  <i className={s.icon} aria-hidden="true" />
                </div>
                <h3 className="title">{s.title}</h3>
                <p className="description">{s.description}</p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
