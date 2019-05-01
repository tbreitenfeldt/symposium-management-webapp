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
    $(iconId).focus();
    $('.collapse').removeClass('show');
    $(".dropdown-button").each(function(){
        if(!$(this).hasClass("collapsed")){
            $(this).addClass("collapsed");
        }
    });
    showUserMenu(); 
}

function openSidebar(sidebarType, headingId){
    var sidebarId = '#' + sidebarType + 'Sidebar';
    $(sidebarId)[0].removeAttribute('hidden');
    hideUserMenu();
    $(sidebarId).toggleClass('active');
    if(!isMobileScreenWidth()){
        $("#content").css("paddingRight", "260px");
        $("#footer").css("paddingRight", "260px");
    }
    toggleBodySidebar();
    $('.overlay').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $(sidebarId + 'Collapse').attr('aria-expanded', 'true');
    $(headingId).focus();  
}

function closeLeftSideBar(){
    removeSideBar("#leftSidebar", "#leftSidebarCollapse");
}


//centerSideBar Methods

function closeCenterSideBar(){
    removeSideBar("#centerSidebar", "#centerSidebarCollapse");
}


//rightSideBar Methods
function closeRightSideBar(){
    removeSideBar("#rightSidebar", "#rightSidebarCollapse");
}


//Icon Menu Methods

function hideUserMenu(){ //menu that is center of page with three buttons that call upon respective menus
    $("#user-menu").attr("aria-hidden", "true");
}

function showUserMenu(){
    $("#user-menu").attr("aria-hidden", "false");
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

function changeSize(element, style, multiplier){
    var originalFontSize = $(element).css(style);
    var originalFontNumber = parseFloat(originalFontSize);
    var newFontSize = originalFontNumber*multiplier;
    $(element).css(style, newFontSize);
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
    }
}

function turnOnInverseStyle(){
    if(currentColorSetting != "Inverse"){
        removeCurrentColorSetting();
        toggleInvertColor();
        currentColorSetting = "Inverse";
    }
}

function removeCurrentColorSetting(){
    if(currentColorSetting == "Inverse"){
        toggleInvertColor();
    }
    else if(currentColorSetting == "GrayStyle"){
        toggleGraystyle();
    }
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
var arr3 = new Array('13px', '19px', '26px');

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
        $(menuButtonClass).css(fontSizeStyle, "");
        $(contentId).css(stylePaddingTop, originalMarginTop);
        $(header).css(fontSizeStyle, originalHeaderSize);
        $(tableHead).css(fontSizeStyle, originalTableHeadSize);
        changeSize("#innerContent", fontSizeStyle, arr3[defaultIn]);   
        changeSize("form input:checkbox", "width", arr3[defaultIn]);
        changeSize("form input:checkbox", "height", arr3[zoomedIn])
        zoomedIn = 0;
        setCurrentFontDisplay();
    });

    //increases font size when clicked
    $("#increase-font").click(function(){
        if(zoomedIn < maxZoomedIn){
            zoomedIn++;
            changeSize("innerContent", fontSizeStyle, arr2[zoomedIn]);  
            resizeMainMenu(); 
            setCurrentFontDisplay();
        }
    });

    //decrease font size when clicked
    $("#decrease-font").click(function(){
        if(zoomedIn > minZoomedIn){
            zoomedIn--;
            changeSize("#innerContent", fontSizeStyle, arr2[zoomedIn]);
            resizeMainMenu();
            setCurrentFontDisplay();
        }
    });

    //close LEFT SIDE MENU
    $('#leftDismiss, .overlay').on('click',  function(event) {
        $('#leftSidebarCollapse').attr('aria-expanded', 'false');
        closeLeftSideBar(event);
    });

    //close center MENU
    $('#centerDismiss, .overlay').on('click', function(event) {
        $('#centerSidebarCollapse').attr('aria-expanded', 'false');
        closeCenterSideBar(event);
    });

    //close RIGHT SIDE menu
    $('#rightDismiss, .overlay').on('click', function(event) {
        $('#rightSidebarCollapse').attr('aria-expanded', 'false');
        closeRightSideBar(event);
    });

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
    });

    $("#editMySchedule").on("click", function(){
        closeMenus();
        $("#innerContent").empty();
        $("#content").load("menuPhp/editSchedule.php");
        init();
    });

    $('#mySchedule').on("click", function(){
        closeMenus();
        $("#innerContent").empty();
        $("#content").load("menuPhp/showSchedule.php");
        let map = {"table_names": ["user_conference"], "values_to_select": ["conference_id"], "attrs": [""], "values": [""], "genFlag": "flag"};
        $.get("proxies/getProxy.php", map,function(data){startUserTable(data[0].conference_id, 1);}, "json");
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