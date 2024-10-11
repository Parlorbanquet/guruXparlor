import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState("");

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
  
    const formData = new FormData(event.target);
    formData.append("access_key", "c5671892-0a7f-4e4b-bfd5-aa2a40655744");
  
    const email = formData.get('email');
    const confirmEmail = formData.get('confirmEmail');
    const phone = formData.get('phone');
  
    // Email match validation
    if (email !== confirmEmail) {
      toast.error("Emails do not match!");
      return;
    }
  
    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        toast.success("Form Submitted Successfully!");
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        toast.error(`Error: ${data.message}`);
        setResult(data.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
      setResult("An unexpected error occurred.");
    }
  };
  

  return (
    <div>
      <section className="order-section bg-color-2" id="contact-form">
        <div
          className="pattern-layer"
          style={{ backgroundImage: 'url(/assets/images/shape/shape-14.webp)' }}
        />
        <div className="shape">
          <div
            className="shape-1"
            style={{ backgroundImage: 'url(/assets/images/shape/shape-15.webp)' }}
          />
          <div
            className="shape-2"
            style={{ backgroundImage: 'url(/assets/images/shape/shape-16.webp)' }}
          />
          <div
            className="shape-3"
            style={{ backgroundImage: 'url(/assets/images/shape/shape-17.webp)' }}
          />
          <div
            className="shape-4"
            style={{ backgroundImage: 'url(/assets/images/shape/shape-18.webp)' }}
          />
        </div>

        <div>
          <div className="auto-container">
            <div className="sec-title centred mb_50">
              <span className="sub-title">Get In Touch</span>
              <h2>Get In Touch with Parlor Banquet</h2>
            </div>
            <div className="form-inner centred">
              <form onSubmit={onSubmit}>
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                    <select id="occasion" name="occasion" required>
                      <option value="" disabled selected>Select Occasion</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="socialevents">Social Events</option>
                      <option value="custom event planning">Custom Event Planning</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                    <select id="package" name="package" required>
                      <option value="" disabled selected>Select Package</option>
                      <option value="basic">Basic Package</option>
                      <option value="standard">Standard Package</option>
                      <option value="premium">Premium Package</option>
                      <option value="deluxe">Deluxe Package</option>
                      <option value="luxury">Luxury Package</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input type="date" id="date" name="date" required />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      placeholder="Number of Guests"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="email"
                      id="confirmEmail"
                      name="confirmEmail"
                      placeholder="Confirm Email"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input
                      type="text"
                      id="name"
                      name="username"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                  <input
  type="text"
  id="phone"
  name="phone"
  placeholder="Phone"
  required
  pattern="\d{10}" 
  title="Phone number must be exactly 10 digits."
/>

                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input
                      type="text"
                      id="bestTimeToCall"
                      name="bestTimeToCall"
                      placeholder="Best time to call me (day, date, time)"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                    <select id="timeOfDay" name="timeOfDay" required>
                      <option value="" disabled selected>Select Time of Day</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input
                      type="text"
                      id="promoCode"
                      name="promoCode"
                      placeholder="Do you have a promo code?"
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input
                      type="text"
                      id="findUs"
                      name="findUs"
                      placeholder="How Did You Find Us?"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn mr-0">
                    <button type="submit" className="theme-btn-one">Submit Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          zIndex: 9999
        }}
      />
    </div>
  );
};

export default ContactForm;
