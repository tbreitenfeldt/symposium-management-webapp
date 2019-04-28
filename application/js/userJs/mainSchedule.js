
function init ()
{
	$("#conferenceRegisterButton").click(registerUserForConference);
	getUserConference();
}

function getUserConference()
{
	let map = {"table_names": ["user_conference"], "values_to_select": ["conference_id"], "attrs": [""], "values": [""], "genFlag": "flag"};
	$.get("proxies/getProxy.php", map, determineIfUserIsRegistered, "json");
}

function determineIfUserIsRegistered(data)
{
	if (data == null || data.length == 0) {
		$("#conferenceChooser").show();
		getConferenceData();
	} else if (data.length == 1) {
		$("#conferenceInformation").show();
		loadConference(data[0]["conference_id"]);
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
	$("#conferenceChooserListbox").empty();
	$("#conferenceChooser").hide();
	$("#conferenceInformation").show();
	$.post("proxies/postProxy.php", map, function(data) {loadConference(conferenceID);} );
}

async function loadConference(conferenceID)
{
	await startMainTable(conferenceID);
	await startUserTable(conferenceID,"");
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
        $("<tr><td>" + data[i].event_name + "</td><td>" + data[i].event_starttime + "</td><td>" + data[i].event_endtime + "</td><td><button type=\"Button\" " +
            "onclick=\"onAddClick(" + eventID + "," + conferenceID + ")\"> + </button></td></tr>").appendTo("#Conference tbody");
      }
    }
}

function onAddClick(eventID, conferenceID)
{
  var map = 
    {
      table_name: "user_schedule",
      attrs: ["event_id","conference_id"],
      values: [eventID,conferenceID]
    };

    $.post("proxies/postProxy.php",map,function(data) {successPost(conferenceID);}).fail(function(error) {document.write(error.responseText);});
}

function successPost(conferenceID)
{
    startUserTable(conferenceID);
}