$(document).ready(start);

//global variables for keeping track of the column names and the currently selected table name.
currentColumns = "";
table = "";
databaseName = "";


async function start() {
	await getDatabaseName();
	await getTableNames();
    $("#btnCancel").click(cancelSave);
    $("#btnSave").click(save);
    $("#btnAdd").click(add);
	$("#btnRefresh").click(loadTable);
	$("#btnJoin").click(onJoin);
	await createTable();
	await loadTable();
}

async function getDatabaseName(){
	valuesToSelect = ["database() AS dbname"];
	tablenames = [];
	attrs = [];
	values = [];
	await getRecord(valuesToSelect, tablenames, attrs, values, gotDatabaseName, "json", "false");
}

function gotDatabaseName(data){
	databaseName = data[0].dbname;
	$("#databaseNameHeader").html("Database: " + databaseName);
}

/*
	Loads the table. Will get all records from the currently selected table.
*/
async function loadTable() {
    $('#tblUsers tr:gt(0)').remove();
    $('.btnEdit').off("click", editPressed);
    $('.btnDelete').off("click", delPressed);
	
	vts = ["*"];
	tn = [table];
	attrs = [];
	values = [];
    await getRecord(vts, tn, attrs, values, gotRecords, "json", "false");
}


/*
	Callback to loadTable.
	Will populate our html table with each row returned from loadTable.
	Will populate our html table with Edit and Delete buttons for each row.
*/
function gotRecords(data) {
    for (i = 0; i < data.length; i++) {
        rec = data[i];


        btnDelete = "<input type='button' class='btnDelete' value='Delete' data-key='" + rec[currentColumns[0].COLUMN_NAME] + "'/>";

		row = "<tr><td>";
		
		var dataarray = [];
		
		for(j = 0; j < currentColumns.length; j++){
			col = currentColumns[j].COLUMN_NAME;
			row += rec[col] + "</td><td>";
			dataarray.push(rec[col]);
		}
		
		btnEdit = "<input type='button' class='btnEdit' value='Edit' data-array='" + JSON.stringify(rec) + "' data-key='" + rec[currentColumns[0].COLUMN_NAME]+ "'/>";
		
		row += btnEdit + btnDelete + "</td></tr>";
        $("#tblUsers").append(row);
    }
    $('.btnEdit').click(editPressed);
    $('.btnDelete').click(delPressed);
}


/*
	Creates the headers of the table. Gets all the Column names from the currently selected table.
*/
async function createTable(){
	$("#tblUsers").empty();
	valuesToSelect = "COLUMN_NAME";
	tablenames = ["INFORMATION_SCHEMA.COLUMNS"];
	attrs = ["TABLE_NAME", "TABLE_SCHEMA"];
	values = [table, databaseName];
	await getRecord(valuesToSelect, tablenames, attrs, values, gotColumnHeaders, "json", "true");
}


/*
	Callback to createTable(). 
	Will take the column names from createTable and populate headers into our html table.
*/
function gotColumnHeaders(data){
	currentColumns = data;
	row = "<tr>";
	for(i = 0; i < data.length; i++){
		column = data[i];
		row += "<th>" + column.COLUMN_NAME + "</th>";
	}
	row += "<th>Edit/Delete</th></tr>";
	$("#tblUsers").append(row);
}


/*
	Gets the names of all the tables in our current database.
*/
async function getTableNames(){
	valuesToSelect = ["TABLE_NAME"];
	tableNames = ["INFORMATION_SCHEMA.TABLES"];
	attrs = ["TABLE_SCHEMA"];
	values = [databaseName];
	await getRecord(valuesToSelect, tableNames, attrs, values, gotTableNames, "json", "true");
}


/*
	Will take the returned names from getTableNames() and populate the select field in our html with those names.
*/
function gotTableNames(data){
	options = "";
	table = data[0].TABLE_NAME;
	for(i = 0; i < data.length; i++){
		tbl = data[i].TABLE_NAME;
		options += "<option value='" + tbl + "'>"+ tbl + "</option>"; 
	}
	$("#tablenames").html(options);
	$("#tablenames2").html(options);
}


/*
	Changes the database table we are currently displaying to the option selected from the select field.
*/
async function changeTable(data){
	table = data;
	$("#divAdd").hide();
	await createTable();
	await loadTable();
}


/*
	onClick for the "Execute JOIN" button.
	calls getRecord passing in the two select fields table names.
	Will show the hidden join div and callback to gotJoinTable.
*/
async function onJoin(){
	clearTempTable();
	$("#divAdd").hide();
	$("#divTempTable").show();
	tbl1 = $("#tablenames").val();
	tbl2 = $("#tablenames2").val();
	valuesToSelect = ["*"];
	tableNames = [tbl1, tbl2];
	attrs = [];
	values = [];
	await getRecord(valuesToSelect, tableNames, attrs, values, gotJoinTable, "json", "false");
}


/*
	onClick for the "Clear Out Temporary Table" button.
	Will clear out and hide the temporary table and it's div.
*/
function clearTempTable(){
	$("#tblTemp").empty();
	$("#divTempTable").hide();
}


/*
	callback to onJoin.
	Dynamically creates the table returned from the getRecord data.
	Good example of simple table join functionality.
*/
function gotJoinTable(data){
	if(data == null || data.length === 0){
		$("#tblTemp").append("<th>No Matches</th>");
	}
	else{
		cols = [];
		cols = (Object.keys(data[0]));
		row = "<tr>";
		for(var key in data[0]){
			row += "<th>" + key + "</th>";
		}
		row += "</tr>";
		$("#tblTemp").append(row);
		
		var k;
		var rec;
		for(i = 0; i < data.length; i++){
			rec = data[i];
			row = "<tr><td>";
			for(var key in rec){
				log("data[" + i + "] : " + key + " = " + rec[key]);
				row += rec[key] + "</td><td>";
			}
			$("#tblTemp").append(row);
		}

	}

}


