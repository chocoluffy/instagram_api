How to set up this app on your localhost:

1\ use git clone to fork this project to your local computer.

2\ make sure you are now at this project directory, run:
> bundle install
in order to install all the needed gems file for this project and its dependency.

3\ Start your local postgresql server using below code in your terminal:
> pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start

**OR**

you can change the database back to the sqlite3, and in order to do that, you will need to modify the config/database.yml
and change the default database from postgresql to sqlite3 and add "gem sqlite3" in your Gemfile and bundle install it. 

4\ Now, you should be able to run the app by:
> rails server


