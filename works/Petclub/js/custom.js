(function ($) {
    "use strict"; // starts of use strict
    // counter js strats here
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // counter js ends here

    // slider js starts here
    $('.initiative_slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });

    // slider js ends here
    $('.test_slide_one').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.test_slide_two',
        dots: false,
        arrows: true
    });
    $('.test_slide_two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.test_slide_one'
    });


})(jQuery); //end of use strict
