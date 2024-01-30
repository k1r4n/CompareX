FROM node:20-alpine3.18

LABEL maintainer="Kiran Rajaram <kiran@hifx.co.in>"

WORKDIR /var/ww/compare-x

ENV PATH /var/ww/compare-x/node_modules/.bin:$PATH

# RUN npm install

COPY . .

EXPOSE 7000