import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Inquiry from './Inquiry';
import Layout from '../components/Layout';

const CorporateEvents = () => {

  const images = [
    "/assets/images/myGallery/co1.webp",
    "/assets/images/myGallery/co3.webp",
    "/assets/images/myGallery/co2.webp",
    "/assets/images/myGallery/co4.webp",
    "/assets/images/myGallery/co5.webp",
    "/assets/images/myGallery/co6.webp",
  ];

  return (
    <Layout>
<Head>
  <title>Corporate Events - Host Unforgettable Corporate Gatherings at Parlor Banquet</title>
  
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  
  <meta name="keywords" content="corporate events, business gatherings, corporate parties, Parlor Banquet, conference venue, meeting space, corporate functions" />
  <meta name="description" content="Parlor Banquet offers a sophisticated venue for corporate events, including business meetings, conferences, and company parties. Experience exceptional service and a professional setting." />
  <meta name="author" content="Parlor Banquet" />
  <meta name="robots" content="index, follow" />
  
  <meta property="og:title" content="Corporate Events - Host Unforgettable Corporate Gatherings at Parlor Banquet" />
  <meta property="og:description" content="Host your next corporate event at Parlor Banquet. Our venue offers a professional setting and exceptional service for meetings, conferences, and company parties." />
  <meta property="og:url" content="https://parlorbanquet.com/CorporateEvents" />
  <meta property="og:image" content="https://parlorbanquet.com/assets/images/img/Corporate.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Corporate Events - Host Unforgettable Corporate Gatherings at Parlor Banquet" />
  <meta name="twitter:description" content="Host your next corporate event at Parlor Banquet. Our venue offers a professional setting and exceptional service for meetings, conferences, and company parties." />
  <meta name="twitter:image" content="https://parlorbanquet.com/assets/images/img/Corporate.webp" />
  <meta name="twitter:url" content="https://parlorbanquet.com/CorporateEvents" />
</Head>


      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(/assets/images/bgimg/Corporate-bg.webp)",
          }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h2>Corporate Events</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Corporate Events</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="shop-details-content">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <figure className="image-box">
                <a
                  className="lightbox-image"
                  data-fancybox="gallery"
                >
                  <img src="/assets/images/img/Corporate.webp" alt="Corporate Event" layout="responsive" width={600} height={400} />
                </a>
              </figure>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <h4>Corporate Gatherings</h4>
                <h2>Corporate Event Planning & Coordination</h2>
                <div className="text">
                  <p>
                    At <span className="notranslate"> Parlor Banquet </span>, we specialize in organizing exceptional corporate events that leave a lasting impression. Our team handles every aspect of your event, from planning and coordination to execution, ensuring a professional and seamless experience. We are dedicated to creating a polished and successful event tailored to your company’s objectives and requirements.
                  </p>
                </div>
                <ul className="list-style-one clearfix mb_30">
                  <li>Conferences</li>
                  <li>Seminars</li>
                  <li>Product Launches</li>
                  <li>Networking Events</li>
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
            <h2>Your Corporate Event, Our Expertise</h2>
          </div>
          <div className="row clearfix keyservices">
            {/* Repeat for other service items */}
            <div className="col-lg-12 col-md-6 col-sm-12 menu-column">
              <div className="menu-inner">
                <div className="inner-box">
                  <div className="single-item">
                    <div className="upper-box">
                      <h4>
                        <a>Customized Event Themes to Align with Corporate Goals</a>
                      </h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: "5px" }}>
                        We work with you to develop a theme that resonates with your corporate vision and objectives. Whether it’s a high-tech, elegant, or themed event, we ensure it aligns with your brand and message.
                      </p>
                      <p>
                        <span style={{ color: "#333" }}>Examples:</span>
                        Tech-savvy, Elegant, Industry-focused.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add other service blocks here */}
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
                  <h3>
                    <a>Experience the Difference</a>
                  </h3>
                  <p>
                    Step into a world where every corporate event is executed with precision and professionalism. Discover why <span className="notranslate"> Parlor Banquet </span> is the preferred choice for companies seeking exceptional event experiences.
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
            <span className="sub-title">Why Choose <span className="notranslate"> Parlor Banquet </span>?</span>
            <h2>Top Reasons for Your Corporate Event</h2>
          </div>
          <div className="inner-container">
            <div className="menu-block-two">
              <div className="inner-box">
                <div className="shape">
                  <div
                    className="shape-1"
                    style={{
                      backgroundImage: 'url("/assets/images/shape/shape-3.webp")'
                    }}
                  />
                  <div
                    className="shape-2"
                    style={{
                      backgroundImage: 'url("/assets/images/shape/shape-4.webp")'
                    }}
                  />
                  <div
                    className="shape-3"
                    style={{
                      backgroundImage: 'url("/assets/images/shape/shape-27.webp")'
                    }}
                  />
                  <div
                    className="shape-4"
                    style={{
                      backgroundImage: 'url("/assets/images/shape/shape-2.webp")'
                    }}
                  />
                </div>
                <div className="single-item">
                  <div className="inner">
                    <div className="upper-box">
                      <h4>Strategic Location</h4>
                    </div>
                    <div className="text">
                      <p>
                        Centrally located for easy access by all attendees.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="inner">
                    <div className="upper-box">
                      <h4>Professional Atmosphere</h4>
                    </div>
                    <div className="text">
                      <p>
                        Experience a setting that combines sophistication with the latest in technology and amenities.
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
            <h2>A Gallery of Our Prestigious Events</h2>
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

export default CorporateEvents;
