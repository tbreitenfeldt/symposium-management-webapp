<?php
session_start();

$_SESSION["user"] = "admin";

if (isset($_SESSION["admin_loggedin"]) && $_SESSION["admin_loggedin"]) {
    header("location: administratorDashboard.php");
    exit;
}//end if

session_write_close();
?>


<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8"/>

  <title>Administrator Login</title>

  <!--[if lt IE 9]>
    <script src="/js/html5shiv.js"></script>
  <![endif]-->

  <script  src="//code.jquery.com/jquery-3.2.1.min.js"  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="  crossorigin="anonymous"></script>
  <script src="../js/loginSystem/loginAJAX.js"></script>
</head>

<body>
<header>
  <h1>Administrator Login</h1>
</header>

<main>
  <form id="userLogonForm" method="POST" action="../loginAPI/loginFunctions.php" type="json">
    <div id="outputRegion" aria-live="polite" ></div>

    <fieldset>
    <legend>Login Form</legend>
    <label for="admin_name">Username:</label>
    <input type="text" id="admin_name" name="admin_name" />
    <label for="admin_password">Password:</label>
    <input type=password id="admin_password" name="admin_password" />
    <input type="submit" id="loginButton" value="Login" />
    </fieldset>

    <p>Don't have an account? <a href="register.php">Sign up now</a>.</p>
  </form>
</main>

</body>
</html>