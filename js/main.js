$(document).ready(function(){
    $('button[data-href^="#"]').click(function (){
        var elementClick = $(this).attr("data-href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    })

    $('.reviews').slick({
        dots: true,
        arrows: false,
        autoScroll: false,
        adaptiveHeight: true
      });

    
    
});