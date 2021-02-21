$(document).ready(function(){
    /*---sticky---*/
  $('.js--section-features').waypoint(function (direction) { 
      if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
         $('nav').removeClass('sticky');
    }
});

    
/* animations*/
    $('.js--wp-1').waypoint(function(direction) { 
    
        $('.js--wp-1').addClass('animated fadeIn');
         
    }, {
        offset:'50%'
    });
    
     $('.js--wp-2').waypoint(function(direction) { 
    
        $('.js--wp-2').addClass('animated fadeInUp');
         
    }, {
        offset:'50%' 
    });
    
     $('.js--wp-3').waypoint(function(direction) { 
    
        $('.js--wp-3').addClass('animated fadeIn');
         
    }, {
        offset:'50%'
    });
     $('.js--wp-4').waypoint(function(direction) { 
    
        $('.js--wp-4').addClass('animated shakeX');
         
    }, {
        offset:'50%'
    });
    
    


/*---Mobile nav---*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $ ('.js--nav-icon i')
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-md-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        } else {
           icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close'); 
        }
        });
        
        
     
    });