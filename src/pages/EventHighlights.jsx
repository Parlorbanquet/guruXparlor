import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const EventHighlights = () => {
  const sliderRef = useRef(null);
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 3, 
    autoplay: true,
    autoplaySpeed: 3000, 
    centerMode: true,
    centerPadding: '0px', 
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1, 
          centerMode: true, 
        }
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 2, 
          centerMode: true, 
        }
      },
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 3, 
          centerMode: true, 
        }
      }
    ]
  };

  return (
    <section className="story-section bg-color-1">
      <div className="auto-container">
        <div className="sec-title light mb_50">
          <span className="sub-title">Celebrate in Motion</span>
          <h2>
            Our Banquet and Event <br />
            <span>Highlights</span>
          </h2>
        </div>
        <div className="story-content">
          <Slider
            {...settings}
            className="story-carousel"
            ref={sliderRef}
            style={{
              padding: '35px 35px', 
            }}
          >
            <div className="story-block-one">
              <div className="inner-box" >
                <span className="year">Wedding</span>
                <figure className="image-box">
                  <video width="100%" height="auto" controls>
                    <source src="assets/images/video/1.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </figure>
                <div className="lower-content" style={{ textAlign: 'center' }}>
                  <h4 style={{ color: '#c59d5f' }}>Wedding Event</h4>
                  <p>
                    Experience the grandeur of our wedding events, showcasing elegant arrangements and memorable moments captured in this video.
                  </p>
                </div>
              </div>
            </div>
            <div className="story-block-one">
              <div className="inner-box" >
                <span className="year">Decorations</span>
                <figure className="image-box">
                  <video width="100%" height="auto" controls>
                    <source src="assets/images/video/2.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </figure>
                <div className="lower-content" style={{ textAlign: 'center' }}>
                  <h4 style={{ color: '#c59d5f' }}>Beautiful Decorations</h4>
                  <p>
                    Delight in the stunning decorations we offer, beautifully captured in this video highlighting our exceptional design work.
                  </p>
                </div>
              </div>
            </div>
            <div className="story-block-one">
              <div className="inner-box" >
                <span className="year">Themes</span>
                <figure className="image-box">
                  <video width="100%" height="auto" controls>
                    <source src="assets/images/video/3.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </figure>
                <div className="lower-content" style={{ textAlign: 'center' }}>
                  <h4 style={{ color: '#c59d5f' }}>Customized Themes</h4>
                  <p>
                    Explore our unique customized themes, showcased in this video to give you a glimpse of the personalized touches we offer.
                  </p>
                </div>
              </div>
            </div>
            <div className="story-block-one">
              <div className="inner-box" >
                <span className="year">Dining Room</span>
                <figure className="image-box">
                  <video width="100%" height="auto" controls>
                    <source src="assets/images/video/4.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </figure>
                <div className="lower-content" style={{ textAlign: 'center' }}>
                  <h4 style={{ color: '#c59d5f' }}>Dining Room Setup</h4>
                  <p>
                    Take a virtual tour of our elegant dining room setups, as shown in this video, designed to enhance your dining experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="story-block-one">
  <div className="inner-box">
    <span className="year">Party Celebration</span>
    <figure className="image-box">
      <video width="100%" height="auto" controls>
        <source src="assets/images/video/6.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </figure>
    <div className="lower-content" style={{ textAlign: 'center' }}>
      <h4 style={{ color: '#c59d5f' }}>Unforgettable Party Moments</h4>
      <p>
        Relive the joy and excitement of our vibrant party celebrations, captured in this video, showcasing a night to remember.
      </p>
    </div>
  </div>
</div>
<div className="story-block-one">
  <div className="inner-box">
    <span className="year">Culinary Delights</span>
    <figure className="image-box">
      <video width="100%" height="auto" controls>
        <source src="assets/images/video/7.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </figure>
    <div className="lower-content" style={{ textAlign: 'center' }}>
      <h4 style={{ color: '#c59d5f' }}>Exquisite Cuisine Highlights</h4>
      <p>
        Savor the culinary delights featured in this video, showcasing the mouth-watering dishes served during our party celebrations.
      </p>
    </div>
  </div>
</div>

<div className="story-block-one">
  <div className="inner-box">
    <span className="year">Dance Party</span>
    <figure className="image-box">
      <video width="100%" height="auto" controls>
        <source src="assets/images/video/8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </figure>
    <div className="lower-content" style={{ textAlign: 'center' }}>
      <h4 style={{ color: '#c59d5f' }}>Energetic Dance Moments</h4>
      <p>
        Experience the electrifying dance floor energy in this video, capturing the unforgettable dance moves and party vibes.
      </p>
    </div>
  </div>
</div>

<div className="story-block-one">
  <div className="inner-box">
    <span className="year">Banquet Hall</span>
    <figure className="image-box">
      <video width="100%" height="auto" controls>
        <source src="assets/images/video/9.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </figure>
    <div className="lower-content" style={{ textAlign: 'center' }}>
      <h4 style={{ color: '#c59d5f' }}>Elegant Banquet Hall Overview</h4>
      <p>
        Take a virtual tour of our beautifully designed banquet hall, as shown in this video, perfect for hosting your memorable events.
      </p>
    </div>
  </div>
</div>



          </Slider>
        </div>
      </div>
    </section>

  );
};

export default EventHighlights;
