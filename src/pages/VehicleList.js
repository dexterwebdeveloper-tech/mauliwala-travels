import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const vehicles = [
  {
    image: "/images/Fleet/10-Seater-urbania.jpg",
    type: "Urbania",
    name: "10 Seater Urbania",
    description:
      "Comfortable and spacious Urbania ideal for family trips, airport transfers, and group travel.",
    price: "Contact Us",
    persons: "10 Persons",
    fuel: "Diesel",
  },
  {
    image: "/images/Fleet/13-Seater-urbania.jpg",
    type: "Urbania",
    name: "13 Seater Urbania",
    description:
      "Premium and comfortable Urbania designed for group travel, corporate trips, and long-distance journeys.",
    price: "Contact Us",
    persons: "13 Persons",
    fuel: "Diesel",
  },
  {
    image: "/images/Fleet/17-Seater-Tempo-Traveller.jpg",
    type: "Tempo Traveller",
    name: "17 Seater Tempo Traveller",
    description:
      "Spacious Tempo Traveller perfect for family vacations, group tours, and comfortable outstation travel.",
    price: "Contact Us",
    persons: "17 Persons",
    fuel: "Diesel",
  },
  {
    image: "/images/Fleet/17-Seater-urbania.jpg",
    type: "Urbania",
    name: "17 Seater Urbania",
    description:
      "Luxury group transport offering excellent comfort and space for tours, events, and corporate travel.",
    price: "Contact Us",
    persons: "17 Persons",
    fuel: "Diesel",
  },
  // {
  //   image: "/images/Fleet/20-Seater-Tempo-Traveller.jpg",
  //   type: "Tempo Traveller",
  //   name: "20 Seater Tempo Traveller",
  //   description:
  //     "Large-capacity traveller ideal for group tours, family functions, pilgrimages, and outstation trips.",
  //   price: "Contact Us",
  //   persons: "20 Persons",
  //   fuel: "Diesel",
  // },
  // {
  //   image: "/images/Fleet/32-Seater-Bus.jpg",
  //   type: "Bus",
  //   name: "32 Seater Bus",
  //   description:
  //     "Comfortable bus solution for corporate travel, school trips, group tours, and large events.",
  //   price: "Contact Us",
  //   persons: "32 Persons",
  //   fuel: "Diesel",
  // },
  // {
  //   image: "/images/Fleet/40-Seater-Bus.jpg",
  //   type: "Bus",
  //   name: "40 Seater Bus",
  //   description:
  //     "Spacious and reliable bus suitable for large groups, tours, events, and long-distance travel.",
  //   price: "Contact Us",
  //   persons: "40 Persons",
  //   fuel: "Diesel",
  // },
  // {
  //   image: "/images/Fleet/45-Seater-AC-Bus.jpg",
  //   type: "AC Bus",
  //   name: "45 Seater AC Bus",
  //   description:
  //     "Premium air-conditioned bus designed for comfortable group transportation and long-distance journeys.",
  //   price: "Contact Us",
  //   persons: "45 Persons",
  //   fuel: "Diesel",
  // },
];


