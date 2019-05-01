//leftSideBar Methods

function removeSideBar(barId, iconId){
    $(barId).removeClass('active');
    $(barId)[0].setAttribute("hidden", true);
    $('.overlay').removeClass('active');
    toggleBodySidebar();
    document.getElementById("content").style.paddingRight = "20px";  
    $(iconId).focus();
    $('.collapse').removeClass('show');
    $(".dropdown-button").each(function(){
        if(!$(this).hasClass("collapsed")){
            $(this).addClass("collapsed");
        }
    });
    showUserMenu(); 
}

function removeLeftSideBar(){
    removeSideBar("#leftSidebar", "#leftSidebarCollapse");
}




//centerSideBar Methods

function removeCenterSideBar(){
    removeSideBar("#centerSidebar", "#centerSidebarCollapse");
}




//rightSideBar Methods

function removeRightSideBar(){
    removeSideBar("#rightSidebar", "#rightSidebarCollapse");
}





//Icon Menu Methods

function hideUserMenu(){ //menu that is center of page with three buttons that call upon respective menus
    $("#user-menu").attr("aria-hidden", "true");

    /*
    var buttons = $("#user-menu").find("button");

    for(var i = 0; i < buttons.length; i++){
        element = buttons[i];
        element.setAttribute("aria-hidden", true);
        element.setAttribute("tabindex", -1);
    }
    //console.log("Turned off nav menu");
    */
}

function showUserMenu(){
    $("#user-menu").attr("aria-hidden", "false");

    /*
    var buttons = $("#user-menu").find("button");

    for(var i = 0; i < buttons.length; i++){
        element = buttons[i];
        element.setAttribute("aria-hidden", false);
        element.setAttribute("tabindex", 0);
    }
    //console.log("Turned on nav menu");
*/
}





//All Toggle Menu Functions

function isMobile(){
    return navigator.userAgent.match("/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i");
}

