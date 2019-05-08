<?php ?>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script>
        function onShowHiddenDiv(divId){
            $("#" + divId).toggle("slow");
        }
    </script>
</head>
<!-- Inner Content Div -->
<div id="innerContent">
        <!-- Conference Information -->
    <h2> <center> Conference Information </center></h2>
    <button id="showDetails" onclick="onShowHiddenDiv('details')">Show/Hide Conference Information</button>
    <div id="details" style="display:none">

        <header> Name: </header>
        <p id="name"></p>
        <header> Dates: </header>
        <p id="dates"></p>
        <header> Location: </header>
        <p id="location" ></p>
        <header> Description: </header>
        <p id="description" ></p>
        <header> Amenities: </header>
        <p id="amenities"></p>
        <header> Wheelchair Accessibility: </header>
        <p id="wheelchair"></p>

        <header> Contact Information: </header>
        <p id="contact" ></p>
    </div>

    <!-- Conference Table -->
    <button id="showHiddenTable" onclick="onShowHiddenDiv('conference-table')">Show/Hide Conference Schedule</button>
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
</div>



