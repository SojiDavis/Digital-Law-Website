import React, { Component } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../ChatBot_Real_Law/config";
import ActionProvider from "../ChatBot_Real_Law/ActionProvider";
import MessageParser from "../ChatBot_Real_Law/MessageParser";

import pr_1 from "../../images/practice/Real-Estate-Law.jpg";

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
                <h2>Real Estate Law</h2>
                <h5>
                  Real estate law , sometimes known as Property law , deals with
                  transactions related to residential and commercial property
                  and covers specialist areas such as property finance, mortgage
                  lending or social housing..{" "}
                </h5>
                <p>
                  This area of the law mainly involves transactional based work,
                  such as the buying and selling or rental of property, but
                  there is a litigation side. Other related areas of law include
                  landlord and tenant, as well as construction and planning law.{" "}
                </p>
                <p>
                  The practice area is split into residential and commercial
                  work. Residential work is likely to take place at high street
                  or regional based firms, and clients are usually the public.
                  This type of work sees lots of client contact over the phone,
                  dealing with developments in their property buying experience.
                  Depending on how many cases are being dealt with, it can be
                  time pressured so lawyers have to keep track of which stage
                  each of their clients are at in their property buying process.{" "}
                </p>
                <p>
                  Larger firms are more likely to take work and instructions
                  from commercial clients. This work involves negotiation of
                  land contracts, drafting commercial leases and due diligence.
                  Matters range from large scale developments to small business
                  premises for a sole trader.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PracticDetails;
