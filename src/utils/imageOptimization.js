// Utilidades para optimización de imágenes

// Generar URLs de imágenes en diferentes tamaños
export const generateImageSizes = (src, sizes = [320, 640, 768, 1024, 1280, 1920]) => {
  if (!src || typeof src !== 'string') return { src, srcSet: '' };
  
  const basePath = src.substring(0, src.lastIndexOf('.'));
  const extension = src.substring(src.lastIndexOf('.'));
  
  // Para WebP, simplemente retornamos el src original ya que están optimizados
  return {
    src,
    srcSet: `${src} 1x`,
    sizes: '100vw'
  };
};

// Detectar soporte de WebP
export const supportsWebP = () => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  if (canvas.getContext && canvas.getContext('2d')) {
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

// Calcular el tamaño óptimo de imagen basado en el viewport
export const getOptimalImageSize = (containerWidth) => {
  const dpr = window.devicePixelRatio || 1;
  const targetWidth = containerWidth * dpr;
  
  const sizes = [320, 640, 768, 1024, 1280, 1920, 2560];
  
  for (let size of sizes) {
    if (targetWidth <= size) {
      return size;
    }
  }
  
  return sizes[sizes.length - 1];
};

// Precargar imágenes críticas
export const preloadImage = (src, priority = false) => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = priority ? 'preload' : 'prefetch';
  link.as = 'image';
  link.href = src;
  link.type = 'image/webp';
  
  // Añadir fetchpriority para imágenes críticas
  if (priority) {
    link.fetchPriority = 'high';
  }
  
  document.head.appendChild(link);
};

// Lazy load con IntersectionObserver mejorado
export const createImageObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '100px',
    threshold: 0.01
  };
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

// Generar placeholder blur (LQIP - Low Quality Image Placeholder)
export const generateBlurDataURL = (width = 10, height = 10) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  // Crear un gradiente simple como placeholder
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f3f4f6');
  gradient.addColorStop(1, '#e5e7eb');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/png');
};

// Optimizar configuración de carga de imágenes
export const getImageLoadingStrategy = (isAboveFold, isPriority) => {
  if (isPriority || isAboveFold) {
    return {
      loading: 'eager',
      fetchpriority: 'high',
      decoding: 'sync'
    };
  }
  
  return {
    loading: 'lazy',
    fetchpriority: 'low',
    decoding: 'async'
  };
};

// Comprimir calidad basada en el tipo de conexión
export const getQualityByConnection = () => {
  if (typeof navigator === 'undefined' || !navigator.connection) {
    return 85; // Calidad por defecto
  }
  
  const connection = navigator.connection;
  const effectiveType = connection.effectiveType;
  
  switch (effectiveType) {
    case 'slow-2g':
    case '2g':
      return 60;
    case '3g':
      return 75;
    case '4g':
    default:
      return 85;
  }
};

// Detectar si el usuario prefiere reducir datos
export const prefersReducedData = () => {
  if (typeof navigator === 'undefined' || !navigator.connection) {
    return false;
  }
  
  return navigator.connection.saveData === true;
};

export default {
  generateImageSizes,
  supportsWebP,
  getOptimalImageSize,
  preloadImage,
  createImageObserver,
  generateBlurDataURL,
  getImageLoadingStrategy,
  getQualityByConnection,
  prefersReducedData
};
