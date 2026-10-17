/**
 * PLE-CC2 OSPE Practice System — Service Worker
 * File: sw.js
 * ====================================================
 * จัดการ Caching ทรัพยากรระบบเพื่อเพิ่มความเร็วในการโหลด (Preloading) 
 * และสนับสนุนการเข้าใช้งานแบบออฟไลน์ (Offline Mode)
 * Version: ple-cc2-ospe-v1.3.3 (Fast-Timeout Network-First for Navigation)
 */

const CACHE_NAME = 'ple-cc2-ospe-v1.3.4';
const ASSETS = [
  './',
  './index.html',
  './case-library.html',
  './case-viewer.html',
  './exam-simulation.html',
  './style.css',
  './app.js',
  './case-data-offline.js',
  './case-details-offline.js'
];

// 1. Install Event: บันทึก Cache ของทรัพยากรตั้งต้น
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing ple-cc2-ospe-v1.3.3...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        ASSETS.map(asset => {
          return cache.add(asset).catch(err => {
            console.warn(`[Service Worker] Failed to pre-cache: ${asset}`, err);
          });
        })
      ).then(() => {
        console.log('[Service Worker] Pre-caching complete.');
        return self.skipWaiting();
      });
    })
  );
});

// 2. Activate Event: ล้าง Cache เก่าที่ไม่ได้ใช้งาน
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating ple-cc2-ospe-v1.3.3 & Cleaning old caches...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Deleting obsolete cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event: Intercept และให้บริการข้อมูล
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // ยกเว้น API การเรียกข้อมูลสดจาก Google Apps Script, Firebase และบริการคลาวด์ภายนอก
  if (
    url.hostname.includes('script.google.com') ||
    url.hostname.includes('firebaseio.com') ||
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('gstatic.com') ||
    url.hostname.includes('firebaseapp.com') ||
    url.hostname.includes('drive.google.com') ||
    url.hostname.includes('lh3.googleusercontent.com')
  ) {
    return;
  }

  const isHtmlNavigation = event.request.mode === 'navigate' || event.request.destination === 'document';

  if (isHtmlNavigation) {
    // Fast-Timeout Network-First: รอข้อมูลใหม่จากเน็ตไม่เกิน 1.2 วินาที หากเน็ตช้าหรือออฟไลน์ ให้ใช้แคชในเครื่องทันที
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        const timeoutPromise = new Promise(resolve => setTimeout(() => resolve(null), 1200));
        const networkPromise = fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => null);

        return Promise.race([networkPromise, timeoutPromise]).then(fastestResponse => {
          if (fastestResponse) return fastestResponse;
          return cache.match(event.request, { ignoreSearch: true }).then(cachedResponse => {
            if (cachedResponse) return cachedResponse;
            return networkPromise.then(res => {
              if (res) return res;
              return cache.match('./index.html', { ignoreSearch: true });
            });
          });
        });
      })
    );
    return;
  }

  // ทรัพยากรไฟล์อื่น (CSS, JS, มีเดีย, เสียง) ให้ใช้ Stale-While-Revalidate เพื่อความเร็วสูงสุด (0ms)
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      const isDataScript = url.pathname.includes('case-data-offline.js') || url.pathname.includes('case-details-offline.js');
      const matchOptions = isDataScript ? {} : { ignoreSearch: true };
      return cache.match(event.request, matchOptions).then(cachedResponse => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(err => {
          console.warn('[Service Worker] Network request failed (serving cached/offline):', err);
          return null;
        });

        if (cachedResponse) return cachedResponse;
        return fetchPromise.then(res => {
          if (res) return res;
          return new Response('', { status: 503, statusText: 'Service Unavailable (Offline)' });
        });
      });
    })
  );
});
