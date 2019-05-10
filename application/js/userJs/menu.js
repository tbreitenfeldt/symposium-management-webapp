//leftSideBar Methods

function removeSideBar(barId, iconId){
    $(barId).removeClass('active');
    $(barId)[0].setAttribute("hidden", true);
    $('.overlay').removeClass('active');
    toggleBodySidebar();
    if(!isMobileScreenWidth()){
        $("#content",).css("paddingLeft", "20px");
        $("#footer").css("paddingLeft", "20px");
    }
    $('.collapse').removeClass('show');
    $(".dropdown-button").attr("aria-expanded", false);
    
    showContentPage(); 
    $(iconId).focus();
}

function openSidebar(sidebarType, headingId){
    notifyScreenreader('dialog, press escape to cancel');
    var sidebarId = '#' + sidebarType + 'Sidebar';
    $(sidebarId)[0].removeAttribute('hidden');
    $(sidebarId).toggleClass('active');
    if(!isMobileScreenWidth()){
        $("#content").css("paddingLeft", "260px");
        $("#footer").css("paddingLeft", "260px");
    }
    toggleBodySidebar();
    $('.overlay').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    hideContentPage();
    $(headingId).focus();
}

function closeLeftSideBar(){
    notifyScreenreader("closed user settings");
    removeSideBar("#leftSidebar", "#leftSidebarCollapse");
}


//centerSideBar Methods

function closeCenterSideBar(){
    notifyScreenreader("closed accessibility settings");
    removeSideBar("#centerSidebar", "#centerSidebarCollapse");
}


//rightSideBar Methods
function closeRightSideBar(){
    notifyScreenreader("closed my scheduler");
    removeSideBar("#rightSidebar", "#rightSidebarCollapse");
}


//Icon Menu Methods

function hideContentPage(){
    $("#user-menu").attr("aria-hidden", "true");
    $("#footer").attr("aria-hidden", "true");
    $("#content").attr("aria-hidden", "true");
}

function showContentPage(){
    $("#user-menu").attr("aria-hidden", "false");
    $("#footer").attr("aria-hidden", "false");
    $("#content").attr("aria-hidden", "false");
}


//All Toggle Menu Functions

function isMobile(){
    return getPageWidth() <= 425;
}

function resizeMainMenu(){//change button size same when default page opens
    if(isMobile() && $('#user-menu').children().length != 1){
        var highest = (getPageWidth()/4) - 5;
        var arr = new Array('#centerSidebarCollapse','#leftSidebarCollapse', '#rightSidebarCollapse', '#homeButton');
        var resizeMenu = arr.join(',');
        $(resizeMenu).css('width', highest);
    }
}

function toggleBodySidebar(){
    $("body").toggleClass("no-scroll");
}

function getPageWidth(){
    return $(window).width();
}

function isMobileScreenWidth(){
    return getPageWidth() <= "425";
}

function closeMenus(){
    if($('#rightSidebar').hasClass('active')){
        closeRightSideBar();
    }
    else if($('#leftSidebar').hasClass('active')){
        closeLeftSideBar();
    }
    else if($('#centerSidebar').hasClass('active')){
        closeCenterSideBar();
    }
}

//Accesibility Methods

function changeSize(element, style, size){
    $(element).css(style, size);
}


function setCurrentFontDisplay(){
    if(zoomedIn == ""){
        zoomedIn = 0;
    }
    $('#current-font-size')[0].innerHTML = "Current Font Size: " + arr[zoomedIn];
}

function toggleGraystyle(){
    $(document.documentElement).toggleClass("gray-style-filter");
}

function toggleInvertColor(){
    $(document.documentElement).toggleClass("inverse-style-filter");
}

function turnOnGrayStyle(){
    if(currentColorSetting != "GrayStyle")
    {
        removeCurrentColorSetting();
        toggleGraystyle();
        currentColorSetting = "GrayStyle";
        toggleAriaButtonPress('#color-scheme-b-o-w');
    }
}

function turnOnColorDefault(){
    if(currentColorSetting != "Default")
    {
        removeCurrentColorSetting();
        currentColorSetting = "Default";
        console.log("Default overcame");
        toggleAriaButtonPress('#color-scheme-default');
    }
}

function turnOnInverseStyle(){
    if(currentColorSetting != "Inverse")
    {
        removeCurrentColorSetting();
        toggleInvertColor();
        currentColorSetting = "Inverse";
        toggleAriaButtonPress('#color-scheme-inverse');
    }
}

function removeCurrentColorSetting(){
    if(currentColorSetting == "Inverse"){
        toggleInvertColor();
        toggleAriaButtonPress('#color-scheme-inverse');
    }
    else if(currentColorSetting == "GrayStyle"){
        toggleGraystyle();
        toggleAriaButtonPress('#color-scheme-b-o-w');
    }
}

function toggleAriaButtonPress(elementId) {
    var element = $(elementId);
    // Check to see if the button is pressed
    var pressed = $(element).attr("aria-pressed") === "true";
    // Change aria-pressed to the opposite state
    element.attr("aria-pressed", !pressed);
  }

function changeFontScreen(){
    changeSize("#innerContent", fontSizeStyle, arr2[zoomedIn]);  
    changeSize(".checkbox", "width", arr3[zoomedIn]);
    changeSize(".checkbox", "height", arr3[zoomedIn]);
}

//Global Variables for functionality

//https://www.pair.com/support/kb/resize-sites-font-jquery/
var buttonText = 'menu-item';
var menuButtonClass = '.fa-6x';
var fontSizeStyle = 'font-size';
var contentId = '#content';
var stylePaddingTop = 'padding-top';
var header = 'header';
var tableHead = 'th';


//resets the font size when clicked

