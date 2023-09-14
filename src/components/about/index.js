import React from "react";
import VideoModal from "../ModalVideo";
import { Link } from "react-router-dom";
import abimg1 from "../../images/about/img-2.png";
import abimg2 from "../../images/about/img-1.png";

import "./style.css";

const AboutSection = () => {
  return (
    <div className="about-style-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-m">
            <div className="about-img">
              <img src={abimg1} alt="" />
              <VideoModal />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about-content">
              <div className="section-title">
                <h2>About Us</h2>
              </div>
              <p>
                Staffordshire University Legal Advice Clinic (SULAC), which
                launches in autumn 2018, provides free legal advice to the local
                community and to certain specific sectors.{" "}
              </p>
              <p>
                {" "}
                Open to members of the public in Staffordshire, the clinic will
                provide advice and assistance from law students supervised by
                qualified solicitors and academics.
              </p>
              {/* <div className="btns">
                <div className="btn-style">
                  <Link to="/">More About Us..</Link>
                </div>
              </div> */}
              <div className="signature">
                <img src={abimg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
