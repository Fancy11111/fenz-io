importScripts('/js/cache-polyfill.js');
var CACHE_NAME = 'fenzio';
var CACHING = [
  '/',
  '/css/style.css',
  '/css/desktop.css',
  '/css/mobile.css',
  '/css/solid.min.css',
  '/css/brands.min.css',
  '/css/fontawesome.min.css',
  '/images/temp-background.jpg',
  '/images/temp-background-mobile.jpg',
  '/icons/favicon.ico',
  //'/js/cache-polyfill.js',
  // '/open-sans-v16-latin_latin-ext700.eot',
  // '/open-sans-v16-latin_latin-ext700.svg',
  // '/open-sans-v16-latin_latin-ext700.ttf',
  // '/open-sans-v16-latin_latin-ext700.woff',
  '/fonts/open-sans-v16-latin_latin-ext-700.woff2',
  // '/open-sans-v16-latin_latin-ext-regular.eot',
  // '/open-sans-v16-latin_latin-ext-regular.svg',
  // '/open-sans-v16-latin_latin-ext-regular.ttf',
  // '/open-sans-v16-latin_latin-ext-regular.woff',
  '/fonts/open-sans-v16-latin_latin-ext-regular.woff2',
  '/webfonts/fa-brands-400.woff2',
  '/webfonts/fa-solid-900.woff2'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(CACHING);
      })
      .catch(function(error) {
        console.log('test');
        let err = error || {};
        console.error(err);
        Object.keys(err).forEach(function(key) {
          console.log(key);
        });
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
