    <!-- Our Custom CSS -->
    <link rel="stylesheet" href="css/menu/menu.css">
        
        
<div class="overlay"></div> <!-- Used for shadow effect when call upon other menu -->
        <div id="content-inside">
            <form  aria-label="Reset Password Form" id="userLogonForm" method="POST" action="loginAPI/resetPasswordFunctions.php" type="json" onSubmit="return submitForm(event)">
              <div id="outputRegion" aria-live="polite" ></div>
              <h2 id="resetPasswordHeading" tabindex="-1">Reset Password</h2>

              <fieldset>
                <label for="old_password">Current Password:</label>
                <input type="password" id="old_password" name="old_password" />
                <label for="user_password">New Password:</label>
                <input type=password id="user_password" name="user_password" />
                <label for="confirm_password">Confirm New Password:</label>
                <input type=password id="confirm_password" name="confirm_password" />
                <input type="submit" id="registerButton" value="Reset Password" />
                <input type="button" onclick="window.location='<?php echo LOGGEDIN_LANDING_PAGE_NAME; ?>'" id="cancelButton" value="Cancel" />
              </fieldset>
            </form>
        </div>