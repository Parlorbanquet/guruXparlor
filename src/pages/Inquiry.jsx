import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Inquiry = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "c5671892-0a7f-4e4b-bfd5-aa2a40655744");

    const email = formData.get('email');

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
      <section className="order-section bg-color-2">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(/assets/images/shape/shape-14.webp)" }}
        />
        <div className="shape">
          <div
            className="shape-1"
            style={{ backgroundImage: "url(/assets/images/shape/shape-15.webp)" }}
          />
          <div
            className="shape-2"
            style={{ backgroundImage: "url(/assets/images/shape/shape-16.webp)" }}
          />
          <div
            className="shape-3"
            style={{ backgroundImage: "url(/assets/images/shape/shape-17.webp)" }}
          />
          <div
            className="shape-4"
            style={{ backgroundImage: "url(/assets/images/shape/shape-18.webp)" }}
          />
        </div>
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Book Your Event</span>
            <h2>
              Initiate Your Reservation with
              <br />
              a Booking Inquiry
            </h2>
          </div>
          <div className="form-inner">
            <form onSubmit={onSubmit}>
              <div className="row clearfix">
                {/* Form Fields */}
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    required
                    pattern="\d{10}"
                    title="Please enter a 10-digit phone number."
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <div className="select-box">
                    <select
                      name="eventType"
                      required
                    >
                      <option value="" selected disabled>
                        Event Type
                      </option>
                      <option value="Wedding">Wedding</option>
                      <option value="Birthday Party">Birthday Party</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Social Events">Social Events</option>
                      <option value="Custom Event Planning">Custom Event Planning</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="number"
                    name="guests"
                    placeholder="Number of Guests"
                    required
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea
                    name="message"
                    placeholder="Special request"
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                  <button type="submit" className="theme-btn-one">
                    Book Your Event
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Inquiry;
