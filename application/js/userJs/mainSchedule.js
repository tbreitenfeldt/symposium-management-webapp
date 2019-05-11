
$(document).ready(beginMainSchedule);


//I'm trying to add some more member variables to mainSchedule so that we don't have to hit the database as often.
//The goal of these vars is to keep track of the current conference id the user is working on and keeping the json data object stored here as well.
//The usage of currentConferenceData would look like:
//function getConferenceData(){
//	if(currentConferenceData == null || currentConferenceChosen == null){
//		//do the getRecord call and set these vars
//	} else {
//		//call the postback you'd normally use passing in the stored member vars.
//		//e.g. callbackFunction(currentConferenceData);
//	}
//}
var currentConferenceChosen = null;
var currentConferenceData = null;

function beginMainSchedule()
{
	getUserConference();
}

function getUserConference()
{
	let map = {"table_names": ["user_conference"], "values_to_select": ["conference_id"], "attrs": [""], "values": [""], "genFlag": "flag"};
	$.get("proxies/getProxy.php", map, determineIfUserIsRegistered, "json").fail(function(e) {determineIfUserIsRegistered(null);});
}

function determineIfUserIsRegistered(data)
{
	if (data == null || data.length == 0) {
		$("#conferenceRegisterButton").click(function(event) {registerUserForConference(event, "post");} );
		$("#conferenceChooser").removeAttr("hidden");
		$("#rightSidebarCollapse").attr("disabled", "true");
		$("#registerForDifferentConferenceButton").attr("disabled", "true");
		getConferenceData();
	} else if (data.length == 1) {
		$("#rightSidebarCollapse").attr("data-conferenceId", data[0]["conference_id"]);
		$("#conferenceRegisterButton").click(function(event) {registerUserForConference(event, "put");} );
		
		currentConferenceChosen = data[0]["conference_id"];
		closeMenus();
		$("#innerContent").empty();
		$("#content").load("javascriptLoads/aboutConference.php");
		$("#innerContent").focus();
		getCurrentConferenceData(currentConferenceChosen, showConferenceDetails);
	} else {
		document.write("There is an error trying to process your request, please contact an administrator.");
	}
}

function getCurrentConferenceData(id, callback){
	if(currentConferenceData == null) {
		getRecord(["*"], ["conference"], ["conference_id"], [id], callback, "json", "false");
	} else {
		callback(currentConferenceData);
	}

}

function updateConferenceRegistration(event)
{
	$("#conferenceChooser").removeAttr("hidden");
	$("#rightSidebarCollapse").attr("disabled", "true");
	$("#registerForDifferentConferenceButton").attr("disabled", "true");
	getConferenceData();
}

function getConferenceData()
{
	getRecord(["conference_id", "conference_name"], ["conference"], [], [], populateConferenceListbox, "json");
}

function populateConferenceListbox(data)
{
	if (data != null && data.length != 0) {
		for (let conference of data) {
			let option = "<option value=\"" + conference["conference_id"] + "\">" + conference["conference_name"] + "</option>";
			$("#conferenceChooserListbox").append(option);
		}
	}
}

function registerUserForConference(event, method)
{
	let conferenceID = $("#conferenceChooserListbox").val();
	let map = {};

	$("#rightSidebarCollapse").attr("data-conferenceId", conferenceID);
	$("#rightSidebarCollapse").removeAttr("disabled");
	$("#registerForDifferentConferenceButton").removeAttr("disabled");
	$("#conferenceChooserListbox").empty();
	$("#conferenceChooser").attr("hidden", "true");
	$("#welcome-user").focus();
	$("title").text("User Control Panel");

	if (method == "post") {
		$("#conferenceRegisterButton").off();
		$("#conferenceRegisterButton").click(function(event) {registerUserForConference(event, "put");} );
		map = {table_name: "user_conference", attrs: ["conference_id"], values: [conferenceID]};
		$.post("proxies/postProxy.php", map, function(data) {successfullyRegisteredForConference(data, "Successfully Registered for Conference!");} );
	} else if (method == "put") {
		map = {table_name: "user_conference", attrs: ["conference_id"], values: [conferenceID], target_id_name: [""], target_id_value: [""]};
		$.put("proxies/putProxy.php", map, function(data) {successfullyRegisteredForConference(data, "Successfully Registered for Conference!");} );
	}
}

