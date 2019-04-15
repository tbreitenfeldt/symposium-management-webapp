<?php
session_start();
$_SESSION["user"] = "user";
session_write_close();
?>


<!doctype html>
<html lang="en">

<head>
  <?php require_once "includes/header.php"; ?>
  <title>Forgot Password</title>

  <link rel="stylesheet" href="css/home.css">
  <link rel="stylesheet" href="css/login.css">

  <script src="js/loginSystemJs/loginAJAX.js"></script>
</head>

<body>
<main id="wrap">
  <form id="userForgotPasswordForm" method="POST" action="loginAPI/forgotPasswordFunctions.php" type="json">
    <fieldset>
      <legend>Forgot Password Form</legend>
      <div class="inputData">
        <label for="user_email">Email:</label>
        <input type="email" id="user_email" name="user_email" placeholder="Email Address:"/>
      </div>
      <input type="submit" id="forgotPasswordButton" value="Submit" />
    </fieldset>

    <div id="outputRegion" aria-live="polite" ></div>
    <div id="push"></div>
  </form>
</main>

  <?php require_once "includes/footer.php"; ?>
</body>
</html>

<!-- 5Tkikc2y!!! -->