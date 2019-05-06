
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
            console.log("getting")
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
            var event = 
            {
                info: String(data[i].event_desc),
                speakers: String(data[i].event_speakers),
                room: String(data[i].event_building + " " + data[i].event_floor + " " + data[i].event_room)
            };
        

            $("<tr><td>" + data[i].event_name + "</td><td>" + data[i].event_starttime + "</td><td>" + data[i].event_endtime + "</td><td><button onclick=\"showEventInfo(" + i +")\" class=\"dropbtn\">Open/Close</button></td></tr>"
            + "<tr><td colspan=4><span id=\"dropdown" + i +"\"style=\"display:none\">Information: " + event.info + "<br>Speakers: " + event.speakers + "<br>Building, Floor, Room: " + event.room + "</span></td></tr>").appendTo("#schedInfo");
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
        for(i = 0; i < data.length; i++)
        {
            var id = data[i].event_id;
            if(!myTable.includes(id))
		    {
                myTable.push(id);
                name = String(data[i].event_name);
                var message = String("Removed from mySchedule: Event - " + name);
                $("<tr><td>" + data[i].event_name + "</td><td aria-label=\"" + name + "wil start at\">" + data[i].event_starttime + "</td><td>" + data[i].event_endtime + "</td><td><button class=\"delBtn\" onclick=\"onDeleteClick1(this," + id + "," + "\'" + message + "\'" + ")\"><i class=\"fas fa-times-circle fa-w-16 fa-3x\"></i></button></td></tr>").appendTo("#UsersCon tbody");
            }
        }
    }
    else
    {
        $("<tr><td>No Events Here</td></tr>").appendTo("#userConInfo");
    }
}

function onDeleteClick1(event, eventID, message)
{
    var map =
    {
        table_name: "user_schedule",
        id_name: ["event_id"],
        id_value: [eventID]
    };

    $.delete("proxies/deleteProxy.php",map,function(data){successDel(event,eventID);});

    notifyScreenreader(message);
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

function showEventInfo(count)
{
    $("#dropdown"+count).toggle("fast");
}
