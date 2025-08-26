import React from "react";
import "../assets/css/CarouselUnidad.css";

const images = [
  {
    src: "/img/IMG_4944.webp",
    thumb: "/img/IMG_4944.webp",
  },
  {
    src: "/img/IMG_4948.webp",
    thumb: "/img/IMG_4948.webp",
  },
  {
    src: "/img/IMG_4951.webp",
    thumb: "/img/IMG_4951.webp",
  },
  {
    src: "/img/IMG_4950.webp",
    thumb: "/img/IMG_4950.webp",
  },
  {
    src: "/img/IMG_49234.webp",
    thumb: "/img/IMG_49234.webp",
  },
  {
    src: "/img/IMG_4952.webp",
    thumb: "/img/IMG_4952.webp",
  },
];

export default function CarouselUnidad3() {
  return (
    <section className="carousel-section">
      <div className="container">
        <div className="carousel">
          {images.map((_, index) => (
            <input
              key={`radio-${index}`}
              type="radio"
              name="slides"
              id={`slide-${index + 1}`}
              defaultChecked={index === 0}
            />
          ))}
          <ul className="carousel__slides">
            {images.map((img, index) => (
              <li key={`slide-${index}`} className="carousel__slide">
                <figure>
                  <div>
                    <img src={img.src} alt={img.alt} />
                  </div>
                </figure>
              </li>
            ))}
          </ul>
          <ul className="carousel__thumbnails">
            {images.map((img, index) => (
              <li key={`thumb-${index}`}>
                <label htmlFor={`slide-${index + 1}`}>
                  <img src={img.thumb} alt={img.alt} />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
