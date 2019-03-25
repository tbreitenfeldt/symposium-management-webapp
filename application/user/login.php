<?php
session_start();

$_SESSION["user"] = "user";

if (isset($_SESSION["user_loggedin"]) && $_SESSION["user_loggedin"]) {
    header("location: welcome.php");
    exit;
}//end if

session_write_close();
?>


<!doctype html>
<html lang="en">

<head>
  <?php require_once "header/header.php"; ?>

  <title>Login</title>

  <script src="../js/loginSystem/loginAJAX.js"></script>
</head>

<body>
<header>
  <h1>Login</h1>
</header>

<main>
  <form id="userLogonForm" method="POST" action="../loginAPI/loginFunctions.php" type="json">
    <div id="outputRegion" aria-live="polite" ></div>

    <fieldset>
    <legend>Login Form</legend>
    <label for="user_name">Username:</label>
    <input type="text" id="user_name" name="user_name" />
    <label for="user_password">Password:</label>
    <input type=password id="user_password" name="user_password" />
    <input type="submit" id="loginButton" value="Login" />
    </fieldset>

    <p>Don't have an account? <a href="register.php">Sign up now</a>.</p>
  </form>
</main>

  <?php require_once "footer/footer.php"; ?>
</body>
</html>