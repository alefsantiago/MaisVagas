self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('meu-pwa-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/app.js',
        '/assets/logo192x192.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; 
      }

    
      return fetch(event.request).catch(() => {
        return caches.match('/offline.html');
      });
    })
  );
});
