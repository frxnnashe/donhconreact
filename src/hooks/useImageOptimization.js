import { useState, useEffect, useCallback } from 'react';

export const useImageOptimization = () => {
  const [connectionType, setConnectionType] = useState('4g');
  const [saveData, setSaveData] = useState(false);
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setDevicePixelRatio(window.devicePixelRatio || 1);

    if ('connection' in navigator) {
      const connection = navigator.connection;
      setConnectionType(connection.effectiveType || '4g');
      setSaveData(connection.saveData || false);

      const handleConnectionChange = () => {
        setConnectionType(connection.effectiveType || '4g');
        setSaveData(connection.saveData || false);
      };

      connection.addEventListener('change', handleConnectionChange);

      return () => {
        connection.removeEventListener('change', handleConnectionChange);
      };
    }
  }, []);

  const getImageQuality = useCallback(() => {
    if (saveData) return 60;

    switch (connectionType) {
      case 'slow-2g':
      case '2g':
        return 50;
      case '3g':
        return 70;
      case '4g':
      default:
        return 85;
    }
  }, [connectionType, saveData]);

  const shouldLoadImage = useCallback((priority = false) => {
    if (priority) return true;
    if (saveData && connectionType === 'slow-2g') return false;
    return true;
  }, [connectionType, saveData]);

  return {
    connectionType,
    saveData,
    devicePixelRatio,
    quality: getImageQuality(),
    shouldLoadImage
  };
};

export const useIntersectionObserver = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [node, setNode] = useState(null);

  const defaultOptions = {
    threshold: 0.01,
    rootMargin: '100px',
    ...options
  };

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      defaultOptions
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node, defaultOptions.threshold, defaultOptions.rootMargin]);

  return [setNode, isInView];
};

export const useImagePreload = (src, priority = false) => {
  useEffect(() => {
    if (!priority || !src) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.type = 'image/webp';
    link.fetchPriority = 'high';

    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [src, priority]);
};

export default {
  useImageOptimization,
  useIntersectionObserver,
  useImagePreload
};