const VehicleList = () => {
  return (
    <section className="sis-vehicle-list-section sis-comman-bg py-2">
      <div className="container">

        {/* Section Heading */}
        <div className="row">
          <div className="col-12">
            <div className="sisf-sis-section-title text-center sis-section-title">

              <span className="sisf-m-subtitle text-uppercase sis-text-anime-style-3">
                Premium Vehicle Collection
              </span>

              <h2 className="sisf-m-title sis-text-anime-style-3">
                Explore Our Luxury Fleet for
                <br />
                Every Journey
              </h2>

              {/* <div
                className="sisf-m-text"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>
                  Choose from our carefully selected fleet of luxury sedans,
                  executive SUVs, premium limousines, and spacious group
                  <br className="d-none d-md-block" />
                  transportation vehicles
                </p>
              </div> */}

            </div>
          </div>
        </div>

        {/* Vehicle Slider */}
        <div className="row">
          <div className="col-12">

            <div
              className="sisf-vehicle-list"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="sis-comman--swiper-slider">

                <Swiper
                  modules={[
                    Autoplay,
                    Navigation,
                    Pagination,
                    A11y,
                  ]}
                  spaceBetween={24}
                  slidesPerView={3}
                  loop={true}
                  speed={800}

                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}

                  navigation={{
                    nextEl: ".vehicle-next",
                    prevEl: ".vehicle-prev",
                  }}

                  pagination={{
                    clickable: true,
                  }}

                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },

                    576: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },

                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },

                    992: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                    },

                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                    },
                  }}
                >

                  {vehicles.map((vehicle, index) => (
                    <SwiperSlide key={index}>

                      <div className="sisf-vehicle-list-item sis-radius bg-white p-2">

                        <div className="sisf-e-inner">

                          {/* Vehicle Image */}
                          <div className="sisf-vehicle-image position-relative mb-2">

                            <Link to="/our-fleet">
                              <figure className="sis-image-anime">

                                <img
                                  src={vehicle.image}
                                  className="w-100"
                                  alt={vehicle.name}
                                />

                              </figure>
                            </Link>

                            <div className="sisf-vehicle-type">
                              <span className="sisf-e-colored">
                                {vehicle.type}
                              </span>
                            </div>

                          </div>

                          {/* Vehicle Content */}
                          <div className="sisf-vehicle-content p-2">

                            <div className="sisf-vehicle-title mb-1">
                              <h3 className="colrr">
                                <Link to="/our-fleet " className="colrr">
                                  {vehicle.name}
                                </Link>
                              </h3>
                            </div>

                            <div className="sisf-m-text">
                              <p className="mb-3">
                                {vehicle.description}
                              </p>
                            </div>

                            {/* Price + Rent Button */}
                            <div className="sisf-m-detail-inner mb-3 pb-3 d-flex align-items-center justify-content-between">

                              {/* <div className="sisf-m-price d-flex">

                                <div className="sisf-m-price-wrapper">
                                  <span className="sisf-m-price-value pe-2">
                                    {vehicle.price}
                                  </span>
                                </div>

                                <span className="sisf-m-price-period">
                                  / per day
                                </span>

                              </div> */}

                              <div className="sisf-m-button">

                                <Link
                                  to="/our-fleet"
                                  className="sis-btn-default"
                                >
                                  Book Now
                                  <i className="fa-solid fa-arrow-right-long"></i>
                                </Link>

                              </div>

                            </div>

                            {/* Features */}
                            <div className="sisf-vehicle-features d-flex align-items-center mt-1">

                              <div className="sisf-passengers">
                                <span>
                                  <i className="fa-solid me-1 fa-users"></i>
                                  {vehicle.persons}
                                </span>
                              </div>

                              <div className="sisf-fuel-type">
                                <span>
                                  <i className="fa-solid me-1 fa-gas-pump"></i>
                                  {vehicle.fuel}
                                </span>
                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </SwiperSlide>
                  ))}

                </Swiper>

                {/* Slider Arrows */}
                <div
                  className="sis-slider-arrow ms-auto me-auto"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >

                  <div className="sis-swiper-button swiper-button-prev vehicle-prev">
                    <span>
                      <i className="fa-solid fa-chevron-left"></i>
                    </span>
                  </div>

                  <div className="sis-swiper-button swiper-button-next vehicle-next">
                    <span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Text */}
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
                    src="/images/users2.png"
                    alt="Our customers"
                  />
                </figure>
              </div>

              <div
                className="sisf-sis-e-box d-flex align-items-center justify-content-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p className="mb-0">
                  Discover the complete range of luxury vehicles for every
                  journey —{" "}
                  <Link to="/our-fleet">
                    View All Fleets
                  </Link>
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VehicleList;
