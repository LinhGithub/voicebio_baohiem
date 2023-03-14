FROM node:16.15.0-alpine as build-stage
WORKDIR /app
COPY package*.json  ./
RUN yarn
COPY . ./
RUN yarn build

# FROM nginx:1.20.1-alpine as production-stage
# COPY --from=build-stage /app/build /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]
FROM node:16.15.0-alpine as production-stage
WORKDIR /code
COPY --from=build-stage /app/build .
RUN yarn global add serve
CMD serve -p 80 -s .
