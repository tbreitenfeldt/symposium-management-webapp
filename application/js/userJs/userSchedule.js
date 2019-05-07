
var myTable;
function startUserTable(conferenceID, showSched)
{  
    if(showSched == 0)
    {
        myTable = new Array();
    }
    
    let map = {
      "table_names": ["user_schedule","event"],
      "values_to_select": ["*"], 
      "attrs": ["conference_id"], 
      "values": [conferenceID],
      "genFlag": "flag"};

    $.get("proxies/getProxy.php",map,function(data)
    {
        
        if(showSched == 1)
        {
            showSchedule(conferenceID, data);
        }
        else
        {
            gotEvent(conferenceID, data);
        }
       
    }, "json");
}

function showSchedule(conferenceID, data)
{   
    // Put information from event into table, along with delete button
    // IF schedule is empty, add something saying no events, 
    //if not empty find info on event and add to table

    if(data != null)
    {
        for(i = 0; i < data.length; i++)
        {
            var id = data[i].event_id;

                $("<tr><td>" + data[i].event_name + "</td><td>" + data[i].event_starttime + "</td><td>" + data[i].event_endtime + "</td></tr>").appendTo("#schedInfo");
        }
    }
    else
    {
        $("<tr><td>No Events Here</td></tr>").appendTo("#schedInfo");
    }
}

function gotEvent(conferenceID, data)
{   
    // Put information from event into table, along with delete button
    // IF schedule is empty, add something saying no events, 
    //if not empty find info on event and add to table

    if(data != null)
    {
        var table = $("#userConInfo");

        for(i = 0; i < data.length; i++)
        {
            var id = data[i].event_id;
            
            if(!myTable.includes(id))
		    {
                myTable.push(id);
                $("<tr><td>" + data[i].event_name + "</td><td>" + data[i].event_starttime + "</td><td>" + data[i].event_endtime + "</td><td><button class=\"delBtn\" onclick=\"onDeleteClick(this," + conferenceID + "," + id + ")\" aria-label=\"Delete from my Schedule\"> X </button></td></tr>").appendTo("#UsersCon tbody");
		    }
        }
    }
    else
    {
        $("<tr><td>No Events Here</td></tr>").appendTo("#userConInfo");
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

    if(myTable.length == 0)
    {
        $("<tr><td>No Events Here</td></tr>").appendTo("#userConInfo");
    }
}


