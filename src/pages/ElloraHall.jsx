// pages/ellora-room.js

import React from "react";
import Link from "next/link";
import Head from "next/head";
import Venusform from "./Venuesform"; 
import Layout from "../components/Layout"; 

const ElloraRoom = () => {
  return (
    <Layout>


<Head>
  <title>Ellora Hall at Parlor Banquet: Perfect Setting for Your Special Occasions</title>
  
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  
  <meta name="keywords" content="Ellora Hall, Parlor Banquet, event space, banquet hall, intimate gatherings, Edison NJ" />
  <meta name="description" content="Explore the Ellora Hall at Parlor Banquet, located in Edison, NJ. Perfect for intimate gatherings and special occasions with elegant design and cozy atmosphere." />
  <meta name="author" content="Parlor Banquet" />
  <meta name="robots" content="index, follow" />
  
  <meta property="og:title" content="Ellora Hall - Parlor Banquet | Elegant Event Space in Edison, NJ" />
  <meta property="og:description" content="Discover the Ellora Hall at Parlor Banquet, offering a charming and elegant setting for intimate gatherings and special occasions. Located in Edison, NJ." />
  <meta property="og:url" content="https://parlorbanquet.com/ElloraHall" />
  <meta property="og:image" content="https://parlorbanquet.com/assets/images/img/E1.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ellora Hall - Parlor Banquet | Elegant Event Space in Edison, NJ" />
  <meta name="twitter:description" content="Explore the Ellora Hall at Parlor Banquet for a sophisticated and intimate event experience in Edison, NJ. Perfect for special occasions." />
  <meta name="twitter:image" content="https://parlorbanquet.com/assets/images/img/E1.webp" />
  <meta name="twitter:url" content="https://parlorbanquet.com/ElloraHall" />
</Head>


      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(assets/images/bgimg/ellora-bg.webp)",
          }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h2>Ellora Hall</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Venues"> Venues </Link>
              </li>
              <li>Ellora Hall</li>
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
                        <h2>Ellora Hall</h2>
                        <br />
                        <p>
                          The Ellora Hall exudes timeless charm, making it ideal for intimate gatherings and special occasions. Its elegant design and cozy atmosphere create the perfect setting for cherished memories and unforgettable moments.
                        </p>
                        <h3>Amenities</h3>
                        <ul className="list-style-one clearfix mb_30">
                          <li><strong>Elegant Interior Design:</strong> A blend of classic and contemporary elements for a refined atmosphere.</li>
                          <li><strong>Ambient Lighting:</strong> Soft and adjustable lighting to set the perfect mood.</li>
                          <li><strong>Comfortable Seating:</strong> Plush seating arrangements for a relaxing experience.</li>
                          <li><strong>Customized Decor:</strong> Tailored decorations to match your event’s theme.</li>
                          <li><strong>High-Speed Wi-Fi:</strong> Keeps guests connected and entertained.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image">
                        <img
                          src="assets/images/img/E1.webp"
                          alt="Ellora Hall"
                        />
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
                      <ul className="list-style-one clearfix">
                        <li><strong>Capacity:</strong> Accommodates 100-120 persons, providing ample space for your guests.</li>
                        <li><strong>Cozy and Elegant Design:</strong> A refined setting perfect for intimate gatherings.</li>
                        <li><strong>Flexible Seating:</strong> Comfortable and customizable seating arrangements.</li>
                        <li><strong>Advanced Lighting System:</strong> Ambient lighting to create a warm atmosphere.</li>
                        <li><strong>Personalized Decor Options:</strong> Tailored to fit your event’s theme.</li>
                        <li><strong>High-Speed Internet:</strong> Keeps guests connected throughout the event.</li>
                        <li><strong>On-Site Catering:</strong> Customizable menu options to suit your preferences.</li>
                        <li><strong>Audio-Visual Equipment:</strong> Equipped with a sound system and projector for presentations.</li>
                        <li><strong>Climate Control:</strong> Air conditioning to maintain comfort during your event.</li>
                      </ul>
                      <br />
                    </div>
                    <p>
                      The Ellora Hall is designed to provide a timeless and charming setting for your most cherished events. Whether you're hosting a small gathering, a special celebration, or an intimate occasion, our team at <span className="notranslate">Parlor Banquet</span> is dedicated to ensuring that every detail is perfect. From personalized decor to exceptional service, we are here to make your event truly memorable.
                    </p>
                    <br />
                    <p>
                      With its elegant design and cozy atmosphere, the Ellora Hall is the ideal venue for creating lasting memories. Our attentive staff is committed to providing an exceptional experience, ensuring that your event is a success from start to finish. Let us help you make your special occasion unforgettable in the timeless elegance of the Ellora Hall.
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

export default ElloraRoom;
