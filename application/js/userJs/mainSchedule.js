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
          dayStart: data[i].conference_startdate,
          dayEnd: data[i].conference_enddate
        }; 
    }

    var header1 = document.getElementById("h1");
    header1.textContent = mainObj[0].name;


    valuesToSelect = ["*"];
  	tableNames = ["event"];
	  attrs = ["conference_id"];
	  values = [mainObj[0].id];
    
    console.log(mainObj[0].id);

  	getRecord(valuesToSelect,tableNames,attrs,values,gotEventData,"json","true");
}

function gotEventData(data)
{
    var eventObj = {};
    console.log(data);

    if(data != null)
    {
     for(i = 0; i < data.length; i++)
      {
          eventObj[i] = {
            id: data[i].event_id,
            name: data[i].event_name,
            start: data[i].event_starttime,
            end: data[i].event_endtime
          }; 
      }

      var table = document.getElementById("Conference");
      var row = "";

      for(i = 0; i < eventObj.length; i++)
      {
          row += "<tr><td>" + eventObj[i].name + "</td><td>" + eventObj[i].start 
                  + "</td><td>" + eventObj[i].end + "</td><td><button class=\"addBtn\"onclick=\"onAddClick(eventObj[i].id)\"> + </button></td></tr>";
      }

      table.append(row);    
    }   
}

function onAddClick(data)
{
    tableNames = ["user_schedule"];
    attrs = ["user_id","event_id"];
    values = [1,data];
 
    postRecord(tableNames,attrs,values, "json", "true");
}