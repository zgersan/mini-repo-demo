import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    // console.log("initialProps",initialProps);
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            {/* <title>Website Sveta</title> */}
            {/* <meta charSet="utf-8"/> */}
            {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> */}

            <link href="https://fonts.googleapis.com/css?family=DM+Sans:300,400,700&display=swap" rel="stylesheet"/>
            {/* <link rel='stylesheet prefetch' href='http://fonts.googleapis.com/css?family=Open+Sans'> */}


            <link rel="stylesheet" href="/fonts/icomoon/style.css"/>
            <link rel="stylesheet" href="/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/css/animate.min.css"/>
            <link rel="stylesheet" href="/css/jquery.fancybox.min.css"/>
            
            <link rel="stylesheet" href="/css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="/css/owl.theme.default.min.css"/>

            <link rel="stylesheet" href="/fonts/flaticon/font/flaticon.css"/>
            <link rel="stylesheet" href="/css/aos.css"/>
            <link rel="stylesheet" href="/css/style.css"/>

            

            {/* <link rel="stylesheet" href="/node_modules/swiper/swiper.scss"/>              */}
{/* 
            <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css"/>
            <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/> */}


        </Head>
        <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-wrap" id="home-section">
          <Main />
        </div>
          <NextScript />
          {/* <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script> */}
            <script src="/js/jquery-3.3.1.min.js"></script>
            <script src="/js/popper.min.js"></script>
            <script src="/js/bootstrap.min.js"></script>
            <script src="/js/owl.carousel.min.js"></script>

            <script src="/js/jquery.sticky.js"></script>

            <script src="/js/jquery.waypoints.min.js"></script>
            <script src="/js/jquery.animateNumber.min.js"></script>
            <script src="/js/jquery.fancybox.min.js"></script>
            <script src="/js/jquery.easing.1.3.js"></script>
            <script src="/js/aos.js"></script>
            <script src="/js/main.js"></script>


            {/* <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument