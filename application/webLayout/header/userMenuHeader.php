<?php require_once "authenticateUser.php"; ?>

<!--NOTE Left and Right Menus are opposite of their variable names-->
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
       
        <script src="js/conferenceAPIJs/databaseFunctions.js"></script>

        <!-- Bootstrap CSS CDN -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
        <!-- Our Custom CSS -->
        <link rel="stylesheet" href="css/menu.css">
        <!-- Font Awesome JS -->

        <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
    </head>

    <body>
        <div class="overlay"></div> <!-- Used for shadow effect when call upon other menu -->

        <!-- user-menu -->
        <div id= "user-menu" class="col-lg-12" aria-hidden="false">
            <div class="row">
                <div class="col-xs-4">
                    <button type="button" id="rightSidebarCollapse" class="btn btn-info btn-block" aria-label="" aria-hidden="false">
                        <span>Symposium<br/>Scheduler</span>
                        <br/>
                        <i class="fa fa-calendar fa-6x menu-item"></i>
                    </button>
                </div>
                <div class="col-xs-4">
                    <button type="button" id="centerSidebarCollapse" class="btn btn-info btn-block" aria-label="" aria-hidden="false">
                        <span>Accesibility<br/>Settings</span>
                        <br/>
                        <i class="fas fa-universal-access fa-6x menu-item"></i>
                    </button>
                </div>
                <div class="col-xs-4">
                    <button type="button" id="leftSidebarCollapse" class="btn btn-info btn-block" aria-label="" aria-hidden="false">
                        <span>User<br/> Settings</span>
                        <br/>
                        <i class="fa fa-user-circle fa-6x menu-item"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- END user-menu -->

        <!-- Header -->
        <!-- END Header -->

        <!-- rightSideBar -->

        <nav id="rightSidebar" hidden aria-label="">
            <div id="rightDismiss">
                <button href="" alt="close menu button" id="closeRightMenu" class="close-menu" aria-label="Close My Scheduler"><i class="fas fa-arrow-left"></i> </button>
            </div>

            <div aria-label="" class="rightSidebar-header">
                <h3>My Scheduler</h3>
            </div>
            <ul class="list-unstyled components" aria-label="Menu Items">
                <p id="symposium-title" alt="Title">Pacific Northwest Disability Symposium 2019</p>
                <li>
                    <button href="#homeSubmenu2" data-toggle="collapse" class="dropdown-button" aria-label="Home Drop Down List"> Home</button>
                    <ul class="collapse list-unstyled" id="homeSubmenu2">
                        <li>
                            <a href="#" aria-label="">Home 1</a>
                        </li>
                        <li>
                            <a href="#" aria-label="">Home 2</a>
                        </li>
                        <li>
                            <a href="#" aria-label="">Home 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                <a href="#" aria-label="">About </a>
                </li>
                <li>
                    <button href="#homeSubmenu3" data-toggle="collapse" class="dropdown-button" aria-label="Page Drop Down List">Pages</button>
                    <ul class="collapse list-unstyled" id="homeSubmenu3">
                        <li>
                            <a href="#" aria-label="">Page 1</a>
                        </li>
                        <li>
                            <a href="#" aria-label="">Page 2</a>
                        </li>
                        <li>
                            <a href="#" aria-label="">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" aria-label="Contact Info">Contact Information</a>
                </li>
                <li>
                    <a href="#" aria-label="">Assistance</a>
                </li>
            </ul>

        <button type="button" href="#" class="btn btn-primary btn-lg layout-button" aria-label="Download Articles From Symposium">View Articles</button>

        <div class="container" style="outline:0">
            <div class="fl-page-footer-text fl-page-footer-text-2" aria-label="Eastern Washington University">
                <a class="logo" href="https://www.ewu.edu"><img src="https://sites.ewu.edu/dss/wp-content/themes/ewusites/images/footer-logo.png" alt="Eastern Washington University"></a>
                <br/>
                    509.359.6200
                <br/>
                <em>EWU expands opportunities for personal transformation through excellence in learning.</em>
            </div>
        </div>
        </nav>


        <!-- END rightSideBar -->
                                                                                                                                                                                                                                                                                                                                                                                                                        o0- 

        <!-- centerSidebar  -->
        <nav id="centerSidebar" hidden>
            <div id="centerDismiss" >
                <button href="" alt="close menu button" id="closeCenterMenu" class="close-menu" aria-label="Close User Settings"><i class="fas fa-arrow-right"></i> </button>
            </div>


            <div class="centerSidebar-header">
                <h3>Accesibility Settings</h3>
            </div>

            <ul class="list-unstyled components">
                <li class="active">
                    <button href="#potentialPageMenu25" data-toggle="collapse" class="dropdown-button" aria-label="Change Font Size">Font Size</button>
                    <ul class="collapse list-unstyled" id="potentialPageMenu25">
                        <li>
                            <h3 aria-live="polite"><span id="current-font-size">Default</span> </h3>
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
                        <li><button id="color-scheme-default" class="btn btn-primary btn-lg layout-button button-fix" aria-label="Change To Default Color Scheme">Default Color Scheme</button></li>
                        <li><button id="color-scheme-b-o-w" class="btn btn-primary btn-lg layout-button button-fix" aria-label="Change To Gray Color Scheme">Gray Color Scheme</button></li>
                        <li><button id="color-scheme-invert" class="btn btn-primary btn-lg layout-button button-fix" aria-label="Change To Inverse Color Scheme">Inverse Color Scheme</button></li>
                        <!--<li><button class="btn btn-primary btn-lg layout-button button-fix" aria-label="Change Display Color">Black on White Scheme</button></li>-->
                    </ul>
                </li>
            </ul>


            <div class="container">
                <div class="fl-page-footer-text fl-page-footer-text-2">
                    <a class="logo" href="https://www.ewu.edu"><img src="https://sites.ewu.edu/dss/wp-content/themes/ewusites/images/footer-logo.png" alt="Eastern Washington University" aria-label="Eastern Washington Univerity"></a>
                    <br/>
                        509.359.6200
                    <br/>
                    <em>EWU expands opportunities for personal transformation through excellence in learning.</em>
                </div>
            </div>
        </nav>
        <!-- END centerSidebar  -->



        <!-- leftSidebar  -->
        <nav id="leftSidebar" hidden>
            <div id="dismiss" >
                <button href="" alt="close menu button" id="closeRightMenu" class="close-menu" aria-label="Close User Settings"><i class="fas fa-arrow-right"></i> </button>
            </div>


            <div class="leftSidebar-header">
                <h3>User Settings</h3>
            </div>

            <ul class="list-unstyled components">
                <h1 aria-label="">Welcome <?php echo htmlspecialchars($_SESSION["user_name"]); ?></h1>
                <li class="active">
                <button href="#potentialPageMenu2" data-toggle="collapse" class="dropdown-button" aria-label="Neat Stuff...">Page</button>
                    <ul class="collapse list-unstyled" id="potentialPageMenu2">
                        <li>
                            <a href="#" aria-label="">Potential Page 1</a>
                        </li>
                        <li>
                            <a href="#" aria-label="">Potential Page 2</a>
                        </li>
                        <li>
                            <a href="#" aria-label="">Potential Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" aria-label="">About </a>
                </li>
                <li>
                    <a href="#" aria-label="Contact Info">Contact Information</a>
                </li>
                <li>
                    <a href="#" aria-label="">Assistance</a>
                </li>
            </ul>

            <button  class="btn btn-primary btn-lg layout-button" onclick="location.href='logout.php'">Logout</button>
            <button  class="btn btn-primary btn-lg layout-button" onclick="location.href='resetPassword.php'">Reset Password</button>

            <div class="container">
                <div class="fl-page-footer-text fl-page-footer-text-2">
                    <a class="logo" href="https://www.ewu.edu"><img src="https://sites.ewu.edu/dss/wp-content/themes/ewusites/images/footer-logo.png" alt="Eastern Washington University" aria-label="Eastern Washington Univerity"></a>
                    <br/>
                        509.359.6200
                    <br/>
                    <em>EWU expands opportunities for personal transformation through excellence in learning.</em>
                </div>
            </div>
        </nav>
        <!-- END leftSidebar  -->
