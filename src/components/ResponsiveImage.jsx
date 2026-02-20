import React, { useState, useEffect, useRef } from 'react';
import { 
  getImageLoadingStrategy, 
  getQualityByConnection,
  prefersReducedData 
} from '../utils/imageOptimization';

const ResponsiveImage = ({ 
  src, 
  alt, 
  className = '',
  priority = false,
  aspectRatio = 'auto',
  sizes = '100vw',
  objectFit = 'cover',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef();
  const [quality, setQuality] = useState(85);

  useEffect(() => {
    const connectionQuality = getQualityByConnection();
    const reducedData = prefersReducedData();
    
    if (reducedData) {
      setQuality(Math.min(connectionQuality, 70));
    } else {
      setQuality(connectionQuality);
    }
  }, []);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.01,
        rootMargin: '150px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  const loadingStrategy = getImageLoadingStrategy(priority, priority);

  return (
    <div 
      ref={imgRef} 
      className={`responsive-image-wrapper ${className}`}
      style={{ 
        aspectRatio,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f3f4f6'
      }}
    >
      {!isLoaded && (
        <div 
          className="image-skeleton"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            zIndex: 1
          }}
        />
      )}
      
      {error ? (
        <div 
          className="image-error"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f4f6',
            color: '#6b7280',
            fontSize: '14px'
          }}
        >
          <span>⚠️ Error al cargar</span>
        </div>
      ) : (
        isInView && (
          <picture>
            <source 
              srcSet={src} 
              type="image/webp"
              sizes={sizes}
            />
            <img
              src={src}
              alt={alt}
              loading={loadingStrategy.loading}
              decoding={loadingStrategy.decoding}
              fetchpriority={loadingStrategy.fetchpriority}
              onLoad={handleLoad}
              onError={handleError}
              style={{
                width: '100%',
                height: '100%',
                objectFit,
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                zIndex: 2,
                transform: 'translateZ(0)',
                willChange: isLoaded ? 'auto' : 'opacity'
              }}
              {...props}
            />
          </picture>
        )
      )}
      
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .responsive-image-wrapper {
          contain: layout style paint;
          content-visibility: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          .image-skeleton {
            animation: none;
            background: #f3f4f6;
          }
          
          img {
            transition: none;
          }
        }

        @media (prefers-reduced-data: reduce) {
          .responsive-image-wrapper {
            contain-intrinsic-size: 400px 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default ResponsiveImage;
