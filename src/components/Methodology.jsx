import React from 'react';
import { Modal, Row, Col, Card } from 'react-bootstrap';
import { FaVideo, FaBook, FaChartLine, FaLaptop } from 'react-icons/fa';

const Methodology = ({ show, onHide }) => {
  const methods = [
    {
      icon: <FaVideo className="display-4 mb-3" />,
      title: 'Clases Online Interactivas',
      description: 'Sesiones en vivo a través de Zoom o Google Meet, con interacción en tiempo real y herramientas dinámicas.'
    },
    {
      icon: <FaBook className="display-4 mb-3" />,
      title: 'Materiales Complejos y Prácticos',
      description: 'Acceso a recursos digitales, ejercicios prácticos y guías de estudio diseñadas para asegurar el aprendizaje.'
    },
    {
      icon: <FaChartLine className="display-4 mb-3" />,
      title: 'Seguimiento Personalizado',
      description: 'Evaluaciones regulares y reportes detallados para medir tu progreso y ajustar las clases a tus necesidades.'
    },
    {
      icon: <FaLaptop className="display-4 mb-3" />,
      title: 'Flexibilidad en la Plataforma',
      description: 'Clases disponibles en tu plataforma preferida y acceso fácil a todos los materiales necesarios.'
    }
  ];

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Metodología de Enseñanza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {methods.map((method, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="h-100 text-center p-3">
                <Card.Body>
                  {method.icon}
                  <Card.Title>{method.title}</Card.Title>
                  <Card.Text>{method.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default Methodology;
