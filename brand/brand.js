


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

  
// End GSAP


(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();






