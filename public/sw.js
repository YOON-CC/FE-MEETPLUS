if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WF3pWLDgr_65o1ZPMZvGY/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/WF3pWLDgr_65o1ZPMZvGY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/190-3592cf9d42f93acb.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/chunks/578-a7b4ba7420b1c060.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/chunks/app/(commonAccess)/join/page-18fa1215f5d09ae5.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/chunks/app/(commonAccess)/login/layout-cf541b905b12147b.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/chunks/app/(commonAccess)/login/page-c17d2deee8777919.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/chunks/app/_not-found/page-7e21eb3b383e386e.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/chunks/app/layout-a1be95c7c519fb88.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/chunks/app/page-4b9ea6c5ecca80da.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/chunks/fd9d1056-dfc0d8741092951e.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/chunks/main-468bffec33295105.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/chunks/main-app-199c30299a344487.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-c14cc66d3198a27f.js",revision:"WF3pWLDgr_65o1ZPMZvGY"},{url:"/_next/static/css/4e278c5a5cd4ae2c.css",revision:"4e278c5a5cd4ae2c"},{url:"/_next/static/css/d577db50390572b5.css",revision:"d577db50390572b5"},{url:"/_next/static/css/effebe46f81080e4.css",revision:"effebe46f81080e4"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icons/skyhorse.png",revision:"54ff922ed3b4d6377aa2d79313354dd4"},{url:"/images/login/loginLogo.png",revision:"01f1cbf87c797ec5cd9b2e6a5c9493b0"},{url:"/images/navbar/actionBtn.png",revision:"c91a3ce8dc0fd63474dbacb9b82219b9"},{url:"/images/navbar/chartBtn.png",revision:"5f4e156f4cf0fc81184a82d85cb0a86f"},{url:"/images/navbar/homeBtn.png",revision:"13178cae8c02e94df77ea5f7749931fd"},{url:"/images/navbar/myBtn.png",revision:"b255bc553763486493d996816e8772a8"},{url:"/images/navbar/searchBtn.png",revision:"1424f8cfe1ce13d3bd43c55e580a75d0"},{url:"/manifest.json",revision:"4d529482129577a9aa358e0e2aa36310"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));