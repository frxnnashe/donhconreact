import React, { useState, useEffect } from 'react';

const images = [
  {
    src: "/img/IMG_0730.webp",
    thumb: "/img/IMG_0730.webp",
    alt: "Vista principal del monoambiente"
  },
  {
    src: "/img/IMG_0732.webp",
    thumb: "/img/IMG_0732.webp",
    alt: "Área de descanso"
  },
  {
    src: "/img/IMG_0731.webp",
    thumb: "/img/IMG_0731.webp",
    alt: "Cocina equipada"
  },
  {
    src: "/img/IMG_0736.webp",
    thumb: "/img/IMG_0736.webp",
    alt: "Baño privado"
  },
  {
    src: "/img/IMG_5086.webp",
    thumb: "/img/IMG_5086.webp",
    alt: "Vista exterior"
  },
  {
    src: "/img/IMG_5077.webp",
    thumb: "/img/IMG_5077.webp",
    alt: "Área común"
  }
];

const amenities = [
  { icon: "👥", title: "2-3 Personas", description: "Capacidad ideal" },
  { icon: "🍳", title: "Anafe", description: "Cocina equipada" },
  { icon: "🚿", title: "Baño Privado", description: "Completo y moderno" },
  { icon: "❄️", title: "Aire Acondicionado", description: "Frío/Calor" },
  { icon: "📶", title: "Wi-Fi Gratuito", description: "Internet de alta velocidad" },
  { icon: "💑", title: "Ideal Parejas", description: "Todo para su Comodiad" }
];

export default function ModernMonoambiente() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="monoambiente-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src={images[0].src} 
            alt="Monoambiente" 
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div className="hero-overlay" />
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">Disponible Todo el Año</div>
          <h1 className="hero-title">Monoambiente</h1>
          <h2 className="hero-subtitle">Tu Refugio Perfecto en Villa Carlos Paz</h2>
          <p className="hero-description">
            Espacio acogedor y completamente equipado, ideal para parejas que buscan 
            comodidad y tranquilidad en el corazón de las sierras cordobesas.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2-3</span>
              <span className="stat-label">Personas</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Ambiente</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">★★★★★</span>
              <span className="stat-label">Calificación</span>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-text">Desliza para explorar</div>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Galería de Imágenes</h2>
            <p className="section-subtitle">Descubre cada rincón de tu próximo destino</p>
          </div>

          <div className="modern-gallery">
            <div className="main-image-container">
              <img 
                src={images[currentImage].src} 
                alt={images[currentImage].alt}
                className="main-image"
                onClick={() => setIsImageModalOpen(true)}
              />
              
              <button className="gallery-nav prev" onClick={prevImage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
              
              <button className="gallery-nav next" onClick={nextImage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>

              <div className="image-counter">
                {currentImage + 1} / {images.length}
              </div>
            </div>

            <div className="thumbnails-container">
              {images.map((img, index) => (
                <button
                  key={index}
                  className={`thumbnail ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img src={img.thumb} alt={img.alt} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="amenities-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Comodidades Incluidas</h2>
            <p className="section-subtitle">Todo lo que necesitas para una estadía perfecta</p>
          </div>

          <div className="amenities-grid">
            {amenities.map((amenity, index) => (
              <div key={index} className="amenity-card">
                <div className="amenity-icon">{amenity.icon}</div>
                <h3 className="amenity-title">{amenity.title}</h3>
                <p className="amenity-description">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">¿Listo para tu Escapada?</h2>
            <p className="cta-description">
              Reserva ahora y asegura las mejores fechas para tu estadía en Villa Carlos Paz
            </p>
            
            <div className="cta-buttons">
              <a
                href="https://wa.me/3541215080?text=Hola%20Buenas!%20Quiero%20reservar%20la%20unidad%20Monoambiente"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn primary"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Reservar por WhatsApp
              </a>
              
              <button className="cta-btn secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Llamar Directamente
              </button>
            </div>

            <div className="contact-info">
              <p>📞 +54 3541 215080</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="image-modal" onClick={() => setIsImageModalOpen(false)}>
          <div className="modal-content">
            <img src={images[currentImage].src} alt={images[currentImage].alt} />
            <button className="modal-close" onClick={() => setIsImageModalOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .monoambiente-container {
          width: 100%;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 800px;
          padding: 0 2rem;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
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

        .hero-title {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          font-weight: 300;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 1px;
        }

        .hero-description {
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          line-height: 1.6;
          margin-bottom: 3rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #ff6b6b;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.3);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          z-index: 3;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        .scroll-text {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          opacity: 0.8;
        }

        .scroll-arrow {
          font-size: 1.5rem;
          opacity: 0.6;
        }

        /* Sections */
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #7f8c8d;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Gallery Section */
        .gallery-section {
          padding: 6rem 0;
          background: #f8f9fa;
        }

        .modern-gallery {
          display: grid;
          gap: 2rem;
        }

        .main-image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .main-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .main-image:hover {
          transform: scale(1.02);
        }

        .gallery-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: #2c3e50;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gallery-nav:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
        }

        .gallery-nav.prev {
          left: 1rem;
        }

        .gallery-nav.next {
          right: 1rem;
        }

        .image-counter {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
        }

        .thumbnails-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }

        .thumbnail {
          border: none;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          aspect-ratio: 1;
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumbnail.active {
          ring: 3px solid #ff6b6b;
          transform: scale(1.05);
        }

        .thumbnail:hover {
          transform: scale(1.02);
        }

        /* Amenities Section */
        .amenities-section {
          padding: 6rem 0;
          background: white;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .amenity-card {
          text-align: center;
          padding: 2rem;
          background: #f8f9fa;
          border-radius: 15px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .amenity-card:hover {
          transform: translateY(-5px);
          border-color: #ff6b6b;
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.1);
        }

        .amenity-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .amenity-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }

        .amenity-description {
          color: #7f8c8d;
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
          text-align: center;
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .cta-btn.primary {
          background: #25d366;
          color: white;
        }

        .cta-btn.primary:hover {
          background: #128c7e;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
        }

        .cta-btn.secondary {
          background: transparent;
          color: white;
          border-color: white;
        }

        .cta-btn.secondary:hover {
          background: white;
          color: #667eea;
        }

        .contact-info {
          opacity: 0.8;
        }

        .contact-info p {
          margin: 0.5rem 0;
          font-size: 1.1rem;
        }

        /* Image Modal */
        .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.9);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .modal-content img {
          width: 100%;
          height: auto;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 10px;
        }

        .modal-close {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 40px;
          height: 40px;
          border: none;
          background: rgba(255,255,255,0.2);
          color: white;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: rgba(255,255,255,0.3);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-stats {
            gap: 1rem;
          }

          .stat-divider {
            height: 30px;
          }

          .thumbnails-container {
            grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          }

          .amenities-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .gallery-nav {
            width: 40px;
            height: 40px;
          }

          .gallery-nav.prev {
            left: 0.5rem;
          }

          .gallery-nav.next {
            right: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}