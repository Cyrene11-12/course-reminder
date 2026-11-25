/* 璇捐〃 路 鎻愰啋 鈥斺€?Service Worker
   绛栫暐锛氬鑸拰浠ｇ爜绫昏祫婧愩€岀綉缁滀紭鍏堛€嶏紙淇濊瘉鏀瑰畬绔嬪埢鐢熸晥锛夛紝鏂綉鏃跺洖閫€缂撳瓨锛?   鍥炬爣绛夐潤鎬佽祫婧愩€岀紦瀛樹紭鍏堛€嶃€傝瘑鍒帴鍙ｏ紙/api/*锛夋案涓嶆嫤鎴€?*/
const CACHE = "cr-shell-v6";
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
  if (url.pathname.startsWith("/api/")) return;   // 璇嗗埆鎺ュ彛蹇呴』瀹炴椂

  // 瀵艰埅 / 浠ｇ爜 / 鏍峰紡 / 鏁版嵁锛氬厛瑕佺綉缁滐紝澶辫触鍐嶅悆缂撳瓨
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

  // 鍥炬爣绛夛細缂撳瓨浼樺厛
  e.respondWith(
    caches.match(req).then((hit) =>
      hit || fetch(req).then((res) => put(req, res)).catch(() => hit)
    )
  );
});
