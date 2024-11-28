self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('vagas-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/app.js',
        '/logo.png',
        '/logo192x192.png',
        '/logo512x512.png',
        '/screenshot-mobile.png',
        '/estagio1.jpg',   
        '/estagio2.jpg',
        '/estagio3.jpg',
        '/estagio4.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request); 
    })
  );
});
