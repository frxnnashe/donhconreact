import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white py-4 "
      style={{
        backgroundImage: "url('/img/IMG_5078.webp')", // Usa la imagen que me enviaste
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Oscurece el fondo
        }}
      ></div>
      
      <div className="container position-relative" style={{ fontFamily: "Merriweather" }}>
        <div className="row">
          {/* Contacto */}
          <div className="col-md-6">
            <h5 className="fw-bold">Escribinos</h5>
            <p>Abierto los 365 días del año</p>
            <p><FaWhatsapp /> +54 9 3541 215080</p>
            <p><FaMapMarkerAlt /> Los Gigantes 877 Esq. Alem</p>
            <p><FaEnvelope /> info@complejodonh.com.ar</p>
          </div>
          
          {/* Redes */}
          <div className="col-md-6 text-md-end">
            <h5 className="fw-bold">¡Entérate de todo!</h5>
            <a href="https://www.instagram.com/complejo_donh" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-4 border-top pt-3">
          <p>
            Complejo Don H 2024 © Todos los derechos reservados | 
            <a href="https://www.instagram.com/frannrocchia" target="_blank" rel="noopener noreferrer" className="text-white ms-2">
              Powered by @frannrocchia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
