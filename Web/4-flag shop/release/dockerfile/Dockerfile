FROM mattrayner/lamp:latest-1804

COPY index.php /var/www/html/index.php
COPY ice_cream.jpg /var/www/html/ice_cream.jpg
COPY soup.png /var/www/html/soup.png
COPY ./flag.txt /flag.txt
RUN rm -rf /var/www/phpmyadmin && \
	rm -rf /var/www/phpMyAdmin-5.0.2-all-languages && \
	chown root:www-data /app

EXPOSE 80

CMD /run.sh
