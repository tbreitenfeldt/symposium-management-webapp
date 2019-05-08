<?php require_once "authenticateUser.php"; ?>

<!--NOTE Left and Right Menus are opposite of their variable names-->
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

    <head>
        <!-- Meta Tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>User Control Panel</title>

        <!-- Bootstrap CSS CDN -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
        
        <!-- Our Custom CSS -->
        <link rel="stylesheet" href="css/menu.css">

        <!--AJAX JS-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <!--Our custom JS-->
        <script src="js/conferenceAPIJs/databaseFunctions.js"></script>
        <script src="js/userJs/userSchedule.js"></script>
        <script src="js/userJs/mainSchedule.js"></script>
        <script src="js/userJs/userAccountRegistration.js"></script>
        <script src="js/userJs/userSettings.js"></script>
        <script src="js/loginSystemJs/loginAJAX.js"></script>
        <script src="js/utilityJs/util.js"></script>


        <!-- Font Awesome JS -->
        <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
    </head>

    <body id="my-body">
        <div class="overlay"></div> <!-- Used for shadow effect when call upon other menu -->

        <!-- user-menu -->
        <div id="user-menu" class="col-lg-12" role="navigation" aria-hidden="false" aria-label="user menu">

            <h3 id="welcome-user"> Welcome <?php echo $_SESSION["user_name"]; ?>!</h3>

            <div class="row" role="list">
                <div class="col-xs-3" role="listitem">
                    <button type="button" id="homeButton" class="btn btn-info btn-block" aria-hidden="false">
                        <span aria-label="Home">Go To<br aria-hidden="true"> Home</span>
                        <br aria-hidden="true">
                        <i class="fas fa-home fa-6x menu-item"></i>
                    </button>
                </div>
                <div class="col-xs-3" role="listitem">
                    <button type="button" id="rightSidebarCollapse" class="btn btn-info btn-block" aria-label="" aria-hidden="false" data-conferenceId="">
                        <span>Symposium<br aria-hidden="true">Scheduler</span>
                        <br aria-hidden="true">
                        <i class="fa fa-calendar fa-6x menu-item"></i>
                    </button>
                </div>
                <div class="col-xs-3" role="listitem">
                    <button type="button" id="centerSidebarCollapse" class="btn btn-info btn-block" aria-hidden="false">
                        <span>Accesibility<br aria-hidden="true">Settings</span>
                        <br aria-hidden="true">
                        <i class="fas fa-universal-access fa-6x menu-item"></i>
                    </button>
                </div>
                <div class="col-xs-3" role="listitem">
                    <button type="button" id="leftSidebarCollapse" class="btn btn-info btn-block" aria-label="" aria-hidden="false">
                        <span>User<br aria-hidden="true"> Settings</span>
                        <br aria-hidden="true">
                        <i class="fa fa-user-circle fa-6x menu-item"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- END user-menu -->

        <!-- rightSideBar -->
        <div id="rightSidebar" hidden>
            <div id="rightDismiss">
                <button href="" id="closeRightMenu" class="close-menu" aria-label="Close My Scheduler"><i class="arrow-button fas fa-arrow-right"></i> </button>
            </div>

            <div aria-label="" class="rightSidebar-header">
                <h3 id="mySchedulerHeading" tabindex="-1">My Scheduler</h3>
            </div>
            <ul class="list-unstyled components" aria-label="Menu Items">                  
                <li>
                    <a id="conferenceSchedule" role="button">View Conference Schedule</a>
                </li>
                <li>
                    <a id="mySchedule" role="button">View My Schedule</a>
                </li>
                <li>
                    <a id="editMySchedule" role="button">Edit My Schedule</a>
                </li>
                <li>
                    <a  id="aboutCon" role="button">About Conference</a>
                </li>
            </ul>

            <button id="websiteLink" type="button"  class="btn btn-primary btn-lg layout-button" role="link">View Website</button>
        </div>
        <!-- END rightSideBar -->


        <!-- centerSidebar  -->
        <div id="centerSidebar" hidden>
            <div id="centerDismiss" >
                <button href="" id="closeCenterMenu" class="close-menu" aria-label="Close Accesibility Settings"><i class="arrow-button fas fa-arrow-right"></i> </button>
            </div>

            <div class="centerSidebar-header">
                <h3 tabindex="-1" id="accessibilitySettingsHeading">Accesibility Settings</h3>
            </div>

            <ul class="list-unstyled components">
                <li class="active">
                    <button href="#potentialPageMenu25" data-toggle="collapse" class="dropdown-button" aria-label="Change Font Size">Font Size</button>
                    <ul class="collapse list-unstyled" id="potentialPageMenu25">
                        <li>
                            <h3 aria-live="polite"><span id="current-font-size">Current Font Size: 1x</span> </h3>
                        </li>
                        <li id="font-settings-li">
                            <div class="row" style="display:inline-flex">
                                <div class="col-xs-4">
                                    <button  class="btn btn-primary btn-lg layout-button" id="decrease-font" aria-label="Decrease Font Size">-</button>
                                </div>
                                <div class="col-xs-4">
                                    <button class="btn btn-primary btn-lg layout-button" id="reset-font" aria-label="Reset Font Size">Reset Font</button>
                                </div>
                                <div class="col-xs-4">
                                    <button  class="btn btn-primary btn-lg layout-button" id="increase-font" aria-label="Increase Font Size">+</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="active">
                    <button href="#toggleDisplayDropDown" data-toggle="collapse" class="dropdown-button" aria-label="Change Display Color">Color Scheme</button>
                    <ul class="collapse list-unstyled" id="toggleDisplayDropDown">
                        <li><button id="color-scheme-default" class="btn btn-primary btn-lg layout-button button-fix" aria-label="Change To Default Color Scheme">
                            Default Color Scheme
                        </button></li>
                        <li><button id="color-scheme-b-o-w" class="btn btn-primary btn-lg layout-button button-fix" aria-label="Change To Gray Color Scheme">
                            Gray Color Scheme
                        </button></li>
                        <li><button id="color-scheme-invert" class="btn btn-primary btn-lg layout-button button-fix" aria-label="Change To Inverse Color Scheme">
                            Inverse Color Scheme
                        </button></li>
                        <!--<li><button class="btn btn-primary btn-lg layout-button button-fix" aria-label="Change Display Color">Black on White Scheme</button></li>-->
                    </ul>
                </li>
            </ul>
        </div>
        <!-- END centerSidebar  -->

        <!-- leftSidebar  -->
        <div id="leftSidebar" hidden>
            <div id="leftDismiss" >
                <button  id="closeLeftMenu" class="close-menu" aria-label="Close User Settings"><i class="arrow-button fas fa-arrow-right"></i> </button>
            </div>

            <div class="leftSidebar-header">
                <h3 tabindex="-1" id="userSettingsHeading">User Settings</h3>
            </div>

            <ul class="list-unstyled components">
                <li>
                    <button class="btn btn-primary btn-lg layout-button" id="changeUserSettingsButton">Profile Settings</button>
                </li>
                <li>
                    <button  id="resetPasswordButton" class="btn btn-primary btn-lg layout-button">Reset Password</button>
                </li>
                <li>
                    <button  id="registerForDifferentConferenceButton" class="btn btn-primary btn-lg layout-button">Register for a different conference</button>
                </li>
                <li>
                    <button  class="btn btn-primary btn-lg layout-button" onclick="location.href='logout.php'">Logout</button>
                </li>
            </ul>

        </div>
        <!-- END leftSidebar  -->


        <!-- content  -->
        <div id="content" tabindex="-1">
                <div id="conferenceChooser" role="main" hidden="true">
                    <h2 id="conferenceRegistrationHeading" tabindex="-1">Conference Registration</h2>    
                    <label for="conferenceChooser">Select a conference to register for</label>
                    <select id="conferenceChooserListbox"></select>
                    <input type="button" id ="conferenceRegisterButton" value="Register for Conference" />
                </div>

            <div id="innerContent" tabindex="-1">
            </div>
        </div>
        <!-- END content  -->

        <?php include "./includes/footer.php"; ?>

        <!--Message for only screenreaders. read when region is shown, shouldn't be visually visible.-->
        <div id="screenreaderUINotification" class="screenreader-text" aria-live="polite"></div>

        <!-- jQuery Custom Scroller CDN -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
        <!-- Popper.JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
        <!-- Bootstrap JS -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
        <!-- Our Custom JS -->
        <script src="js/userJs/menu.js"></script>
    </body>
</html>