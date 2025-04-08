import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Romina Micaela",
    text: "El complejo es tal cual a las fotos. Muy lindo, limpio, con pileta, parrilla y estacionamiento. La zona tranquila con el balneario cerca, varias despensas cerca. Te recibe Gustavo, muy amable y predispuesto a lo que necesites!",
    image: "/img/user1.png",
  },
  {
    name: "Natali Rios",
    text: "Excelente lugar, venimos de Villa Mercedes (San Luis), la verdad la pasamos muy bien. El dueño Gustavo es muy amable y servicial!! Recomendable 100%, muchas gracias por todo Gustavo!! Buen año! Miguel, Natalia y Josefina!",
    image: "/img/user2.png",
  },
  {
    name: "Emiliano Gongora",
    text: "Excelente ubicación, muy buena atención de Gustavo. Muy cómodo y recomendable para disfrutar en familia!",
    image: "/img/user3.png",
  },
];

const Testimonials = () => {
  return (
    <div className="container my-5 pt-5" style={{ fontFamily: "Poppins, sans-serif" }}>
      <h2 className="text-center fw-bold mb-4" style={{ fontSize: "2rem" }}>
        Nuestros clientes dicen!
      </h2>
      <p className="text-center text-muted mb-5" style={{ fontSize: "1.2rem" }}>
        Más de 2000 visitantes al año, estas son algunas de las experiencias de nuestros huéspedes.
      </p>
      <div className="row">
        {reviews.map((review, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow-lg p-4 text-center" style={{ fontSize: "1.1rem" }}>
              <div className="stars mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-warning" />
                ))}
              </div>
              <p className="fst-italic">{review.text}</p>
              <div className="d-flex align-items-center justify-content-center mt-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="rounded-circle me-2"
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
                <strong>{review.name}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
