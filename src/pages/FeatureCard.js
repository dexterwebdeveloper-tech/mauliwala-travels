import React from "react";
import { Link } from "react-router-dom";

const leftFeatures = [
  {
    icon: "/images/features-icon1.svg",
    title: "Executive Chauffeur Service",
    description:
      "Travel with professional chauffeurs who deliver punctual, comfortable, and first-class transportation.",
    delay: 100,
  },
  {
    icon: "/images/features-icon3.svg",
    title: "Fast & Seamless Booking",
    description:
      "Reserve your luxury ride in minutes with our quick and hassle-free booking process.",
    delay: 300,
  },
  // {
  //   icon: "/images/features-icon5.svg",
  //   title: "Transparent Pricing",
  //   description:
  //     "Enjoy clear, upfront rates with no hidden fees or unexpected charges.",
  //   delay: 500,
  // },
];

const rightFeatures = [
  {
    icon: "/images/features-icon2.svg",
    title: "Flexible Travel Packages",
    description:
      "Customized transportation solutions designed to fit your schedule and travel needs.",
    delay: 100,
  },
  {
    icon: "/images/features-icon4.svg",
    title: "24/7 Customer Assistance",
    description:
      "Our support team is available around the clock to assist with every journey.",
    delay: 300,
  },
  // {
  //   icon: "/images/features-icon6.svg",
  //   title: "Multiple Pick-Up Locations",
  //   description:
  //     "Convenient pick-up and drop-off services available across multiple destinations.",
  //   delay: 500,
  // },
];

const FeatureCard = ({ feature, direction }) => {
  return (
    <div
      className={`sisf-sis-icon-with-text--hover sisf-features-contents`}
      data-aos={direction === "left" ? "fade-right" : "fade-left"}
      data-aos-delay={feature.delay}
    >
      <div className="sisf-e-inner p-3 sis-radius position-relative">

        {/* Icon */}
        <div className="sis-icon-image">
          <div className="sisf-features-icon-image mb-4">
            <figure>
              <img
                src={feature.icon}
                className="sis-icon"
                alt={feature.title}
              />
            </figure>
          </div>
        </div>

        {/* Content */}
        <div className="sisf-e-content">
          <div className="sisf-sis-e-title mb-2">
            <h3 className="sisf-e-title">
              <span>{feature.title}</span>
            </h3>
          </div>

          <div className="sis-e-text">
            <p className="mb-0">{feature.description}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

const PremiumFeatures = () => {
  return (
    <section className="sisf-premium-features-section sisf-page-background section">
      <div className="container">

        {/* Section Header */}
        <div className="row align-items-center">

          <div className="col-lg-9">
            <div className="sisf-sis-section-title sis-section-title">

              <span className="sisf-m-subtitle white sis-text-anime-style-3">
                PREMIUM FEATURES
              </span>

              <h2 className="sisf-m-title text-white sis-text-anime-style-3">
                Luxury Features for Every Journey
              </h2>

              <div
                className="sisf-m-text"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="text-white">
                  Experience executive-class transportation with professional
                  chauffeurs, effortless booking, luxury vehicles, and
                  personalized service.
                  <br />
                  We are committed to delivering comfort, safety, reliability,
                  and a first-class travel experience for every journey.
                </p>
              </div>

            </div>
          </div>

          {/* Button */}
          <div className="col-lg-3 text-end">
            <div
              className="sisf-m-button"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <Link to="/our-fleet" className="sis-btn-default btn-light">
                Discover Fleet
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>

        </div>

        {/* Features */}
        <div className="row align-items-end">

          {/* Left Features */}
          <div className="col-lg-3 pe-0">

            {leftFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                direction="left"
              />
            ))}

          </div>

          {/* Center Image */}
          <div className="col-lg-6 px-4  pt-0 pb-5">

            <div
              className="sisf-e-features-image-center pt-0 pb-5"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            >
              <figure>
                <img
                  src="/images/urba.png"
                  className="w-100 pt-0"
                  alt="Luxury transportation"
                />
              </figure>
            </div>

          </div>

          {/* Right Features */}
          <div className="col-lg-3 ps-0">

            {rightFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                direction="right"
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default PremiumFeatures;
