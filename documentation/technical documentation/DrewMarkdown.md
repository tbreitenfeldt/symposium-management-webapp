## 1.0 Project Overview
technologies
Overview

Title: Symposium Scheduler Web Application
Dates Worked On: Jan 2019 - June 2019
Team Members: TJ Breitenfeldt, Andrew Bosco, Chester Southwood, Tatyana Hubbard

This project is a web-based application that allows users to manage their own personal schedule for symposiums/conferences.
It also allows administrators to create/manage/edit symposiums/conferences that they are in charge of.
The purpose of this application is to replace the application EWU uses currently (Sched) with an application that is accessible.

Tecnologies:

Front-End:

HTML
SASS (CSS extension)
Javascript w/ JQuery

Back-End:

PHP
MySQL

Section 1 Overview:

1.1 File and Folder Structure
1.2 Database Structure

### 1.2 Database Structure

Database Name: Db_a444c6_senior
Tables:

admin_accounts - admin account information
user_accounts - user account information
conference - conference information
event - event information
user_schedule - user event schedule information
user_conference - user conference information

admin_accounts:
Primary Key - admin_id

user_accounts:
Primary Key - user_id

conference:
Primary Key - conference_id
Foreign Key - admin_id

event:
Primary Key - event_id
Foreign Key - admin_id, conference_id

user_schedule:
Foreign Keys - user_id, event_id, conference_id

user_conference:
Foreign Keys - user_id, conference_id


insert database diagram here


## 2.0 How to get set up

1. Install XAMPP on your computer.
2. Run XAMPP and start the apache and SQL server.
3. Download the project zip or pull down from git hub.
4. The root location of this project should be in the htdocs folder located in your XAMPP folder.
5. In your internet browser, type 'localhost/phpmyadmin'.
6. In PhpMyAdmin, click Import, then click choose a file. From the file explorer, go to the 'symposium-management-webapp' folder and choose the 'conference_manager.sql' file.
7. Continue through the import process to create the database structure on your localhost server. After it's done, you should have an empty database.
8. Now you will need to create a user through PhpMyAdmin that has access to the database.
9. After you create that user, go to 'symposium-management-webapp/application/databaseUtil/creds.php.'
10. In creds.php, change the user variables there to match the credentials of your newly created user. Look at section 2.3 for more info.
11. Find and open 'symposium-management-webapp/application/proxies/httpRequester.php'.
12. Confirm that the variable 'DOMAIN' is the absolute path to the application folder. If the application is ever having an issue where it won't load up a new page, it is more than likely an issue with your DOMAIN variable in this file. The commented out domains are different domains we've used between the four of us in different environments we've worked in.
13. Go to your browser and type in 'localhost/symposium-management-webapp/application' and now the application should be ready to use.
14. For getting this project set up on a hosting service such as Bluehost or SmarterASP, you can do steps 5-13 doing certain parts through the hosting service, specifically getting the database set up through your hosting service rather than through PhpMyAdmin.

Section 2 covers:

2.1. Creating the Database
2.2. Changing the HTTP Requester Domain for the Proxies
2.3. Configure Database Credentials
2.4. Change config.php 

### 2.3 Configure Database Credentials

In the creds.php file, you have the following variables:

DB_NAME - Name of the database you wish to connect to.
DB_HOST - Website of the database. If locally running the database, this would be localhost.
DB_USERNAME - User that is accessing the database.
DB_PASSWORD - Password of that user.
DB_CHARSET - Charset of the database.

### 3.2 Security Concerns

API Security Concerns

In the folder 'conferenceAPI', we have a basic REST Api set up that can be configured for any database. In each of the files, there are restrictions built in specifically for our database structure. These restrictions are meant to not allow malicious users to do certain actions such as access other users/admins account info, edit/delete conference data, etc.

The known security issue with this api is that in each of these php files, roughly half of the parameters entered by the user are prepared, meaning that those parameters will be checked for SQL injection. The reason only half of them are prepared were due to a couple of reasons. The api dynamically creates a SQL command from user input parameters, so there are more parameters to prepare compared to other apis. The second reason was due to time constraints on the project, we opted to not spend more time on this concern and to put that time toward getting a working product.

If someone were to send a GET request to the API right now, it would dynamically create a SQL command that would look like the following:

SELECT * FROM event WHERE conference_id = ? AND event_id = ? ORDER BY event_starttime;

The '?' here is a parameter that will be prepared by the pdoUtil. The ideal SQL command would look like the following:

SELECT ? FROM ? WHERE ? = ? AND ? = ? ORDER BY ?;

Any time a parameter is entered by a user, it should be replace by a '?' and sent to the pdoUtil to be prepared. The reason this is a more time intense solution to implement is that there would be a lot of array manipulation involved while dynamically creating the SQL command. Additionally, due to the nature of SQL syntax, each of the four API php files would require their own implementation independant of each other to make sure that each parameter is prepared in the right order.

Each parameter that is prepared is stored in the $values array which is sent to the pdoUtil alongside the dynamically created SQL command.