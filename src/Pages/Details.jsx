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
            <div className="col-lg-9">
              <div className="details_right">
                {/* <>
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
                        <label
                          className="form-check-label"
                          htmlFor="Residential"
                        >
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
                        <label
                          className="form-check-label"
                          htmlFor="Commercial"
                        >
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
                </> */}
                {/* <>
                  <h4 className="mb-1">Where is your property located?</h4>
                  <span>
                    An accurate location helps you connect with the right buyers
                  </span>
                  <div className="row mt-5">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apartment Society"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Locality"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="House No. (Optional)"
                      />
                    </div>
                  </div>
                </> */}
                <>
                  <h4 className="mb-1">Tell us about your property</h4>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="preference_widget">
                        <h6>Add Room Details</h6>
                        <small className="d-block mb-2">No. of Bedrooms</small>
                        <div className="basic_tag">
                          <span>1</span>
                        </div>
                        <div className="basic_tag">
                          <span>2</span>
                        </div>
                        <div className="basic_tag">
                          <span>3</span>
                        </div>
                        <div className="basic_tag">
                          <span>4</span>
                        </div>
                        <small className="d-block mt-3 mb-2">
                          No. of Bathrooms
                        </small>
                        <div className="basic_tag">
                          <span>1</span>
                        </div>
                        <div className="basic_tag">
                          <span>2</span>
                        </div>
                        <div className="basic_tag">
                          <span>3</span>
                        </div>
                        <div className="basic_tag">
                          <span>4</span>
                        </div>
                        <small className="d-block mt-3 mb-2">
                          No. of Balconies
                        </small>
                        <div className="basic_tag">
                          <span>0</span>
                        </div>
                        <div className="basic_tag">
                          <span>1</span>
                        </div>
                        <div className="basic_tag">
                          <span>2</span>
                        </div>
                        <div className="basic_tag">
                          <span>3</span>
                        </div>
                      </div>
                      <div className="preference_widget">
                        <h6>Add Area Details</h6>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Carpet Area sq.ft."
                        />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Build-up Area sq.ft."
                        />
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Super Build-up Area sq.ft."
                        />
                      </div>
                      <div className="preference_widget">
                        <h6>Floor Details</h6>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Total Floors"
                        />
                        <select
                          className="form-select form-control"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value="Basement">Basement</option>
                          <option value="Lower Ground">Lower Ground</option>
                          <option value="Ground">Ground</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="preference_widget">
                        <h6>Availability Status</h6>
                        <div className="basic_tag">
                          <span>Ready to move</span>
                        </div>
                        <div className="basic_tag">
                          <span>Under construction</span>
                        </div>
                      </div>
                      <div className="preference_widget">
                        <h6>Ownership</h6>
                        <div className="basic_tag">
                          <span>Freehold</span>
                        </div>
                        <div className="basic_tag">
                          <span>Leasehold</span>
                        </div>
                        <div className="basic_tag">
                          <span>Co-operative society</span>
                        </div>
                        <div className="basic_tag">
                          <span>Power of Attorney</span>
                        </div>
                      </div>
                      <div className="preference_widget">
                        <h6 className="mb-0">Price Details</h6>
                        <div className="row">
                          <div className="col-sm-7">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Expected Price"
                            />
                          </div>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Price per sq.ft."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
                <div className="search-btn pt-5">
                  <button>Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
