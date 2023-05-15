FROM nginx:1.19.1

WORKDIR /data

RUN ls -al

ADD build /data/dist

COPY  ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80