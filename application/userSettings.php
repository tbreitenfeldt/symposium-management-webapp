<?php
require_once "authenticateUser.php";
?>


<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8"/>

  <title>User Settings</title>

  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->

  <script  src="//code.jquery.com/jquery-3.2.1.min.js"  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="  crossorigin="anonymous"></script>

  <script src="js/conferenceAPIJs/databaseFunctions.js"></script>
  <script src="js/userJs/userSettings.js"></script>
</head>

<body>
<header>
  <h1>User Settings</h1>
</header>

<main>
  <form id="userSettingsForm">
    <legend>Change User Information</legend>
    <label for="updateUsernameField">User Name</label>
    <input type="text" id="updateUsernameField" name="updateUsernameField" value="<?php ECHO $_SESSION["user_name"]; ?>" required="required" />
    <input type="submit" id="updateUserDataButton" value="Change" />
  </form>
</main>

</body>
</html>