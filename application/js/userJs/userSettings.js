$(document).ready(init);


function init() {
    $("#updateUserDataButton").click(updateUserData);
}


function updateUserData(event) {
    event.preventDefault();
    let username = $("#updateUsernameField").val();
    let attrs = ["user_name"];
    let values = [username];
    let map = {table_name: "user_accounts", attrs: attrs, values: values, target_id_name: [""], target_id_value: [""]};
    $.put("proxies/putProxy.php", map, updatedUserDataSuccessfully).fail(function(e) {document.write(e.responseText);});
}


function updatedUserDataSuccessfully(data) {
    document.write(data);
}
