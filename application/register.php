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
  <link rel="stylesheet" href="css/register.css">
  <script src="js/loginSystemJs/loginAJAX.js"></script>
</head>

<body>
  <header></header>
  <main>
    <form id="userLogonForm" method="POST" action="loginAPI/registerFunctions.php" type="json">
      <fieldset>
        <legend>Registration Form</legend>
        <p>Your username must start with a letter, and may contain only letters, numbers, dashes, and periods.</p>
        <div class="form-group row">
          <label for="user_name" class="col-sm-12 col-form-label">Username</label>
          <div class="col-sm-12">
            <input type="text" class="form-control" placeholder="Username" name="user_name" required="required" />
          </div>
        </div>
        <div class="form-group row">
          <label for="user_password" class="col-sm-12 col-form-label">Password</label>
          <div class="col-sm-12">
            <input type="password" class="form-control" id="user_password" name="user_password" required="required" placeholder="Password">
          </div>
        </div>
        <div class="form-group row">
          <label for="confirm_password" class="col-sm-12 col-form-label">Confirm Password</label>
          <div class="col-sm-12">
            <input type="password" class="form-control"  id="confirm_password" name="confirm_password" required="required" placeholder="Password">
          </div>
        </div>
        <div class="form-group row">
          <label for="user_email" class="col-sm-12 col-form-label">Email</label>
          <div class="col-sm-12">
            <input type="email" class="form-control" id="user_email" name="user_email" required="required" placeholder="Email">
          </div>
        </div>
        <div class="form-group row">
          <label for="user_phone" class="col-sm-12 col-form-label">Phone Number</label>
          <div class="col-sm-12">
            <input type="phone" class="form-control" id="user_phone" name="user_phone" placeholder="Phone Number"/>
          </div>
        </div>
        <label for="user_notifyByEmail">Notify me by</label>
        <div class="form-group row">
          <div class="form-check">
            <label class="notification-option" for="user_notifyByEmail"><strong>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></label>
            <input class="w3-check" type="checkbox" id="user_notifyByEmail" name="user_notifyByEmail" value="true" checked="checked" />
          </div>
        </div>
        <div class="form-group row">
          <div class="form-check">
            <label class="notification-option" for="user_notifyByPhone"><strong>Text Message</strong></label>
            <input class="w3-check" type="checkbox" id="user_notifyByPhone" name="user_notifyByPhone" value="true" />
          </div>
        </div>
        <div class="form-group row justify-content-center">
          <div class="form-check col-sm-10">
            <input type="submit" id="registerButton" value="Register" class="btn btn-primary btn-lg btn-block"/>
          </div>
        </div>
        <div class="form-group row justify-content-center">
          <div class="form-check">
                <p>Already have an account?<br/> <a href="login.php">Login here</a></p>
          </div>
        </div>
      </fieldset>
      <div id="outputRegion" aria-live="polite" ></div>
    </form>
  </main>
</body>
<?php require_once "includes/footer.php"; ?>
</html>