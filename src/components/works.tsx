// src/components/works.tsx
import React, { useCallback, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import type { JSX } from "react";
import "../styles/works.css";

/*
  IMPORTA TUS IMÁGENES AQUÍ (8 * N páginas).
  Aquí pongo ejemplos img1..img24. Reemplázalos por tus assets reales.
*/
import img1 from "../assets/images/Antenas/antena mimosa.webp";
import img2 from "../assets/images/Antenas/Antenas.webp";
import img3 from "../assets/images/Antenas/panelsolar.webp";
import img4 from "../assets/images/Antenas/cableado.webp";
import img5 from "../assets/images/Antenas/cableado.webp";
import img6 from "../assets/images/Antenas/cableado2.webp";
import img7 from "../assets/images/Antenas/datacenter.webp";
import img8 from "../assets/images/Antenas/datacenter1.webp";
import img9 from "../assets/images/EquiposComputo/cableado.webp";
import img10 from "../assets/images/EquiposComputo/camaras1.webp";
import img11 from "../assets/images/EquiposComputo/monitorcamara.webp";
import img12 from "../assets/images/EquiposComputo/mentenimiento.webp";
import img13 from "../assets/images/EquiposComputo/mantenimiento2.webp";
import img14 from "../assets/images/EquiposComputo/rack.webp";
import img15 from "../assets/images/EquiposComputo/rack2.webp";
import img16 from "../assets/images/EquiposComputo/walmart.webp";
import img17 from "../assets/images/InstalacioneEmpresariales/cableadored.webp";
import img18 from "../assets/images/InstalacioneEmpresariales/cableadored2.webp";
import img19 from "../assets/images/InstalacioneEmpresariales/cableadoredin.webp";
import img20 from "../assets/images/InstalacioneEmpresariales/conexiones.webp";
import img21 from "../assets/images/InstalacioneEmpresariales/instalacionelectrica.webp";
import img22 from "../assets/images/InstalacioneEmpresariales/rack1.webp";
import img23 from "../assets/images/InstalacioneEmpresariales/rack2.webp";
import img24 from "../assets/images/InstalacioneEmpresariales/rack3.webp";
import img25 from "../assets/images/VentaProductos/cable.webp";
import img26 from "../assets/images/VentaProductos/camara.webp";
import img27 from "../assets/images/VentaProductos/contenedor.webp";
import img28 from "../assets/images/VentaProductos/fierros.webp";;
import img29 from "../assets/images/VentaProductos/laptop.webp";
import img30 from "../assets/images/VentaProductos/pararrayos.webp";
import img31 from "../assets/images/VentaProductos/rack.webp";
import img32 from "../assets/images/VentaProductos/switch.webp";

// Datos de las páginas: subtítulo y 8 imágenes por página
const pagesData = [
  {
    id: 1,
    subtitle:
      "Instalaciones de Antenas, Torres, Paneles Solares, Pararrayos, Tierras Físicas, Cableados, Rotulación e Identificación",
    images: [img1, img2, img3, img4, img5, img6, img7, img8],
  },
  {
    id: 2,
    subtitle:
      "Mantenimientos a Equipo de Cómputo, CCTV y Organización de Cableado de RED VOZ/DATOS y FIBRA ÓPTICA en RACK y GABINETES",
    images: [img9, img10, img11, img12, img13, img14, img15, img16],
  },
  {
    id: 3,
    subtitle:
      "Instalaciones Empresariales en Redes, Voz, Datos, Enlaces Inalámbricos y Conectividad WiFi en Oficinas",
    images: [img17, img18, img19, img20, img21, img22, img23, img24],
  },
  {
    id: 4,
    subtitle:
      "Venta De Productos, Accesorios, Torres, Antenas y Demas Suministros En General",
    images: [img25, img26, img27, img28, img29, img30, img31, img32],
  },
];

function AppWorks(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalIndex, setModalIndex] = useState<number>(0);

  const pageIndex = Math.max(
    0,
    Math.min(pagesData.length - 1, currentPage - 1)
  );
  const page = pagesData[pageIndex];

  const openModal = useCallback((idx: number) => {
    setModalIndex(idx);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => setShowModal(false), []);
  const showPrev = useCallback(
    () =>
      setModalIndex((i) => (i - 1 + page.images.length) % page.images.length),
    [page.images.length]
  );
  const showNext = useCallback(
    () => setModalIndex((i) => (i + 1) % page.images.length),
    [page.images.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!showModal) return;
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showModal, showPrev, showNext, closeModal]);

  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Galería de nuestros trabajos</h2>
        </div>

        <div className="page-subtitle-wrapper">
          <h4 className="page-subtitle">{page.subtitle}</h4>
        </div>

        <Row className="portfoliolist">
          {page.images.map((imgSrc, idx) => (
            <Col sm={6} md={4} lg={3} key={idx} className="mb-2">
              <div className="portfolio-wrapper">
                <button
                  onClick={() => openModal(idx)}
                  aria-label={`Abrir imagen ${
                    idx + 1
                  } de la página ${currentPage}`}
                  style={{
                    border: "none",
                    background: "transparent",
                    padding: 0,
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <div className="image-wrapper">
                    <Image
                      src={imgSrc}
                      alt={`Página ${currentPage} - imagen ${idx + 1}`}
                      fluid
                      rounded
                      loading="lazy"
                    />
                  </div>
                </button>
              </div>
            </Col>
          ))}
        </Row>

        <div className="d-flex justify-content-center mt-3">
          <Pagination>
            <Pagination.Prev
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            />
            {pagesData.map((pg) => (
              <Pagination.Item
                key={pg.id}
                active={pg.id === currentPage}
                onClick={() => setCurrentPage(pg.id)}
              >
                {pg.id}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() =>
                setCurrentPage((p) => Math.min(pagesData.length, p + 1))
              }
              disabled={currentPage === pagesData.length}
            />
          </Pagination>
        </div>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={closeModal} centered size="lg" keyboard>
        <Modal.Header closeButton>
          <Modal.Title>
            Página {currentPage} — Imagen {modalIndex + 1} de{" "}
            {page.images.length}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={page.images[modalIndex]}
            alt={`Página ${currentPage} imagen ${modalIndex + 1}`}
            style={{
              maxWidth: "100%",
              maxHeight: "75vh",
              objectFit: "contain",
              borderRadius: 8,
            }}
            loading="lazy"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={showPrev}>
            ←
          </Button>
          <Button variant="outline-secondary" onClick={showNext}>
            →
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default AppWorks;
