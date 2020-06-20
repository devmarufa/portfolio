(function ($) {
    "use strict"; // starts of use strict
    // counter js strats here
    $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
    // counter js ends here

    // slider js starts here
    $('.one-time').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });

    // slider js ends here
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav'
    });




})(jQuery); //end of use strict
