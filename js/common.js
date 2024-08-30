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
        } 
    }

     applyHoverEffect(); 

     $(window).resize(function () {
         applyHoverEffect(); 
     });



    $(window).scroll(function(){
        let rollTop = $(window).scrollTop();
        if(rollTop >= 50){
            $("#header").addClass("fix");
        } else {
            $("#header").removeClass("fix");
        }
    });

});