/*
	onClick for each Edit button.
	Will grab the stored JSON from gotRecords and use it to fill in the edit fields.
*/
function editPressed(evt) {
    id = $(evt.target).attr("data-key");
	array = $(evt.target).attr("data-array");
    $("#btnSave").attr("data-type", "edit").attr("data-key", id);
	
	fillEditFieldsWithArray(array);
}


/*
	Called from add().
	Creates empty input fields for the add div.
	Shows the hidden "add" div.
*/
function generateEditDiv(){
	body = "";
	$("#divAddFields").html("");
	for(i = 0; i < currentColumns.length; i++){
		col = currentColumns[i].COLUMN_NAME;
		body += col + ': <input type="text" id=' + col + ' class="txtEditField" size="36" required="required"><br>'
	}
	
	$("#divAddFields").prepend(body);

}


/*
	onClick for the "Add Record" button.
	Will show the hidden "add" div.
*/
function add() {
	generateEditDiv();
    $("#btnSave").attr("data-type", "add");
    $("#divAdd").show();
    clearEditFields();
	$("#" + currentColumns[0].COLUMN_NAME).focus();
}


/*
	Deprecated method. Used to use a $.get in editPressed() and this was the callback.
	The new version of this method is called "fillEditFieldsWithArray" and uses the edit buttons stored JSON array to populate the edit
		fields rather than a GET call.
*/
function fillEditFields(data) {
	body = "";
	firstInput = "#" + currentColumns[0].COLUMN_NAME;
	$("#divAddFields").html("");
	for(i = 0; i < currentColumns.length; i++){
		col = currentColumns[i].COLUMN_NAME;
		body += col + ': <input type="text" id=' + col + ' value = ' + data[0][col] + ' class="txtEditField" size="36" required="required"><br>'
	}
	
	$("#divAddFields").prepend(body);

    $("#divAdd").show();
    $(firstInput).focus();
}


/*
	Called by editPressed().
	Populates the edit fields with the JSON array stored in the edit button that was pressed.
*/
function fillEditFieldsWithArray(array){
	body = "";
	array = JSON.parse(array);
	$("#divAddFields").html("");
	for(i = 0; i < currentColumns.length; i++){
		col = currentColumns[i].COLUMN_NAME;
		body += col + ': <input type="text" id=' + col + ' value = ' + array[col] + ' class="txtEditField" size="36" required="required"><br>'
	}
	
	$("#divAddFields").prepend(body);
    $("#divAdd").show();
    $("#" + currentColumns[0].COLUMN_NAME).focus();
}


/*
	onClick for all Delete Buttons.
	Will delete the record in that row.
*/
function delPressed(evt) {
    if (confirm("Delete this record?")) {
        id = $(evt.target).attr("data-key");
        delRecord(id);
    }
}


/*
	Deletes a record from the currently selected table based on its primary id.
	Only deletes based off of the first entry in the currentColumns array.
*/
function delRecord(id){
	map = { 
	table_name: table,
	id_name: currentColumns[0].COLUMN_NAME,
	id_value: id
	};
	$.delete("api/index.php", map, loadTable);
}


/*
	onClick for the save button.
	Will POST if the "add" div was shown from the "Add Record" button.
	Will PUT if the "add" div was shown from an "Edit" button.
*/
function save(evt) {
    var action = $(evt.target).attr("data-type");
	var map = {};
    if (action == "add" && validateForm()) {
		
		
        $("#divAdd").hide();
		var tablename = table;
		var attrs = [];
		var values = [];
		for(i = 0; i < currentColumns.length; i++){
			col = currentColumns[i].COLUMN_NAME;
			attrs.push(col);
			values.push($("#" + col).val());
		}
		postRecord(tablename,attrs,values,loadTable, "true");
		
    } else if (action == "edit" && validateForm()) {
        id = $(evt.target).attr("data-key");
        $("#divAdd").hide();
		var tablename = table;
		var attrs = [];
		var values = [];
		var target_id_name = currentColumns[0].COLUMN_NAME;
		var target_id_value = id;
		for(i = 0; i < currentColumns.length; i++){
			col = currentColumns[i].COLUMN_NAME;
			attrs.push(col);
			values.push($("#" + col).val());	
		}
        putRecord(tablename, attrs, values, target_id_name, target_id_value, loadTable, "true");
    }
}


/*
	Code to make sure all fields were filled in the "add/edit" div.
	returns true if they are filled. returns false otherwise.
*/
function validateForm() {
    flag = true;
    $(".txtEditField").each(function (ix, value) {
        if ($(value).attr("required") == "required" && $(value).val() == '') {
            flag = false;
            $(value).css("background-color", "brown");
            $(value).attr("placeholder", "* required");
        } else {
            $(value).css("background-color", "white");
            $(value).attr("placeholder", "");
        }
    });
    return flag;
}


/*
	onClick for the "Cancel" button in the "add" div. 
	Will show an confirm alert and hide the "add" div if the user confirms it.
*/
function cancelSave(evt) {
    if (confirm("Cancel the Edit?")) {
        $("#divAdd").hide();
	}
}


/*
	Called by the add() method.
	Clears out the edit fields in the "add" div.
*/
function clearEditFields() {
    $(".txtEditField").each(function (ix, value) {
        $(value).val("");
    });
}