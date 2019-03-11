/**
 * This file manages the single page application for creating and modifying a conference 
*/

$(document).ready(init);


function init() {
    initializeConferenceForm();
    initializeEventForm();
    $("#conferenceFormRegion").hide();
    $("#eventFormRegion").hide();
    setupAjaxForConferenceNames();
}//end function


function initializeConferenceForm() {
    let formID = "conferenceForm";
    let form = createForm(formID);
    let controls = "";
    let className = "conferenceControls";

    $("#conferenceFormRegion").html(form);

    controls += "<legend>Conference Form</legend>";

    controls += createTextbox("Conference Name", "inputConferenceName", className, "conference_name", "");
    controls += createTextarea("Conference Description", "inputConferenceDescription", className, "conference_desc", "");
    controls += createTextbox("Start Date", "inputConferenceStartDate", className, "conference_startdate", "");
    controls += createTextbox("End Date", "inputConferenceEndDate", className, "conference_enddate", "");
    controls += createTextbox("Venue Name", "inputConferenceVenue", className, "conference_venue", "");
    controls += createTextbox("Street Address", "inputConferenceAddress", className, "conference_street", "");
    controls += createTextbox("Zip Code", "inputConferenceZipCode", className, "conference_postalcode", "");
    controls += createTextbox("City", "inputConferenceCity", className, "conference_city", "");
    controls += createListOfStates("State", "inputConferenceState", className, "conference_state");
    controls += createListOfCountries("Country", "inputConferenceCountry", className, "conference_country");
    controls += createTextarea("Detailed Description of Fasility", "inputConferenceFasilityDescription", className, "conference_facilitydesc", "");
    controls += createTextarea("Amenities", "inputConferenceAmenities", className, "conference_amenities", "");
    controls += createPhoneTextbox("Conference Contact Phone Number", "inputConferencePhoneNumber", className, "conference_contactphone", "");
    controls += createEmailTextbox("Conference Contact Email Address", "inputConferenceEmailAddress", className, "conference_contactemail", "");
    controls += createRadioButtons("Wheelchair Accessible",
            [["inputEventWheelChairYes", "Yes", "1"], ["inputEventWheelchairNo", "No", "0"]], "conferenceWheelchairAccessible", className, "conference_wheelchair");
    controls += createButton("Reset", "reset", "inputConferenceResetButton", "inputConferenceResetButton");
    controls += createButton("Save Conference", "submit", "inputConferenceSubmitButton", "inputConferenceSubmitButton");

    controls = "<fieldset>" + controls + "</fieldset>";
    $("#" + formID).html(controls);
    $("#inputConferenceResetButton").click(resetForm);
}//end function 


function initializeEventForm() {
    let formID = "eventForm";
    let form = createForm(formID);
    let controls = "";
    let className = "eventControl";

    $("#eventFormRegion").html(form);

    controls += "<legend>Event Form</legend>";

    controls += createTextbox("Event Name", "inputEventName", className, "event_name", "");
    controls += createTextarea("Start Time", "inputEventStartTime", className, "event_starttime", "");
    controls += createTextbox("End Time", "inputEventEndTime", className, "event_endtime", "");
    controls += createTextbox("Room", "inputEventRoom", className, "event_room", "");
    controls += createTextbox("Floor Number", "inputEventFloor", className, "event_floor", "");
    controls += createTextbox("Building Name", "inputEventBuilding", className, "event_building", "");
    controls += createTextbox("Speakers", "inputEventSpeakers", className, "event_speakers", "");
    controls += createTextbox("Event Date", "inputEventDate", className, "event_date", "");
    controls += createTextarea("Event Description", "inputEventDescription", className, "event_desc", "");
    controls += createRadioButtons("Wheelchair Accessible",
            [["inputConferenceWheelChairYes", "Yes"], ["inputConferenceWheelchairNo", "No"]], "eventWheelchairAccessible", className, "event_wheelchair");
    controls += createButton("Reset", "reset", "inputEventResetButton", "inputEventResetButton");
    controls += createButton("Save Event", "submit", "inputConferenceSubmitButton", "inputConferenceSubmitButton");

    controls = "<fieldset>" + controls + "</fieldset>";
    $("#" + formID).html(controls);
    $("#inputEventResetButton").click(resetForm);
}//end function


function resetForm(event) {
    return confirm("Are you sure you want to reset all of the fields in this form?");
}//end function


function setupAjaxForConferenceNames() {
    valuesToSelect = ["*"];
    tableNames = ["conference"];
    attrs = [];
    values = [];
    getRecord(valuesToSelect, tableNames, attrs, values, initializeConferenceChooser, "json", "false");
}//end function


