# docker build -t vikyai/doc .

########################################################
### BUILD WEBSITE
########################################################
FROM ruby:2.6-buster AS build_docs

ENV JEKYLL_ENV=production

WORKDIR /

# Get correct bundler version
RUN gem install bundler -v 2.0.2

# Firstly bundle install (faster build)
RUN mkdir -p /src/
COPY Gemfile /src/
COPY Gemfile.lock /src/

WORKDIR /src/

# Production dependencies
RUN bundle install --deployment --jobs=$(nproc)

# Copy application code
RUN mkdir -p /src/
COPY . /src/

RUN bundle exec jekyll build --verbose

########################################################
### SERVE THE WEBSITE
########################################################
FROM nginx:stable AS run_doc

COPY ./deployment/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./deployment/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./deployment/nginx/h5bp/ /etc/nginx/h5bp/

COPY --from=build_docs /src/_site/ /usr/share/nginx/html/

RUN nginx -t
