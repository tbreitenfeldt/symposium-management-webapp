$(document).ready(function () {
    $("#leftSidebar").mCustomScrollbar({
        theme: "minimal"
    });

    function removeLeftSideBar()
    {
        $('#leftSidebar').removeClass('active');
        $('.overlay').removeClass('active');
        document.getElementById("content").style.paddingRight = "20px";    
    }

    $('#dismiss, .overlay').on('click',  removeLeftSideBar);

    function togglePaddingRight()
    {
        if(document.getElementById("content").style.paddingRight == "20px")
        {
            document.getElementById("content").style.paddingRight = "260px";
        }
        else
        {
            document.getElementById("content").style.paddingRight = "20px";
        }
    }

    $('#leftSidebarCollapse').on('click', function () {
        if($('#leftSidebar').hasClass('active'))
        {
            removeLeftSideBar();
            document.getElementById("content").style.paddingRight = "20px";
        }
        else
        {
            removeRightSideBar();
            $('#leftSidebar').toggleClass('active');
            document.getElementById("content").style.paddingRight = "260px";
            $('.overlay').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        }
    });

    $("#rightSidebar").mCustomScrollbar({
        theme: "minimal"
    });

    function removeRightSideBar()
    {
        $('#rightSidebar').removeClass('active');
        $('.overlay').removeClass('active');
        document.getElementById("content").style.paddingLeft = "20px";
    }

    $('#dismiss, .overlay').on('click', removeRightSideBar);

    $('#rightSidebarCollapse').on('click', function () {
        if($('#rightSidebar').hasClass('active'))
        {
            removeRightSideBar();
            document.getElementById("content").style.paddingLeft = "20px";
        }
        else
        {
            removeLeftSideBar();
            $('#rightSidebar').toggleClass('active');
            
            //https://stackoverflow.com/questions/16520186/how-to-detect-tablet-mobile-desktop-tv-using-javascript
            if (!isMobile())
            {
                document.getElementById("content").style.paddingLeft = "260px";
            }
            $('.overlay').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        }
    });

    function isMobile()
    {
        return navigator.userAgent.match("/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i");
    }
});
