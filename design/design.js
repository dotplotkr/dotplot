//Plugin start
gsap.registerPlugin(ScrollTrigger);

//Plugin end

//Cursor start
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

//Cursor end

//Loader start
window.onload = function(){
  $('.loader').delay('1000').fadeOut();
  $('body,html').delay('1000').animate({scrollTop : 0}, 500);
  gsap.from('.titleBox > .title',{
    y:60,
    opacity:0,
    duration:1,
    delay:1
  });
};
//Loader end
      
// scrollTrigger start
gsap.from('.scroll1', {
  scrollTrigger:{
    trigger:'.scroll1',
    scrub:true,
    start:"top +=23%",
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
// scrollTrigger end

// ScroolTop start
$('body').imagesLoaded( function(){
  $('body,html').delay('1000').animate({scrollTop : 0}, 500);
});
// ScroolTop end
