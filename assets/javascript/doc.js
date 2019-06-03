document.addEventListener("DOMContentLoaded", function(event) {

  var buildSummary = function(){
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>'
    var h2s = document.querySelectorAll(".doc__content h2");
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
    document.querySelector(".doc__summary ul").innerHTML = html.join('');
  }

  var decorateHeadings = function(){
    var headings = document.querySelectorAll(
      ".doc__content h2, .doc__content h3, .doc__content h4, .doc__content h5, .doc__content h6"
    );
    Array.prototype.forEach.call(headings, function(heading, i){
      heading.innerHTML = heading.innerHTML + "<a class='anchor' href='#" + heading.id + "'></a>";
    });
  }

  buildSummary();
  decorateHeadings();

});
