
$(document).ready(init);


function init() {
    $("#userLogonForm").submit(submitForm);
}//end function


function submitForm(event) {
    event.preventDefault();
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
    $("#outputRegion").html("");
    $("#outputRegion").html("<p>Error Region: There was an error in trying to process your request, please try again.</p><br>" + "status: " + error.status + " " + error.statusText + "<br>" + error.responseText);
}//end function


function outputResult(data) {
    $("#outputRegion").html("");

    if ("error" in data) {
        $("#outputRegion").html("<p>" + data.error + "</p>");
    } else if ("success" in data) {
        window.location = data.success;
    } else {
        $("#outputRegion").html("<p>There was a problem with your request, please try again.</p>");
    }//end else
}//end function
