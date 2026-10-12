// Spell Log offline cache. Bump V when you change any file so phones pick up the update.
const V = 'spell-log-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const url = new URL(e.request.url);
      const ours = url.origin === location.origin;
      const fonts = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
      if ((ours || fonts) && (res.ok || res.type === 'opaque')) {
        const copy = res.clone();
        caches.open(V).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
