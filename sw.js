// Sentence Builder V1.7 – offline cache. Bump VERSION when you upload a new index.html.
const VERSION = "sb-v1.7.0";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/icon-180.png"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // app files: cache first, then network
    e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; }).catch(() => caches.match("./index.html"))));
  } else if (/fonts\.(googleapis|gstatic)\.com/.test(url.host)) {
    // Google Fonts: keep a copy so fonts work offline after the first online visit
    e.respondWith(caches.open(VERSION + "-fonts").then((c) => c.match(req).then((hit) => { const net = fetch(req).then((res) => { c.put(req, res.clone()); return res; }).catch(() => hit); return hit || net; })));
  }
});
