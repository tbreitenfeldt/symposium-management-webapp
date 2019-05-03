<?php
session_start();
$_SESSION["user"] = "user";
session_write_close();
?>

<!doctype html>
<html lang="en">

  <head>
    <title>Reset Forgot Password</title>

    <!-- Meta Tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Bootstrap CSS CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

    <!-- Our Custom CSS -->
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/register.css">

    <!--AJAX JS-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!--Our custom JS-->
    <script src="js/loginSystemJs/loginAJAX.js"></script>
    <script src="js/userJs/menu.js"></script>

    <!-- Font Awesome JS -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>

  </head>

  <body id="my-body">
    <div class="overlay"></div> <!-- Used for shadow effect when call upon other menu -->

    <div id="content">
      <div id="content-inside">
          <form id="userLogonForm" method="POST"
              action="loginAPI/resetForgotPasswordFunctions.php?token=<?php echo htmlspecialchars($_GET['token']); ?>&email=<?php echo htmlspecialchars($_GET['email']); ?>"
                type="json">
            <div id="outputRegion" aria-live="polite" ></div>

            <fieldset>
              <h2>Reset Forgot Password Form</h2>
              <br aria-hidden="true">
              <label for="user_password">New Password:</label>
              <br aria-hidden="true">
              <input type=password id="user_password" name="user_password" required="required" />
              <br aria-hidden="true"><br aria-hidden="true">
              <label for="confirm_password">Confirm New Password:</label>
              <br aria-hidden="true">
              <input type=password id="confirm_password" name="confirm_password" required="required" />
              <br aria-hidden="true"><br aria-hidden="true">
              <input type="submit" id="resetForgotPasswordButton" value="Reset Password" />
            </fieldset>
          </form>
      </div>
    </div>

    <?php include "./includes/accesibilityMenuOnly.php";?>
    <?php include "./includes/footer.php";?>
  </body>
</html>