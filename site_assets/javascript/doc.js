/*! gumshoejs v5.1.1 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gumshoe */
!(function(t,e){"function"==typeof define&&define.amd?define([],(function(){return e(t)})):"object"==typeof exports?module.exports=e(t):t.Gumshoe=e(t)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(t){"use strict";var e={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},n=function(t,e,n){if(n.settings.events){var o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)}},o=function(t){var e=0;if(t.offsetParent)for(;t;)e+=t.offsetTop,t=t.offsetParent;return e>=0?e:0},s=function(t){t&&t.sort((function(t,e){return o(t.content)<o(e.content)?-1:1}))},c=function(e,n,o){var s=e.getBoundingClientRect(),c=(function(t){return"function"==typeof t.offset?parseFloat(t.offset()):parseFloat(t.offset)})(n);return o?parseInt(s.bottom,10)<(t.innerHeight||document.documentElement.clientHeight):parseInt(s.top,10)<=c},i=function(){return t.innerHeight+t.pageYOffset>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},r=function(t,e){var n=t[t.length-1];if(function(t,e){return!(!i()||!c(t.content,e,!0))}(n,e))return n;for(var o=t.length-1;o>=0;o--)if(c(t[o].content,e))return t[o]},a=function(t,e){if(e.nested){var n=t.parentNode.closest("li");n&&(n.classList.remove(e.nestedClass),a(n,e))}},l=function(t,e){if(t){var o=t.nav.closest("li");o&&(o.classList.remove(e.navClass),t.content.classList.remove(e.contentClass),a(o,e),n("gumshoeDeactivate",o,{link:t.nav,content:t.content,settings:e}))}},u=function(t,e){if(e.nested){var n=t.parentNode.closest("li");n&&(n.classList.add(e.nestedClass),u(n,e))}};return function(o,c){var i,a,f,d,v,m={};m.setup=function(){i=document.querySelectorAll(o),a=[],Array.prototype.forEach.call(i,(function(t){var e=document.getElementById(decodeURIComponent(t.hash.substr(1)));e&&a.push({nav:t,content:e})})),s(a)},m.detect=function(){var t=r(a,v);t?f&&t.content===f.content||(l(f,v),(function(t,e){if(t){var o=t.nav.closest("li");o&&(o.classList.add(e.navClass),t.content.classList.add(e.contentClass),u(o,e),n("gumshoeActivate",o,{link:t.nav,content:t.content,settings:e}))}})(t,v),f=t):f&&(l(f,v),f=null)};var p=function(e){d&&t.cancelAnimationFrame(d),d=t.requestAnimationFrame(m.detect)},h=function(e){d&&t.cancelAnimationFrame(d),d=t.requestAnimationFrame((function(){s(a),m.detect()}))};m.destroy=function(){f&&l(f,v),t.removeEventListener("scroll",p,!1),v.reflow&&t.removeEventListener("resize",h,!1),a=null,i=null,f=null,d=null,v=null};return v=(function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t})(e,c||{}),m.setup(),m.detect(),t.addEventListener("scroll",p,!1),v.reflow&&t.addEventListener("resize",h,!1),m}}));

