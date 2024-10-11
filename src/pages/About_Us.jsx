import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import 'react-datepicker/dist/react-datepicker.css';

const AboutUs = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Layout>
            <Head>
                <title>About Us - Parlor Banquet | Premier Event Venue in Edison, NJ</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="keywords" content="Parlor Banquet, About Us, banquet hall, event venue, wedding venue, corporate events, social events, celebrations, Edison NJ" />
                <meta name="description" content="Discover the story behind Parlor Banquet, located at 2863 Woodbridge Ave, Edison, NJ 08837. Learn about our mission, values, and commitment to providing exceptional event experiences." />
                <meta name="author" content="Parlor Banquet" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="About Us - Parlor Banquet | Premier Event Venue in Edison, NJ" />
                <meta property="og:description" content="Explore the history and mission of Parlor Banquet, located at 2863 Woodbridge Ave, Edison, NJ 08837. Find out how we provide exceptional service for your events and celebrations." />
                <meta property="og:image" content="https://parlorbanquet.com/assets/images/ogparlor.webp" />
                <meta property="og:url" content="https://www.parlorBanquet.com/about" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Us - Parlor Banquet | Premier Event Venue in Edison, NJ" />
                <meta name="twitter:description" content="Explore the history and mission of Parlor Banquet, located at 2863 Woodbridge Ave, Edison, NJ 08837. Discover our commitment to creating exceptional events." />
                <meta name="twitter:image" content="https://parlorbanquet.com/assets/images/ogparlor.webp" />
            </Head>
            <section className="page-title centred">
                <div
                    className="bg-layer"
                    style={{ backgroundImage: "url(/assets/images/img/allbg.webp)" }}
                />
                <div className="auto-container">
                    <div className="content-box">
                        <h2>About Us</h2>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="about-style-three">
    <div
        className="pattern-layer"
        style={{ backgroundImage: "url(/assets/images/shape/shape-34.webp)" }}
    />
    <div className="auto-container">
        <div className="row clearfix">
            <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                <div className="image_block_two">
                    <div className="image-box">
                        <div className="shape">
                            <div
                                className="shape-1"
                                style={{ backgroundImage: "url(/assets/images/shape/shape-2.webp)" }}
                            />
                            <div
                                className="shape-2"
                                style={{ backgroundImage: "url(/assets/images/shape/shape-2.webp)" }}
                            />
                        </div>
                        <figure className="image image-1">
                            <img
                                src="/assets/images/img/abparlor.webp"
                                alt="About Us"
                            />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                <div className="content_block_two">
                    <div className="content-box">
                        <div className="sec-title mb_20">
                            <span className="sub-title notranslate">Parlor Banquet</span>
                            <h2 style={{ fontSize: 33 }}>
                                SOPHISTICATED VENUES FOR ELEGANT{" "}
                                <span>CELEBRATIONS</span>
                            </h2>
                        </div>
                        <div className="text " style={{marginBottom: '10px'}} >
                            <p>
                                Welcome to <span className="notranslate">Parlor Banquet</span>, one of the largest and most sophisticated banquet halls in the state. With a capacity to host up to 1600 guests under one roof, our newly renovated venue features multiple halls for various events, ample parking, and customizable décor. Experience excellence in catering, affordability, and flexibility for your memorable celebrations.
                            </p>
                        </div>
                        <ul className="list-style-one clearfix mb_30">
                            <li>World-class Amenities &amp; Tailored Experience</li>
                            <li>Accommodates Up To 1600 Guests</li>
                            <li>Exceptional Catering &amp; Customizable Décor</li>
                            <li>Ample Parking &amp; Affordable Flexibility</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

            <section className="service-section alternat-2 centred" style={{ paddingBottom: '50px' }}>
                <div className="pattern-layer" />
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 service-block">
                            <div
                                className="service-block-one wow fadeInUp animated"
                                data-wow-delay="00ms"
                                data-wow-duration="1500ms"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "1500ms",
                                    animationDelay: "0ms",
                                    animationName: "fadeInUp",
                                }}
                            >
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <i className="bi bi-eye"></i>
                                    </div>
                                    <h3>
                                        <a>Our Vision for the Future</a>
                                    </h3>
                                    <p>
                                        To be a global leader in event planning, known for
                                        creating extraordinary experiences and setting new
                                        standards of excellence worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 service-block">
                            <div
                                className="service-block-one wow fadeInUp animated"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "1500ms",
                                    animationDelay: "200ms",
                                    animationName: "fadeInUp",
                                }}
                            >
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <i className="bi bi-flag"></i>
                                    </div>
                                    <h3>
                                        <a>Our Purpose and Mission</a>
                                    </h3>
                                    <p>
                                        Our mission is to deliver unparalleled event experiences
                                        by providing top-notch service, exceptional cuisine, and
                                        elegant ambiance for all occasions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="menu-style-two mb_80" style={{ padding: "0px" }}>
                <div className="auto-container">
                    <div className="row clearfix keyservices">
                        <div className="col-lg-12 col-md-6 col-sm-12 menu-column">
                            <div className="menu-inner">
                                <div className="inner-box">
                                    <div className="single-item">
                                        <div className="upper-box">
                                            <h4>
                                                <a>World-Class Amenities</a>
                                            </h4>
                                        </div>
                                        <div className="text">
                                            <p style={{ paddingBottom: "5px" }}>
                                                At <span className="notranslate">Parlor Banquet</span> we offer an unparalleled level of luxury and comfort through our state-of-the-art amenities. Our venue features lavish banquet halls equipped with the latest technology and exquisite dining options. Every aspect is meticulously crafted to meet the highest standards, ensuring that your event not only meets but exceeds expectations.
                                            </p>
                                            <p>
                                                <span style={{ color: "#333" }}>Unforgettable Experiences:</span>
                                            </p>
                                            <p>
                                                Our dedicated team is committed to delivering a truly unique and unforgettable experience. From the moment you arrive, you will be surrounded by elegance and sophistication, tailored specifically to your needs and preferences. At <span className="notranslate">Parlor Banquet</span>, every event is designed to be a memorable masterpiece.
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
                                                <a>Legacy of Excellence</a>
                                            </h4>
                                        </div>
                                        <div className="text">
                                            <p style={{ paddingBottom: "5px" }}>
                                                <span className="notranslate">Parlor Banquet</span> is renowned for its commitment to excellence, offering exceptional hospitality that has garnered acclaim among discerning patrons. Our expert management team upholds the finest traditions of service, ensuring that each event is executed with precision and grace. We take pride in our reputation for creating extraordinary experiences that leave a lasting impression.
                                            </p>
                                            <p>
                                                <span style={{ color: "#333" }}>Timeless Elegance:</span>
                                            </p>
                                            <p>
                                                Whether you're hosting a lavish wedding, a refined corporate event, or a chic social gathering, <span className="notranslate">Parlor Banquet</span> provides an ambiance of timeless elegance. Our venue stands as the premier choice for those seeking to celebrate in style, with each occasion crafted to be an elegant and memorable event that will be cherished for years to come.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AboutUs;
