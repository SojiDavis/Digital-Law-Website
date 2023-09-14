import React, { Component } from "react";

import pr_2 from "../../images/practice/family_law.png";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../ChatBot_Family_Law/config";
import ActionProvider from "../ChatBot_Family_Law/ActionProvider";
import MessageParser from "../ChatBot_Family_Law/MessageParser";

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
                <img src={pr_2} alt="" />
              </div>
              <div className="practice-section-text">
                <h2>Family Law</h2>
                <h5>
                  Family law is made up of three main areas of work:
                  matrimonial, finance and child law.It can also cover domestic
                  violence, guardianship, child abuse and neglect. Other matters
                  might include inheritance law, retirements, pension and other
                  benefits.{" "}
                </h5>
                <p>
                  Family attorneys handle various legal matters including
                  divorce, separation, child custody and adoption, Local
                  Authority care orders, and financial agreements. When
                  representing a client seeking a divorce, lawyers are involved
                  in the initial intake of information, collecting evidence,
                  particularly financial records, drafting essential documents,
                  negotiating settlements, arranging child custody or visitation
                  agreements, suggesting mediation, and representing the client
                  in legal proceedings. They might also collaborate with Counsel
                  and attend court hearings. Child law attorneys may also
                  represent parties in child protection cases, such as
                  representing parents, children, or Local Authorities in care
                  proceedings, for instance.{" "}
                </p>
                <p>
                  Additionally, they can offer guidance on pre-nuptial
                  agreements as a means of safeguarding financial interests
                  before marriage, provide counsel on the reasons for divorce or
                  the dissolution of civil partnerships. Some family lawyers may
                  focus their expertise on adoption, paternity, reproductive
                  rights, emancipation, and other areas unrelated to divorce.
                  They also have responsibilities in managing family estates,
                  supervising mediation sessions, and providing legal counsel.
                  Many lawyers have specialized knowledge in various practice
                  areas, such as housing law, mediation and collaborative law,
                  as well as immigration and asylum law.{" "}
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
