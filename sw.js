// asignar nombre y version del cache
const CACHE_NAME = 'v1_cache_mi_pwa';

//Archivos a cacher en aplicacion
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './main.js',
    './script.js',
    './style.css',
    './img/max.jpg',
    './img/juan.jpg',
    './img/icon-48.png',
    './img/icon-72.png',
    './img/icon-96.png',
    './img/icon-144.png'
];



self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const results = await Promise.allSettled(
      urlsToCache.map((url) => cache.add(url))
    );
    const failed = results.filter(r => r.status === "rejected");
    if (failed.length) console.log("Algunos recursos no se cachearon:", failed.length);
    self.skipWaiting();
  })());
});


// Evento activate (limpia caches anteriores)
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

//evento fetch (intercepta las peticiones y responde con el cache o la petición a la url)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) return response; // Devuelve el recurso cacheado
      return fetch(e.request); // Realiza la petición a la URL
    })
  );
});
