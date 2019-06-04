---
layout: default
title: "Site index"
---

# Site index

_For development purpose only._

## Available guides

<ul>
{% for page in site.pages %}
  {% assign page_first_dirname = page.dir | slice: 1, 6 %}
  {% if page_first_dirname == "guides" %}
    <li><a href="{{page.url}}">{{page.title}}</a></li>
  {% endif %}
{% endfor %}
</ul>

## Available blog posts

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{post.url}}">{{post.title}} - {{post.date | date_to_long_string}}</a>
  </li>
{% endfor %}
</ul>
