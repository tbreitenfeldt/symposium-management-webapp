<?php ?>

<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

    <script src="js/conferenceAPIJs/databaseFunctions.js"></script>
    <script src="js/userJs/mainSchedule.js"></script>
    <script src="js/userJs/userSchedule.js"></script>

    <div id="innerContent">
        <div id="conference-table">
            <header id="conferenceNameHeader">Conference Schedule</header>
                    <div id="MainConference">
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
                </div>

        <div id="schedule-table" aria-hidden="true">
            <header id="h1" aria-hidden="true">My Schedule</header>
                <div id="UserConference" aria-hidden="true">
                    <table id="UsersCon" aria-hidden="true">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time Start</th>
                                <th>Time End</th>
                            </tr>
                        </thead>
                        <tbody id="userConInfo">
                        </tbody>
                    </table>
                </div>
        </div>
    </div>

</html>