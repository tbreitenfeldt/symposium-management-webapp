/**
 * This file manages the single page application for creating and modifying a conference 
*/

$(document).ready(init);


function init() {
    //set path to main directory for accessing conference API
    changePathToMainDirectory("../");

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
    controls += createButton("Cancel", "button", "inputConferenceCancelButton", "inputConferenceCancelButton");

    controls = "<fieldset>" + controls + "</fieldset>";
    $("#" + formID).html(controls);
    $("#inputConferenceResetButton").click(resetForm);
    $("#inputConferenceCancelButton").click(
        function(event) {returnToConferenceChooser(event, "Are you sure you would like to stop editing this conference?");}
    );
}//end function 


function initializeEventForm() {
    let formID = "eventForm";
    let form = createForm(formID);
    let controls = "";
    let className = "eventControls";

    $("#eventFormRegion").html(form);

    controls += "<legend>Event Form</legend>";

    controls += createTextbox("Event Name", "inputEventName", className, "event_name", "");
    controls += createTextbox("Start Time", "inputEventStartTime", className, "event_starttime", "");
    controls += createTextbox("End Time", "inputEventEndTime", className, "event_endtime", "");
    controls += createTextbox("Room", "inputEventRoom", className, "event_room", "");
    controls += createTextbox("Floor Number", "inputEventFloor", className, "event_floor", "");
    controls += createTextbox("Building Name", "inputEventBuilding", className, "event_building", "");
    controls += createTextbox("Speakers", "inputEventSpeakers", className, "event_speakers", "");
    controls += createTextbox("Event Date", "inputEventDate", className, "event_date", "");
    controls += createTextarea("Event Description", "inputEventDescription", className, "event_desc", "");
    controls += createRadioButtons("Wheelchair Accessible",
            [["inputConferenceWheelChairYes", "Yes", "1"], ["inputConferenceWheelchairNo", "No", "0"]], "eventWheelchairAccessible", className, "event_wheelchair");
    controls += createButton("Reset", "reset", "inputEventResetButton", "inputEventResetButton");
    controls += createButton("Save Event", "submit", "inputEventSubmitButton", "inputEventSubmitButton");
    controls += createButton("Cancel", "button", "inputEventCancelButton", "inputEventCancelButton");

    controls = "<fieldset>" + controls + "</fieldset>";
    $("#" + formID).html(controls);
    $("#inputEventResetButton").click(resetForm);
}//end function


function resetForm(event) {
    return confirm("Are you sure you want to reset all of the fields in this form?");
}//end function


function setupAjaxForConferenceNames() {
    let map = {"table_names": ["conference"], "values_to_select": ["*"], "attrs": [""], "values": [""], "genFlag": "flag"};
    $.get("../proxies/getProxy.php", map, initializeConferenceChooser, "json").fail(function(error) {initializeConferenceChooser(null);} );
}//end function


function initializeConferenceChooser(data) {
    clearAllRegions();

    let options = [];
    let htmlConferenceList  = "";
    let editButton = createButton("Edit Conference", "submit", "chooseConferenceSubmitButton", "applicationButtons");
    let deleteButton = createButton("Delete Conference", "button", "deleteConferenceButton", "applicationButtons");
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

    $("#" + formID).html("<fieldset>" + htmlConferenceList + editButton + deleteButton + createConferenceButton + "</fieldset>");
    $("#chooseConferenceSubmitButton").click(getSelectedConference);
    $("#deleteConferenceButton").click(ajaxSetupForDeleteConference);
    $("#createConferenceButton").click(setupConferenceFormForInserting);
}//end function


