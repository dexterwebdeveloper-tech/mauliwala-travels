import React from "react";

const services = [
  {
    title: "Airport Pickup & Drop",
    image: "/images/services/Airport-Pickup-&-Drop.jpg",
    description:
      "Enjoy safe, punctual, and comfortable airport pickup and drop services with well-maintained vehicles and experienced drivers.",
    delay: 100,
  },
  {
    title: "Corporate Travel",
    image: "/images/services/Corporate-Urbania-Bus-Rentals.jpg",
    description:
      "Reliable and comfortable transportation solutions for corporate meetings, business trips, conferences, and group travel.",
    delay: 300,
  },
  {
    title: "Wedding Travel",
    image: "/images/services/Wedding-Urbania-Bus.jpg",
    description:
      "Make your special occasions memorable with comfortable and stylish transportation for weddings, family functions, and celebrations.",
    delay: 500,
  },
  {
    title: "Holiday & Tour Packages",
    image: "/images/services/Holiday-Packages.jpg",
    description:
      "Explore your favorite destinations with customized holiday packages, comfortable vehicles, and experienced drivers for a stress-free journey.",
    delay: 100,
  },
  {
    title: "Local Travel",
    image: "/images/services/Local-Travel.jpg",
    description:
      "Convenient local transportation for sightseeing, shopping, family trips, business visits, and everyday travel needs.",
    delay: 300,
  },
  {
    title: "Outstation Travel",
    image: "/images/services/Outstation-Urbania-Bus.jpg",
    description:
      "Travel comfortably across cities with our dependable outstation taxi and bus services, ideal for family trips, group tours, and long-distance journeys.",
    delay: 500,
  },
];

const OurServices = () => {
  return (
    <div className="sis-our-services-section sisf-page-background sisf-section">
      <div className="container">

        {/* Section Header */}
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle white sis-text-anime-style-3">
                OUR TRAVEL SERVICES
              </span>

              <h2 className="sisf-m-title text-white sis-text-anime-style-3">
                Comfortable & Reliable Travel Solutions For Every Journey
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <div
                className="sisf-m-text"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="text-white mt-0">
                  From airport transfers and local travel to outstation
                  journeys, weddings, corporate trips, and holiday tours,
                  Mauliwala Travels provides safe, comfortable, and reliable
                  transportation services tailored to your needs.
                </p>
              </div>

              <div
                className="sisf-m-button mt-3 pt-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <a
                  href="/services"
                  className="sis-btn-default btn-light"
                >
                  View All Services
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className={`sisf-sis-e-service-list bg-white p-2 sis-radius ${
                  index === services.length - 1 ? "mb-0" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="sisf-e-inner sis-radius">

                  {/* Service Image */}
                  <div className="sisf-service-image">
                    <a
                      href="/services"
                      className="sisf-sis-page-link"
                    >
                      <figure className="sis-image-anime">
                        <img
                          src={service.image}
                          className="w-100 sis-radius"
                          alt={service.title}
                        />
                      </figure>
                    </a>
                  </div>

                  {/* Service Content */}
                  <div className="sisf-e-content position-relative">
                    <div className="sisf-sis-e-title">
                      <h3 className="sisf-e-title mb-2">
                        <a
                          href="/services"
                          className="sisf-e-colored"
                        >
                          {service.title}
                        </a>
                      </h3>

                      <div className="sisf-m-text">
                        <p className="sisf-page-text-line">
                          {service.description}
                        </p>
                      </div>

                      <div className="sisf-m-btn">
                        <a
                          href="/services"
                          className="sis-btn-outlined"
                        >
                          Explore Service
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurServices;
