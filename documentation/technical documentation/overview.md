## 1.0. Project Overview



### 1.1. File and Folder Structure

This section of our documentation is a small description of what each folder and file is used for within this project.

#### Root (application) folder

Within the application folder, it contains these folders:
	* admin folder: This folder contains almost copies of the php files within the root, except slightly changed for specific admin use.
	* conferenceAPI folder:
	* css folder: This folder contains files for our project's css and SASS.
	* databaseUtil folder: This folder contains the PDO in php to our database.
	* javascriptLoads folder: This folder contains HTML / PHP files that will be loaded into the index.php's innerContent div when a javascript action occurs.
	* js folder: This folder contains all of our javascript code for the project.
	* loginAPI folder:
	* phpIncludes folder: 
	* proxies folder: This folder contains our proxy code that accesses the database with either a userID or adminID.

This folder contains these files (which are mainly HTML files wrapped as a php file):
	* authenticateUser.php: A php file that contains a function to test if the user is registered or not for login purposes.
	* config.php: A php file that defines and holds constants for the project.
	* error.php: A php (HTMl) file that is shown if an error has occurred.
	* forgotPassword.php: A php (HTML) form that can send an email to the user to reset the password.
	* index.php: Our main php / HTML file that contains sidebars, the menu, references to the userJS folder, and a "content" div for javascript use.
	* login.php: A php (HTML) form to login to the website.
	* logout.php: A php file to log the user out of the website and go back to the login page.
	* register.php: A php (HTML) form to register as a user for the website.
	* resetForgotPassword.php: A php (HTML) form to reset the password after going through the forgotPassword.php file.

#### Admin folder

This folder contains these files (which are mainly HTML files wrapped as a php file): 
	* authenticateUser.php: A php file that contains a function to test if the login was an admin.
	* config.php: A php file that defines and holds constants for the project on only the admin side.
	* error.php: A php (HTMl) file that is shown if an error has occurred.
	* forgotPassword.php: A php (HTML) form that can send an email to the admin to reset the password.
	* index.php: Our main php / HTML file that contains admin specific accessibility and does not contain much css.
	* login.php: A php (HTML) form to login to the website.
	* logout.php: A php file to log the admin out of the website and go back to the login page.
	* register.php: A php (HTML) form to register as an admin for the website (Can only be done through another admin).
	* resetForgotPassword.php: A php (HTML) form to reset the password after going through the forgotPassword.php file.
	* resetPassword.php: A php (HTML) form the reset the password.

#### conferenceAPI folder
	
This folder contains these files:
	* delete.php: 
	* get.php:
	* index.php:
	* post.php:
	* put.php:

#### databaseUtil folder

This folder contains these files:
	* creds.php:
	* pdoUtil.php:

#### javascriptLoads folder

This folder contains these files:
	* aboutConference.php: This file is loaded into the root's index.php (in place of the current loaded InnerContent tag) and shows information about a conference on load or when the home page button is chosen.
	* conferenceChooser.php: This file is loaded into the roots's index.php file when a User is not registered for a conference or when a user wants to change their conference
	* conferenceSchedule.php: This file is loaded into the root's index.php file when a user want to look at the full conference table
	* editSchedule.php: This file is loaded into the roots's index.php file when the user wants to add or delete an event from their schedule
	* resetPassword.php: This file is loaded as a form onto the page when the user chooses the "Reset Password" button.
	* showSchedule.php: This file is loaded into the index.php's innerContent div and shows the user's conference schedule
	* userSettings.php: This file is loaded into the index.php's innerContent div and shows the user's current settings, which can be changed in this form.

#### js folder

Within the js folder, it contains these folders:
	* adminJs: A folder that holds javascript functionality for the admin side only.
	* conferenceAPIJs: 
	* loginSystemJs: 
	* userJs: A folder that holds the javascript for frontend user functions.
	* utilityJs: A folder that holds a useful javascript file to assist in other javascript modules.

##### js/adminJs

This folder contains these files:
	* conferenceManager.js:
	* generateHTML.js:
	
##### js/conferenceAPIJs

This folder contains this file:
	* databaseFunctions.js: A javascript file that uses either the conferenceAPI folder or proxies folder to easily access the database for the other javascript modules.

##### js/loginSystemJs

This folder contains this file:
	* loginAJAX.js:

##### js/userJs

This folder contains these files:
	* mainSchedule.js: A javascript file that is used to get the main conference's information, have the functionality for the conference, and to check whether the user is even registered to a conference.
	* menu.js: A javascript file that contains most of the frontend's functionality; which is the sidebar's use, the click of every option in the side bar, and the creation of cookies.
	* userAccountRegistration.js: A javascript file that only has a function to toggle the phone aspect of the register.php file.
	* userSchedule.js: A javascript file that creates the user's schedule table and contains the table's functionality.
	* userSettings.js: A javascript file to update and add information to the userSettings.php file in javascriptLoads.

##### js/utilityJs

This folder contains this file:
	* util.js: A javascript file that can be used anywhere to assist in use. The main functions it currently does is notify the screen reader and parse dates.

#### loginAPI folder

Within the phpIncludes folder, it contains one folder:
	* PHPMailer: This folder is a third party library that we use to send mail.

This folder contains these files:
	* dataValidation.php:
	* forgotPasswordFunctions.php:
	* includeConfig.php:
	* loginFunctions.php:
	* logoutFunctions.php:
	* registerFunctions.php:
	* resetForgotPasswordFunctions.php:
	* resetPasswordFunctions.php:

#### phpIncludes folder

This folder contains these files:
	* accesibilityMenuOnly.php:
	* adminHeader.php:
	* footer.php:
	* indexHeader.php:
	* userHeader.php:

#### proxies folder

This folder contains these files:
	* deleteProxy.php:
		deleteProxy is used by both users and admins to delete data from the database.
	* getProxy.php:
		getProxy is used to access the database using either the admin id or user id to get information.
	* httpRequester.php: 
		HttpRequester is referenced within 2.2. This file is used to set up how the proxies work. The only thing that will potentially need to be changed is the domain.
	* postProxy.php:
		postProxy is used by both users and admins. Admins use this more, but it is used to add to tables for the user.
	* putProxy.php:
		putProxy is used by only the admin side. This is used to edit information stored within the database.

### 1.2. Database Structure
