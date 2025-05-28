import { i as isNode } from './isNode-e6f1444c.js';

/**
 * Load and return plotly library from CDN in browsers.
 * In node server environment returns null.
 * @returns Plotly (in browser) or null (in server)
 */
const importMapLibre = async () => new Promise((resolve, reject) => {
  // if we are on a node server resolve with null
  if (isNode())
    return resolve(null);
  // if MapLibre is already defined resolve it
  if ('maplibregl' in window) {
    return resolve(window.maplibregl); //TYPE IS NOT RIGHT! MIGHT BE A PROBLEM WITH THE IMPORT. PLEASE FIX!
  }
  // create new script element
  const script = document.createElement('script');
  // register on load callback and resolve MapLibre
  script.onload = () => resolve(window.maplibregl);
  // register on error callback and reject
  script.onerror = reject;
  // set url
  script.src = 'https://cdn.jsdelivr.net/npm/maplibre-gl@3.4.1/dist/maplibre-gl.js';
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/maplibre-gl@3.4.1/dist/maplibre-gl.css';
  // append script to load Plotly from CDN to document
  document.head.appendChild(link);
  document.body.appendChild(script);
});

export { importMapLibre as i };

//# sourceMappingURL=importMapLibre-b90da2cb.js.map