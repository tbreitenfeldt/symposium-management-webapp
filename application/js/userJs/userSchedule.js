
/*
function startUserTable(conferenceID)
{
    valuesToSelect = ["*"];
	tableNames = ["user_conference"];
	attrs = ["conference_id"];
	values = [conferenceID];

	getRecord(valuesToSelect,tableNames,attrs,values,gotUserConference,"json","false")
}
*/
var myTable = new Array();

function startUserTable(conferenceID)
{  
    let map = {
      "table_names": ["user_schedule"],
      "values_to_select": ["event_id"], 
      "attrs": ["conference_id"], 
      "values": [conferenceID],
      "genFlag": "flag"};

    $.get("proxies/getProxy.php", map, function(data){gotEventRef(conferenceID, data);}, "json");
  	//getRecord(valuesToSelect,tableNames,attrs,values,gotEventRef,"json","false");
}

function gotEventRef(conferenceID, data)
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
            getRecord(valuesToSelect,tableNames,attrs,values,function(data){gotEvent(conferenceID, data);},"json","false");
        }  
    }
    else
    {
        $("<tr><td>No Events Here</td></tr>").appendTo("#UsersCon tbody");
    }
}

function gotEvent(conferenceID, data)
{   
    // Put information from event into table, along with delete button

    console.log(data);
    for(i = 0; i < data.length; i++)
    {
        var id = data[i].event_id;
        myTable.push(id);
        $("<tr><td>" + data[i].event_name + "</td><td>" + data[i].event_starttime + "</td><td>" + data[i].event_endtime + "</td><td><button class=\"delBtn\" onclick=\"onDeleteClick(" + conferenceID + ","+ id + ")\"> X </button></td></tr>").appendTo("#UsersCon tbody");
    }
}

function onDeleteClick(conferenceID, data)
{
    var map =
    {
        table_name: "user_schedule",
        id_name: ["event_id"],
        id_value: [data]
    };

    $.delete("proxies/deleteProxy.php",map,function(data){console.log(data);successDel(conferenceID);});
}

function successDel(conferenceID)
{
    clearTable();
    startUserTable(conferenceID);
}

function clearTable()
{
    var parent = document.getElementById("userConInfo");

    while(parent.firstChild)
    {
        parent.removeChild(parent.firstChild);
    }
}
