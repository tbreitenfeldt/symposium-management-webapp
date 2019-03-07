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
<title>Admin Login</title>
<?php require_once "./header/loginHeader.php"; ?>
</head>

<body>
    <div id="contentId">
      <header>
        <h1>Administrator Login</h1>
      </header>

      <main>
        <form id="userLogonForm" method="POST" action="../loginAPI/loginFunctions.php" type="json" class="form-horizontal">
          <div id="outputRegion" aria-live="polite" ></div>

          <fieldset>
            <legend>Login Form</legend>
            <div id="inputDiv">
              <label for="admin_name">Username:</label>
              <input type="text" id="admin_name" name="admin_name" placeholder="Username"/>
              <br>
              <label for="admin_password">Password:&nbsp;</label>
              <input type=password id="admin_password" name="admin_password" placeholder="Password"/>
            </div>
            <br>
            <div id="submitDiv">
              <input type="submit" id="loginButton" value="Login"/>
            </div>
          </fieldset>
          <p>Don't have an account? <a href="register.php">Sign up now</a>.</p>
        </form>
      </main>
    </div>

    <?php require_once "./footer/indexFooter.php"; ?>

<body>
</html>