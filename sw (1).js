// sw.js — ضعه بجانب index.html في نفس المجلد (يلزم https)
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("push",function(e){
  var d={};try{d=e.data.json()}catch(x){d={b:e.data?e.data.text():""}}
  e.waitUntil(self.registration.showNotification(d.t||"غرفة المذاكرة",{body:d.b||"",tag:d.tag||"sr",renotify:true,vibrate:[200,100,200],dir:"rtl",lang:"ar"}))});
self.addEventListener("notificationclick",function(e){
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(function(l){
    for(var i=0;i<l.length;i++){if("focus" in l[i])return l[i].focus()}
    return self.clients.openWindow("./")}))});
