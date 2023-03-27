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
  gsap.from('.title_wrapper > .title',{
    y:60,
    opacity:0,
    duration:1,
    delay:1
  });
        };

        gsap.from('.scroll1', {
          scrollTrigger:{
            trigger:'.scroll1',
            scrub:true,
            start:"top +=33%",
            end:"bottom +=90%",
            markers:false
          },
          opacity:0,
          x: -1000,
          duration: 4
        });

        gsap.from('.scroll2', {
          scrollTrigger:{
            trigger:'.scroll2',
            scrub:true,
            start:"top +=80%",
            end:"bottom +=100%",
            markers:false
          },
          opacity:0,
          x: -1000,
          duration: 4
        });

