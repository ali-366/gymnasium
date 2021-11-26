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
    // counter up js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
     // partner js
     $('.partner_item').slick({
        autoplay:true,
        slidesToShow:5,
        arrows: true,
        prevArrow:'<i class="fas fa-arrow-left arrow_left"></i>',
        nextArrow:'<i class="fas fa-arrow-right arrow_right"></i>',
    });

    // for shedule js
    var mixer = mixitup('.sheduleAll');
    
    
    
    // activee class
    $('.shedule_menu ul li').on('click',function(){
        $(this).addClass('active_menu').siblings().removeClass('active_menu');
    });
    
  });