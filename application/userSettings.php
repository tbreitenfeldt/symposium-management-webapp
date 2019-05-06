<?php session_start(); ?>

<div id="userSettingsRegion" role="main">
  <h2 id="userSettingsHeading" tabindex="-1">Profile Settings</h2>

  <form id="userSettingsForm" method="put" onSubmit="return updateUserData(event)">
    <div id="outputRegion" aria-live="polite" ></div>

    <label for="user_name">User Name</label>
    <input type="text" id="user_name" class="userSettings" name="user_name" data-value="<?php ECHO $_SESSION["user_name"]; ?>" required="required" />
    <label for="user_email">User Email</label>
    <input type="email" id="user_email" class="userSettings" name="user_email" data-value="<?php ECHO $_SESSION["user_email"]; ?>" required="required" />

    <fieldset>
    <h2>Conference Event Notification Settings</h2>
    <input type="checkbox" id="user_notifyByEmail" class="userSettings" name="user_notifyByEmail" data-value="<?php echo $_SESSION['user_notifyByEmail']; ?>" />
    <label for="user_notifyByEmail">Notify me by email:</label>
    <input type="checkbox" id="user_notifyByPhone" class="userSettings" name="user_notifyByPhone" data-value="<?php echo $_SESSION['user_notifyByPhone']; ?>" onchange="togglePhoneRegion" />
    <label for="user_notifyByPhone">Notify me by text message</label>
    </fieldset>

    <fieldset id="phoneRegion" style="display: none;">
      <label for="user_phone">Phone:</label>
      <input type="phone" id="user_phone" class="userSettings" name="user_phone" data-value="<?php echo $_SESSION['user_phone']; ?>" />
      <p>Please choose your carrier from the list. This is necessary to send you text notifications. We support only a small number of carriers,
      so we appoligize for any inconvenience.<br aria-hidden="true">
      <label for="user_phoneCarrier">Carrier:</label>
      <select id="user_phoneCarrier" class="userSettings" name="user_phoneCarrier" data-value="<?php echo $_SESSION['user_phoneCarrier']; ?>">
          <option value="" selected="selected"></option>
          <option value="at&t">at&t</option>
          <option value="boost mobil">boost mobil</option>
          <option value="metro pcs">metro pcs</option>
          <option value="nextel">nextel</option>
          <option value="sprint">sprint</option>
          <option value="ting">ting</option>
          <option value="t-mobile">t-mobile</option>
          <option value="tracfone">tracfone</option>
          <option value="u.s. cellular">u.s. cellular</option>
          <option value="virgin mobile">virgin mobile</option>
          <option value="verizon">verizon</option>
      </select></p>
      <!--Message for only screenreaders. read when region is shown, shouldn't be visually visible.-->
      <div id="screenreaderPhoneRegionMessage" class="screenreader-text" role="alert">Phone Information expanded below</div>
    </fieldset>

    <input type="submit" id="updateUserDataButton" value="Change" />
  </form>
</div>