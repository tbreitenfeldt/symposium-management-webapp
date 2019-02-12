<?php
session_start();

if ( !isset($_SESSION["loggedin"]) || !$_SESSION["loggedin"]) {
    header("location: login.php");
    exit;
}//end if
?>


<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8"/>

  <title>Reset Password</title>

  <!--[if lt IE 9]>
    <script src="/js/html5shiv.js"></script>
  <![endif]-->

  <script  src="//code.jquery.com/jquery-3.2.1.min.js"  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="  crossorigin="anonymous"></script>
  <script src="loginAJAX.js"></script>
</head>

<body>
<header>
  <h1>Reset Password</h1>
</header>

<main>
  <form id="userLogonForm" method="POST" action="loginAPI/resetPasswordFunctions.php" type="json">
    <div id="outputRegion" aria-live="polite" ></div>

    <fieldset>
    <legend>Reset Password Form</legend>
    <label for="currentPassword">Current Password:</label>
    <input type="password" id="currentPassword" name="currentPassword" />
    <label for="newPassword">New Password:</label>
    <input type=password id="newPassword" name="newPassword" />
    <label for="confirmNewPassword">Confirm New Password:</label>
    <input type=password id="confirmNewPassword" name="confirmNewPassword" />
    <input type="submit" id="registerButton" value="Reset Password" />
    <input type="button" onclick="window.location='welcome.php'" id="cancelButton" value="Cancel" />
    </fieldset>
  </form>
</main>

</body>
</html>