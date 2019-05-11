<?php
parse_str(file_get_contents('php://input'), $_PUT);
if (isset($_PUT["table_name"])) {

	try {
		$table = $_PUT["table_name"];
		$tablecheck  = preg_replace("/[^a-zA-Z0-9]/", "", $table);
		$target_name = (array) $_PUT["target_id_name"];
		$target_value = (array) $_PUT["target_id_value"];
		$attrs = (array) $_PUT["attrs"];
		$values = (array) $_PUT["values"];
		
		//check which table is trying to be accessed
		//check if the put call includes a user_id or admin_id in it's target_name array
		//check if the user_id or admin_id entered in target_name, target_value, attrs or values is the same as the session ids.
		//PUT requests must include a user_id or admin_id in it's call and it must match up to the current session variable.

        //Restrictions on Put operations______________________________________________________________________________

        //Check if the table is user_accounts or admin_accounts
		if($tablecheck == "useraccounts" || $tablecheck ==  "adminaccounts" ) {
		    //check if the special flag for updating user/admin account data is set
		    if(!(isset($_PUT["updateUserDataFlag"]))){
		      exit("Access Restricted - 1");   
		    }
		    //if it is, continue enforcing restrictions, specifically if they are trying to update any other field
            // besides the ones we allow a user/admin to update.
		    else {
		        $access = 1;
		        if($tablecheck == "useraccounts"){
		            for($i = 0; $i < sizeof($attrs); $i++){
		                $curattrs = preg_replace("/[^a-zA-Z0-9]/", "", $attrs[$i]);
		                if(!($curattrs == "userid" || $curattrs == "username" || $curattrs == "userphone" || $curattrs == "useremail")){
		                    $access = 0;
		                }
		            }
		        }
		        else if ($tablecheck == "adminaccounts"){
		            for($i = 0; $i < sizeof($attrs); $i++){
		                $curattrs = preg_replace("/[^a-zA-Z0-9]/", "", $attrs[$i]);
		                if(!($curattrs == "adminid" || $curattrs == "adminname" || $curattrs == "adminemail")){
		                    $access = 0;
		                }
		            }
		        }
		        if($access = 0) exit("Access Restricted - 11");
		    }
        //check if the table is the user_schedule or user_conference table.
        //If it is, check to make sure that one of the parameters entered is user_id and whether that user_id matches
        // the user_id that belongs to the user submitting this request.
        //The idea here is that we don't want malicious users to have access to user_schedule/user_conference data that
        // doesn't specifically belong to that user.
		} else if ($tablecheck == "userschedule" || $tablecheck == "userconference"){
		    for($i = 0; $i < sizeof($attrs); $i++){
		        $curattrs = preg_replace("/[^a-zA-Z0-9]/", "", $attrs[$i]);
		        if($curattrs == "userid"){
		            if($values[$i] != $uid) exit("Access Restricted (uid mismatch)");
		        }
		    }
		    $access = 0;

		    for($i = 0; $i < sizeof($target_name); $i++){
		        $target_name_cleaned = preg_replace("/[^a-zA-Z0-9]/", "", $target_name[$i]);
		        if($target_name_cleaned == "userid") {
		            if($target_value[$i] != $uid) exit("Access Restricted (uid mismatch)");
		            else $access = 1;
		        }
		    }
		    if($access < 1) exit("Access Restricted - 2");
        //For every other table in our database system, there is an associated admin_id that we must enforce.
        //These tables are the event and conference tables. Each record there is owned by an admin account with an
        // associated admin_id. So we make sure that the user submitting this request is passing in an admin_id and that
        // the admin_id entered matches the admin_id they own in the Session variable.
		} else {
		    $access = 0;
		    for($i = 0; $i < sizeof($attrs); $i++){
		        $curattrs = preg_replace("/[^a-zA-Z0-9]/", "", $attrs[$i]);
		        if($curattrs == "adminid"){
		            if($values[$i] != $aid) exit("Access Restricted (aid mismatch)");
		            else $access = 1;
		        }
		    }
		    for($i = 0; $i < sizeof($target_name); $i++){
		        $target_name_cleaned = preg_replace("/[^a-zA-Z0-9]/", "", $target_name[$i]);
		        if($target_name_cleaned == "adminid") {
		            if($target_value[$i] != $aid) exit("Access Restricted (aid mismatch)");
		            else $access = 1;
		        }
		    }
		    if($access < 1) exit("Access Restricted - 3");
		}
		
		//Now that restrictions are over, we are going to create the SQL command that we pass to our pdoUtil object.
		$sql = "UPDATE $table SET ";
		for($i = 0; $i < sizeof($attrs); $i++){
			$sql .= $attrs[$i] . " = ?, ";
		}
		$sql = substr($sql, 0, strlen($sql) -2);
		
		$sql .= " WHERE ";
		
		for($i = 0; $i < sizeof($target_name); $i++){
		    $sql .= $target_name[$i] . " = ? AND ";
		}
		$sql = shorten($sql, strlen(" AND "));
		
		$values = array_merge($values, $target_value);
		
		$result = $pdoUtil->query($sql,$values);
		http_response_code(201);
		echo json_encode("success");
	} catch (Exception $e) {
		error_log($e->getMessage());
		exit('Error processing');
	}
}
?>