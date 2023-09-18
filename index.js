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

// Loader start
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
// Loader end

gsap.from('.why', {
  scrollTrigger:{
    trigger:'.why',
    toggleActions: 'restart none none none',
  },
  x: -2,
  y: -10,
  duration: 0.5,
  color:'black'
  
});

$('.header-menuBox-Mo').click(function(){
  $('.header-menuBox-Mo').addClass('displayNone')
  $('.header-menuBox-Mos').addClass('displayFlex')
  $('.menuBox-Mo').addClass('move')
  $('.menuSelectorWrapper').addClass('displayBlock')
  $('.menuSelector').addClass('opacity')
  
});


$('.header-menuBox-Mos').click(function(){
  $('.header-menuBox-Mos').removeClass('displayFlex')
  $('.header-menuBox-Mo').removeClass('displayNone')
  $('.menuBox-Mo').removeClass('move')
  $('.menuSelectorWrapper').removeClass('displayBlock')
  $('.menuSelector').removeClass('opacity')
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: -280,
  slidesPerView: "1",
  coverflowEffect: {
    rotate: -50,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
