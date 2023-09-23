import React from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu";
import logo from "../../images/logo/logo-2.png";

import "./style.css";

const Header = ({ posts, setSearchResults }) => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };
  const handleSearchChange = (e) => {
    console.log(e);
  };

  return (
    <header>
      <div className="header-style-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-10 col-sm-10 col-8 col-t">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block col-m">
              <div className="main-menu">
                <nav className="nav_mobile_menu">
                  <ul>
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/practice">Practices</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/practice">practice</Link>
                        </li>
                        <li>
                          <Link to="/Family-Law-Details">
                            Family Law details
                          </Link>
                        </li>
                        <li>
                          <Link to="/Personal-Injury-Details">
                            Personal Injury Law Details
                          </Link>
                        </li>
                        <li>
                          <Link to="/Criminal-Law-Details">
                            Criminal Law Details
                          </Link>
                        </li>
                        <li>
                          <Link to="/Business-Law-Details">
                            Business Law Details
                          </Link>
                        </li>
                        <li>
                          <Link to="/Education-Law-Details">
                            Education Law Details
                          </Link>
                        </li>
                        <li>
                          <Link to="/Real-Estate-Law-Details">
                            Real Estate Law Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-1 search">
              <ul>
                <li>
                  <Link to="/">
                    <i className="fa fa-search"></i>
                  </Link>
                  <ul>
                    <li>
                      <form onSubmit={SubmitHandler}>
                        <input
                          type="text"
                          placeholder="search here.."
                          className="search__input"
                          id="search"
                          onChange={handleSearchChange}
                        />
                        <button type="btn">
                          <i className="fa fa-search"></i>
                        </button>
                      </form>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 col-1">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
