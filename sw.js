// Build-time injected by Vite; fallback to v1 in dev
const VERSION = (self.__BUILD_VERSION__ || "v1");
const CACHE = `silli-mmc-${VERSION}`;

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
self.addEventListener("fetch", () => {});
