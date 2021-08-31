<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>TwoFive Gloves – Guantes de portero profesionales</title>

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="theme-color" content="#212121">

    <link rel="alternate" hreflang="x-default" href="https://twofivegloves.com/en/gloves-pro.php">
    <link rel="alternate" hreflang="es" href="https://twofivegloves.com/gloves-pro.php">
    <link rel="alternate" hreflang="en" href="https://twofivegloves.com/en/gloves-pro.php">
    <link rel="alternate" hreflang="nl" href="https://twofivegloves.com/nl/gloves-pro.php">
    <link rel="alternate" hreflang="ro" href="https://twofivegloves.com/ro/gloves-pro.php">
    <link rel="alternate" hreflang="ca" href="https://twofivegloves.com/ca/gloves-pro.php">
    <link rel="alternate" hreflang="eu" href="https://twofivegloves.com/eu/gloves-pro.php">
    <link rel="alternate" hreflang="gl" href="https://twofivegloves.com/gl/gloves-pro.php">

    <link rel="stylesheet" href="lib/css/custom-icons/flag-icon-css/css/flag-icon.css">

    <?php include 'templates/gloves-list-head.php';?>

  </head>
  <body>

    <header>
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
            <li><a href="index.php" class="backhome"><i class="fas fa-angle-left" style="padding-top:3px;"></i> Home</a></li>
            <li><a style="color:#bf6545" href="gloves-pro.php">Pro Edition</a></li>
            <li><a href="gloves-replica.php">Replica Edition</a></li>
          </ul>
        </div>
      </nav>
      <div id="hero-section">
        <img src="lib/img/gloves-pro-hero.jpg" alt="">
        <div class="head-line-block">
          <h2 class="over-headline white">Guantes de portero</h2>
          <h1 id="head-line"><span style="color:#bf6545;">#</span>PRO EDITION</h1>
          <p class="under-headline white">Concebidos para ofrecer el máximo rendimiento.<br/> Estos guantes son suministrados a nuestros porteros patrocinados para competir en ligas profesionales.</p>
          <a class="button-link" href="#section00" role="button">Ver guantes</a>
        </div>
      </div>
    </header>
    <section class="wrapper" id="section00">
      <div class="container">
        <?php include 'templates/gloves-pro-list.php';?>
      </div>
    </section>
    <section>
      <?php include 'templates/footer.php';?>
    </section>


    <!-- Librerías adicionales -->
    <script src="lib/js/jquery-3.5.0.min.js" type='text/javascript'></script>
    <script src="bootstrap-4.4.1/js/bootstrap.min.js"></script>

    <!-- Librerías de plugins -->

    <script src="plugins/skrollr/skrollr.min.js"></script>
    <script src="plugins/swiper/swiper.min.js"></script>
    <script src="plugins/font-awesome/js/all.min.js"></script>


    <!-- Archivo personalizado de Javascript -->
    <script src="lib/js/index.js?v=1.21"></script>

  </body>
</html>
