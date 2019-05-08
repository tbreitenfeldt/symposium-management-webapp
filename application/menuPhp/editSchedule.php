<?php ?>
    <div id="innerContent">
        <button id="showConferenceSchedule" onclick="onShowHiddenElementWithAria('conference-table', 'Conference Schedule')">Show/Hide Conference Schedule</button>
        <div id="conference-table" style="display:none">
            <h2 id="conferenceNameHeader">Conference Schedule</h2>
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

        <button id="showMySchedule" onclick="onShowHiddenElement('schedule-table', 'My Schedule')">Show/Hide My Schedule</button>
        <div id="schedule-table" style="display:none">
            <h2>My Schedule</h2>
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