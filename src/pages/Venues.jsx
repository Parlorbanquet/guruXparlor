import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const Venues = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const imageHoverStyles = {
    position: "relative",
    overflow: "hidden",
  };

  const imageStyles = {
    transition: "transform 0.5s ease", // Apply zoom effect on hover
    width: "100%",
    display: "block",
  };

  const hoverOverlayStyles = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 100%)",
    color: "white",
    textAlign: "center",
    padding: "20px",
    transform: "translateY(0)", // Overlay always visible
    opacity: "1", // Overlay always visible
    transition: "transform 0.7s ease, opacity 0.7s ease",
    display: "flex",
    alignItems: "flex-end", // Align text to the bottom
    justifyContent: "center", // Center text horizontally
  };

  const imageBoxHover = (event, active) => {
    if (isClient) {
      const image = event.currentTarget.querySelector("img");
      image.style.transform = active ? "scale(1.1)" : "scale(1)";
    }
  };

  if (!isClient) {
    return null; // Avoid rendering issues on the server
  }

  return (
    <Layout>
      <Head>
        <title>
          Our Venues - Explore Elegant Event Spaces at Parlor Banquets
        </title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore our diverse and elegant event spaces at Parlor Banquets. From intimate settings to grand halls, find the perfect venue for your next event in Edison, NJ."
        />
        <meta
          name="keywords"
          content="event venues, banquet halls, Parlor Banquets, Edison NJ, venue spaces, wedding venues, event spaces, social gatherings, corporate events"
        />
        <meta name="author" content="Parlor Banquets" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Our Venues - Explore Elegant Event Spaces at Parlor Banquets"
        />
        <meta
          property="og:description"
          content="Discover a variety of stunning event spaces at Parlor Banquets, each designed to provide the perfect setting for your special occasions. Located in Edison, NJ."
        />
         <meta property="og:image" content="https://parlorbanquet.com/assets/images/ogparlor.webp" />

        <meta
          property="og:url"
          content="https://parlorbanquet.com/Venues"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Venues - Explore Elegant Event Spaces at Parlor Banquets"
        />
        <meta
          name="twitter:description"
          content="Find the perfect venue for your next event at Parlor Banquets. Explore our range of elegant and versatile spaces designed for every type of gathering."
        />
        <meta
          name="twitter:image"
          content="https://parlorbanquet.com/assets/images/ogparlor.webp"
        />
      </Head>
      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{ backgroundImage: "url(/assets/images/img/allbg.webp)" }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h2>Our Venues</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Venues</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="promotion-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_45">
            <span className="sub-title">Venue Offerings</span>
            <h2>Elegant Venues for Every Occasion</h2>
          </div>
          <div className="promotion-block-one">
            <div className="inner-box">
              <div
                className="shape"
                style={{
                  backgroundImage: "url(/assets/images/shape/shape-2.webp)",
                }}
              />
              <div className="row clearfix mb_45 mt_45">
                {[
                                  {
                                    href: "/ElloraHall",
                                    src: "/assets/images/img/E1.webp",
                                    alt: "Ellora Hall",
                                    title: "Ellora Hall",
                                    subtitle: "Timeless Charm",
                                    capacity: "100 - 120",
                                    description:
                                      "The Ellora Hall exudes timeless charm, ideal for intimate gatherings and special occasions. Its elegant design and cozy atmosphere provide a perfect setting for creating cherished memories.",
                                  },

                  {
                    href: "/GardenHall",
                    src: "/assets/images/img/GardenHall.webp",
                    alt: "Garden Hall",
                    title: "Garden Hall",
                    subtitle: "Charming Serenity",
                    capacity: "180 - 190",
                    description:
                      "Garden Hall offers a serene and elegant setting, perfect for intimate gatherings and special occasions. The hall's blend of natural beauty and sophisticated design provides a tranquil atmosphere for memorable events.",
                  },
                  {
                    href: "/VictorianHall",
                    src: "/assets/images/img/Victorian.webp",
                    alt: "Victorian Hall",
                    title: "Victorian Hall",
                    subtitle: "Grand Elegance",
                    capacity: "200 - 270",
                    description:
                      "Victorian Hall embodies grandeur and sophistication, making it perfect for large-scale celebrations and majestic events. The hall’s classic design and luxurious amenities offer an unparalleled experience of elegance and comfort.",
                  },
                  {
                    href: "/BallroomByParlor",
                    src: "/assets/images/img/BallroomByParlor.webp",
                    alt: "Ballroom by Parlor",
                    title: "Ballroom by Parlor",
                    subtitle: "Majestic Grandeur",
                    capacity: "900 - 1000",
                    description:
                      "Ballroom by Parlor offers a majestic and expansive space, ideal for large-scale events, grand celebrations, and prestigious gatherings. With a capacity of 900-1000 guests, this venue combines elegance with ample space to create an unforgettable experience.",
                  },
                  {
                    href: "/SapphireBallroom",
                    src: "/assets/images/img/Sapphire.webp",
                    alt: "Sapphire Ballroom",
                    title: "Sapphire Ballroom",
                    subtitle: "Elegant Splendor",
                    capacity: "120 - 150",
                    description:
                      "Sapphire Ballroom presents an exquisite blend of sophistication and style, ideal for grand celebrations and upscale events. With its refined design and luxurious ambiance, it offers a stunning backdrop for any occasion.",
                  },
                  {
                    href: "/GoldBallroom",
                    src: "/assets/images/img/ball-room-main.webp",
                    alt: "Gold Ballroom",
                    title: "Gold Ballroom",
                    subtitle: "Opulent Grandeur",
                    capacity: "300 - 320",
                    description:
                      "Gold Ballroom epitomizes luxury and elegance, making it an ideal choice for grand events and high-profile gatherings. With its rich design and sophisticated amenities, it ensures a majestic setting for weddings, galas, and corporate functions.",
                  },

                  {
                    href: "/PlatinumBallroom",
                    src: "/assets/images/img/PlatinumBallroom.webp",
                    alt: "Platinum Ballroom Hall",
                    title: "Platinum Ballroom",
                    subtitle: "Majestic Splendor",
                    capacity: "300 - 320",
                    description:
                      "Platinum Ballroom Hall offers an extraordinary venue for large-scale events and high-profile occasions. With its luxurious design and extensive amenities, it provides a breathtaking setting for weddings, conferences, and grand celebrations.",
                  },


                ].map((venue, index) => (
                  <div
                    key={index}
                    className="col-lg-6 col-md-12 col-sm-12 image-column"
                  >
                    <div
                      className="image-box"
                      style={imageHoverStyles}
                      onMouseEnter={(event) => imageBoxHover(event, true)}
                      onMouseLeave={(event) => imageBoxHover(event, false)}
                    >
                      <figure className="image">
                        <img
                          src={venue.src}
                          style={{ ...imageStyles, height: "403px" }}
                          alt={venue.alt}
                          className="venusimg"
                        />
                        <div
                          className="hover-overlay"
                          style={hoverOverlayStyles}
                        >
                          <h2>
                            <Link href={venue.href} style={{ color: "white" }}>
                              {venue.title.split(" ")[0]}
                              <span> {venue.title.split(" ")[1]}</span>
                            </Link>
                          </h2>
                        </div>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div
                        className="content-shape"
                        style={{
                          backgroundImage:
                            "url(/assets/images/shape/shape-9.webp)",
                        }}
                      />
                      <h4>{venue.subtitle}</h4>
                      <span>{venue.capacity}</span>
                      <p>{venue.description}</p>
                      <div className="btn-box">
                        <Link
                          href={venue.href}
                         className="theme-btn-two"
                      
                        >
                         View Details
                        </Link>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Venues;
