parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mdAn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createIsbotFromList=exports.createIsbot=void 0,exports.getPattern=a,exports.isbot=i,exports.list=exports.isbotPatterns=exports.isbotPattern=exports.isbotNaive=exports.isbotMatches=exports.isbotMatch=void 0;var e,t=[" daum[ /]"," deusu/"," yadirectfetcher","(?:^|[^g])news","(?<! (?:channel/|google/))google(?!(app|/google| pixel))","(?<! cu)bot(?:[^\\w]|_|$)","(?<! ya(?:yandex)?)search","(?<!(?:lib))http","(?<![hg]m)score","@","\\(\\)","\\.com","^12345","^<","^[\\w \\.\\-\\(?:\\):]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)","^[^ ]{50,}$","^\\w+/[\\w\\(\\)]*$","^active","^ad muncher","^amaya","^avsdevicesdk/","^biglotron","^bot","^clamav[ /]","^client/","^cobweb/","^custom","^ddg[_-]android","^discourse","^dispatch/\\d","^downcast/","^duckduckgo","^facebook","^getright/","^gozilla/","^hatena","^hobbit","^hotzonu","^hwcdn/","^jeode/","^jetty/","^jigsaw","^microsoft bits","^movabletype","^mozilla/\\d\\.\\d \\(compatible;?\\)$","^mozilla/\\d\\.\\d \\w*$","^navermailapp","^netsurf","^offline explorer","^postman","^python","^rank","^read","^reed","^rest","^serf","^snapchat","^space bison","^svn","^swcd ","^taringa","^thumbor/","^track","^valid","^w3c","^webbandit/","^webcopier","^wget","^whatsapp","^wordpress","^xenu link sleuth","^yahoo","^yandex","^zdm/\\d","^zoom marketplace/","^{{.*}}$","archive","ask jeeves/teoma","bit\\.ly/","bluecoat drtr","browsex","burpcollaborator","capture","catch","check","chrome-lighthouse","chromeframe","classifier","cloud","crawl","dareboost","datanyze","dejaclick","dmbrowser","download","evc-batch/","feed","firephp","gomezagent","headless","httrack","hubspot marketing grader","hydra","ibisbrowser","images","insight","inspect","iplabel","ips-agent","java(?!;)","library","mail\\.ru/","manager","neustar wpm","node","nutch","offbyone","optimize","pageburst","parser","perl","phantom","pingdom","powermarks","preview","proxy","ptst[ /]\\d","reputation","resolver","retriever","rexx;","rigor","robot","rss","scan","scrape","server","sogou","sparkler/","speedcurve","spider","splash","statuscake","supercleaner","synapse","synthetic","tools","torrent","trace","transcoder","url","virtuoso","wappalyzer","webglance","webkit2png","whatcms/","zgrab"],r=" daum[ /]| deusu/| yadirectfetcher|(?:^|[^g])news|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bot(?:[^\\w]|_|$)|(?<! ya(?:yandex)?)search|(?<!(?:lib))http|(?<![hg]m)score|@|\\(\\)|\\.com|^12345|^<|^[\\w \\.\\-\\(?:\\):]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^biglotron|^bot|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^facebook|^getright/|^gozilla/|^hatena|^hobbit|^hotzonu|^hwcdn/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/\\d\\.\\d \\(compatible;?\\)$|^mozilla/\\d\\.\\d \\w*$|^navermailapp|^netsurf|^offline explorer|^postman|^python|^rank|^read|^reed|^rest|^serf|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^valid|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|^{{.*}}$|archive|ask jeeves/teoma|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check|chrome-lighthouse|chromeframe|classifier|cloud|crawl|dareboost|datanyze|dejaclick|dmbrowser|download|evc-batch/|feed|firephp|gomezagent|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|images|insight|inspect|iplabel|ips-agent|java(?!;)|library|mail\\.ru/|manager|neustar wpm|node|nutch|offbyone|optimize|pageburst|parser|perl|phantom|pingdom|powermarks|preview|proxy|ptst[ /]\\d|reputation|resolver|retriever|rexx;|rigor|robot|rss|scan|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|trace|transcoder|url|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|zgrab",o=/bot|spider|crawl|http|lighthouse/i;function a(){if(e instanceof RegExp)return e;try{e=new RegExp(r,"i")}catch(t){e=o}return e}var s=exports.list=t,n=exports.isbotNaive=function(e){return Boolean(e)&&o.test(e)};function i(e){return Boolean(e)&&a().test(e)}var c=exports.createIsbot=function(e){return function(t){return Boolean(t)&&e.test(t)}},p=exports.createIsbotFromList=function(e){var t=new RegExp(e.join("|"),"i");return function(e){return Boolean(e)&&t.test(e)}},l=exports.isbotMatch=function(e){var t,r;return null!=(r=null==(t=null==e?void 0:e.match(a()))?void 0:t[0])?r:null},d=exports.isbotMatches=function(e){return s.map(function(t){var r;return null==(r=null==e?void 0:e.match(new RegExp(t,"i")))?void 0:r[0]}).filter(Boolean)},u=exports.isbotPattern=function(e){var t;return e&&null!=(t=s.find(function(t){return new RegExp(t,"i").test(e)}))?t:null},b=exports.isbotPatterns=function(e){return e?s.filter(function(t){return new RegExp(t,"i").test(e)}):[]};
},{}],"g4tf":[function(require,module,exports) {
"use strict";var e=require("..");{var t,n=document.querySelector("textarea"),o=document.querySelector("output"),d=document.querySelector('[id="copy-link"]'),r=new URL(window.location.href),i=r.searchParams.get("ua");function a(e){var n=e.target.value;clearTimeout(t),t=setTimeout(l,200,n)}function c(e,t,n){if(t){var o=document.createElement("kbd");o.appendChild(document.createTextNode("".concat(n))),e.appendChild(o)}else e.appendChild(document.createTextNode("".concat(n)))}function u(t){var n=document.createDocumentFragment();if((0,e.isbot)(t)){var o=(0,e.isbotMatch)(t),d=(0,e.isbotPatterns)(t),r=d.find(function(e){return new RegExp(e,"i").test(o)});console.log(d,r),c(n,null,"I think so, yes\n"),c(n,null,"The substring "),c(n,"kbd",o),c(n,null," matches the pattern "),c(n,"kbd",r)}else c(n,null,"I don't think so, no\nI could not find a pattern I recognise");return n}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.innerHTML;for(e=e.trim();o.firstChild;)o.removeChild(o.firstChild);""!==e?o.appendChild(u(e)):o.appendChild(document.createTextNode("Insert user agent string in the text box"))}n.childNodes.forEach(function(e){var t;return null===(t=e.parentNode)||void 0===t?void 0:t.removeChild(e)}),n.appendChild(document.createTextNode(i||navigator.userAgent)),n.addEventListener("keyup",a),n.addEventListener("paste",a),n.addEventListener("focus",function(){return n.select()}),l(),d.addEventListener("click",function(e){e.preventDefault();var t=document.location,o=t.protocol,d=t.host,r=t.pathname;navigator.clipboard.writeText([o,"//",d,r,"?ua=",encodeURIComponent(n.value)].join(""));var i=document.createElement("dialog");i.appendChild(document.createTextNode("copied to clipboard")),document.body.appendChild(i),i.showModal(),setTimeout(function(){i.addEventListener("transitionend",function(){i.close(),document.body.removeChild(i)}),i.style.opacity="0"},1e3)})}
},{"..":"mdAn"}]},{},["g4tf"], null)
//# sourceMappingURL=script.b59b353b.js.map