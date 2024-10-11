// pages/_app.js
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Parlor Banquets - The Perfect Venue for Your Celebrations</title>
        <meta
          name="keywords"
          content="banquet hall, event venue, wedding venue, birthday party, dinner party, baby shower, Parlor Banquets, social events, celebrations, corporate events, party venue"
        />
        <meta
          name="description"
          content="Parlor Banquets offers a stunning venue for weddings, birthday parties, dinner parties, baby showers, and other social events. Experience exceptional service, elegant decor, and unforgettable moments."
        />
        <meta name="author" content="Parlor Banquets" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Parlor Banquets - The Perfect Venue for Your Celebrations"
        />
        <meta
          property="og:description"
          content="Celebrate your special moments at Parlor Banquets. From weddings to baby showers, our venue provides the perfect setting for all your events."
        />
        <meta
          property="og:image"
          content="https://parlorbanquet.com/assets/images/ogparlor.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Parlor Banquets - The Perfect Venue for Your Celebrations"
        />
        <meta
          name="twitter:description"
          content="Celebrate your special moments at Parlor Banquets. From weddings to baby showers, our venue provides the perfect setting for all your events."
        />
        <meta
          name="twitter:image"
          content="https://parlorbanquet.com/assets/images/ogparlor.webp"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
        />
        <link
          rel="icon"
          href="assets/images/img/fav.webp"
          style={{ backgroundColor: 'white' }}
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rouge+Script&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://www.pannellum.org/css/pannellum.css" />
        <link href="assets/css/font-awesome-all.css" rel="stylesheet" />
        <link href="assets/css/flaticon.css" rel="stylesheet" />
        <link href="assets/css/owl.css" rel="stylesheet" />
        <link href="assets/css/bootstrap.css" rel="stylesheet" />
        <link href="assets/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="assets/css/animate.css" rel="stylesheet" />
        <link href="assets/css/nice-select.css" rel="stylesheet" />
        <link href="assets/css/jquery-ui.css" rel="stylesheet" />
        <link href="assets/css/color.css" rel="stylesheet" />
        <link href="assets/css/elpath.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
        <link href="assets/css/my.css" rel="stylesheet" />
        <link href="assets/css/gallery.css" rel="stylesheet" />
        <link href="assets/css/responsive.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css"
        />
      </Head>

      {/* Initialize GTranslate settings */}
      <Script
        id="gtranslate-settings"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.gtranslateSettings = {
              "default_language": "en",
              "languages": ["en", "fr", "de", "it", "es", "gu", "hi"],
              "wrapper_selector": ".mainhide",
              "switcher_horizontal_position": "right",
              "switcher_vertical_position": "top",
              "alt_flags": {"en": "usa"}

            };
          `,
        }}
      />

      <Script
        src="https://cdn.gtranslate.net/widgets/latest/float.js"
        strategy="lazyOnload"
        defer
      />
      <div className="mainhide"></div>

      <Component {...pageProps} />

      {/* jQuery plugins */}
      <script src="assets/js/jquery.js"></script>
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/owl.js"></script>
      <script src="assets/js/wow.js"></script>
      <script src="assets/js/validation.js"></script>
      <script src="assets/js/jquery.fancybox.js"></script>
      <script src="assets/js/appear.js"></script>
      <script src="assets/js/scrollbar.js"></script>
      <script src="assets/js/isotope.js"></script>
      <script src="assets/js/jquery.nice-select.min.js"></script>
      <script src="assets/js/parallax-scroll.js"></script>
      <script src="assets/js/text_animation.js"></script>
      <script src="assets/js/text_plugins.js"></script>
      <script src="assets/js/jquery-ui.js"></script>
      <script src="assets/js/script.js"></script>
    </>
  );
}

export default MyApp;
