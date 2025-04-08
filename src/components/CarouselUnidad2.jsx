import React from "react";
import "../assets/css/CarouselUnidad.css";

const images = [
  {
    src: "public/img/IMG_4911.png",
    thumb: "public/img/IMG_4911.png",
  },
  {
    src: "public/img/IMG_4913.png",
    thumb: "public/img/IMG_4913.png",
  },
  {
    src: "public/img/IMG_4907.png",
    thumb: "public/img/IMG_4907.png",
  },
  {
    src: "public/img/IMG_4906.png",
    thumb: "public/img/IMG_4906.png",
  },
  {
    src: "public/img/IMG_5086.png",
    thumb: "public/img/IMG_5086.png",
  },
  {
    src: "public/img/IMG_5077.png",
    thumb: "public/img/IMG_5077.png",
  },
];

export default function CarouselUnidad2() {
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
