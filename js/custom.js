$(document).ready(function(){
    
    $('.color_picker .color_btn').on('click',function(){
        $('.color_picker').toggleClass('color_pos');
    });

    $('.color_picker .Orange').on('click',function(){
        $('body').addClass('Orange').removeClass('Green').removeClass('Yellow').removeClass('red').removeClass('blue');
    });

    $('.color_picker .blue').on('click',function(){
        $('body').addClass('blue').removeClass('Green').removeClass('Yellow').removeClass('red').removeClass('Orange');
    });

    $('.color_picker .red').on('click',function(){
        $('body').addClass('red').removeClass('Green').removeClass('Yellow').removeClass('blue').removeClass('Orange');
    });

    $('.color_picker .Yellow').on('click',function(){
        $('body').addClass('Yellow').removeClass('Green').removeClass('red').removeClass('blue').removeClass('Orange');
    });
    $('.color_picker .Green').on('click',function(){
        $('body').addClass('Green').removeClass('Yellow').removeClass('red').removeClass('blue').removeClass('Orange');
    });

    $('.color_picker .default').on('click',function(){
        $('body').removeClass('Green').removeClass('Yellow').removeClass('red').removeClass('blue').removeClass('Orange');
    });



    // scroll fucntion
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling >400){
            $('.back-to-top').fadeIn();
        }else{
            $('.back-to-top').fadeOut();
        }


        if(scrolling > 300){
            $('nav').addClass('nav-fix');
        }else{
            $('nav').removeClass('nav-fix');
        }
    });

    // bac to top js
    $('.back-to-top').on('click',function(){
        $('html,body').animate({
            scrollTop:'0px', 
        },1500);
    });


    

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
                    breakpoint:1201,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        dots: false,
                        arrows:false,
                        
                    }
                    },
                    {
                        breakpoint: 992,
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
