import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Inquiry from './Inquiry';
import Layout from '../components/Layout';

const CustomEventPlanning = () => {
  const images = [
    "/assets/images/myGallery/cu1.webp",
    "/assets/images/myGallery/cu2.webp",
    "/assets/images/myGallery/cu3.webp",
    "/assets/images/myGallery/cu4.webp",
    "/assets/images/myGallery/cu5.webp",
    "/assets/images/myGallery/cu6.webp",
  ];

  return (
    <Layout>
      <Head>
        <title>Custom Event Planning - Tailored Solutions at Parlor Banquet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="keywords" content="Custom Event Planning, event planning services, tailored events, Parlor Banquet, bespoke events, personalized event solutions" />
        <meta name="description" content="At Parlor Banquet, we offer custom event planning services to create personalized and unforgettable events. Tailor every detail to fit your vision and needs." />
        <meta name="author" content="Parlor Banquet" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Custom Event Planning - Tailored Solutions at Parlor Banquet" />
        <meta property="og:description" content="Discover our custom event planning services at Parlor Banquet. We specialize in creating personalized and unforgettable events tailored to your vision and needs." />
        <meta property="og:image" content="https://parlorbanquet.com/assets/images/img/E3.webp" />
        <meta property="og:url" content="https://parlorbanquet.com/CustomEventPlanning" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Event Planning - Tailored Solutions at Parlor Banquet" />
        <meta name="twitter:description" content="Discover our custom event planning services at Parlor Banquet. We specialize in creating personalized and unforgettable events tailored to your vision and needs." />
        <meta name="twitter:image" content="https://parlorbanquet.com/assets/images/img/E3.webp" />
      </Head>

      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(/assets/images/bgimg/Custom-bg.webp)",
          }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h2>Custom Event Planning</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Custom Event Planning</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="shop-details-content">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <figure className="image-box">
                  <Image src="/assets/images/img/E3.webp" alt="Custom Event Planning" layout="responsive" width={600} height={400} />
     
              </figure>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <h4>Tailored Event Experiences</h4>
                <h2>Personalized Planning for Your Unique Event</h2>
                <div className="text">
                  <p>
                    Our custom event planning service is designed to create exceptional and memorable experiences tailored to your specific needs. From concept to execution, our dedicated team ensures every detail aligns with your vision, providing a seamless and stress-free planning process.
                  </p>
                </div>
                <ul className="list-style-one clearfix mb_30">
                  <li>Personalized Planning</li>
                  <li>Seamless Execution</li>
                  <li>Attention to Detail</li>
                  <li>Expert Guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="menu-style-two mb_80" style={{ padding: "0px" }}>
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Key Aspects</span>
            <h2>Our Expertise in Custom Event Planning</h2>
          </div>
          <div className="row clearfix keyservices">
            <div className="col-lg-12 col-md-6 col-sm-12 menu-column">
              <div className="menu-inner">
                <div className="inner-box">
                  <div className="single-item">
                    <div className="upper-box">
                      <h4>Personalized Planning</h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: "5px" }}>
                        We work closely with you to understand your vision and create a customized plan that meets all your requirements.
                      </p>
                      <p>
                        <span style={{ color: "#333" }}>Aligning with Your Vision</span>
                      </p>
                      <p>
                        Tailored solutions for a truly unique event.
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
                      <h4>Seamless Execution</h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: "5px" }}>
                        Our team ensures every aspect of your event is executed flawlessly, from setup to cleanup.
                      </p>
                      <p>
                        <span style={{ color: "#333" }}>Stress-Free Event Management</span>
                      </p>
                      <p>
                        Efficient coordination for a smooth experience.
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
                      <h4>Attention to Detail</h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: "5px" }}>
                        We pay meticulous attention to every detail to ensure a flawless event experience.
                      </p>
                      <p>
                        <span style={{ color: "#333" }}>Ensuring Perfection</span>
                      </p>
                      <p>
                        No detail is too small for our expert team.
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
                      <h4>Expert Guidance</h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: "5px" }}>
                        Benefit from the expertise of our team, guiding you through every step of the planning process.
                      </p>
                      <p>
                        <span style={{ color: "#333" }}>Professional Support</span>
                      </p>
                      <p>
                        Expert advice to ensure your event is a success.
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
                    With our custom event planning services, you will experience unparalleled care and attention, creating an event that stands out and leaves a lasting impression.
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
            <h2>Top Reasons to Choose Us for Your Next Event</h2>
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
                      <h4>Tailored Planning Services</h4>
                    </div>
                    <div className="text">
                      <p>
                        Our event planning is customized to meet your specific needs and preferences, ensuring a unique and personalized experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="inner">
                    <div className="upper-box">
                      <h4>Comprehensive Event Coordination</h4>
                    </div>
                    <div className="text">
                      <p>
                        From venue selection to vendor management, we handle every detail of your event to ensure everything runs smoothly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="inner">
                    <div className="upper-box">
                      <h4>Creative and Innovative Ideas</h4>
                    </div>
                    <div className="text">
                      <p>
                        Our team brings fresh and creative ideas to make your event stand out and exceed your expectations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="inner">
                    <div className="upper-box">
                      <h4>Stress-Free Planning Experience</h4>
                    </div>
                    <div className="text">
                      <p>
                        Enjoy a stress-free planning process with our dedicated team handling all the logistics and details for you.
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
            <h2>A Gallery of Our Custom Planning Creations</h2>
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
                        <Link href={image} className="lightbox-image" data-fancybox="gallery">
                          <i className="icon-16"></i>
                        </Link>
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

export default CustomEventPlanning;
