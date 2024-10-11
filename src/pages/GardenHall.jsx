// pages/garden-hall.js

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Venusform from './Venuesform';
import Layout from '../components/Layout';

const GardenHall = () => {
  return (
    <Layout>
<Head>
  <title>Garden Hall - Elegant Venue for Intimate Gatherings at Parlor Banquet</title>
  
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  
  <meta name="keywords" content="Garden Hall, elegant venue, intimate gatherings, Parlor Banquet, garden venue, event space" />
  <meta name="description" content="Garden Hall at Parlor Banquet offers an elegant and charming setting for intimate gatherings. Ideal for events with a capacity of 180-190 guests, blending nature with sophistication." />
  <meta name="author" content="Parlor Banquet" />
  <meta name="robots" content="index, follow" />
  
  <meta property="og:title" content="Garden Hall - Elegant Venue for Intimate Gatherings at Parlor Banquet" />
  <meta property="og:description" content="Experience the charm of Garden Hall at Parlor Banquet. Perfect for intimate gatherings, weddings, and special occasions with a capacity of 180-190 guests." />
  <meta property="og:url" content="https://parlorbanquet.com/GardenHall" />
  <meta property="og:image" content="https://parlorbanquet.com/assets/images/img/GardenHall.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Garden Hall - Elegant Venue for Intimate Gatherings at Parlor Banquet" />
  <meta name="twitter:description" content="Discover Garden Hall at Parlor Banquet, an elegant venue for intimate gatherings with a capacity of 180-190 guests. Perfect for weddings and special events." />
  <meta name="twitter:image" content="https://parlorbanquet.com/assets/images/img/GardenHall.webp" />
  <meta name="twitter:url" content="https://parlorbanquet.com/GardenHall" />
</Head>


      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(assets/images/bgimg/garden-bg.webp)"
          }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h2>Garden Hall</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Venues"> Venues </Link>
              </li>
              <li>Garden Hall</li>
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
                        <h2>Garden Hall</h2>
                        <br />
                        <p>
                          Garden Hall at <span className="notranslate">Parlor Banquet</span> is a serene and charming venue designed for intimate gatherings. With a capacity of 180-190 guests, it offers a perfect blend of elegance and natural beauty. This space is ideal for smaller weddings, receptions, and special occasions, featuring lush greenery and an inviting ambiance.
                        </p>
                        <h3>Amenities</h3>
                        <ul className='list-style-one clearfix mb_30'>
                          <li><strong>Charming Garden Setting:</strong> Enjoy a picturesque garden environment that adds a touch of nature to your event.</li>
                          <li><strong>Elegant Indoor Space:</strong> A beautifully designed interior that complements the garden’s charm.</li>
                          <li><strong>Customizable Lighting:</strong> Adjustable lighting options to set the perfect mood for your event.</li>
                          <li><strong>Flexible Seating Arrangements:</strong> Arrange seating to suit your event’s requirements.</li>
                          <li><strong>On-Site Catering Services:</strong> A selection of gourmet dishes tailored to your preferences.</li>
                          <li><strong>High-Speed Wi-Fi:</strong> Ensures connectivity for all your guests.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image">
                        <img src="assets/images/img/GardenHall.webp" alt="Garden Hall" />
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
                      <h3>Explore Our Garden Hall Features</h3>
                    </div>
                    <div className="text">
                      <ul className='list-style-one clearfix'>
                        <li><strong>Picturesque Garden Views:</strong> Enjoy serene outdoor views that create a relaxing atmosphere.</li>
                        <li><strong>Capacity:</strong> Comfortably accommodates 180-190 guests.</li>
                        <li><strong>Spacious Layout:</strong> Designed to offer ample space while maintaining an intimate feel.</li>
                        <li><strong>Indoor and Outdoor Integration:</strong> Seamless connection between indoor elegance and outdoor beauty.</li>
                        <li><strong>Gourmet Catering Options:</strong> Delicious cuisine to complement your event.</li>
                        <li><strong>Climate Control:</strong> Air-conditioned space to ensure comfort in any weather.</li>
                      </ul>
                      <br />
                    </div>

                    <p>
                      Garden Hall is meticulously designed to offer a charming and sophisticated venue for your most cherished events. At <span className="notranslate">Parlor Banquet</span>, we are dedicated to delivering exceptional service and ensuring that every detail is perfect. From the initial planning to the final execution, our team is here to make your event unforgettable.
                    </p>
                    <br />
                    <p>
                      Whether you are hosting an intimate wedding or a special celebration, Garden Hall provides a versatile and elegant space that meets your needs. Our expert team at <span className="notranslate">Parlor Banquet</span> is committed to creating a memorable experience, paying attention to every detail to ensure your event is a success.
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

export default GardenHall;
