<?php ?>
<head>
    <script>
        function onShowHiddenDiv(divId){
            $("#" + divId).toggle("slow");
        }
    </script>
</head>
    <div id="innerContent">
        <button id="showConferenceSchedule" onclick="onShowHiddenElement('conference-table')">Show/Hide Conference Schedule</button>
        <div id="conference-table" style="display:none">
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

        <button id="showMySchedule" onclick="onShowHiddenElement('schedule-table')">Show/Hide My Schedule</button>
        <div id="schedule-table" style="display:none">
            <header id="h1" >My Schedule</header>
                <div id="UserConference">
                    <table id="UsersCon" >
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