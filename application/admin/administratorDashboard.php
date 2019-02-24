<?php require_once "authenticateUser.php"; ?>

<?php include('./header/administratorDashboardHeader.php'); ?>

<div id="contentId">

  <header>
    <h1>Administrator Dashboard<?php echo htmlspecialchars($_SESSION["user_name"]); ?></h1>
  </header>

  <main>
  
    <a href="resetPassword.php"><button>Reset Password</button></a>
    <a href="logout.php"><button>Logout</button></a>

  </main>

</div>

<?php include('./footer/administratorDashboardHeader.php'); ?>