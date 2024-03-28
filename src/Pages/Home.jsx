import React from "react";
import Slider from "react-slick";

const Home = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }
  var recommended = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        recommended: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        recommended: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        recommended: {
          slidesToShow: 1,
        },
      },
    ],
  };
  var handpicked = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        handpicked: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        handpicked: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        handpicked: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="banner-sec">
        <img
          src="https://static.ieplads.com/bmsjs/banners/99acres-hp/1366/1366-shriram-properties-3.jpg"
          alt=""
        />
      </div>
      <div className="banner-search-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="banner_search">
                <div className="tab-content" id="pills-tabContent">
                  <div className="search-area">
                    <div className="select_properties">
                      <select name="" className="form-select form-control">
                        <option selected disabled>
                          All Residential
                        </option>
                        <option value="Buy">Buy</option>
                        <option value="Rent">Rent</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Plots">Plots</option>
                      </select>
                    </div>
                    <div className="search-input">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <input
                        type="text"
                        name=""
                        className="form-control"
                        placeholder="Search here"
                      />
                      <div className="location-icon">
                        <i className="fa-solid fa-location-crosshairs"></i>
                      </div>
                    </div>
                    <div className="search-btn">
                      <button>Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="similar-projects">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className="project-title">Projects in High Demand</h2>
                  <p className="project-desc">
                    The most explored projects in Bangalore East
                  </p>
                </div>
              </div>
              <div className="row slider-container mb-50">
                <div className="col-sm-12">
                  <Slider {...recommended}>
                    <div className="cards_main">
                      <div className="cards_img">
                        <img
                          src="https://newprojects.99acres.com/projects/sumadhura_group/folium_by_sumadhura_phase_2/images/lm4etk0r_med.jpg"
                          alt=""
                        />
                      </div>
                      <div className="cards-content">
                        <h5>Folium By Sumadhura Phase 2</h5>
                        <p>3,4 BHK Apartment in Whitefield, Bangalore East</p>
                        <span>₹ 2.11 - 3.59 Crore</span>
                      </div>
                    </div>
                    <div className="cards_main">
                      <div className="cards_img">
                        <img
                          src="https://newprojects.99acres.com/projects/sumadhura_group/folium_by_sumadhura_phase_2/images/lm4etk0r_med.jpg"
                          alt=""
                        />
                      </div>
                      <div className="cards-content">
                        <h5>Folium By Sumadhura Phase 2</h5>
                        <p>3,4 BHK Apartment in Whitefield, Bangalore East</p>
                        <span>₹ 2.11 - 3.59 Crore</span>
                      </div>
                    </div>
                    <div className="cards_main">
                      <div className="cards_img">
                        <img
                          src="https://newprojects.99acres.com/projects/sumadhura_group/folium_by_sumadhura_phase_2/images/lm4etk0r_med.jpg"
                          alt=""
                        />
                      </div>
                      <div className="cards-content">
                        <h5>Folium By Sumadhura Phase 2</h5>
                        <p>3,4 BHK Apartment in Whitefield, Bangalore East</p>
                        <span>₹ 2.11 - 3.59 Crore</span>
                      </div>
                    </div>
                    <div className="cards_main">
                      <div className="cards_img">
                        <img
                          src="https://newprojects.99acres.com/projects/sumadhura_group/folium_by_sumadhura_phase_2/images/lm4etk0r_med.jpg"
                          alt=""
                        />
                      </div>
                      <div className="cards-content">
                        <h5>Folium By Sumadhura Phase 2</h5>
                        <p>3,4 BHK Apartment in Whitefield, Bangalore East</p>
                        <span>₹ 2.11 - 3.59 Crore</span>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="row mb-50">
                <div className="col-sm-12">
                  <h2 className="project-title">Apartments, Villas and more</h2>
                  <p className="project-desc">
                    The most explored projects in Bangalore East
                  </p>
                </div>
                <div className="col-lg-12 slider-container">
                  <Slider {...recommended}>
                    <div className="px-2">
                      <div className="apartments">
                        <h4>Residential Apartment </h4>
                        <p>4,600+ Properties</p>
                        <img
                          src="https://static.99acres.com/universalhp/img/d_hp_property_type_2.webp"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="apartments">
                        <h4>Residential Apartment </h4>
                        <p>4,600+ Properties</p>
                        <img
                          src="https://static.99acres.com/universalhp/img/d_hp_property_type_2.webp"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="apartments">
                        <h4>Residential Apartment </h4>
                        <p>4,600+ Properties</p>
                        <img
                          src="https://static.99acres.com/universalhp/img/d_hp_property_type_2.webp"
                          alt=""
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="row mb-50">
                <div className="col-sm-12">
                  <h2 className="project-title">Handpicked Projects</h2>
                  <p className="project-desc">
                    The most explored projects in Bangalore East
                  </p>
                </div>
                <div className="col-sm-12 slider-container">
                  <Slider {...handpicked}>
                    <div className="handpicked_project">
                      <img
                        src="https://newprojects.99acres.com/projects/srinivasa_constructions_bangalore/srinivasa_srinis_urbane/images/pvbtxqfw_med.jpg"
                        alt=""
                      />
                      <div className="handpicked_info"></div>
                      <img
                        className="handpicked_projectImg"
                        src="https://newprojects.99acres.com/projects/keya_homes/keya_around_the_life/8xu760bv.png"
                        alt=""
                      />
                      <div className="handpicked_content cards-content text-center">
                        <h5>Folium By Sumadhura Phase 2</h5>
                        <p>3,4 BHK Apartment in Whitefield, Bangalore East</p>
                        <span>₹ 2.11 - 3.59 Crore</span>
                      </div>
                    </div>
                    <div className="handpicked_project">
                      <img
                        src="https://newprojects.99acres.com/projects/srinivasa_constructions_bangalore/srinivasa_srinis_urbane/images/pvbtxqfw_med.jpg"
                        alt=""
                      />
                      <div className="handpicked_info"></div>
                      <img
                        className="handpicked_projectImg"
                        src="https://newprojects.99acres.com/projects/keya_homes/keya_around_the_life/8xu760bv.png"
                        alt=""
                      />
                      <div className="handpicked_content cards-content text-center">
                        <h5>Folium By Sumadhura Phase 2</h5>
                        <p>3,4 BHK Apartment in Whitefield, Bangalore East</p>
                        <span>₹ 2.11 - 3.59 Crore</span>
                      </div>
                    </div>
                    <div className="handpicked_project">
                      <img
                        src="https://newprojects.99acres.com/projects/srinivasa_constructions_bangalore/srinivasa_srinis_urbane/images/pvbtxqfw_med.jpg"
                        alt=""
                      />
                      <div className="handpicked_info"></div>
                      <img
                        className="handpicked_projectImg"
                        src="https://newprojects.99acres.com/projects/keya_homes/keya_around_the_life/8xu760bv.png"
                        alt=""
                      />
                      <div className="handpicked_content cards-content text-center">
                        <h5>Folium By Sumadhura Phase 2</h5>
                        <p>3,4 BHK Apartment in Whitefield, Bangalore East</p>
                        <span>₹ 2.11 - 3.59 Crore</span>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
