<?php
session_start();
$_SESSION["user"] = "user";

require_once "config.php";

if (isset($_SESSION[LOGGEDIN_TOKEN_NAME]) && $_SESSION[LOGGEDIN_TOKEN_NAME]) {
    header("location: " . LOGGEDIN_LANDING_PAGE_NAME);
    exit;
}//end if

session_write_close();
?>


<!doctype html>
<html lang="en">

<head>
  <?php require_once "includes/header.php"; ?>
  <title>Login</title>

  <link rel="stylesheet" href="css/home.css">
  <link rel="stylesheet" href="css/login.css">

  <script src="js/loginSystemJs/loginAJAX.js"></script>
</head>

<body>
<header>

</header>

<main id="wrap">
  <form id="userLogonForm" method="POST" action="loginAPI/loginFunctions.php" type="json">
    <fieldset>
      <legend>Login Form</legend>
      <div class="inputData">
        <label for="user_name">Username:</label>
        <input type="text" id="user_name" name="user_name" placeholder="Username:"/>
      </div>
      <div class="inputData">
        <label for="user_password">Password:</label>
        <input type=password id="user_password" name="user_password" placeholder="Password"/>
      </div>
      <input type="submit" id="loginButton" value="Login" />
    </fieldset>

    <p>Don't have an account? <br/><a href="register.php">Sign up now</a>.</p>

    <div id="outputRegion" aria-live="polite" ></div>
    <div id="push"></div>
  </form>
</main>

  <?php require_once "includes/footer.php"; ?>
</body>
</html>

<!-- 5Tkikc2y!!! -->