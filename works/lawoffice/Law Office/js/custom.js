(function ($) {
    "use strict"; // starts of use strict

    // filter js starts here

    

    // filter js ends here

    // slider js starts here

    $(".testimonial_slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });

    // slider js ends here
    
    // counter js starts here
    
     $('.counter_part').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 800,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

}); 
    
    // counter js ends here

})(jQuery); //end of use strict
