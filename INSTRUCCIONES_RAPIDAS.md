# ⚡ Instrucciones Rápidas - Optimización de Imágenes

## 🎯 Ejecutar Ahora (3 pasos)

### 1️⃣ Optimizar las imágenes existentes
```bash
npm run optimize-images
```
Este comando procesará todas las imágenes en `/public/img/` y creará versiones optimizadas.

### 2️⃣ Probar en desarrollo
```bash
npm run dev
```
Abre http://localhost:5173 y verifica que las imágenes se cargan correctamente.

### 3️⃣ Build de producción
```bash
npm run build
```
Las imágenes se optimizarán automáticamente durante el build.

## ✅ Verificación Rápida

### Comprobar que funciona:
1. Abre Chrome DevTools (F12)
2. Ve a la pestaña Network
3. Filtra por "Img"
4. Recarga la página
5. Verifica:
   - ✅ Imágenes en formato WebP
   - ✅ Solo se cargan las imágenes visibles (lazy loading)
   - ✅ Tamaños de archivo reducidos

## 📝 Qué se Optimizó

### Automático (ya implementado):
- ✅ Lazy loading en todas las imágenes
- ✅ Preload de imágenes críticas (hero)
- ✅ Compresión WebP automática
- ✅ Placeholders durante la carga
- ✅ Adaptación según velocidad de conexión
- ✅ Aspect ratios para evitar saltos de layout

### Componentes actualizados:
- ✅ Gallery.jsx
- ✅ Carousel.jsx
- ✅ CarouselUnidad.jsx
- ✅ CarouselUnidad2.jsx
- ✅ CarouselUnidad3.jsx

## 🔧 Configuración Opcional

### Cambiar calidad de compresión
**Archivo**: `vite.config.js` línea 35
```js
webp: {
  quality: 85,  // Cambiar entre 60-100
}
```

### Ajustar lazy loading
**Archivo**: `src/config/imageConfig.js` línea 17
```js
lazyLoading: {
  rootMargin: '100px',  // Distancia antes de cargar
}
```

## 📊 Resultados Esperados

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Tamaño imágenes | 100% | 30-60% | 40-70% reducción |
| Imágenes cargadas | Todas | Solo visibles | Lazy loading |
| LCP | Variable | < 2.5s | Optimizado |
| Lighthouse Score | Variable | 90+ | Mejorado |

## 🎨 Usar en Nuevos Componentes

```jsx
import OptimizedImage from './components/OptimizedImage';

// Imagen normal
<OptimizedImage 
  src="/img/foto.webp" 
  alt="Descripción"
  aspectRatio="16/9"
/>

// Imagen hero (prioritaria)
<OptimizedImage 
  src="/img/hero.webp" 
  alt="Hero"
  priority={true}
/>
```

## 🚨 Importante

1. **Todas las imágenes deben estar en formato WebP**
2. **El script se ejecuta automáticamente antes del build**
3. **No elimines la carpeta `/public/img/optimized/`** (se genera automáticamente)
4. **Solo marca como `priority={true}` las imágenes above-the-fold**

## 📚 Documentación Completa

- `IMAGE_OPTIMIZATION.md` - Guía detallada
- `OPTIMIZACION_RESUMEN.md` - Resumen ejecutivo
- `src/config/imageConfig.js` - Configuración centralizada

## ✨ Listo!

Tu web de cabañas ahora tiene todas las imágenes optimizadas automáticamente. 
No necesitas hacer nada más, todo funciona de forma automática.
