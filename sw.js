// 설치 가능하게 하는 최소 서비스워커 (네트워크 그대로 사용)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
