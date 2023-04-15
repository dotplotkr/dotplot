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
        };
// Loader end

ChannelIO('boot', {
  "pluginKey": "1f5c0ba8-0135-4a80-9d98-30d0906df7a7" // fill your plugin key
});