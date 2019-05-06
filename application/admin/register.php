<?PHP
session_start();
$_SESSION["user"] = "admin";
session_write_close();
?>


<!doctype html>
<html lang="en">

<head>
<<<<<<< HEAD
  <?php require_once "../includes/adminHeader.php"; ?>
  <title>Admin Register</title>
=======
    <title>Register for Conference Management System</title>
>>>>>>> chesterBranch

    <!-- Meta Tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- Bootstrap CSS CDN -->
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    
    <!-- Our Custom CSS -->
    <link rel="stylesheet" href="../css/menu.css">
    <link rel="stylesheet" href="../css/login.css">
    <link rel="stylesheet" href="../css/register.css">

    <!--AJAX JS-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!--Our custom JS-->
    <script src="../js/loginSystemJs/loginAJAX.js"></script>
    <script src="../js/userJs/userAccountRegistration.js"></script>
    <script src="../js/conferenceAPIJs/databaseFunctions.js"></script>
    <script src="../js/userJs/userSchedule.js"></script>
    <script src="../js/userJs/mainSchedule.js"></script>
    <script src="../js/conferenceAPIJs/databaseFunctions.js"></script>
    <script src="../js/userJs/userAccountRegistration.js"></script>
    <script src="../js/userJs/menu.js"></script>
    
    <!-- Font Awesome JS -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
  </head>

<<<<<<< HEAD
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
=======
<body id="my-body">
    <div class="overlay"></div> <!-- Used for shadow effect when call upon other menu -->

    <!-- content  -->
      <div id="content">
        <div id="content-inside">  
        <form id="userLogonForm" method="POST" action="../loginAPI/registerFunctions.php" type="json" class="form-horizontal">
          <fieldset>
            <header>Administrator<br aria-hidden="true">Registration Form</header>
            <p>Your username must start with a letter, <br aria-hidden="true">and may contain only <br aria-hidden="true">letters, numbers, dashes, and periods.</p>
            <div id="fieldClass">
              <div class="form-group row">
                <label for="admin_name" class="col-sm-12 col-form-label">Username:</label>
                <div class="col-sm-12">
                  <input type="text" class="form-control" id="admin_name" name="admin_name" required="required">
                </div>
              </div>

              <label for="admin_email" class="control-label">Email:</label>
              <input type="email" id="admin_email" name="admin_email" required="required" />

>>>>>>> chesterBranch


              <div class="form-group row">
                <label for="admin_password" class="col-sm-12 col-form-label">Password:</label>
                <div class="col-sm-12">
                  <input type="password" class="form-control" id="admin_password" name="admin_password" required="required">
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
                  <input type="submit" id="registerButton" value="Register" class="btn btn-primary btn-lg btn-block"/>
                </div>
              </div>    
              
              <div class="form-group row justify-content-center">
                <div class="form-check">
                      <p>Already have an account?<br aria-hidden="true"> <a href="login.php">Login here</a></p>
                </div>
              </div>
          </fieldset>
          <div id="outputRegion" aria-live="polite" ></div>
        </form>
        </div>
    </div>
    <!-- END content  -->

    <?php include "../includes/accesibilityMenuOnly.php";?>
    <?php include "../includes/footer.php";?>
  </body>
</html>