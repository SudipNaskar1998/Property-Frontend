import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-sm-4">
                  <div className="widget">
                    <h3 className="widget-title">Lalan</h3>
                    <div className="footer_links">
                      <ul>
                        <li>
                          <Link>Our Services</Link>
                        </li>
                        <li>
                          <Link>Post your Property</Link>
                        </li>
                        <li>
                          <Link>Real Estate Investments</Link>
                        </li>
                        <li>
                          <Link>Builders in India</Link>
                        </li>
                        <li>
                          <Link>Articles</Link>
                        </li>
                        <li>
                          <Link>Customer Service</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="widget">
                    <h3 className="widget-title">Services</h3>
                    <div className="footer_links">
                      <ul>
                        <li>
                          <Link>Our Services</Link>
                        </li>
                        <li>
                          <Link>Post your Property</Link>
                        </li>
                        <li>
                          <Link>Real Estate Investments</Link>
                        </li>
                        <li>
                          <Link>Builders in India</Link>
                        </li>
                        <li>
                          <Link>Articles</Link>
                        </li>
                        <li>
                          <Link>Customer Service</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="widget">
                    <h3 className="widget-title">Our Partners</h3>
                    <div className="footer_links">
                      <ul>
                        <li>
                          <Link>Our Services</Link>
                        </li>
                        <li>
                          <Link>Post your Property</Link>
                        </li>
                        <li>
                          <Link>Real Estate Investments</Link>
                        </li>
                        <li>
                          <Link>Builders in India</Link>
                        </li>
                        <li>
                          <Link>Articles</Link>
                        </li>
                        <li>
                          <Link>Customer Service</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget">
                <h3 className="widget-title">Contact Us</h3>
                <div className="footer_links">
                  <p>
                    Toll Free - <Link>1800 41 99099</Link>
                  </p>
                  <div className="mb-2">
                    <small>Monday - Saturday (9:00AM to 11:00PM IST)</small>
                  </div>
                  <p className="mb-4">
                    Email - <Link>1800 41 99099</Link>
                  </p>
                  <h5 className="mb-3">Connect with us</h5>
                  <div className="footer_social">
                    <Link>
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link>
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                    <Link>
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link>
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
