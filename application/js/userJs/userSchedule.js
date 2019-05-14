
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
      "genFlag": "flag",
	  "orderBy": ["event_date", "event_starttime"]};

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

	$("#schedInfo").empty();
	generateUserEventTable(data, "schedInfo", "myScheduleTable");
	
	/*
    if(data != null)
    {
		myTable = new Array();
        for(i = 0; i < data.length; i++)
        {
            var id = data[i].event_id;
		    var message = String("Removed " + name) + " from mySchedule";


			
			if(!myTable.includes(id))
		    {
				myTable.push(id);
				$("<tr><td>" + data[i].event_name +  "</td><td>" + data[i].event_date + "</td><td>" + data[i].event_starttime + "</td><td>" + data[i].event_endtime + "</td><td><button id='openCloseButton" + i + "' onclick='onShowHiddenRowWithAria(eventInfoRow" + i + ", \"" + data[i].event_name + "\")' class='dropbtn'>More/Less Info</button></td>"
				+ "<td><button class=\"delBtn\" onclick=\"onDeleteClickMySchedulePage(this," + data[i].event_id + "," + "\'" + message + "\'" + ")\" aria-label=\"Delete from my Schedule\"><i class=\"fas fa-times-circle fa-w-16 fa-3x\"></i></button></td></tr>"
				+ "<tr  id='eventInfoRow" + i + "' style='display:none' ><td colspan=6><p id='dropdown" + i +"'>Information: " + event.info + "<br>Speakers: " + event.speakers + "<br>Building, Floor, Room: " + event.room + "</p></td></tr>").appendTo("#schedInfo");
			}
		}
    }
    else
    {
        $("<tr><td>No Events Here</td></tr>").appendTo("#schedInfo");
    }
	*/
}

function generateUserEventTable(data, tblBodyID, tblID){
	if(data != null)
    {
		myTable = new Array();
        for(i = 0; i < data.length; i++)
        {
			
			var eventInfoRow = generateEventDescription(data, i);
			
			var date = parseDate(data[i].event_date);
			var starttime = parseTime(data[i].event_starttime);
			var et = parseTime(data[i].event_endtime);
        
			var id = data[i].event_id;
			name = String(data[i].event_name);
		    var message = String("Removed " + name) + " from mySchedule";

			if(!myTable.includes(id))
		    {
				myTable.push(id);
				$("<tr><td>" + data[i].event_name +  "</td><td>" + date + "</td><td>" + starttime + "</td><td>" + et + "</td><td><button id='openCloseButton" + i + "' onclick='onShowHiddenRowWithAria(eventInfoRow" + i + ", \"" + data[i].event_name + "\")' class='dropbtn'>More/Less Info</button></td>"
				+ "<td><button class=\"delBtn\" onclick=\"onDel(this," + data[i].event_id + "," + "\'" + message + "\'" + ", " + tblID + ")\" aria-label=\"Delete from my Schedule\"><i class=\"fas fa-times-circle fa-w-16 fa-3x\"></i></button></td></tr>"
				+ eventInfoRow).appendTo("#" + tblID);
			}
		}
    }
    else
    {
        $("<tr><td>No Events Here</td></tr>").appendTo("#" + tblID);
    }
}

function gotEvent(conferenceID, data)
{   
    // Put information from event into table, along with delete button
    // IF schedule is empty, add something saying no events, 
    //if not empty find info on event and add to table

	$("#UsersCon tbody").empty();
	generateUserEventTable(data, "userConInfo", "UsersCon");
	
	/*
    if(data != null)
    {
        for(i = 0; i < data.length; i++)
        {
            var id = data[i].event_id;
            if(!myTable.includes(id))
		    {
                myTable.push(id);
                name = String(data[i].event_name);
                var message = String("Removed " + name) + " from mySchedule";
                $("<tr><td>" + data[i].event_name + "</td><td aria-label=\"" + name + "wil start at\">" + data[i].event_starttime + "</td><td>" + data[i].event_endtime + "</td><td><button class=\"delBtn\" onclick=\"onDeleteClick1(this," + id + "," + "\'" + message + "\'" + ")\" aria-label=\"Delete from my Schedule\"><i class=\"fas fa-times-circle fa-w-16 fa-3x\"></i></button></td></tr>").appendTo("#UsersCon tbody");
            }
        }
    }
    else
    {
        $("<tr><td>No Events Here</td></tr>").appendTo("#userConInfo");
    }
	*/
}

function onDel(event, eventID, message, tblID){
	    var map =
    {
        table_name: "user_schedule",
        id_name: ["event_id"],
        id_value: [eventID]
    };

    $.delete("proxies/deleteProxy.php",map,function(data){onDelSuccess(event,eventID, tblID);});

    notifyScreenreader(message);
}

function onDelSuccess(event, eventID, tblID){
	let rowIndex = event.parentElement.parentElement.rowIndex;
    let table = tblID ; //document.getElementById(tblID);
	console.log(tblID);
	console.log(table);
    $(event.parentElement).children().off();
    table.deleteRow(rowIndex);
    table.deleteRow(rowIndex);  //delete the row that is associated with this row that holds the event info 
    myTable.splice(eventID);
    console.log("My table length is " +  myTable.length);
    if(myTable.length == 0)
    {
        $("<tr><td>No Events Here</td></tr>").appendTo("#" + tblID);
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

function onDeleteClickMySchedulePage(event, eventID, message)
{
    var map =
    {
        table_name: "user_schedule",
        id_name: ["event_id"],
        id_value: [eventID]
    };

    $.delete("proxies/deleteProxy.php",map,function(data){onSuccessDeleteFromMySchedule(event,eventID);});

    notifyScreenreader(message);
}

function onSuccessDeleteFromMySchedule(event, eventID)
{
    let rowIndex = event.parentElement.parentElement.rowIndex;
    let table = document.getElementById("myScheduleTable");
    $(event.parentElement).children().off();
    table.deleteRow(rowIndex);
    myTable.splice(eventID);

    if(myTable.length == 0)
    {
        $("<tr><td>No Events Here</td></tr>").appendTo("#myScheduleTable");
    }
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
    let rowEventInfo = $("#eventInfoRow"+count);

    if (rowEventInfo.attr("aria-hidden") == "false") {
        notifyScreenreader("collapsed event information");
        $("#openCloseButton" + count).text("Open Event");
        rowEventInfo.attr("aria-hidden", "true");
    } else {
        notifyScreenreader("expanded event information below");
        $("#openCloseButton" + count).text("Close Event");
        rowEventInfo.attr("aria-hidden", "false");
    }
}