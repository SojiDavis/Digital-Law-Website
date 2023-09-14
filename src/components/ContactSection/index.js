import React from "react";
import ContactForm from "../CommentForm";
import "./style.css";

const ContactSection = () => {
  return (
    <div className="contact-area section-padding" id="contact-form">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact-text">
              <h2>Are You Interest To Contact With Us?</h2>
              <p>use the right form to book the appointment</p>
              <div className="contact-sub">
                <div className="contact-icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="contact-c">
                  <h4>Our Location</h4>
                  <span>College Rd, Stoke-on-Trent ST4 2DE</span>
                </div>
              </div>
              <div className="contact-sub">
                <div className="contact-icon">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="contact-c">
                  <h4>Phone</h4>
                  <span>01782 294000</span>
                </div>
              </div>
              <div className="contact-sub">
                <div className="contact-icon">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </div>
                <div className="contact-c">
                  <h4>Email</h4>
                  <span>SULAC@staffs.ac.uk</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-7 col-md-12 col-sm-12">
            <div className="contact-content">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
