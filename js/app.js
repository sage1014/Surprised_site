$(function(){
    var target0ffset = $('.tt1').offset().top;
    $('html,body').delay(10000).animate({scrollTop: target0ffset}, "slow");
});
$(function(){
    $("#g1").css({opacity:'0'});
    setTimeout(function(){
        $("#g1").stop().animate({opacity:'2000000'},6000);
    },10000);
});