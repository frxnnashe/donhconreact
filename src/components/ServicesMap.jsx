import React from "react";
import {
  FaBed,
  FaWifi,
  FaFire,
  FaSwimmingPool,
  FaCar,
  FaChild,
  FaSnowflake,
  FaTv,
} from "react-icons/fa"; // Importar iconos correctos

const ServicesMap = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Imagen */}
        <div className="col-md-5">
          <div className="image-container shadow-lg">
            <img
              src="/img/pileta-2.webp"
              alt="Alojamiento"
              className="img-fluid service-image"
            />
          </div>
        </div>

        {/* Descripción y Servicios */}
        <div className="col-md-7">
          <p>
            Estamos ubicados <strong>a 10 cuadras del centro de la ciudad de Villa
            Carlos Paz</strong>, a 50 metros del Rio San Antonio. Elegancia, comodidad,
            seguridad, calidad y servicio al mejor precio, estas son algunas de
            las características que convierten a nuestras instalaciones en un
            referente del destino. <strong>Ideal para familias y parejas que desean
            disfrutar del aire libre de las sierras de Córdoba</strong>. Las familias que
            se han alojado por varios veranos en nuestras instalaciones nos han
            recomendado ampliamente, haciendo de nuestro complejo un lugar <strong>ideal
            y acogedor para el cliente</strong>.
          </p>

          {/* Lista de Servicios */}
          <div className="row">
            <div className="col-6">
              <p>
                <FaBed className="icon" /> Habitaciones Amplias
              </p>
              <p>
                <FaWifi className="icon" /> Wifi
              </p>
              <p>
                <FaFire className="icon" /> Asadores
              </p>
            </div>
            <div className="col-6">
              <p>
                <FaSwimmingPool className="icon" /> Piscina
              </p>
              <p>
                <FaCar className="icon" /> Estacionamiento
              </p>
              <p>
                <FaChild className="icon" /> Área Verde
              </p>
            </div>
            <div className="col-6">
              <p>
                <FaSnowflake className="icon" /> Aire Acondicionado
              </p>
              <p>
                <FaTv className="icon" /> TV por cable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMap;
