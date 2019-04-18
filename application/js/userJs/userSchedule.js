
var myTable = new Array();

function startUserTable(conferenceID)
{  
    let map = {
      "table_names": ["user_schedule","event"],
      "values_to_select": ["*"], 
      "attrs": ["conference_id"], 
      "values": [conferenceID],
      "genFlag": "flag"};

    $.get("proxies/getProxy.php", map, function(data){gotEvent(conferenceID, data);}, "json");
}

function gotEvent(conferenceID, data)
{   
    // Put information from event into table, along with delete button
    // IF schedule is empty, add something saying no events, 
    //if not empty find info on event and add to table

    console.log(data);
    
    if(data != null)
    {
        var table = document.getElementById("userConInfo");

        for(i = 0; i < data.length; i++)
        {
            var id = data[i].event_id;
            
            if(!myTable.includes(id))
		    {
                myTable.push(id);
                $("<tr><td>" + data[i].event_name + "</td><td>" + data[i].event_starttime + "</td><td>" + data[i].event_endtime + "</td><td><button class=\"delBtn\" onclick=\"onDeleteClick(this," + conferenceID + "," + id + ")\"> X </button></td></tr>").appendTo("#UsersCon tbody");
           
		    }
        } 
    }
    else
    {
        $("<tr><td>No Events Here</td></tr>").appendTo("#UsersCon tbody");
    }
}

function onDeleteClick(event,conferenceID, eventID)
{
    var map =
    {
        table_name: "user_schedule",
        id_name: ["event_id"],
        id_value: [eventID]
    };

    $.delete("proxies/deleteProxy.php",map,function(data){successDel(event,eventID);});
}

function successDel(event, eventID)
{
    let rowIndex = event.parentElement.parentElement.rowIndex -1;
    let table = document.getElementById("userConInfo");
    $(event.parentElement).children().off();
    table.deleteRow(rowIndex);
    myTable.splice(eventID);
}

