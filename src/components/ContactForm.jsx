import React, { useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";

const ContactForm = ({ show, onHide }) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const formData = new FormData(e.target);
      const response = await fetch(
        "https://formsubmit.co/notification@codelium.cl",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
        setTimeout(() => {
          onHide();
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      setError("There was an error sending your message. Please try again.");
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Agenda tu Clase</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {submitted && (
          <Alert variant="success">
            Gracias por tu mensaje, te responderé en breve.
          </Alert>
        )}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="_subject"
            value="New contact from landing page"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={window.location.href} />

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="casilla@correo.cl"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="tel"
              name="phone"
              placeholder="+56 9 XXXX XXXX"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select name="class_type">
              <option value="">Selecciona tu plan</option>
              <option value="single">Clase individual</option>
              <option value="monthly">Plan mensual</option>
              <option value="annual">Plan anual</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="schedule"
              placeholder="Horario Preferido"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              placeholder="Comentarios adicionales"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactForm;
