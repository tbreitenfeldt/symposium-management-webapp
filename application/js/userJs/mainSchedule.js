
$(document).ready(beginMainSchedule);

function beginMainSchedule()
{
	$("#conferenceRegisterButton").click(registerUserForConference);
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
		$("#conferenceChooser").removeAttr("hidden");
		$("#rightSidebarCollapse").attr("disabled", "true");
		getConferenceData();
	} else if (data.length == 1) {
		$("#rightSidebarCollapse").attr("data-conferenceId", data[0]["conference_id"]);
	} else {
		document.write("There is an error trying to process your request, please contact an administrator.");
	}
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

function registerUserForConference(event)
{
	let conferenceID = $("#conferenceChooserListbox").val();
	let map = {table_name: "user_conference", attrs: ["conference_id"], values: [conferenceID]};

	$("#rightSidebarCollapse").attr("data-conferenceId", conferenceID);
	$("#rightSidebarCollapse").removeAttr("disabled");
	$("#conferenceChooserListbox").empty();
	$("#conferenceChooser").attr("hidden", "true");
	$.post("proxies/postProxy.php", map, function(data) {notifyScreenreader("Registered for Conference");} );
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
	console.log(id);
	valuesToSelect = ["*"];
	tableNames = ["conference"];
	attrs = ["conference_id"];
	values = [id];

	getRecord(valuesToSelect,tableNames,attrs,values,gotMainConference,"json","false")
}

function gotMainConference(data)
{
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
				var name = data[i].event_name;
				
				var message = String("Added to mySchedule: Event - " + name);
        $("<tr><td class=\"eventName\">" + data[i].event_name + "</td><td>" + data[i].event_starttime + "</td><td>" + data[i].event_endtime + "</td><td><button type=\"Button\" " +
						"onclick=\"onAddClick(" + eventID + "," + conferenceID + "," + "\'" + message + "\'" + ")\"> <i class=\"fas fa-plus-circle fa-w-16 fa-3x\"></i> </button></td></tr>").appendTo("#Conference tbody");
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

function getConferenceInformation()
{
	console.log("here");
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
			address: data[0].conference_address,
			city: data[0].conference_city,
			state: data[0].conference_state,
			zip: data[0].conference_zip
		};

		$("#header").html(conference.name + " Information");
		$("#description").html(conference.startDate + " to " + conference.endDate +"<br>" + conference.detail);
		$("#location").html(/*conference.address + " " + */conference.city + " " + conference.state /*+ " " + conference.zip*/);
		$("#contact").html("&nbsp&nbsp&nbsp&nbspEmail: " + conference.email + "<br>&nbsp&nbsp&nbsp&nbspPhone: " + conference.phone + "");
}