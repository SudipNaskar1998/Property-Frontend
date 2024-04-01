import React, { useState } from "react";
import "./../Header/Header.css";
import { Link, useLocation } from "react-router-dom";
import LoginModal from "../LoginModal";

const Header = () => {
  const [show, setShow] = useState(false);

  let location = useLocation();
  let path = location?.pathname;
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle">
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <div className="site-navbar-wrap">
        <div
          className={
            path === "/" || path === "/properties-view"
              ? "site-navbar site-navbar-target js-sticky-header"
              : "site-navbar site-navbar-target js-sticky-header bg-white"
          }
        >
          <div className="side-gap">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-4 col-sm-9 col-8 main-logo">
                  <div className="d-flex align-items-center">
                    <Link className="d-flex align-items-center" to="/">
                      <div>
                        {path === "/" ? (
                          <img
                            src="https://demo.zytheme.com/lalan/assets/images/logo/logo-light.png"
                            alt="logo"
                          />
                        ) : (
                          <img
                            src="https://demo.zytheme.com/lalan/assets/images/logo/logo-dark.png"
                            alt="logo"
                          />
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-3 col-4">
                  <nav className="site-navigation text-left" role="navigation">
                    <div className="container">
                      <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                        <Link
                          to="/"
                          className="site-menu-toggle js-menu-toggle text-white"
                        >
                          <span className="icon-menu h3">
                            <i className="fa-solid fa-bars"></i>
                          </span>
                        </Link>
                      </div>
                      <ul className="site-menu main-menu js-clone-nav d-none d-lg-block text-right">
                        {/* <li className="has-children">
                          <Link href="#" className="nav-link">
                            Important Links
                          </Link>
                          <ul className="dropdown arrow-top">
                            <li>
                              <Link
                                to="https://ncte.gov.in/website/RecognizedInstitutionLists.aspx?cid=&stateid=isnpC2pz4BDd%2fZgqGT4BFw%3d%3d&state=WEST_BENGAL&regionid=1"
                                target="_blank"
                                className="nav-link"
                              >
                                NCTE India
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://wbbprimaryeducation.org/index.html"
                                target="_blank"
                                className="nav-link"
                              >
                                WBBPE
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://oasis.gov.in/"
                                target="_blank"
                                className="nav-link"
                              >
                                Oasis Scholarship
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://wbmdfcscholarship.in/"
                                target="_blank"
                                className="nav-link"
                              >
                                Aikyashree Scholarship
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://svmcm.wbhed.gov.in/"
                                target="_blank"
                                className="nav-link"
                              >
                                Swami Vivekananda Scholarship
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://wbscc.wb.gov.in/"
                                target="_blank"
                                className="nav-link"
                              >
                                Student Credit Card
                              </Link>
                            </li>
                          </ul>
                        </li> */}
                        <Link to="/details" className="post_properties">
                          Post your property
                        </Link>
                        <li>
                          {path === "/" ? (
                            <Link
                              onClick={() => setShow(true)}
                              className="nav-link"
                            >
                              Login
                            </Link>
                          ) : (
                            <Link
                              onClick={() => setShow(true)}
                              className="nav-link"
                              style={{ color: "#000" }}
                            >
                              Login
                            </Link>
                          )}
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && <LoginModal show={show} setShow={setShow} />}
    </>
  );
};

export default Header;
