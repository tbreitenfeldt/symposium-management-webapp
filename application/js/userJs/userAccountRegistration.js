
$(document).ready(init);


function init() {
    $("#user_notifyByPhone").change(togglePhoneRegion);
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

