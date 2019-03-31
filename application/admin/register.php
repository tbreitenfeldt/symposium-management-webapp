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

  <link rel="stylesheet" href="../css/home.css">
  <link rel="stylesheet" href="../css/login.css">

  <script src="../js/loginSystemJs/loginAJAX.js"></script>
</head>

<body>
  <div id="contentId">

      <header>
        <h1>Register</h1>
      </header>

      <main>

        <form id="userLogonForm" method="POST" action="../loginAPI/registerFunctions.php" type="json" class="form-horizontal">
          <div id="outputRegion" aria-live="polite" ></div>

            <fieldset>

              <legend>Register Form</legend>
              <p>Your username must start with a letter, <br/>and may contain only <br/>letters, numbers, dashes, and periods.</p>
              <div id="fieldClass">
                  <label for="admin_name" class="control-label">Username:</label>
                  <input type="text" id="admin_name" name="admin_name" required="required" />

                  <br>

                  <label for="admin_password" class="control-label">Password:</label>
                  <input type=password id="admin_password" name="admin_password" required="required" />

                  <br>

                  <label for="confirm_password" class="control-label">Confirm Password:</label>
                  <input type="password" id="confirm_password" name="confirm_password" required="required" />
              </div>
              <input type="submit" id="registerButton" value="Register" />

            </fieldset>
            
            <br>
            <p>Already have an account? <a href="login.php">Login here</a>.</p>
      </form>

      </main>
  </div>

    <?php require_once "../includes/footer.php"; ?>

</body>
</html>