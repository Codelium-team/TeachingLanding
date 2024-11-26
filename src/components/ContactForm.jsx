import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const ContactForm = ({ show, onHide }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Agenda tu Clase</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Tu Nombre" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Tu Correo Electrónico" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="tel" placeholder="Tu Teléfono" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select>
              <option>Selecciona el Tipo de Clase</option>
              <option>Clase Individual</option>
              <option>Paquete Mensual</option>
              <option>Paquete Anual</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Horario Preferido" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Comentarios Adicionales" />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Enviar Solicitud
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactForm;
