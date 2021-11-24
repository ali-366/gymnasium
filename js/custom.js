$(document).ready(function(){
    
    $('.banner_slider').slick({
        autoplay:true,
        dots:true,
        arrows: false,
        prevArrow:'<i class="fas fa-arrow-left arrow_left"></i>',
        nextArrow:'<i class="fas fa-arrow-right arrow_right"></i>',
    });
    $('.venobox').venobox(); 


    // testimonial js
    $('.testi_slider').slick({
        autoplay:true,
        dots:true,
        slidesToShow:2,
        arrows: false,
    });
    
  });