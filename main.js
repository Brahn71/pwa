if ('serviceWorker' in navigator) {
  console.log('Service Worker es compatible');

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        console.log('Service Worker registrado con éxito. Scope:', reg.scope);
      })
      .catch(err => {
        console.error('Fallo al registrar el Service Worker:', err);
      });
  });
} else {
  console.log('Service Worker no es compatible con este navegador');
}