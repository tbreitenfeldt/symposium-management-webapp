//leftSideBar Methods

function removeLeftSideBar(){
    var leftId = '#leftSidebar';
    $(leftId).removeClass('active');
    $(leftId)[0].setAttribute("hidden", true);
    $('.overlay').removeClass('active');
    document.getElementById("content").style.paddingRight = "20px";  
    document.getElementById("leftSidebarCollapse").focus();
    $('.collapse').removeClass('show');

    showUserMenu();  
}




//centerSideBar Methods

function removeCenterSideBar(){
    var leftId = '#centerSidebar';
    $(leftId).removeClass('active');
    $(leftId)[0].setAttribute("hidden", true);
    $('.overlay').removeClass('active');
    document.getElementById("content").style.paddingRight = "20px";  
    document.getElementById("centerSidebarCollapse").focus();
    showUserMenu();  
}




//rightSideBar Methods

function removeRightSideBar(){
    var rightId = '#rightSidebar';
    $(rightId).removeClass('active');
    $(rightId)[0].setAttribute("hidden", true);
    $('.overlay').removeClass('active');
    document.getElementById("content").style.paddingLeft = "20px";
    document.getElementById("rightSidebarCollapse").focus();
    $('.collapse').removeClass('show');
    showUserMenu();  
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





//Accesibility Methods

function changeSize(element, style, multiplier){
    var originalFontSize = $(element).css(style);
    var originalFontNumber = parseFloat(originalFontSize);
    var newFontSize = originalFontNumber*multiplier;
    $(element).css(style, newFontSize);
}


function setCurrentFontDisplay(){
    var arr = new Array('-3x','-2x', 'Default', '2x', '3x', '4x');
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

function invertColor(){
    document.documentElement.style.setProperty('-webkit-filter', 'invert(.8)');
    document.documentElement.style.setProperty('filter', 'invert(.8)');
}

function toggleGraystyle() {
    if(currentColorSetting == "Graystyle"){
        removeGraystyle();
    }
    else{
        addGraystyle();
    }
    //console.log(currentColorSetting);
}


function turnOnGrayStyle(){
    if(currentColorSetting != "GrayStyle"){
        toggleGraystyle();
        currentColorSetting = "GrayStyle";
    }
    //console.log(currentColorSetting);
}

function turnOnColorDefault(){
    if(currentColorSetting != "Default"){
        removeGraystyle();
        currentColorSetting = "Default";
    }
    //console.log(currentColorSetting);
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

    //LEFT SIDE MENU


    $('#dismiss, .overlay').on('click',  removeLeftSideBar);

    //CENTER MENU
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

    $('#centerDismiss, .overlay').on('click',  removeCenterSideBar);

    //RIGHT SIDE 

    $('#rightDismiss, .overlay').on('click', removeRightSideBar);

    //ALL MENU(S)
    $(document).keyup(function(e) {
        if(e.key == "Escape"){
    
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
                document.getElementById("content").style.paddingRight = "20px";
                document.getElementById("centerSidebarCollapse").focus();
            }
        }
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
            $('.overlay').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            document.getElementById("leftSidebar").focus();
        }
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
            $('.overlay').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            document.getElementById("centerSidebar").focus();
        }
    });

    $('#rightSidebarCollapse').on('click', function () {
        var rightId = '#rightSidebar';
        if($(rightId).hasClass('active')){
            removeRightSideBar();
            document.getElementById("content").style.paddingLeft = "20px";
            document.getElementById("rightSidebarCollapse").focus();
            showUserMenu();
        }
        else{
            $(rightId)[0].removeAttribute('hidden');
            hideUserMenu();
            $(rightId).toggleClass('active');

            
            //https://stackoverflow.com/questions/16520186/how-to-detect-tablet-mobile-desktop-tv-using-javascript
            if (!isMobile()){
                document.getElementById("content").style.paddingLeft = "260px";
            }
            $('.overlay').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            console.log("IT WAS DONE")
            $(".rightSidebar-header").focus();
        }
    });




    //For Masking Autogenerated Divs
    document.getElementById("leftSidebar").setAttribute("aria-label", "User Settings");
    document.getElementById("rightSidebar").setAttribute("aria-label", "My Scheduler");
    document.getElementById("centerSidebar").setAttribute("aria-label", "My Scheduler");


    $('#color-scheme-b-o-w').on('click',  turnOnGrayStyle);
    $('#color-scheme-default').on('click',  turnOnColorDefault);
    $('#color-scheme-invert').on('click',  invertColor);


}

$(document).ready(main())