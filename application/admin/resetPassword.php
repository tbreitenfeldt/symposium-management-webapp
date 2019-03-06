<?php
require_once "authenticateUser.php";
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
  <script src="../js/loginSystem/loginAJAX.js"></script>
</head>

<body>
<header>
  <h1>Reset Password</h1>
</header>

<main>
  <form id="userLogonForm" method="POST" action="../loginAPI/resetPasswordFunctions.php" type="json">
    <div id="outputRegion" aria-live="polite" ></div>

    <fieldset>
    <legend>Reset Password Form</legend>
    <label for="old_password">Current Password:</label>
    <input type="password" id="old_password" name="old_password" />
    <label for="admin_password">New Password:</label>
    <input type=password" id="admin_password" name="admin_password" />
    <label for="confirm_password">Confirm New Password:</label>
    <input type=password id="confirm_password" name="confirm_password" />
    <input type="submit" id="resetPasswordButton" value="Reset Password" />
    <input type="button" onclick="window.location='administratorDashboard.php'" id="cancelButton" value="Cancel" />
    </fieldset>
  </form>
</main>

</body>
</html>