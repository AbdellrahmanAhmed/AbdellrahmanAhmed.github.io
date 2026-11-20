/* Keeps a copy of the board so the page opens with no connection. Online, the network copy always wins. */
const C='yawmi-page-42',ROOT=self.registration.scope;
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.add(new Request(ROOT,{cache:'reload'}))).catch(()=>{}))});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||!r.url.startsWith(ROOT))return;
  e.respondWith(fetch(r).then(res=>{if(res&&res.ok){const c=res.clone();caches.open(C).then(x=>x.put(r,c)).catch(()=>{})}return res})
    .catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match(ROOT,{ignoreSearch:true})).then(m=>m||Response.error())))});
