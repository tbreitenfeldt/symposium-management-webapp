<?PHP
session_start();
$_SESSION["user"] = "user";
session_write_close();
?>


<!doctype html>
<html lang="en">

<head>
  <?php require_once "includes/header.php"; ?>
  <title>Register</title>

  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="css/home.css">
  <link rel="stylesheet" href="css/login.css">

  <script src="js/conferenceAPIJs/databaseFunctions.js"></script>
  <script src="js/userJs/userAccountRegistration.js"></script>
  <script src="js/loginSystemJs/loginAJAX.js"></script>
</head>

<body>
<header>
  <h1>Register</h1>
</header>

<main>
  <form id="userLogonForm" method="POST" action="loginAPI/registerFunctions.php" type="json">
    <div id="outputRegion" aria-live="polite" ></div>

    <fieldset>
    <legend>Register Form</legend>
    <p>Your username must start with a letter, and may contain only letters, numbers, dashes, and periods.</p>
    <label for="user_name">* Username:</label>
    <input type="text" id="user_name" name="user_name" required="required" />
    <label for="user_email">* Email:</label>
    <input type="email" id="user_email" name="user_email" required="required" />

    <fieldset>
    <legend>Conference Event Notification Settings</legend>
    <input type="checkbox" id="user_notifyByEmail" name="user_notifyByEmail" value="true" checked="checked" />
    <label for="user_notifyByEmail">Notify me by email:</label>
    <input type="checkbox" id="user_notifyByPhone" name="user_notifyByPhone" value="true" />
    <label for="user_notifyByPhone">Notify me by text message</label>
    </fieldset>

    <fieldset id="phoneRegion" style="display: none;">
      <label for="user_phone">Phone:</label>
      <input type="phone" id="user_phone" name="user_phone" />
      <p>Plese choose your carrier from the list. This is necessary to send you text notifications. We support only a small number of carriers,
      so we appoligize for any inconvenience.</ br><br>
      <label for="user_phoneCarrier">Carrier:</label>
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
    <input type=password id="user_password" name="user_password" required="required" />
    <label for="confirm_password">* Confirm Password:</label>
    <input type="password" id="confirm_password" name="confirm_password" required="required" />
    <label for="user_conference">Choose your Conference</label>

    <input type="submit" id="registerButton" value="Register" />
    </fieldset>

    <p>Already have an account? <a href="login.php">Login here</a>.</p>
  </form>
</main>

<?php require_once "includes/footer.php"; ?>
</html>