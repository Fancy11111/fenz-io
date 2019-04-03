importScripts('js/cache-polyfill.js');
var CACHE_NAME = 'fenzio';
var CACHING = [
  '/',
  '/css/style.css',
  '/css/vpMax600.css',
  '/css/vpMin600.css',
  '/css/solid.min.css',
  '/css/brands.min.css',
  '/css/fontawesome.min.css',
  '/images/temp-background.jpg',
  'static/open-sans-v16-latin_latin-ext700.eot',
  'static/open-sans-v16-latin_latin-ext700.svg',
  'static/open-sans-v16-latin_latin-ext700.ttf',
  'static/open-sans-v16-latin_latin-ext700.woff',
  'static/open-sans-v16-latin_latin-ext700.woff2',
  'static/open-sans-v16-latin_latin-ext-regular.eot',
  'static/open-sans-v16-latin_latin-ext-regular.svg',
  'static/open-sans-v16-latin_latin-ext-regular.ttf',
  'static/open-sans-v16-latin_latin-ext-regular.woff',
  'static/open-sans-v16-latin_latin-ext-regular.woff2'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('fenzio').then(function(cache) {
      return cache.addAll([
        '/',
        '/css/style.css',
        '/css/vpMax600.css',
        '/css/vpMin600.css',
        '/images/temp-background.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      return fetch(event.request).then(function(response) {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // IMPORTANT: Clone the response. A response is a stream
        // and because we want the browser to consume the response
        // as well as the cache consuming the response, we need
        // to clone it so we have two streams.
        var responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});