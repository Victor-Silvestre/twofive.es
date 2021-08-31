$(() => {

  //On Scroll Functionality
  $(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
    windowTop > 100 ? $('ul').css('top', '100px') : $('ul').css('top', '160px');
  });

  //Click Logo To Scroll To Top
  $('#logo').on('click', () => {
    $('html,body').animate({
      scrollTop: 0 },
    500);
  });

  //Smooth Scrolling Using Navigation Menu
  $('a[href*="#"]').on('click', function (e) {
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 65 },
    500);
    e.preventDefault();
  });

  //Toggle Menu
  $('#menu-toggle').on('click', () => {
    $('#menu-toggle').toggleClass('closeMenu');
    $('ul').toggleClass('showMenu');
    $('#word-mark').toggleClass('white');
    $('#logo').toggleClass('white');
    $('.bar').toggleClass('background-white');

    $('li').on('click', () => {
      $('ul').removeClass('showMenu');
      $('#menu-toggle').removeClass('closeMenu');
    });
  });

});

//2020Berlin06 SS

$(function() {
  $('.spritespin').spritespin({
    // Set a single image url as source
    source: 'lib/img/gloves/2020-Berlin06-Pro/spritespin/ss-2020Berlin06-Pro.jpg',
    // Define the size of the display.
    width: 550,
    height: 691,
    // Set the total number of frames to show.
    frames: 24,
    // The 12x2 sprite sheet contains 12 frames in one row.
    framesX: 12,
    // reverse interaction direction
    sense: -1,
    responsive: true,
    animate: false,
    plugins: [
      'progress',
      '360',
      'drag'
    ]
  });
})
