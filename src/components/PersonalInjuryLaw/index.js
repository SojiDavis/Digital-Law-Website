import React, { Component } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../ChatBot_Injury_Law/config";
import ActionProvider from "../ChatBot_Injury_Law/ActionProvider";
import MessageParser from "../ChatBot_Injury_Law/MessageParser";

import pr_1 from "../../images/practice/personal_injury.jpg";

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
                <h2>Personal Injury Law</h2>
                <h5>
                  Personal injury and clinical negligence law involve helping
                  clients get compensation for injuries suffered in accidents in
                  public or at the workplace and injuries caused by medical
                  negligence.Types of Personal Injury Claims are Road Traffic
                  Accidents,Accidents at Work or in the Workplace/Work Related
                  Illnesses,Trips, Slips and Accidents in public places,Other
                  accident claims.{" "}
                </h5>
                <p>
                  Law firms tend to specialise in either representing claimants
                  (i.e. the injured party) or defendants.{" "}
                </p>
                <p>
                  Personal injury lawyers who represent claimants either work
                  directly for an individual, or on their behalf through
                  insurers or unions if their claim is related to their work.
                  Those who specialise in defendant work often act on behalf of
                  the defendant’s insurers. For example, the motor insurance
                  company in the case of a car accident.{" "}
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
