<?php
session_start();

if ( !isset($_SESSION["loggedin"]) || !$_SESSION["loggedin"]) {
    header("location: login.php");
    exit;
}//end if
?>


<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8"/>

  <title>Welcome</title>

  <!--[if lt IE 9]>
    <script src="/js/html5shiv.js"></script>
  <![endif]-->
</head>

<body>
<header>
  <h1>Welcome <?php echo htmlspecialchars($_SESSION["username"]); ?></h1>
</header>

<main>
  <p>
  <a href="resetPassword.php">Reset Password</a>
  <a href="logout.php">Logout</a>
  </p>
</main>

</body>
</html>