<?php require_once "authenticateUser.php"; ?>


<!doctype html>
<html lang="en">

<head>
  <?php require_once "includes/header.php"; ?>
  <title>Reset Password</title>

  <link rel="stylesheet" href="css/home.css">
  <link rel="stylesheet" href="css/login.css">

  <script src="js/loginSystemJs/loginAJAX.js"></script>
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
    <label for="old_password">Current Password:</label>
    <input type="password" id="old_password" name="old_password" />
    <label for="user_password">New Password:</label>
    <input type=password id="user_password" name="user_password" />
    <label for="confirm_password">Confirm New Password:</label>
    <input type=password id="confirm_password" name="confirm_password" />
    <input type="submit" id="registerButton" value="Reset Password" />
    <input type="button" onclick="window.location='<?php echo LOGGEDIN_LANDING_PAGE_NAME; ?>'" id="cancelButton" value="Cancel" />
    </fieldset>
  </form>
</main>

<?php require_once "includes/footer.php"; ?>
</body>
</html>