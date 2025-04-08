import { useNavigate } from "react-router-dom";
import "../assets/css/styles.css";


export default function Carousel() {
  const navigate = useNavigate();

  return (
    <div className="carousel-wrapper">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" />
        </div>

        <div className="carousel-inner">
  <div
    className="carousel-item active"
    data-bs-interval="1500"
    onClick={() => navigate("/monoambiente")}
  >
    <img src="/img/IMG_0730.png" className="d-block w-100 zoom-hover" alt="Monoambiente" />
    <div className="carousel-caption d-none d-md-block">
      <h5>Monoambiente</h5>
      <p>Nuestro Monoambiente amplio para 2 personas</p>
    </div>
  </div>

  <div
    className="carousel-item"
    data-bs-interval="1500"
    onClick={() => navigate("/casa")}
  >
    <img src="/img/IMG_4944.png" className="d-block w-100 zoom-hover" alt="Depto 4/5" />
    <div className="carousel-caption d-none d-md-block">
      <h5>CASA</h5>
      <p>Nuestra casa perfectamente equipada para 8 personas</p>
    </div>
  </div>

  <div
    className="carousel-item"
    data-bs-interval="1500"
    onClick={() => navigate("/depto4-5")}
  >
    <img src="/img/IMG_4913.png" className="d-block w-100 zoom-hover" alt="Casa" />
    <div className="carousel-caption d-none d-md-block">
      <h5>Departamento de 2 ambientes</h5>
      <p>Nuestro departamento para 4/5 personas</p>
    </div>
  </div>
</div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
