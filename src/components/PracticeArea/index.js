import React from "react";
import { Link } from "react-router-dom";

import pr1 from "../../images/icon/4.png";
import pr2 from "../../images/icon/5.png";
import pr3 from "../../images/icon/6.png";
import pr4 from "../../images/icon/8.png";
import pr5 from "../../images/icon/9.png";
import pr6 from "../../images/icon/10.png";

import "./style.css";

const PracticeArea = (props) => {
  return (
    <div className={`practice-area  ptb-100-70 ${props.subclass}`}>
      <div className="container">
        <div className="col-12">
          <div className="section-title-1 text-center">
            <span>Area Of Practice</span>
            <h2>How Can We Help You</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="practice-section">
              <div className="practices-wrapper">
                <div className="practices-icon-wrapper">
                  <div className="practice-dot">
                    <div className="dots"></div>
                  </div>
                  <i className="fi">
                    <img src={pr1} alt="" />
                  </i>
                </div>
                <div className="practice-content">
                  <h2>
                    <Link to="/Family-Law-Details">Family Law</Link>
                  </h2>
                  {/* <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of{" "}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="practice-section">
              <div className="practices-wrapper">
                <div className="practices-icon-wrapper">
                  <div className="practice-dot">
                    <div className="dots dots-2"></div>
                  </div>
                  <i className="fi">
                    <img src={pr2} alt="" />
                  </i>
                </div>
                <div className="practice-content">
                  <h2>
                    <Link to="/Personal-Injury-Details">Personal Injury</Link>
                  </h2>
                  {/* <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of{" "}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="practice-section">
              <div className="practices-wrapper">
                <div className="practices-icon-wrapper">
                  <div className="practice-dot">
                    <div className="dots"></div>
                  </div>
                  <i className="fi">
                    <img src={pr3} alt="" />
                  </i>
                </div>
                <div className="practice-content">
                  <h2>
                    <Link to="/Business-Law-Details">Business Law</Link>
                  </h2>
                  {/* <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of{" "}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="practice-section">
              <div className="practices-wrapper">
                <div className="practices-icon-wrapper">
                  <div className="practice-dot">
                    <div className="dots"></div>
                  </div>
                  <i className="fi">
                    <img src={pr4} alt="" />
                  </i>
                </div>
                <div className="practice-content">
                  <h2>
                    <Link to="/Criminal-Law-Details">Criminal Law</Link>
                  </h2>
                  {/* <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of{" "}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="practice-section">
              <div className="practices-wrapper">
                <div className="practices-icon-wrapper">
                  <div className="practice-dot">
                    <div className="dots"></div>
                  </div>
                  <i className="fi">
                    <img src={pr5} alt="" />
                  </i>
                </div>
                <div className="practice-content">
                  <h2>
                    <Link to="/Education-Law-Details">Education Law</Link>
                  </h2>
                  {/* <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of{" "}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="practice-section">
              <div className="practices-wrapper">
                <div className="practices-icon-wrapper">
                  <div className="practice-dot">
                    <div className="dots"></div>
                  </div>
                  <i className="fi">
                    <img src={pr6} alt="" />
                  </i>
                </div>
                <div className="practice-content">
                  <h2>
                    <Link to="/Real-Estate-Law-Details">Real Estate Law</Link>
                  </h2>
                  {/* <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of{" "}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
