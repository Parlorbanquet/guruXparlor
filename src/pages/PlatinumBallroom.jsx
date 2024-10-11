import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Venusform from './Venuesform'; // Update the import path if needed
import Layout from '../components/Layout'; // Update the import path if needed

const PlatinumBallroom = () => {
  return (
    <Layout>
<Head>
  <title>Platinum Ballroom - Exquisite Venue for Grand Celebrations at Parlor Banquet</title>

  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

  <meta name="keywords" content="Platinum Ballroom, grand venue, high-profile events, Parlor Banquet, luxurious hall, large capacity venue" />
  <meta name="description" content="Platinum Ballroom at Parlor Banquet offers an exquisite setting for grand celebrations, including weddings, corporate events, and more. Discover unmatched luxury and sophistication." />
  <meta name="author" content="Parlor Banquet" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Platinum Ballroom - Exquisite Venue for Grand Celebrations at Parlor Banquet" />
  <meta property="og:description" content="Discover the Platinum Ballroom at Parlor Banquet, a luxurious venue perfect for grand celebrations and high-profile events. Experience unmatched elegance and sophistication." />
  <meta property="og:image" content="https://parlorbanquet.com/assets/images/img/PlatinumBallroom.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://parlorbanquet.com/PlatinumBallroom" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Platinum Ballroom - Exquisite Venue for Grand Celebrations at Parlor Banquet" />
  <meta name="twitter:description" content="Discover the Platinum Ballroom at Parlor Banquet, a luxurious venue perfect for grand celebrations and high-profile events. Experience unmatched elegance and sophistication." />
  <meta name="twitter:image" content="https://parlorbanquet.com/assets/images/img/PlatinumBallroom.webp" />
  <meta name="twitter:url" content="https://parlorbanquet.com/PlatinumBallroom" />
</Head>


      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(assets/images/bgimg/Platinum-bg.webp)"
          }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h2>Platinum Ballroom</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Venues"> Venues </Link>
              </li>
              <li>Platinum Ballroom</li>
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
                        <h2>Platinum Ballroom</h2>
                        <br />
                        <p>
                          The Platinum Ballroom at <span className="notranslate">Parlor Banquet</span> is the epitome of luxury and grandeur, designed to host your most significant events with style and sophistication. With its expansive space and opulent décor, the ballroom is perfect for large weddings, corporate events, and extravagant celebrations.
                        </p>
                        <h3>Amenities</h3>
                        <ul className='list-style-one clearfix mb_30'>
                          <li><strong>Elegant Interior Design :</strong> A sophisticated setting featuring luxurious finishes and intricate details.</li>
                          <li><strong>State-of-the-Art Lighting and Sound Systems :</strong> Cutting-edge technology for a perfect ambiance.</li>
                          <li><strong>Spacious Dance Floor :</strong> Ideal for dancing and socializing at large events.</li>
                          <li><strong>Flexible Seating Arrangements :</strong> Customizable layouts to accommodate various event styles.</li>
                          <li><strong>Gourmet Catering Options :</strong> Exclusive menus crafted by top chefs to delight your guests.</li>
                          <li><strong>High-Speed Internet Access :</strong> Ensuring connectivity and convenience for all attendees.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image">
                        <img src="assets/images/img/PlatinumBallroom.webp" alt="Platinum Ballroom Hall" />
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
                        <li><strong>Grand Space :</strong> Accommodates 300-320 guests comfortably.</li>
                        <li><strong>Exclusive Facilities :</strong> Includes a rooftop garden and a large stage.</li>
                        <li><strong>Area :</strong> Generous layout providing ample space and comfort.</li>
                        {/* <li><strong>Advanced Audio-Visual Equipment :</strong> Features top-of-the-line sound and lighting systems.</li> */}
                        <li><strong>Air Conditioning :</strong> Ensures a pleasant atmosphere regardless of weather conditions.</li>
                      </ul>
                      <br />
                    </div>

                    <p>
                      The Platinum Ballroom is designed to offer a world-class experience, combining elegance and functionality. At <span className="notranslate">Parlor Banquet</span>, our dedicated team ensures every detail is meticulously managed to make your event extraordinary. From grand weddings to high-profile corporate gatherings, we are here to turn your vision into reality.
                    </p>
                    <br />
                    <p>
                      Elevate your event to new heights with the Platinum Ballroom. With its luxurious ambiance and unparalleled facilities, it provides the perfect backdrop for unforgettable celebrations. Let us help you create an event that will be remembered for years to come.
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

export default PlatinumBallroom;
