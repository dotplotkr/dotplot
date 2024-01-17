


//Plugin
gsap.registerPlugin(ScrollTrigger) 
//End plugin






//Cursor

const $cursor = $('.cursor');

$(window).mousemove(function(e) {
  $cursor.css({
    top:e.clientY,
    left:e.clientX
  });
});


$('.view').mouseenter(function(){
  $cursor.text('PLAY');
  $('.cursor').css({
    'width':'75px',
    'height':'75px',
    'mix-blend-mode':'normal'
    });
});

$('.view').mouseleave(function(){
  $('.cursor').text('')
  $('.cursor').css({
    'width':'15px',
    'height':'15px',
    'mix-blend-mode':'difference'
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

//End Cursor





//Loader
var $container = $('#progress'),
$progressBar = $container.find('.progress-bar'),
$progressText = $container.find('.progress-text'),
//$progressText = $container.find('.progress-text'),

imgLoad = imagesLoaded('body'),
imgTotal = imgLoad.images.length,
imgLoaded = 0,
current = 0,

progressTimer = setInterval(updateProgress, 1000/60);


imgLoad.on('progress', function(){
  imgLoaded++;
  console.log(imgLoaded);
});


function updateProgress(){
  var target = (imgLoaded/imgTotal) * 100;
  var imageBox = $(".image-box");

  $progressBar.css({width:target + 90 +'px'});
  imageBox.css({scale:"4", rotate:"540deg", scale:"20"})

  if(target == 100){
    clearInterval(progressTimer);
    

    $progressBar.delay(500).animate({opacity:100}, 250, function(){
    $container.animate({left:'-100%', opacity:'0'}, 300);
    imageBox.css({scale:"1", rotate:"0deg", scale:"1"}, 500);
      });
    
  }
};
//$progressBar.add($progressText).delay(500).animate

// End Loader




// Header 
$('.header-menubox').click(function(){
  $('.menu-second').toggleClass('scale')
  $('.menuSelector').toggleClass('opacity')
  $('.menuSelectorWrapper').toggleClass('displayFlex')
  
});
// End header





// GSAP
gsap.from('.slogan-box-up', {
  y:100,
  opacity:0,
  duration:1,
  delay:1
 });
 
 gsap.from('.slogan-box-down', {
   y:100,
   opacity:0,
   duration:1,
   delay:1.2
  });

  
// End GSAP


(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

const introVideo = $(".video-box > .intro-video")

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:".area-2",
    markers:false,
    scrub:.5,
    start:"20% center",
    end:"20% center"
  }
})

tl.to(".intro-background-container",{backgroundColor:"#F2F0F0"});


let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".intro-background-container",
    markers:false,
    scrub:true,
    start:"-10% center",
    end:"30% center"
  }
})


tl2.to(".dot",{y:500});


let tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:".area-4",
    markers:false,
    scrub:true,
    start:"top center",
    end:"20% center"
  }
})




tl3.to(".works-bg",{height:4000, width:4000, y:300});


let tl4 = gsap.timeline({
  scrollTrigger:{
    trigger:".area-4",
    markers:false,
    scrub:true,
    start:"40% center",
    end:"100% center"
  }
})


tl4.to(".works-bg",{height:0, width:0});




const circularSlider = document.querySelector('.wrapper'),
slides = document.querySelectorAll('.slides'),
descriptionsBox = document.querySelectorAll('.descriptions-box'),
images = document.querySelectorAll('.slides img');


slides.forEach((slide, i) => {
  slide.onclick = () => {
    circularSlider.style.transform = `rotateZ(-${360 / 24 * (i + 15.695)}deg)`;
    

    images.forEach((img , i) => {
      img.style.setProperty('--img-no', 1);
      img.classList.remove('active');
      descriptionsBox[i].classList.remove('active');
    }) 
    

    descriptionsBox[i].classList.add('active');
    slide.querySelector('img').classList.add('active');    
  }
})


document.addEventListener("mousemove", parallax);

function parallax(e){
  document.querySelectorAll(".main-image").forEach(function(move){

    var movingValue = move.getAttribute("data-value");
    var x = e.clientX * movingValue;
    var y = e.clientY * movingValue;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

  });
}



const vimeoClose = $('.showreel > div');
const vimeo = document.getElementById('vimeo');
const vimeoBg = $('.showreel-bg');

introVideo.click(function(){
  $('.showreel').addClass('displayFlex')
});


vimeoClose.click(function(){
  $('.showreel').removeClass('displayFlex');
  vimeoBg.removeClass('displayFlex');

  vimeo.setAttribute('src','https://player.vimeo.com/video/887994748?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479');
});



