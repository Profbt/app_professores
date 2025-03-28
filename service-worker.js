const CACHE_NAME = 'vicente-rijo-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/js/app.js',
  '/assets/img/logo.png',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});