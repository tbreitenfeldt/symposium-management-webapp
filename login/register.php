<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8"/>

  <title>Register</title>

  <!--[if lt IE 9]>
    <script src="/js/html5shiv.js"></script>
  <![endif]-->

  <script  src="//code.jquery.com/jquery-3.2.1.min.js"  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="  crossorigin="anonymous"></script>
  <script src="loginAPI/js/loginAJAX.js"></script>
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
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" />
    <label for="userEmail">Email:</label>
    <input type="email" id="userEmail" name="userEmail" />
    <label for="userPhone">Phone:</label>
    <input type="phone" id="userPhone" name="userPhone" />
    <label for="password">Password:</label>
    <input type=password id="password" name="password" />
    <label for="confirmPassword">Confirm Password:</label>
    <input type=password id="confirmPassword" name="confirmPassword" />
    <input type="submit" id="registerButton" value="Register" />
    </fieldset>
    
    <p>Already have an account? <a href="login.php">Login here</a>.</p>
  </form>
</main>

</body>
</html>