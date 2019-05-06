<?php require_once "authenticateUser.php"; ?>


<!doctype html>
<html lang="en">

<head>
  <?php require_once "../includes/adminHeader.php"; ?>
  <title>Administrator Dashboard</title>

  <link rel="stylesheet" href="../css/home.css">
  <link rel="stylesheet" href="../css/login.css">

  <script src="../js/conferenceAPIJs/databaseFunctions.js"></script>
  <script src="../js/adminJs/generateHTML.js"></script>
  <script src="../js/adminJs/conferenceManager.js"></script>
</head>

<body>
<header>
  <h1>Administrator Dashboard</h1>

  <nav>
    <ul>
      <li><a href="index.php">Home</a></li>
      <li><a href="logout.php">Logout</a></li>
      <li><a href="resetPassword.php">Reset Password</a>
    </ul>
  </nav>
</header>

<main>
  <div id="headingRegion1" class="contentRegions" aria-live="polite"></div>
  <div id="controlsRegion1" class="contentRegions"></div>
  <div id="mainContentRegion1" class="contentRegions"></div>

  <div id="headingRegion2" class="contentRegions"></div>
  <div id="controlsRegion2" class="contentRegions"></div>
  <div id="mainContentRegion2" class="contentRegions"></div>

  <!--These regions are populated with the conference form and event form respectively. The regions are initially hidden-->
  <div id="conferenceFormRegion"></div>
  <div id="eventFormRegion"></div>
</main>

<?php require_once "../includes/footer.php"; ?>
</body>
</html>