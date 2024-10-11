import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVenuesDropdownOpen, setVenuesDropdownOpen] = useState(false);
  const [isEventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleVenuesDropdown = () => {
    setVenuesDropdownOpen(!isVenuesDropdownOpen);
    setEventsDropdownOpen(false);
  };

  const toggleEventsDropdown = () => {
    setEventsDropdownOpen(!isEventsDropdownOpen);
    setVenuesDropdownOpen(false);
  };

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNow = () => {
    if (router.pathname !== "/Contact_Us") {
      router.push("/Contact_Us#contact-form").then(() => {
        setTimeout(() => {
          const contactForm = document.getElementById("contact-form");
          if (contactForm) {
            contactForm.scrollIntoView({ behavior: "smooth" });
          }
        }, 100); // Adding a small delay to ensure the DOM is fully loaded
      });
    } else {
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-visible", isMenuOpen);
    return () => {
      document.body.classList.remove("mobile-menu-visible");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Close the menu when the route changes
    setIsMenuOpen(false);
    setVenuesDropdownOpen(false);
    setEventsDropdownOpen(false);
  }, [router.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const getActiveClass = (path) => (router.pathname === path ? "current" : "");

  const Navigation = () => (
    <nav
      className={`main-menu navbar-expand-md navbar-light ${
        isMenuOpen ? "open" : ""
      }`}
    >
      <div
        className="collapse navbar-collapse show clearfix"
        id="navbarSupportedContent"
      >
        <ol className="navigation clearfix">
          <li className={getActiveClass("/")}>
            <Link href="/">Home</Link>
          </li>
          <li className={getActiveClass("/About_Us")}>
            <Link href="/About_Us">About </Link>
          </li>
          <li className={`dropdown ${getActiveClass("/Venues")}`}>
            <Link
              href="/Venues"
              onClick={(e) => {
                e.preventDefault();
                toggleVenuesDropdown();
              }}
            >
              Venues
            </Link>
            <ul style={{ display: isVenuesDropdownOpen ? "block" : "none" }}>
              <li className={getActiveClass("/ElloraHall")}>
                <Link href="/ElloraHall">Ellora Hall</Link>
              </li>
              <li className={getActiveClass("/GardenHall")}>
                <Link href="/GardenHall">Garden Hall</Link>
              </li>
              <li className={getActiveClass("/VictorianHall")}>
                <Link href="/VictorianHall">Victorian Hall</Link>
              </li>
              <li className={getActiveClass("/BallroomByParlor")}>
                <Link href="/BallroomByParlor">Ballroom by Parlor</Link>
              </li>
              <li className={getActiveClass("/SapphireBallroom")}>
                <Link href="/SapphireBallroom">Sapphire Ballroom</Link>
              </li>
              <li className={getActiveClass("/GoldBallroom")}>
                <Link href="/GoldBallroom">Gold Ballroom</Link>
              </li>
              <li className={getActiveClass("/PlatinumBallroom")}>
                <Link href="/PlatinumBallroom">Platinum Ballroom</Link>
              </li>
            </ul>
          </li>
          <li className={`dropdown ${getActiveClass("/Services")}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleEventsDropdown();
              }}
            >
              Events
            </a>
            <ul style={{ display: isEventsDropdownOpen ? "block" : "none" }}>
              <li className={getActiveClass("/Wedding")}>
                <Link href="/Wedding">Wedding</Link>
              </li>
              <li className={getActiveClass("/BirthdayParty")}>
                <Link href="/BirthdayParty">Birthday Party</Link>
              </li>
              <li className={getActiveClass("/CorporateEvents")}>
                <Link href="/CorporateEvents">Corporate Events</Link>
              </li>
              <li className={getActiveClass("/SocialEvents")}>
                <Link href="/SocialEvents">Social Events</Link>
              </li>
              <li className={getActiveClass("/CustomEventPlanning")}>
                <Link href="/CustomEventPlanning">Custom Event Planning</Link>
              </li>
            </ul>
          </li>
          <li className={getActiveClass("/Contact_Us")}>
            <Link href="/Contact_Us">Contact</Link>
          </li>
        </ol>
      </div>
    </nav>
  );

  return (
    <div>
      <header className="main-header">
        <div
          className={`header-top ${isSticky ? "is-sticky" : ""}`}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="auto-container" style={{ width: "100%" }}>
            <div
              className="top-inner"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <div
                className="left-column"
                style={{ display: "flex", alignItems: "center" }}
              >
                <ol
                  className="info clearfix mob"
                  style={{ display: "flex", alignItems: "center", margin: 0 }}
                >
                  <li style={{ marginRight: "20px" }}>
                    <i className="icon-40" style={{ lineHeight: "40px" }} />
                    <Link
                      href="tel:+17325492900"
                      style={{ lineHeight: "40px" }}
                    >
                      (732) 549-2900
                    </Link>
                  </li>
                  <li
                    style={{
                      lineHeight: "40px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      href="https://maps.app.goo.gl/snRL6RGk4wA7XbFi8"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <i
                        className="icon-2"
                        style={{ lineHeight: "40px", marginRight: "8px" }}
                      />
                      <span className="notranslate"> Parlor Banquet </span>,
                      2863 Woodbridge Ave, Edison NJ
                    </Link>
                  </li>
                </ol>
              </div>
              <div
                className="right-column"
                style={{ display: "flex", alignItems: "center" }}
              >
                <ul
                  className="mob"
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <li style={{ marginRight: "20px" }}>
                    <Link
                      href="Contact_Us#Contact"
                      style={{
                        background: "#212227",
                        padding: "24px 43px 23px 44px",
                        color: "#C59D5F",
                        fontSize: "20px",
                        textDecoration: "underline",
                        display: "inline-block",
                        position: "relative",
                        overflow: "hidden",
                        textAlign: "center",
                        borderRadius: "45px",
                      }}
                      onClick={handleBookNow}
                      className="atag"
                    >
                      <span className="blink-animation">Book Your Event</span>
                    </Link>
                  </li>
                  <li style={{ marginRight: "10px" }}>
                    <Link
                      href="https://www.facebook.com/profile.php?id=61557468884481"
                      onClick={handleBookNow}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fab fa-facebook-f headicon"
                        style={{
                          width: "40px",
                          height: "40px",
                          textAlign: "center",
                        }}
                      />
                    </Link>
                  </li>

                  <li style={{ marginRight: "10px" }}>
                    <Link
                      href="https://www.instagram.com/parlor_banquet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram headicon" />
                    </Link>
                  </li>
                  <li style={{ marginRight: "10px" }}>
                    <Link
                      href="https://www.linkedin.com/company/parlorbanquet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin headicon" />
                    </Link>
                  </li>
                  <li style={{ marginRight: "10px" }}>
                    <Link
                      href="https://api.whatsapp.com/send?phone=+17325492900&text=Is%20anyone%20there%20?"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-whatsapp headicon" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      {/* <div className="mainhide"></div> */}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blink {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          .blink-animation {
            animation: blink 2s infinite;
          }

          @media (max-width: 768px) {
            .header-top .top-inner {
              flex-direction: column;
              align-items: center;
            }

            .contact-info,
            .actions {
              width: 100%;
              justify-content: center;
            }

            .contact-info > div {
              margin-bottom: 10px;
            }

            .actions > div {
              margin-top: 10px;
            }
          }
        `}</style>

        <div className="header-lower" style={{ backgroundColor: "#fff" }}>
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <img
                      src="/assets/images/parlor-logo.webp"
                      style={{ width: "auto", height: 70 }}
                      alt="Logo"
                    />
                  </Link>
                </figure>
              </div>
              <div className="menu-area clearfix">
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler" onClick={toggleMenu}>
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div>
                <Navigation />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-backdrop" onClick={toggleMenu}></div>
        <div className="close-btn" onClick={toggleMenu}>
          <i className="fas fa-times" />
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img
                src="/assets/images/parlor-logo.webp"
                style={{ width: "auto", height: 70 }}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="menu-outer">
            <ol className="navigation clearfix">
              <li className={getActiveClass("/")}>
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className={getActiveClass("/About_Us")}>
                <Link href="/About_Us" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li className={`dropdown ${getActiveClass("/Venues")}`}>
                <a
                  href="/Venues"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleVenuesDropdown();
                  }}
                >
                  Venues <span className="fas fa-angle-down"></span>
                </a>
                <ul
                  style={{ display: isVenuesDropdownOpen ? "block" : "none" }}
                >
                  <li className={getActiveClass("/ElloraHall")}>
                    <Link href="/ElloraHall">Ellora Hall</Link>
                  </li>

                  <li className={getActiveClass("/GardenHall")}>
                    <Link href="/GardenHall">Garden Hall</Link>
                  </li>
                  <li className={getActiveClass("/VictorianHall")}>
                    <Link href="/VictorianHall">Victorian Hall</Link>
                  </li>

                  <li className={getActiveClass("/BallroomByParlor")}>
                    <Link href="/BallroomByParlor">Ballroom by Parlor </Link>
                  </li>

                  <li className={getActiveClass("/SapphireBallroom")}>
                    <Link href="/SapphireBallroom">Sapphire Ballroom</Link>
                  </li>

                  <li className={getActiveClass("/GoldBallroom")}>
                    <Link href="/GoldBallroom">Gold Ballroom</Link>
                  </li>

                  <li className={getActiveClass("/PlatinumBallroom")}>
                    <Link href="/PlatinumBallroom">Platinum Ballroom</Link>
                  </li>
                </ul>
              </li>
              <li className={`dropdown ${getActiveClass("/Services")}`}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleEventsDropdown();
                  }}
                >
                  Events <span className="fas fa-angle-down"></span>
                </a>
                <ul
                  style={{ display: isEventsDropdownOpen ? "block" : "none" }}
                >
                  <li className={getActiveClass("/Wedding")}>
                    <Link href="/Wedding" onClick={toggleMenu}>
                      Wedding
                    </Link>
                  </li>
                  <li className={getActiveClass("/BirthdayParty")}>
                    <Link href="/BirthdayParty" onClick={toggleMenu}>
                      Birthday Party
                    </Link>
                  </li>
                  <li className={getActiveClass("/CorporateEvents")}>
                    <Link href="/CorporateEvents" onClick={toggleMenu}>
                      Corporate Events
                    </Link>
                  </li>
                  <li className={getActiveClass("/SocialEvents")}>
                    <Link href="/SocialEvents" onClick={toggleMenu}>
                      Social Events
                    </Link>
                  </li>
                  <li className={getActiveClass("/CustomEventPlanning")}>
                    <Link href="/CustomEventPlanning" onClick={toggleMenu}>
                      Custom Event Planning
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={getActiveClass("/Contact_Us")}>
                <Link href="/Contact_Us" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ol>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
