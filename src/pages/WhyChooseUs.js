import React from "react";
import { Link } from "react-router-dom";

const  WhyChooseUs = () => {
  return (
    <div className="sis-why-choose-us-section sisf-page-background sis-br-radius section">
      <div className="container">

        {/* Section Heading */}
        <div className="row">
          <div className="col-lg-9">
            <div className="sisf-sis-section-title sis-section-title">

              <span className="sisf-m-subtitle white sis-text-anime-style-3">
                WHY CHOOSE US
              </span>

              <h2 className="sisf-m-title text-white sis-text-anime-style-3">
                Delivering Reliable Chauffeur and Premium Car Rental Services
                for Every Journey
              </h2>

              <div
                className="sisf-m-text"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="text-white">
                  We are dedicated to providing luxury chauffeur and premium
                  car rental services that combine comfort, safety, and
                  professionalism for every journey. Whether for business
                  travel, airport transfers, weddings, or special occasions,
                  our modern fleet and experienced drivers ensure a smooth,
                  reliable, and memorable transportation experience tailored
                  to every client’s needs.
                </p>
              </div>

              <div
                className="sisf-m-button pt-4 mt-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link to="/our-fleet" className="sis-btn-default btn-light">
                  Discover Fleet
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>

            </div>
          </div>

          <div className="col-lg-3"></div>
        </div>

        {/* Why Choose Us Cards */}
        <div className="row">

          {/* Card 1 */}
          <div className="col-lg-4 col-md-6">
            <div
              className="sisf-why-choose-contents p-4 overflow-hidden sis-radius"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="sisf-e-inner position-relative">

                <div className="sisf-e-content">

                  <div className="sisf-m-count">
                    <span>01</span>
                  </div>

                  <div className="sis-e-title mb-2">
                    <h3 className="text-white">
                      Professional Chauffeurs
                    </h3>
                  </div>

                  <div className="sis-e-text">
                    <p className="text-white mb-0">
                      Our experienced chauffeurs and executive fleet deliver
                      exceptional travel experiences tailored for business
                      professionals and luxury travelers.
                    </p>
                  </div>

                </div>

                {/* <div className="sisf-why-choose-image-bottom text-end">
                  <figure>
                    <img
                      src="/images/car-image-3.png"
                      alt="Professional Chauffeurs"
                    />
                  </figure>
                </div> */}

              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6">
            <div
              className="sisf-why-choose-contents p-4 overflow-hidden sis-radius"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="sisf-e-inner position-relative">

                <div className="sisf-e-content">

                  <div className="sisf-m-count">
                    <span>02</span>
                  </div>

                  <div className="sis-e-title mb-2">
                    <h3 className="text-white">
                      Fast & Easy Reservations
                    </h3>
                  </div>

                  <div className="sis-e-text">
                    <p className="text-white mb-0">
                      Reserve your luxury vehicle quickly through our seamless
                      online booking system designed for convenience, speed,
                      and hassle-free travel planning.
                    </p>
                  </div>

                </div>

                {/* <div className="sisf-why-choose-image-bottom text-end">
                  <figure>
                    <img
                      src="/images/car-image-2.png"
                      alt="Fast and Easy Reservations"
                    />
                  </figure>
                </div> */}

              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6">
            <div
              className="sisf-why-choose-contents p-4 overflow-hidden sis-radius"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="sisf-e-inner position-relative">

                <div className="sisf-e-content">

                  <div className="sisf-m-count">
                    <span>03</span>
                  </div>

                  <div className="sis-e-title mb-2">
                    <h3 className="text-white">
                      Premium Luxury Fleet
                    </h3>
                  </div>

                  <div className="sis-e-text">
                    <p className="text-white mb-0">
                      Choose from a wide range of luxury sedans, SUVs,
                      limousines, and executive vehicles equipped with modern
                      interiors and premium comfort features.
                    </p>
                  </div>

                </div>

                {/* <div className="sisf-why-choose-image-bottom text-end">
                  <figure>
                    <img
                      src="/images/car-image-1.png"
                      alt="Premium Luxury Fleet"
                    />
                  </figure>
                </div> */}

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Content */}
        <div className="row">
          <div className="col-12">

            <div className="sis-comman-bottom-line-text d-flex align-items-center justify-content-center gap-3">

              <div
                className="sisf-users-image"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <figure>
                  <img
                    src="/images/users3.png"
                    alt="LimoRide Customers"
                  />
                </figure>
              </div>

              <div
                className="sisf-sis-e-box d-flex align-items-center justify-content-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p className="mb-0 text-white">
                  Discover the complete range of luxury vehicles for every
                  journey —{" "}
                  <Link
                    to="/our-fleet"
                    className="text-white border-bottom border-white"
                  >
                    View All Fleets
                  </Link>
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
