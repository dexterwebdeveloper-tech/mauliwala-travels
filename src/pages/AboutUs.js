import React from "react";

const AboutUs = () => {
  return (
    <div className="sis-about-us-section sisf-about-us sisf-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/* Section Title Start */}
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle sis-text-anime-style-3">
                ABOUT US
              </span>

              <h2 className="sisf-m-title sis-text-anime-style-3">
                Comfortable Journeys, Reliable Service, Every Time
              </h2>

              <div
                className="sisf-m-text"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>
                  At Mauliwala Travels, we provide reliable and comfortable
                  travel solutions with premium Urbania rentals and spacious
                  Mini Bus services. Whether you are planning a family trip,
                  corporate outing, wedding, group tour, or outstation journey,
                  our well-maintained vehicles are designed to make every trip
                  safe, comfortable, and hassle-free.
                </p>
              </div>

              <div
                className="sisf-m-button pt-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a href="/our-fleet" className="sis-btn-default">
                  Explore Our Vehicles
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-6">
            <div className="sisf-sis-about-image-right">
              <figure className="sis-reveal">
                <img
                  src="/images/Homeaboute.png"
                  className="w-100"
                  alt="Mauliwala Travels - Urbania and Mini Bus Rental"
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="sisf-e-about-bottom-content sisf-about-contents-hovered">
          <div className="row">
            {/* Urbania Rental */}
            <div className="col-lg-4 col-md-6">
              <div
                className="sisf-about-contents sisf-m-page"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="sisf-e-inner">
                  {/* Image Start */}
                  <div className="sis-icon-image mb-4">
                    <div className="sisf-about-icon-image">
                      <figure>
                        <img
                          src="/images/about-icon-1.svg"
                          alt="Urbania Rental"
                        />
                      </figure>
                    </div>
                  </div>
                  {/* Image End */}

                  {/* Content Start */}
                  <div className="sisf-e-content">
                    <div className="sisf-sis-e-title mb-2">
                      <h3 className="sisf-e-title">
                        Premium Urbania Rentals
                      </h3>
                    </div>

                    <div className="sisf-e-text">
                      <p className="sisf-page-text-line">
                        Travel in comfort and style with our premium Urbania
                        rentals, ideal for family trips, group tours, weddings,
                        corporate travel, and outstation journeys.
                      </p>
                    </div>
                  </div>
                  {/* Content End */}
                </div>
              </div>
            </div>

            {/* Mini Bus Rental */}
            <div className="col-lg-4 col-md-6">
              <div
                className="sisf-about-contents sisf-m-page"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="sisf-e-inner">
                  {/* Image Start */}
                  <div className="sis-icon-image mb-4">
                    <div className="sisf-about-icon-image">
                      <figure>
                        <img
                          src="/images/about-icon-2.svg"
                          className="icon-image"
                          alt="Mini Bus Rental"
                        />
                      </figure>
                    </div>
                  </div>
                  {/* Image End */}

                  {/* Content Start */}
                  <div className="sisf-e-content">
                    <div className="sisf-sis-e-title mb-2">
                      <h3 className="sisf-e-title">
                        Spacious Mini Bus Service
                      </h3>
                    </div>

                    <div className="sisf-e-text">
                      <p className="sisf-page-text-line">
                        Our Mini Bus rentals are perfect for larger groups,
                        offering comfortable seating, spacious interiors, and a
                        dependable travel experience for local and outstation
                        trips.
                      </p>
                    </div>
                  </div>
                  {/* Content End */}
                </div>
              </div>
            </div>

            {/* Reliable Service */}
            <div className="col-lg-4 col-md-6">
              <div
                className="sisf-about-contents sisf-m-page mb-0"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="sisf-e-inner">
                  {/* Image Start */}
                  <div className="sis-icon-image mb-4">
                    <div className="sisf-about-icon-image">
                      <figure>
                        <img
                          src="/images/about-icon-3.svg"
                          className="icon-image"
                          alt="Reliable Travel Service"
                        />
                      </figure>
                    </div>
                  </div>
                  {/* Image End */}

                  {/* Content Start */}
                  <div className="sisf-e-content">
                    <div className="sisf-sis-e-title mb-2">
                      <h3 className="sisf-e-title">
                        Reliable & Comfortable Travel
                      </h3>
                    </div>

                    <div className="sisf-e-text">
                      <p className="sisf-page-text-line mb-0">
                        With well-maintained vehicles and professional service,
                        Mauliwala Travels makes group transportation convenient,
                        comfortable, and stress-free for every journey.
                      </p>
                    </div>
                  </div>
                  {/* Content End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
