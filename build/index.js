(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var a=t.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.p;const n=e.p+"src/images/Hotel1.png",t=e.p+"src/images/secondpage-hotel2.png",a=e.p+"src/images/secondpage-hotel3.png",c=e.p+"src/images/why_we/image 9.png",r=e.p+"src/images/why_we/image 10.png",g=e.p+"src/images/why_we/image 11.png",i=e.p+"src/images/why_we/image 12.png",p=e.p+"src/images/why_we/image 13.png",s=e.p+"src/images/why_we/image 14.png",m=e.p+"src/images/contact_us/image 15.png",o=e.p+"src/images/contact_us/image 16.png",d=e.p+"src/images/contact_us/image 17.png",u=e.p+"src/images/contact_us/image 18.png",l=e.p+"src/images/contact_us/image 19.png",h=e.p+"src/images/contact_us/image 20.png";document.body.style.backgroundImage="url('./src/images/mainscr.png')";var w=[n,t,a];w.forEach((function(e,n){var t=new Image;return t.src=e,w[n]=t}));for(var y=[],f=1;f<=w.length;f++)y[f-1]=document.getElementById("second-page-column"+[f]),y[f-1].appendChild(w[f-1]);var E=[c,r,g,i,p,s];E.forEach((function(e,n){var t=new Image;return t.src=e,E[n]=t}));for(var v=[],I=1;I<=E.length;I++)v[I-1]=document.getElementById("why-page-column"+[I]),v[I-1].appendChild(E[I-1]);var _=[m,o,d,u,l,h];_.forEach((function(e,n){var t=new Image;return t.src=e,_[n]=t})),document.getElementById("address").appendChild(_[0]),document.getElementById("phone").appendChild(_[1]),document.getElementById("email").appendChild(_[2]),document.getElementById("inst-icon").appendChild(_[3]),document.getElementById("face-icon").appendChild(_[4]),document.getElementById("tube-icon").appendChild(_[5])})();