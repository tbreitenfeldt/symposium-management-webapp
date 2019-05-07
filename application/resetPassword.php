<?php require_once "authenticateUser.php"; ?>

<!--NOTE Left and Right Menus are opposite of their variable names-->
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

    <head>
      <title>Reset Password</title>

      <!-- Meta Tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">

      <!-- Bootstrap CSS CDN -->
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

      <!-- Our Custom CSS -->
      <link rel="stylesheet" href="css/menu.css">
      <link rel="stylesheet" href="css/login.css">
      <link rel="stylesheet" href="css/register.css">
      <link rel="stylesheet" href="css/resetPassword.css">

      <!--AJAX JS-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

      <!--Our custom JS-->
      <script src="js/loginSystemJs/loginAJAX.js"></script>
      <script src="js/userJs/userAccountRegistration.js"></script>
      <script src="js/conferenceAPIJs/databaseFunctions.js"></script>
      <script src="js/userJs/userSchedule.js"></script>
      <script src="js/userJs/mainSchedule.js"></script>
      <script src="js/conferenceAPIJs/databaseFunctions.js"></script>
      <script src="js/userJs/userAccountRegistration.js"></script>
      <script src="js/userJs/menu.js"></script>

      <!-- Font Awesome JS -->
      <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
      <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
    </head>

    <body id="my-body">
        <div class="overlay"></div> <!-- Used for shadow effect when call upon other menu -->

        <!-- content -->
        <div id="content">
          <div id="content-inside">
            <form id="userLogonForm" method="POST" action="loginAPI/resetPasswordFunctions.php" type="json" onSubmit="return submitForm(event)">
              <div id="outputRegion" aria-live="polite" ></div>

              <fieldset>
              <legend>Reset Password Form</legend>
              <label for="old_password">Current Password:</label>
              <br aria-hidden="true">
              <input type="password" id="old_password" name="old_password" />
              <br aria-hidden="true">
              <label for="user_password">New Password:</label>
              <br aria-hidden="true">
              <input type=password id="user_password" name="user_password" />
              <br aria-hidden="true">
              <label for="confirm_password">Confirm New Password:</label>
              <br aria-hidden="true">
              <input type=password id="confirm_password" name="confirm_password" />
              <br aria-hidden="true">
              <input type="submit" id="registerButton" value="Reset Password" />
              <br aria-hidden="true">
              <input type="button" onclick="window.location='<?php echo LOGGEDIN_LANDING_PAGE_NAME; ?>'" id="cancelButton" value="Cancel" />
              </fieldset>
            </form>
          </div>
        </div>
        <!-- END content  -->

        <?php include "./includes/accesibilityMenuOnly.php";?>
        <?php include "./includes/footer.php";?>
    </body>
</html>