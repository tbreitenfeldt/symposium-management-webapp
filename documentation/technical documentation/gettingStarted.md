## 2.0. How to Get Set up



### 2.1. Creating the Database
For creating the database, you will need to use our SQL file. The SQL file is called "conference_manager.sql" and is located in the root folder of this project. After it is downloaded into phpmyadmin or another service the database will be ready to use.


### 2.2. Changing the HTTP Requester Domain for the Proxies
The HTTP Requester's domain is used to give the Proxies the main link to the root folder for the application. You will find the HTTP Requester file within the 'application/proxies' folder. 
If this project is not being used or tested through localhost or is being renamed, the domain will have to be changed. Enter in your own link instead of the current one to allow for the proxies to work.


### 2.3. Configure Database Credentials



### 2.4. Change config.php
The config.php file located in 'application/config.php', and 'application/admin/config.php' is used for defining login system settings for the user and admin portals. The config.php file contains several php constants defining:

* the database table names refered to by the login system, such as user_accounts, and admin_accounts,
* the field names in the specified database user account tables, these constants must be included as fields in the specified tables sinse these constants are referenced in the SQL queries, such as username, password, email, etc...,
* the constants defined for locking out users after x number of attempts
* Aditional user information that is not included in the defined constants for the login system defined as a array,
* the constants for the forgot password system,
* the constants for the email system, the email address, password, and other information for sending an email using (the third party library php mailer)
