import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../images/logo/logo-2.png";
import "./style.css";

const FooterSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 15000);
  }, [msg]);
  const handleInputChange = (e, type) => {
    switch (type) {
      case "email":
        setError("");
        setEmail(e.target.value);
        if (e.target.value === "") {
          setError("Email has left blank!");
        }
        break;
      default:
    }
  };

  function handleSubmit() {
    console.log("inside Function");
    if (email !== "") {
      console.log("inside if");
      var url = "http://localhost/DigitalLawWebsite/Email.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        email: email,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          setMsg(response[0].result);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });

      setEmail("");
    } else {
      setError("All fields are required!");
    }
  }

  return (
    <div className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <p>
                We Fight for your rights with the same dedication and care as a
                trusted friend..
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-link">
                <h3>Quick Link</h3>
                <ul>
                  <li>
                    <Link to="/Home">Home</Link>
                  </li>
                  <li>
                    <Link to="/practice">Practice Area</Link>
                  </li>
                  <li>
                    <Link to="/contact">contact</Link>
                  </li>
                  {/* <li>
                    <Link to="/">Recent Case</Link>
                  </li>
                  <li>
                    <Link to="/">Our Blog</Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-practice bd-0">
                <h3>Practice Area</h3>
                <ul>
                  <li>
                    <Link to="/Family-Law-Details">Family Law</Link>
                  </li>
                  <li>
                    <Link to="/Criminal-Law-Details">Criminal Law</Link>
                  </li>
                  <li>
                    <Link to="/Personal-Injury-Details">Parsonal Injury</Link>
                  </li>
                  <li>
                    <Link to="/Real-Estate-Law-Details">Real Estate Law</Link>
                  </li>
                  <li>
                    <Link to="/Business-Law-Details">Business Law</Link>
                  </li>
                  <li>
                    <Link to="/Education-Law-Details">Education Law</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget newsletter-widget">
                <div className="widget-title">
                  <h3>Newsletter</h3>
                </div>
                <p>
                  If you'd like to stay updated with our latest news, kindly
                  provide your email address to receive our newsletter.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-1">
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => handleInputChange(e, "email")}
                      value={email}
                      placeholder="Email Address *"
                      required
                    />
                  </div>
                  <div className="submit clearfix">
                    <button type="submit">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-9 col-12">
                <span>
                  Privacy Policy | © 2023 <Link to="/Home">Digital Law</Link>.
                  All rights reserved
                </span>
              </div>
              <div className="col-lg-6 col-md-4 col-sm-3 col-12">
                <ul className="d-flex">
                  <li>
                    <Link to="/">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
