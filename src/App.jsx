import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./components/Hero";
import SideMenu from "./components/SideMenu";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Methodology from "./components/Methodology";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const handleModalClose = () => setActiveModal(null);
  const handleModalShow = (modalName) => setActiveModal(modalName);

  return (
    <div className="App">
      <SideMenu onItemClick={handleModalShow} />
      <Hero />
      <Footer
        onPrivacyClick={() => handleModalShow("privacy")}
        onTermsClick={() => handleModalShow("terms")}
      />
      <About show={activeModal === "about"} onHide={handleModalClose} />
      <Testimonials
        show={activeModal === "testimonials"}
        onHide={handleModalClose}
      />
      <Methodology
        show={activeModal === "methodology"}
        onHide={handleModalClose}
      />
      <ContactForm show={activeModal === "contact"} onHide={handleModalClose} />
      <PrivacyPolicy
        show={activeModal === "privacy"}
        onHide={handleModalClose}
      />
      <TermsOfService
        show={activeModal === "terms"}
        onHide={handleModalClose}
      />
    </div>
  );
}

export default App;