function isSideBarActive(){
    var rightId = '#rightSidebar', leftId = '#rightSidebar';
    return $(rightId).hasClass('active') || $(leftId).hasClass('active');
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

function switchArrowDirection(){
    var width = $(window).width();
    //var height = $(window).height();
    if(width <= "425"){
        $(".arrow-button").attr('data-icon', 'arrow-left');
    }
    else{
        $(".arrow-button").attr('data-icon', 'arrow-right');
    }
}

function closeMenus(){
    if($('#rightSidebar').hasClass('active')){
        removeRightSideBar();
        document.getElementById("content").style.paddingLeft = "20px";
        document.getElementById("rightSidebarCollapse").focus();
        showUserMenu();
    }
    else if($('#leftSidebar').hasClass('active')){
        removeLeftSideBar();
        $('.overlay').removeClass('active');
        document.getElementById("content").style.paddingRight = "20px";
        document.getElementById("leftSidebarCollapse").focus();
    }
    else if($('#centerSidebar').hasClass('active')){
        removeCenterSideBar();
        $('.overlay').removeClass('active');
        document.getElementById("content").style.paddingRight = "260px";
        document.getElementById("centerSidebarCollapse").focus();
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
    var arr = new Array('-3x','-2x', '1x', '2x', '3x', '4x');
    //console.log($('#current-font-size')[0].innerHTML);
    $('#current-font-size')[0].innerHTML = "Current Font Size: " + arr[zoomedIn + 2];
}

function addGraystyle(){
    document.documentElement.style.setProperty('-moz-filter', 'grayscale(100%)');
    document.documentElement.style.setProperty('-webkit-filter', 'grayscale(100%)');
    document.documentElement.style.setProperty('filter', 'gray');
    document.documentElement.style.setProperty('-moz-filter', 'grayscale(100%)');
    currentColorSetting = "Graystyle";
}

function removeGraystyle() {
    document.documentElement.style.removeProperty('-moz-filter', 'grayscale(100%)');
    document.documentElement.style.removeProperty('-webkit-filter', 'grayscale(100%)');
    document.documentElement.style.removeProperty('filter', 'gray');
    document.documentElement.style.removeProperty('-moz-filter', 'grayscale(100%)');
}

function addInvertColor(){
    document.documentElement.style.setProperty('-webkit-filter', 'invert(.8)');
    document.documentElement.style.setProperty('filter', 'invert(.8)');
    currentColorSetting = "Invert"
}

function removeInvertColor(){
    document.documentElement.style.removeProperty('-webkit-filter', 'invert(.8)');
    document.documentElement.style.removeProperty('filter', 'invert(.8)');
}

function turnOnGrayStyle(){
    if(currentColorSetting != "GrayStyle"){
        removeCurrentColorSetting();
        addGraystyle();
        currentColorSetting = "GrayStyle";
    }
    //console.log(currentColorSetting);
}

function turnOnColorDefault(){
    if(currentColorSetting != "Default"){
        removeCurrentColorSetting();
        currentColorSetting = "Default";
    }
    //console.log(currentColorSetting);
}

function turnOnInverseStyle(){
    if(currentColorSetting != "Inverse"){
        removeCurrentColorSetting();
        addInvertColor();
        currentColorSetting = "Inverse";
    }
    //console.log(currentColorSetting);
}

function removeCurrentColorSetting(){
    if(currentColorSetting == "Inverse"){
        removeInvertColor();
    }
    else if(currentColorSetting == "GrayStyle"){
        removeGraystyle();
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

var maxZoomedIn = 3;
var minZoomedIn = 0;
var defaultIn = 0;

if(isMobile()){
    maxZoomedIn = 1;
    minZoomedIn = 0;
}

var zoomedIn = defaultIn;


resizeMainMenu();
var colorSetting = new Array("Default", "Graystyle","Black on White","White on Black");
var currentColorSetting = colorSetting[0];








//MAIN FUNCTION

function main(){

    $("#reset-font").click(function(){
        $(menuButtonClass).css(fontSizeStyle, "");
        $(contentId).css(stylePaddingTop, originalMarginTop);
        $(header).css(fontSizeStyle, originalHeaderSize);
        $(tableHead).css(fontSizeStyle, originalTableHeadSize);

        zoomedIn = 0;
        resizeMainMenu();
        setCurrentFontDisplay();
    });

    //increases font size when clicked
    $("#increase-font").click(function(){
        var increaseMultiplier = 1.2;
        if(zoomedIn < maxZoomedIn){
            changeSize(buttonText, fontSizeStyle, increaseMultiplier);
            changeSize(menuButtonClass, fontSizeStyle, increaseMultiplier);
            changeSize(header, fontSizeStyle, 2);
            changeSize(tableHead, fontSizeStyle, 2);
            changeSize(contentId, stylePaddingTop, increaseMultiplier);
            zoomedIn++;
        }
        resizeMainMenu();
        setCurrentFontDisplay();
    });

    //decrease font size when clicked
    $("#decrease-font").click(function(){
        var decreaseMultiplier = 0.8;
        if(zoomedIn > minZoomedIn){
            changeSize(buttonText, fontSizeStyle, decreaseMultiplier);
            changeSize(menuButtonClass, fontSizeStyle, decreaseMultiplier);
            if(zoomedIn > defaultIn){
                changeSize(header, fontSizeStyle, 0.5);
                changeSize(tableHead, fontSizeStyle, 0.5);
            }
            changeSize(contentId, stylePaddingTop, decreaseMultiplier);
            zoomedIn--;
        }
        resizeMainMenu();
        setCurrentFontDisplay();
    });

    //close LEFT SIDE MENU
    $('#leftDismiss, .overlay').on('click',  function(event) {
        $('#leftSidebarCollapse').attr('aria-expanded', 'false');
        removeLeftSideBar(event);
    });

    //close center MENU
    $('#centerDismiss, .overlay').on('click', function(event) {
        $('#centerSidebarCollapse').attr('aria-expanded', 'false');
        removeCenterSideBar(event);
    });

    //close RIGHT SIDE menu
    $('#rightDismiss, .overlay').on('click', function(event) {
        $('#rightSidebarCollapse').attr('aria-expanded', 'false');
        removeRightSideBar(event);
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

    $('#leftSidebarCollapse').on('click', function () {
        if($('#leftSidebar').hasClass('active')){
            removeLeftSideBar();
            $('.overlay').removeClass('active');
            document.getElementById("content").style.paddingRight = "20px";
            document.getElementById("leftSidebarCollapse").focus();
        }

        else{
            var leftId = '#leftSidebar';
            $(leftId)[0].removeAttribute('hidden');
            hideUserMenu();
            $(leftId).toggleClass('active');
            document.getElementById("content").style.paddingRight = "260px";
            toggleBodySidebar();
            $('.overlay').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('#leftSidebarCollapse').attr('aria-expanded', 'true');
            document.getElementById("userSettingsHeading").focus();        }
    });

    $('#centerSidebarCollapse').on('click', function () {
        if($('#centerSidebar').hasClass('active')){
            removeCenterSideBar();
            $('.overlay').removeClass('active');
            document.getElementById("content").style.paddingRight = "20px";
            document.getElementById("centerSidebarCollapse").focus();
        }

        else{
            var leftId = '#centerSidebar';
            $(leftId)[0].removeAttribute('hidden');
            hideUserMenu();
            $(leftId).toggleClass('active');
            document.getElementById("content").style.paddingRight = "260px";
            toggleBodySidebar();
            $('.overlay').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('#centerSidebarCollapse').attr('aria-expanded', 'true');
            document.getElementById("accessibilitySettingsHeading").focus();
        }
    });

    $('#rightSidebarCollapse').on('click', function () {
        if($('#rightSidebar').hasClass('active')){
            removeRightSideBar();
            $('.overlay').removeClass('active');
            document.getElementById("content").style.paddingRight = "20px";
            document.getElementById("rightSidebarCollapse").focus();
        }

        else{
            var leftId = '#rightSidebar';
            $(leftId)[0].removeAttribute('hidden');
            hideUserMenu();
            $(leftId).toggleClass('active');
            document.getElementById("content").style.paddingRight = "260px";
            toggleBodySidebar();
            $('.overlay').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('#rightSidebarCollapse').attr('aria-expanded', 'true');
            document.getElementById("mySchedulerHeading").focus();
        }
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
}

main();