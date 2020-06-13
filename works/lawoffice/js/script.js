(function(){

    'use strict';


    var $filter_content = $('.filter_content');

    $filter_content.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filter_menu > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filter_menu > li').removeClass('active');
        $(this).addClass('active');

        $filter_content.isotope({filter: filter});

    });

    $('.card').mouseenter(function(){

        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top':'0'});

    }).mouseleave(function(){

        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top':'100%'});

    });

})(jQuery);