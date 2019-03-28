
$(document).ready(init);

var OUTPUT_REGION_ID = "outputRegion";


function init() {
    $("#userLogonForm").submit(submitForm);
}//end function


function submitForm(event) {
    event.preventDefault();
    $("#" + OUTPUT_REGION_ID).html("Please Wait...");
    let form = $("form");

    $.ajax({
        type: form.attr("method"),
        url: form.attr("action"),
        data: form.serializeArray(),
        dataType: form.attr("type"),
        success: outputResult,
        error: outputError
    });
}//end function 


function outputError(error) {
    $("#" + OUTPUT_REGION_ID).html("");
    $("#" + OUTPUT_REGION_ID).html("<p>Error Region: There was an error in trying to process your request, please try again.</p><br>" + "status: " + error.status + " " + error.statusText + "<br>" + error.responseText);
}//end function


function outputResult(data) {
    if ("error" in data) {
        $("#" + OUTPUT_REGION_ID).html("<p>" + data.error + "</p>");
    } else if ("success" in data) {
            window.location = data.success;
    } else {
        $("#" + OUTPUT_REGION_ID).html("<p>There was a problem with your request, please try again.</p>");
    }//end else
}//end function
