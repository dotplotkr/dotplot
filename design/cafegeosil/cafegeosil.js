//Plugin
gsap.registerPlugin(ScrollTrigger);
//End Plugin






//Cursor
const $cursor = $('.cursor');
const $cursorShadow = $('.cursor-shadow')

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
//End cursor




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
        $progressBar.css({width:target + 90 +'px'});
        //$progressText.text(Math.floor(target) + '%');

        if(target == 100){
          clearInterval(progressTimer);
          $progressBar.delay(500).animate({opacity:100}, 250, function(){
          $container.animate({left:'-100%', opacity:'0'}, 300);
            });
        }
      };
      //$progressBar.add($progressText).delay(500).animate
      
// End loader




// Header 
$('.header-menubox').click(function(){
  $('.menu-second').toggleClass('scale')
  $('.menuSelector').toggleClass('opacity')
  $('.menuSelectorWrapper').toggleClass('displayFlex')
  
});
// End header
