<?PHP
session_start();
$_SESSION["user"] = "user";
session_write_close();
?>


<!doctype html>
<html lang="en">

  <head>
    <title>Register</title>

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
          <form id="userLogonForm" method="POST" action="loginAPI/registerFunctions.php" type="json">
          <div id="outputRegion" aria-live="polite" ></div>

          <fieldset>
            <legend>Register Form</legend>
            <p>Your username must start with a letter, and may contain only letters, numbers, dashes, and periods.</p>
            <label for="user_name">* Username:</label>
            <br>
            <input type="text" id="user_name" name="user_name" required="required" />
            <br>
            <label for="user_email">* Email:</label>
            <br>
            <input type="email" id="user_email" name="user_email" required="required" />
          </fieldset>
          <fieldset>
            <legend>Conference Event Notification Settings</legend>
            <div id="check-box-settings">
              <label for="user_notifyByEmail">Notify by email:</label>
              <input type="checkbox" id="user_notifyByEmail" name="user_notifyByEmail" value="true" checked="checked" />
              <br>
              <label for="user_notifyByPhone">Notify by text message:</label>
              <input type="checkbox" id="user_notifyByPhone" name="user_notifyByPhone" value="true" />
            </div>
          </fieldset>

          <fieldset id="phoneRegion" style="display: none;">
            <label for="user_phone">Phone:</label>
            <input type="phone" id="user_phone" name="user_phone" />
            <p>Plese choose your carrier from the list. This is necessary to send you text notifications. We support only a small number of carriers,
            so we appoligize for any inconvenience.</ br><br></p>
            <label for="user_phoneCarrier">Carrier:</label>
            <p>
            <select id="user_phoneCarrier" name="user_phoneCarrier">
              <option value="" selected="selected"></option>
              <option value="verizon">verizon</option>
              <option value="metro pcs">metro pcs</option>
              <option value="nextel">nextel</option>
              <option value="sprint">sprint</option>
              <option value="t-mobile">t-mobile</option>
              <option value="u.s. cellular">u.s. cellular</option>
              <option value="at&t">at&t</option>
              <option value="virgin mobile">at&t</option>
              <option value="tracfone">tracfone</option>
              <option value="ting">ting</option>
              <option value="boost mobil">boost mobil</option>
            </select></p>
            <!--Message for only screenreaders. read when region is shown, shouldn't be visually visible.-->
            <div id="screenreaderPhoneRegionMessage" class="screenreader-text" role="alert">Phone Information expanded below</div>
          </fieldset>

          <label for="user_password">* Password:</label>
          <br>
          <input type=password id="user_password" name="user_password" required="required" />
          <br>
          <label for="confirm_password">* Confirm Password:</label>
          <br>
          <input type="password" id="confirm_password" name="confirm_password" required="required" />
          <br>
          <label for="user_conference">Choose your Conference</label>
          <br>
          <input type="submit" id="registerButton" value="Register" />
          </fieldset>

          <p>Already have an account? <a href="login.php"><br>Login here</a>.</p>
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