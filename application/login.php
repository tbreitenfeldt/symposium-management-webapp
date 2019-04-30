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

<!--NOTE Left and Right Menus are opposite of their variable names-->
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

    <head>
        <title>Login</title>

        <!-- Meta Tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <!-- Bootstrap CSS CDN -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

        <!-- Our Custom CSS -->
        <link rel="stylesheet" href="css/menu.css">
        <link rel="stylesheet" href="css/login.css">

        <!--AJAX JS-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
       
        <!--Our custom JS-->
        <script src="js/conferenceAPIJs/databaseFunctions.js"></script>
        <script src="js/userJs/userSchedule.js"></script>
        <script src="js/userJs/mainSchedule.js"></script>
        <script src="js/userJs/userAccountRegistration.js"></script>
        <script src="js/loginSystemJs/loginAJAX.js"></script>

        <!-- Font Awesome JS -->
        <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
    </head>

    <body id="my-body">
        <div class="overlay"></div> <!-- Used for shadow effect when call upon other menu -->

        <?php include "./includes/accesibilityMenuOnly.php";?>
        
        <!-- content  -->
        <div id="content">
          <div id="content-inside">
            <form id="userLogonForm" method="POST" action="loginAPI/loginFunctions.php" type="json">
                <fieldset>
                  <legend>Login Form</legend>
                  <div class="form-group row">
                    <label for="user_name" class="col-sm-12 col-form-label">Username:</label>
                  </div>
                  <div>
                    <input class="col-sm-12" type="text" id="user_name" name="user_name" placeholder="Username:"/>
                  </div>
                  <br>
                  <div class="form-group row">
                    <label for="user_password" class="col-sm-12 col-form-label">Password:</label>
                  </div>
                  <div >
                      <input class="col-sm-12" type=password id="user_password" name="user_password" placeholder="Password"/>
                  </div>
                  <div class="form-check col-sm-10">
                    <input type="submit" id="loginButton" value="Login" class="btn btn-primary btn-lg btn-block"/>
                  </div>  
                  <a href="forgotPassword.php">Forgot Password?</a>
                </fieldset>
                <p id="signUp">Don't have an account? <br><a href="register.php">Sign up now</a>.</p>

                <div id="outputRegion" aria-live="polite" ></div>
            </form>
          </div>
        </div>
        <!-- END content  -->

        <!-- jQuery Custom Scroller CDN -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
        <!-- Popper.JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
        <!-- Bootstrap JS -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
        <!-- Our Custom JS -->
        <script src="js/userJs/accessMenu.js"></script>
    </body>
</html>