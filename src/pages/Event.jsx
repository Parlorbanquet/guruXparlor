// components/Events.js
import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Image from "next/image";

import { css, keyframes } from "@emotion/react";

// Define keyframes for animations
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

// Define CSS styles for animations
const owlCarouselStyles = css`
  .slide-content {
    opacity: 0;
    transition: opacity 1000ms;
  }

  .fade-in {
    animation: ${fadeIn} 1000ms forwards;
  }

  .fade-out {
    animation: ${fadeOut} 1000ms forwards;
  }
`;

// Responsive settings for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// Main component
const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContentsRef = useRef([]);

  useEffect(() => {
    const handleSlideChange = () => {
      slideContentsRef.current.forEach((el, index) => {
        if (el) {
          if (index === currentIndex) {
            el.classList.remove("fade-out");
            el.classList.add("fade-in");
          } else {
            el.classList.remove("fade-in");
            el.classList.add("fade-out");
          }
        }
      });
    };

    handleSlideChange();

    return () => {
      slideContentsRef.current.forEach((el) => {
        if (el) {
          el.classList.remove("fade-in", "fade-out");
        }
      });
    };
  }, [currentIndex]);

  return (
    <section className="banner-section sagar">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        className="banner-carousel"
        css={owlCarouselStyles}
        afterChange={(nextSlide) => setCurrentIndex(nextSlide)}
      >
        {/* First Slide */}

        <div
          className="slide-container sagar"
          style={{ position: "relative", width: "100%", height: "700px" }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "-1",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src="/assets/images/img/bg2.webp"
              alt="Background Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className="slide-content"
            ref={(el) => (slideContentsRef.current[1] = el)}
          >
            <span className="slide-title notranslate">Parlor Banquet</span>
            <h2 className="slide-heading">
              Elegance and Sophistication for
              <br /> Every Occasion
            </h2>
            <p className="slide-description">
              {/* Experience elegance and sophistication for every occasion at */}
              Sophisticated venues for elegant celebration
              <br /> <span className="notranslate"> Parlor Banquet</span> where
              every event becomes a memorable celebration.
            </p>
            <div className="theme-btn-one">
              <Link href="/Venues" style={{ color: "white" }}>
                Our Venues
              </Link>
            </div>
          </div>
        </div>



        
        <div
          className="slide-container sagar"
          style={{ position: "relative", width: "100%", height: "700px" }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "-1",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src="/assets/images/img/mainbg1.webp"
              alt="Background Image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className="slide-content"
            ref={(el) => (slideContentsRef.current[0] = el)}
          >
            <span className="slide-title notranslate">Parlor Banquet</span>
            <h2 className="slide-heading">
            Sophisticated Venues For Elegant <br></br> Celebration                         </h2>
            <p className="slide-description">
              Experience unforgettable memories at
              <span className="notranslate"> Parlor Banquet</span> where
              exceptional events and celebrations
              <br /> come to life in an elegant and enchanting setting.
            </p>
            <div className="theme-btn-one">
              <Link href="/Contact_Us" style={{ color: "white" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

    

      </Carousel>
    </section>
  );
};

export default Events;




    {/* Third Slide */}
        {/* <div
          className="slide-container sagar"
          style={{ position: "relative", width: "100%", height: "700px" }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "-1",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src="/assets/images/img/mainbg2.webp"
              alt="Background Image 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className="slide-content sagar"
            ref={(el) => (slideContentsRef.current[2] = el)}
          >
            <span className="slide-title notranslate">Parlor Banquet</span>
            <h2 className="slide-heading">
              Your Perfect Venue for Weddings,
              <br /> Corporate Events, and More
            </h2>
            <p className="slide-description">
              Your perfect venue for weddings, corporate events, and more,
              <br />
              offering exceptional service and elegant settings.
            </p>
            <div className="theme-btn-one">
              <Link href="/About_Us" style={{ color: "white" }}>
                About Us
              </Link>
            </div>
          </div>
        </div> */}
