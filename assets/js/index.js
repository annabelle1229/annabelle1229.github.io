$(function(){
    // 轉場 animation
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 500,
        outDuration: 500,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'body',
        loadingClass: 'animsition-loading',
        loadingInner: '',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });

    // menu
    $(".toggle").on("click", function(){
        $(this).toggleClass( "toggle-active" );
        $(".nav-wrapper").toggleClass( "nav-wrapper-active" );
        $(".nav-overlay").fadeToggle(300);
        $(".nav-wrapper .navContent").toggleClass('active');
        $(".mail").toggleClass("on");

        var navIn = new TimelineLite();
        navIn.set(".navInfo p", {opacity: 0});
        navIn.set(".nav-wrapper ul .nav01", {opacity: 0, y: -20});
        navIn.set(".nav-wrapper ul .nav02", {opacity: 0, y: -20});
        navIn.set(".nav-wrapper ul .nav03", {opacity: 0, y: -20});
        navIn.delay(0.5);
        navIn.to(".navInfo p", 0.5, {opacity: 1, ease:Cubic.easeOut });
        navIn.to(".nav-wrapper ul .nav01", 0.5, {opacity: 1, y: 0, ease:Cubic.easeOut });
        navIn.to(".nav-wrapper ul .nav02", 0.5, {opacity: 1, y: 0, ease:Cubic.easeOut }, "-=0.3");
        navIn.to(".nav-wrapper ul .nav03", 0.5, {opacity: 1, y: 0, ease:Cubic.easeOut }, "-=0.3");
    });

    $(window).load(function(){
        pageAnimate();
    });

    function pageAnimate() {
        $('#fullpage').fullpage({
            verticalCentered: false,
            resize : true,
            fixedElements: '.content',
            scrollingSpeed: 1500,
            easing: 'easeInOutQuad',
            afterLoad: function(anchorLink, index){
                if (index >= '1' && index <= '3') {
                    $(".arrow").removeClass("hide");
                };
                $(".arrow").on("click", function(){
                    $(this).addClass("hide");
                    $.fn.fullpage.moveTo(index + 1, 0);
                });
            },
            onLeave: function(index, nextIndex, direction){
                $(".arrow").addClass("hide");
            }
        });
    }
});