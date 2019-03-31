
/*
*   Currently only being used with random conference id = 1
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
  
    createUserConferenceTables(mainObj[0].dayStart.getMonth() + 1,mainObj[0].dayStart.getDate() + 1, 
                            checkDifference(mainObj[0].dayStart,mainObj[0].dayEnd));
    
  
    // Find which Events need to be added to User Schedule, if blank; don't do anything else
    valuesToSelect = ["*"];
  	tableNames = ["user_conference, user_schedule"];
	attrs = ["conference_id"];
	values = [mainObj[0].id];

  	getRecord(valuesToSelect,tableNames,attrs,values,gotEventRef,"json","true");
}

function createUserConferenceTables(countMonth, countDay, difDay)
{
    var row = "<tr><th>Times</th>";
    var months = [31,28,31,30,31,30,31,31,30,31,30,31];

    for(i = 0; i <= difDay; i++)
    {   
       row += "<th>" + countMonth + "-" + countDay + "</th>";;
        //Need to add check for year switch and others...
        if((countDay + 1) > months[countMonth])
        {
           countMonth++;
        }
        countDay++;
        currentUserColumns++;
    }

    row += "</tr>";
    $("#UsersCon").append(row);
}

function gotEventRef(data)
{
    if(data != null)
    {
        valuesToSelect = ["*"];
  	    tableNames = ["user_schedule, event"];
	    attrs = ["event_id"];
        values = [data.event_id];
        getRecord(valuesToSelect,tableNames,attrs,values,gotEvent,"json","true");
    }
    else
    {
        var timeCount = 0;
        var row = "";
        var time = timeCount + ":00";
    
        for(i = 0; i < 24; i++)
        {
            row += "<tr><th>" + time + "</th>";
    
            for(j = 0; j < currentUserColumns; j++)
            {
                row += "<th></th>";
            }
    
            row += "</tr>";
            timeCount++;
            time = timeCount + ":00";
        }
        $("#UsersCon").append(row);
    }
}

function gotEvent(eventData)
{
    var eventObj = {};
    for(i = 0; i<eventData.length;i++)
    {
        eventObj[i] = {
          id: eventData[i].event_id,
          name: eventData[i].event_name,
          start: eventData[i].event_starttime,
          end: eventData[i].event_endtime,
        }; 
    }

    //console.log(eventObj[0].name);
    //Maybe make option for military time or 12-hour time?
    var timeCount = 0;
    var row = "";
    var time = timeCount + ":00";

    //Check what type of object to make the event to show information
    
    for(i = 0; i < 24; i++)
    {
        row += "<tr><th>" + time + "</th>";

        //Change for length of Event to extend to end time
        for(j = 0; j < currentUserColumns; j++)
        {
            
            if(j == currentUserColumns - 1 && checkEvents(time,eventObj[0].start))
            {
                row += "<th><button id=\"deleteBtn\" onclick=onDeleteClick("+ eventObj[0].id +")>Delete</button></th>";
            }
            else if(checkEvents(time,eventObj[0].start))
            {
                row += "<th>" + eventObj[0].name + "</th>";
            }
            else
            {
                row += "<th></th>";
            }
        }

        row += "</tr>";
        timeCount++;
        time = timeCount + ":00";
    }
    //CHANGE THIS FOR MULTIPLE EVENTS TO BE HANDLED!
    $("#UsersCon").append(row);
}

function checkEvents(time, eventStart)
{
    var newTime = "";
    if(time.substring(1,2) == ":")
    {
        newTime = ("0") + (time) + ":00";
    }
    else
    {
        newTime = time + ":00";
    }
   

  //  for(i = 0; i < eventArr.length; i++)
    {
        if(eventStart == newTime)
        {
            return true;
        }
    }

    return false;
}

function onDeleteClick(data)
{
    
}