/*! medium-zoom 1.0.4 | MIT License | https://github.com/francoischalifour/medium-zoom */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.mediumZoom=t()}(this,function(){"use strict";var H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},o=function(e){return"IMG"===e.tagName},C=function(e){return e&&1===e.nodeType},O=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},c=function(e){try{return Array.isArray(e)?e.filter(o):(t=e,NodeList.prototype.isPrototypeOf(t)?[].slice.call(e).filter(o):C(e)?[e].filter(o):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(o):[])}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}var t},x=function(e,t){var o=H({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,o);var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,o.bubbles,o.cancelable,o.detail),n};return function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),function t(e){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=window.Promise||function(e){function t(){}e(t,t)},i=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var i=t.reduce(function(e,t){return[].concat(e,c(t))},[]);return i.filter(function(e){return-1===v.indexOf(e)}).forEach(function(e){v.push(e),e.classList.add("medium-zoom-image")}),m.forEach(function(e){var t=e.type,o=e.listener,n=e.options;i.forEach(function(e){e.addEventListener(t,o,n)})}),L},d=function(){var p=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target,g=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,o=void 0;if(b.container)if(b.container instanceof Object)t=(e=H({},e,b.container)).width-e.left-e.right-2*b.margin,o=e.height-e.top-e.bottom-2*b.margin;else{var n=(C(b.container)?b.container:document.querySelector(b.container)).getBoundingClientRect(),i=n.width,d=n.height,r=n.left,m=n.top;e=H({},e,{width:i,height:d,left:r,top:m})}t=t||e.width-2*b.margin,o=o||e.height-2*b.margin;var a=E.zoomedHd||E.original,l=O(a)?t:a.naturalWidth||t,c=O(a)?o:a.naturalHeight||o,u=a.getBoundingClientRect(),s=u.top,f=u.left,p=u.width,g=u.height,h=Math.min(l,t)/p,v=Math.min(c,o)/g,z=Math.min(h,v),y="scale("+z+") translate3d("+((t-p)/2-f+b.margin+e.left)/z+"px, "+((o-g)/2-s+b.margin+e.top)/z+"px, 0)";E.zoomed.style.transform=y,E.zoomedHd&&(E.zoomedHd.style.transform=y)};return new n(function(t){if(p&&-1===v.indexOf(p))t(L);else if(E.zoomed)t(L);else{if(p)E.original=p;else{if(!(0<v.length))return void t(L);var e=v;E.original=e[0]}var o,n,i,d,r,m,a,l,c;if(E.original.dispatchEvent(x("medium-zoom:open",{detail:{zoom:L}})),y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,z=!0,E.zoomed=(o=E.original,n=o.getBoundingClientRect(),i=n.top,d=n.left,r=n.width,m=n.height,a=o.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,a.removeAttribute("id"),a.style.position="absolute",a.style.top=i+l+"px",a.style.left=d+c+"px",a.style.width=r+"px",a.style.height=m+"px",a.style.transform="",a),document.body.appendChild(w),b.template){var u=C(b.template)?b.template:document.querySelector(b.template);E.template=document.createElement("div"),E.template.appendChild(u.content.cloneNode(!0)),document.body.appendChild(E.template)}if(document.body.appendChild(E.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),E.original.classList.add("medium-zoom-image--hidden"),E.zoomed.classList.add("medium-zoom-image--opened"),E.zoomed.addEventListener("click",h),E.zoomed.addEventListener("transitionend",function e(){z=!1,E.zoomed.removeEventListener("transitionend",e),E.original.dispatchEvent(x("medium-zoom:opened",{detail:{zoom:L}})),t(L)}),E.original.getAttribute("data-zoom-src")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("srcset"),E.zoomedHd.removeAttribute("sizes"),E.zoomedHd.src=E.zoomed.getAttribute("data-zoom-src"),E.zoomedHd.onerror=function(){clearInterval(s),console.warn("Unable to reach the zoom image target "+E.zoomedHd.src),E.zoomedHd=null,g()};var s=setInterval(function(){E.zoomedHd.complete&&(clearInterval(s),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",h),document.body.appendChild(E.zoomedHd),g())},10)}else if(E.original.hasAttribute("srcset")){E.zoomedHd=E.zoomed.cloneNode(),E.zoomedHd.removeAttribute("sizes");var f=E.zoomedHd.addEventListener("load",function(){E.zoomedHd.removeEventListener("load",f),E.zoomedHd.classList.add("medium-zoom-image--opened"),E.zoomedHd.addEventListener("click",h),document.body.appendChild(E.zoomedHd),g()})}else g()}})},h=function(){return new n(function(t){!z&&E.original?(z=!0,document.body.classList.remove("medium-zoom--opened"),E.zoomed.style.transform="",E.zoomedHd&&(E.zoomedHd.style.transform=""),E.template&&(E.template.style.transition="opacity 150ms",E.template.style.opacity=0),E.original.dispatchEvent(x("medium-zoom:close",{detail:{zoom:L}})),E.zoomed.addEventListener("transitionend",function e(){E.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(E.zoomed),E.zoomedHd&&document.body.removeChild(E.zoomedHd),document.body.removeChild(w),E.zoomed.classList.remove("medium-zoom-image--opened"),E.template&&document.body.removeChild(E.template),z=!1,E.zoomed.removeEventListener("transitionend",e),E.original.dispatchEvent(x("medium-zoom:closed",{detail:{zoom:L}})),E.original=null,E.zoomed=null,E.zoomedHd=null,E.template=null,t(L)})):t(L)})},r=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target;return E.original?h():d({target:e})},v=[],m=[],z=!1,y=0,b=o,E={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(e)?b=e:(e||"string"==typeof e)&&i(e),b=H({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},b);var a,l,w=(a=b.background,(l=document.createElement("div")).classList.add("medium-zoom-overlay"),l.style.background=a,l);document.addEventListener("click",function(e){var t=e.target;t!==w?-1!==v.indexOf(t)&&r({target:t}):h()}),document.addEventListener("keyup",function(e){27===(e.keyCode||e.which)&&h()}),document.addEventListener("scroll",function(){if(!z&&E.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(y-e)>b.scrollOffset&&setTimeout(h,150)}}),window.addEventListener("resize",h);var L={open:d,close:h,toggle:r,update:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(w.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=H({},b.container,e.container)),e.template){var o=C(e.template)?e.template:document.querySelector(e.template);t.template=o}return b=H({},b,t),v.forEach(function(e){e.dispatchEvent(x("medium-zoom:update",{detail:{zoom:L}}))}),L},clone:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t(H({},b,e))},attach:i,detach:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];E.zoomed&&h();var n=0<t.length?t.reduce(function(e,t){return[].concat(e,c(t))},[]):v;return n.forEach(function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(x("medium-zoom:detach",{detail:{zoom:L}}))}),v=v.filter(function(e){return-1===n.indexOf(e)}),L},on:function(t,o){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return v.forEach(function(e){e.addEventListener("medium-zoom:"+t,o,n)}),m.push({type:"medium-zoom:"+t,listener:o,options:n}),L},off:function(t,o){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return v.forEach(function(e){e.removeEventListener("medium-zoom:"+t,o,n)}),m=m.filter(function(e){return!(e.type==="medium-zoom:"+t&&e.listener.toString()===o.toString())}),L},getOptions:function(){return b},getImages:function(){return v},getZoomedImage:function(){return E.original}};return L}});

var App = {
  buildDocSummary: function(){
    var h2s = document.querySelectorAll(".doc .article__content > h2, .doc .article__content > h3");
    var html = [];

    var previous_was_h2 = false;
    var h3s = [];
    Array.prototype.forEach.call(h2s, function(hx){
      if (hx.nodeName === "H2"){
        if (h3s.length > 0){
          html.push("<ul>");
          Array.prototype.forEach.call(h3s, function(h3, j){
            html.push("<li>");
            html.push("<a href='#" + h3.id + "'>" + h3.innerHTML + "</a>");
            html.push("</li>");
          });
          html.push("</ul>");
          html.push("</li>");
          h3s = [];
        }
        html.push("<li>");
        html.push("<a href='#" + hx.id + "'>" + hx.innerHTML + "</a>");
      }
      if (hx.nodeName === "H3"){
        h3s.push(hx);
      }
    });

    if (h3s.length > 0){
      html.push("<ul>");
      Array.prototype.forEach.call(h3s, function(h3, j){
        html.push("<li>");
        html.push("<a href='#" + h3.id + "'>" + h3.innerHTML + "</a>");
        html.push("</li>");
      });
      html.push("</ul>");
      html.push("</li>");
    }

    if (document.querySelector(".doc article .article__summary ul")) {
      document.querySelector(".doc article .article__summary ul").innerHTML = html.join('');
      document.querySelector(".doc .doc__nav .article__summary ul").innerHTML = html.join('');
    }
  },

  decorateDocHeadings: function(){
    var headings = document.querySelectorAll(
      ".doc .article__content > h2, .doc .article__content > h3, .doc .article__content > h4, .doc .article__content > h5, .doc .article__content > h6"
    );
    Array.prototype.forEach.call(headings, function(heading, i){
      heading.innerHTML = heading.innerHTML + "<a class='anchor' href='#" + heading.id + "'></a>";
    });
  },

  decorateImages: function(){
    var images = document.querySelectorAll(".article__content img");
    Array.prototype.forEach.call(images, function(image, i){
      if (!(image.classList.length == 1 && image.classList[0] == "emoji")){
        var html = [];
        var title = image.title;
        image.title = "";
        html.push("<figure>");
        html.push(image.outerHTML);
        if (title != ""){
          html.push("<figcaption>");
          html.push(title);
          html.push("</figcaption>");
        }
        html.push("</figure>");
        image.outerHTML = html.join('');
      }
    });
  },

  setupMobileNav: function(){
    document.querySelector("a.header__hamburger").addEventListener("click", function(event){
      event.preventDefault();
      document.body.classList.add('mobile-nav-is-open');
    });
    document.querySelector("a.mobile-nav__header__close").addEventListener("click", function(event){
      event.preventDefault();
      document.body.classList.remove('mobile-nav-is-open');
    });
  },

  setupScrollSpy: function(){
    if (document.querySelector(".doc__nav")) {
      var spy = new Gumshoe('.doc__nav a',{ offset: 75 });
    }

  },

  setupDocNav: function(){
    if (document.querySelector(".doc__sidebar")) {
      window.addEventListener('scroll', function() {
        var y = window.scrollY;
        var sidebar = document.querySelector(".doc__sidebar");
        if(y > 100){
          sidebar.classList.add('doc__sidebar--sticky');
        } else {
          sidebar.classList.remove('doc__sidebar--sticky');
        }
      });
    }
  },

  setupDocImageZoom: function(){
    if (document.querySelector(".doc")) {
      const images = document.querySelectorAll('figure img')
      const zoom = mediumZoom(images);
    }
  },

  setupConnexionState: function(){
    var request = new XMLHttpRequest();
    request.open('GET', '/connexion_state', true);
    request.onload = function() {
      if (request.status == 200) {
        var resp = request.responseText;
        document.querySelector(".header__login").innerHTML = resp;
        document.querySelector(".mobile-nav .login").innerHTML = resp;
      }
    };
    request.send();
  },

  decorateFooter: function(){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    document.querySelector("#footer-day").innerHTML = days[d.getDay()];
  },

  setup: function() {
    App.setupConnexionState();
    App.buildDocSummary();
    App.decorateDocHeadings();
    App.decorateImages();
    App.setupMobileNav();
    App.setupScrollSpy();
    App.setupDocNav();
    App.setupDocImageZoom();
    App.decorateFooter();
  }
};

document.addEventListener("DOMContentLoaded", function(event) {
  App.setup();
});
