


// https://web3forms.com/pricing

import React from 'react';
import Head from 'next/head';

import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import ContactForm from './ContactForm';

const Contact = () => {


  return (
    <Layout>




<Head>
  <title>Contact Us - Get in Touch with Parlor Banquet for Your Event Needs</title>
  
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  
  <meta name="keywords" content="contact us, Parlor Banquet, get in touch, event venue contact, customer support, inquiry" />
  <meta name="description" content="Get in touch with Parlor Banquet for any inquiries or assistance. Our contact page provides all the details you need to reach out and connect with us." />
  <meta name="author" content="Parlor Banquet" />
  <meta name="robots" content="index, follow" />
  
  <meta property="og:title" content="Contact Us - Parlor Banquet" />
  <meta property="og:description" content="Reach out to Parlor Banquet for any questions or assistance. Our contact page has all the information you need to get in touch with us." />
  <meta property="og:url" content="https://parlorbanquet.com/Contact_Us" />
  <meta property="og:image" content="https://parlorbanquet.com/assets/images/ogparlor.webp" />
  <meta property="og:type" content="website" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Us - Parlor Banquet" />
  <meta name="twitter:description" content="Contact Parlor Banquet for any inquiries. Find all the details you need to reach out to us and get the support you need." />
  <meta name="twitter:image" content="https://parlorbanquet.com/assets/images/Birthdayp.webp" />
  <meta name="twitter:url" content="https://parlorbanquet.com/Contact_Us" />
</Head>


<section className="page-title centred">
        <div
          className="bg-layer"
          style={{ backgroundImage: 'url(/assets/images/img/allbg.webp)' }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h2>Contact Us</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="auto-container">
          <div className="sec-title centred mb_90">
            <span className="sub-title">Contact Us</span>
            <h2>Need Support? Talk with <span className="notranslate">Parlor Banquet</span></h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12 col-sm-12 info-column">
              <div className="info-inner">
                <ul className="info-list clearfix">
                  <li>
                    <i className="icon-39" />
                    <h5>Address:</h5>
                    <Link
                      href="https://maps.app.goo.gl/MPZxtSntopzod1ky9"
                      passHref
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#676767', textDecoration: 'none' }}
                    >
                      <p>2863 Woodbridge Ave, Edison, NJ 08837</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 info-column">
              <div className="info-inner" style={{ height: '161px' }}>
                <ul className="info-list clearfix">
                  <li>
                    <i className="icon-40" />
                    <h5>Phone No:</h5>
                    <p>
                      <Link href="tel:7325492900" passHref>
                        (732) 549-2900
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 info-column">
              <div className="info-inner" style={{ height: '161px' }}>
                <ul className="info-list clearfix">
                  <li>
                    <i className="icon-1" style={{ fontSize: '20px' }} />
                    <h5>Email:</h5>
                    <p>
                      <Link href="mailto:info@parlorbanquet.com" passHref>
                        info@parlorbanquet.com
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="google-map-section">
        <div className="map-inner p_relative d_block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d388242.33439071104!2d-74.356731!3d40.516325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c95894c6084f%3A0xc09136372a87a6ad!2sParlor%20Banquet!5e0!3m2!1sen!2sus!4v1721900445066!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <ContactForm></ContactForm>

    </Layout>
  );
};

export default Contact;
