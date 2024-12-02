import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

const PrivacyPolicy = ({ show, onHide }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Política de Privacidad</Modal.Title>
      </Modal.Header>
      <Modal.Body className="policy-content">
        <p className="text-muted mb-4">Última actualización: {currentDate}</p>

        <p>
          En <strong>Profesora Natalia</strong>, nos
          comprometemos a proteger la privacidad de nuestros usuarios. Esta
          política de privacidad describe cómo recopilamos, utilizamos y
          protegemos la información personal que nos proporcionas a través de
          nuestro sitio web.
        </p>

        <h5 className="mt-4">1. Información que Recopilamos</h5>
        <ul>
          <li>
            Datos personales como nombre, correo electrónico y número de
            teléfono, proporcionados al completar formularios de contacto o
            inscripción.
          </li>
          <li>
            Información de navegación, como dirección IP, tipo de dispositivo y
            páginas visitadas en nuestro sitio, mediante el uso de cookies.
          </li>
        </ul>

        <h5 className="mt-4">2. Uso de la Información</h5>
        <p>La información recopilada se utiliza para:</p>
        <ul>
          <li>Responder a consultas y solicitudes.</li>
          <li>Proporcionar servicios educativos personalizados.</li>
          <li>Mejorar la experiencia de navegación en el sitio.</li>
          <li>
            Enviar actualizaciones, promociones o información relevante sobre
            nuestros servicios (si has dado tu consentimiento).
          </li>
        </ul>

        <h5 className="mt-4">3. Protección de la Información</h5>
        <p>
          Implementamos medidas de seguridad técnicas y organizativas para
          proteger tu información personal contra el acceso no autorizado,
          pérdida o alteración.
        </p>

        <h5 className="mt-4">4. Compartir Información con Terceros</h5>
        <p>
          No compartimos, vendemos ni alquilamos tu información personal a
          terceros, salvo cuando sea necesario para cumplir con la ley o prestar
          nuestros servicios (por ejemplo, plataformas de videoconferencias).
        </p>

        <h5 className="mt-4">5. Tus Derechos</h5>
        <p>
          Tienes derecho a acceder, corregir o eliminar tus datos personales.
          Para ejercer estos derechos, contáctanos a través de nuestro correo
          electrónico: <strong>profesora.natalia@example.com</strong>.
        </p>

        <h5 className="mt-4">6. Cambios en la Política de Privacidad</h5>
        <p>
          Nos reservamos el derecho de modificar esta política en cualquier
          momento. Los cambios serán publicados en esta página con su respectiva
          fecha de actualización.
        </p>
      </Modal.Body>
    </Modal>
  );
};

PrivacyPolicy.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};
export default PrivacyPolicy;
