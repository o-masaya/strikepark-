$(function(){
    $('.hamburger').on('click',function(event,isInView,visiblePartX,visiblePartY){
    hamburger();
     });
     $('#navi a').on('click',function(event,isInView,visiblePartX,visiblePartY){
    hamburger();
     });
    });
    function hamburger(){
        $('.hamburger').toggleClass('active');
        if($('.hamburger').hasClass('active')){
            $('#navi').addClass('active');
        }else{
            $('#navi').removeClass('active');
        }
    }