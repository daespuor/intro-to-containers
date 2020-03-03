#build stage
FROM node:12-stretch AS build

WORKDIR /react

COPY package.json package-lock.json ./

RUN npm ci && npm i node-sass

COPY . .

RUN npm run build

#run stage
FROM nginx:latest

WORKDIR /usr/share/nginx/html
COPY --from=build /react/build ./