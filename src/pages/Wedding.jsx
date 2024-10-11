import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Inquiry from './Inquiry'; 
import Layout from '../components/Layout';


const Wedding = () => {
  const images = [
    "/assets/images/myGallery/we1.webp",
    "/assets/images/myGallery/we2.webp",
    "/assets/images/myGallery/we3.webp",
    "/assets/images/myGallery/we4.webp",
    "/assets/images/myGallery/we5.webp",
    "/assets/images/myGallery/we7.webp",
  ];

  const imageHoverStyles = {
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyles = {
    transition: 'transform 0.5s ease',
    width: '100%',
    display: 'block',
  };

  const hoverOverlayStyles = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    transform: 'translateY(0)',
    opacity: '1',
    transition: 'transform 0.7s ease, opacity 0.7s ease',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  };

  const imageBoxHover = (event, active) => {
    const image = event.currentTarget.querySelector('img');
    image.style.transform = active ? 'scale(1.1)' : 'scale(1)';
  };

  return (
    <Layout>


<Head>
  <title>Wedding Events - Elegant Weddings at Parlor Banquet</title>

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <meta name="description" content="Plan your dream wedding at Parlor Banquet. Our venue offers elegant settings and exceptional service to make your special day unforgettable." />
  <meta name="keywords" content="wedding events, wedding venue, Parlor Banquet, elegant weddings, wedding planning, wedding reception, Edison NJ, wedding celebrations" />
  <meta name="author" content="Parlor Banquet" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Wedding Events - Elegant Weddings at Parlor Banquet" />
  <meta property="og:description" content="Celebrate your wedding in style at Parlor Banquet. Our venue provides a beautiful setting and excellent service for an unforgettable wedding experience." />
  <meta property="og:image" content="https://parlorbanquet.com/assets/images/img/Wedding123.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://parlorbanquet.com/Wedding" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Wedding Events - Elegant Weddings at Parlor Banquet" />
  <meta name="twitter:description" content="Host your wedding at Parlor Banquet. Discover our stunning venues, personalized service, and exquisite amenities designed for a perfect wedding." />
  <meta name="twitter:image" content="https://parlorbanquet.com/assets/images/img/Wedding123.webp" />
  <meta name="twitter:url" content="https://parlorbanquet.com/Wedding" />
</Head>

      <section className="page-title centred">
        <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/bgimg/Wedding-bg.webp)" }} />
        <div className="auto-container">
          <div className="content-box">
            <h2>Wedding</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Wedding</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="shop-details-content">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <figure className="image-box">
                  <Image src="/assets/images/img/Wedding123.webp" alt="Wedding Image" width={600} height={400} />
              
              </figure>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <h4>Wedding Events</h4>
                <h2>Wedding Planning & Coordination</h2>
                <div className="text">
                  <p>
                    At <span className="notranslate">Parlor Banquet</span>, our expert wedding planners are dedicated to crafting your dream wedding, from concept to execution. We take care of every detail, allowing you to focus on celebrating your special day. Our commitment is to ensure a seamless and memorable event, tailored to your unique vision and style.
                  </p>
                </div>
                <ul className="list-style-one clearfix mb_30">
                  <li>Wedding</li>
                  <li>Anniversary Celebrations</li>
                  <li>Engagement Parties</li>
                  <li>Receptions</li>
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
            <h2>Your Dream Wedding, Our Expertise</h2>
          </div>
          <div className="row clearfix keyservices">
            <div className="col-lg-12 col-md-6 col-sm-12 menu-column">
              <div className="menu-inner">
                <div className="inner-box">
                  <div className="single-item">
                    <div className="upper-box">
                      <h4>
                        <a>
                          Tailored Themes that Reflect Your Vision and Style
                        </a>
                      </h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: "5px" }}>
                        Every wedding is unique, and our planners work closely with you to create a theme that perfectly matches your vision. Whether you dream of a vintage, modern, rustic, or fairy-tale wedding, we bring your ideas to life with meticulous attention to detail.
                      </p>
                      <p>
                        <span style={{ color: "#333" }}>Examples:</span> Vintage, Modern, Rustic, Fairy-tale.
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
                      <h4>
                        <a>
                          Coordination with Top Vendors for Catering, Decor, Entertainment, and More
                        </a>
                      </h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: "5px" }}>
                        We collaborate with the best vendors in the industry to ensure your wedding is nothing short of spectacular. From gourmet catering to stunning decor and engaging entertainment, we manage all vendor relationships to guarantee quality and reliability.
                      </p>
                      <p>
                        <span style={{ color: "#333" }}>Ensuring Quality and Reliability from Trusted Professionals</span>
                      </p>
                      <p>
                        Our extensive network of trusted professionals ensures that every aspect of your wedding meets the highest standards of excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="promotion-section mb_80">
        <div className="auto-container">
          <div className="promotion-block-one">
            <div className="inner-box">
              <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-2.webp)" }} />
              <div className="row clearfix">


                {/* <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                  <div
                    className="image-box"
                    style={imageHoverStyles}
                    onMouseEnter={(event) => imageBoxHover(event, true)}
                    onMouseLeave={(event) => imageBoxHover(event, false)}
                  >
                    <figure className="image">
                      <Image src="/assets/images/img/Walima.webp" alt="Walima Reception" width={600} height={403} />
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="content-shape" style={{ backgroundImage: "url(/assets/images/shape/shape-10.webp)" }} />
                    <h4>Walima Reception</h4>
                    <p>
                      Celebrate the Walima reception in a space that exudes grace and sophistication. Our venue offers a beautiful backdrop and exceptional service to make this event memorable.
                    </p>
                  </div>
                </div> */}
               <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                  <div
                    className="image-box"
                    style={imageHoverStyles}
                    onMouseEnter={(event) => imageBoxHover(event, true)}
                    onMouseLeave={(event) => imageBoxHover(event, false)}
                  >
                    <figure className="image">
                      <Image src="/assets/images/wee.webp" alt="Haldi Ceremony" width={600} height={403} />
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="content-shape" style={{ backgroundImage: "url(/assets/images/shape/shape-9.webp)" }} />
                    <h4>Weddings</h4>
                    <p>
