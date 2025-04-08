import React from "react";

const Map = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#f8f9fa", // Color de fondo suave
        fontFamily: "'Poppins', sans-serif", // Asegúrate de importar esta fuente en tu proyecto
      }}
    >
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Información */}
          <div className="col-md-6 text-center">
            <img
              src="/img/1.png" // Asegúrate de que la ruta sea correcta
              alt="Logo Complejo Don H"
              className="img-fluid mb-4"
              style={{ maxWidth: "180px" }} // Logo más grande
            />
            <h3>
              <strong>
                Cómo llegar desde tu ubicación,{" "}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=-31.43361953362311, -64.510711030114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ color: "#007bff" }} // Color resaltado para el link
                >
                  CLICK AQUÍ!
                </a>
              </strong>
            </h3>
            <p className="mt-4" style={{ fontSize: "1rem" }}>
              📍 <strong>Dirección:</strong> Los Gigantes, 877 <br />
              📧 <strong>Contacto:</strong> gustavorocchia@gmail.com
            </p>
          </div>

          {/* Mapa */}
          <div className="col-md-6 text-center">
            <iframe
              title="Ubicación del Complejo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.285465140324!2d-64.51335032362415!3d-31.433807197095035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d6633e04dca11%3A0x8b2300c444942c0d!2sComplejo%20Don%20H!5e0!3m2!1ses!2sar!4v1743639812680!5m2!1ses!2sar"
              width="100%"
              height="300"
              style={{ border: "0", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
