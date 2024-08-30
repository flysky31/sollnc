
$(document).ready(function(){
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
