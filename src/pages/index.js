import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

import Events from "./Event";
import Testimonials from "./Testimonials";
import EventHighlights from "./EventHighlights";
import Viewer from "./Viewer";
import GallerySection from "./GallerySection";
import ContactForm from "./ContactForm";
// import { Viewer } from "panolens";
import { useCookies } from "react-cookie";
const carouselOptions = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false, // Disable default arrows to use custom ones
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Home = () => {
  // const [cookies, setCookie] = useCookies(["cookieConsent"]);
  // const [isSticky, setIsSticky] = useState(false);

  // const ctext =
    // "We use cookies to enhance your experience at Parlour Banquets. By continuing to browse our site at https://parlorbanquet.com/, you consent to our use of cookies for personalized content and improved services. Learn more in our privacy policy.";
    // const giveCookieConsent = () => {
    //   setCookie("Name", "Parlor Banquets", { path: "/" });
    //   setCookie("location", "2863 Woodbridge Ave, Edison NJ", { path: "/" });
    //   setCookie("area", "New Jersey", { path: "/" });
    //   setCookie("website", "https://parlorbanquet.com/", { path: "/" });
    //   setCookie("best", "Best banquets for all celebrations", { path: "/" });
    //   setCookie(
    //     "Keywords",
    //     "Banquets, Marriage hall, Party hall, Social Gathering, Event Venue, Wedding Reception, Corporate Events, Special Occasions, Banquet Hall Rental, Celebration Venue, Conference Room, Catering Services, Party Venue, Elegant Banquets, Luxury Events, Event Planning, Private Events, Meeting Space, Gathering Space, Festive Events, Holiday Parties, Birthday Parties",
    //     { path: "/" }
    //   );
    
    //   // Redirect to another page after setting cookies
    //   // window.location.href = "https://parlorbanquet.com/";
    // };
    
  
  const sliderRef = useRef(null);

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Layout>
      <Head>
        <title>
          Parlor Banquet - The Ideal Venue for Unforgettable Weddings, Corporate
          Events, and Social Gatherings in Edison, NJ | Elegant Spaces &
          Exceptional Service
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Parlor Banquet, event venue, wedding venue, banquet hall, social events, corporate events, birthday parties, elegant venue, event planning, Edison NJ"
        />
        <meta
          name="description"
          content="Discover Parlor Banquet, the ideal venue in Edison, NJ for unforgettable weddings, corporate events, and social gatherings. Experience our elegant spaces and exceptional service for all your event needs."
        />
        <meta name="author" content="Parlor Banquet" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) metadata */}
        <meta
          property="og:title"
          content="Parlor Banquet - The Ideal Venue for Unforgettable Weddings, Corporate Events, and Social Gatherings in Edison, NJ | Elegant Spaces & Exceptional Service"
        />
        <meta
          property="og:description"
          content="Host your next event at Parlor Banquet in Edison, NJ. Our venue offers elegant spaces and exceptional service for weddings, corporate gatherings, and more. Explore our facilities and make your event memorable."
        />
        <meta
          property="og:image"
          content="https://parlorbanquet.com/assets/images/ogparlor.webp"
        />
        <meta property="og:url" content="https://parlorbanquet.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Parlor Banquet - The Ideal Venue for Unforgettable Weddings, Corporate Events, and Social Gatherings in Edison, NJ | Elegant Spaces & Exceptional Service"
        />
        <meta
          name="twitter:description"
          content="Discover Parlor Banquet, the ideal venue in Edison, NJ for unforgettable weddings, corporate events, and social gatherings. Experience our elegant spaces and exceptional service for all your event needs."
        />
        <meta
          name="twitter:image"
          content="https://parlorbanquet.com/assets/images/ogparlor.webp"
        />
      </Head>
      // {(cookies.location === undefined || cookies.location === "") && (
      //   <footer className="cookie-footer">
      //     <div
      //       className={`footer-content ${isSticky ? "is-sticky" : ""}`}
      //       style={{
      //         position: "fixed",
      //         left: 0,
      //         bottom: 20,
      //         right: 0,
      //         alignItems: "center",
      //         justifyContent: "space-between",
      //         padding: "32px 20px",
      //         backgroundColor: "#000",
      //         color: "white",
      //         maxWidth: "1200px", // Adjust based on your container size
      //         margin: "0 auto", // Center container horizontally
      //         zIndex: 1005,
      //         border: "1px solid #c59c5f",
      //       }}
      //     >
      //       <div className="cookie-consent">
      //         <p
      //           style={{
      //             margin: 0,
      //             color: "#fff",
      //             textAlign: "justify",
      //             fontSize: "16px", // Default font size
      //           }}
      //         >
      //           At Parlour Banquets, we are committed to enhancing your browsing
      //           experience. By continuing to explore our website at
      //           <a
      //             href="https://parlorbanquet.com/"
      //             style={{ color: "#d2ae6d", textDecoration: "underline" }}
      //           >
      //             https://parlorbanquet.com/
      //           </a>
      //           , you acknowledge and agree to our use of cookies. These cookies
      //           are used to provide you with a more personalized and efficient
      //           browsing experience, including tailored content and improved
      //           services. Your continued use of our site indicates your consent
      //           to this practice.
      //         </p>
      //       </div>
      //       <div style={{ display: "flex", justifyContent: "flex-end" }}>
      //         <button
      //           className="theme-btn-one"
      //           style={{
      //             backgroundColor: "#d2ae6d",
      //             border: "none",
      //             color: "white",
      //             padding: "10px 20px",
      //             cursor: "pointer",
      //             fontSize: "14px",
      //             marginRight: "10px", // Space between the buttons
      //           }}
      //           onClick={() => {
      //             /* Handle cancel action */
      //           }}
      //         >
      //           Cancel
      //         </button>
      //         // <button
      //         //   className="theme-btn-one"
      //         //   style={{
      //         //     backgroundColor: "#d2ae6d",
      //         //     border: "none",
      //         //     color: "white",
      //         //     padding: "10px 20px",
      //         //     cursor: "pointer",
      //         //     fontSize: "14px",
      //         //   }}
      //         //   onClick={giveCookieConsent}
      //         // >
      //         //   Accept
      //         // </button>
      //       </div>
      //     </div>
      //     <style jsx>{`
      //       @media (max-width: 768px) {
      //         .cookie-consent p {
      //           font-size: 14px; // Smaller font size for mobile
      //         }

      //         .theme-btn-one {
      //           padding: 8px 16px; // Smaller padding for mobile
      //           font-size: 12px; // Smaller font size for buttons
      //         }

      //         .footer-content {
      //           padding: 20px 10px; // Adjust container padding for mobile
      //         }
      //       }
      //     `}</style>
      //   </footer>
      // )}

      <Events />

      <section className="about-style-three">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(/assets/images/shape/shape-34.webp)" }}
        />
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-12 col-sm-12 image-column">
              <div className="image_block_two">
                <div className="image-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{
                        backgroundImage:
                          "url(/assets/images/shape/shape-2.webp)",
                      }}
                    />
                    <div
                      className="shape-2"
                      style={{
                        backgroundImage:
                          "url(/assets/images/shape/shape-2.webp)",
                      }}
                    />
                  </div>
                  <figure className="image image-1">
                    <img
                      src="/assets/images/img/abparlor.webp"
                      alt="About Us"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 content-column">
              <div className="content_block_two">
                <div className="content-box">
                  <div className="sec-title mb_20">
                    <span className="sub-title notranslate">
                      Parlor Banquet
                    </span>
                    <h2 style={{ fontSize: 33 }}>
                      SOPHISTICATED VENUES FOR ELEGANT <span>CELEBRATIONS</span>
                    </h2>
                  </div>
                  <div className="text " style={{ marginBottom: "10px" }}>
                    <p>
                      Welcome to{" "}
                      <span className="notranslate">Parlor Banquet</span>, one
                      of the largest and most sophisticated banquet halls in the
                      state. With a capacity to host up to 1600 guests under one
                      roof, our newly renovated venue features multiple halls
                      for various events, ample parking, and customizable décor.
                      Experience excellence in catering, affordability, and
                      flexibility for your memorable celebrations.
                    </p>
                  </div>
                  <ul className="list-style-one clearfix mb_30">
                    <li>Multiple Halls for Simultaneous Events</li>
                    <li>Host Multiple Parties on the Same Day</li>
                    <li>Extensive Parking with Easy Access</li>
                    <li>Spacious Venue for Large Gatherings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-section bg-color-1">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: "url(assets/images/shape/shape-5.webp)" }}
          />
          <div
            className="pattern-2"
            style={{ backgroundImage: "url(assets/images/shape/shape-6.webp)" }}
          />
          <div
            className="pattern-3"
            style={{ backgroundImage: "url(assets/images/shape/shape-7.webp)" }}
          />
        </div>
        <div className="auto-container">
          <div className="inner-container">
            <div className="sec-title mb_50">
              <span className="sub-title">Our Events</span>
              <h2 style={{ color: "#ffffff" }}>
                Excellence in Every
                <span style={{ color: "#f0c77b" }}>Events</span> We Offer
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-one wow fadeInUp animated animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon-17" />
                    </div>
                    <h3>
                      <Link href="/BirthdayParty">Birthday Party</Link>{" "}
                      {/* Update to Link */}
                    </h3>
                    <p style={{ paddingBottom: "15px" }}>
                      The perfect venue for birthday parties, offering fun,
                      elegance, and unforgettable memories.
                    </p>
                    <div className="btn-box">
                      <Link href="/BirthdayParty" className="theme-btn-two">
                        {" "}
                        {/* Update to Link */}
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-one wow fadeInUp animated animated"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "200ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon-container">
                        <div className="icon-box">
                          <i class="fa fa-rings-wedding"></i>
                        </div>
                      </div>
                    </div>
                    <h3>
                      <Link href="/Wedding">Weddings</Link>{" "}
                      {/* Update to Link */}
                    </h3>
                    <p style={{ paddingBottom: "15px" }}>
                      The perfect wedding venue, offering elegance, exceptional
                      service, and unforgettable memories.
                    </p>
                    <div className="btn-box">
                      <Link href="/Wedding" className="theme-btn-two">
                        {" "}
                        {/* Update to Link */}
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-one wow fadeInUp animated animated"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "400ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <i class="bi bi-calendar-event"></i>
                    </div>
                    <h3>
                      <Link href="/CorporateEvents">Corporate Events</Link>{" "}
                      {/* Update to Link */}
                    </h3>
                    <p style={{ paddingBottom: "15px" }}>
                      The perfect venue for corporate events, offering
                      professional service and an elegant atmosphere.
                    </p>
                    <div className="btn-box">
                      <Link href="/CorporateEvents" className="theme-btn-two">
                        {" "}
                        {/* Update to Link */}
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-one wow fadeInUp animated animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "600ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="fa fa-users"></i>
                    </div>
                    <h3>
                      <Link href="/SocialEvents">Social Events</Link>
                    </h3>
                    <p style={{ paddingBottom: "15px" }}>
                      Celebrate with us. Ideal venue for unforgettable social
                      events and gatherings.
                    </p>

                    <div className="btn-box">
                      <Link href="/SocialEvents" className="theme-btn-two">
                        {" "}
                        {/* Update to Link */}
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-section">
        <div
          className="bg-layer parallax-bg"
          data-parallax='{"y": 100}'
          style={{
            backgroundImage: "url(assets/images/img/ball-room-bar.webp)",
          }}
        />
        <div className="auto-container">
          <div className="sec-title light centred mb_100">
            <span className="sub-title">Our Facilities</span>
            <h2 style={{ color: "#000000" }}>
              {" "}
              Creating Memorable Events with Superior Services
            </h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 menu-block">
              <div
                className="menu-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shape/shape-3.webp)",
                      }}
                    />
                    <div
                      className="shape-2"
                      style={{
                        backgroundImage:
                          "url(assets/images/shape/shape-4.webp)",
                      }}
                    />
                  </div>
                  <div className="inner">
                    <div className="single-item">
                      <div className="upper-box">
                        <h4>
                          <a>Event Planning</a>
                        </h4>
                      </div>
                      <div className="text">
                        Let our experienced event planners take care of every
                        detail, from decoration to logistics, ensuring a
                        flawless event experience.
                      </div>
                    </div>
                    <div className="single-item">
                      <div className="upper-box">
                        <h4>
                          <a>Audio-Visual Equipment</a>
                        </h4>
                      </div>
                      <div className="text">
                        Access state-of-the-art audio-visual equipment for
                        presentations, entertainment, and more, ensuring your
                        event runs smoothly.
                      </div>
                    </div>
                    <div className="single-item">
                      <div className="upper-box">
                        <h4>
                          <a>Customizable Decor</a>
                        </h4>
                      </div>
                      <div className="text">
                        Transform our venue with personalized decor options to
                        match your event’s theme and make a lasting impression.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 menu-block">
              <div
                className="menu-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shape/shape-3.webp)",
                      }}
                    />
                    <div
                      className="shape-2"
                      style={{
                        backgroundImage:
                          "url(assets/images/shape/shape-4.webp)",
                      }}
                    />
                  </div>
                  <div className="inner">
                    <div className="single-item">
                      <div className="upper-box">
                        <h4>
                          <a>Flexible Room Availability</a>
                        </h4>
                      </div>
                      <div className="text">
                        Choose from a variety of room setups and configurations
                        to perfectly match your event needs and guest count.
                      </div>
                    </div>

                    <div className="single-item">
                      <div className="upper-box">
                        <h4>
                          <a>Free Wi-Fi</a>
                        </h4>
                      </div>
                      <div className="text">
                        Enjoy seamless connectivity with complimentary
                        high-speed Wi-Fi available throughout our venue.
                      </div>
                    </div>
                    <div className="single-item">
                      <div className="upper-box">
                        <h4>
                          <a>On-site Catering</a>
                        </h4>
                      </div>
                      <div className="text">
                        Delight your guests with our diverse and customizable
                        catering options, crafted to suit every taste and
                        preference.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GallerySection></GallerySection>

      <Viewer></Viewer>
      <Testimonials />

      <section className="news-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_45">
            <span className="sub-title">Latest Events</span>
            <h2>
              Discover Our Latest <br />
              Exciting Events
            </h2>
          </div>

          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a>
                        <img
                          src="assets/images/img/Grand-Wedding.webp"
                          alt=""
                        />
                      </a>
                    </figure>
                    <div className="date">
                      25 <span>JULY</span>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <a>Grand Wedding </a>
                    </h3>
                    <p>
                      A magnificent wedding celebration with splendid
                      arrangements and memorable moments.
                    </p>
                    <div class="btn-box">
                      <Link className="theme-btn-two" href="/Wedding">
                        {" "}
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a>
                        <img src="assets/images/img/Birthday.webp" alt="" />
                      </a>
                    </figure>
                    <div className="date">
                      18 <span>JULY</span>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <a>Exciting Birthday Bash</a>
                    </h3>
                    <p>
                      An exhilarating birthday party filled with vibrant
                      activities, lively entertainment, and unforgettable
                      experiences.
                    </p>
                    <div class="btn-box">
                      <Link className="theme-btn-two" href="/BirthdayParty">
                        {" "}
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a>
                        <img src="assets/images/img/Dinner.webp" alt="" />
                      </a>
                    </figure>
                    <div className="date">
                      10 <span>JULY</span>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <a>Corporate Gala Dinner</a>
                    </h3>
                    <p>
                      A prestigious corporate gala with refined elegance,
                      distinguished guests, and an exceptional dining
                      experience.
                    </p>
                    <div class="btn-box">
                      <Link className="theme-btn-two" href="/CorporateEvents">
                        {" "}
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventHighlights></EventHighlights>

      <ContactForm></ContactForm>
    </Layout>
  );
};

export default Home;
