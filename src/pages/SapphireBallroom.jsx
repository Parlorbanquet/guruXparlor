import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Venusform from './Venuesform'; // Update the import path if needed
import Layout from '../components/Layout'; // Update the import path if needed

const SapphireBallroom = () => {
  return (
    <Layout>
<Head>
  <title>Sapphire Ballroom - Elegant Venue for Intimate Events at Parlor Banquet</title>

  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

  <meta name="keywords" content="Sapphire Ballroom, elegant venue, intimate events, Parlor Banquet, luxurious hall, high-capacity venue" />
  <meta name="description" content="Sapphire Ballroom at Parlor Banquet offers an elegant and intimate setting for exclusive events, including weddings, private gatherings, and corporate functions. Experience sophistication and class in every detail." />
  <meta name="author" content="Parlor Banquet" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Sapphire Ballroom - Elegant Venue for Intimate Events at Parlor Banquet" />
  <meta property="og:description" content="Experience the elegance of Sapphire Ballroom at Parlor Banquet. Perfect for weddings, private gatherings, and corporate functions, offering unparalleled luxury and sophistication." />
  <meta property="og:image" content="https://parlorbanquet.com/assets/images/img/Sapphire.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://parlorbanquet.com/SapphireBallroom" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sapphire Ballroom - Elegant Venue for Intimate Events at Parlor Banquet" />
  <meta name="twitter:description" content="Experience the elegance of Sapphire Ballroom at Parlor Banquet. Perfect for weddings, private gatherings, and corporate functions, offering unparalleled luxury and sophistication." />
  <meta name="twitter:image" content="https://parlorbanquet.com/assets/images/img/Sapphire.webp" />
  <meta name="twitter:url" content="https://parlorbanquet.com/SapphireBallroom" />
</Head>


      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(assets/images/bgimg/Sapphire-bg.webp)"
          }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h2>Sapphire Ballroom</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Venues"> Venues </Link>
              </li>
              <li>Sapphire Ballroom</li>
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
                        <h2>Sapphire Ballroom</h2>
                        <br />
                        <p>
                          The Sapphire Ballroom at <span className="notranslate">Parlor Banquet</span> provides an elegant and sophisticated venue for your most intimate events. Its refined design and luxurious amenities make it the perfect setting for weddings, private gatherings, and corporate functions, ensuring a memorable experience for every guest.
                        </p>
                        <h3>Amenities</h3>
                        <ul className='list-style-one clearfix mb_30'>
                          <li><strong>Elegant Design :</strong> Features sophisticated décor with a luxurious touch.</li>
                          <li><strong>Advanced Lighting and Audio Systems :</strong> State-of-the-art technology to enhance your event experience.</li>
                          <li><strong>Generous Dance Floor :</strong> Ideal for entertainment and celebrations.</li>
                          <li><strong>Flexible Seating Arrangements :</strong> Customizable to fit your event’s needs.</li>
                          <li><strong>Gourmet Catering :</strong> Tailored menus to please your guests.</li>
                          <li><strong>High-Speed Internet Access :</strong> Keeps your event connected.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image">
                        <img src="assets/images/img/Sapphire.webp" alt="Sapphire Ballroom" />
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
                      <h3>Discover Our Elegant Space</h3>
                    </div>
                    <div className="text">
                      <ul className='list-style-one clearfix'>
                        <li><strong>Capacity :</strong> Accommodates 120-150 guests comfortably.</li>
                        <li><strong>Elegant Design :</strong> Refined décor with luxurious details.</li>
                        <li><strong>Spacious Layout :</strong> Offers ample room for intimate gatherings.</li>
                        {/* <li><strong>Advanced Audio-Visual Equipment :</strong> Includes top-of-the-line lighting and sound systems.</li> */}
                        <li><strong>Climate Control :</strong> Fully air-conditioned for year-round comfort.</li>
                      </ul>
                      <br />
                    </div>

                    <p>
                      Sapphire Ballroom is meticulously designed to offer an exceptional experience for your intimate events. At Parlor Banquet, we focus on delivering an outstanding experience with every detail meticulously planned. Our luxurious surroundings and exceptional service are tailored to create a memorable occasion.
                    </p>
                    <br />
                    <p>
                      Whether you’re hosting a private gathering or a sophisticated corporate event, Sapphire Ballroom offers a refined and elegant setting that meets all your needs. Our dedicated team is here to help make your event extraordinary, paying close attention to every detail and ensuring excellence throughout.
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

export default SapphireBallroom;
