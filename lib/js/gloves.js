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
            $('#word-mark').removeClass('white');
            $('#logo').removeClass('white');
            $('.bar').removeClass('background-white');
          });
        });

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
        }},
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      });

      //FOOTER-JS

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
