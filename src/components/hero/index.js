import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import main_background from "../../images/main_background1.png";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../ChatBot/config";
import ActionProvider from "../ChatBot/ActionProvider";
import MessageParser from "../ChatBot/MessageParser";
import "./style.css";
import { red } from "@material-ui/core/colors";

const SimpleSlider = () => {
  return (
    <section className="hero hero-slider-wrapper hero-style-1">
      <div className="hero-slider">
        <div className="slide1 slide">
          <div className="container">
            <div className="row">
              {/* <div className="col-lg-4 col-md-12 col-12 p-p"> */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="chat">
                  <div style={{ maxWidth: "1000px" }}>
                    <Chatbot
                      config={config}
                      actionProvider={ActionProvider}
                      messageParser={MessageParser}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="ccol col-lg-8 slide-caption">
                  <h2 style={{ color: red }}>We Fight for your rights..</h2>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSlider;