function getSelectedConference(event) {
    event.preventDefault ();

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
        let wheelchairValue = Boolean(data[0]["conference_wheelchair"]) ? "Yes" : "No";
        let conferenceInformation = "<p>Venue:<br>" + data[0]["conference_venue"] + "</p>" +
                "<p>Street Address:<br>" + data[0]["conference_street"] + " " + data[0]["conference_city"] + ", " +
                data[0]["conference_state"] + " " + data[0]["conference_postalcode"] + ", " + data[0]["conference_country"] + "</p>" +
                "<p>dates:<br>starts " + data[0]["conference_startdate"] + " and ends " + data[0]["conference_enddate"] + "</p>" +
                "<p>Amenities:<br>" + data[0]["conference_amenities"] + "</p>" +
                "<p>Fasility Description:<br>" + data[0]["conference_facilitydesc"] + "</p>" +
                "<p>Conference Description:<br>" + data[0]["conference_desc"] + "</p>" +
                "<p>Wheelchair Access:<br>" + wheelchairValue + "</p>" +
                "<p>Contact Email:<br>" + data[0]["conference_contactemail"] + "</p>" +
                "<p>Contact Phone Number:<br>" + data[0]["conference_contactphone"] + "</p>";

        insertHeading2(conferenceName, "headingRegion1");
        $("#controlsRegion1").html("<p>" + cancelButton + "<br>" + editConferenceButton + "</p>");
        $("#mainContentRegion1").html("<p>" + conferenceInformation + "</p>");

        insertHeading3("Manage Events", "headingRegion2");
        $("#controlsRegion2").html("<p>" + createEventButton + "</p>");

        $("#cancelButton").off();
        $("#editConferenceInfoButton").off();
        $("#createEventButton").off();
        $("#inputEventCancelButton").off();

        $("#cancelButton").click(function(event) {returnToConferenceChooser(event, "Are you sure you would like to stop viewing this conference?");});
        $("#editConferenceInfoButton").click(function(event) {setupConferenceFormForUpdating(event, data);});
        $("#createEventButton").click(function(event) {setupEventFormForInserting(event, conferenceID, conferenceName);} );
        $("#inputEventCancelButton").click(function(event) {returnToSelectedConference(event, conferenceName, "Are you sure you would like to stop editing this event?");});
        setupAjaxForEventInformation(conferenceID, conferenceName);
    }//end if
}//end function 


function returnToConferenceChooser(event, message) {
    let isContinue = confirm(message);

    if(isContinue) {
        setupAjaxForConferenceNames();
    }//end if
}//end function


function returnToSelectedConference(event, conferenceName, message) {
    let isContinue = confirm(message);

    if(isContinue) {
        setupAjaxForConferenceInformation(conferenceName);
    }//end if
}//end function


function setupAjaxForEventInformation(conferenceID, conferenceName) {
    let valuesToSelect = ["event_id", "event_name", "event_starttime", "event_endtime", "event_room", "event_floor", "event_building", "event_speakers", "event_desc",
            "event_wheelchair", "event_date"];
    let tableNames = ["event"];
    let attrs = ["conference_id"];
    let values = [conferenceID];
    let eventEditorFunction = function(data) {createEventEditor(data, conferenceName);}
    getRecord(valuesToSelect, tableNames, attrs, values, eventEditorFunction, "json", "false");
}//end function


function createEventEditor(data, conferenceName) {
    if (data != null) {
        let table = "";
        let row = "";
        let rowHeaders = ["Event Name", "Start Time", "End Time", "Room", "Floor", "Building Name", "Speakers", "Event Description", "Wheelchair Accessible", "Date"];

        //create table headings
        for (let rowName of rowHeaders) {
            row += "<th>" + rowName + "</th>";
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

            for (let column in event) {
                let value = event[column];
                
                if (column == "event_wheelchair") {
                    value = Boolean(value) ? "Yes" : "No";
                }//end if

                if (column != "event_id") {
                    row += "<td>" + value + "</td>";
                }//end if
            }//end for loop

            row += "<td>" + editEventButton + "<br>" + deleteEventButton + "</td>";
            row = "<tr>" + row + "</tr>";
            table += row;
        }//end for loop

        table = "<table>" + table + "</table>";
        $("#mainContentRegion2").html(table);
        $(".editEventButtons").click(function(event) {setupEventFormForUpdating(event, data, conferenceName);} );
        $(".deleteEventButtons").click(deleteConferenceEvent);
    }//end if
}//end function 


