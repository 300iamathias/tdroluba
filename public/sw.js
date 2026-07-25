// Service Worker — Distri Roluba PWA v8
// Cache de app shell para instalación + uso offline básico.
const CACHE = "distri-roluba-v8";
const PRECACHE = [
  "/",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/apple-touch-icon.png",
  "/images/client-headshot.jpg",
  "/images/logo.png",
];

// Recursos Same-Origin que conviene cachear en runtime (imágenes)
const RUNTIME_IMG_RE = /^https?:\/\/[^/]+\/(images|icons)\//;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      // No fallar si algún recurso precacheado 404
      Promise.allSettled(PRECACHE.map((u) => cache.add(u)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Navegaciones: network-first, fallback a cache "/" (app shell)
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("/")))
    );
    return;
  }

  // Imágenes Same-Origin: cache-first con fallback
  if (RUNTIME_IMG_RE.test(req.url)) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        });
      })
    );
    return;
  }

  // Resto: intentar red, fallback a cache
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.status === 200 && url.origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req))
  );
});
