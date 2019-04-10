
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
    console.log(data);
    if(data != null)
    {
        for(i = 0; i < data.length;i++)
        {
            valuesToSelect = ["*"];
  	        tableNames = ["event"];
	        attrs = ["event_id"];
            values = [data[i].event_id]; 
            getRecord(valuesToSelect,tableNames,attrs,values,gotEvent,"json","true");
        }  
    }
    else
    {
        $("<tr><td>No Events Here</td></tr>").appendTo("#UsersCon");
    }
}

function gotEvent(data)
{   
    // Put information from event into table, along with delete button
    console.log(data);
    for(i = 0; i < data.length; i++)
    {
        var id = data[i].event_id;
        $("<tr><td>" + data[i].event_name + "</td><td>" + data[i].event_starttime + "</td><td>" + data[i].event_endtime + "</td><td><button class=\"delBtn\" onclick=\"onDeleteClick(" + id + ")\"> X </button></td></tr>").appendTo("#UsersCon tbody");
    }
}

function onDeleteClick(data)
{
    var map =
    {
        table_name: "user_schedule",
        attrs: ["event_id","conference_id"],
        values: [data,1001]
    };

    $.delete("proxies/deleteProxy.php",map,successDel);
}

function successDel(data)
{
    console.log(data);
    $("#UsersCon tbody").remove();
}