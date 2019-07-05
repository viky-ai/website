# viky.ai presentation page, documentation & blog

Static web site generator build with [Jekyll](https://jekyllrb.com/) used to generate viky.ai presentation page, documentation and blog


## Installation & run

Make sure to have `ruby` & `bundler` installed on your device, then run:

```
bundle install
bundle exec jekyll serve -w -l
```

Site is now available on `http://localhost:4000/` with auto-generation & live reload.


## Build for production environment

```
JEKYLL_ENV=production bundle exec jekyll build
```

Static site is generated in `_site` directory ready to be deployed.

The coupling between the doc and the webapp is done automatically during automated unfolding processes.


## Manage content

Please consult the CONTRIBUTING.md file.
