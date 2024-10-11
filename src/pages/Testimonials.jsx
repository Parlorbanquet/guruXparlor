// import React, { useEffect } from 'react';

// const Testimonials = () => {
//   useEffect(() => {
//     const link = document.createElement('link');
//     link.href = 'https://assets.idukki.io/version/style_1';
//     link.rel = 'stylesheet';
//     document.head.appendChild(link);

//     // Load external scripts
//     const script1 = document.createElement('script');
//     script1.src = 'https://assets.idukki.io/version/script_0';
//     script1.defer = true;
//     document.body.appendChild(script1);

//     const script2 = document.createElement('script');
//     script2.src = 'https://static.elfsight.com/platform/platform.js';
//     script2.setAttribute('data-use-service-core', 'true');
//     script2.defer = true;
//     document.body.appendChild(script2);

//     return () => {
//       document.head.removeChild(link);
//       document.body.removeChild(script1);
//       document.body.removeChild(script2);
//     };
//   }, []);

//   return (
//     <div>
//       {/* Website With #Idukki 😍 */}
//       {/* https://dash.elfsight.com/ */}
      
//       <section 
//         className="testimonial-style-two" 
//         style={{ backgroundImage: "url('/assets/images/shape/shape-28.webp')" }}
//       >
//         <div className="auto-container">
//           <div className="sec-title centred mb_45">
//             <span className="sub-title">Parlor Banquet</span>
//             <h2>Customer reviews on Googles</h2>
//           </div>

//           {/* Idukki Widget */}
//           {/* <div data-ugc='idukki' data-bguid='ccb4c15a-26ab-4a50-9f0c-25830f838445' data-guid='9d51ca2f-93df-46eb-83a6-0ae6eab0948b' data-version='124'></div> */}

//           {/* Elfsight Widget */}
//           <div className="elfsight-app-23c734dd-c2cc-44a6-b57d-08497b273992" data-elfsight-app-lazy></div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Testimonials;






import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MAX_WORDS = 20;

