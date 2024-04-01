import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginModal = ({ show, setShow }) => {
  const [first, setFirst] = useState(true);
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton style={{ borderBottom: "none" }}>
          <Modal.Title>Login / Register</Modal.Title>
        </Modal.Header>
        {first === true ? (
          <>
            <Modal.Body>
              <div className="details_right p-0">
                <label
                  className="mb-1"
                  htmlFor="Please enter your Phone Number"
                >
                  Please enter your Phone Number
                </label>
                <input
                  type="text"
                  className="form-control mt-0"
                  placeholder="Phone Number"
                />
              </div>
            </Modal.Body>
            <Modal.Footer style={{ borderTop: "none" }}>
              <Link
                style={{ width: "100%", textAlign: "center" }}
                className="post_properties"
                onClick={() => setFirst(false)}
              >
                Continue
              </Link>
            </Modal.Footer>
            <div className="ph_or_email d-flex align-items-center px-3">
              <hr /> <span>Or</span> <hr />
            </div>
            <div className="continue_email px-3 mb-4 mt-3">
              <button>
                <i className="fa-solid fa-envelope"></i>Continue with Email
              </button>
            </div>
          </>
        ) : (
          <>
            <Modal.Body>
              <div className="details_right p-0">
                <input
                  type="text"
                  className="form-control mt-0"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email ID"
                />
              </div>
              <label className="mt-3 mb-2" htmlFor="">
                Are you a Real Estate Agent?
              </label>
              <div>
                <div className="basic_tag">
                  <span>Yes</span>
                </div>
                <div className="basic_tag">
                  <span>No</span>
                </div>
              </div>
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label terms_con"
                  htmlFor="flexCheckDefault"
                >
                  <p className="mb-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse soluta et rerum harum quis eius repellendus qui,
                    aliquam non, corrupti veritatis! Maiores eius ad animi
                    suscipit nulla incidunt doloremque ipsam?
                  </p>
                </label>
              </div>
            </Modal.Body>
            <Modal.Footer
              className="justify-content-start"
              style={{ borderTop: "none" }}
            >
              <Link
                onClick={() => setShow(false)}
                style={{ width: "100%", textAlign: "center" }}
                className="post_properties"
              >
                Create Account
              </Link>
              <div className="terms_con">
                <p>
                  Lorem ipsum dolor sit amet <Link>Terms & Conditions</Link>
                </p>
              </div>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

export default LoginModal;
