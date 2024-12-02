import React from "react";
import PropTypes from "prop-types";
import { Modal, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ContactForm = ({ show, onHide }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const response = await fetch(
        "https://formsubmit.co/ajax/0ddecb23dfb22bf423c51fc3ec14048c",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "¡Mensaje enviado!",
          text: "Te responderemos a la brevedad.",
          icon: "success",
          confirmButtonColor: "#1f6bc1",
          background: "#ffffff",
          iconColor: "#25d366",
        });
        e.target.reset();
        onHide();
      } else {
        throw new Error("Error en el envío");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
        icon: "error",
        confirmButtonColor: "#1f6bc1",
        background: "#ffffff",
        iconColor: "#dc3545",
      });
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Agenda tu Clase</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="_subject"
            value="Nueva clase agendada"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="javascript:void(0);" />

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
              placeholder="+56 9 XXXX XXXX (opcional)"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select name="class_type" required>
              <option value="">Selecciona tu plan</option>
              <option value="individual">Clase individual</option>
              <option value="mensual">Plan mensual</option>
              <option value="anual">Plan anual</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select name="schedule" required>
              <option value="">Horario Preferido</option>
              <option value="mañana">AM</option>
              <option value="tarde">PM</option>
            </Form.Select>
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

ContactForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};


export default ContactForm;