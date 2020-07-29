$(function () {
    'use strict'
    //Adjust Slider Height
    var winH   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
        $('.slider, .carousel-item').height(winH - ( upperH + navH ));


    // featured work shuffle
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
         if ($(this).data('class') === 'all') {
             $('.shuffle-imgs .col-md').css('opacity', 1);
         } else{
            $('.shuffle-imgs .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1);
         }
    });
});


//   insert back to top button dynamicly
$( "#backToTop" ).append('<a class="backToTop" href="javascript:void(null);" style="display: none;"><i class="fa fa-angle-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>');
var $window = $(window);
var distance = 80;
  // scroll
$window.scroll(function() {
  // header
  if($window.scrollTop() >= distance) {
    $(".backToTop").fadeIn();
  }else{
    $(".backToTop").fadeOut();
  }
});

$('.backToTop').click(function() {
  $('html, body').animate({
          scrollTop: 0
      }, 800);
});

