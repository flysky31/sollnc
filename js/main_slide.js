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


    
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

      //메인 영상 부분롤링
      var swiper = new Swiper(".vertical_slide", {
          direction: "vertical",    
          autoHeight: true,
            autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            },
          loop:true,
          speed:1000,
      });

});



//swiper start
$(document).ready(function(){
    //main visual slide
    var screenWidth = $(window).width();
    var swiper = new Swiper(".product1", {
      slidesPerView: 6,
      freeMode: true,
      
    });
    
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

        }
    );

    function updateSwiperBehavior() {
        if (screenWidth < 1024) {
            swiper.detachEvents();
            swiper2.autoplay.start();
        } else {
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
      $("#header").toggleClass('active');
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
