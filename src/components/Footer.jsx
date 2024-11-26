import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Profesora Natalia</h5>
            <p className="mb-1">Email: profesora.natalia@example.com</p>
            <p className="mb-1">Teléfono: +56 9 8765 4321</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0 text-center">
            <div className="social-links">
              <Button variant="outline-light" className="me-2" href="https://wa.me/987654321">
                <FaWhatsapp aria-label="Contactar por WhatsApp" />
              </Button>
              <Button variant="outline-light" className="me-2" href="mailto:profesora.natalia@example.com">
                <FaEnvelope aria-label="Enviar correo" />
              </Button>
              <Button variant="outline-light" className="me-2" href="https://www.linkedin.com/in/profesora-natalia">
                <FaLinkedin aria-label="LinkedIn de Profesora Natalia" />
              </Button>
              <Button variant="outline-light" href="https://www.youtube.com/channel/profesora-natalia">
                <FaYoutube aria-label="Canal de YouTube de Profesora Natalia" />
              </Button>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <p className="mb-1">
              <a href="/privacy-policy" className="text-light text-decoration-none">Política de Privacidad</a>
            </p>
            <p className="mb-0">
              <a href="/terms-of-service" className="text-light text-decoration-none">Términos de Servicio</a>
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} Profesora Natalia. Todos los derechos reservados.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
