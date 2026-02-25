'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "56fba94410d47b65b61577f78a89e668",
"assets/AssetManifest.bin.json": "36f913ea092ef301ef2b40c8f076a975",
"assets/assets/data/dealers.json": "20c18cb790b92efafb71013620136627",
"assets/assets/data/schedule.json": "6932efe625969db64bc0587af32664fc",
"assets/assets/fonts/OpenSans-Bold.ttf": "6bbd5cf43b71e9b0189b2de47ac42950",
"assets/assets/fonts/OpenSans-BoldItalic.ttf": "ec98b565cf4e4f2be7999a2a8b94d641",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "73e878b76363e8a8041a0b9c215c6222",
"assets/assets/fonts/OpenSans-ExtraBoldItalic.ttf": "59e5da6fa66310ad9896c75519d1048c",
"assets/assets/fonts/OpenSans-Italic.ttf": "cb1fe0e823d6b94e5a6a888a84b8dc79",
"assets/assets/fonts/OpenSans-Light.ttf": "6fdf8d974a815239350fa563bcfadb3c",
"assets/assets/fonts/OpenSans-LightItalic.ttf": "e9b411080888d6a606ebe1fb4819253e",
"assets/assets/fonts/OpenSans-Medium.ttf": "899f008e0670a768d2e42ad81c0380fe",
"assets/assets/fonts/OpenSans-MediumItalic.ttf": "9ad5a273804b2717e266791ad9d3efc1",
"assets/assets/fonts/OpenSans-Regular.ttf": "94d168f74b7dd50963fd44fe697d6f3e",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "ebebb4b54355687d59886f3e6f1694b3",
"assets/assets/fonts/OpenSans-SemiBoldItalic.ttf": "4a7f3299663213328769c4af906309ab",
"assets/assets/fonts/OpenSans_Condensed-Bold.ttf": "5979403d3648293f7202de45ab534d0a",
"assets/assets/fonts/OpenSans_Condensed-BoldItalic.ttf": "1eee3e93c3f6d902bee4992253275d5a",
"assets/assets/fonts/OpenSans_Condensed-ExtraBold.ttf": "0ce3d2be4e17501422f432d02deab489",
"assets/assets/fonts/OpenSans_Condensed-ExtraBoldItalic.ttf": "0470206f78fda5b6d1900b5d639b9629",
"assets/assets/fonts/OpenSans_Condensed-Italic.ttf": "c7dab29e783456ff3acb59737f0ed034",
"assets/assets/fonts/OpenSans_Condensed-Light.ttf": "96b46ff4f6ad6ef57df21d84e9a20381",
"assets/assets/fonts/OpenSans_Condensed-LightItalic.ttf": "ed5fad128b93303fa2b3945fe674d440",
"assets/assets/fonts/OpenSans_Condensed-Medium.ttf": "341fdc9ef2201f1666a097877636bdcb",
"assets/assets/fonts/OpenSans_Condensed-MediumItalic.ttf": "5c318079f96595abd91ee3e368663cdc",
"assets/assets/fonts/OpenSans_Condensed-Regular.ttf": "501b8f846757dbcbd69a35cc12328a75",
"assets/assets/fonts/OpenSans_Condensed-SemiBold.ttf": "7d4e608376db2860196aa005e801c30c",
"assets/assets/fonts/OpenSans_Condensed-SemiBoldItalic.ttf": "1024393e7854a34f0edecf87d0d4d198",
"assets/assets/fonts/OpenSans_SemiCondensed-Bold.ttf": "31449284a7065433d2a41a2a2ec1eaaf",
"assets/assets/fonts/OpenSans_SemiCondensed-BoldItalic.ttf": "d84c6c3d483e2e824debe9e7a9f89434",
"assets/assets/fonts/OpenSans_SemiCondensed-ExtraBold.ttf": "d4bbdb3529572fe97687bc3d07d2fa70",
"assets/assets/fonts/OpenSans_SemiCondensed-ExtraBoldItalic.ttf": "c68140255de057fe8fca394976d2e6d0",
"assets/assets/fonts/OpenSans_SemiCondensed-Italic.ttf": "adf217a7c01aaa350f5d3fb0df765291",
"assets/assets/fonts/OpenSans_SemiCondensed-Light.ttf": "068a00ce51ba25236d0475fc79f50326",
"assets/assets/fonts/OpenSans_SemiCondensed-LightItalic.ttf": "090d1c8edf5963265e89ba2e86e7f3b6",
"assets/assets/fonts/OpenSans_SemiCondensed-Medium.ttf": "baaea40cf3a2de43dfc789add70b999c",
"assets/assets/fonts/OpenSans_SemiCondensed-MediumItalic.ttf": "d4147531d2b867a077e4b4ca8dd2bcdf",
"assets/assets/fonts/OpenSans_SemiCondensed-Regular.ttf": "288b9e3dd14cbb57ad3820288f28f416",
"assets/assets/fonts/OpenSans_SemiCondensed-SemiBold.ttf": "9eca4129b56450bb6f0e31e29e84269f",
"assets/assets/fonts/OpenSans_SemiCondensed-SemiBoldItalic.ttf": "e1f2cd88cc3e7c4293c609c20e8f33f3",
"assets/assets/images/app_icon.png": "cfdf7039a73d2a74886bc43618d8c55f",
"assets/assets/images/banner_main.jpg": "8b84508ed81c1fdd594281f52b7e6202",
"assets/assets/images/characters_bg.jpg": "e56b984763cc0f7566e6414770562405",
"assets/assets/images/desert_bg.jpg": "690c48b74d6c53e5064978b132628cf3",
"assets/assets/images/header.png": "bd9acd75d0eed0a8f571ac66842ca44a",
"assets/assets/images/logoescudo.png": "e8dab7d0a7f781f070b0f4a8e285e47c",
"assets/assets/images/logo_2026.svg": "ba3e98d09d2551f46db18c430ab28421",
"assets/assets/images/logo_full.svg": "7016629db4a9148b02ef9229c1a5c971",
"assets/assets/images/logo_r.png": "e275bec05629b1d1d9033f2364a668ff",
"assets/assets/images/logo_r.svg": "3c577fe20659a7d9c429752bd7cf5995",
"assets/assets/images/map_dealers.png": "3768f36485b4ea8319970be2011d3572",
"assets/assets/images/mascot.png": "8879b9d329822a24e5ffd261919760c4",
"assets/assets/images/ReporteServicioSocial.pdf": "46146178d489c3829b7ac16b60ce7722",
"assets/assets/images/web_home_banner_esp.png": "996806af5c3820b9f5492d6cb9970081",
"assets/assets/images/web_home_yuri.png": "12f3b0fd381dfa3b8ea7144a19046d20",
"assets/assets/images/yuri_logo.svg": "28f937e55a62b2de9593265ebc49e089",
"assets/FontManifest.json": "0111d472644a3ebc887a0613c7bd8b56",
"assets/fonts/MaterialIcons-Regular.otf": "d9eefc5e236392227db8d29a5a4bdff0",
"assets/NOTICES": "4c89e44427b5212a2f8159d0a0813577",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "e275bec05629b1d1d9033f2364a668ff",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "cff31bda21ea1c740e0d058646b38e3e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cc35da0a152c02059c21b92cf8f84264",
"/": "cc35da0a152c02059c21b92cf8f84264",
"main.dart.js": "bdb7395da95f04e13f9beeca1edc039e",
"manifest.json": "d75e44871b27235ba2c508d27c710f5b",
"version.json": "a2b43de8d637ebe4206aa6f3d6e57523"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
