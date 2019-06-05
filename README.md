# viky.ai Docs & Blog

Static web site generator build with [Jekyll](https://jekyllrb.com/) used to generate viky.ai docs & blog.

## Installation & run

Make sure to have `ruby` & `bundler` installed on your device, then run:

    bundle install
    bundle exec jekyll serve -w -l

## Manage content

### Guides & API reference

Guides content are located in `guides` directory.
API docs are located in `api` directory.

To add a documentation:

1. Create a new directory in the directory `guides`or `api`.
   The name of the directory will be found in the URL of the document (use "simple" characters in lowercase and replace spaces by hyphens `-`).
2. In this directory, create a file named `index.md`.
3. Start with the following content:

    ---
    layout: doc
    title: Awesome new guide
    ---

    Your markdown content goes here.

### Blog posts

Blog posts are located in `blog/_posts` directory.

To add a post:

1. Create a new directory in the directory `blog/_posts`.
   Use that convention for the directory name: `YYYY-MM-DD-post-title`.
2. In this directory, create a file named with the same above convention, i.e. `YYYY-MM-DD-post-title.md`
3. Start with the following content:

    ---
    layout: post
    title: Awesome blog post
    author: Your Name
    avatar: your-name.jpg
    ---

    Your markdown content goes here.
