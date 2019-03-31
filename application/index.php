<?php require_once "authenticateUser.php"; ?>


<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
    <?php require_once "includes/header.php"; ?>
    <title>Symposium Control Panel</title>

    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/login.css">

    <script src="js/conferenceAPIJs/databaseFunctions.js"></script>
    <script src="js/userJs/mainSchedule.js"></script>
    <script src="js/userJs/userSchedule.js"></script>

    <style type="text/css">
        table {
            border-collapse: collapse;
            }

        table, th, td {
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <div id="divTitle" align="center">
        <h1>Welcome <?php echo htmlspecialchars($_SESSION["user_name"]); ?></h1>
        <ul>
            <li><a href="resetPassword.php">Reset Password</a></li>
            <li><a href="logout.php">Logout</a></li>
        </ul>

        <h3 id="databaseNameHeader"></h3>
    </div>
    
    <header id="h1"></header>
    <div id="MainConference">
        <table id="Conference">

        </table>
    </div>

    <header id="h2">My Schedule</header>
    <div id="UserConference">
        <table id="UsersCon">
        </table>
    </div>

    <?php require_once "includes/footer.php"; ?>
</body>
</html>