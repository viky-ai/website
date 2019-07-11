## How to propose new content

To add a new documentation or a new blog post, start by creating a new git branch. Then create a related merge request in Gitlab.

Commit your contributions, then:

1. Ask a content review.
2. Ask a technical & design review.

When your merge request is accepted, your contribution is merged to branch develop. Then the generated static website will be automatically deployed on development environnement. Finalize by mergin the branch develop into master in order to deploy automatically to production environment.


### Guides & API reference

Guides content are located in `doc/guides` directory.
API docs are located in `doc/api` directory.

1. Create a new directory in the directory `doc/guides`or `doc/api`. The name of the directory will be found in the URL of the document (use "simple" characters in lowercase and replace spaces by hyphens `-`).
2. In this directory, create a file named `index.md`.
3. Start with the following content:

```
---
layout: doc
title: The title of the document
description: A short description of the page's content
image: site_assets/img/social.jpg
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
image: site_assets/img/social.jpg
---

Your markdown content goes here.
```

### Manage images

In order to support retina display and to ensure consistency in the display, please follow these instructions:

* Take screenshot with a viewport width of 1320px in viky.ai with a minimal pixel density of 2 (if possible).
* In any case, resize screenshot to 1320px width.
* Use a tool like [ImageOptim](https://imageoptim.com) or [Trimage image compressor](https://trimage.org/) in order to make images load faster.
* Favor PNG format for UI screenshots.
