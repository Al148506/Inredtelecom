import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/header.css";
export default function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">INREDTELECOM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#acercade">Acerca de</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#trabajos">Trabajos</Nav.Link>
            <Nav.Link href="#equipo">Equipo</Nav.Link>
            <Nav.Link href="#testimonios">Testimonios</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
