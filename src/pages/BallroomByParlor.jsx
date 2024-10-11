import React from 'react';
import Link from 'next/link';
import Venusform from './Venuesform';
import Head from 'next/head';
import Layout from '../components/Layout';


const BallroomByParlor = () => {
  return (
    <Layout>
      <Head>
        <title>Ballroom by Parlor - Majestic Venue for Grand Celebrations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="keywords" content="Ballroom by Parlor, grand celebrations, large-scale events, Parlor Banquet, majestic venue, luxury ballroom" />
        <meta name="description" content="Ballroom by Parlor offers a majestic and spacious setting for large-scale celebrations with a capacity of 900-1000 guests. Discover the ideal venue for your grand events." />
        <meta name="author" content="Parlor Banquet" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ballroom by Parlor - Majestic Venue for Grand Celebrations" />
        <meta property="og:description" content="Experience the grandeur of Ballroom by Parlor. Perfect for large-scale events and celebrations with a capacity of 900-1000 guests. Discover luxury and elegance." />
        <meta property="og:image" content="https://parlorbanquet.com/assets/images/img/BallroomByParlor.webp" />
        <meta property="og:url" content="https://parlorbanquet.com/BallroomByParlor" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ballroom by Parlor - Majestic Venue for Grand Celebrations" />
        <meta name="twitter:description" content="Experience the grandeur of Ballroom by Parlor. Perfect for large-scale events and celebrations with a capacity of 900-1000 guests. Discover luxury and elegance." />
        <meta name="twitter:image" content="https://parlorbanquet.com/assets/images/img/BallroomByParlor.webp" />
      </Head>

      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{
            backgroundImage: "url(/assets/images/bgimg/Perfection1.webp)"
          }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h2>Ballroom by Parlor</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Venues">Venues</Link>
              </li>
              <li>Ballroom by Parlor</li>
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
                        <h2>Ballroom by Parlor</h2>
                        <br />
                        <p>
                          Discover the grandeur of Ballroom by Parlor, an expansive venue designed for large-scale celebrations and prestigious events. With a capacity ranging from 900 to 1000 guests, this majestic ballroom provides a luxurious setting for your most important occasions.
                        </p>
                        <h3>Features & Amenities</h3>
                        <ul className='list-style-one clearfix mb_30'>
                          <li><strong>Elegant Interior Design :</strong> Features opulent decor and sophisticated design elements.</li>
                          {/* <li><strong>Advanced Sound & Lighting Systems :</strong> State-of-the-art technology for a seamless event experience.</li> */}
                          <li><strong>Spacious Dance Floor :</strong> Ideal for grand dances and lively celebrations.</li>
                          <li><strong>Customizable Seating :</strong> Flexible arrangements to suit various Event Slides.</li>
                          <li><strong>Gourmet Catering Services :</strong> On-site catering with a variety of menu options.</li>
                          <li><strong>High-Speed Internet :</strong> Reliable connectivity for all guests.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image">
                        <img src="/assets/images/img/BallroomByParlor.webp" alt="Ballroom by Parlor" />
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
                      <h3>Explore Our Majestic Venue</h3>
                    </div>
                    <div className="text">
                      <ul className='list-style-one clearfix'>
                        <li><strong>Spacious Layout :</strong> Ample space for up to 1000 guests, ensuring comfort and flexibility.</li>
                        <li><strong>Stage Setup :</strong> Perfect for performances, speeches, and presentations.</li>
                        {/* <li><strong>In-Built Audio System :</strong> High-quality sound for an enhanced event experience.</li> */}
                        <li><strong>Elegant Decor :</strong> Luxurious and sophisticated design elements.</li>
                        <li><strong>Climate Control :</strong> Air-conditioned environment for year-round comfort.</li>
                      </ul>
                      <br />
                    </div>

                    <p>
                      Ballroom by Parlor is the ultimate choice for hosting grand and memorable events. Whether you're planning a wedding, corporate function, or large-scale celebration, our ballroom offers a blend of luxury and versatility to meet all your needs. At  <span className="notranslate" > Parlor Banquet </span> , we ensure every detail is perfect to make your event extraordinary.
                    </p>
                    <br />
                    <p>
                      Our dedicated team at Parlor Banquet is committed to providing exceptional service and creating an unforgettable experience for you and your guests. Explore the elegance and grandeur of Ballroom by Parlor, and let us help you make your next event truly spectacular.
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

export default BallroomByParlor;
