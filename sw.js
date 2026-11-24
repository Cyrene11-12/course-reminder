/* 课表 · 提醒 —— Service Worker
   策略：导航和代码类资源「网络优先」（保证改完立刻生效），断网时回退缓存；
   图标等静态资源「缓存优先」。识别接口（/api/*）永不拦截。 */
const CACHE = "cr-shell-v5";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./data.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(ASSETS))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function put(req, res) {
  if (res && res.status === 200 && res.type === "basic") {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
  }
  return res;
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;   // 识别接口必须实时

  // 导航 / 代码 / 样式 / 数据：先要网络，失败再吃缓存
  const fresh = req.mode === "navigate" || /\.(html|js|css|json)$/.test(url.pathname);
  if (fresh) {
    e.respondWith(
      fetch(req)
        .then((res) => put(req, res))
        .catch(() =>
          caches.match(req).then((hit) =>
            hit || (req.mode === "navigate" ? caches.match("./index.html") : undefined)
          )
        )
    );
    return;
  }

  // 图标等：缓存优先
  e.respondWith(
    caches.match(req).then((hit) =>
      hit || fetch(req).then((res) => put(req, res)).catch(() => hit)
    )
  );
});
