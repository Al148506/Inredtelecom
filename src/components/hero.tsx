import Carousel from "react-bootstrap/Carousel";
import heroImage from "../assets/images/INREDTELECOM/hero.webp";
import heroImage2 from "../assets/images/INREDTELECOM/hero3.webp";
import heroImage3 from "../assets/images/INREDTELECOM/hero2.webp";
import "../styles/hero.css";

const heroData = [
  {
    id: 1,
    title: "Conectividad sin límites",
    image: heroImage,
    description:
      "Antenas y enlaces inalámbricos que garantizan cobertura estable para tu negocio.",
    ctaText: "Solicitar Cotización ",
    link: "https://wa.me/524491108665?text=Hola%20Inredtelecom%2C%20quiero%20una%20cotizacion",
  },
  {
    id: 2,
    title: "Fibra óptica de alta velocidad",
    image: heroImage2, // usa otra imagen distinta si tienes
    description:
      "Instalación y mantenimiento con la máxima calidad para conexiones rápidas y seguras.",
    ctaText: "Más Información ",
    link: "https://wa.me/524491108665?text=Me%20interesa%20informacion%20sobre%20fibra%20optica",
  },
  {
    id: 3,
    title: "Protege lo que más importa",
    image: heroImage3,
    description:
      "Cámaras de videovigilancia y soluciones de seguridad adaptadas a tus necesidades.",
    ctaText: "Cotizar CCTV ",
    link: "https://wa.me/524491108665?text=Quiero%20una%20cotizacion%20de%20CCTV",
  },
];

export default function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide " + hero.id}
              />
              <Carousel.Caption>
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  {hero.ctaText}
                  <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
