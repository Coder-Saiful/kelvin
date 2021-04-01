$(document).ready(function () {

    // testimonial slider js

    $('.testimonial_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    // scroll to top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll_to_top").fadeIn();
        } else {
            $(".scroll_to_top").fadeOut();
        }
    });

    $(".scroll_to_top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    // sticky top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".sticky_top").addClass("menu_bg");
        } else {
            $(".sticky_top").removeClass("menu_bg");
        }
    });


    // Smooths scrolling
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });


    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });
    
    // preloader timeout js
    
    $(window).on("load", function(){
        $(".preloader").delay(2000).fadeOut(500);
    });
    
    // responsive menu js
    
    $(".openNav").click(function(){
        $(".overlay").css("transform", "scaleX(1)");
    });
    
    $(".closeNav").click(function(){
        $(".overlay").css("transform", "scaleX(0)");
    });
    
    $(".overlay_top a img").click(function(){
        $(".overlay").css("transform", "scaleX(0)");
    });
    
    $(".overlay_content ul li a").click(function(){
        $(".overlay").css("transform", "scaleX(0)");
    });
    
    


});

// preloader js

var dots = new TimelineMax({repeat:-1})
dots.to('#lime',.5,{attr:{cx:'75%',cy:'75%', r:10}})
.to('#orange',.5,{attr:{cx:'25%',cy:'75%', r:10}},'-=.5')
.to('#brown',.5,{attr:{cx:'75%',cy:'25%', r:10}},'-=.5')
.to('#red',.5,{attr:{cx:'25%',cy:'25%', r:10}},'-=.5')
.to('#lime',.5,{attr:{cx:'25%',cy:'25%', r:20}})
.to('#orange',.5,{attr:{cx:'75%',cy:'25%', r:20}},'-=.5')
.to('#brown',.5,{attr:{cx:'25%',cy:'75%', r:20}},'-=.5')
.to('#red',.5,{attr:{cx:'75%',cy:'75%', r:20}},'-=.5')

TweenMax.to('svg:nth-child(1)',2,{rotation:360,transformOrigin:'50% 50%',repeat:-1},'-=.25')



