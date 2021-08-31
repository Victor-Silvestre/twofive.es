//Load random Background

var mediaWidth = window.matchMedia("(max-width: 992px)")

function randomBackgroundMobile(mediaWidth) {
  if (mediaWidth.matches) {
    var images = ['landing-hero-mobile.jpg','landing-hero-mobile-2.jpg'];
    $('#index .background').css({'background-image': 'url(../lib/css/bg-img/' + images[Math.floor(Math.random() * images.length)] + ')'});
  }
}
randomBackgroundMobile(mediaWidth)
mediaWidth.addListener(randomBackgroundMobile)

//Loading screen

var loader;

function loader() {
  loader = setTimeout(showPage, 2000);
}

//Page appearing effect

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("theDiv").style.opacity = "1";
  document.getElementById("theDiv").style.transition = "1s";
}


$(() => {

  //On Scroll Functionality
  $(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
    windowTop > 100 ? $('ul').css('top', '100px') : $('ul').css('top', '160px');
  });

  //Click Logo To Scroll To Top
  $('#logo, #word-mark').on('click', () => {
    $('html,body').animate({
      scrollTop: 0 },
    500);
  });

  $('#ScrollTop').on('click', () => {
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

    $('li > a').on('click', () => {
      $('ul').removeClass('showMenu');
      $('#menu-toggle').removeClass('closeMenu');
      $('#word-mark').removeClass('white');
      $('#logo').removeClass('white');
      $('.bar').removeClass('background-white');
    });
  });

});

//PRODUCT SWIPER

var swiper_1product = new Swiper('.swiper_1product', {
  slidesPerView: 1,
  breakpoints: {
    650: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    }
  },
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper_2product = new Swiper('.swiper_2product', {
  slidesPerView: 1,
  breakpoints: {
    650: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    }
  },
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper_3product = new Swiper('.swiper_3product', {
  slidesPerView: 1,
  breakpoints: {
    650: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  },
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// NEWS Swiper

var newsSwiper = new Swiper(".newsSwiper", {
  effect: 'fade',
  autoHeight: true,
  spaceBetween: 20,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var newsSwiper2 = new Swiper(".newsSwiper2", {
  slidesPerView: 1,
  spaceBetween: 5,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

//KEEPER SWIPER

var keeperSwiper = new Swiper('.keeper-slider', {
  effect: 'coverflow',
  loop:'true',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//LAZY-LOAD
[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
	  img.removeAttribute('data-src');
  };
});

//HISTORY SWIPER

var swiper = new Swiper('.history-swiper', {
  effect: 'coverflow',
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


//VALUES SWIPER
var menu = ['', '', '','', '', '','', '', '']
var swiper = new Swiper('.values-swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
	   clickable: true,
     renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span>';
      }
    },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//FOOTER SWIPERS

var swiper_footer = new Swiper('.club-logo', {
  slidesPerView: 2,
  loop:true,
  speed: 1000,
  breakpoints: {
    500: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 7,
    },
    1600:{
      slidesPerView: 10,
    },
  },
  autoplay: {
    delay: 2500,
  },
});

var swiper_footer = new Swiper('.academy-logo', {
  slidesPerView: 1,
  loop:true,
  speed: 1000,
  breakpoints: {
    500: {
    slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
    1600:{
      slidesPerView: 7,
    },
  },
  autoplay: {
    delay: 2400,
  },
});
