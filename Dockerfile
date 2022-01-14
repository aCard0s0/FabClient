FROM node:14.4 as build

WORKDIR /home/app
COPY package-lock.json package.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /home/app/dist /usr/share/nginx/html
COPY ./docker_config/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80 443
