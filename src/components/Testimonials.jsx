import React from "react";
import { Modal } from "react-bootstrap";
import Slider from "react-slick";
import { testimonials } from "../data/testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = ({ show, onHide }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Testimonios de estudiantes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-3">
              <div className="testimonial-card bg-white p-4 rounded">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image me-3"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h5 className="mb-0">{testimonial.name}</h5>
                    <div className="rating">
                      {"★".repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="mb-0">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </Modal.Body>
    </Modal>
  );
};

export default Testimonials;
