!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){"use strict";var o=[],i=[],r=0,s=20,a=0;function u(e){var n=document.querySelector(".question__items"),t=(document.getElementsByClassName("question__item"),document.createElement("h")),s=document.createElement("div"),d=document.createElement("p"),f=document.createElement("div");t.setAttribute("class","question__header sg-text-bit sg-text-bit--large sg-text-bit--alt"),s.setAttribute("class","question__item"),d.setAttribute("class","question__text sg-header-primary sg-header-primary--small"),f.setAttribute("class","question__options"),n.insertBefore(s,document.querySelector(".question__item--last")),s.append(t,d,f),d.innerHTML=e[0].question,t.innerHTML="Question #"+(a+1),s.style.left=100*(a+1)+"%",document.querySelector(".question__item--last").style.left=100*(a+2)+"%",e[0].answers.forEach(function(n){var t=document.createElement("button"),s=document.querySelector(".message__feedback");f.appendChild(t),t.setAttribute("class","question__btn sg-button-primary sg-button-primary--dark"),t.innerHTML=n.answer,t.addEventListener("click",function(){var t;if(document.querySelector(".message").classList.remove("js-fadeout"),document.querySelector(".message").classList.add("js-fadein"),!0===n.correct?(this.className+="question__btn--right",s.textContent="You got it!",s.style.color="#53cf92",t=l(),document.querySelector(".message__link").textContent="Who is "+i[t].name+"? Read here!",document.querySelector(".message__link").setAttribute("href",""+i[t].link),document.querySelector(".message__about").textContent=""+i[t].right.text,document.querySelector(".message__image").setAttribute("src",""+i[t].right.img)):(this.className+=" question__btn--wrong",s.textContent="Sorry, but that is wrong.",s.style.color="#ff796b",c(l()),e.push(o[0])),e.splice(0,1),a++,0===e.length)return document.querySelector(".question__result").textContent=r+" s",0;u(e),document.querySelector(".js-question__item--remove").remove()})})}function c(e){document.querySelector(".message__link").textContent="Who is "+i[e].name+"? Read here!",document.querySelector(".message__link").setAttribute("href",""+i[e].link),document.querySelector(".message__about").textContent=""+i[e].wrong.text,document.querySelector(".message__image").setAttribute("src",""+i[e].wrong.img)}function l(){return Math.floor(11*Math.random())}function d(){var e=document.querySelector(".question__timer"),n=document.querySelector(".message__feedback"),t=document.querySelector(".question__result").textContent,i=(document.querySelector(".message__feedback"),setInterval(function(){if(s--,e.innerHTML=s+"s",0===o.length&&(clearInterval(i),e.style.visibility="hidden",t.textContent=r+" s"),0===s){if(n.textContent="Sorry, but you run out of time.",n.style.color="#ff796b",document.querySelector(".message").classList.remove("js-fadeout"),document.querySelector(".message").classList.add("js-fadein"),c(l()),r+=20-s,s=20,a++,clearInterval(i),0===o.length)return clearInterval(i),e.style.visibility="hidden",t.textContent=r+" s",0;u(o)}},1e3));document.querySelectorAll(".question__btn").forEach(function(e){e.addEventListener("click",function(){clearInterval(i),r+=20-s,s=20})})}window.onload=function(){var e;(e=new XMLHttpRequest).open("GET","https://kajetanbystry.github.io/brainlytask/data/feedback.json",!0),e.onload=function(){e.status>=200&&e.status<400?i=JSON.parse(e.responseText):console.log("no")},e.onerror=function(){console.log("why")},e.send(),function(){var e=new XMLHttpRequest;e.open("GET","https://gist.githubusercontent.com/vergilius/6d869a7448e405cb52d782120b77b82c/raw/e75dc7c19b918a9f0f5684595899dba2e5ad4f43/history-flashcards.json",!0),e.onload=function(){e.status>=200&&e.status<400?(u(o=JSON.parse(e.responseText)),function(){var e=document.getElementsByClassName("question__item"),n=document.querySelector(".js-question--btn__first"),t=document.querySelector(".message__btn"),o=100;function i(){setTimeout(function(){for(var n=0;n<e.length;n+=1)e[n].style.transform="translateX(-"+o+"%)",e[0].classList.add("js-question__item--remove")},500)}n.addEventListener("click",function(e){e.preventDefault(),i(),document.querySelector(".question__timer").style.visibility="visible",setTimeout(d(),500)}),t.addEventListener("click",function(e){e.preventDefault(),o+=100,document.querySelector(".message").classList.remove("js-fadein"),document.querySelector(".message").classList.add("js-fadeout"),i(),setTimeout(d(),2500)})}(),document.querySelector(".question__item--last").style.visibility="visible"):console.log("no")},e.onerror=function(){console.log("why")},e.send()}(),setTimeout(function(){document.querySelector(".question__welcome").classList+=" js-fadeout"},2e3),setTimeout(function(){document.querySelector(".question__items").classList+=" js-fadein"},4e3)}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,o=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var i,r=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,n,t){var o,i,r={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),a=function(e){var n={};return function(e){if("function"==typeof e)return e();if(void 0===n[e]){var t=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}}(),u=null,c=0,l=[],d=t(1);function f(e,n){for(var t=0;t<e.length;t++){var o=e[t],i=r[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(_(o.parts[s],n))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(_(o.parts[s],n));r[o.id]={id:o.id,refs:1,parts:a}}}}function m(e,n){for(var t=[],o={},i=0;i<e.length;i++){var r=e[i],s=n.base?r[0]+n.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};o[s]?o[s].parts.push(a):t.push(o[s]={id:s,parts:[a]})}return t}function p(e,n){var t=a(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),l.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(e.insertInto+" "+e.insertAt.before);t.insertBefore(n,i)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=l.indexOf(e);n>=0&&l.splice(n,1)}function h(e){var n=document.createElement("style");return e.attrs.type="text/css",x(n,e.attrs),p(e,n),n}function x(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function _(e,n){var t,o,i,r;if(n.transform&&e.css){if(!(r=n.transform(e.css)))return function(){};e.css=r}if(n.singleton){var s=c++;t=u||(u=h(n)),o=v.bind(null,t,s,!1),i=v.bind(null,t,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",x(n,e.attrs),p(e,n),n}(n),o=function(e,n,t){var o=t.css,i=t.sourceMap,r=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||r)&&(o=d(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,t,n),i=function(){g(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(n),o=function(e,n){var t=n.css,o=n.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){g(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else i()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=s()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=m(e,n);return f(t,n),function(e){for(var o=[],i=0;i<t.length;i++){var s=t[i];(a=r[s.id]).refs--,o.push(a)}e&&f(m(e,n),n);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete r[a.id]}}}};var b,y=(b=[],function(e,n){return b[e]=n,b.filter(Boolean).join("\n")});function v(e,n,t,o){var i=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(n,i);else{var r=document.createTextNode(i),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(r,s[n]):e.appendChild(r)}}},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var i=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[t].concat(r).concat([i]).join("\n")}var s;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},function(e,n,t){(e.exports=t(3)(!1)).push([e.i,"body {\n  margin: 0 150px;\n  margin-bottom: 50px;\n  padding: 0;\n  background-color: #57b2f8; }\n\n.sg-logo__image {\n  width: 200px; }\n\n.question {\n  display: block; }\n  .question__logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 40px 0; }\n  .question__carousel {\n    background-color: #ddf7e5;\n    overflow: hidden;\n    height: 450px;\n    position: relative;\n    display: flex;\n    -webkit-box-shadow: 1px -5px 259px 20px white;\n    -moz-box-shadow: 1px -5px 259px 20px white;\n    box-shadow: 1px -5px 259px 20px white; }\n  .question__welcome {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: center;\n    text-align: center;\n    position: absolute;\n    background-color: #ddf7e5;\n    z-index: 20;\n    width: 100%; }\n  .question__welcome img {\n    height: 100px;\n    width: 100%; }\n  .question__hi {\n    margin: 10px 0; }\n  .question__items {\n    position: relative;\n    flex: 1;\n    overflow: hidden;\n    color: #fff;\n    opacity: 0; }\n  .question__item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    transition: transform 1s;\n    position: absolute;\n    z-index: 2; }\n  .question__item--last {\n    visibility: hidden; }\n  .question__header--first {\n    margin-bottom: 40px;\n    text-transform: uppercase;\n    font-size: 80px; }\n  .question__btn--first:hover {\n    background-color: #434e66; }\n  .question__header {\n    margin-bottom: 40px; }\n  .question__text {\n    margin-bottom: 40px;\n    font-size: 30px;\n    text-align: center; }\n  .question__btn {\n    margin: 0 10px; }\n  .question__btn:hover {\n    background-color: #57b2f8; }\n  .question__btn--right {\n    background-color: #53cf92; }\n  .question__btn--wrong {\n    background-color: #ff796b; }\n  .question__timer {\n    position: absolute;\n    top: 30px;\n    right: 30px;\n    visibility: hidden; }\n  .question__result {\n    margin-bottom: 40px; }\n  .question__btn--restart:hover {\n    background-color: #53cf92; }\n  .question__restart {\n    color: #FFF; }\n\n.message {\n  position: absolute;\n  transition: transform 1s;\n  width: 100%;\n  opacity: 0;\n  z-index: -1;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #fff5d5; }\n  .message__cont {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    margin-top: 20px; }\n  .message__text {\n    margin: 0 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n  .message__about {\n    font-size: 18px;\n    color: #000;\n    text-align: center; }\n  .message__who {\n    height: 230px;\n    width: 230px;\n    margin-right: 20px; }\n  .message__link {\n    text-align: center;\n    margin-top: 10px;\n    color: #53cf92; }\n  .message__btn {\n    margin-top: 40px; }\n\n@keyframes fadeIn {\n  from {\n    z-index: -1;\n    opacity: 0; }\n  to {\n    z-index: 200;\n    opacity: 1; } }\n\n@keyframes fadeOut {\n  from {\n    z-index: 200;\n    opacity: 1; }\n  to {\n    z-index: -1;\n    opacity: 0; } }\n\n.js-fadein {\n  -webkit-animation: fadeIn 1s linear 0s 1 normal forwards;\n  /* Safari 4+ */\n  -moz-animation: fadeIn 1s linear 0s 1 normal forwards;\n  /* Fx 5+ */\n  -o-animation: fadeIn 1s linear 0s 1 normal forwards;\n  /* Opera 12+ */\n  animation: fadeIn 1s linear 0s 1 normal forwards;\n  /* IE 10+, Fx 29+ */ }\n\n.js-fadeout {\n  -webkit-animation: fadeOut 1s linear 0s 1 normal forwards;\n  /* Safari 4+ */\n  -moz-animation: fadeOut 1s linear 0s 1 normal forwards;\n  /* Fx 5+ */\n  -o-animation: fadeOut 1s linear 0s 1 normal forwards;\n  /* Opera 12+ */\n  animation: fadeOut 1s linear 0s 1 normal forwards;\n  /* IE 10+, Fx 29+ */ }\n\n.backgroundimg--frog {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 200px;\n  z-index: 0; }\n\n.backgroundimg--hussar {\n  position: absolute;\n  right: 0px;\n  bottom: 0;\n  height: 210px;\n  z-index: 0; }\n\n@media all and (max-width: 1200px) {\n  .question__text {\n    margin: 0 20px;\n    margin-bottom: 40px; }\n  body {\n    margin: 0 100px;\n    margin-bottom: 50px; } }\n\n@media all and (max-width: 800px) {\n  body {\n    margin: 0 80px;\n    margin-bottom: 50px; } }\n\n@media all and (max-width: 700px) {\n  body {\n    margin: 0 40px;\n    margin-bottom: 50px; }\n  .question__timer {\n    font-size: 30px; }\n  .message__feedback {\n    margin-top: 20px;\n    font-size: 40px; }\n  .message__cont {\n    flex-direction: column; }\n  .message__who {\n    order: -1;\n    margin: 0;\n    margin-bottom: 20px;\n    height: 200px;\n    width: 200px; }\n  .message__btn {\n    margin-bottom: 20px;\n    margin-top: 20px; }\n  .backgroundimg--frog {\n    height: 150px; }\n  .backgroundimg--hussar {\n    height: 160px; } }\n\n@media all and (max-width: 650px) {\n  .message__feedback {\n    font-size: 30px; } }\n\n@media all and (max-width: 600px) {\n  .question__header--first {\n    font-size: 60px; }\n  .message__cont {\n    margin-top: 10px; }\n  .message__feedback {\n    margin-top: 10px; } }\n\n@media all and (max-width: 550px) {\n  .question__options {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n  .question__btn {\n    margin: 20px 0; }\n  .question__timer {\n    font-size: 20px;\n    top: 0;\n    right: 10px; }\n  .message__feedback {\n    font-size: 30px; } }\n\n@media all and (max-width: 500px) {\n  .message__feedback {\n    font-size: 25px; } }\n\n@media all and (max-width: 450px) {\n  .question__logo {\n    margin: 20px 0; }\n  .question__header--first {\n    font-size: 40px; }\n  .question__text {\n    margin: 10px 10px; }\n  .question__header {\n    font-size: 40px; }\n  .message__who {\n    height: 180px;\n    width: 180px; }\n  .message__feedback {\n    font-size: 20px; }\n  .backgroundimg--frog {\n    height: 130px; }\n  .backgroundimg--hussar {\n    height: 140px; } }\n\n@media all and (max-width: 350px) {\n  .question__text {\n    font-size: 20px; }\n  .message__about {\n    font-size: 15px; }\n  .backgroundimg--frog {\n    height: 100px; }\n  .backgroundimg--hussar {\n    height: 110px; }\n  .message__who {\n    height: 150px;\n    width: 150px; } }\n\n@media all and (max-width: 320px) {\n  .question__header--first {\n    font-size: 30px; }\n  .question__header {\n    font-size: 30px; }\n  .question__btn {\n    font-size: 13px; }\n  .message__feedback {\n    font-size: 15px; } }\n",""])},function(e,n,t){var o=t(4);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(2)(o,i);o.locals&&(e.exports=o.locals)},function(e,n,t){"use strict";t(5),t(0)}]);