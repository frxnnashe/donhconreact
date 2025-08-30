import React, { useEffect } from 'react';
import OptimizedImage from './OptimizedImage'; // Importa el componente anterior

const OptimizedGallery = () => {
  // Preload de imagen crítica (la más importante visualmente)
  useEffect(() => {
    const preloadCritical = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = '/img/pileta-2.webp';
      document.head.appendChild(link);
    };
    
    preloadCritical();
  }, []);

  return (
    <div className="gallery container text-center">
      <div className="container mt-5">
        <div className="row g-2 align-items-stretch">
          <div className="col-md-4 d-flex">
            <OptimizedImage 
              src="/img/IMG_0743.webp" 
              alt="Vista del complejo residencial" 
              className="gallery-img"
              aspectRatio="4/3"
            />
          </div>
          <div className="col-md-8 d-flex">
            <OptimizedImage 
              src="/img/pileta-2.webp" 
              alt="Piscina principal del complejo" 
              className="gallery-img"
              priority={true} // Imagen hero - carga inmediatamente
              aspectRatio="21/9"
            />
          </div>
          <div className="col-md-4 d-flex">
            <OptimizedImage 
              src="/img/IMG_5086.webp" 
              alt="Área exterior y jardines" 
              className="gallery-img"
              aspectRatio="4/3"
            />
          </div>
          <div className="col-md-4 d-flex">
            <OptimizedImage 
              src="/img/IMG_4906.webp" 
              alt="Habitación principal con vista" 
              className="gallery-img"
              aspectRatio="4/3"
            />
          </div>
          <div className="col-md-4 d-flex">
            <OptimizedImage 
              src="/img/IMG_4944.webp" 
              alt="Casa familiar completa" 
              className="gallery-img"
              aspectRatio="4/3"
            />
          </div>
          <div className="col-md-6 d-flex">
            <OptimizedImage 
              src="/img/IMG_0730.webp" 
              alt="Monoambiente - vista interior" 
              className="gallery-img"
              aspectRatio="16/9"
            />
          </div>
          <div className="col-md-6 d-flex">
            <OptimizedImage 
              src="/img/IMG_0732.webp" 
              alt="Monoambiente - área de descanso" 
              className="gallery-img"
              aspectRatio="16/9"
            />
          </div>
          <div className="col-md-12 d-flex">
            <OptimizedImage 
              src="/img/IMG_5078.webp" 
              alt="Vista panorámica del complejo" 
              className="gallery-img"
              aspectRatio="21/9"
            />
          </div>
          <div className="col-md-4 d-flex">
            <OptimizedImage 
              src="/img/hab-2.webp" 
              alt="Habitación secundaria" 
              className="gallery-img"
              aspectRatio="4/3"
            />
          </div>
          <div className="col-md-4 d-flex">
            <OptimizedImage 
              src="/img/IMG_5084.webp" 
              alt="Área común recreativa" 
              className="gallery-img"
              aspectRatio="4/3"
            />
          </div>
          <div className="col-md-4 d-flex">
            <OptimizedImage 
              src="/img/IMG_6038.webp" 
              alt="Quincho y área de parrilla" 
              className="gallery-img"
              aspectRatio="4/3"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery-img {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          
          /* Mejoras de rendering */
          transform: translateZ(0); /* Forzar aceleración por hardware */
          will-change: transform;
        }

        .gallery-img:hover {
          transform: translateY(-2px) translateZ(0);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .col-md-4, .col-md-6, .col-md-8, .col-md-12 {
          margin-bottom: 1rem;
        }

        /* Optimización para pantallas móviles */
        @media (max-width: 768px) {
          .row.g-2 > * {
            margin-bottom: 0.5rem;
          }
          
          .gallery-img {
            border-radius: 6px;
          }
        }

        /* Mejoras para conexiones lentas */
        @media (prefers-reduced-data: reduce) {
          .gallery-img {
            content-visibility: auto;
            contain-intrinsic-size: 400px 300px;
          }
        }

        /* Reducir animaciones para usuarios que las prefieren reducidas */
        @media (prefers-reduced-motion: reduce) {
          .gallery-img {
            transition: none;
          }
          
          .gallery-img:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default OptimizedGallery;