// Cache only public reading resources. Never store a gated lesson or its images.
const CACHE='obadiah-public-v4';
const FILES=['','index.html','styles.css','app.js','study.js','data.json','references.json','assets/fonts.css','assets/dgroups.png','assets/favicon.svg','assets/eic-logo-light.png','assets/eic-logo-dark.png','assets/obadiah-engraving.webp','assets/concept-pride-false-security.webp','assets/concept-responsibility-others.webp','assets/concept-day-of-yahweh.webp','assets/concept-restoration-kingdom.webp'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES.map(path=>new URL(path,self.registration.scope)))).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('obadiah-public-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);const scope=new URL(self.registration.scope).pathname;
 const path=url.pathname.startsWith(scope)?url.pathname.slice(scope.length):null;
 if(event.request.method!=='GET'||url.origin!==self.location.origin||path===null||path.startsWith('api/')||path.startsWith('published/')||!FILES.includes(path))return;
 event.respondWith(fetch(event.request).then(response=>{
   if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,copy)));}
   return response;
 }).catch(()=>caches.match(event.request).then(cached=>cached||Response.error())));
});
