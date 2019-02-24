<?PHP
session_start();
$_SESSION["user"] = "admin";
session_write_close();
?>


<<<<<<< HEAD
<?php include('./header/loginHeader.php'); ?>

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
                  <input type="text" id="admin_name" name="admin_name"/>

                  <br>

                  <label for="admin_password" class="control-label">Password:</label>
                  <input type=password id="admin_password" name="admin_password"/>

                  <br>

                  <label for="confirm_password" class="control-label">Confirm Password:</label>
                  <input type="password" id="confirm_password" name="confirm_password"/>
              </div>
              <input type="submit" id="registerButton" value="Register" />

            </fieldset>
            
            <br>
            <p>Already have an account? <a href="login.php">Login here</a>.</p>
      </form>

      </main>
  </div>

<?php include('./footer/indexFooter.php'); ?>
=======
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8"/>

  <title>Register</title>

  <!--[if lt IE 9]>
    <script src="/js/html5shiv.js"></script>
  <![endif]-->

  <script  src="//code.jquery.com/jquery-3.2.1.min.js"  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="  crossorigin="anonymous"></script>
  <script src="../js/loginAJAX.js"></script>
</head>

<body>
<header>
  <h1>Register</h1>
</header>

<main>
  <form id="userLogonForm" method="POST" action="../loginAPI/registerFunctions.php" type="json">
    <div id="outputRegion" aria-live="polite" ></div>

    <fieldset>
    <legend>Register Form</legend>
    <p>Your username must start with a letter, and may contain only letters, numbers, dashes, and periods.</p>
    <label for="admin_name">Username:</label>
    <input type="text" id="admin_name" name="admin_name" />
    <label for="admin_password">Password:</label>
    <input type=password id="admin_password" name="admin_password" />
    <label for="confirm_password">Confirm Password:</label>
    <input type="password" id="confirm_password" name="confirm_password" />
    <input type="submit" id="registerButton" value="Register" />
    </fieldset>

    <p>Already have an account? <a href="login.php">Login here</a>.</p>
  </form>
</main>

</body>
</html>
>>>>>>> 948dc090e1a7f3b682bfca1b636f33e1061839f2
