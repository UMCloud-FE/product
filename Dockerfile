FROM nginx:1.19.1

WORKDIR /data

RUN ls -al

ADD dist /data/dist

COPY  ./script/prod/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80