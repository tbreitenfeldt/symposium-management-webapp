## 3.0. Additional Information
### 3.1. Known Bugs
### 3.2. Security Concerns

#### API Security Concerns

In the folder 'conferenceAPI', we have a basic REST Api set up that can be configured for any database. In each of the files, there are restrictions built in specifically for our database structure. These restrictions are meant to not allow malicious users to do certain actions such as access other users/admins account info, edit/delete conference data, etc.

The known security issue with this api is that in each of these php files, roughly half of the parameters entered by the user are prepared, meaning that those parameters will be checked for SQL injection. The reason only half of them are prepared were due to a couple of reasons. The api dynamically creates a SQL command from user input parameters, so there are more parameters to prepare compared to other apis. The second reason was due to time constraints on the project, we opted to not spend more time on this concern and to put that time toward getting a working product.

If someone were to send a GET request to the API right now, it would dynamically create a SQL command that would look like the following:

__SELECT * FROM event WHERE conference_id = ? AND event_id = ? ORDER BY event_starttime;__

The '?' here is a parameter that will be prepared by the pdoUtil. The ideal SQL command would look like the following:

__SELECT ? FROM ? WHERE ? = ? AND ? = ? ORDER BY ?;__

Any time a parameter is entered by a user, it should be replace by a '?' and sent to the pdoUtil to be prepared. The reason this is a more time intense solution to implement is that there would be a lot of array manipulation involved while dynamically creating the SQL command. Additionally, due to the nature of SQL syntax, each of the four API php files would require their own implementation independant of each other to make sure that each parameter is prepared in the right order.

Each parameter that is prepared is stored in the $values array which is sent to the pdoUtil alongside the dynamically created SQL command.
