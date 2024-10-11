import React from 'react';
import Link from 'next/link';
import Chatbot from './Chatbot';
import WhatsAppButton from './WhatsAppButton';

const Footer = () => {
  // Function to handle scroll to top
  // const handleScrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  // Handle scroll position for showing/hiding the button
  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTopButton = document.querySelector('.scroll-to-top');
  //     if (window.scrollY > 200) {
  //       scrollTopButton.style.display = 'block';
  //     } else {
  //       scrollTopButton.style.display = 'none';
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div>
      <footer className="main-footer bg-color-1">
        <div className="footer-top pt_85 pb_100">
          <div className="auto-container">
            <div className="row align-items-center clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget text-right">
                  <div className="widget-title">
                    <h3>Events We Host</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="info-list clearfix">
                      <li><Link href="/Wedding">Wedding</Link></li>
                      <li><Link href="/CorporateEvents">Corporate Events</Link></li>
                      <li><Link href="/SocialEvents">Social Events</Link></li>
                      {/* <li><Link href="/GourmetCatering">Gourmet Catering</Link></li> */}
                      <li><Link href="/CustomEventPlanning">Custom Event Planning</Link></li>
                      <li><Link href="/BirthdayParty">Birthday Party</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget text-center">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{ backgroundImage: "url(/assets/images/shape/shape-19.webp)" }}
                    />
                    <div
                      className="shape-2"
                      style={{ backgroundImage: "url(/assets/images/shape/shape-20.webp)" }}
                    />
                  </div>
                  <div className="widget-content">
                    <figure className="footer-logo">
                      <Link href="/">
                        <img src="/assets/images/parlor-logo.webp" alt="Parlor Banquet Logo" />
                      </Link>
                    </figure>
                    <div className="text">
                      <p>
                        <span className="notranslate">Parlor Banquet</span> offers exquisite venue options for weddings, corporate events, social gatherings, and more. Experience exceptional service and create unforgettable memories with us.
                      </p>
                    </div>
                    <ul className="social-links clearfix">
                      <li><a href="https://www.facebook.com/profile.php?id=61557468884481" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="https://www.instagram.com/parlor_banquet" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a></li>
                      <li><a href="https://www.linkedin.com/company/parlorbanquet" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget text-left">
                  <div className="widget-title">
                    <h3>Contact Info</h3>
                  </div>
                  <div className="widget-content">
                    <p style={{ color: '#ffffff' }}><span className="notranslate">Parlor Banquet</span></p>
                    <ul className="info-list clearfix">
                      <li>
                        <span>Address: </span>
                        <a
                          href="https://maps.app.goo.gl/MPZxtSntopzod1ky9"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: '#ffffff',
                            textDecoration: 'none'
                          }}
                        >
                          2863 Woodbridge Ave, Edison, NJ 08837
                        </a>
                      </li>
                      <li><span>Email: </span><a href="mailto:info@parlorbanquet.com">info@parlorbanquet.com</a></li>
                      <li><span>Call: </span><a href="tel:7325492900">(732) 549-2900</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom centred">
          <div className="auto-container">
            <div className="copyright">
              <p>
                © 2024 <span  style={{fontWeight: 'bold'}}>Parlor Banquet.</span>  All rights reserved | Managed by : <Link href="https://gurusoftware.in/ " target='_blank' style={{fontWeight: 'bold'}} >Guru Software</Link> 


              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Scroll to top */}
      {/* <div className="scroll-to-top" onClick={handleScrollToTop}>
        <div>
          <div className="scroll-top-inner">
            <div className="scroll-bar">
              <div className="bar-inner" />
            </div>
            <div className="scroll-bar-text">Go To Top</div>
          </div>
        </div>
      </div> */}


{/* <WhatsAppButton
  phoneNumber="+17325492900" 
  message="Hello! I’m interested in hosting an event at Parlor Banquet. Can you provide more details?" // Customize the message
/> */}


      <Chatbot />

      {/* <script id="messenger-widget-b" src="https://cdn.botpenguin.com/website-bot.js" defer>66a87fe5ecde8498a31e5ede,66a87f9594baa2500dcdeb65</script> */}
    </div>
  );
};

export default Footer;
