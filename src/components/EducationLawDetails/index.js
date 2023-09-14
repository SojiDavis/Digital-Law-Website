import React, { Component } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../ChatBot_Education_Law/config";
import ActionProvider from "../ChatBot_Education_Law/ActionProvider";
import MessageParser from "../ChatBot_Education_Law/MessageParser";

import pr_1 from "../../images/practice/Education_law.webp";

class PracticDetails extends Component {
  render() {
    return (
      <div
        className="practice-details-area section-padding"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12 p-p">
              <div className="wrapper">
                <div className="chat">
                  <div
                    style={{
                      maxWidth: "1000px",
                    }}
                  >
                    <Chatbot
                      config={config}
                      actionProvider={ActionProvider}
                      messageParser={MessageParser}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <div className="practice-section-img">
                <img src={pr_1} alt="" />
              </div>
              <div className="practice-section-text">
                <h2>Education Law</h2>
                <h5>
                  Business law is the law that oversees commercial matters such
                  as contracts, intellectual properties, laws of corporations
                  and other business-related transactions. In a business
                  environment, these laws ensure that business operations such
                  as starting a business, managing, selling and closing business
                  deals are conducted professionally. It also ensures the
                  protection of rights and liberties, resolves disputes,
                  maintains order and establishes business standards as it
                  concerns government agencies.{" "}
                </h5>
                <p>
                  The main types of business laws are Consumer good
                  sales,Immigration,Employment,Contract drafting or
                  negotiations,Antitrust,Bankruptcy,Intellectual
                  property,Telemarketing sales law,Data security
                  law,International sales law,Taxes.{" "}
                </p>
                <p>
                  Business law protecting many situations like Handles
                  compensation issues, Safeguard the rights of shareholders,
                  Promotes ethical conduct, Business formation, Maintains
                  equilibrium, Reduced possibilities of fraud.{" "}
                </p>
              </div>
              {/* <div className="organigation-area">
                <div className="organaigation-img">
                  <img src={pr_3} alt="" />
                </div>
                <div className="organigation-text">
                  <h2>Family Law Organizations</h2>
                  <span>
                    <i className="fa fa-check-square-o" aria-hidden="true"></i>
                    The master-builder of human happiness.
                  </span>
                  <span>
                    <i className="fa fa-check-square-o" aria-hidden="true"></i>
                    Occasionally circumstances occur in which toil and pain
                  </span>
                  <span>
                    <i className="fa fa-check-square-o" aria-hidden="true"></i>
                    Avoids pleasure itself, because it is pleasure
                  </span>
                  <span>
                    <i className="fa fa-check-square-o" aria-hidden="true"></i>
                    who do not know how to pursue pleasure
                  </span>
                  <span>
                    <i className="fa fa-check-square-o" aria-hidden="true"></i>
                    To take a trivial example, which of us ever undertakes
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PracticDetails;
