$(function () {

    // $('html').smoothScroll({

    // });

    AOS.init({
        duration: 1200,
    })

    $(window).scroll(function (evt) {
        var y = $(this).scrollTop();
        if (y > 0) {
            $('.header').addClass('on');

        } else {
            $('.header').removeClass('on');
        }
    });

    $('.mainVisual .main_slide .list').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
        speed: 1600,
    });




    $('.event_slide_wrap').slick({
        //arrows: false,
        autoplay: false,
        slidesToShow: 3,
    });

    $('.slider_img_cont .list').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 1000,
        prevArrow: $('.xi-angle-left-thin'),
        nextArrow: $('.xi-angle-right-thin'),

    });

    $('.main_room .slider-option .xi-angle-left-thin').on('click', function () {
        $('.slider_img_cont .list').slick().slickPrev();
    });



    $('.main_dining .tab li').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.dining_slide_wrap .dining_slide>div').eq(idx).addClass('on').siblings().removeClass('on');
    });


    $('.main_special .tab li').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.special_slide_wrap .special_slide>div').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.main_room .tab li').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.room_slide_wrap .room_slide>div').eq(idx).addClass('on').siblings().removeClass('on');
    });

















})

//content-slider
var contentSlider01 = $(".content-slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 400,
    //centerMode: true,
    //variableWidth: true,
    //https://cubic-bezier.com/ 베지어 곡선 만들기
    //cssEase:"cubic-bezier(.69,-1.31,.74,1.17)",
    cssEase: "cubic-bezier(0,0,.58,1)",
});

var contentPrev = $("#content01 i.xi-angle-left-thin");
var contentNext = $("#content01 i.xi-angle-right-thin");