<?php
session_start();

if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"]) {
    header("location: welcome.php");
    exit;
}//end if
?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8"/>

  <title>Login</title>

  <!--[if lt IE 9]>
    <script src="/js/html5shiv.js"></script>
  <![endif]-->

  <!--<script  src="//code.jquery.com/jquery-3.2.1.min.js"  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="  crossorigin="anonymous"></script>-->
  <script src="jquery-3.3.1.min.js"></script>
  <script src="loginAJAX.js"></script>
</head>

<body>
<header>
  <h1>Login</h1>
</header>

<main>
  <form id="userLogonForm" method="POST" action="loginAPI/loginFunctions.php" type="json">
    <div id="outputRegion" aria-live="polite" ></div>

    <fieldset>
    <legend>Login Form</legend>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" />
    <label for="password">Password:</label>
    <input type=password id="password" name="password" />
    <input type="submit" id="registerButton" value="Login" />
    </fieldset>

    <p>Don't have an account? <a href="register.php">Sign up now</a>.</p>
  </form>
</main>

</body>
</html>