function initializeConferenceChooser(data) {
    clearAllRegions();

    let options = [];
    let htmlConferenceList  = "";
    let editButton = "";
    let createConferenceButton = createButton("Create Conference", "button", "createConferenceButton", "applicationButtons");
    let formID = "chooseConference";

    $("#headingRegion1").html("<h2>Choose a Conference</h2>");
    $("#mainContentRegion1").html(createForm(formID));

    if (data != null) {
        for (let conference of data) {
            options.push(conference["conference_name"]);
        }//end for loop
    }//end if

    htmlConferenceList = createListBox("Conference", options, "conferenceList", "conferenceControl");
    editButton = createButton("Edit Conference", "button", "chooseConferenceSubmitButton", "applicationButtons");

    $("#" + formID).html("<fieldset>" + htmlConferenceList + editButton + createConferenceButton + "</fieldset>");
    $("#chooseConferenceSubmitButton").click(getSelectedConference);
    $("#createConferenceButton").click(setupConferenceFormForInserting);
}//end function


function getSelectedConference(event) {
    let conferenceName = $("#conferenceList").val();
    setupAjaxForConferenceInformation(conferenceName);
}//end function


function setupAjaxForConferenceInformation(conferenceName) {
    getRecord(["*"], ["conference"], ["conference_name"], [conferenceName], getConferenceEditor, "json", "true");
}//end function 


function getConferenceEditor(data) {
    if (data != null) {
        clearAllRegions();

        let cancelButton = createButton("Cancel", "button", "cancelButton", "applicationButtons");
        let editConferenceButton = createButton("Edit Conference Information", "button", "editConferenceInfoButton", "applicationButtons");
        let createEventButton = createButton("Create Event", "button", "createEventButton", "applicationButtons");
        let conferenceID = data[0]["conference_id"];
        let conferenceName = data[0]["conference_name"];
        let conferenceInformation = "<p>Venue:<br>" + data[0]["conference_venue"] + "</p>" +
                "<p>Street Address:<br>" + data[0]["conference_street"] + " " + data[0]["conference_city"] + ", " +
                data[0]["conference_state"] + " " + data[0]["conference_postalcode"] + ", " + data[0]["conference_country"] + "</p>" +
                "<p>dates:<br>starts " + data[0]["conference_startdate"] + " and ends " + data[0]["conference_enddate"] + "</p>" +
                "<p>Amenities:<br>" + data[0]["conference_amenities"] + "</p>" +
                "<p>Fasility Description:<br>" + data[0]["conference_facilitydesc"] + "</p>" +
                "<p>Conference Description:<br>" + data[0]["conference_desc"] + "</p>" +
                "<p>Wheelchair Access:<br>" + Boolean(data[0]["conference_wheelchair"]) + "</p>" +
                "<p>Contact Email:<br>" + data[0]["conference_contactemail"] + "</p>" +
                "<p>Contact Phone Number:<br>" + data[0]["conference_contactphone"] + "</p>";

        insertHeading2(conferenceName, "headingRegion1");
        $("#controlsRegion1").html("<p>" + cancelButton + "<br>" + editConferenceButton + "</p>");
        $("#mainContentRegion1").html("<p>" + conferenceInformation + "</p>");

        insertHeading3("Manage Events", "headingRegion2");
        $("#controlsRegion2").html("<p>" + createEventButton + "</p>");

        $("#cancelButton").click(returnToConferenceChooser);
        $("#editConferenceInfoButton").click(function(event) {setupConferenceFormForUpdating(event, data);});
        $("#createEventButton").click(setupEventFormForInserting);
        setupAjaxForEventInformation(conferenceID);
    }//end if
}//end function 


function returnToConferenceChooser(event) {
    let isCancel = confirm("Are you sure you would like to stop editing this conference?");
    
    if(isCancel) {
        setupAjaxForConferenceNames();
    }//end if
}//end function


function setupAjaxForEventInformation(conferenceID) {
    valuesToSelect = ["event_name as `Event Name`", "event_starttime as `Start Time`", "event_endtime as `End Time`", "event_room as `Room`", "event_floor as `Floor`",
            "event_building as `Building Name`", "event_speakers as `Speakers`", "event_desc as `Event Description`", "event_wheelchair as `Wheelchair Accessible`",
            "event_date as `Date`"];
    tableNames = ["event"];
    attrs = ["conference_id"];
    values = [conferenceID];
    getRecord(valuesToSelect, tableNames, attrs, values, createEventEditor, "json", "false");
}//end function


