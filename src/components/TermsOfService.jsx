import React from 'react';
import PropTypes from "prop-types";
import { Modal } from 'react-bootstrap';

const TermsOfService = ({ show, onHide }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Términos de Servicio</Modal.Title>
      </Modal.Header>
      <Modal.Body className="policy-content">
        <p className="text-muted mb-4">Última actualización: {currentDate}</p>

        <p>Estos términos de servicio regulan el uso del sitio web y los servicios ofrecidos por <strong>Profesora Natalia</strong>. Al acceder a este sitio, aceptas cumplir con los siguientes términos:</p>

        <h5 className="mt-4">1. Uso Aceptable</h5>
        <ul>
          <li>El sitio está destinado exclusivamente para fines educativos y personales.</li>
          <li>No debes utilizar el sitio para actividades ilegales, difundir contenido ofensivo o intentar acceder a áreas restringidas.</li>
        </ul>

        <h5 className="mt-4">2. Registro y Cuentas</h5>
        <p>Para acceder a ciertos servicios, es posible que debas registrarte proporcionando información veraz y actualizada. Eres responsable de la seguridad de tus credenciales de acceso.</p>

        <h5 className="mt-4">3. Propiedad Intelectual</h5>
        <p>Todo el contenido del sitio, incluyendo textos, imágenes, videos y recursos educativos, está protegido por derechos de autor y no puede ser reproducido, distribuido ni utilizado sin autorización previa.</p>

        <h5 className="mt-4">4. Limitación de Responsabilidad</h5>
        <p>No nos hacemos responsables por interrupciones en el servicio, errores técnicos o pérdida de datos que puedan ocurrir al usar el sitio.</p>

        <h5 className="mt-4">5. Modificaciones de los Términos</h5>
        <p>Nos reservamos el derecho de actualizar estos términos en cualquier momento. Es tu responsabilidad revisarlos periódicamente. El uso continuado del sitio después de la publicación de cambios implica la aceptación de los mismos.</p>

        <h5 className="mt-4">6. Contacto</h5>
        <p>Si tienes preguntas sobre estos términos, contáctanos en: <strong>profesora@example.com</strong>.</p>
      </Modal.Body>
    </Modal>
  );
};

TermsOfService.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
  };

export default TermsOfService;