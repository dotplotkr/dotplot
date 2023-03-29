console.clear();

gsap.registerPlugin(ScrollTrigger);

$('.dot_second').click(function(){
  $('.main_bar').toggleClass('showback');
  $(this).toggleClass('big');
});

const $cursor = $('.cursor');

$(window).mousemove(function(e) {
  $cursor.css({
    top:e.clientY,
    left:e.clientX
  });
});

$('.cursor-big').mouseenter(function(){
    $('.cursor').addClass('need-to-cursor-big'),
    $('.cursor').css('background-color', 'red')
});

$('.cursor-big').mouseleave(function(){
    $('.cursor').removeClass('need-to-cursor-big')
    $('.cursor').css('background-color', 'white')
});

window.onload = function(){
  $('.loader').delay('1000').fadeOut();
  function scrollToTop(){
    window.scrollTo(0,0)};
  
        };
