(function ($) {
        "use strict"; // starts of use strict

        // slider js starts here

        $(".testimonial_slider").slick({
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        // slider js ends here

        // screenshots js starts here

        $('.screenshots_slider').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 575,
                        settings: {
                slidesToShow: 2
                        }
    }
                     ] });

            // screenshots js ends here

        })(jQuery); //end of use strict
