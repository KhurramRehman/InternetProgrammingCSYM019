FROM php:7.4-apache
# pdo_mysql package
RUN docker-php-ext-install pdo_mysql
WORKDIR ./src
CMD ["mysqldump --all-databases >", " dump.sql"]