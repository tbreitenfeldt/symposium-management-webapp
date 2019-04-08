
/*
*   Currently only being used with random conference id = 1
    and doesnt do all events -> change this
*/

function startUserTable()
{
    valuesToSelect = ["*"];
	tableNames = ["user_conference"];
	attrs = ["conference_id"];
	values = ["1001"];

	getRecord(valuesToSelect,tableNames,attrs,values,gotUserConference,"json","true")
}

function gotUserConference(data)
{  
    // Now grab the events from the current schedule

    valuesToSelect = ["event_id"];
  	tableNames = ["user_schedule"];
    attrs = ["conference_id"];
    values = [data[0].conference_id];

  	getRecord(valuesToSelect,tableNames,attrs,values,gotEventRef,"json","true");
}

function gotEventRef(data)
{
    // IF schedule is empty, add something saying no events, 
    //if not empty find info on event and add to table

    if(data != null)
    {
        for(i = 0; i < data.length;i++)
        {
            valuesToSelect = ["*"];
  	        tableNames = ["event"];
	        attrs = ["event_id"];
            values = [data]; 
            getRecord(valuesToSelect,tableNames,attrs,values,gotEvent,"json","true");
        }  
    }
    else
    {
        $("<tr>No Events Here</tr>").appendTo("#UsersCon");
    }
}

function gotEvent(eventData)
{   
    // Put information from event into table, along with delete button
    
    var id = eventData[i].event_id;
    $("<tr><td>" + eventData[i].event_name + "</td><td>" + eventData[i].event_starttime + "</td><td>" + eventData[i].event_endtime + "</td><td><button class=\"delBtn\" onclick=\"onDeleteClick(" + id + ")\"> X </button></td></tr>").appendTo("#UsersCon");
}

function onDeleteClick(data)
{
    var table = "user_schedule";
    var name = "event_id";
    var id = data;

    delRecord(table,name,id,startUserTable);
}