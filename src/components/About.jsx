import React from 'react';
import { Modal, Row, Col, Card } from 'react-bootstrap';

const About = ({ show, onHide }) => {
  const benefits = [
    'Método de aprendizaje personalizado',
    'Horarios flexibles',
    'Sesiones interactivas online',
    'Seguimiento del progreso',
    'Materiales de práctica incluidos'
  ];

  const rates = [
    { type: 'Clase Individual', price: '$20.000', period: 'por clase' },
    { type: 'Paquete Mensual', price: '$70.000', period: 'por mes' },
    { type: 'Paquete Anual', price: '$800.000', period: 'por año' }
  ];

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Sobre Natalia Espinosa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col lg={6} className="mb-4">
            <div className="biography">
              <h3 className="mb-3">Biografía Profesional</h3>
              <p>
                Con más de 8 años de experiencia en la enseñanza de matemáticas, Natalia Espinosa ha ayudado a decenas de estudiantes a alcanzar sus metas académicas. 
                Especializada en matemáticas de enseñanza media y preparación para la prueba PAES, Natalia combina métodos tradicionales con técnicas modernas de aprendizaje online, 
                adaptándose a las necesidades de cada estudiante.
              </p>
            </div>
            <div className="benefits mt-4">
              <h3 className="mb-3">Beneficios de Mis Clases</h3>
              <ul className="list-unstyled">
                {benefits.map((benefit, index) => (
                  <li key={index} className="mb-2">✓ {benefit}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="mb-3">Tarifas</h3>
            <Row>
              {rates.map((rate, index) => (
                <Col md={12} key={index} className="mb-3">
                  <Card className="h-100 text-center">
                    <Card.Body>
                      <Card.Title>{rate.type}</Card.Title>
                      <div className="price-tag my-3">
                        <h2>{rate.price}</h2>
                        <small className="text-muted">{rate.period}</small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default About;
