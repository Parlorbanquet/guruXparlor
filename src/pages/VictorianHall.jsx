// pages/victorian-hall.js

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Venusform from './Venuesform';
import Layout from '../components/Layout';

const VictorianHall = () => {
  return (
    <Layout>

<Head>
  <title>Victorian Hall - Grand Venue for Majestic Events at Parlor Banquet</title>

  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

  <meta name="keywords" content="Victorian Hall, grand venue, majestic events, Parlor Banquet, luxury hall, high-capacity venue" />
  <meta name="description" content="Victorian Hall at Parlor Banquet provides a grand and majestic setting for large-scale events. Perfect for weddings, galas, and significant occasions with a capacity of 250-270 guests." />
  <meta name="author" content="Parlor Banquet" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Victorian Hall - Grand Venue for Majestic Events at Parlor Banquet" />
  <meta property="og:description" content="Experience the grandeur of Victorian Hall at Parlor Banquet. Ideal for large-scale celebrations, weddings, and other significant events with a capacity of 250-270 guests." />
  <meta property="og:image" content="https://parlorbanquet.com/assets/images/img/Victorian.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://parlorbanquet.com/VictorianHall" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Victorian Hall - Grand Venue for Majestic Events at Parlor Banquet" />
  <meta name="twitter:description" content="Experience the grandeur of Victorian Hall at Parlor Banquet. Perfect for large-scale celebrations, weddings, and other significant events with a capacity of 250-270 guests." />
  <meta name="twitter:image" content="https://parlorbanquet.com/assets/images/img/Victorian.webp" />
  <meta name="twitter:url" content="https://parlorbanquet.com/VictorianHall" />
</Head>


      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(assets/images/bgimg/VictorianHall-bg.webp)"
          }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h2>Victorian Hall</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Venues"> Venues </Link>
              </li>
              <li>Victorian Hall</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sidebar-page-container p_relative" style={{ paddingBottom: "0px" }}>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 content-side">
              <div className="blog-details-content">
                <div className="content-one">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                      <div className="text">
                        <h2>Victorian Hall</h2>
                        <br />
                        <p>
                          Victorian Hall at <span className="notranslate">Parlor Banquet</span> is the epitome of grandeur and sophistication. This spacious venue is designed to accommodate 250-270 guests, making it ideal for high-capacity events and majestic celebrations. With its classic architectural design and opulent interior, Victorian Hall offers an unmatched setting for your special occasions.
                        </p>
                        <h3>Amenities</h3>
                        <ul className='list-style-one clearfix mb_30'>
                          <li><strong>Classic Interior Design:</strong> Features elegant and timeless décor to enhance any event.</li>
                          <li><strong>Advanced Lighting Systems:</strong> Equipped with state-of-the-art technology for a spectacular experience.</li>
                          <li><strong>Spacious Dance Floor:</strong> Perfect for dancing and large gatherings.</li>
                          <li><strong>Customizable Seating Arrangements:</strong> Flexible seating to match your event’s requirements.</li>
                          <li><strong>On-Site Gourmet Catering:</strong> Offers a diverse menu tailored to your taste.</li>
                          <li><strong>High-Speed Internet Access:</strong> Ensures connectivity throughout your event.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image">
                        <img src="assets/images/img/Victorian.webp" alt="Victorian Hall" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-style-two" style={{ paddingTop: "0px" }}>
        <div className="auto-container">
          <div className="row clearfix keyservices">
            <div className="col-lg-12 col-md-6 col-sm-12 menu-column">
              <div className="menu-inner">
                <div className="inner-box">
                  <div className="single-item">
                    <div className="upper-box">
                      <h3>Explore Our Premium Facilities</h3>
                    </div>
                    <div className="text">
                      <ul className='list-style-one clearfix'>
                        <li><strong>Capacity:</strong> Accommodates 250-270 guests comfortably.</li>
                        <li><strong>Area:</strong> Provides ample space and comfort for all events.</li>
                        <li><strong>Stage:</strong> Perfectly suited for performances and speeches.</li>
                        <li><strong>P.A. System:</strong> Ensures clear and effective communication throughout the hall.</li>
                        <li><strong>Air Conditioned Hall:</strong> Maintains a comfortable environment year-round.</li>
                      </ul>
                      <br />
                    </div>

                    <p>
                      Victorian Hall is meticulously crafted to offer a grand setting for your largest and most important events. At <span className="notranslate">Parlor Banquet</span>, we are dedicated to providing exceptional service to ensure that your event is a success. From detailed planning to flawless execution, our team is committed to bringing your vision to life.
                    </p>
                    <br />
                    <p>
                      Whether you're hosting a grand celebration or a majestic event, Victorian Hall offers a versatile and luxurious space to meet your needs. Our dedicated team at <span className="notranslate">Parlor Banquet</span> is here to make your event extraordinary, paying attention to every detail and delivering excellence. Let us help you create a truly memorable experience for you and your guests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Venusform />
    </Layout>
  );
};

export default VictorianHall;
