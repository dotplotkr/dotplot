//Plugin start
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
        };
// Loader end

// ScroolTop start
$('body').imagesLoaded( function(){
  $('body,html').delay('1000').animate({scrollTop : 0}, 500);
});
// ScroolTop end