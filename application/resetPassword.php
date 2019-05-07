        <div class="overlay"></div> <!-- Used for shadow effect when call upon other menu -->


        <div id="content-inside">
          <h2 id="resetPasswordHeading" tabindex="-1">Reset Password</h2>


          <!-- content -->
          <div id="content" role="main" aria-label="Reset Password Form">

            <form id="userLogonForm" method="POST" action="loginAPI/resetPasswordFunctions.php" type="json" onSubmit="return submitForm(event)">
              <div id="outputRegion" aria-live="polite" ></div>

              <fieldset>
              <label for="old_password">Current Password:</label>
              <br aria-hidden="true">
              <input type="password" id="old_password" name="old_password" />
              <br aria-hidden="true">
              <label for="user_password">New Password:</label>
              <br aria-hidden="true">
              <input type=password id="user_password" name="user_password" />
              <br aria-hidden="true">
              <label for="confirm_password">Confirm New Password:</label>
              <br aria-hidden="true">
              <input type=password id="confirm_password" name="confirm_password" />
              <br aria-hidden="true">
              <input type="submit" id="registerButton" value="Reset Password" />
              <br aria-hidden="true">
              <input type="button" onclick="window.location='<?php echo LOGGEDIN_LANDING_PAGE_NAME; ?>'" id="cancelButton" value="Cancel" />
              </fieldset>
            </form>
          </div>
        </div>
        <!-- END content  -->

