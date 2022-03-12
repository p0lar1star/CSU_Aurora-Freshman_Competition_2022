FROM mattrayner/lamp:latest-1804-php7



################################
#  Copy www files to web root
################################

# Copy php files to apache2's root
COPY --chown=www-data:staff ./www /app/



###############################
#  Extend settings for MySQL
###############################

# Copy mysql configuration to enable write file from SQL query.
COPY sfp.cnf /etc/mysql/mysql.conf.d/



###############################
#  Inject flag file
###############################

# Create 'flag' directory and copy flag file into it.
RUN mkdir /flag
COPY flag /flag/im_your_f1ag


#########################
#   MySQL data loading
#########################

# Copy sql file
COPY db.sql /

# Modify vanilla create_mysql_users.sh
# To read db.sql into MySQL Server before it stop
# After reading, delete db.sql
RUN sed -i '0,/^mysqladmin -uroot shutdown$/s/^mysqladmin -uroot shutdown$/mysql -uroot < \/db.sql\nrm \/db.sql\n&/' /create_mysql_users.sh



#########################
#   Start processes
#########################

CMD ["/run.sh"]

