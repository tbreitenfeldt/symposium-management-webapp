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
    </div>
    

    <div id="conferenceChooser" style="display: none;">
        <select id="conferenceChooserListbox"></select>
        <input type="button" value="Register" id="conferenceRegisterButton" />
    </div>

	<div id="conferenceInformation" style="display: none;">
    <div id="MainConference">
        <div id="conferenceNameHeader"></div>
        <table id="Conference">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Start</th>
                    <th>Time End</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>

    <div id="UserConference">
        <h2>My Schedule</h2>
        <table id="UsersCon">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Start</th>
                    <th>Time End</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    </div>

    <?php require_once "includes/footer.php"; ?>
</body>
</html>