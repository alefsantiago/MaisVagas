self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('vagas-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './styles.css',
        './app.js',
        './assets/logo.png',
        './assets/logo192x192.png',
        './assets/logo512x512.png',
        './assets/screenshot-mobile.png',
        './assets/estagio1.jpg',   
        './assets/estagio2.jpg',
        './assets/estagio3.jpg',
        './assets/estagio4.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request); 
    })
  );
});
