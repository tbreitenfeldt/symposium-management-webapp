//leftSideBar Methods

function removeSideBar(barId, iconId){
    $(barId).removeClass('active');
    $(barId)[0].setAttribute("hidden", true);
    $('.overlay').removeClass('active');
    toggleBodySidebar();
    if(!isMobileScreenWidth()){
        $("#content",).css("paddingRight", "20px");
        $("#footer").css("paddingRight", "20px");
    }
    $('.collapse').removeClass('show');
    $(".dropdown-button").each(function(){
        if(!$(this).hasClass("collapsed")){
            $(this).addClass("collapsed");
        }
    });
    showContentPage(); 
    $(iconId).focus();
}

function openSidebar(sidebarType, headingId){
    notifyScreenreader('dialog, press escape to cancel');
    var sidebarId = '#' + sidebarType + 'Sidebar';
    $(sidebarId)[0].removeAttribute('hidden');
    $(sidebarId).toggleClass('active');
    if(!isMobileScreenWidth()){
        $("#content").css("paddingRight", "260px");
        $("#footer").css("paddingRight", "260px");
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
    return navigator.userAgent.match("/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i");
}

function resizeMainMenu(){//change button size same when default page opens
    if(isMobile){
        var highest = $("#centerSidebarCollapse").css('width');
        var arr = new Array('#leftSidebarCollapse', '#rightSidebarCollapse');
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

function switchArrowDirection(){
    if(isMobileScreenWidth()){
        $(".arrow-button").attr('data-icon', 'arrow-left');
        $("#content",).css("paddingRight", "20px");
        $("#footer").css("paddingRight", "20px");
    }
    else{
        $(".arrow-button").attr('data-icon', 'arrow-right');
    }
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
    $('#current-font-size')[0].innerHTML = "Current Font Size: " + arr[zoomedIn];
}

function toggleGraystyle(){
    $(document.documentElement).toggleClass("gray-style-filter");
}

function toggleInvertColor(){
    $(document.documentElement).toggleClass("inverse-style-filter");
}

function turnOnGrayStyle(){
    if(currentColorSetting != "GrayStyle"){
        toggleAriaButtonPress('#color-scheme-b-o-w');
        removeCurrentColorSetting();
        toggleGraystyle();
        currentColorSetting = "GrayStyle";
    }
}

function turnOnColorDefault(){
    if(currentColorSetting != "Default"){
        console.log("Turn off " + currentColorSetting);
        removeCurrentColorSetting();
        currentColorSetting = "Default";
        console.log("Turn on " + currentColorSetting);
        toggleAriaButtonPress('#color-scheme-default');
    }
}

function turnOnInverseStyle(){
    if(currentColorSetting != "Inverse"){
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

function notifyScreenreader(message) {
    if ($("#screenreaderUINotification").length) {
        $("#screenreaderUINotification").text(message);
        setTimeout(function() {$("#screenreaderUINotification").text("");}, 5000);
    } else {
    alert("missing div region with ID of screenreaderUINotification, either remove this function  call, or add a div with that ID.");
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
    changeSize("#my-body", fontSizeStyle, arr2[zoomedIn]);  
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
var colorSetting = new Array("Default", "Graystyle","Black on White");
var currentColorSetting = colorSetting[0];


//MAIN FUNCTION

function main(){

    $("#reset-font").click(function(){
        changeFontScreen();
        zoomedIn = 0;
        setCurrentFontDisplay();
        toggleAriaButtonPress("#reset-font");
    });

    //increases font size when clicked
    $("#increase-font").click(function(){
        if(zoomedIn < maxZoomedIn){
            zoomedIn++;
            console.log("increase");
            changeFontScreen();
            resizeMainMenu(); 
            setCurrentFontDisplay();
        }
        toggleAriaButtonPress("#increase-font");
    });

    //decrease font size when clicked
    $("#decrease-font").click(function(){
        if(zoomedIn > minZoomedIn){
            zoomedIn--;
            changeFontScreen();
            resizeMainMenu();
            setCurrentFontDisplay();
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
        switchArrowDirection();
        resizeMainMenu();
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
        console.log("Please why you not working?")
    });

    $("#editMySchedule").on("click", function(){
        closeMenus();
        $("#innerContent").empty();
        $("#content").load("menuPhp/editSchedule.php");
        loadConference();
        $("#innerContent").focus();
    });

    $('#mySchedule').on("click", function(){
        closeMenus();
        $("#innerContent").empty();
        $("#content").load("menuPhp/showSchedule.php");
        let map = {"table_names": ["user_conference"], "values_to_select": ["conference_id"], "attrs": [""], "values": [""], "genFlag": "flag"};
        $.get("proxies/getProxy.php", map,function(data){startUserTable(data[0].conference_id, 1);}, "json");
        console.log($("#innerContent"));
        $("#innerContent").focus();
    });

    $("#registerForDifferentConferenceButton").on("click", function(event) {
        updateConferenceRegistration(event);
        $("#conferenceRegistrationHeading").focus();
    });

    $("#websiteLink").on("click", function()
    {
        window.open("https://sites.ewu.edu/pwdss/");
    });

    window.addEventListener("resize", onresize);

    $(window).resize(function(){
        switchArrowDirection();
        resizeMainMenu();
    });
}

$(document).ready(main);