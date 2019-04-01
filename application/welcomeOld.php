<?php
require_once "authenticateUser.php";
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
  <h1>Welcome <?php echo htmlspecialchars($_SESSION["user_name"]); ?></h1>
  <p>
  email: <?php echo htmlspecialchars($_SESSION["user_email"]); ?><br>
  phone: <?php echo htmlspecialchars($_SESSION["user_phone"]); ?><br>
  notify by phone: <?php echo htmlspecialchars($_SESSION["user_notifyByPhone"]); ?><br>
  notify by email: <?php echo htmlspecialchars($_SESSION["user_notifyByEmail"]); ?>
  </p>
</header>

<main>
  <p>
  <a href="resetPassword.php">Reset Password</a>
  <a href="logout.php">Logout</a>
  </p>
</main>

</body>
</html>