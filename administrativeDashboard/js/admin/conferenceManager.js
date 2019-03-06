/**
 * This file manages the single page application for creating and modifying a conference 
*/

$(document).ready(init);


function init() {
    setupAjaxForConferenceNames();
}//end function


function setupAjaxForConferenceNames() {
    valuesToSelect = ["*"];
    tableNames = ["conference"];
    attrs = [];
    values = [];
    getRecord(valuesToSelect, tableNames, attrs, values, initializeConferenceChooser, "json", "false");
}//end function


function initializeConferenceChooser(data) {
    let options = [];
    let htmlConferenceList  = "";
    let editButton = "";
    let createConferenceButton = createButton("Create Conference", "button", "createConferenceButton", "conferenceControl");
    let formID = "chooseConference";

    $("#headingRegion1").html("<h2>Choose a Conference</h2>");
    //$("#controlsRegion1").html("<p>" + + "</p>");
    //add onclick event to create conference button

    $("#mainContentRegion1").html(createForm(formID));

    if (data != null) {
        for (let conference of data) {
            options.push(conference["conference_name"]);
        }//end for loop
    }//end if

    htmlConferenceList = createListBox("Conference", options, "conferenceList", "conferenceControl");
    editButton = createButton("Edit Conference", "button", "chooseConferenceSubmitButton", "conferenceControl");

    $("#" + formID).html("<fieldset>" + htmlConferenceList + editButton + createConferenceButton + "</fieldset>");
    $("#chooseConferenceSubmitButton").click(setupAjaxForConferenceInformation);
}//end function


function setupAjaxForConferenceInformation(event) {
    let conferenceName = $("#conferenceList").val();
    getRecord(["*"], ["conference"], ["conference_name"], [conferenceName], getConferenceEditor, "json", "true");
}//end function 


function getConferenceEditor(data) {
    if (data != null) {
        let editConferenceButton = createButton("Edit Conference Information", "button", "editConferenceInfoButton", "conferenceControl");
        let conferenceID = data[0]["conference_id"];
        let conferenceName = data[0]["conference_name"];
        let conferenceInformation = "<p>Venue:<br>" + data[0]["conference_venue"] + "</p>" +
                "<p>Street Address:<br>" + data[0]["conference_street"] + " " + data[0]["conference_city"] + ", " +
                data[0]["conference_postalcode"] + ", " + data[0]["conference_country"] + "</p>" +
                "<p>dates:<br>starts " + data[0]["conference_startdate"] + " and ends " + data[0]["conference_enddate"] + "</p>" +
                "<p>Amenities:<br>" + data[0]["conference_amenities"] + "</p>" +
                "<p>Fasility Description:<br>" + data[0]["conference_facilitydesc"] + "</p>" +
                "<p>Conference Description:<br>" + data[0]["conference_desc"] + "</p>";
                

        insertHeading2(conferenceName, "headingRegion1");
        $("#controlsRegion1").html("<p>" + editConferenceButton + "</p>");
        $("#mainContentRegion1").html("<p>" + conferenceInformation + "</p>");


        insertHeading3("Manage Events", "headingRegion2");
        //add event to "edit conference information" button to call setupConferenceFormForUpdating(conferenceName)
        setupAjaxForEventInformation(conferenceID);
    }//end if
}//end function 


function setupAjaxForEventInformation(conferenceID) {
    //$(".editEventButtons").off("click", editPressed);
    //$(".deleteEventButtons").off("click", delPressed);

    valuesToSelect = ["*"];
    tableNames = ["event"];
    attrs = ["conference_id"];
    values = [conferenceID];
    getRecord(valuesToSelect, tableNames, attrs, values, createEventEditor, "json", "true");
}//end function


function createEventEditor(data) {
    if (data != null) {
        let table = "";
        let row = ""
        let eventColumNames = [["Event Name", "event_name"], ["Start Time", "event_starttime"], ["End Time", "event_endtime"], ["Room", "event_room"],
                ["Floor", "event_floor"], ["Building Name", "event_building"], ["Speakers", "event_speakers"], ["Event Description", "event_desc"],
                ["Wheelchair Accessible", "event_wheelchair"], ["Date", "event_date"]];

        //create table headings
        for (let colum of eventColumNames) {
            row += "<th>" + colum[0] + "</th>";
        }//end for loop

            row += "<th>Edit/Delete events</th>";
            row = "<tr>" + row + "</tr>";
            table += row;

        for (let event of data) {
            let editEventButton = '<input type="button" value="Edit" data-id="' + event["event_id"] + '" class="editEventButtons" />';
            let deleteEventButton = '<input type="button" value="Delete" data-id="' + event["event_id"] + '" class="deleteEventButtons" />';
            row = "";

            for (let colum of eventColumNames) {
                let id = colum[1];
                let value = event[id];
                
                if (id == "event_wheelchair") {
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


function setupConferenceFormForUpdating(conferenceID) {
    //show create conference form fields, and make ajax call to populate fields
    //clear any event handlers for the "save conference information" button and point event handler at updateConferenceInformation
}//end function


function setupConferenceFormForInserting() {
    //show create conference form fields, and make sure that fields are empty
    //clear any event handlers for the "save conference information" button and point event handler at insertConferenceInformation
}//end function 


function updateConferenceInformation(conferenceID) {
    //make ajax call to update conference table with record with given conferenceID with given form field data
}//end function


function insertConferenceInformation() {
    //make ajax call to insert  into conference table with with given form field data 
}//end function


function setupEventFormForUpdating(event) {
    let id = $(event.target).attr("data-id");
    //show event form fields and populate fields with data for that event 
    //remove current event handler for the "save event" button, and add new handler to point at updateConferenceEvent
}//end function


function setupEventFormForInserting() {
    //show the event form fields and make sure the fields are empty
    //clear the event handlers for the "save event" button and point the new event handler at insertConferenceEvent 
}//end function


function updateConferenceEvent(eventID) {
    //update event with form field data from the event form
    //update html table 
}//end function


function insertConferenceEvent() {
    //make ajax call to insert event form field data into the database 
    //add new data to the html table 
}//end function


function deleteConferenceEvent(event) {
    let id = $(event.target).attr("data-id");
    // delete event based on eventID
    //update html table
}//end function 