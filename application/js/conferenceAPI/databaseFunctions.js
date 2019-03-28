/*
	generic call to GET a record from a table.
	
	Variable : Description : Type
	
	valuesToSelect : the values you wish to get from the table. e.g. "*" or "user_id". : Array of Strings
	tablename : the names of the table or tables. : Array of Strings
	attrs : the names of the columns in that table. : Array of Strings
	values : the values you wish to add into the table. : Array of Strings
	callback : the function you wish the POST request to call back to. : function
	type : what type of data you want sent back. e.g. "json" or "text". : String
	formatFlag: boolean. If true, it will format your string arrays as needed by the php code. must be formatted like a string e.g. "true" rather than true.
	
	PHP was difficult and requires specific syntax on generically written sql statements.
	The data passed into this method must be formatted as follows:
	
	GET Formatting.
	First: valuesToSelect must be formatted as such: `valueName`. If you are selecting all records, no formatting is needed nor wanted.
	Second: attrs must be an array (not JSON) of strings. Additionally, each string must be formatted similar to tablename.
			Example: ["`columnName1`", "`columnName2`", "`columnName3`"]
	Third: values must be an array (not JSON) of strings. Additionally, each string must be formatted as such: 'value'.
			Example: ["'value1'", "'value2'", "'value3'"]
	
	
	To make this formatting easier, I've included the formatFlag boolean parameter to automatically format your string arrays as needed.
	Only use the formatFlag option if your string arrays are unformatted.
	
	Example of formatFlag:
	valuesToSelect: ["valueName1", "valueName2"] ===formatted=to===> ["`valueName1`", "`valueName2`"].
	attrs: ["columnName1", "columnName2"] ===formatted=to===> ["`columnName1`", "`columnName2`"]
	values: ["value1", "value2"] ===formatted=to===> ["'value1'", "'value2'"]
	
	Typically, it will be easier to use the formatFlag option rather than having to manually format your data.
	
	This method is robust and was designed to handle multiple table selects. Here are some examples of how you can use this code in your Javascript:
	
	Example 1:
	
	async function getSimpleExample() {
	
	valuesToSelect = ["*"];
	tableNames = ["myTable"];
	attrs = [];
	values = [];
    await getRecord(valuesToSelect, tableNames, attrs, values, gotRecords, "json", "false");
	}
	
	This function builds and executes the following SQL statement:
	SELECT * FROM myTable;
	
	Example 2:
	
	async function getWhereExample() {
		
		valuesToSelect = ["user_phone", "user_email", "user_notifyByEmail", "user_notifyByPhone"];
		tableNames = ["user_accounts"];
		attrs = ["user_id"];
		values = ["2"];
		await getRecord(valuesToSelect, tableNames, attrs, values, gotRecords, "json", "true");
	}
	
	This function builds and executes the following SQL statement:
	SELECT `user_phone`, `user_email`, `user_notifyByEmail`, `user_notifyByPhone` 
	FROM user_accounts
	WHERE `user_id` = '2';
	
	Example 3:
	
	async function gotNatJoinExample() {
		
		valuesToSelect = ["user_phone", "user_email", "user_notifyByEmail", "user_notifyByPhone"];
		tableNames = ["user_accounts", "user_schedule"];
		attrs = ["event_id"];
		values = ["5"];
		await getRecord(valuesToSelect, tableNames, attrs, values, gotRecords, "json", "true"); 
	}
	
	This function builds and executes the following SQL statement:
	SELECT `user_phone`, `user_email`, `user_notifyByEmail`, `user_notifyByPhone` 
	FROM user_accounts NATURAL JOIN	user_schedule
	WHERE `event_id` = '5';
	
	If you need more ideas on how to use any methods here, please take a look at my databaseTester.js for live examples of how I've used these functions.
*/
async function getRecord(valuesToSelect, tableNames, attrs, values, callback, type, formatFlag){
	if(formatFlag == "true"){
		if(!(valuesToSelect[0] == "*")){
			formatStringArray(valuesToSelect, "`");		
		}
		formatStringArray(attrs, "`");
		formatStringArray(values, "'");
	}
	map = {
		table_names: tableNames,
		values_to_select: valuesToSelect,
		attrs: attrs,
		values: values,
		genFlag: "flag"
	};
	await $.get("./api/index.php", map, callback, type);
}

//It seems that we are never reaching the callback function in getRecord. Look into it.





/*
	Generic function for deleting a record.
	
	Variable: Description
	
	tablename: name of the table
	idname: name of the column
	idvalue: value of the column to select by
	callback: function to callback to from the $.delete. If no callback is needed, you can just use console.log.
*/
function delRecord(tablename, idname, idvalue, callback){
	map = {
		table_name: tablename,
		id_name: idname,
		id_value: idvalue
	};
	$.delete("api/index.php",map,callback);
}

