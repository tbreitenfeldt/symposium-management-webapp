<?PHP
session_start();
$_SESSION["user"] = "admin";
session_write_close();
?>


<!doctype html>
<html lang="en">

<head>
  <?php require_once "../includes/header.php"; ?>
  <title>Admin Register</title>

  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="../css/home.css">
  <link rel="stylesheet" href="../css/login.css">
  <link rel="stylesheet" href="../css/register.css">

  <script src="../js/loginSystemJs/loginAJAX.js"></script>
</head>

<body>

  <header></header>

  <main class="wrapper">
    <form id="userLogonForm" method="POST" action="../loginAPI/registerFunctions.php" type="json" class="form-horizontal">
      <fieldset>
        <legend>Administrator<br/>Registration Form</legend>
        <p>Your username must start with a letter, <br/>and may contain only <br/>letters, numbers, dashes, and periods.</p>
        <div id="fieldClass">
          <div class="form-group row">
            <label for="admin_name" class="col-sm-12 col-form-label">Username:</label>
            <div class="col-sm-12">
              <input type="text" class="form-control" id="admin_name" name="admin_name" required="required" placeholder="Name">
            </div>
          </div>
          <div class="form-group row">
            <label for="admin_password" class="col-sm-12 col-form-label">Password:</label>
            <div class="col-sm-12">
              <input type="password" class="form-control" id="admin_password" name="admin_password" required="required" placeholder="********">
            </div>
          </div>
          <div class="form-group row">
              <label for="confirm_password" class="col-sm-12 col-form-label">Confirm Password:</label>
              <div class="col-sm-12">
                <input type="password" class="form-control" id="confirm_password" name="confirm_password" required="required" placeholder="********">
              </div>
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

    <?php require_once "../includes/footer.php"; ?>

</body>
</html>