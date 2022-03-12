FROM mysql:8.0.22
ARG DEBIAN_FRONTEND=noninteractive

ENV MYSQL_ROOT_PASSWORD=aurora_root_s1lv3ns9
ENV MYSQL_USER=aurora
ENV MYSQL_PASSWORD=aurora_random_pass_s1lv3ns9
ENV MYSQL_DATABASE=user

COPY user.sql  /docker-entrypoint-initdb.d
