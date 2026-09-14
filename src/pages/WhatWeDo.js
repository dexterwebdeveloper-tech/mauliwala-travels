import React from "react";
import { Link } from "react-router-dom";

const whatWeDoItems = [
  {
    icon: "/images/what-we-do-icon-1.svg",
    title: "Choose Your Vehicle",
    description:
      "Choose from our comfortable Urbania, mini buses, and other travel vehicles to find the right option for your family, group, or special trip.",
    delay: 100,
  },
  {
    icon: "/images/what-we-do-icon-2.svg",
    title: "Travel Comfortably",
    description:
      "Enjoy a safe and comfortable journey with experienced drivers, well-maintained vehicles, and dependable service from Mauliwala Travels.",
    delay: 300,
  },
];

const WhatWeDo = () => {
  return (
    <section className="sisf-what-we-do-section py-2">
      <div className="container">
        <div className="row">

          {/* Left Content */}
          <div className="col-lg-7">

            {/* Section Title */}
            <div className="sisf-sis-section-title sis-section-title">

              <span className="sisf-m-subtitle sis-text-anime-style-3">
                WHAT WE DO
              </span>

              <h2 className="sisf-m-title sis-text-anime-style-3">
                Comfortable &amp; Reliable Travel With Mauliwala Travels
              </h2>

              <div
                className="sisf-m-text"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>
                  From Urbania rentals to mini buses, we make group travel
                  comfortable, convenient, and stress-free
                  <br className="d-none d-md-block" />
                  for local trips, outstation journeys, tours, weddings, and
                  special occasions.
                </p>
              </div>

            </div>

            {/* Bottom Content */}
            <div className="sisf-m-page-bottom-content">

              <div className="row">

                {whatWeDoItems.map((item, index) => (
                  <div className="col-md-6" key={index}>

                    <div
                      className={`sisf-m-page-contents sisf-m-page ${
                        index === 1 ? "right" : ""
                      }`}
                      data-aos="fade-up"
                      data-aos-delay={item.delay}
                    >

                      <div className="sisf-e-inner">

                        {/* Icon */}
                        <div className="sis-icon-image mb-4">
                          <div className="sisf-m-page-icon-image">
                            <figure>
                              <img
                                src={item.icon}
                                className="icon-image"
                                alt={item.title}
                              />
                            </figure>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="sisf-e-content">

                          <div className="sisf-sis-e-title mb-2">
                            <h3 className="sisf-e-title">
                              {item.title}
                            </h3>
                          </div>

                          <div className="sisf-e-text">
                            <p className="sisf-page-text-line mb-3">
                              {item.description}
                            </p>
                          </div>

                          <div className="sisf-m-btn">
                            <Link
                              to="/about-us"
                              className="sis-btn-outlined"
                            >
                              Learn More
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>
                ))}

                {/* Reserve Button */}
                <div className="col-12">

                  <div
                    className="sisf-m-button pt-4 mt-4"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <Link
                      to="/contact"
                      className="sis-btn-default"
                    >
                      Book Your Vehicle
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5">

            <div className="sisf-e-what-we-do-image-right position-relative">

              <figure className="sis-image-anime sis-reveal">
                <img
                  src="/images/what-we-do2.png"
                  className="w-100 sis-radius"
                  alt="Mauliwala Travels Urbania and mini bus rental"
                />
              </figure>

              {/* Satisfaction Counter */}
              <div
                className="sisf-e-what-we-do-content-rightside sis-primary-background p-4 sis-radius"
                data-aos="zoom-in-left"
                data-aos-delay="500"
              >

                <div className="sis-counter-item d-flex align-items-center gap-4">

                  {/* Counter */}
                  <div className="sis-counter-title">
                    <h2 className="d-flex align-items-center">

                      <span className="sis-counter text-white">
                        98
                      </span>

                      <span className="sisf-digit-label text-white">
                        %
                      </span>

                    </h2>
                  </div>

                  {/* Counter Text */}
                  <div className="sis-counter-content">
                    <span className="sisf-content text-white">
                      Customer Satisfaction
                      <br />
                      Rate
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
