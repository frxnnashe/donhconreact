import React from "react";
import CarouselUnidad2 from "../components/CarouselUnidad2";
import Map from "../components/Mapa";

export default function Monoambiente() {
  return (
    <div style={{ paddingTop: "150px" }} className="monoambiente-page">
      <section className="info-section">
        <h1 className="titulo-unidad">Departamento de 2 Ambientes</h1>
        <p className="descripcion-unidad">
          Unidad cómoda para 4 a 5 personas, equipada con anafe, antebaño, baño,
          aire acondicionado frio/calor y Wi-Fi. Ideal para familias que desean comodidad.
        </p>
      </section>

      <CarouselUnidad2 />
      <div className="reservar-container">
        <a
          href="https://wa.me/3541215080?text=Hola%20Buenas!%20Quiero%20reservar%20la%20unidad%20Departamento%202%20Ambientes"
          target="_blank"
          rel="noopener noreferrer"
          className="reservar-btn-abajo"
        >
          Reservar Departamento 2 Ambientes
        </a>
      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
}
