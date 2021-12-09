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
    $('.testimonial_slider').slick({
        autoplay:true,
        dots:true,
        slidesToShow:2,
        arrows: false,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
            }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            },
                
        ]
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
        responsive: [
                    {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        dots: false,
                        arrows:false,
                        
                    }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: false,
                        }
                    },
                        
                ]
    });

    // for shedule js
    var mixer = mixitup('.sheduleAll');
    
    
    
    // activee class
    $('.shedule_menu ul li').on('click',function(){
        $(this).addClass('active_menu').siblings().removeClass('active_menu');
    });
    
    
  });