function createEventEditor(data) {
    if (data != null) {
        let table = "";
        let row = ""

        //create table headings
        for (let colum in data[0]) {
            row += "<th>" + colum + "</th>";
        }//end for loop

            row += "<th>Edit/Delete events</th>";
            row = "<tr>" + row + "</tr>";
            table += row;

        $(".editEventButtons").off();
        $(".deleteEventButtons").off();

        for (let event of data) {
            let editEventButton = '<input type="button" value="Edit" data-id="' + event["event_id"] + '" class="editEventButtons" />';
            let deleteEventButton = '<input type="button" value="Delete" data-id="' + event["event_id"] + '" class="deleteEventButtons" />';
            row = "";

            for (let colum in event) {
                let value = event[colum];
                
                if (colum == "Wheelchair Accessible") {
                    value = Boolean(value);
                }//end if
                row += "<td>" + value + "</td>";
            }//end for loop

            row += "<td>" + editEventButton + "<br>" + deleteEventButton + "</td>";
            row = "<tr>" + row + "</tr>";
            table += row;
        }//end for loop

        table = "<table>" + table + "</table>";
        $("#mainContentRegion2").html(table);
        $(".editEventButtons").click(setupEventFormForUpdating);
        $(".deleteEventButtons").click(deleteConferenceEvent);
        //under the table add a "add new event" button which will call setupEventFormForInserting
        //generate form fields for editing an event, and a "Save Event" button 
        //add html to the page, and hide the fields use for editing and creating an event
    }//end if
}//end function 


function setupConferenceFormForInserting(event) {
    clearAllRegions();
    insertHeading2("Create Conference", "headingRegion1");
    $("#conferenceFormRegion").show();
    $("#inputConferenceSubmitButton").off();
    $("#inputConferenceSubmitButton").click(insertConferenceInformation);
}//end function


function setupConferenceFormForUpdating(event, data) {
    clearAllRegions();
    insertHeading2("Update Conference", "headingRegion1");

    $(".conferenceControls").each(function(index, element) {
        let dataName = $(element).attr("data-name");
        let value = data[0][dataName];
        $(element).val(value);
    });

    $("#conferenceFormRegion").show();
    $("#inputConferenceSubmitButton").off();
    $("#inputConferenceSubmitButton").click(updateConferenceInformation);
}//end function


function insertConferenceInformation() {
    event.preventDefault ();
    let attrs = [];
    let values = [];
    let value = "";
    let dataName = "";

    $(".conferenceControls").each(function(index, element) {
        if ($(element).attr("type") == "radio") {
            if (element.checked == true) {
                value = "'" + $(element).val() + "'";
                dataName = $(element).attr("data-name")
                values.push(value);
                attrs.push(dataName);
            }//end if
        } else if ($(element).attr("data-name") != null) {
                value = "'" + String($(element).val()).trim() + "'";
                dataName = $(element).attr("data-name");
                values.push(value);
                attrs.push(dataName);
        }//end if
    });
    $("#mainContentRegion1").html("values: " + values.length + "<br>" + JSON.stringify(values) + "<br>attrs: " + attrs.length + "<br>" + JSON.stringify(attrs) + "<br>");
    //postRecord("conference", attrs, values, createdConferenceSuccessfully, "true");
    let map = {table_name: "conference", attrs: attrs, values: values};
    $.post("proxies/insertConferenceProxy.php", map, createdConferenceSuccessfully);
}//end function


function createdConferenceSuccessfully(data) {
    let conferenceName = $("#inputConferenceName").val();
    alert("Created Conference");
    setupAjaxForConferenceInformation(conferenceName);
}//end function 


function updateConferenceInformation(conferenceID) {
    //make ajax call to update conference table with record with given conferenceID with given form field data
}//end function


function setupEventFormForUpdating(event) {
    let id = $(event.target).attr("data-id");
    //show event form fields and populate fields with data for that event 
    //remove current event handler for the "save event" button, and add new handler to point at updateConferenceEvent
}//end function


function setupEventFormForInserting(event) {
    //show the event form fields and make sure the fields are empty
    //clear the event handlers for the "save event" button and point the new event handler at insertConferenceEvent 
}//end function


function updateConferenceEvent(eventID) {
    //update event with form field data from the event form
    //update html table 
}//end function


function insertConferenceEvent(event) {
    //make ajax call to insert event form field data into the database 
    //add new data to the html table 
}//end function


function deleteConferenceEvent(event) {
    let id = $(event.target).attr("data-id");
    // delete event based on eventID
    //update html table
}//end function 


function clearAllRegions() {
    $(".applicationButtons").off();
    $(".editEventButtons").off();
    $(".deleteEventButtons").off();
    $(".contentRegions").html("");
    $("#conferenceFormRegion").hide();
    $("#eventFormRegion").hide();
}//end function
