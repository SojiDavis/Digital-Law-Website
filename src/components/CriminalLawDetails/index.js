import React, { Component } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../ChatBot_Criminal_Law/config";
import ActionProvider from "../ChatBot_Criminal_Law/ActionProvider";
import MessageParser from "../ChatBot_Criminal_Law/MessageParser";

import pr_1 from "../../images/practice/Criminal_law.webp";

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
                <h2>Criminal Law</h2>
                <h5>
                  Criminal law is the most widely known area of legal practice,
                  with work ranging from motoring offences and murder, to white
                  collar crimes like fraud and corruption.{" "}
                </h5>
                <p>
                  The majority of criminal defence solicitors will work in areas
                  of general crime, usually in a high street law firm or larger
                  firms focusing on a range of publicly funded work. Some
                  general criminal law firms have the capacity and expertise to
                  undertake white collar crime, although this is traditionally
                  undertaken by specialist firms.{" "}
                </p>
                <p>
                  However don’t forget, defence work is only one side of the
                  equation. There is also prosecution: the Crown Prosecution
                  Service (CPS) is the principle prosecuting body in England and
                  Wales, in addition to the other agencies, such as the Serious
                  Fraud Office and HM Revenue & Customs.{" "}
                </p>
                <p>
                  The work of a solicitor practising in crime will vary
                  considerably depending on the type of criminal work undertaken
                  and whether he/she is a defence or prosecution solicitor.{" "}
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
