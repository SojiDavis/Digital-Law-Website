import React from "react";
import ContactForm2 from "../CommentForm2";

import "./style.css";

const Contactpage = () => {
  return (
    <div className="contact-page-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="contact-page-item">
              <h2>Our Contacts</h2>
              {/* <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</p> */}
              <div className="adress">
                <h3>Address</h3>
                <span>College Rd, Stoke-on-Trent ST4 2DE</span>
              </div>
              <div className="phone">
                <h3>Phone</h3>
                <span>0-178-229-4000</span>
                {/* <span>0-123-456-7890</span> */}
              </div>
              <div className="email">
                <h3>Email</h3>
                <span>SULAC@staffs.ac.uk</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="contact-area contact-area-2 contact-area-3">
              <h2>Quick Contact Form</h2>
              <ContactForm2 />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="contact-map">
              <iframe
                title="db"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2400.628396757206!2d-2.178713223410258!3d53.009065772193395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1693657744946!5m2!1sen!2suk"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
