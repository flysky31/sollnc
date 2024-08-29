$(document).ready(function(){
    var swiper = new Swiper(".project_slide", {
        slidesPerView:1,
         autoplay: {
           delay: 2000,
           disableOnInteraction: false,
         },
        loop: true,
        effect: 'fade',
        navigation: {
        nextEl: ".swiper_arrow .swiper-button-next",
        prevEl: ".swiper_arrow .swiper-button-prev",
        },
      });
  
});



//swiper start
$(document).ready(function(){
    //main visual slide
    //�섎떒 �몃꽕��
    var screenWidth = $(window).width();
    var swiper = new Swiper(".product1", {
      slidesPerView: 6,
      freeMode: true,
      
    });
    
    //�곷떒 諛깃렇�쇱슫��
    var swiper2 = new Swiper(".product2", {
      loop: true,
      effect:'fade',
      touchStartPreventDefault:false,
    //   autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    //   },
      thumbs: {
          swiper: swiper,
      },
    });

    $(".product1 .swiper-slide").hover(
        function () {
            var slideIndex = $(this).index();
            swiper2.slideTo(slideIndex);
        },
        function () {
            // �몃쾭 �앸궇 �� �꾨Т �숈옉 �� ��
        }
    );

    function updateSwiperBehavior() {
        if (screenWidth < 1024) {
            // 1024px 諛묒씠硫� �몃쾭 鍮꾪솢�깊솕, �먮룞 �ъ깮 �쒖꽦��
            swiper.detachEvents();
            swiper2.autoplay.start();
        } else {
            // 1024px �댁긽�대㈃ �몃쾭 �쒖꽦��, �먮룞 �ъ깮 鍮꾪솢�깊솕
            swiper.attachEvents();
            swiper2.autoplay.stop();
        }
    }

    updateSwiperBehavior();

    $(window).resize(function () {
        var newScreenWidth = $(window).width();
        if (screenWidth !== newScreenWidth) {
            screenWidth = newScreenWidth;
            updateSwiperBehavior();
        }
    });

  


    //mobile menu 
    $('.hamburger-menu').click(function() {
      $(this).toggleClass('active');
    });

    
    function applyHoverEffect() {
        if ($(window).width() >= 1024) {
            $(".main_visual .slide01").mouseenter(function () {       
                $("body").addClass("hovered");       
            }).mouseleave(function () {      
                $("body").removeClass("hovered");  
            });

             $(".main_visual .slide02").mouseenter(function () {       
                $("body").addClass("hovered2");       
            }).mouseleave(function () {      
                $("body").removeClass("hovered2");  
            });
            $(".main_visual .slide03").mouseenter(function () {       
                $("body").addClass("hovered3");       
            }).mouseleave(function () {      
                $("body").removeClass("hovered3");  
            });
            $(".main_visual .slide04").mouseenter(function () {       
                $("body").addClass("hovered4");       
            }).mouseleave(function () {      
                $("body").removeClass("hovered4");  
            });
            $(".main_visual .slide05").mouseenter(function () {       
                $("body").addClass("hovered5");       
            }).mouseleave(function () {      
                $("body").removeClass("hovered5");  
            }); 
        } else{
            $(".main_visual .slide01").off("mouseenter mouseleave");
            $(".main_visual .slide02").off("mouseenter mouseleave");
            $(".main_visual .slide03").off("mouseenter mouseleave");
            $(".main_visual .slide04").off("mouseenter mouseleave");
            $(".main_visual .slide05").off("mouseenter mouseleave");
        }
    }

     applyHoverEffect(); 

     $(window).resize(function () {
         applyHoverEffect(); 
     });






    // //硫붿씤 鍮꾨뵒�� opacity
    // $(window).on('scroll', function(){
    //     //let _offMain = $("main").offset().top;
    //     //console.log(_offMain);      
      
    //     if($(this).scrollTop() <= 1000){                
    //         $(".main_video").css({
    //             "opacity" : ( 1 - $(window).scrollTop() /1000) 
    //         });           
    //     } 
    // });

    //�ㅻ뜑 fix
    $(window).scroll(function(){
        let rollTop = $(window).scrollTop();
        if(rollTop >= 50){
            $("#header").addClass("fix");
        } else {
            $("#header").removeClass("fix");
        }
    });



})
