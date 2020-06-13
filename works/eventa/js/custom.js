(function ($) {

    "use strict"

    $('.sponsor_slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='img/leftarrow.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='img/rightarrow.png'>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
    }]
    });

    $('.testimonail_slider_image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.testimonail_slider_content',
    });
    $('.testimonail_slider_content').slick({
        arrows: false,
        dots: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonail_slider_image',
        focusOnSelect: true
    });

    $('.venobox').venobox();

})(jQuery);
