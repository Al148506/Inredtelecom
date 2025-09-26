import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../styles/testimonials.css";
import img1 from "../assets/images/Recomendaciones/testimonioInterMg.webp";
import img2 from "../assets/images/Recomendaciones/testimonioNissan.webp";
import img3 from "../assets/images/Recomendaciones/testimonioUPG.webp";
import logo1 from "../assets/images/Recomendaciones/logointermg.jpeg";
import logo2 from "../assets/images/Recomendaciones/logonissa.jpg";
import logo3 from "../assets/images/Recomendaciones/logoupg.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export type Testimonial = {
  id: number;
  company: string;
  person: string;
  role?: string;
  text: string;
  date?: string;
  logo?: string; // company logo path (optional)
  rating?: number; // optional
  rec?: {
    // recommendation card (image or pdf)
    src: string; // path to image or pdf
    thumb?: string; // optional thumbnail path (if omitted, use src)
    title?: string; // short title visible under testimonio
    fileName?: string; // filename for download (optional)
    type?: "image" | "pdf"; // type hint (defaults to image if absent)
  };
};

type Props = {
  testimonials?: Testimonial[];
  interval?: number | null;
  controls?: boolean;
  indicators?: boolean;
};

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    company: "INTER M.G",
    person: "Ing. Martín Cuellar Reyna",
    role: "Jefe de Sistemas y Comunicaciones",
    text: "Ha trabajado desde hace 3 años como proveedor de servicios de sistemas, departamento del cual soy responsable y durante estos años ha demostrado una excelente actitud de compromiso, responsabilidad y calidad. Estoy seguro que de obtener la calificación que busca le será muy útil en su trabajo y beneficioso para su empresa.",
    date: "Aprox. 2024",
    logo: logo1,
    rec: {
      src: img1,
      thumb: img1,
      title: "Carta de Recomendación - INREDTELECOM",
      fileName: "Rec_ComercialLopez.jpg",
      type: "image",
    },
  },
  {
    id: 2,
    company: "Nissan Mexicana S.A. de C.V.",
    person: "Ing. Eric Octavio Castilla Sanchez",
    role: "SCM - Scheduling / Sequencer Specialist Ags.Plant",
    text: "Quiero expresar mi entera satisfacción al trabajo realizado como empresa externa a Nissan durante 6 años aproximadamente, durante los cuales ha demostrado una excelente calidad, puntualidad, responsabilidad así como una buena actitud de trabajo y compañerismo. Estoy seguro que ha cumplido con las normas y requisitos de nuestra empresa así como de las áreas en donde ha realizado los trabajos.",
    date: "Jun 2011",
    logo: logo2,
    rec: {
      src: img2,
      thumb: img2,
      title: "Carta - Nissan Mexicana",
      fileName: "Rec_FabricaSI.pdf",
      type: "pdf",
    },
  },
  {
    id: 3,
    company: "Universidad Politécnica de Guanajuato",
    person: "Ing. Rodrigo Longoria Magallanes",
    role: "Unidad de sistemas",
    text: "Expreso mi entera satisfacción, en relación a las referencias solicitadas de los trabajos desempeñados en fibra óptica, redes Voz/Datos y enlaces de microondas, como empresa externa a este instituto universitario desde hace 5 años, durante los cuales ha demostrado experiencia, responsabilidad, calidad y compromiso.",
    date: "Aprox. 2022",
    logo: logo3,
    rec: {
      src: img3,
      thumb: img3,
      title: "Carta - Universidad Politécnica de Guadalajara",
      fileName: "Rec_FabricaSI.pdf",
      type: "pdf",
    },
  },
];

