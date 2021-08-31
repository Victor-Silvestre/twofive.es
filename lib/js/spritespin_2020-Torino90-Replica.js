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

//2020Torino90 SS

$(function() {
    $(".2020Torino90-Replica").spritespin({
      // path to the source images.
      source: [
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-01.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-02.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-03.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-04.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-05.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-06.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-07.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-08.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-09.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-10.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-11.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-12.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-13.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-14.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-15.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-16.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-17.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-18.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-19.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-20.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-21.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-22.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-23.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-24.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-25.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-26.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-27.png",
        "lib/img/gloves/2020-Torino90-Replica/spritespin/product-spin-28.png",
      ],
      width   : 550,  // width in pixels of the window/frame
      height  : 691,  // height in pixels of the window/frame
      sense: -1,
      responsive: true,
      animate: false,
      frames: 28,
      plugins: [
        'progress',
        '360',
        'drag'
    ]
    });
    })
