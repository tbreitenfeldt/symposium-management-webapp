<!-- user-menu -->
<div id="user-menu" class="col-lg-12" role="navigation" aria-hidden="false" aria-label="user menu">
            <div class="row">
                <div class="col-xs-4">
                    <button type="button" id="centerSidebarCollapse" class="btn btn-info btn-block" aria-label="" aria-hidden="false" aria-expanded="false">
                        <span>Accesibility<br aria-hidden="true">Settings</span>
                        <br aria-hidden="true">
                        <i class="fas fa-universal-access fa-6x menu-item"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- END user-menu -->                                                                                                                                                                                                                                                                                                                                                                                                                

        <!-- centerSidebar  -->
        <nav id="centerSidebar" aria-label="Accesibility Settings">

            <div id="centerDismiss" >
                <button href="" id="closeCenterMenu" class="close-menu" aria-label="Close Accesibility Settings"><i class="arrow-button fas fa-arrow-right"></i> </button>
            </div>

            <div class="centerSidebar-header">
                <h3 tabindex="0" id="accessibilitySettingsHeading">Accesibility Settings</h3>
            </div>

            <ul class="list-unstyled components">
                <li class="active">
                    <button href="#potentialPageMenu25" data-toggle="collapse" class="dropdown-button" aria-label="Change Font Size" aria-live="polite">Font Size</button>
                    <ul class="collapse list-unstyled" id="potentialPageMenu25">
                        <li>
                            <h3 aria-live="polite" id="current-font-size">Current Font Size: 1x </h3>
                        </li>
                        <li id="font-settings-li">
                            <div class="row" style="display:inline-flex">
                                <div class="col-xs-4">
                                    <button  class="btn btn-primary btn-lg layout-button" id="decrease-font" aria-label="Decrease Font Size">-</button>
                                </div>
                                <div class="col-xs-4">
                                    <button class="btn btn-primary btn-lg layout-button" id="reset-font" aria-pressed="false" aria-label="Reset Font Size">Reset Font</button>
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
                    <ul class="collapse list-unstyled" id="toggleDisplayDropDown" >
                        <li>
                            <button id="color-scheme-default" class="btn btn-primary btn-lg layout-button button-fix" aria-pressed="false" aria-label="Change To Default Color Scheme">Default Color Scheme</button>
                        </li>
                        <li>
                            <button id="color-scheme-b-o-w" class="btn btn-primary btn-lg layout-button button-fix" aria-pressed="false" aria-label="Change To Gray Color Scheme">Gray Color Scheme</button>
                        </li>
                        <li>
                            <button id="color-scheme-invert" class="btn btn-primary btn-lg layout-button button-fix" aria-pressed="false" aria-label="Change To Inverse Color Scheme">Inverse Color Scheme</button>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- END centerSidebar  -->