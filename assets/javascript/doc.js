document.addEventListener("DOMContentLoaded", function(event) {

  var buildSummary = function(){
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>'
    var h2s = document.querySelectorAll(".doc .article__content h2");
    var html = [];
    Array.prototype.forEach.call(h2s, function(h2, i){
      html.push("<li>");
      html.push("<a href='#" + h2.id + "'>");
      html.push((i+1) + ". ");
      html.push("<em>" + h2.innerHTML + "</em>");
      html.push(svg);
      html.push("</a>");
      html.push("</li>");
    });

    if (document.querySelector(".doc article .article__summary ul")) {
      document.querySelector(".doc article .article__summary ul").innerHTML = html.join('');
      document.querySelector(".doc .doc__nav .article__summary ul").innerHTML = html.join('');
    }
  }

  var decorateHeadings = function(){
    var headings = document.querySelectorAll(
      ".doc .article__content h2, .doc .article__content h3, .doc .article__content h4, .doc .article__content h5, .doc .article__content h6"
    );
    Array.prototype.forEach.call(headings, function(heading, i){
      heading.innerHTML = heading.innerHTML + "<a class='anchor' href='#" + heading.id + "'></a>";
    });
  }

  var decorateImages = function(){
    var images = document.querySelectorAll(".article__content img");
    Array.prototype.forEach.call(images, function(image, i){
      var html = [];
      html.push("<figure>");
      html.push(image.outerHTML);
      if (image.title != ""){
        html.push("<figcaption>");
        html.push(image.title);
        html.push("</figcaption>");
      }
      html.push("</figure>");
      image.outerHTML = html.join('');
    });
  }

  var setupMobileNav = function(){
    document.querySelector("a.header__hamburger").addEventListener("click", function(event){
      event.preventDefault();
      document.body.classList.add('mobile-nav-is-open');
    });
    document.querySelector(".mobile-nav__header__close a").addEventListener("click", function(event){
      event.preventDefault();
      document.body.classList.remove('mobile-nav-is-open');
    });
  }

  buildSummary();
  decorateHeadings();
  decorateImages();
  setupMobileNav();
});
