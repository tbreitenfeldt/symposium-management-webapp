/*
* FROM USER ID, GET THE CONFERENCE ID, GET THE CONFERENCE INFORMATION
*/


$(document).ready(init);

async function init () 
{
  // Get the id and Name of the conference
  await startMainTable();
  await startUserTable();
}


currentColumns = 1;

function startMainTable()
{
	valuesToSelect = ["*"];
	tableNames = ["conference"];
	attrs = [];
	values = [];

	getRecord(valuesToSelect,tableNames,attrs,values,gotMainConference,"json","true")
}

function gotMainConference(data)
{
    var mainObj = {};
    for(i = 0; i<data.length;i++)
    {
        mainObj[i] = {
          id: data[i].conference_id,
          name: data[i].conference_name,
          dayStart: new Date(data[i].conference_startdate),
          dayEnd: new Date(data[i].conference_enddate)
        }; 
    }

    var header1 = document.getElementById("h1");
    header1.textContent = mainObj[0].name;
  
    createConferenceTables(mainObj[0].dayStart.getMonth() + 1,mainObj[0].dayStart.getDate() + 1, 
                            checkDifference(mainObj[0].dayStart,mainObj[0].dayEnd));
    
  
    valuesToSelect = ["*"];
  	tableNames = ["event"];
	attrs = ["conference_id"];
	values = [mainObj[0].id];

  	getRecord(valuesToSelect,tableNames,attrs,values,gotEventData,"json","true");
}

function createConferenceTables(countMonth, countDay, difDay)
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
        currentColumns++;
    }

    row += "</tr>";
    $("#Conference").append(row);
}

function checkDifference(begin,end)
{
    var num = ((end.getYear() - begin.getYear()) * 365);
    //Jan, Feb, March, April, May, June, July, August, September, October, November, December
    var months = [31,28,31,30,31,30,31,31,30,31,30,31];
    var endMonth = end.getMonth();
    var beginMonth = begin.getMonth();
    var endDay = end.getDay() + 1;
    var beginDay = begin.getDay() + 1;

    if(endMonth > beginMonth)
    {
        num+=(months[beginMonth] - beginDay);

        for(i = beginMonth + 1; i < endMonth; i++)
        {
            num+=months[i];
        }

        num+=endDay;
    }
    else
    {
        num+=(endDay - beginDay);
    }

    return num;
}

function gotEventData(eventData)
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
    console.log(time);
    console.log(currentColumns);
    for(i = 0; i < 24; i++)
    {
        row += "<tr><th>" + time + "</th>";

        //Change for length of Event to extend to end time
        for(j = 0; j < currentColumns; j++)
        {
            
            if(j == currentColumns - 1 && checkEvents(time,eventObj[0].start))
            {
                row += "<th><button id=\"addBtn\" onclick=onAddClick("+ eventObj[0].id +")>Add</button></th>";
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
    $("#Conference").append(row);
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

function onAddClick(data)
{
   /*
      The event click will add an event to the user conference! Each table row will be added along with an "add" button. 
      The User table will give it a delete button instead!
      send to different file? for user?
   */
    //addEventToTable(data);

    valuesToSelect = ["event_id","event_name","event_starttime","event_endtime"];
    tableNames = ["user_schedule", "event"];
	attrs = ["event_id"];
	values = [data];

  	getRecord(valuesToSelect,tableNames,attrs,values,gotEvent,"json","true");
}

function addEventToTable(data)
{ 
   tableNames = ["user_schedule"];
   attrs = ["user_id","event_id"];
   values = [1,data];

   postRecord(tableNames,attrs,values, "json", "true");
}

jQuery.each( [ "put", "delete" ], function( i, method ) {
    jQuery[ method ] = function( url, data, callback, type ) {
      if ( jQuery.isFunction( data ) ) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
   
      return jQuery.ajax({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      });
    };
  });