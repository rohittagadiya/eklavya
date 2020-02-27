$(function () {
    "use strict";
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else {
            $(".navbar-area").addClass("sticky");
        }
    });
    var scrollLink = $('.page-scroll');
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 73;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });
    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function (data) {
            var $svg = jQuery(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        }, 'xml');
    });
    new WOW().init();
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        speed: 1000,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 40,
            depth: 150,
            modifier: 1,
            slideShadows: false,
        }
    });
    $('.testimonial-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-author'
    });
    $('.testimonial-author').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.testimonial-content',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: "0",
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});






$(function() {
    $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    });
});


var IMAGES = {
    exams: [{
            src: './assets/100MSDCF/DSC00827.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00828.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00829.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00830.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00831.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00832.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        }
    ],
    events: [{
            src: './assets/100MSDCF/DSC00827.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00828.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00829.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00830.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00831.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00832.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        }
    ],
    fun: [{
        src: '../assets/100MSDCF/DSC00827.JPG',
        info: "THISMIS DEMO IMAGE"
    }, {
        src: '../assets/100MSDCF/DSC00827.JPG',
        info: "THISMIS DEMO IMAGE"
    }]
}

var image_html = '<div class="row m-0">';