
$(document).ready(init);


function init() {
    $("#user_notifyByPhone").change(togglePhoneRegion);
}//end function


function togglePhoneRegion(event) {
    if (this.checked) {
        $("#user_phone").attr("required", "true");
        $("#user_phoneCarrier").attr("required", "true");
        $("#phoneRegion").show();
        $("#screenreaderPhoneRegionMessage").show();
        setTimeout(function() {$("#screenreaderPhoneRegionMessage").hide();}, 3000);
    } else {
        $("#user_phone").removeAttr("required");
        $("#user_phoneCarrier").removeAttr("required");
        $("#phoneRegion").hide();
        $("#user_phone").val("");
        $("#user_phoneCarrier").val("");
    }//end else
}//end function

