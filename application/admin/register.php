<?PHP
session_start();
$_SESSION["user"] = "admin";
session_write_close();
?>


<!doctype html>
<html lang="en">

<head>
  <?php require_once "../includes/adminHeader.php"; ?>
  <title>Admin Register</title>

  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="../css/home.css">
  <link rel="stylesheet" href="../css/login.css">
  <link rel="stylesheet" href="../css/register.css">

  <script src="../js/loginSystemJs/loginAJAX.js"></script>
</head>

<body>
  <header>
    <h1>Register</h1>
  </header>

  <main class="wrapper">
    <form id="userLogonForm" method="POST" action="../loginAPI/registerFunctions.php" type="json" class="form-horizontal">
      <fieldset>
        <legend>Administrator<br/>Registration Form</legend>
        <p id="usernameDescription">Your username must be between 3 and 30 characters, <br>start with a letter,<br/>and may contain only <br/>letters, numbers, dashes, and periods.</p>
        <div id="fieldClass">
          <div class="form-group row">
            <label for="admin_name" class="col-sm-12 col-form-label">Username:</label>
            <div class="col-sm-12">
              <input type="text" class="form-control" id="admin_name" name="admin_name" aria-labeledby="usernameDescription" required="required">
            </div>
          </div>

          <label for="admin_email" class="control-label">Email:</label>
          <input type="email" id="admin_email" name="admin_email" required="required" />

          <P id="passwordDescription">Your password must be at least 6 characters long</p>

          <div class="form-group row">
            <label for="admin_password" class="col-sm-12 col-form-label">Password:</label>
            <div class="col-sm-12">
              <input type="password" class="form-control" id="admin_password" name="admin_password" aria-labeledby="passwordDescription" required="required">
            </div>
          </div>
          <div class="form-group row">
              <label for="confirm_password" class="col-sm-12 col-form-label">Confirm Password:</label>
              <div class="col-sm-12">
                <input type="password" class="form-control" id="confirm_password" name="confirm_password" required="required">
              </div>
            </div>
          </div>
          <div class="form-group row justify-content-center">
            <div class="form-check col-sm-10">
              <input type="reset" id="resetButton" value="Reset" />
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

    <?php require_once "../includes/footer.php"; ?>

</body>
</html>