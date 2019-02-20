<?PHP
session_start();
$_SESSION["user"] = "user";
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
    <label for="user_name">Username:</label>
    <input type="text" id="user_name" name="user_name" />
    <label for="user_email">Email:</label>
    <input type="email" id="user_email" name="user_email" />
    <label for="user_phone">Phone:</label>
    <input type="phone" id="user_phone" name="user_phone" />
    <label for="user_password">Password:</label>
    <input type=password id="user_password" name="user_password" />
    <label for="confirm_password">Confirm Password:</label>
    <input type="password" id="confirm_password" name="confirm_password" />
    <input type="checkbox" id="user_notifyByEmail" name="user_notifyByEmail" value="true" />
    <label for="user_notifyByEmail">Notify me by email:</label>
    <input type="checkbox" id="user_notifyByPhone" name="user_notifyByPhone" value="true" />
    <label for="user_notifyByPhone">Notify me by text message</label>

    <input type="submit" id="registerButton" value="Register" />
    </fieldset>
    
    <p>Already have an account? <a href="login.php">Login here</a>.</p>
  </form>
</main>

</body>
</html>