const Testimonials = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleToggleReadMore = (index) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  };

  const truncateText = (text, numWords) => {
    const words = text.split(' ');
    if (words.length <= numWords) return text;
    return `${words.slice(0, numWords).join(' ')}...`;
  };

  const testimonials = [
    {
      text: 'We found Parlor Banquet online last minute as another hall had double booked us. Parlor banquet gave us a prompt response and they were professional from the get go. The management took care of all our concerns and handled our questions with patience. From the food to hall arrangements, everything was taken care of in the best possible manner. The venue was beautiful and all the guests enjoyed the celebration. We highly recommend Parlor Banquet and will definitely come back for future events.',
      name: 'Chris Ace',
      designation: '3 days ago',
      imgSrc: '/assets/resource/testimonial-1.webp'
    },
    {
      text: 'The team here is growing and working so hard to bring a beautiful venue to the Edison area. They were great with communication and always answered my questions. I hosted one of my wedding events here and they were so accommodating and friendly. I’m happy I had my event here and will definitely book with them again!',
      name: 'Mariam Abbas',
      designation: '5 days ago',
      imgSrc: '/assets/resource/testimonial-2.webp'
    },
    {
      text: 'After checking out a few banquet halls in the area, am glad I landed here! Kaushal has been so helpful and accommodating with organizing my event and always keeping me posted with updates—great customer service! It’s amazing how much work the new management is putting into revamping and modernizing the banquet hall and its looking amazing! Am looking forward to my daughter’s sweet sixteen! I would highly recommend you check out this banquet hall for your next special occasion!!!',
      name: 'Andrea Raghu',
      designation: '7 days ago',
      imgSrc: '/assets/resource/testimonial-3.webp'
    },
    {
      text: 'This is a very great place for events. They have small to very large halls. I recommend this place.',
      name: 'Serah Wambugu',
      designation: '15 days ago',
      imgSrc: '/assets/resource/testimonial-4.webp'
    },
    {
      text: 'Excellent and clean area with respectful workers who allowed my nephew to have a wonderful graduation party.',
      name: 'Larry Kimani',
      designation: '22 days ago',
      imgSrc: '/assets/resource/testimonial-5.webp'
    },
    {
      text: 'New management is truly putting in a lot of effort to revamp the place. Yash is extremely accommodating and dedicated to making your event an amazing experience. I will be recommending the Parlor to those in the area looking for a great place for any celebration!',
      name: 'Jessica Ihem',
      designation: '1 month ago',
      imgSrc: '/assets/resource/testimonial-6.webp'
    },
    {
      text: 'Great venue for parties!! The staff are very responsive and the food is great and lots of it. Very good equipment and sound system.',
      name: 'Irene G',
      designation: '2 months ago',
      imgSrc: '/assets/resource/testimonial-1.webp'
    },
    {
      text: 'Nice Banquet. Food and Service is excellent. Had the privilege of watching India-Pak match. It was awesome experience. Highly recommended.',
      name: 'Vineet Mujoo',
      designation: '2 months ago',
      imgSrc: '/assets/resource/testimonial-2.webp'
    },
    {
      text: 'Excellent place would recommend if you’re hosting events here great people overall experience is 100/100',
      name: 'Ebone Lowe',
      designation: '3 months ago',
      imgSrc: '/assets/resource/testimonial-3.webp'
    },
  ];

  const settings = {
    dots: false,  // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0px',
        }
      }
    ]
  };

  return (
    <section 
      className="testimonial-style-two" 
      style={{ backgroundImage: "url('/assets/images/shape/shape-28.webp')" }}
    >
      <div className="auto-container">
        <div className="sec-title centred mb_45">
          <span className="sub-title">Testimonials</span>
          <h2>What Clients Say <br />About <span>Parlor</span></h2>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div 
              className="item" 
              key={index} 
              style={{ 
                margin: '0 10px',
                display: 'flex',
                justifyContent: 'center' 
              }}
            >
              <div className="testimonial-content" style={{
                position: 'relative',
                width: 'auto',
                margin: '0 10px',
                maxWidth: '100%'  // Ensure the content is responsive
              }}>
                <div className="inner-box" style={{
                  background: '#fff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  padding: '20px',
                  textAlign: 'center',
                  height: '100%'
                }}>
                  <figure className="thumb-box" style={{ marginBottom: '15px' }}>
                    <Image
                      src={testimonial.imgSrc}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      style={{ borderRadius: '50%', objectFit: 'cover' }}
                      priority // Use this if it's a primary image
                    />
                  </figure>
                  <p>
                    {expandedIndex === index 
                      ? testimonial.text 
                      : truncateText(testimonial.text, MAX_WORDS)}
                    {testimonial.text.split(' ').length > MAX_WORDS && (
                      <button 
                        onClick={() => handleToggleReadMore(index)} 
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#c59d5f',
                          cursor: 'pointer',
                          fontSize: '14px',
                          marginTop: '10px',
                          textDecoration: 'underline'
                        }}
                      >
                        {expandedIndex === index ? 'Read less' : 'Read more'}
                      </button>
                    )}
                  </p>
                  <ul className="rating clearfix" style={{
                    listStyle: 'none',
                    padding: '0',
                    margin: '0',
                    textAlign: 'center'
                  }}>
                    {[...Array(5)].map((_, starIndex) => (
                      <li key={starIndex} style={{ display: 'inline-block', color: '#FFD700' }}>
                        <i className={`fas fa-star${starIndex < 4 ? '' : '-half-alt'}`}></i>
                      </li>
                    ))}
                  </ul>
                  <h4>{testimonial.name}</h4>
                  <span className="designation">{testimonial.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          type="button"
          className="customnavmy customnavprev"
          onClick={goToPrev}
        >
          <span className="fal fa-angle-left" />
        </button>
        <button
          type="button"
          className="customnavmy customnavnext"
          onClick={goToNext}
        >
          <span className="fal fa-angle-right" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
