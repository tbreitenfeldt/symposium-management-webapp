
$(document).ready(init);


function init() {
    $("#user_notifyByPhone").change(togglePhoneRegion);
    getConferenceData();
}//end function



function togglePhoneRegion(event) {
    if (this.checked) {
        $("#phoneRegion").show();
        $("#screenreaderPhoneRegionMessage").show();
        setTimeout(function() {$("#screenreaderPhoneRegionMessage").hide();}, 3000);
    } else {
        $("#phoneRegion").hide();
    }//end else
}//end function


function getConferenceData() {
    getRecord(["conference_id", "conference_name"], ["conference"], [], [], populateConferenceListbox, "json");
}//end function


function populateConferenceListbox(data) {
    if (data != null && data != []) {
        for (let conference of data) {
            let option = "<option value=\"" + conference["conference_id"] + "\">" + conference["conference_name"] + "</option>";
            $("#user_conference").append(option);
        }//end for loop
    }//end if
}//end function

