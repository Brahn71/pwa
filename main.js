// Cargar el service worker
if ('serviceWorker' in navigator) {
  console.log('Service Worker es compatible');
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registrado con éxito (scope):', reg.scope))
      .catch(err => console.log('Fallo al registrar el Service Worker:', err));
  });
} else {
  console.log('Service Worker no es compatible');
}