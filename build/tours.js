(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"src/images/tours_page/mainImage.png";var r=new Image;r.src=t,document.getElementById("header").appendChild(r),document.getElementById("hello").addEventListener("click",(function(){console.log("ssssss")}));var n=document.createElement("div");n.innerHTML="shit tour page11111111111",document.getElementById("header").append(n),console.log("heloo")})();