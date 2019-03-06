/**
 * Controls The interface for creating a new conference 
*/

var badFieldColor = "pink";
var goodFieldColor = "white";

$(document).ready(init);


function init() {
    initializeCreateConferenceForm();

    let queryParameters = getQueryParameters();
    populateFields(queryParameters);
}//end function


function initializeCreateConferenceForm(formID, conferenceManagementFunction) {
    let form = createForm(formID);
    let controls = "";
    let className = "createConferenceControl";

    $("#headingRegion").html("<h2>Conference Creator</h2>");
    $("#createConferenceFormRegion").html(form);

    controls += "<fieldset><legend>Conference Creation Form</legend>";

    controls += createTextbox("Conference Name", "inputConferenceName", className, "");
    controls += createTextarea("Conference Description", "inputConferenceDescription", className, "");
    controls += createTextbox("Start Date", "inputConferenceStartDate", className, "");
    controls += createTextbox("End Date", "inputConferenceEndDate", className, "");
    controls += createTextbox("Venue Name", "inputConferenceVenue", className, "");
    controls += createTextbox("Street Address", "inputConferenceAddress", className, "");
    controls += createTextbox("City", "inputConferenceCity", className, "");
    controls += createListOfStates("State", "inputConferenceState", className);
    controls += createListOfCountries("Country", "inputConferenceCountry", className);
    controls += createTextarea("Detailed Description of Fasility", "inputConferenceFasilityDescription", className, "");
    controls += createTextarea("Amenities", "inputConferenceAmenities", className, "");
    controls += createPhoneTextbox("Conference Contact Phone Number", "inputConferencePhoneNumber", className, "");
    controls += createEmailTextbox("Conference Contact Email Address", "inputConferenceEmailAddress", className, "");
    controls += createRadioButtons("Wheelchair Accessible",
            [["inputConferenceWheelChairYes", "Yes"], ["inputConferenceWheelchairNo", "No"]], "wheelchairAccessible", className);
    controls += createButton("Reset", "reset", "inputConferenceResetButton", className);
    controls += createButton("Create Conference", "submit", "inputConferenceSubmitButton", className);

    controls += "</fieldset>";
    $("#" + formID).append(controls);
    $("#inputConferenceResetButton").click(resetForm);
    $("#inputConferenceSubmitButton").click(function(event) {onSubmit(event, conferenceManagementFunction);} );
    
}//end function


function getQueryParameters() {
    let parameters = {};

    parameters["inputConferenceName"] = getUrlParameter("inputConferenceName");
    return parameters;
}//end function


function populateFields(parameters) {
    for (let id in parameters) {
        $("#" + id).val(parameters[id]);
    }//end for loop 
}//end function


function resetForm(event) {
    return confirm("Are you sure you want to reset all of the fields in this form to empty?");
}//end function


function onSubmit(event, functionName) {
    if (verifyData(event)) {
        functionName(event);
        alert("created conference");
        window.location = "changeConference.php";
    }//end if
    
    return false;
}//end function


function verifyData(event) {
    let errorMessages = "";
    let isValidForm = true;
    let firstInvalidID = "";

    $(".createConferenceControl").each(function(index, element){
        if ($(element).attr("data-verify") != null) {
            let regex = new RegExp($(element).attr("data-verify"));
            let value = $(element).val();
            let id = $(element).attr("id");

            if (regex.test(value)) {
                setColorForGoodField(element);
            } else {
                if (firstInvalidID == "") {
                    firstInvalidID = id;
                }//end if

                let labelText = $("label[for='" + id + "']").text();
                errorMessages += "Incorrect entry for " + labelText + "<br>";
                setColorForBadField(element);
                isValidForm = false;
            }//end else
        }//end if
    });

    if (errorMessages != "") {
        $("#" + firstInvalidID).focus();
        errorMessages = "<p>" + errorMessages + "</p>";
        $("#errorRegion").html(errorMessages);
    }//end if

    return isValidForm;
}//end function


function setColorForBadField(field) {
    $(field).css("background-color", badFieldColor);
}//end function


function setColorForGoodField(field) {
    $(field).css("background-color", goodFieldColor);
}//end function


function createConference(event) {
}//end function


