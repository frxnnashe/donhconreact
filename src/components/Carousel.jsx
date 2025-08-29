import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from './OptimizedImage'; // Importa el componente anterior

const cabinData = [
  {
    id: 'monoambiente',
    title: 'Monoambiente',
    subtitle: 'Perfecto para parejas',
    description: 'Espacio amplio y acogedor para 2 personas con todas las comodidades',
    image: '/img/IMG_0730.webp',
    capacity: '2 personas',
    features: ['WiFi gratuito', 'Cocina equipada', 'Vista panorámica']
  },
  {
    id: 'casa',
    title: 'Casa Familiar',
    subtitle: 'Ideal para grupos grandes',
    description: 'Casa completamente equipada para disfrutar en familia o con amigos',
    image: '/img/IMG_4944.webp',
    capacity: '8 personas',
    features: ['Amplio jardín', 'Parrilla', 'Múltiples habitaciones']
  },
  {
    id: 'depto4-5',
    title: 'Departamento 2 Ambientes',
    subtitle: 'Comodidad y funcionalidad',
    description: 'Departamento moderno con la mejor ubicación y servicios',
    image: '/img/IMG_4913.webp',
    capacity: '4-5 personas',
    features: ['Balcón privado', 'Aire acondicionado', 'Estacionamiento']
  }
];

export default function OptimizedModernCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  // Preload de la primera imagen (crítica)
  useEffect(() => {
    const preloadHeroImage = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = cabinData[0].image;
      document.head.appendChild(link);
    };
    
    preloadHeroImage();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cabinData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cabinData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cabinData.length) % cabinData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleNavigation = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="carousel-container">
      {/* Main Carousel */}
      <div 
        className="carousel-wrapper"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * (100/cabinData.length)}%)` }}>
          {cabinData.map((cabin, index) => (
            <div key={cabin.id} className="carousel-slide">
              <div className="slide-background">
                <OptimizedImage
                  src={cabin.image}
                  alt={cabin.title}
                  priority={index === 0} // Solo la primera imagen es prioritaria
                  aspectRatio="16/9"
                />
                <div className="slide-overlay" />
              </div>
              
              <div className="slide-content">
                <div className="content-wrapper">
                  <div className="slide-badge">{cabin.capacity}</div>
                  
                  <h1 className="slide-title">{cabin.title}</h1>
                  <h2 className="slide-subtitle">{cabin.subtitle}</h2>
                  <p className="slide-description">{cabin.description}</p>
                  
                  <div className="features-list">
                    {cabin.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  
                  <button 
                    className="explore-btn"
                    onClick={() => handleNavigation(cabin.id)}
                  >
                    <span>Explorar</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                  
                  {/* Indicadores centrados debajo del botón */}
                  <div className="carousel-indicators-inline">
                    {cabinData.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator-inline ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button className="nav-btn prev-btn" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>

        <button className="nav-btn next-btn" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div 
          className="progress-bar"
          style={{ 
            width: `${((currentSlide + 1) / cabinData.length) * 100}%` 
          }}
        />
      </div>

      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
          background: transparent;
        }

        .carousel-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          width: 300%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          /* Optimización de rendering */
          will-change: transform;
          transform: translateZ(0); /* Forzar aceleración por hardware */
        }

        .carousel-slide {
          position: relative;
          width: 33.333%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .slide-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          /* Optimización para imágenes de fondo */
          transform: translateZ(0);
        }

        .slide-background .optimized-image-container {
          width: 100%;
          height: 100%;
          transition: transform 0.8s ease;
        }

        .carousel-slide:hover .slide-background .optimized-image-container {
          transform: scale(1.05);
        }

        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0.7) 100%
          );
          z-index: 2;
        }

        .slide-content {
          position: relative;
          z-index: 3;
          color: white;
          text-align: center;
          padding: 0 2rem;
          max-width: 800px;
          animation: slideInUp 0.8s ease-out;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .content-wrapper {
          position: relative;
        }

        .slide-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .slide-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin: 0 0 0.5rem 0;
          background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .slide-subtitle {
          font-size: clamp(1.2rem, 2vw, 1.5rem);
          font-weight: 300;
          margin: 0 0 1.5rem 0;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 2px;
        }

        .slide-description {
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          line-height: 1.6;
          margin: 0 0 2rem 0;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 2.5rem;
        }

        .feature-tag {
          padding: 0.4rem 1rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.3s ease;
        }

        .feature-tag:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        .explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #ff6b6b, #ee5a52);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(238, 90, 82, 0.4);
          position: relative;
          overflow: hidden;
        }

        .explore-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .explore-btn:hover::before {
          left: 100%;
        }

        .explore-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(238, 90, 82, 0.6);
        }

        .explore-btn:active {
          transform: translateY(-1px);
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 60px;
          height: 60px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
        }

        .prev-btn {
          left: 2rem;
        }

        .next-btn {
          right: 2rem;
        }

        .carousel-indicators-inline {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin-top: 2rem;
        }

        .indicator-inline {
          width: 10px;
          height: 10px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator-inline.active {
          background: white;
          transform: scale(1.3);
        }

        .indicator-inline:hover {
          background: rgba(255, 255, 255, 0.7);
        }

        .progress-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          z-index: 4;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #ff6b6b, #ee5a52);
          transition: width 0.8s ease;
        }

        /* Optimizaciones para dispositivos móviles */
        @media (max-width: 768px) {
          .carousel-container {
            height: 100vh;
            min-height: 500px;
          }

          .slide-content {
            padding: 0 1.5rem;
          }

          .features-list {
            margin-bottom: 2rem;
          }

          .feature-tag {
            font-size: 0.75rem;
            padding: 0.3rem 0.8rem;
          }

          .explore-btn {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }

          .nav-btn {
            width: 50px;
            height: 50px;
          }

          .prev-btn {
            left: 1rem;
          }

          .next-btn {
            right: 1rem;
          }
        }

        @media (max-width: 480px) {
          .slide-content {
            padding: 0 1rem;
          }

          .slide-badge {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
            margin-bottom: 1rem;
          }

          .features-list {
            gap: 0.5rem;
            margin-bottom: 1.5rem;
          }

          .nav-btn {
            width: 45px;
            height: 45px;
          }

          .prev-btn {
            left: 0.5rem;
          }

          .next-btn {
            right: 0.5rem;
          }
        }

        /* Reducir animaciones si el usuario las prefiere reducidas */
        @media (prefers-reduced-motion: reduce) {
          .carousel-track {
            transition: none;
          }
          
          .slide-background .optimized-image-container,
          .explore-btn,
          .nav-btn,
          .indicator-inline,
          .feature-tag {
            transition: none;
          }
          
          .slide-content {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}