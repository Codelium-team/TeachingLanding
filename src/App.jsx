import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero';
import SideMenu from './components/SideMenu';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Methodology from './components/Methodology';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const handleModalClose = () => setActiveModal(null);
  const handleModalShow = (modalName) => setActiveModal(modalName);

  return (
    <div className="App">
      <SideMenu onItemClick={handleModalShow} />
      <Hero />
      <Footer />
      <About show={activeModal === 'about'} onHide={handleModalClose} />
      <Testimonials show={activeModal === 'testimonials'} onHide={handleModalClose} />
      <Methodology show={activeModal === 'methodology'} onHide={handleModalClose} />
      <ContactForm show={activeModal === 'contact'} onHide={handleModalClose} />
    </div>
  );
}

export default App
