<?php
//require_once "authenticateUser.php";
?>


<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8"/>

  <title>Administrator Dashboard</title>

  <!--[if lt IE 9]>
    <script src="/js/html5shiv.js"></script>
  <![endif]-->

  <script  src="//code.jquery.com/jquery-3.2.1.min.js"  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="  crossorigin="anonymous"></script>
  <script src="../js/admin/generateHTML.js"></script>
  <script src="../js/admin/conferenceManager.js"></script>
  <script src="../js/conferenceAPI/databaseFunctions.js"></script>
</head>

<body>
<header>
  <h1>Administrator Dashboard</h1>

  <nav>
    <ul>
      <li><a href="logout.php">Logout</a></li>
      <li><a href="resetPassword.php">Reset Password</a>
    </ul>
  </nav>
</header>

<main>
  <div id="headingRegion1" aria-live="polite"></div>
  <div id="controlsRegion1"></div>
  <div id="mainContentRegion1"></div>

  <div id="headingRegion2"></div>
  <div id="controlsRegion2"></div>
  <div id="mainContentRegion2"></div>

  <div id="conferenceFormRegion"></div>
  <div id="eventFormRegion"></div>
</main>

</body>
</html>