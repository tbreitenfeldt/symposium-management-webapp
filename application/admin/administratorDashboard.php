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
  <h1>Administrator Dashboard</h1>
</header>

<main>
  <ul>
    <li><a href="logout.php">Logout</a></li>
    <li><a href="resetPassword.php">Reset Password</a>
    <li><a href="createConference.php">Create Conference</a></li>
    <li><a href="changeConference.php">Change Conference</a></li>
  </ul>
</main>

</body>
</html>