Celebrate your wedding in style with our elegant venue. Whether intimate or grand, our space provides a stunning backdrop and exceptional service for a truly magical day.
</p>


                  </div>
                </div>

                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                  <div
                    className="image-box"
                    style={imageHoverStyles}
                    onMouseEnter={(event) => imageBoxHover(event, true)}
                    onMouseLeave={(event) => imageBoxHover(event, false)}
                  >
                    <figure className="image">
                      <Image src="/assets/images/reception.png" alt="Wedding Reception" width={600} height={403} />
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="content-shape" style={{ backgroundImage: "url(/assets/images/shape/shape-9.webp)" }} />
                    <h4>Wedding Reception</h4>
                    <p>
                      Host your wedding reception in style with our luxurious venue. The perfect setting for a grand celebration, offering elegance and comfort for an unforgettable evening.
                    </p>
                  </div>
                </div>


                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                  <div
                    className="image-box"
                    style={imageHoverStyles}
                    onMouseEnter={(event) => imageBoxHover(event, true)}
                    onMouseLeave={(event) => imageBoxHover(event, false)}
                  >
                    <figure className="image">
                      <Image src="/assets/images/haldi.png" alt="Haldi Ceremony" width={600} height={403} />
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="content-shape" style={{ backgroundImage: "url(/assets/images/shape/shape-9.webp)" }} />
                    <h4>Haldi Ceremony</h4>
                    <p>
                      Our venue provides an ideal setting for the vibrant and joyous Haldi ceremony. With its lively ambiance and elegant décor, it's perfect for celebrating this important pre-wedding ritual.
                    </p>
                  </div>
                </div>


                </div>

                <div className="row clearfix" style={{paddingTop: '50px'}} >


                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                  <div
                    className="image-box"
                    style={imageHoverStyles}
                    onMouseEnter={(event) => imageBoxHover(event, true)}
                    onMouseLeave={(event) => imageBoxHover(event, false)}
                  >
                    <figure className="image">
                      <Image src="/assets/images/mehndi.webp" alt="Haldi Ceremony" width={600} height={403} />
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="content-shape" style={{ backgroundImage: "url(/assets/images/shape/shape-9.webp)" }} />
                    <h4>Mehndi Celebration                    </h4>
<p>
Celebrate your Wedding Mehndi in a joyful and traditional setting. Our venue’s vibrant décor and intimate ambiance create the perfect backdrop for this meaningful pre-wedding celebration.</p>

                  </div>
                </div>
               

                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                  <div
                    className="image-box"
                    style={imageHoverStyles}
                    onMouseEnter={(event) => imageBoxHover(event, true)}
                    onMouseLeave={(event) => imageBoxHover(event, false)}
                  >
                    <figure className="image">
                      <Image src="/assets/images/cocktail.webp" alt="Haldi Ceremony" width={600} height={403} />
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="content-shape" style={{ backgroundImage: "url(/assets/images/shape/shape-9.webp)" }} />
                    <h4>Cocktail Party</h4>
                    <p>
