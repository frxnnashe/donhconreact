import React from "react";
import CarouselUnidad from "../components/CarouselUnidad";
import Map from "../components/Mapa";

export default function Monoambiente() {
  return (
    <div style={{ paddingTop: "150px" }} className="monoambiente-page">
      <section className="info-section">
        <h1 className="titulo-unidad">Monoambiente</h1>
        <p className="descripcion-unidad">
          Unidad cómoda para 2 a 3 personas, equipada con anafe, baño privado,
          aire acondicionado frio/calor y Wi-Fi. Ideal para parejas o viajes cortos.
        </p>
      </section>

      <CarouselUnidad />
      <div className="reservar-container">
        <a
          href="https://wa.me/3541215080?text=Hola%20Buenas!%20Quiero%20reservar%20la%20unidad%20Monoambiente"
          target="_blank"
          rel="noopener noreferrer"
          className="reservar-btn-abajo"
        >
          Reservar Monoambiente
        </a>
      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
}