function collectFormData(controlsClassName, attrs, values) {
    let dataName = "";
    let value = ""

    $("." + controlsClassName).each(function(index, element) {
        if ($(element).attr("type") == "radio" && $(element).attr("data-name") != null) {
            if (element.checked == true) {
                dataName = $(element).attr("data-name")
                value = "'" + $(element).val() + "'";
                attrs.push(dataName);
                values.push(value);
            }//end if
        } else if ($(element).attr("data-name") != null) {
                dataName = $(element).attr("data-name");
                value = "'" + String($(element).val()).trim() + "'";
                attrs.push(dataName);
                values.push(value);
        }//end if
    });
}//end funtion


function populateFormData(controlsClassName, data) {
    $("." + controlsClassName).each(function(index, element) {
        let dataName = $(element).attr("data-name");
        let value = data[dataName];

        if ($(element).attr("type") == "radio") {
            if ($(element).val() == value) {
                $(element).prop("checked", true).trigger("click");
            }//end if
        } else {
                $(element).val(value);
            }//end else
    });
}//end function


function setupConferenceFormForInserting(event) {
    clearAllRegions();
    insertHeading2("Create Conference", "headingRegion1");
    $("#conferenceFormRegion").show();
    $("#inputConferenceSubmitButton").off();
    $("#inputConferenceSubmitButton").click(insertConference);
}//end function


function setupConferenceFormForUpdating(event, data) {
    let conference = data[0];
    let conferenceID = conference["conference_id"];

    clearAllRegions();
    insertHeading2("Update Conference", "headingRegion1");
    populateFormData("conferenceControls", conference);

    $("#conferenceFormRegion").show();
    $("#inputConferenceSubmitButton").off();
    $("#inputConferenceSubmitButton").click(function(event) {updateConferenceInformation(event, conferenceID);} );
}//end function


function insertConference(event) {
    event.preventDefault ();
    let conferenceName = $("#inputConferenceName").val();
    getRecord(["conference_id"], ["conference"], ["conference_name"], [conferenceName], checkIfConferenceNameExists, "json", "true");
}//end function


function checkIfConferenceNameExists(data) {
    if (data == null) {
        processConferenceInsertion();
    } else {
            alert("Plese choose a different  conference name, conference names must be unique.");
    }//end else 
}//end function


function processConferenceInsertion() {
    let map = {};
    let attrs = [];
    let values = [];

    collectFormData("conferenceControls", attrs, values);
    map = {table_name: "conference", attrs: attrs, values: values};
    $.post("../proxies/postProxy.php", map, createdConferenceSuccessfully);
}//end function


function createdConferenceSuccessfully(data) {
    let conferenceName = $("#inputConferenceName").val();
    alert("Created Conference");
    setupAjaxForConferenceInformation(conferenceName);
}//end function


function updateConferenceInformation(event, conferenceID) {
    event.preventDefault ();

    let map = {};
    let attrs = [];
    let values = [];

    collectFormData("conferenceControls", attrs, values);
    map = {table_name: "conference", attrs: attrs, values: values, target_id_name: "conference_id", target_id_value: conferenceID};
    $.put("../proxies/putProxy.php", map, updatedConferenceSuccessfully);
}//end function


function updatedConferenceSuccessfully(data) {
    let conferenceName = $("#inputConferenceName").val();
    alert("Updated  Conference!");
    setupAjaxForConferenceInformation(conferenceName);
}//end function


function ajaxSetupForDeleteConference(event) {
    let conferenceName = $("#conferenceList").val();

    if (conferenceName != null) {
        let isConfirmDelete = confirm("Are you sure you would like to delete the conference " + conferenceName + " and all of its events?");

        if (isConfirmDelete) {
            getRecord(["conference_id"], ["conference"], ["conference_name"], [conferenceName], deleteConferenceAndEvents, "json", "true");
        }//end if
    }//end if
}//end function


function deleteConferenceAndEvents(data) {
    if (data != null) {
        let conferenceID = data[0]["conference_id"];
        let deletionSuccessful = function(data) {alert("Deletion Successful."); setupAjaxForConferenceNames();}

        delRecord("event", "conference_id", conferenceID,
            function(data) {delRecord("conference", "conference_id", conferenceID, deletionSuccessful);}
        );
    } else {
        alert("There was a problem trying to delete this conference, please contact the database administrator.");
    }//end else 
}//end function


