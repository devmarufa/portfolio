(function ($) {
	"use strict"; // starts of use strict


	$('.one-time').slick({
   dots: false,
   arrows: false,
   autoplay: true,
   infinite: true,
   speed: 500,
   slidesToScroll: 1,
   slidesToShow: 1,
   adaptiveHeight: true,
   responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
  })
  $('.one-time2').slick({
   dots: true,
   arrows: false,
   autoplay: true,
   infinite: true,
   speed: 1000,
   slidesToScroll: 1,
   slidesToShow: 3,
   adaptiveHeight: true,
   responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
  }) 
  $('.one-time3').slick({
   dots: true,
   arrows: false,
   autoplay: true,
   infinite: true,
   speed: 1000,
   slidesToScroll: 3,
   slidesToShow: 2,
   adaptiveHeight: true,
   responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
  })


})(jQuery); //end of use strict
