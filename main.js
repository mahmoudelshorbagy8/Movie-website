$(document).ready(function(){
  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('navTage');
  });
   $(window).on('scroll load', function() {
   
     $('.fa-bars').removeClass('fa-times');
     $('.navbar').removeClass('navTage');
   });
$(window).scroll(function() {
  if ($(window).scrollTop() > 68) {
    $('header .headernav').addClass('stiky');
  } else {
    $('header .headernav').removeClass('stiky');
  }
});
   
   $('.home-slaide').owlCarousel({
     items: 1,
     nav: true,
     dots: false,
     autoplay: true,
     autoplayTimeout: 8000,
     loop: true
     
   });
   $('.row').owlCarousel({
    items: 1,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 8000,
      loop: true
   });
  
});
