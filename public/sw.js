// rokdbot.com — Service Worker KILL SWITCH
// Cleans up stale caches from previous broken deploys
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map((name) => caches.delete(name)));
      console.log('[SW kill switch] cleared', cacheNames.length, 'caches');
    } catch (e) { console.error('cache cleanup failed:', e); }
    try {
      await self.registration.unregister();
      console.log('[SW kill switch] unregistered');
    } catch (e) { console.error('unregister failed:', e); }
    try {
      const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      for (const client of clients) {
        client.navigate(client.url);
      }
      console.log('[SW kill switch] reloaded', clients.length, 'tabs');
    } catch (e) { console.error('reload failed:', e); }
  })());
});
self.addEventListener('fetch', (event) => {
  return;
});
