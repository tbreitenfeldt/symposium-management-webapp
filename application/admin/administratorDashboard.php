<?php require_once "authenticateUser.php"; ?>


<!doctype html>
<html lang="en">

<head>
<title>Administrative Dashboard</title>
<?php require_once "./header/loginHeader.php"; ?>
</head>

<body>
<div id="contentId">
  <header>
    <h1>Administrator Dashboard</h1>
    <p>Welcome <?php echo htmlspecialchars($_SESSION["admin_name"]); ?></p>
  </header>

  <main>
    <a href="resetPassword.php"><button>Reset Password</button></a>
    <a href="logout.php"><button>Logout</button></a>
  </main>

<?php require_once "./footer/indexFooter.php"; ?>
</div>

</body>
</html>
