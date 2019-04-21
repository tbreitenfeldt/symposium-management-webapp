$(document).ready(function () {

    //leftSideBar Methods

    $("#leftSidebar").mCustomScrollbar({
        theme: "minimal"
    });

    function removeLeftSideBar()
    {
        var leftId = '#leftSidebar';
        $(leftId).removeClass('active');
        $(leftId)[0].setAttribute("hidden", true);
        $('.overlay').removeClass('active');
        document.getElementById("content").style.paddingRight = "20px";  
        document.getElementById("leftSidebarCollapse").focus();
        $('.collapse').removeClass('show');

        showUserMenu();  
    }

    $('#dismiss, .overlay').on('click',  removeLeftSideBar);

    $('#leftSidebarCollapse').on('click', function () {
        if($('#leftSidebar').hasClass('active'))
        {
            removeLeftSideBar();
            $('.overlay').removeClass('active');
            document.getElementById("content").style.paddingRight = "20px";
            document.getElementById("leftSidebarCollapse").focus();
        }

        else
        {
            var leftId = '#leftSidebar';
            $(leftId)[0].removeAttribute('hidden');
            hideUserMenu();
            $(leftId).toggleClass('active');
            document.getElementById("content").style.paddingRight = "260px";
            $('.overlay').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            document.getElementById("mCSB_1").focus();
        }
    });


        //centerSideBar Methods

        $("#centerSidebar").mCustomScrollbar({
            theme: "minimal"
        });
    
        function removeCenterSideBar()
        {
            var leftId = '#centerSidebar';
            $(leftId).removeClass('active');
            $(leftId)[0].setAttribute("hidden", true);
            $('.overlay').removeClass('active');
            document.getElementById("content").style.paddingRight = "20px";  
            document.getElementById("centerSidebarCollapse").focus();
            showUserMenu();  
        }
    
        $('#centerDismiss, .overlay').on('click',  removeCenterSideBar);
    
        $('#centerSidebarCollapse').on('click', function () {
            if($('#centerSidebar').hasClass('active'))
            {
                removeCenterSideBar();
                $('.overlay').removeClass('active');
                document.getElementById("content").style.paddingRight = "20px";
                document.getElementById("centerSidebarCollapse").focus();
            }
    
            else
            {
                var leftId = '#centerSidebar';
                $(leftId)[0].removeAttribute('hidden');
                hideUserMenu();
                $(leftId).toggleClass('active');
                document.getElementById("content").style.paddingRight = "260px";
                $('.overlay').toggleClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                document.getElementById("mCSB_3").focus();
            }
        });


    //rightSideBar Methods

    $("#rightSidebar").mCustomScrollbar({
        theme: "minimal"
    });

    function removeRightSideBar()
    {

        var rightId = '#rightSidebar';
        $(rightId).removeClass('active');
        $(rightId)[0].setAttribute("hidden", true);
        $('.overlay').removeClass('active');
        document.getElementById("content").style.paddingLeft = "20px";
        document.getElementById("rightSidebarCollapse").focus();
        $('.collapse').removeClass('show');
        showUserMenu();  
    }

    $('#rightDismiss, .overlay').on('click', removeRightSideBar);

    $('#rightSidebarCollapse').on('click', function () {
        var rightId = '#rightSidebar';
        if($(rightId).hasClass('active'))
        {
            removeRightSideBar();
            document.getElementById("content").style.paddingLeft = "20px";
            document.getElementById("rightSidebarCollapse").focus();
            showUserMenu();
        }
        else
        {
            $(rightId)[0].removeAttribute('hidden');
            hideUserMenu();
            $(rightId).toggleClass('active');

            
            //https://stackoverflow.com/questions/16520186/how-to-detect-tablet-mobile-desktop-tv-using-javascript
            if (!isMobile())
            {
                document.getElementById("content").style.paddingLeft = "260px";
            }
            $('.overlay').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            document.getElementById("mCSB_2").focus();
        }
    });



    

    //Both Menu Functions

    $(document).keyup(function(e) 
    {
        if(e.key == "Escape")
        {
            console.log("YES");
            if($('#rightSidebar').hasClass('active'))
            {
                removeRightSideBar();
                document.getElementById("content").style.paddingLeft = "20px";
                document.getElementById("rightSidebarCollapse").focus();
                showUserMenu();
            }
            else if($('#leftSidebar').hasClass('active'))
            {
                removeLeftSideBar();
                $('.overlay').removeClass('active');
                document.getElementById("content").style.paddingRight = "20px";
                document.getElementById("leftSidebarCollapse").focus();
            }
            else if($('#centerSidebar').hasClass('active'))
            {
                removeCenterSideBar();
                $('.overlay').removeClass('active');
                document.getElementById("content").style.paddingRight = "20px";
                document.getElementById("centerSidebarCollapse").focus();
            }
        }
    });

    function isMobile()
    {
        return navigator.userAgent.match("/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i");
    }

    function hideUserMenu() //menu that is center of page with three buttons that call upon respective menus
    {
        var buttons = $("#user-menu").find("button");

        for(var i = 0; i < buttons.length; i++)
        {
            element = buttons[i];
            element.setAttribute("aria-hidden", true);
            element.setAttribute("tabindex", -1);
        }
        //console.log("Turned off nav menu");
    }

    function showUserMenu()
    {
        var buttons = $("#user-menu").find("button");

        for(var i = 0; i < buttons.length; i++)
        {
            element = buttons[i];
            element.setAttribute("aria-hidden", false);
            element.setAttribute("tabindex", 0);
            $('body').find('*').css("font-family","'Bookman Old Style'");

        }
        //console.log("Turned on nav menu");
    }

    function isSideBarActive()
    {
        var rightId = '#rightSidebar', leftId = '#rightSidebar';
        return $(rightId).hasClass('active') || $(leftId).hasClass('active');
    }


    //For Masking Autogenerated Divs

    document.getElementById("mCSB_1").setAttribute("aria-label", "User Settings");
    document.getElementById("mCSB_2").setAttribute("aria-label", "My Scheduler");




    //https://www.pair.com/support/kb/resize-sites-font-jquery/
    var buttonText = '';
    var menuButtonClass = '.fa-6x';
    var fontSizeStyle = 'font-size';
    var contentId = '#content';
    var stylePaddingTop = 'padding-top';
    var header = 'header';
    var tableHead = 'th';

  
  //resets the font size when clicked

    var resetFont = $(buttonText).css(fontSizeStyle);
    var resetIcon = $(menuButtonClass).css(fontSizeStyle);
    var originalMarginTop = $(contentId).css(stylePaddingTop);
    var originalHeaderSize = "1rem";
    var originalTableHeadSize = originalHeaderSize;

    var maxZoomedIn = 3;
    var minZoomedIn = 0;
    var defaultIn = 0;

    if(isMobile())
    {
        maxZoomedIn = 1;
        minZoomedIn = 0;
    }

    var zoomedIn = defaultIn;

    $("#reset-font").click(function(){
        $(buttonText).css(fontSizeStyle, resetFont);
        $(menuButtonClass).css(fontSizeStyle, resetIcon);
        $(contentId).css(stylePaddingTop, originalMarginTop);
        $(header).css(fontSizeStyle, originalHeaderSize);
        $(tableHead).css(fontSizeStyle, originalTableHeadSize);

        zoomedIn = 0;
        resizeMainMenu();
        setCurrentFontDisplay();
    });

    //increases font size when clicked
    $("#increase-font").click(function()
    {
        var increaseMultiplier = 1.2;
        if(zoomedIn < maxZoomedIn)
        {
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
    $("#decrease-font").click(function()
    {
        var decreaseMultiplier = 0.8;
        if(zoomedIn > minZoomedIn)
        {
            changeSize(buttonText, fontSizeStyle, decreaseMultiplier);
            changeSize(menuButtonClass, fontSizeStyle, decreaseMultiplier);
            if(zoomedIn > defaultIn)
            {
                changeSize(header, fontSizeStyle, 0.5);
                changeSize(tableHead, fontSizeStyle, 0.5);
            }
            changeSize(contentId, stylePaddingTop, decreaseMultiplier);
            zoomedIn--;
        }
        resizeMainMenu();
        setCurrentFontDisplay();
    });

    function changeSize(element, style, multiplier)
    {
        var originalFontSize = $(element).css(style);
        var originalFontNumber = parseFloat(originalFontSize);
        var newFontSize = originalFontNumber*multiplier;
        $(element).css(style, newFontSize);
    }

    //change button size same when default page opens
    function resizeMainMenu()
    {
        if(isMobile)
        {
            var highest = $("#centerSidebarCollapse").css('width');
            var arr = new Array('#leftSidebarCollapse', '#rightSidebarCollapse');
            var resizeMenu = arr.join(',');
            $(resizeMenu).css('width', highest);
        }
    }

    function setCurrentFontDisplay()
    {
        var arr = new Array('-3x','-2x', 'Default', '2x', '3x', '4x');
        console.log($('#current-font-size')[0].innerHTML);
        $('#current-font-size')[0].innerHTML = arr[zoomedIn + 2];
    }
    resizeMainMenu();

    var colorSetting = new Array("Default", "Graystyle","Black on White","White on Black");
    var currentColorSetting = colorSetting[0];

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
        console.log(currentColorSetting);
    }


    function turnOnGrayStyle(){
        if(currentColorSetting != "GrayStyle")
        {
            toggleGraystyle();
            currentColorSetting = "GrayStyle";
        }
        console.log(currentColorSetting);
    }

    function turnOnColorDefault(){
        if(currentColorSetting != "Default")
        {
            removeGraystyle();
            currentColorSetting = "Default";
        }
        console.log(currentColorSetting);
    }
    
    $('#color-scheme-b-o-w').on('click',  turnOnGrayStyle);
    $('#color-scheme-default').on('click',  turnOnColorDefault);
    $('#color-scheme-invert').on('click',  invertColor);

});