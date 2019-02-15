<?PHP
session_start();
$_SESSION["user"] = "admin";
session_write_close();
?>


<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8"/>

  <title>Register</title>

  <!--[if lt IE 9]>
    <script src="/js/html5shiv.js"></script>
  <![endif]-->

  <script  src="//code.jquery.com/jquery-3.2.1.min.js"  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="  crossorigin="anonymous"></script>
  <script src="../loginAPI/js/loginAJAX.js"></script>
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