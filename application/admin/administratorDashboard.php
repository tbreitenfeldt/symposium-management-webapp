<?php
require_once "authenticateUser.php";
?>


<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8"/>

  <title>Administrator Dashboard</title>

  <!--[if lt IE 9]>
    <script src="/js/html5shiv.js"></script>
  <![endif]-->
</head>

<body>
<header>
  <h1>Administrator Dashboard<?php echo htmlspecialchars($_SESSION["user_name"]); ?></h1>
</header>

<main>
  <p>
  <a href="resetPassword.php">Reset Password</a>
  <a href="logout.php">Logout</a>
  </p>
</main>

</body>
</html>