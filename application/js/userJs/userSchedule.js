
/*
*   Currently only being used with random conference id = 1
    and doesnt do all events -> change this
*/

var currentUserColumns = 1;

function startUserTable()
{
    //user conference merge conference for this part
    valuesToSelect = ["*"];
	tableNames = ["conference"];
	attrs = [];
	values = [];

	getRecord(valuesToSelect,tableNames,attrs,values,gotUserConference,"json","true")
}

function gotUserConference(data)
{
    var mainObj = {};
    for(i = 0; i<data.length;i++)
    {
        mainObj[i] = {
          id: data[i].conference_id,
          dayStart: new Date(data[i].conference_startdate),
          dayEnd: new Date(data[i].conference_enddate)
        }; 
    }
  
    // Find which Events need to be added to User Schedule, if blank; don't do anything else
    valuesToSelect = ["*"];
  	tableNames = ["user_conference, user_schedule"];
	attrs = ["conference_id"];
	values = [mainObj[0].id];

  	getRecord(valuesToSelect,tableNames,attrs,values,gotEventRef,"json","true");
}

function gotEventRef(data)
{
    if(data != null)
    {
        /*
         --bad
        */
        valuesToSelect = ["*"];
  	    tableNames = ["user_schedule, event"];
	    attrs = ["event_id"];
        values = [data[0].event_id]; // find a way to do all events
        getRecord(valuesToSelect,tableNames,attrs,values,gotEvent,"json","true");
    }
    else
    {
        var table = document.getElementById("UsersCon");
        var row = "No Events Here"
        table.append(row);
        console.log("i don't have event");
    }
}

function gotEvent(eventData)
{
    var eventObj = [];
    for(i = 0; i < eventData.length;i++)
    {
        eventObj[i] = {
          id: eventData[i].event_id,
          name: eventData[i].event_name,
          start: eventData[i].event_starttime,
          end: eventData[i].event_endtime,
        };

        var table = document.getElementById("UsersCon");
        var row = "";

        for(i = 0; i < eventObj.length; i++)
        {
            row += "<tr><td>" + eventObj[i].name + "</td><td>" + eventObj[i].start 
                    + "</td><td>" + eventObj[i].end + "</td><td><button class=\"delBtn\" onclick=\"onDeleteClick(eventObj[i].id)\"> X </button></td></tr>";
        }

        table.append(row);
    }
}

function onDeleteClick(data)
{
    var table = "user_schedule";
    var name = "event_id";
    var id = data;

    delRecord(table,name,id,startUserTable);
}