function setupEventFormForInserting(event, conferenceID, conferenceName) {
    clearAllRegions();
    insertHeading2("Create Event", "headingRegion1");
    $("#eventFormRegion").show();
    $("#inputEventSubmitButton").off();
    $("#inputEventSubmitButton").click(function(event) {insertConferenceEvent(event, conferenceID, conferenceName);} );
}//end function


function setupEventFormForUpdating(event, conferenceEvents, conferenceName) {
    let conferenceEventID = $(event.target).attr("data-id");
    let eventToEdit = null;

    for (let conferenceEvent of conferenceEvents) {
        if (conferenceEvent["event_id"] == conferenceEventID) {
            eventToEdit = conferenceEvent;
            break;
        }//end if
    }//end for loop

    if (eventToEdit != null) {
        clearAllRegions();
        insertHeading2("Update Event", "headingRegion1");
        populateFormData("eventControls", eventToEdit);

        $("#eventFormRegion").show();
        $("#inputEventSubmitButton").off();
        $("#inputEventSubmitButton").click(function(event) {updateConferenceEvent(event, conferenceEventID, conferenceName);} );
    } else {
        alert("There was a problem trying to get your event data, please try refreshing your page, or contacting your database administrator.");
    }//end else
}//end function


function insertConferenceEvent(event, conferenceID, conferenceName) {
    event.preventDefault ();
    let eventName = $("#inputEventName").val();

    getRecord(
        ["event_id"], ["event"],
        ["event_name", "conference_id"], [eventName, conferenceID],
        function(data) {checkIfEventNameExistsInConference(data, conferenceID, conferenceName);},
        "json", "true"
    );
}//end function


function checkIfEventNameExistsInConference(data, conferenceID, conferenceName) {
    if (data == null) {
        processEventInsertion(conferenceID, conferenceName);
    } else {
            alert("Plese choose a different  event name, Event names must be unique for each conference.");
    }//end else 
}//end function


function processEventInsertion(conferenceID, conferenceName) {
    let map = {};
    let attrs = [];
    let values = [];

    collectFormData("eventControls", attrs, values);
    attrs.push("conference_id");
    values.push(conferenceID);    
    map = {table_name: "event", attrs: attrs, values: values};

    $.post(
        "../proxies/postProxy.php",
        map,
        function(data) {createdEventSuccessfully(data, conferenceName);}
    );
}//end function


function createdEventSuccessfully(data, conferenceName) {
    alert("Created event");
    setupAjaxForConferenceInformation(conferenceName);
}//end function


function updateConferenceEvent(event, eventID, conferenceName) {
    event.preventDefault ();

    let map = {};
    let attrs = [];
    let values = [];

    collectFormData("eventControls", attrs, values);
    map = {table_name: "event", attrs: attrs, values: values, target_id_name: "event_id", target_id_value: eventID};
    $.put("../proxies/putProxy.php", map, function(data) {updatedEventSuccessfully(data, conferenceName);} );
}//end function


function updatedEventSuccessfully(event, conferenceName) {
    returnToSelectedConference(event, conferenceName, "Updated event");
}//end function


function deleteConferenceEvent(event) {
    let conferenceEventID = $(event.target).attr("data-id");
    let isDelete = confirm("Are you sure you would like to delete this event?");
    
    if (isDelete) {
        delRecord("event", "event_id", conferenceEventID, function(data) {deletedEventSuccessfully(data, event.target);} );
    }//end if
}//end function 


function deletedEventSuccessfully(data, deleteButton) {
    if (data != null) {
        alert("successfully Deleted event.");

        let rowIndex = deleteButton.parentElement.parentElement.rowIndex;
        let table = document.getElementsByTagName("table")[0];
        $(deleteButton.parentElement).children().off();
        table.deleteRow(rowIndex);

        if (table.rows.length == 1) {
            $("#mainContentRegion2").html("");
        }//end if

    } else {
        alert("There was a problem trying to delete this event, please contact the database administrator.");
    }//end else 
}//end function

function clearAllRegions() {
    $(".applicationButtons").off();
    $(".editEventButtons").off();
    $(".deleteEventButtons").off();
    $(".contentRegions").html("");
    $("#conferenceFormRegion").hide();
    $("#eventFormRegion").hide();
}//end function
