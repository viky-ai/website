/*! gumshoejs v5.1.1 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gumshoe */
!(function(t,e){"function"==typeof define&&define.amd?define([],(function(){return e(t)})):"object"==typeof exports?module.exports=e(t):t.Gumshoe=e(t)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(t){"use strict";var e={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},n=function(t,e,n){if(n.settings.events){var o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)}},o=function(t){var e=0;if(t.offsetParent)for(;t;)e+=t.offsetTop,t=t.offsetParent;return e>=0?e:0},s=function(t){t&&t.sort((function(t,e){return o(t.content)<o(e.content)?-1:1}))},c=function(e,n,o){var s=e.getBoundingClientRect(),c=(function(t){return"function"==typeof t.offset?parseFloat(t.offset()):parseFloat(t.offset)})(n);return o?parseInt(s.bottom,10)<(t.innerHeight||document.documentElement.clientHeight):parseInt(s.top,10)<=c},i=function(){return t.innerHeight+t.pageYOffset>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},r=function(t,e){var n=t[t.length-1];if(function(t,e){return!(!i()||!c(t.content,e,!0))}(n,e))return n;for(var o=t.length-1;o>=0;o--)if(c(t[o].content,e))return t[o]},a=function(t,e){if(e.nested){var n=t.parentNode.closest("li");n&&(n.classList.remove(e.nestedClass),a(n,e))}},l=function(t,e){if(t){var o=t.nav.closest("li");o&&(o.classList.remove(e.navClass),t.content.classList.remove(e.contentClass),a(o,e),n("gumshoeDeactivate",o,{link:t.nav,content:t.content,settings:e}))}},u=function(t,e){if(e.nested){var n=t.parentNode.closest("li");n&&(n.classList.add(e.nestedClass),u(n,e))}};return function(o,c){var i,a,f,d,v,m={};m.setup=function(){i=document.querySelectorAll(o),a=[],Array.prototype.forEach.call(i,(function(t){var e=document.getElementById(decodeURIComponent(t.hash.substr(1)));e&&a.push({nav:t,content:e})})),s(a)},m.detect=function(){var t=r(a,v);t?f&&t.content===f.content||(l(f,v),(function(t,e){if(t){var o=t.nav.closest("li");o&&(o.classList.add(e.navClass),t.content.classList.add(e.contentClass),u(o,e),n("gumshoeActivate",o,{link:t.nav,content:t.content,settings:e}))}})(t,v),f=t):f&&(l(f,v),f=null)};var p=function(e){d&&t.cancelAnimationFrame(d),d=t.requestAnimationFrame(m.detect)},h=function(e){d&&t.cancelAnimationFrame(d),d=t.requestAnimationFrame((function(){s(a),m.detect()}))};m.destroy=function(){f&&l(f,v),t.removeEventListener("scroll",p,!1),v.reflow&&t.removeEventListener("resize",h,!1),a=null,i=null,f=null,d=null,v=null};return v=(function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t})(e,c||{}),m.setup(),m.detect(),t.addEventListener("scroll",p,!1),v.reflow&&t.addEventListener("resize",h,!1),m}}));

var App = {
  buildDocSummary: function(){
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>'
    var h2s = document.querySelectorAll(".doc .article__content h2");
    var html = [];
    Array.prototype.forEach.call(h2s, function(h2, i){
      html.push("<li>");
      html.push("<a href='#" + h2.id + "'>");
      html.push((i+1) + ".&nbsp;");
      html.push("<em>" + h2.innerHTML + "</em>");
      html.push(svg);
      html.push("</a>");
      html.push("</li>");
    });

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
    App.decorateFooter();
  }
};

document.addEventListener("DOMContentLoaded", function(event) {
  App.setup();
});
