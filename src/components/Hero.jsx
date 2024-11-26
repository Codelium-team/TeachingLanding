import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section py-5">
      <Container>
        <div className="hero-content align-items-center">
          <h1 className="display-4 mb-3">
            ¡Mejora tus notas de matemáticas con clases personalizadas y online!
          </h1>
          <p className="lead mb-4">
            Soy Natalia Espinosa, profesora de matemáticas con más de 8 años de
            experiencia. Juntos podemos lograr tus metas académicas, ya sea
            mejorar tus notas, prepararte para la PAES, o reforzar conceptos
            difíciles.
          </p>
          <div className="social-links mb-4">
            <Button
              variant="success"
              className="me-2"
              href="https://wa.me/1234567890"
            >
              <FaWhatsapp /> ¡Comienza hoy con una clase gratuita!
            </Button>
            <Button variant="outline-primary" className="me-2">
              <FaLinkedin />
            </Button>
            <Button variant="outline-danger">
              <FaYoutube />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
