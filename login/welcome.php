<?php
require_once "loginAPI/validateUser.php";
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
  <p>email: <?php echo htmlspecialchars($_SESSION["userEmail"]); ?><br>
  phone: <?php echo htmlspecialchars($_SESSION["userPhone"]); ?></p>
</header>

<main>
  <p>
  <a href="resetPassword.php">Reset Password</a>
  <a href="logout.php">Logout</a>
  </p>
</main>

</body>
</html>