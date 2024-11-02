const cacheName = 'pwa-notification-app-v1';
const assetsToCache = [
    '/',
    '/index.html',
    '/login.html',
    '/styles.css',
    '/main.js',
    '/manifest.json',
    // Add other assets like icons
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                return cache.addAll(assetsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
