<?php
session_start();
$_SESSION["user"] = "user";
session_write_close();
?>


<!doctype html>
<html lang="en">

    <head>
    <?php require_once "phpIncludes/userHeader.php"; ?>

        <title>Forgot Password</title>

        <!-- Our Custom CSS -->
        <link rel="stylesheet" href="css/login.css">
        <link rel="stylesheet" href="css/forgotPassword.css">
        <link rel="stylesheet" href="css/menu/menu.css">

        <!--Our custom JS-->
        <script src="js/loginSystemJs/loginAJAX.js"></script>
        <script src="js/userJs/userAccountRegistration.js"></script>
    </head>

    <body id="my-body">
        <div class="overlay"></div> <!-- Used for shadow effect when call upon other menu -->

             <!-- content  -->
             <div id="content">
            <div id="content-inside">
                <form id="userLogonForm" method="POST" action="loginAPI/forgotPasswordFunctions.php" type="json" onSubmit="return submitForm(event)">
                <legend>Forgot Password Form</legend>

                <p>Note that the link  sent to your email will expire after a couple minutes, so please click on the link as soon as you recieve the email.</p>
                <p>If you did not recieve the email, please check your spam folder.</p>

                <fieldset>
                    <div class="inputData">
                    <label for="user_email"><h3>Email:</h3></label>
                    <br aria-hidden="true">
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

        <?php require_once "phpIncludes/accesibilityMenuOnly.php";?>
        <?php require_once "phpIncludes/footer.php"; ?>

        <!-- jQuery Custom Scroller CDN -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
        <!-- Popper.JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
        <!-- Bootstrap JS -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
    </body>
</html>