Host a chic Cocktail Party as part of your wedding festivities. Our venue offers sophisticated décor and a stylish ambiance, perfect for mingling and celebrating with guests in a lively, elegant atmosphere.
</p>


                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                  <div
                    className="image-box"
                    style={imageHoverStyles}
                    onMouseEnter={(event) => imageBoxHover(event, true)}
                    onMouseLeave={(event) => imageBoxHover(event, false)}
                  >
                    <figure className="image">
                      <Image src="/assets/images/sangeet.webp" alt="Haldi Ceremony" width={600} height={403} />
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="content-shape" style={{ backgroundImage: "url(/assets/images/shape/shape-9.webp)" }} />
                    <h4>Sangeet Celebration</h4>
<p>
Make your wedding Sangeet unforgettable with a night of music and dance. Our venue provides a vibrant atmosphere and elegant décor, setting the stage for a lively and memorable evening filled with joy and celebration.
</p>



                  </div>
                </div>
                </div>

                <div className="row clearfix" style={{paddingTop: '50px'}} >

                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                  <div
                    className="image-box"
                    style={imageHoverStyles}
                    onMouseEnter={(event) => imageBoxHover(event, true)}
                    onMouseLeave={(event) => imageBoxHover(event, false)}
                  >
                    <figure className="image">
                      <Image src="/assets/images/Groom.webp" alt="Haldi Ceremony" width={600} height={403} />
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="content-shape" style={{ backgroundImage: "url(/assets/images/shape/shape-9.webp)" }} />
                    <h4>Groom's Bachelor Party</h4>
<p>
Celebrate the groom’s final days of singlehood with an unforgettable Bachelor Party. Our venue offers a stylish and vibrant setting, perfect for a night of fun and celebration as part of the wedding festivities.
</p>


                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                  <div
                    className="image-box"
                    style={imageHoverStyles}
                    onMouseEnter={(event) => imageBoxHover(event, true)}
                    onMouseLeave={(event) => imageBoxHover(event, false)}
                  >
                    <figure className="image">
                      <Image src="/assets/images/bride.webp" alt="Haldi Ceremony" width={600} height={403} />
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="content-shape" style={{ backgroundImage: "url(/assets/images/shape/shape-9.webp)" }} />
                    <h4>Bride's Bachelor Party</h4>
<p>
Celebrate the bride’s last moments of singlehood with a fabulous Bachelor Party. Our venue provides a chic and lively setting, perfect for a memorable night of fun, laughter, and celebration as part of the wedding festivities.
</p>


                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="service-section alternat-2  centred mb_100">
  <div
    className="pattern-layer"
    style={{ backgroundImage: "url(assets/images/shape/shape-2.webp)" }}
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
              <a>Experience the Difference </a>
            </h3>
            <p>
            Step into a world where every event is transformed into a masterpiece of elegance and grace. Discover why <span className="notranslate" > Parlor Banquet </span> is the preferred choice for those who seek perfection in every celebration.
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
      <span className="sub-title">Why Choose <span className="notranslate" > Parlor Banquet </span>?</span>
      <h2>Reasons to Celebrate with Us</h2>
    </div>
    <div className="inner-container">
      <div className="menu-block-two">
        <div className="inner-box">
          <div className="shape">
            <div
              className="shape-1"
              style={{
                backgroundImage: "url(assets/images/shape/shape-3.webp)"
              }}
            />
            <div
              className="shape-2"
              style={{
                backgroundImage: "url(assets/images/shape/shape-4.webp)"
              }}
            />
            <div
              className="shape-3"
              style={{
                backgroundImage: "url(assets/images/shape/shape-27.webp)"
              }}
            />
            <div
              className="shape-4"
              style={{
                backgroundImage: "url(assets/images/shape/shape-2.webp)"
              }}
            />
          </div>
          <div className="single-item">
            <div className="inner">
              <div className="upper-box">
                <h4>Prime Location</h4>
              </div>
              <div className="text">
                <p>
                  Conveniently located in [City], providing easy access for guests.
                </p>
              </div>
            </div>
          </div>
          <div className="single-item">
            <div className="inner">
              <div className="upper-box">
                <h4>Exquisite Ambiance</h4>
              </div>
              <div className="text">
                <p>
                  Our venue boasts a blend of timeless elegance and modern amenities, perfect for any occasion.
                </p>
              </div>
            </div>
          </div>
          <div className="single-item">
            <div className="inner">
              <div className="upper-box">
                <h4>Exceptional Service</h4>
              </div>
              <div className="text">
                <p>
                  From initial planning to the final toast, our team is dedicated to delivering seamless and personalized service.
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
            <h2>Gallery of Our Beautiful Weddings</h2>
          </div>
          <div className="items-container row clearfix">
            {images.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column">
                <div className="gallery-block-two">
                  <div className="inner-box">
                    <figure className="image-box">
                      <Image src={image} alt={`Gallery ${index + 1}`} width={600} height={400} />
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

export default Wedding;