function successfullyRegisteredForConference(data, message) {
	notifyScreenreader(message);
	setTimeout(function() {document.location.reload();}, 1000);
}
async function loadConference()
{
	if ( !$("#rightSidebarCollapse").attr("data-conferenceId") || $("#rightSidebarCollapse").attr("data-conferenceId") == "") {
		return;
	}

	let conferenceID = $("#rightSidebarCollapse").attr("data-conferenceId");
	await startMainTable(conferenceID);
	await startUserTable(conferenceID,0);
}

function startMainTable(id)
{
	valuesToSelect = ["*"];
	tableNames = ["conference"];
	attrs = ["conference_id"];
	values = [id];

	getRecord(valuesToSelect,tableNames,attrs,values,gotMainConference,"json","false")
}

function gotMainConference(data)
{
	currentConferenceData = data;
    var mainObj = {};
    for(i = 0; i<data.length;i++)
    {
        mainObj[i] = {
          id: data[i].conference_id,
          name: data[i].conference_name,
          dayStart: data[i].conference_startdate,
          dayEnd: data[i].conference_enddate
        }; 
    }

    var header1 = document.getElementById("conferenceNameHeader");
    header1.textContent = mainObj[0].name;


    valuesToSelect = ["*"];
  	tableNames = ["event"];
	  attrs = ["conference_id"];
	  values = [mainObj[0].id];

  	getRecord(valuesToSelect,tableNames,attrs,values,gotEventData,"json","false");
}

function gotEventData(data)
{
    if(data != null)
    {
      var conferenceID = data[0].conference_id;
      for( i = 0; i < data.length; i++)
      {
				var eventID = data[i].event_id;
				var name = String(data[i].event_name);
				var message = String("Added " + name + " to my schedule");
        $("<tr><td class=\"eventName\">" + data[i].event_name + "</td><td>" + data[i].event_starttime + "</td><td>" + data[i].event_endtime + "</td><td><button type=\"Button\" " +
						"onclick=\"onAddClick(" + eventID + "," + conferenceID + "," +  "\'" + message +  "\'"  + ")\" aria-label=\"Add to my Schedule\"> <i class=\"fas fa-plus-circle fa-w-16 fa-3x\"></i> </button></td></tr>").appendTo("#Conference tbody");
      }
    }
}

function onAddClick(eventID, conferenceID, message)
{
  var map = 
    {
      table_name: "user_schedule",
      attrs: ["event_id","conference_id"],
      values: [eventID,conferenceID]
    };

    $.post("proxies/postProxy.php",map,function(data) {successPost(conferenceID);}).fail(function(error) {document.write(error.responseText);});

    notifyScreenreader(message);
}

function successPost(conferenceID)
{
    startUserTable(conferenceID,-1);
}

function getConferenceInfoAndSchedule(){
	let map = {"table_names": ["user_conference","conference", "event"], "values_to_select": ["*"], "attrs": ["conference_id"], "values": [currentConferenceChosen], "genFlag": "flag"};
	$.get("proxies/getProxy.php",map,gotConferenceInfoAndSchedule, "json");
}

function gotConferenceInfoAndSchedule(data){
	showConferenceDetails(data);
	gotEventData(data);
}

function getConferenceInformation()
{
		let map = {"table_names": ["user_conference","conference"], "values_to_select": ["*"], "attrs": [""], "values": [""], "genFlag": "flag"};
		$.get("proxies/getProxy.php",map,showConferenceDetails, "json");
}

function showConferenceDetails(data)
{
	let conference = 
		{
			name: data[0].conference_name,
			startDate: data[0].conference_startdate,
			endDate: data[0].conference_enddate,
			detail: data[0].conference_facilitydesc,
			email: data[0].conference_contactemail,
			phone: data[0].conference_contactphone,
			street: data[0].conference_street,
			city: data[0].conference_city,
			state: data[0].conference_state,
			zip: data[0].conference_postalcode,
			venue: data[0].conference_venue,
			amenities: data[0].conference_amenities,
			wheelchair: data[0].conference_wheelchair

		};

		$("h2").html(conference.name + " Information");
		$("#name").html(conference.name);
		$("#dates").html(conference.startDate + " to " + conference.endDate +"<br>");
		$("#location").html("Venue: " + conference.venue + "</br>" + conference.street + " " + conference.city + " " + conference.state + " " + conference.zip);
		$("#description").html(conference.detail);
		$("#amenities").html(conference.amenities);
		if(conference.wheelchair == 1){
			$("#wheelchair").html("This event is wheelchair accessible");
		} else {
			$("#wheelchair").html("This event is not wheelchair accessible");
		}
		$("#contact").html("Email: " + conference.email + "<br>&nbsp&nbsp&nbsp&nbspPhone: " + conference.phone + "");
}