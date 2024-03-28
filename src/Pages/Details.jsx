import React from "react";

const Details = () => {
  return (
    <>
      <div className="details_bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="details_left">
                <div className="step_wrap step_active">
                  <div className="step_name">
                    <h6>Basic Details</h6>
                    <small>Step 1</small>
                  </div>
                </div>
                <div className="step_wrap">
                  <div className="step_name">
                    <h6>Location Details</h6>
                    <small>Step 2</small>
                  </div>
                </div>
                <div className="step_wrap">
                  <div className="step_name">
                    <h6>Property Profile</h6>
                    <small>Step 3</small>
                  </div>
                </div>
                <div className="step_wrap">
                  <div className="step_name">
                    <h6>Photos</h6>
                    <small>Step 4</small>
                  </div>
                </div>
                <div className="step_wrap">
                  <div className="step_name">
                    <h6>Pricing & Others</h6>
                    <small>Step 5</small>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-9">
              <div className="details_right">
                <h4 className="mb-1">Welcome back</h4>
                <h5>Fill out basic details</h5>
                <div className="preference_widget">
                  <h6>I'm looking to</h6>
                  <div className="basic_tag active_widget">
                    <span>Sell</span>
                  </div>
                  <div className="basic_tag">
                    <span>Rent / Lease</span>
                  </div>
                  <div className="basic_tag">
                    <span>PG</span>
                  </div>
                </div>
                <div className="preference_widget">
                  <h6>What kind of property do you have?</h6>
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="Residential"
                        value="option1"
                      />
                      <label className="form-check-label" htmlFor="Residential">
                        Residential
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="Commercial"
                        value="option2"
                      />
                      <label className="form-check-label" htmlFor="Commercial">
                        Commercial
                      </label>
                    </div>
                  </div>
                  <div className="basic_tag">
                    <span>Flat/Apartment</span>
                  </div>
                  <div className="basic_tag">
                    <span>Independent House / Villa</span>
                  </div>
                  <div className="basic_tag">
                    <span>1 RK/ Studio Apartment</span>
                  </div>
                  <div className="basic_tag">
                    <span>Serviced Apartment</span>
                  </div>
                  <div className="basic_tag">
                    <span>Other</span>
                  </div>
                </div>
                <div className="search-btn pt-5">
                  <button>Continue</button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
