// pages/Home.js

import React, { useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GallerySection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className="gallery-section pt_65">
      <div className="mycontainer">
        <div className="sec-title centred mb_45">
          <span className="sub-title">Our Venues</span>
          <h2>Excellence in Our Venues</h2>
        </div>
        <Slider {...settings} className="gallery-carousel " ref={sliderRef}>
          <div className="myitem" style={{ width: "470px" }}>
            <div className="gallery-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src="assets/images/img/Victorian.webp"
                   
                    alt="Charming Elegance in Ellora Hall"
                  />
                </figure>
                <div className="content-box">
                  <h4>
                    <Link href="/VictorianHall">
                      Experience Classic Sophistication in Our Victorian Hall.
                    </Link>
                  </h4>
                  <span>Victorian Hall</span>
                </div>
              </div>
            </div>
          </div>
          <div className="myitem" style={{ width: "470px" }}>
            <div className="gallery-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src="assets/images/img/ball-room-main.webp"
                   
                    alt="Professional Conferences Perfected"
                  />
                </figure>
                <div className="content-box">
                  <h4>
                    <Link href="/GoldBallroom">
                      An Elegant Setting for Your Prestigious Gatherings.
                    </Link>
                  </h4>
                  <span>Gold Ballroom</span>
                </div>
              </div>
            </div>
          </div>
          <div className="myitem" style={{ width: "470px" }}>
            <div className="gallery-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src="assets/images/img/GardenHall.webp"
                   
                    alt="Building Stronger Teams Together"
                  />
                </figure>
                <div className="content-box">
                  <h4>
                    <Link href="/GardenHall">
                      Celebrate Amidst the Beauty and Serenity of Our Garden
                      Hall.
                    </Link>
                  </h4>
                  <span>Garden Hall</span>
                </div>
              </div>
            </div>
          </div>

          <div className="myitem" style={{ width: "470px" }}>
            <div className="gallery-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src="assets/images/img/E1.webp"
                   
                    alt="Unforgettable Wedding Moments"
                  />
                </figure>
                <div className="content-box">
                  <h4>
                    <Link href="/ElloraHall">
                      Intimate Elegance for Your Most Cherished Gatherings.
                    </Link>
                  </h4>
                  <span>Ellora Hall</span>
                </div>
              </div>
            </div>
          </div>

          <div className="myitem" style={{ width: "470px" }}>
            <div className="gallery-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src="assets/images/img/PlatinumBallroom.webp"
                   
                    alt="Unforgettable Wedding Moments"
                  />
                </figure>
                <div className="content-box">
                <h4><Link href='/PlatinumBallroom'>Unmatched Elegance for Your Most Grand Celebrations.</Link></h4>
<span>Platinum Ballroom</span>

                </div>
              </div>
            </div>
          </div>

          <div className="myitem" style={{ width: "470px" }}>
            <div className="gallery-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img
                    src="assets/images/img/Sapphire.webp"
                   
                    alt="Unforgettable Wedding Moments"
                  />
                </figure>
                <div className="content-box">
                <h4><Link href='/SapphireBallroom'>Radiate Elegance in Our Sapphire Ballroom.</Link></h4>
      <span>Sapphire Ballroom</span>


                </div>
              </div>
            </div>
          </div>
        </Slider>
        <button
          type="button"
          className="customnavmy customnavprev"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <span className="fal fa-angle-left" />
        </button>
        <button
          type="button"
          className="customnavmy customnavnext"
          onClick={() => sliderRef.current.slickNext()}
        >
          <span className="fal fa-angle-right" />
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