var resetFont = $(buttonText).css(fontSizeStyle);
var originalMarginTop = $(contentId).css(stylePaddingTop);
var originalHeaderSize = "1rem";
var originalTableHeadSize = originalHeaderSize;

var arr = new Array('1x', '2x', '3x');
var arr2 = new Array('initial', 'x-large', 'xx-large');
var arr3 = new Array('13px', '20px', '50px');

var maxZoomedIn = 2;
var minZoomedIn = 0;
var defaultIn = 0;

if(isMobile()){
    maxZoomedIn = 1;
    minZoomedIn = 0;
}

var zoomedIn = defaultIn;


resizeMainMenu();
var colorSetting = new Array("Default", "Graystyle","Inverse");
var currentColorSetting = colorSetting[0];

function setCookie(cname, cvalue) {
    var expires = "expires=";
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function onloadCook(){
    if(getCookie("zoomedIn") != undefined){
        zoomedIn = getCookie("zoomedIn");
        currentColorSetting = getCookie("currentColorSetting");

        if(currentColorSetting == "GrayStyle"){
            toggleGraystyle();
        }
        else if(currentColorSetting == "Inverse"){
            toggleInvertColor();
        }
    }
    else{
        setCookie("currentColorSetting","Default");
        setCookie("zoomedIn","0");
    }
}

function onFontChange(){
    changeFontScreen();
    resizeMainMenu(); 
    setCurrentFontDisplay();
}

//MAIN FUNCTION
onloadCook();
function main(){
    onFontChange();
    $(window).on("unload", function(evt) {
        setCookie("currentColorSetting",currentColorSetting);
        setCookie("zoomedIn",zoomedIn);
        // Google Chrome requires returnValue to be set
        evt.returnValue = '';
        return null;
    });

    

    

    $("#reset-font").click(function(){
        zoomedIn = 0;
        changeFontScreen();
        setCurrentFontDisplay();
        toggleAriaButtonPress("#reset-font");
    });

    //increases font size when clicked
    $("#increase-font").click(function(){
        if(zoomedIn < maxZoomedIn){
            zoomedIn++;
            onFontChange();
        }
        toggleAriaButtonPress("#increase-font");
    });

    //decrease font size when clicked
    $("#decrease-font").click(function(){
        if(zoomedIn > minZoomedIn){
            zoomedIn--;
            onFontChange();
        }
        toggleAriaButtonPress("#decrease-font");
    });

    //close sidebars 
    $('#leftDismiss, #centerDismiss, #rightDismiss, .overlay').on('click', closeMenus);

    //ALL MENU(S)
    $(document).keyup(function(e) {
        if(e.key == "Escape"){
            closeMenus();
        }
    });

    window.addEventListener("resize", onresize);

    $(window).resize(function(){
        resizeMainMenu();
    });

    $("#homeButton").on("click", function(event) {
        document.location.reload();
    });

    //ICON MENU

    $('#leftSidebarCollapse').on('click', function(){
        openSidebar('left', '#userSettingsHeading');
    });

    $('#centerSidebarCollapse').on('click', function () {
        openSidebar('center', '#accessibilitySettingsHeading');
    });

    $('#rightSidebarCollapse').on('click', function () {
        openSidebar('right', '#mySchedulerHeading');
    });

    $('#color-scheme-b-o-w').on('click',  turnOnGrayStyle);
    $('#color-scheme-default').on('click',  turnOnColorDefault);
    $('#color-scheme-invert').on('click',  turnOnInverseStyle);


    //MyScheduler Click Event(s)
    $('#aboutCon').on("click", function(){
        closeMenus();
        $("#innerContent").empty();
        $("#content").load("menuPhp/aboutConference.php");
        getConferenceInformation();
        $("#innerContent").focus();
    });

    $("#editMySchedule").on("click", function(){
        closeMenus();
        $("title").text("Edit Personal Schedule");
        $("#innerContent").empty();
        $("#content").load("menuPhp/editSchedule.php");
        loadConference();
        $("#innerContent").focus();
    });

    $('#mySchedule').on("click", function(){
        closeMenus();
        $("title").text("My Scheduler");
        $("#innerContent").empty();
        $("#content").load("menuPhp/showSchedule.php");
        let map = {"table_names": ["user_conference"], "values_to_select": ["conference_id"], "attrs": [""], "values": [""], "genFlag": "flag"};
        $.get("proxies/getProxy.php", map,function(data){startUserTable(data[0].conference_id, 1);}, "json");
        $("#innerContent").focus();
    });

    $("#registerForDifferentConferenceButton").on("click", function(event) {
        closeMenus();
        $("title").text("Register for Conference");
        $("#innerContent").empty();
        updateConferenceRegistration(event);
        $("#conferenceRegistrationHeading").focus();
    });

    $("#changeUserSettingsButton").on("click", function(event) {
        closeMenus();
        $("title").text("Profile Settings");
        $("#innerContent").empty();
        $("#content").load("userSettings.php", populateCurrentUserSettings);
        $("#userSettingsHeading").focus();
    });
    
    $('#conferenceSchedule').on("click", function(){
        closeMenus();
        $("#innerContent").empty();
        $("#content").load("menuPhp/conferenceSchedule.php");
        getConferenceInfoAndSchedule();
        $("#innerContent").focus();
    });

    $("#resetPasswordButton").on("click", function(event) {
        closeMenus();
        $("title").text("Reset Password");
        $("#innerContent").empty();
        $("#content").load("resetPassword.php");
        $("#resetPasswordHeading").focus();
    });

    $("#websiteLink").on("click", function() {
        window.open("https://sites.ewu.edu/pwdss/");
    });

    window.addEventListener("resize", onresize);

    $(window).resize(function(){
        resizeMainMenu();
    });
    resizeMainMenu();

}

$(document).ready(main);