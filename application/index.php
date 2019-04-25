<?php require "./webLayout/header/userMenuHeader.php"; ?>

        <!-- content  -->
        <div id="content">
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

                <div id="schedule-table" aria-hidden="false">
                    <header id="h1" aria-hidden="false">My Schedule</header>
                    <div id="UserConference" aria-hidden="false">
                        <table id="UsersCon" aria-hidden="false">
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
        </div>
        <!-- END content  -->

<?php require "./webLayout/footer/userMenuFooter.php"; ?>