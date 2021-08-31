<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>TwoFive Gloves – 2020Johannesburg10Pro</title>

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="theme-color" content="#212121">

    <?php include 'templates/gloves-head.php';?>

  </head>
  <body>

    <header style="background-image: linear-gradient(#EDEEE8,#409530);">
      <nav>
        <div id="brand">
          <div id="logo"></div>
          <h1 id="word-mark">TWOFIVE</h1>
        </div>
        <div id="menu">
          <div id="menu-toggle">
            <div id="menu-icon">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
          </div>
          <ul>
            <li><a href="gloves-pro.php" class="backhome"><i class="fas fa-angle-left" style="padding-top:3px;"></i> Atrás</a></li>
            <li><a style="color:#bf6545" href="gloves-2020Johannesburg10Pro.php">Johannesburg'10</a></li>
            <li><a href="#section01">Características</a></li>
            <li id="buy-now"><a href="https://twofivegloves.com/shop/?product=2020-johannesburg10-pro">Compra online</a></li>
          </ul>
        </div>
      </nav>
      <div id="hero-section">
        <img src="lib/img/gloves/2020-Johannesburg10-Pro/2020-Johannesburg10-Pro.jpg" alt="">
        <div class="head-line-block">
          <p class="edition-statement">PRO EDITION</p>
          <h1 id="head-line" class="long"><span style="color:#bf6545;">#</span>Johannesburg'10</h1>
          <a class="button-link spritetrigger" href="gloves-2020Johannesburg10Pro-360view.php" role="button">Vista 360°</a>
        </div>
        <div class="arrow animate__animated animate__pulse"><a href="#section01"><i class="fas fa-angle-double-down"></i></a></div>
      </div>
    </header>

    <section class="wrapper" style="background:#2a2e31;" id="section01">
            <!-- Swiper -->
        <div class="history-swiper swiper-container">
          <div class="swiper-wrapper">

             <div class="swiper-slide">
               <div class="img-frame">
                 <img src="lib/img/gloves/2020-Johannesburg10-Pro/2020Johannesburg10-Pro_palm.jpg" alt="">
               </div>
                  <div class="text-container">
                    <?php include 'templates/gloves-palm-gigagrip.php';?>
                  </div>
                  <div class="drag-icon animate__animated animate__pulse"></div>
              </div>

              <div class="swiper-slide">
                <div class="img-frame">
                  <img src="lib/img/gloves/2020-Johannesburg10-Pro/2020Johannesburg10-Pro_cut.jpg" alt="">
                </div>
                  <div class="text-container">
                    <?php include 'templates/gloves-cut-rollneg.php';?>
                  </div>
                <div class="drag-icon animate__animated animate__pulse"></div>
               </div>

               <div class="swiper-slide">
                 <div class="img-frame">
                   <img src="lib/img/gloves/2020-Johannesburg10-Pro/2020Johannesburg10-Pro_back.jpg" alt="">
                 </div>
                   <div class="text-container">
                     <?php include 'templates/gloves-back-3dreinforcement.php';?>
                   </div>
                 <div class="drag-icon animate__animated animate__pulse"></div>
                </div>

                <div class="swiper-slide">
                  <div class="img-frame">
                    <img src="lib/img/gloves/2020-Johannesburg10-Pro/2020Johannesburg10-Pro_wrist.jpg" alt="">
                  </div>
                  <div class="text-container">
                    <?php include 'templates/gloves-wrist-latex-light.php';?>
                  </div>
                  <div class="arrow animate__animated animate__pulse"><a href="#premium"><i class="fas fa-angle-double-down"></i></a></div>
                 </div>

          </div>

          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

    </section>
      <?php include 'templates/gloves-twofivepremium-pro.php';?>
    <section>
      <?php include 'templates/footer.php';?>
    </section>

    <!-- Librerías adicionales -->
    <script src="lib/js/jquery-3.5.0.min.js" type='text/javascript'></script>
    <script src="bootstrap-4.4.1/js/bootstrap.min.js"></script>

    <!-- Librerías de plugins -->

    <script src="plugins/skrollr/skrollr.min.js"></script>
    <script src="plugins/swiper/swiper.min.js"></script>
    <script src="plugins/spritespin/spritespin.js"></script>
    <script src="plugins/font-awesome/js/all.min.js"></script>
    <script src="plugins/featherlight-1.7.13/src/featherlight.js"></script>


    <!-- Archivo personalizado de Javascript -->
    <script src="lib/js/gloves.js"></script>

  </body>
</html>
