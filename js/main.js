var heroHeight = $('.text-head').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg-hero').css('height', (heroHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});