export default function AppTestimonials({
  testimonials = defaultTestimonials,
  interval = 7000,
  indicators = true,
}: Props) {
  const [showRecModal, setShowRecModal] = useState(false);
  const [recModalSrc, setRecModalSrc] = useState<string | null>(null);
  const [recModalType, setRecModalType] = useState<"image" | "pdf">("image");
  const [recModalTitle, setRecModalTitle] = useState<string>("");

  const openRec = (rec: NonNullable<Testimonial["rec"]>) => {
    setRecModalSrc(rec.src);
    setRecModalTitle(rec.title ?? "");
    setRecModalType((rec.type ?? "image") === "pdf" ? "pdf" : "image");
    setShowRecModal(true);
  };

  const closeRec = () => {
    setShowRecModal(false);
    setRecModalSrc(null);
  };

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="testimonials-section block"
      aria-label="Testimonios de clientes"
    >
      <Container>
        <div className="testimonials-header">
          <h2 className="title">Testimonios</h2>
          <p className="subtitle">Lo que dicen nuestros clientes</p>
          <div className="accent" aria-hidden="true" />
        </div>

        <Carousel
          controls={true}
          indicators={indicators}
          interval={interval ?? null}
          pause="hover"
          className="testimonials-carousel"
          prevIcon={
            <span
              className="carousel-control-icon custom-prev"
              aria-hidden="true"
            >
              <FaChevronLeft />
            </span>
          }
          nextIcon={
            <span
              className="carousel-control-icon custom-next"
              aria-hidden="true"
            >
              <FaChevronRight />
            </span>
          }
        >
          {testimonials.map((t) => (
            <Carousel.Item
              key={t.id}
              className="testimonials-item"
              aria-roledescription="slide"
            >
              <div className="carousel-card-wrapper">
                <Card className="testimonial-card">
                  <Card.Body>
                    <div className="testimonial-top">
                      <div className="logo-wrapper" aria-hidden={!t.logo}>
                        {t.logo ? (
                          <img
                            src={t.logo}
                            alt={`${t.company} logo`}
                            loading="lazy"
                          />
                        ) : (
                          <div className="logo-placeholder">
                            {t.company
                              .split(" ")
                              .slice(0, 2)
                              .map((s) => s[0])
                              .join("")}
                          </div>
                        )}
                      </div>

                      <div className="testimonial-meta">
                        <h3 className="person">{t.person}</h3>
                        <div className="role-company">
                          <span className="role">{t.role}</span>
                          {t.role && <span className="sep">•</span>}
                          <span className="company">{t.company}</span>
                        </div>
                      </div>
                    </div>

                    <blockquote className="testimonial-text" cite={t.company}>
                      “{t.text}”
                    </blockquote>

                    <div className="testimonial-footer">
                      <div>
                        {t.date && (
                          <small className="date text-muted">{t.date}</small>
                        )}
                      </div>

                      <div>
                        {typeof t.rating === "number" && (
                          <div className="rating" aria-hidden="true">
                            {"★".repeat(
                              Math.max(0, Math.min(5, Math.round(t.rating)))
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Recommendation card (if exists) */}
                    {t.rec && (
                      <div className="recommendation-card" aria-hidden={false}>
                        <div className="rec-thumb-wrapper">
                          <img
                            src={t.rec.thumb ?? t.rec.src}
                            alt={
                              t.rec.title ??
                              `Carta de recomendación - ${t.company}`
                            }
                            loading="lazy"
                          />
                        </div>

                        <div className="rec-meta">
                          <div className="rec-title">
                            {t.rec.title ?? "Carta de recomendación"}
                          </div>
                          <div className="rec-actions">
                            <Button
                              variant="outline-primary"
                              size="sm"
                              onClick={() => openRec(t.rec!)}
                              aria-label={`Ver carta de ${t.company}`}
                            >
                              Ver
                            </Button>{" "}
                            <a
                              href={t.rec.src}
                              download={t.rec.fileName ?? undefined}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline-secondary btn-sm"
                              aria-label={`Descargar carta de ${t.company}`}
                              style={{ marginLeft: 8 }}
                            >
                              Descargar
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Modal para ver carta (imagen o PDF) */}
      <Modal show={showRecModal} onHide={closeRec} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{recModalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center" style={{ minHeight: 320 }}>
          {recModalSrc && recModalType === "image" && (
            <img
              src={recModalSrc}
              alt={recModalTitle}
              style={{
                maxWidth: "100%",
                maxHeight: "75vh",
                objectFit: "contain",
              }}
              loading="lazy"
            />
          )}

          {recModalSrc && recModalType === "pdf" && (
            // Abrir PDF en iframe para visualización; alternativa: window.open(recModalSrc)
            <iframe
              src={recModalSrc}
              title={recModalTitle}
              style={{ width: "100%", height: "75vh", border: "none" }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeRec}>
            Cerrar
          </Button>
          {recModalSrc && (
            <a
              href={recModalSrc}
              download
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar
            </a>
          )}
        </Modal.Footer>
      </Modal>
    </section>
  );
}
