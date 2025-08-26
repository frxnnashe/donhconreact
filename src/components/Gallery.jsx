import React from 'react';

const Gallery = () => {
  return (
    <div className="gallery container text-center">
      <div className="container mt-5">
        <div className="row g-2 align-items-stretch">
          <div className="col-md-4 d-flex">
            <img src="/img/IMG_0743.webp" alt="Imagen 1" className="gallery-img" />
          </div>
          <div className="col-md-8 d-flex">
            <img src="/img/pileta-2.webp" alt="Imagen 2" className="gallery-img" />
          </div>
          <div className="col-md-4 d-flex">
            <img src="/img/IMG_5086.webp" alt="Imagen 3" className="gallery-img" />
          </div>
          <div className="col-md-4 d-flex">
            <img src="/img/hab-1.webp" alt="Imagen 4" className="gallery-img" />
          </div>
          <div className="col-md-4 d-flex">
            <img src="/img/IMG_4944.webp" alt="Imagen 5" className="gallery-img" />
          </div>
          <div className="col-md-6 d-flex">
            <img src="/img/IMG_0730.webp" alt="Imagen 6" className="gallery-img" />
          </div>
          <div className="col-md-6 d-flex">
            <img src="/img/IMG_0732.webp" alt="Imagen 7" className="gallery-img" />
          </div>
          <div className="col-md-12 d-flex">
            <img src="/img/IMG_5078.webp" alt="Imagen 8" className="gallery-img" />
          </div>
          <div className="col-md-4 d-flex">
            <img src="/img/hab-2.webp" alt="Imagen 9" className="gallery-img" />
          </div>
          <div className="col-md-4 d-flex">
            <img src="/img/IMG_5084.webp" alt="Imagen 10" className="gallery-img" />
          </div>
          <div className="col-md-4 d-flex">
            <img src="/img/quincho.webp" alt="Imagen 11" className="gallery-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
