import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Inquiry from './Inquiry';
import Layout from '../components/Layout';


const BirthdayParty = () => {
  const images = [
    '/assets/images/myGallery/b1.webp',
    '/assets/images/myGallery/b2.webp',
    '/assets/images/myGallery/b3.webp',
    '/assets/images/myGallery/b4.webp',
    '/assets/images/myGallery/b5.webp',
    '/assets/images/myGallery/b6.webp',
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
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 100%)',
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
  <title>Birthday Party Events at Parlor Banquet: Make Every Celebration Special</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <meta name="keywords" content="birthday party, event venue, Parlor Banquet, celebration, party planning, birthday celebration, event space, birthday party venue" />
  <meta name="description" content="Host your unforgettable birthday party at Parlor Banquet. Our elegant venue offers exceptional service, customizable options, and a memorable setting for your special day." />
  <meta name="author" content="Parlor Banquet" />
  <meta name="robots" content="index, follow" />
  
  <meta property="og:title" content="Birthday Party Events at Parlor Banquet: Make Every Celebration Special" />
  <meta property="og:description" content="Celebrate your birthday in style at Parlor Banquet. Enjoy a beautiful venue, exceptional service, and a customized experience tailored to make your event unforgettable." />
  <meta property="og:url" content="https://parlorbanquet.com/BirthdayParty" />
  <meta property="og:image" content="https://parlorbanquet.com/assets/images/img/Birthdayp.webp" />
  <meta property="og:type" content="website" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Birthday Party Events at Parlor Banquet: Make Every Celebration Special" />
  <meta name="twitter:description" content="Host an unforgettable birthday party at Parlor Banquet. Our venue provides a perfect setting with outstanding service and personalized options to make your day truly special." />
  <meta name="twitter:image" content="https://parlorbanquet.com/assets/images/img/Birthdayp.webp" />
  <meta name="twitter:url" content="https://parlorbanquet.com/BirthdayParty" />
</Head>

      
      <section className="page-title centred">
        <div className="bg-layer" style={{ backgroundImage: "url('/assets/images/bgimg/birthday-bg.webp')" }} />
        <div className="auto-container">
          <div className="content-box">
            <h2>Birthday Party</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Birthday Party</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="shop-details-content">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <figure className="image-box">
                <a className="lightbox-image" data-fancybox="gallery">
                  <img src="assets/images/img/Birthdayp.webp" alt="Birthday Party" layout="fill" objectFit="cover" />
                </a>
              </figure>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <h4>Unforgettable Birthday Celebrations</h4>
                <h2>Custom Planning for Your Special Day</h2>
                <div className="text">
                  <p>
                    Our birthday party planning service is designed to make your special day truly memorable. From creative themes to flawless execution, we ensure every detail is perfect, giving you a stress-free and enjoyable celebration.
                  </p>
                </div>
                <ul className="list-style-one clearfix mb_30">
                  <li>Creative Themes</li>
                  <li>Flawless Execution</li>
                  <li>Personalized Decorations</li>
                  <li>Expert Coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="menu-style-two mb_80" style={{ padding: '0px' }}>
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Key Aspects</span>
            <h2>Our Expertise in Birthday Party Planning</h2>
          </div>
          <div className="row clearfix keyservices">
            <div className="col-lg-12 col-md-6 col-sm-12 menu-column">
              <div className="menu-inner">
                <div className="inner-box">
                  <div className="single-item">
                    <div className="upper-box">
                      <h4>
                        <a>Creative Themes</a>
                      </h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: '5px' }}>
                        We design unique themes tailored to your preferences, ensuring a fun and festive atmosphere for your celebration.
                      </p>
                      <p>
                        <span style={{ color: '#333' }}>Personalized Experience</span>
                      </p>
                      <p>
                        Make your birthday party truly special with our creative ideas.
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
                        <a>Flawless Execution</a>
                      </h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: '5px' }}>
                        Our team manages every detail of your party, ensuring everything runs smoothly from start to finish.
                      </p>
                      <p>
                        <span style={{ color: '#333' }}>Stress-Free Celebration</span>
                      </p>
                      <p>
                        Enjoy your party while we handle all the logistics.
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
                        <a>Personalized Decorations</a>
                      </h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: '5px' }}>
                        We create custom decorations that reflect your personality and the theme of your party.
                      </p>
                      <p>
                        <span style={{ color: '#333' }}>Tailored Decor</span>
                      </p>
                      <p>
                        From balloons to table settings, everything is customized for your event.
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
                        <a>Expert Coordination</a>
                      </h4>
                    </div>
                    <div className="text">
                      <p style={{ paddingBottom: '5px' }}>
                        Benefit from our team's experience in coordinating all aspects of your party to ensure a perfect event.
                      </p>
                      <p>
                        <span style={{ color: '#333' }}>Professional Support</span>
                      </p>
                      <p>
                        Our expertise guarantees a successful and enjoyable birthday celebration.
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
              <div className="shape" style={{ backgroundImage: "url('/assets/images/shape/shape-2.webp')" }} />
              <div className="row clearfix" style={{ justifyContent: 'center' }}>
                <div className="col-lg-4 col-md-6 col-sm-12 image-column" style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <div
                    className="image-box"
                    style={imageHoverStyles}
                    onMouseEnter={(event) => imageBoxHover(event, true)}
                    onMouseLeave={(event) => imageBoxHover(event, false)}
                  >
                    <figure className="image">
                      <Image src="/assets/images/img/bd1.webp" alt="Sweet 16 Celebrations" height={400} width={600} style={{ height: '400px', width: 'auto' }} />
                    </figure>
                  </div>
                  <div className="content-box" style={{ textAlign: 'center' }}>
                    <div className="content-shape" style={{ backgroundImage: "url('/assets/images/shape/shape-9.webp')" }} />
                    <h4 style={{ paddingBottom: '5px' }}>Sweet 16 Celebrations</h4>
                    <p>
                      Make the transition from childhood to adulthood unforgettable with our Sweet 16 party planning services. We offer tailored themes, exquisite decor, and engaging entertainment to create a memorable celebration.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 image-column" style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <div
                    className="image-box"
                    style={imageHoverStyles}
                    onMouseEnter={(event) => imageBoxHover(event, true)}
                    onMouseLeave={(event) => imageBoxHover(event, false)}
                  >
                    <figure className="image">
                      <Image src="/assets/images/img/bd2.webp" alt="Quinceañera Celebrations" height={400} width={600} style={{ height: '400px', width: 'auto' }} />
                    </figure>
                  </div>
                  <div className="content-box" style={{ textAlign: 'center' }}>
                    <div className="content-shape" style={{ backgroundImage: "url('/assets/images/shape/shape-10.webp')" }} />
                    <h4 style={{ paddingBottom: '5px' }}>Quinceañera Celebrations</h4>
                    <p>
                      Celebrate the milestone of turning fifteen with a grand Quinceañera. We specialize in elegant decor, traditional elements, and personalized touches to honor this significant occasion in style.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section alternat-2 centred mb_100">
        <div className="pattern-layer" style={{ backgroundImage: "url('/assets/images/shape/shape-2.webp')" }} />
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-6 col-sm-12 service-block">
              <div className="service-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp' }}>
                <div className="inner-box">
                  <h3>
                    <a>Experience the Difference</a>
                  </h3>
                  <p>
                    With our birthday party planning services, you'll enjoy a uniquely crafted celebration, personalized to your preferences and executed flawlessly.
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
            <span className="sub-title">Why Choose Us?</span>
            <h2>Top Reasons to Celebrate with Us</h2>
          </div>
          <div className="inner-container">
            <div className="menu-block-two">
              <div className="inner-box">
                <div className="shape">
                  <div className="shape-1" style={{ backgroundImage: 'url("/assets/images/shape/shape-3.webp")' }} />
                  <div className="shape-2" style={{ backgroundImage: 'url("/assets/images/shape/shape-4.webp")' }} />
                  <div className="shape-3" style={{ backgroundImage: 'url("/assets/images/shape/shape-27.webp")' }} />
                  <div className="shape-4" style={{ backgroundImage: 'url("/assets/images/shape/shape-2.webp")' }} />
                </div>
                <div className="single-item">
                  <div className="inner">
                    <div className="upper-box">
                      <h4>Tailored Planning Services</h4>
                    </div>
                    <div className="text">
                      <p>
                        Our planning services are customized to your specific needs, ensuring a unique and enjoyable birthday celebration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="inner">
                    <div className="upper-box">
                      <h4>Comprehensive Coordination</h4>
                    </div>
                    <div className="text">
                      <p>
                        We handle all the details of your event, from setup to teardown, so you can relax and enjoy the celebration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="inner">
                    <div className="upper-box">
                      <h4>Experienced Team</h4>
                    </div>
                    <div className="text">
                      <p>
                        Our team has years of experience in planning and executing successful events, ensuring a smooth and enjoyable experience for you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div className="inner">
                    <div className="upper-box">
                      <h4>High-Quality Service</h4>
                    </div>
                    <div className="text">
                      <p>
                        We are committed to providing the highest level of service, ensuring your birthday party is nothing short of spectacular.
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
            <h2>Highlights from Our Special Days</h2>
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

export default BirthdayParty;
