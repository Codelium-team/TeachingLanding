import React from 'react';
import { Button } from 'react-bootstrap';
import { FaUser, FaComments, FaChalkboardTeacher, FaEnvelope } from 'react-icons/fa';

const SideMenu = ({ onItemClick }) => {
  const menuItems = [
    { id: 'about', icon: <FaUser />, label: 'Sobre mí' },
    { id: 'testimonials', icon: <FaComments />, label: 'Testimonios' },
    { id: 'methodology', icon: <FaChalkboardTeacher />, label: 'Metodología' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contacto' }
  ];

  return (
    <div className="side-menu">
      {menuItems.map((item) => (
        <Button
          key={item.id}
          variant="light"
          className="side-menu-item"
          onClick={() => onItemClick(item.id)}
        >
          {item.icon}
          <span className="menu-label">{item.label}</span>
        </Button>
      ))}
    </div>
  );
};

export default SideMenu;