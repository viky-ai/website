# viky.ai Docs & Blog

Static web site generator build with [Jekyll](https://jekyllrb.com/) used to generate viky.ai docs & blog.


## Installation & run

Make sure to have `ruby` & `bundler` installed on your device, then run:

```
bundle install
bundle exec jekyll serve -w -l
```

## Manage content

### Guides & API reference

Guides content are located in `guides` directory.
API docs are located in `api` directory.

To add a documentation:

1. Create a new directory in the directory `guides`or `api`. The name of the directory will be found in the URL of the document (use "simple" characters in lowercase and replace spaces by hyphens `-`).
2. In this directory, create a file named `index.md`.
3. Start with the following content:

```
---
layout: doc
title: The title of the document
description: A short description of the page's content
order: 1
---

Your markdown content goes here.
```

### Blog posts

Blog posts are located in `blog/_posts` directory.

To add a post:

1. Create a new directory in the directory `blog/_posts`. Use that convention for the directory name: `YYYY-MM-DD-post-title`.
2. In this directory, create a file named with the same above convention, i.e. `YYYY-MM-DD-post-title.md`
3. Start with the following content:


```
---
layout: post
title: The title of the blog post
description: A short description of the page's content
author: Your Name
avatar: your-name.jpg
---

Your markdown content goes here.
```

### Manage images

In order to support retina display and to ensure consistency in the display, please follow these instructions:

* Take screenshot with a viewport width of 1320px in viky.ai with a minimal pixel density of 2 (if possible).
* In any case, resize screenshot to 1320px.
* Use a tool like [ImageOptim](https://imageoptim.com) or [Trimage image compressor](https://trimage.org/) in order to make images load faster.
* Favor PNG format for screenshots.


