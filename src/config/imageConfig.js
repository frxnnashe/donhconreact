// Configuración global para optimización de imágenes

export const IMAGE_CONFIG = {
  // Calidad de compresión por formato
  quality: {
    webp: 85,
    jpeg: 80,
    png: 90,
    avif: 80
  },

  // Tamaños responsivos predefinidos
  breakpoints: {
    mobile: 320,
    tablet: 640,
    desktop: 1024,
    wide: 1920,
    ultrawide: 2560
  },

  // Configuración de lazy loading
  lazyLoading: {
    threshold: 0.01,
    rootMargin: '100px',
    enablePlaceholder: true,
    placeholderQuality: 10
  },

  // Imágenes críticas que deben precargarse
  criticalImages: [
    '/img/IMG_0730.webp',
    '/img/pileta-2.webp',
    '/img/IMG_4944.webp'
  ],

  // Configuración según tipo de conexión
  connectionQuality: {
    'slow-2g': { quality: 50, enableLazyLoad: true, maxSize: 640 },
    '2g': { quality: 60, enableLazyLoad: true, maxSize: 640 },
    '3g': { quality: 70, enableLazyLoad: true, maxSize: 1024 },
    '4g': { quality: 85, enableLazyLoad: true, maxSize: 1920 },
    'default': { quality: 85, enableLazyLoad: true, maxSize: 1920 }
  },

  // Aspect ratios comunes
  aspectRatios: {
    square: '1/1',
    landscape: '4/3',
    widescreen: '16/9',
    ultrawide: '21/9',
    portrait: '3/4'
  },

  // Formatos soportados en orden de preferencia
  formats: ['avif', 'webp', 'jpeg', 'png'],

  // Configuración de preload
  preload: {
    enabled: true,
    fetchPriority: 'high',
    type: 'image/webp'
  },

  // Optimizaciones de rendimiento
  performance: {
    enableContentVisibility: true,
    enableWillChange: false, // Solo para animaciones
    enableTransform3d: true, // Aceleración por hardware
    enableDecodeAsync: true
  }
};

// Obtener configuración según tipo de conexión
export const getConnectionConfig = (effectiveType = '4g') => {
  return IMAGE_CONFIG.connectionQuality[effectiveType] || IMAGE_CONFIG.connectionQuality.default;
};

// Verificar si una imagen es crítica
export const isCriticalImage = (src) => {
  return IMAGE_CONFIG.criticalImages.includes(src);
};

// Obtener aspect ratio por nombre
export const getAspectRatio = (name) => {
  return IMAGE_CONFIG.aspectRatios[name] || 'auto';
};

export default IMAGE_CONFIG;
