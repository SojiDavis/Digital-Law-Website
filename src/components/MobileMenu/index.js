import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";

import PerfectScrollbar from "react-perfect-scrollbar";

import "./style.css";

import "react-perfect-scrollbar/dist/css/styles.css";
const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },
  {
    id: 2,
    title: "About Us",
    link: "/about",
  },
  {
    id: 3,
    title: "Practices +",
    submenu: [
      {
        id: 31,
        title: "practice",
        link: "/practice",
      },
      {
        id: 32,
        title: "Family Law",
        link: "/Family-Law-Details",
      },
      {
        id: 33,
        title: "Personal Injury Law",
        link: "/Personal-Injury-Details",
      },
      {
        id: 34,
        title: "Criminal Law",
        link: "/Criminal-Law-Details",
      },
      {
        id: 35,
        title: "Business Law",
        link: "/Business-Law-Details",
      },
      {
        id: 35,
        title: "Education Law",
        link: "/Education-Law-Details",
      },
      {
        id: 35,
        title: "Real Estate Law",
        link: "/Real-Estate-Law-Details",
      },
    ],
  },

  {
    id: 4,
    title: "Contact",
    link: "/contact",
  },
];

class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;

    return (
      <div>
        <PerfectScrollbar>
          <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
            <div className="clox" onClick={this.menuHandler}>
              Close Me
            </div>

            <ul className="responsivemenu">
              {menus.map((item) => {
                return (
                  <li key={item.id}>
                    {item.submenu ? (
                      <p onClick={this.setIsOpen(item.id)}>
                        {item.title}
                        {item.submenu ? (
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        ) : (
                          ""
                        )}
                      </p>
                    ) : (
                      <Link to={item.link}>{item.title}</Link>
                    )}
                    {item.submenu ? (
                      <Collapse isOpen={item.id === isOpen}>
                        <Card>
                          <CardBody>
                            <ul>
                              {item.submenu.map((submenu) => (
                                <li key={submenu.id}>
                                  <Link className="active" to={submenu.link}>
                                    {submenu.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </CardBody>
                        </Card>
                      </Collapse>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </PerfectScrollbar>
        <div className="showmenu" onClick={this.menuHandler}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
