

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


//centerSideBar Methods

function removeCenterSideBar(){
    removeSideBar("#centerSidebar", "#centerSidebarCollapse");
}



//Icon Menu Methods

function hideUserMenu(){ //menu that is center of page with three buttons that call upon respective menus

    var buttons = $("#user-menu").find("button");

    for(var i = 0; i < buttons.length; i++){
        element = buttons[i];
        element.setAttribute("aria-hidden", true);
        element.setAttribute("tabindex", -1);
    }
    //console.log("Turned off nav menu");
}

function showUserMenu(){
    var buttons = $("#user-menu").find("button");

    for(var i = 0; i < buttons.length; i++){
        element = buttons[i];
        element.setAttribute("aria-hidden", false);
        element.setAttribute("tabindex", 0);
    }
    //console.log("Turned on nav menu");
}





//All Toggle Menu Functions

function isMobile(){
    return navigator.userAgent.match("/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i");
}

function toggleBodySidebar(){
    $("body").toggleClass("no-scroll");
}

function switchArrowDirection(){
    var width = $(window).width();
    console.log(width);
    //var height = $(window).height();
    if(width <= "425"){
        $(".arrow-button").attr('data-icon', 'arrow-left');
        //document.getElementsByClassName("arrow-button")[0].classList.toggle('.fa-arrow-left');
        //document.getElementsByClassName("arrow-button")[0].classList.toggle('.fa-arrow-left');
    }
    else{
        $(".arrow-button").attr('data-icon', 'arrow-right');
        //document.getElementsByClassName("arrow-button")[1].classList.toggle('.fa-arrow-right');
        //document.getElementsByClassName("arrow-button")[2].classList.toggle('.fa-arrow-right');
    }
}

function closeMenus(){
    if($('#leftSidebar').hasClass('active')){
        removeLeftSideBar();
        $('.overlay').removeClass('active');
        document.getElementById("content").style.paddingRight = "20px";
        document.getElementById("leftSidebarCollapse").focus();
    }
}




//Accesibility Methods

function changeSize(element, style, size){
    $(element).css(style, size);
}


function setCurrentFontDisplay(){
    //console.log($('#current-font-size')[0].innerHTML);
    $('#current-font-size')[0].innerHTML = "Current Font Size: " + arr[zoomedIn];
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

var arr = new Array('1x', '2x', '3x');
var arr2 = new Array('initial', 'x-large', 'xx-large')
var arr3 = new Array('13px', '19px', '26px')

var maxZoomedIn = 2;
var minZoomedIn = 0;
var defaultIn = 0;

if(isMobile()){
    maxZoomedIn = 1;
    minZoomedIn = 0;
}

var zoomedIn = defaultIn;


var colorSetting = new Array("Default", "Graystyle","Black on White","White on Black");
var currentColorSetting = colorSetting[0];


//MAIN FUNCTION

function main(){

    //CENTER MENU
    $("#reset-font").click(function(){
        $(menuButtonClass).css(fontSizeStyle, "");
        $(contentId).css(stylePaddingTop, originalMarginTop);
        $(header).css(fontSizeStyle, originalHeaderSize);
        $(tableHead).css(fontSizeStyle, originalTableHeadSize);
        changeSize("#content-inside", fontSizeStyle, arr2[defaultIn]);   
        changeSize("form input:checkbox", "width", arr3[defaultIn]);
        changeSize("form input:checkbox", "height", arr3[zoomedIn])
        zoomedIn = 0;
        setCurrentFontDisplay();
    });
    
    //increases font size when clicked
    $("#increase-font").click(function(){
        if(zoomedIn < maxZoomedIn){
            zoomedIn++;
            console.log(zoomedIn)
            changeSize("#content-inside", fontSizeStyle, arr2[zoomedIn]);   
            changeSize("form input:checkbox", "width", arr3[zoomedIn]);
            changeSize("form input:checkbox", "height", arr3[zoomedIn])
            setCurrentFontDisplay();
        }
    });
    
    //decrease font size when clicked
    $("#decrease-font").click(function(){
        if(zoomedIn > minZoomedIn){
            zoomedIn--;
            changeSize("#content-inside", fontSizeStyle, arr2[zoomedIn]);
            setCurrentFontDisplay();
        }
    });

    $('#centerDismiss, .overlay').on('click',  removeCenterSideBar);

    //ALL MENU(S)
    $(document).keyup(function(e) {
        if(e.key == "Escape"){
            closeMenus();
        }
    });

    //ICON MENU


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
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            document.getElementById("centerSidebar").focus();
        }
    });

    //Edit mySchedule Button Click Event(s)

    $('#aboutCon').on("click", function(){
        $("#innerContent").empty();
        $("#content").load("menuPhp/practice.php");
    });

    $("#editMySchedule").on("click", function(){
        $("#innerContent").empty();
        $("#content").load("menuPhp/editSchedule.php");
        init();
    });

    $('#mySchedule').on("click", function(){
        $("#innerContent").empty();
        $("#content").load("menuPhp/showSchedule.php");
        let map = {"table_names": ["user_conference"], "values_to_select": ["conference_id"], "attrs": [""], "values": [""], "genFlag": "flag"};
    //  $.get("proxies/getProxy.php", map, showSchedule, "json");
    });



    //For Masking Autogenerated Divs
    document.getElementById("centerSidebar").setAttribute("aria-label", "My Scheduler");


    $('#color-scheme-b-o-w').on('click',  turnOnGrayStyle);
    $('#color-scheme-default').on('click',  turnOnColorDefault);
    $('#color-scheme-invert').on('click',  turnOnInverseStyle);


    


    //MyScheduler Click Event(s)
    $('#aboutCon').on("click", function(){
        $("#innerContent").empty();
        $("#content").load("menuPhp/practice.php");
    });

    $("#editMySchedule").on("click", function(){
        $("#innerContent").empty();
        $("#content").load("menuPhp/editSchedule.php");
        init();
    });

    $('#mySchedule').on("click", function(){
        $("#innerContent").empty();
        $("#content").load("menuPhp/showSchedule.php");
        let map = {"table_names": ["user_conference"], "values_to_select": ["conference_id"], "attrs": [""], "values": [""], "genFlag": "flag"};
    //  $.get("proxies/getProxy.php", map, showSchedule, "json");
    });

     window.addEventListener("resize", onresize);

     $(window).resize(switchArrowDirection);
}


$(document).ready(function(){
    main();
    switchArrowDirection();
    console.log("FSFS");
});