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

<main class="wrapper">
  <div class="content-inside">
    <form id="userLogonForm" method="POST" action="loginAPI/loginFunctions.php" type="json">
        <fieldset>
          <legend>Login Form</legend>
          <div class="form-group row">
            <label for="user_name" class="col-sm-12 col-form-label">Username:</label>
            <input class="col-sm-12" type="text" id="user_name" name="user_name" placeholder="Username:"/>
          </div>
          <div class="form-group row">
            <label for="user_password" class="col-sm-12 col-form-label">Password:</label>
              <input class="col-sm-12" type=password id="user_password" name="user_password" placeholder="Password"/>
          </div>
          <div class="form-check col-sm-10">
            <input type="submit" id="loginButton" value="Login" class="btn btn-primary btn-lg btn-block"/>
          </div>  
        </fieldset>

        <p id="signUp">Don't have an account? <br/><a href="register.php">Sign up now</a>.</p>

        <div id="outputRegion" aria-live="polite" ></div>
    </form>
  </div>
  <div class="push"></div>
</main>

  <?php require_once "includes/footer.php"; ?>
</body>
</html>

<!-- 5Tkikc2y!!! -->