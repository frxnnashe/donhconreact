import React, { useState, useEffect, useRef } from 'react';

// Hook para lazy loading
const useLazyImage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px' // Comienza a cargar 50px antes de ser visible
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { isLoaded, isInView, setIsLoaded, imgRef };
};

// Componente de imagen optimizada
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '',
  priority = false,
  aspectRatio = 'auto',
  placeholder = true,
  ...props 
}) => {
  const { isLoaded, isInView, setIsLoaded, imgRef } = useLazyImage();
  const [imageSrc, setImageSrc] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (priority || isInView) {
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      
      img.onerror = () => {
        setError(true);
        setIsLoaded(true);
      };
      
      img.src = src;
    }
  }, [src, isInView, priority]);

  const placeholderStyle = {
    backgroundColor: '#f3f4f6',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: '40px 40px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div 
      ref={imgRef} 
      className={`optimized-image-container ${className}`}
      style={{ 
        aspectRatio,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f3f4f6'
      }}
    >
      {(!isLoaded && placeholder) && (
        <div 
          className="image-placeholder"
          style={{
            ...placeholderStyle,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
      )}
      
      {error ? (
        <div className="image-error" style={{
          ...placeholderStyle,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          color: '#6b7280'
        }}>
          <span>Error al cargar imagen</span>
        </div>
      ) : (
        <img
          src={imageSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            position: 'relative',
            zIndex: 2
          }}
          {...props}
        />
      )}
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage;