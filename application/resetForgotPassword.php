<?php
session_start();
$_SESSION["user"] = "user";
session_write_close();

if ($_SERVER["REQUEST_METHOD"] != "GET" || !isset($_GET["token"]) || !isset($_GET["email"])) {
    header("location: error.php");
}//end if
?>

<!doctype html>
<html lang="en">

<head>
  <?php require_once "includes/header.php"; ?>
  <title>Reset Forgot Password</title>

  <link rel="stylesheet" href="css/home.css">
  <link rel="stylesheet" href="css/login.css">

  <script src="js/loginSystemJs/loginAJAX.js"></script>
</head>

<body>
<header>
  <h1>Reset Forgot Password</h1>
</header>

<main>
  <form id="userLogonForm" method="POST"
      action="loginAPI/resetForgotPasswordFunctions.php?token=<?php echo htmlspecialchars($_GET['token']); ?>&email=<?php echo htmlspecialchars($_GET['email']); ?>"
        type="json">
    <div id="outputRegion" aria-live="polite" ></div>

    <fieldset>
    <legend>Reset Forgot Password Form</legend>
    <label for="user_password">New Password:</label>
    <input type=password id="user_password" name="user_password" required="required" />
    <label for="confirm_password">Confirm New Password:</label>
    <input type=password id="confirm_password" name="confirm_password" required="required" />
    <input type="submit" id="resetForgotPasswordButton" value="Reset Password" />
    </fieldset>
  </form>
</main>

<?php require_once "includes/footer.php"; ?>
</body>
</html>