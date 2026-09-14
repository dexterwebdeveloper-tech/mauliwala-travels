import React from "react";
import { Link } from "react-router-dom";
import MissionVision from "../pages/MissionVision";
import WhyChooseUs from "../pages/WhyChooseUs";

const AboutUs = () => {
  return (
    <>
      {/* Page Banner */}
      <div className="sisf-banner sis-br-radius mt-3 position-relative">
        <div className="banner-img">
          <figure>
            <img
              src="/images/page-banner.jpg"
              alt="Mauliwala Travels Urbania On Rent in Pune"
            />
          </figure>
        </div>

        <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
          <div className="sisf-m-inner container">
            <div className="sisf-m-content sisf-content-grid">
              <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="sis-about-us-section py-2">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Image */}
            <div className="col-lg-6">
              <div className="sisf-about-left-image position-relative">

                <figure className="sis-image-anime sis-reveal">
                  <img
                    src="/images/about.png"
                    className="w-100"
                    alt="Mauliwala Travels Urbania Rental Pune"
                  />
                </figure>

                {/* Trust Box */}
                <div
                  className="sisf-sis-page-rating-part sis-radius p-3 mb-0 bg-white"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <div className="sis-users-image mb-2">
                    <figure>
                      <img
                        src="/images/user-image.png"
                        alt="Mauliwala Travels  Customers"
                      />
                    </figure>
                  </div>

                  <div className="sisf-sis-content">
                    <div className="sisf-m-title">
                      <h2 className="sis-comman-title">
                        <span>★</span> Trusted Group Travel Service
                      </h2>
                    </div>

                    <div className="sisf-m-text">
                      <p className="mb-0">
                        Comfortable Urbania & Group Travel From Pune
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6">

              {/* Section Heading */}
              <div className="sisf-sis-section-title sis-section-title">

                <span className="sisf-m-subtitle sis-text-anime-style-3">
                  ABOUT MAULIWALA Travels
                </span>

                <h2 className="sisf-m-title sis-text-anime-style-3">
                  Your Trusted Choice for Urbania On Rent in Pune
                </h2>

                <div
                  className="sisf-m-text"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p>
                    Mauliwala Travels provides comfortable and reliable group
                    transportation in Pune with Force Urbania, Tempo Traveller,
                    Mini Bus and other group travel options. We serve families,
                    corporate teams, wedding groups, tourists and travellers
                    looking for convenient local and outstation transportation.
                  </p>
                </div>

                <div
                  className="sisf-m-text"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <p className="mt-3">
                    From Pune local travel and airport pickup & drop to
                    outstation tours, corporate requirements, holiday trips,
                    weddings, pilgrimage tours and customized group journeys,
                    our goal is to make every trip comfortable, organized and
                    convenient.
                  </p>
                </div>

              </div>

              {/* About Features */}
              <div className="sisf-about-contents-hovered">

                {/* Feature 1 */}
                <div
                  className="sisf-about-contents"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="sisf-e-inner d-flex align-items-center gap-4">

                    <div className="sis-icon-image">
                      <div className="sisf-about-icon-image">
                        <figure>
                          <img
                            src="/images/about-icon1.svg"
                            alt="Urbania Booking Pune"
                          />
                        </figure>
                      </div>
                    </div>

                    <div className="sisf-e-content">

                      <div className="sisf-sis-e-title mb-2">
                        <h3 className="sisf-e-title">
                          Easy Urbania & Group Vehicle Booking
                        </h3>
                      </div>

                      <div className="sisf-e-text">
                        <p className="mb-0">
                          Tell us your pickup location, destination, travel
                          date and group size. Our team helps you choose a
                          suitable Urbania, Tempo Traveller or Mini Bus for
                          your journey.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div
                  className="sisf-about-contents"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="sisf-e-inner d-flex align-items-center gap-4">

                    <div className="sis-icon-image">
                      <div className="sisf-about-icon-image">
                        <figure>
                          <img
                            src="/images/about-icon2.svg"
                            alt="Group Travel Service Pune"
                          />
                        </figure>
                      </div>
                    </div>

                    <div className="sisf-e-content">

                      <div className="sisf-sis-e-title mb-2">
                        <h3 className="sisf-e-title">
                          Comfortable & Reliable Group Travel
                        </h3>
                      </div>

                      <div className="sisf-e-text">
                        <p className="mb-0">
                          Our group transportation solutions are suitable for
                          family tours, corporate travel, weddings, airport
                          transfers, events, pilgrimage tours and outstation
                          journeys from Pune.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              {/* Button + Contact */}
              <div className="button-group d-flex align-items-center flex-wrap">

                <div
                  className="sisf-m-button"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <Link to="/services" className="sis-btn-default">
                    Explore Our Services
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>

                <div className="sis-divider-border mx-4"></div>

                <div
                  className="sisf-sis-contact-information sis-contact mb-0"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <div className="sisf-contact-box d-flex align-items-center gap-3">

                    <div className="sisf-icon">
                      <a href="tel:+919049419494">
                        <i className="fa-solid fa-phone-volume"></i>
                      </a>
                    </div>

                    <div className="sisf-sis-e-content">

                      <span className="sis-title d-block">
                        Booking Assistance
                      </span>

                      <a
                        href="tel:+919049419494"
                        className="sis-title sis-comman-title d-block"
                      >
                        +91 9049419494
                      </a>

                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs/>

      <MissionVision/>
    </>
  );
};

export default AboutUs;