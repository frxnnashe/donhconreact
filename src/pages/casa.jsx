import React from "react";
import CarouselUnidad from "../components/CarouselUnidad";
import Map from "../components/Mapa";
import CarouselUnidad3 from "../components/CarouselUnidad3";

export default function Casa() {
  return (
    <div style={{ paddingTop: "150px" }} className="monoambiente-page">
      <section className="info-section">
        <h1 className="titulo-unidad">Casa</h1>
        <p className="descripcion-unidad">
          Nuestra Casa para 8 personas dentro del complejo, 3 dormitorios, 2
          baños, Living/Comedor, Cocina, Aire acondicionado frio/calor, Calefactor, TV y Wi-Fi.
          Ideal para grupos familiares.
        </p>
      </section>

      <CarouselUnidad3/>
      <div className="reservar-container">
        <a
          href="https://wa.me/3541215080?text=Hola%20Buenas!%20Quiero%20reservar%20la%20unidad%20Casa"
          target="_blank"
          rel="noopener noreferrer"
          className="reservar-btn-abajo"
        >
          Reservar Casa
        </a>
      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
}