/*
	generic call to POST a record into a table.
	
	Variable : Description
	
	tablename : the name of the table.
	attrs : the names of the columns in that table.
	values : the values you wish to add into the table.
	callback : the function you wish the POST request to call back to.
	functionFlag: boolean. If true, it will format your string arrays as needed by the php code. must be formatted like a string e.g. "true" rather than true.
	
	PHP was difficult and requires specific syntax on generically written INSERT sql statements.
	The data passed into this method must be formatted as follows:
	
	PUT/POST Formatting.
	First: tablename must be formatted as such: `tablename`
	Second: attrs must be an array (not JSON) of strings. Additionally, each string must be formatted similar to tablename.
			Example: ["`columnName1`", "`columnName2`", "`columnName3`"]
	Third: values must be an array (not JSON) of strings. Additionally, each string must be formatted as such: 'value'.
			Example: ["'value1'", "'value2'", "'value3'"]
	
	
	To make this formatting easier, I've included the formatFlag boolean parameter to automatically format your string arrays as needed.
	Only use the formatFlag option if your string arrays are unformatted.
	
	Example of formatFlag:
	tablename: "tableName" ===formatted=to===> "`tableName`"
	attrs: ["columnName1", "columnName2"] ===formatted=to===> ["`columnName1`", "`columnName2`"]
	values: ["value1", "value2"] ===formatted=to===> ["'value1'", "'value2'"]
	
	Typically, it will be easier to use the formatFlag option rather than having to manually format your data.
*/
function postRecord(tablename, attrs, values, callback, formatFlag){
	if(formatFlag == "true"){
		tablename = surround(tablename, "`");
		formatStringArray(attrs, "`");
		formatStringArray(values, "'");
	}
	map = {
		table_name: tablename,
		attrs: attrs,
		values: values,
	};
	$.post("../api/index.php",map,callback);
}


/*
	generic call to PUT a record into a table.
	
	Variable : Description
	
	tablename : the name of the table.
	attrs : the names of the columns you wish to update in that table.
	values : the values you wish to update into the table.
	idname: the name of the column you wish to select by.
	idvalue: the target value of the column you wish to select by.
	callback : the function you wish the PUT request to call back to.
	functionFlag: boolean. If true, it will format your string arrays as needed by the php code. Must be formatted as string. e.g. "true" rather than true.
	
	PHP was difficult and requires specific syntax on generically written INSERT sql statements.
	The data passed into this method must be formatted as follows:
	
	PUT/POST Formatting.
	First: tablename and idname must be formatted as such: `tablename`
	Second: attrs must be an array (not JSON) of strings. Additionally, each string must be formatted similar to tablename.
			Example: ["`columnName1`", "`columnName2`", "`columnName3`"]
	Third: values must be an array (not JSON) of strings. Additionally, each string must be formatted as such: 'value'.
			Example: ["'value1'", "'value2'", "'value3'"]
	
	
	To make this formatting easier, I've included the formatFlag boolean parameter to automatically format your string arrays as needed.
	Only use the formatFlag option if your string arrays are unformatted.
	
	Example of formatFlag:
	tablename: "tableName" ===formatted=to===> "`tableName`"
	attrs: ["columnName1", "columnName2"] ===formatted=to===> ["`columnName1`", "`columnName2`"]
	values: ["value1", "value2"] ===formatted=to===> ["'value1'", "'value2'"]
	
	Typically, it will be easier to use the formatFlag option rather than having to manually format your data.
*/
function putRecord(tablename, attrs, values, idname, idvalue, callback, formatFlag){
	if(formatFlag == "true"){
		tablename = surround(tablename, "`");
		formatStringArray(attrs, "`");
		formatStringArray(values, "'");
		idname = surround(idname, "`");
	}
	map = {
		table_name: tablename,
		attrs: attrs,
		values: values,
		target_id_name: idname,
		target_id_value: idvalue
	};
	$.put("api/index.php", map, callback, "json");
}

/*
	Called by postRecord(tablename, attrs, values, callback, formatFlag).
	Will format an array of strings with the format.
	Format is a string that will surround each string in the passed array.
	
	Example:
	Input:
		array = ["This", "Will", "Work"];
		format = "++";
		
	Output:
		array = ["++This++", "++Will++", "++Work++"];
*/
function formatStringArray(array, format){
	for(i = 0; i < array.length; i++){
		array[i] = surround(array[i], format);
	}
}

/*
	Appends and prepends the format to the passed string.
	
	Example call:
	var myString = "Hello World!";
	myString = surround(myString, "space");
	
	myString is now: "spaceHello World!space".
*/
function surround(string, format){
	string = "" + format + string + format;
	return string;
}


/*
	shortcut console.log method.
*/
function log(data){
	console.log(data);
}

jQuery.each(["put", "delete"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
        if (jQuery.isFunction(data)) {
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