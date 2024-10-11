import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Inquiry from './Inquiry';
import Layout from '../components/Layout';
const SocialEvents = () => {
  const images = [
    "/assets/images/myGallery/so1.webp",
    "/assets/images/myGallery/so2.webp",
    "/assets/images/myGallery/so3.webp",
    "/assets/images/myGallery/so4.webp",
    "/assets/images/myGallery/so5.webp",
    "/assets/images/myGallery/so6.webp",
  ];

  return (
    <Layout>

<Head>
  <title>Social Events at Parlor Banquet - Perfect Venue for Celebrations and Gatherings in Edison, NJ</title>

  <meta charSet="UTF-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <meta name="description" content="Host your social events at Parlor Banquet, featuring a versatile venue in Edison, NJ. Perfect for celebrations, parties, and gatherings with exceptional service and elegant surroundings." />
  <meta name="keywords" content="Social Events, Parlor Banquet, event venue, celebrations, parties, gatherings, Edison NJ" />
  <meta name="author" content="Parlor Banquet" />

  <meta property="og:title" content="Social Events at Parlor Banquet - Perfect Venue for Celebrations and Gatherings in Edison, NJ" />
  <meta property="og:description" content="Experience unforgettable social events at Parlor Banquet. Our venue in Edison, NJ offers an ideal setting for parties, celebrations, and gatherings with top-notch service and style." />
  <meta property="og:image" content="https://parlorbanquet.com/assets/images/img/s1.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://parlorbanquet.com/SocialEvents" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Social Events at Parlor Banquet - Perfect Venue for Celebrations and Gatherings in Edison, NJ" />
  <meta name="twitter:description" content="Discover the ideal venue for your social events at Parlor Banquet in Edison, NJ. Perfect for parties, celebrations, and more with exceptional service and elegant ambiance." />
  <meta name="twitter:image" content="https://parlorbanquet.com/assets/images/img/s1.webp" />
  <meta name="twitter:url" content="https://parlorbanquet.com/SocialEvents" />
</Head>


      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(/assets/images/bgimg/Social-bg.webp)",
          }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h2>Social Events</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Social Events</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="shop-details-content">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <figure className="image-box">

                  <Image src="/assets/images/img/s1.webp" alt="" layout="responsive" width={600} height={400} />
              </figure>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <h4>Celebrate with Us</h4>
                <h2>Exceptional Social Event Planning & Coordination</h2>
                <div className="text">
                  <p>
                    At <span className="notranslate">Parlor Banquet</span>, we excel in organizing unforgettable social events that bring people together. From intimate gatherings to large celebrations, our team manages all details to ensure your event is seamless and enjoyable. We focus on creating a lively and memorable experience that exceeds your expectations.
                  </p>
                </div>
                <ul className="list-style-one clearfix mb_30">
                  <li>Family Reunions</li>
                  <li>Birthday Parties</li>
                  <li>Anniversaries</li>
                  <li>Casual Gatherings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="menu-style-two mb_80" style={{ padding: "0px" }}>
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Key Services</span>
            <h2>Your Social Event, Our Expertise</h2>
          </div>
          <div className="row clearfix keyservices">
            <div className="col-lg-12 col-md-6 col-sm-12 menu-column">
              <div className="menu-inner">
                <div className="inner-box">
                  <div className="single-item">
                    <div className="upper-box">
                      <h4>Creative Themes to Enhance Your Celebration</h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: "5px" }}>
                        We work closely with you to develop a unique theme that captures the spirit of your event. From elegant to festive, our themes make your celebration truly special.
                      </p>
                      <p>
                        <span style={{ color: "#333" }}>Examples:</span>
                        Elegant, Themed, Fun-filled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-6 col-sm-12 menu-column">
              <div className="menu-inner">
                <div className="inner-box">
                  <div className="single-item">
                    <div className="upper-box">
                      <h4>Coordination with Top Vendors for Catering, Decor, and More</h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: "5px" }}>
                        We partner with top vendors for catering, decorations, and other essentials to ensure your event is nothing short of spectacular.
                      </p>
                      <p>
                        <span style={{ color: "#333" }}>Ensuring Quality and Excellence for Your Event</span>
                      </p>
                      <p>
                        We handle all arrangements with professionalism and care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-6 col-sm-12 menu-column">
              <div className="menu-inner">
                <div className="inner-box">
                  <div className="single-item">
                    <div className="upper-box">
                      <h4>On-Site Management for Smooth Operations</h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: "5px" }}>
                        Our dedicated team oversees every detail on-site to ensure everything goes as planned, addressing any issues promptly and effectively.
                      </p>
                      <p>
                        <span style={{ color: "#333" }}>Providing a Hassle-Free and Enjoyable Experience</span>
                      </p>
                      <p>
                        We focus on delivering a seamless experience for you and your guests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-6 col-sm-12 menu-column">
              <div className="menu-inner">
                <div className="inner-box">
                  <div className="single-item">
                    <div className="upper-box">
                      <h4>Detailed Planning for a Memorable Event</h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: "5px" }}>
                        We develop a comprehensive plan to cover every aspect of your social event, ensuring a well-organized and memorable celebration.
                      </p>
                      <p>
                        <span style={{ color: "#333" }}>Thorough Coordination for an Outstanding Event</span>
                      </p>
                      <p>
                        From start to finish, we manage all elements to create a successful event.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-6 col-sm-12 menu-column">
              <div className="menu-inner">
                <div className="inner-box">
                  <div className="single-item">
                    <div className="upper-box">
                      <h4>Personalized Touches for a Unique Experience</h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: "5px" }}>
                        We add personalized elements to make your event truly special, from custom decorations to tailored experiences for your guests.
                      </p>
                      <p>
                        <span style={{ color: "#333" }}>Making Every Celebration Unique and Memorable</span>
                      </p>
                      <p>
                        Our goal is to create a one-of-a-kind experience for everyone involved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section alternat-2 centred mb_100">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(/assets/images/shape/shape-2.webp)" }}
        />
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0ms",
                  animationName: "fadeInUp"
                }}
              >
                <div className="inner-box">
                  <h3>Experience the Difference</h3>
                  <p>
                    Discover the exceptional care and attention we bring to every social event. <span className="notranslate">Parlor Banquet</span> is committed to making your celebrations memorable with our expertise and dedication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-style-four">
        <div className="auto-container">
          <div className="sec-title centred mb_90">
            <span className="sub-title">Why Choose <span className="notranslate">Parlor Banquet</span>?</span>
            <h2>Reasons to Celebrate with Us</h2>
          </div>
          <div className="inner-container">
            <div className="menu-block-two">
              <div className="inner-box">
                <div className="shape">
                  <div
                    className="shape-1"
                    style={{
                      backgroundImage: "url(/assets/images/shape/shape-3.webp)"
                    }}
                  />
                  <div
                    className="shape-2"
                    style={{
                      backgroundImage: "url(/assets/images/shape/shape-4.webp)"
                    }}
                  />
                  <div
                    className="shape-3"
                    style={{
                      backgroundImage: "url(/assets/images/shape/shape-27.webp)"
                    }}
                  />
                  <div
                    className="shape-4"
                    style={{
                      backgroundImage: "url(/assets/images/shape/shape-2.webp)"
                    }}
                  />
                </div>
                <div className="single-item">
                  <div className="inner">
                    <div className="upper-box">
                      <h4>Memorable Experiences</h4>
                    </div>
                    <div className="text">
                      <p>
                        Our team ensures every event is unique and unforgettable, tailored to your vision and preferences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="inner">
                    <div className="upper-box">
                      <h4>Personalized Service</h4>
                    </div>
                    <div className="text">
                      <p>
                        From customized themes to individual attention, we cater to every detail to create a personal touch for your event.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="inner">
                    <div className="upper-box">
                      <h4>Seamless Execution</h4>
                    </div>
                    <div className="text">
                      <p>
                        Our expert team handles all aspects of your event, ensuring a smooth and stress-free experience from start to finish.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-style-three">
        <div className="auto-container">
          <div className="sec-title centred mb_90">
            <span className="sub-title">Image Gallery</span>
            <h2>A Gallery of Our Social Event</h2>
          </div>
          <div className="items-container row clearfix">
            {images.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column">
                <div className="gallery-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <Image src={image} alt={`Gallery ${index + 1}`} layout="responsive" width={600} height={400} />
                    </figure>
                    <div className="content-box">
                      <div className="view-btn">
                        <a href={image} className="lightbox-image" data-fancybox="gallery">
                          <i className="icon-16"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Inquiry />
    </Layout>
  );
};

export default SocialEvents;
