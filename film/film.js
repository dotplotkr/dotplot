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
  gsap.from('.title_wrapper > .title',{
    y:60,
    opacity:0,
    duration:1,
    delay:1
  });
};
//Loader end

//ScrollTrigger start
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

gsap.from('.scroll3', {
  scrollTrigger:{
    trigger:'.scroll3',
    scrub:true,
    start:"top +=80%",
    end:"bottom +=100%",
    markers:false
  },
  opacity:0,
  x: -1000,
  duration: 4
});

gsap.from('.scroll4', {
  scrollTrigger:{
    trigger:'.scroll4',
    scrub:true,
    start:"top +=80%",
    end:"bottom +=100%",
    markers:false
  },
  opacity:0,
  x: -1000,
  duration: 4
});

gsap.from('.scroll5', {
  scrollTrigger:{
    trigger:'.scroll5',
    scrub:true,
    start:"top +=80%",
    end:"bottom +=100%",
    markers:false
  },
  opacity:0,
  x: -1000,
  duration: 4,
});
//ScrollTriger end

//VideoPause Start
const video1 = document.getElementById('video1');

$('#vpause1-1').click(function(){
  video1.setAttribute('src','https://player.vimeo.com/video/811754494?h=fade456ceb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479');
});

$('#vpause1-2').click(function(){
  video1.setAttribute('src','https://player.vimeo.com/video/811754494?h=fade456ceb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479');
});


const video2 = document.getElementById('video2');

$('#vpause2-1').click(function(){
  video2.setAttribute('src','https://player.vimeo.com/video/811755044?h=f712ac5285&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479');
});

$('#vpause2-2').click(function(){
  video2.setAttribute('src','https://player.vimeo.com/video/811755044?h=f712ac5285&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479');
});

const video3 = document.getElementById('video3');

$('#vpause3-1').click(function(){
  video3.setAttribute('src','https://player.vimeo.com/video/811758951?h=75ffb62dd8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479');
});

$('#vpause3-2').click(function(){
  video3.setAttribute('src','https://player.vimeo.com/video/811758951?h=75ffb62dd8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479');
});

const video4 = document.getElementById('video4');

$('#vpause4-1').click(function(){
  video4.setAttribute('src','https://player.vimeo.com/video/811759169?h=161774dc4d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479');
});

$('#vpause4-2').click(function(){
  video4.setAttribute('src','https://player.vimeo.com/video/811759169?h=161774dc4d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479');
});

const video5 = document.getElementById('video5');

$('#vpause5-1').click(function(){
  video5.setAttribute('src','https://player.vimeo.com/video/811759385?h=752ba1777b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479');
});

$('#vpause5-2').click(function(){
  video5.setAttribute('src','https://player.vimeo.com/video/811759385?h=752ba1777b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479');
});

//VideoPause end