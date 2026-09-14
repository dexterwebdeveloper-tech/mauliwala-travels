import React from "react";

const whyChooseItems = [
  {
    icon: "/images/about-icon-1.svg",
    title: "Premium Urbania Rentals",
    description:
      "Travel comfortably with our well-maintained Urbania vehicles, ideal for family trips, weddings, corporate travel, group tours, and outstation journeys.",
    delay: 100,
  },
  {
    icon: "/images/about-icon-2.svg",
    title: "Spacious Mini Bus Rentals",
    description:
      "Our Mini Bus rental service is perfect for larger groups, offering comfortable seating, spacious interiors, and a smooth travel experience.",
    delay: 300,
  },
  {
    icon: "/images/why-choose-icon-1.svg",
    title: "Experienced Drivers",
    description:
      "Our experienced and professional drivers focus on safe, punctual, and comfortable travel, making every journey convenient and stress-free.",
    delay: 500,
  },
  // {
  //   icon: "/images/why-choose-icon-2.svg",
  //   title: "Flexible Rental Options",
  //   description:
  //     "Choose rental plans that suit your journey, whether you need a vehicle for a few hours, a full day, a wedding, a group tour, or an outstation trip.",
  //   delay: 700,
  // },
];

const WhyChooseUs = () => {
  return (
    <div className="sis-why-choose-us-section py-2">
      <div className="container">
        {/* Section Header */}
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle sis-text-anime-style-3">
                WHY CHOOSE US
              </span>

              <h2 className="sisf-m-title sis-text-anime-style-3">
                Comfortable & Reliable Travel Solutions for Every Journey
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
                <p className="mt-0">
                  Mauliwala Travels provides dependable Urbania and Mini Bus
                  rental services for family trips, weddings, corporate
                  outings, group tours, and outstation travel. Our focus is on
                  comfort, safety, punctuality, and hassle-free journeys.
                </p>
              </div>

              <div
                className="sisf-m-button pt-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a href="/services" className="sis-btn-default">
                  View Our Services
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row">
          {/* Left Image */}
          <div className="col-lg-6">
            <div className="sisf-sis-why-choose-us-image-left position-relative">
              <div className="sis-why-choose-us-image-left">
                <figure className="sis-image-anime sis-reveal">
                  <img
                    src="/images/why-choose-left-image.png"
                    className="w-100"
                    alt="Mauliwala Travels Urbania and Mini Bus Rental"
                  />
                </figure>
              </div>

              {/* Rating / Counter Box */}
              <div
                className="sisf-sis-page-rating-part-bottom sis-radius sis-primary-background"
                data-aos="zoom-in-left"
                data-aos-delay="500"
              >
                <div className="sisf-e-inner p-4">
                  {/* Happy Customers */}
                  <div className="sis-counter-item">
                    <div className="sis-users-image mb-2">
                      <figure>
                        <img
                          src="/images/user-image.png"
                          alt="Mauliwala Travels customers"
                        />
                      </figure>
                    </div>

                    <div className="sis-counter-title">
                      <h2 className="d-flex align-items-center">
                        <span className="sis-counter text-white">10</span>
                        <span className="sisf-digit-label text-white">
                          {" "}
                          K+
                        </span>
                      </h2>
                    </div>

                    <div className="sis-counter-content">
                      <span className="sisf-content text-white">
                        Happy Customers
                      </span>
                    </div>
                  </div>

                  <div className="sisf-m-divider"></div>

                  {/* Google Rating */}
                  <div className="sis-counter-item">
                    <div className="sis-google-image mb-2">
                      <figure>
                        <img
                          src="/images/google.svg"
                          alt="Google rating"
                        />
                      </figure>
                    </div>

                    <div className="sis-counter-title">
                      <h2 className="d-flex align-items-center gap-2">
                        <span className="sis-counter text-white">4.9</span>
                        <span className="sisf-digit-label text-white">
                          Ratings
                        </span>
                      </h2>
                    </div>

                    <div className="sis-counter-content">
                      <span className="sisf-content text-white">
                        Trusted by Our Customers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Why Choose Items */}
          <div className="col-lg-6">
            {whyChooseItems.map((item, index) => (
              <div
                className={`sis-why-choose-hover-item position-relative ${
                  index === whyChooseItems.length - 1 ? "mb-0" : ""
                }`}
                data-aos="fade-left"
                data-aos-delay={item.delay}
                key={index}
              >
                <div className="sisf-e-inner">
                  <div className="sisf-inner d-flex align-items-center gap-4">
                    {/* Icon */}
                    <div className="sis-icon-image">
                      <div className="sisf-m-page-icon-image">
                        <figure>
                          <img src={item.icon} alt={item.title} />
                        </figure>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="sisf-e-contents">
                      <div className="sisf-sis-e-title mb-2">
                        <h2 className="sisf-e-title sis-comman-title">
                          {item.title}
                        </h2>
                      </div>

                      <div className="sis-m-text">
                        <p className="mb-0">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Image */}
                <div className="sisf-background-image">
                  <figure>
                    <img
                      src="/images/why-choose-list-bg.png"
                      className="sis-radius"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
