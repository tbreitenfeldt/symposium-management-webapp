//Enter in a date in the format "YYYY-MM-DD" and get back a javascript Date object.
//Use functions with the Date object such as date.toDateString() or date.getMonth().
function parseDate(dateString){
    dateSplit = dateString.split("-");
    date = new Date(dateSplit[0], dateSplit[1]-1, dateSplit[2]);
    return date.toDateString();
}

//Takes in a string in the format HH:MM:ss
//
function parseTime(timeString){
    splitTime = timeString.split(":");
    date = new Date(1970, 11, 11, splitTime[0], splitTime[1], splitTime[2]);
    hr = date.getHours();
    ampm = "am";
    if(hr > 12){
        hr -= 12;
        ampm = "pm";
    } else if (hr == 12){
        ampm = "pm";
    }
    return addZero(hr) + ":" + addZero(date.getMinutes()) + " " + ampm;
}

//helper method for parseTime
function addZero(i){
    if(i<10){
        i = "0" + i;
    }
    return i;
}

//If you want this to show/hide an element that is hidden by default, make sure that element has 
//    the following in it's tag:
//    <div id='myId' style="display:none"></div>
//this would be a hidden div with an id of 'myId', so when you call onShowHiddenElement, your call 
// would look like the following:
//    <button id="showHiddenDiv" onclick="onShowHiddenElement('myId')">show my hidden div</button>
function onShowHiddenElement(elementId){
    $("#" + elementId).toggle();
}

function onShowHiddenElementWithAria(elementId, ariaMsg){
    onShowHiddenElement(elementId);
    css = $("#"+elementId).css("display");
    fullmsg = ariaMsg;
    console.log(css);
    if(css == "none"){
        fullmsg = "Collapsed " + ariaMsg + " .";
    } else {
        fullmsg = "Expanded " + ariaMsg + " below.";
    }
    console.log(fullmsg);
    notifyScreenreader(fullmsg);
}


/*
    For whatever reason, jquery does not like it when referencing a table row by ID using a # in front of it. I had to make a version of onShowHiddenElement that 
    does not use the '#' in it's jQuery selector just for our dynamic table creation.
*/
function onShowHiddenRow(elementId){
    $(elementId).toggle();
}

function onShowHiddenRowWithAria(elementId, ariaMsg){
    onShowHiddenRow(elementId);
    css = $(elementId).css("display");
    fullmsg = ariaMsg;
    console.log(css);
    if(css == "none"){
        fullmsg = "Collapsed " + ariaMsg + " .";
    } else {
        fullmsg = "Expanded " + ariaMsg + " below.";
    }
    console.log(fullmsg);
    notifyScreenreader(fullmsg);
}

function notifyScreenreader(message) {
    if ($("#screenreaderUINotification").length) {
        $("#screenreaderUINotification").text(message);
        setTimeout(function() {$("#screenreaderUINotification").text("");}, 3000);
    } else {
    alert("missing div region with ID of screenreaderUINotification, either remove this function  call, or add a div with that ID.");
    }
}