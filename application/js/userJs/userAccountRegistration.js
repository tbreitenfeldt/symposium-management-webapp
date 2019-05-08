
function togglePhoneRegion(event) {
    if (event.target.checked) {
        $("#user_phone").attr("required", "true");
        $("#user_phoneCarrier").attr("required", "true");
        $("#phoneRegion").show();
        $("#screenreaderUINotification").text("Phone Information Expanded Below");
        setTimeout(function() {$("#screenreaderUINotification").val("");}, 3000);
    } else {
        $("#user_phone").removeAttr("required");
        $("#user_phoneCarrier").removeAttr("required");
        $("#phoneRegion").hide();
        $("#user_phone").val("");
        $("#user_phoneCarrier").val("");
        $("#screenreaderUINotification").text("Phone Information Collapsed");
        setTimeout(function() {$("#screenreaderUINotification").val("");}, 3000);
    }//end else
}//end function

