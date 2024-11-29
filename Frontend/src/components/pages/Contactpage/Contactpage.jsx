import React from "react";
import "./Contactpage.css";

const Contactpage = () => {
  return (
    <>
      <div className="curved-banner scroll-container">Contact page</div>
      <div className="contact-container">
        <div className="contact-body-1">
          <h1>Get in Touch</h1>
          <p>
            We value your feedback and inquiries. If you have any questions,
            comments, or concerns, please don’t hesitate to reach out to us
            using the contact information provided below. Our dedicated team is
            here to assist you and will strive to respond to your message as
            promptly as possible.
          </p>
        </div>
        <hr />
        <div className="contact-body-2">
          <div className="contact-card">
            <i class="ri-map-pin-line"></i>
            <h2>Adresss</h2>
            <p>Lower chestnut street, worcester pin-WR11PD england</p>
          </div>
          <div className="contact-card">
            <i class="ri-phone-fill"></i>
            <h2>Contact</h2>
            <p>+447407741715</p>
          </div>
          <div className="contact-card">
            <i class="ri-mail-line"></i>
            <h2>Mail</h2>
            <p>Sales@anzproductsltd.co.uk</p>
          </div>
        </div>
        <hr />
        <div className="contact-body-3">
          <div className="contact-form-container">
            <p>
            Alternatively, you can use the contact form below to send us a message directly from this webpage. Simply fill out the required fields and click “Submit,” and we’ll get back to you as soon as we can.
            </p>
            <div className="login-card">
              <h2> Contact us</h2>
              <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="number" placeholder="Phone Number" required />
                <textarea placeholder="Your Message" required />
                <button className="basic-button" type="submit">
                  Contact
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactpage;
