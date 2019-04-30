<?php
session_start();
$_SESSION["user"] = "user";
session_write_close();
?>


<!doctype html>
<html lang="en">

    <head>
        <title>Forgot Password</title>

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
        <link rel="stylesheet" href="css/forgotPassword.css">

        <!--AJAX JS-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <!--Our custom JS-->
        <script src="js/loginSystemJs/loginAJAX.js"></script>
        <script src="js/userJs/userAccountRegistration.js"></script>

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
                <form id="userLogonForm" method="POST" action="loginAPI/forgotPasswordFunctions.php" type="json">
                <legend>Forgot Password Form</legend>

                <p>Note that the link  sent to your email will expire after a couple minutes, so please click on the link as soon as you recieve the email.</p>
                <p>If you did not recieve the email, please check your spam folder.</p>

                <fieldset>
                    <div class="inputData">
                    <label for="user_email"><h3>Email:</h3></label>
                    <br>
                    <input type="email" id="user_email" name="user_email" placeholder="Email Address:" required="required" />
                    </div>
                    <input type="submit" id="forgotPasswordButton" value="Submit" />
                </fieldset>

                <div id="outputRegion" aria-live="polite" ></div>
                <div id="push"></div>
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