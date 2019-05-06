
function populateCurrentUserSettings() {
    $(".userSettings").each(function(index, element) {
        if ($(element).attr("data-value") != null) {
            let value = $(element).attr("data-value");

            if ($(element).is(":checkbox")) {
                $(element).attr("checked", Boolean(value));

                if ($(element).attr("id") == "user_notifyByPhone" && $(element).is(":checked")) {
                    $("#screenreaderPhoneRegionMessage").hide();  //hides the screenreader text region so that the region does not alert the screenreader on page load
                    $("#phoneRegion").show();
                    $("#user_phone").attr("required", "true");
                    $("#user_phoneCarrier").attr("required", "true");
                }
            } else {
                $(element).val(value);
            }
        }
    });
}


function collectUserSettings(attrs, values) {
    $(".userSettings").each(function(index, element) {
        let name = $(element).attr("name");
        let value = null;

        if ($(element).is(":checkbox")) {
            //value = $(element).attr("checked");
            value = $(element).is(":checked");
        } else {
            value = $(element).val();
        }

        attrs.push(name);
        values.push(value);
    });
}


function updateUserData(event) {
    event.preventDefault();

    let attrs = [];
    let values = [];
    let map = {};

    collectUserSettings(attrs, values);
    map = {table_name: "user_accounts", attrs: attrs, values: values, target_id_name: [""], target_id_value: [""]};

    $.put("proxies/putProxy.php", map, updatedUserDataSuccessfully);
}


function updatedUserDataSuccessfully(data) {
    document.location.reload();
}
