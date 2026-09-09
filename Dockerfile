FROM nginx:alpine
COPY nginx-analytics.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html
EXPOSE 80
