import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "We booked a Force Urbania from Mauliwala for our family trip from Pune. The vehicle was clean, spacious, and very comfortable. The driver was professional and the entire journey was smooth.",
    image: "images/author1.png",
    name: "Mr. Rahul Patil",
    job: "Family Traveller",
  },
  {
    text: "Excellent Urbania rental service in Pune. We hired the vehicle for a corporate trip and were very happy with the comfort, cleanliness, and punctual service. Highly recommended for group travel.",
    image: "images/author2.png",
    name: "Mr. Amit Deshmukh",
    job: "Corporate Client",
  },
  {
    text: "Mauliwala provided a very comfortable Force Urbania for our wedding group. The vehicle was spacious and well maintained, and the driver was polite and helpful throughout our Maharashtra trip.",
    image: "images/author3.png",
    name: "Miss. Sneha Kulkarni",
    job: "Wedding Traveller",
  },
  {
    text: "We hired an Urbania from Mauliwala for our Pune to Mahabaleshwar trip. The journey was extremely comfortable for our group, and the vehicle was in excellent condition. Great service and very convenient booking.",
    image: "images/author1.png",
    name: "Mr. Sagar Jadhav",
    job: "Outstation Traveller",
  },
  {
    text: "Our experience with Mauliwala was excellent. We booked a Force Urbania for a group trip across Maharashtra. The vehicle was clean, comfortable, and spacious, making the long journey enjoyable for everyone.",
    image: "images/author2.png",
    name: "Miss. Priya Shinde",
    job: "Group Traveller",
  },
];


const clientLogos = [
  "images/clien-logo1.png",
  "images/clien-logo2.png",
  "images/clien-logo3.png",
  "images/clien-logo4.png",
  "images/clien-logo5.png",
  "images/clien-logo6.png",
  "images/clien-logo2.png",
];

const Testimonial = () => {
  return (
    <div className="sis-testimonial-section section">
      <div className="container">
        <div className="row">

          {/* Left Content */}
          <div className="col-lg-5">
            <div className="sisf-sis-section-title sis-section-title">
              <span className="sisf-m-subtitle sis-text-anime-style-3">
                TESTIMONIALS
              </span>

              <h2 className="sisf-m-title sis-text-anime-style-3">
                What Our Customers Say About Mauliwala Urbania Rental
              </h2>
            </div>

            <div className="sis-comman-bottom-line-text mt-0 d-flex align-items-center flex-wrap gap-3">

              <div className="sis-e-rating-text">
                <h3>4.9/5 Ratings</h3>
              </div>

              <div className="sisf-rating-image">
                <figure>
                  <img
                    src="images/trustpilot_logo.svg"
                    alt="Mauliwala Urbania Rental Reviews"
                  />
                </figure>
              </div>

              <div className="sisf-sis-e-box">

                <div className="sisf-m-text">
                  <p className="mb-0 sisf-e-colored">
                    Trusted Urbania Rental Service
                  </p>
                </div>

                <div className="sisf-m-text">
                  <p className="mb-0">
                    Comfortable Force Urbania rental for group travel
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="col-lg-7">
            <div className="row">
              <div className="col-12">

                <div className="testimonial-right page">

                  <div className="sisf-comman--swiper-slider testimonial-slider">

                    <Swiper
                      modules={[Autoplay, Navigation]}
                      navigation={{
                        prevEl: ".testimonial-prev",
                        nextEl: ".testimonial-next",
                      }}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      loop={true}
                      spaceBetween={20}
                      slidesPerView={1}
                      speed={800}
                    >

                      {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>

                          <div className="sisf-e-inner d-flex flex-column justify-content-between sis-comman-bg p-3 sis-radius position-relative">

                            {/* Top */}
                            <div className="sis-e-top d-flex align-items-center justify-content-between mb-3">

                              <div className="quote-left-icon mb-0">
                                <span className="text-white">
                                  <i className="fa-solid fa-quote-left"></i>
                                </span>
                              </div>

                              <div className="sisf-ratings">
                                <div className="sisf-m-star sisf--initial">
                                  <span className="star">★</span>
                                  <span className="star">★</span>
                                  <span className="star">★</span>
                                  <span className="star">★</span>
                                  <span className="star">★</span>
                                </div>
                              </div>

                            </div>

                            {/* Description */}
                            <div className="sisf-e-top">

                              <div className="sisf-e-discription mt-1">
                                <p className="mb-0">
                                  {testimonial.text}
                                </p>
                              </div>

                            </div>

                            {/* Author */}
                            <div className="sisf-bottom--content d-flex align-items-center gap-4">

                              {/* <div className="sisf-e-media-image">
                                <img
                                  src={testimonial.image}
                                  className="w-100"
                                  alt={testimonial.name}
                                />
                              </div> */}

                              <div className="sisf-e-author">

                                <span className="sisf-e-author-name d-block">
                                  {testimonial.name}
                                </span>

                                <span className="sisf-e-author-job d-block">
                                  {testimonial.job}
                                </span>

                              </div>

                            </div>

                          </div>

                        </SwiperSlide>
                      ))}

                      {/* Navigation */}
                      <div className="sis-slider-arrow ms-auto me-auto">

                        <div className="sis-swiper-button swiper-button-prev testimonial-prev">
                          <span>
                            <i className="fa-solid fa-chevron-left"></i>
                          </span>
                        </div>

                        <div className="sis-swiper-button swiper-button-next testimonial-next">
                          <span>
                            <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </div>

                      </div>

                    </Swiper>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Review Text */}
        {/* <div className="row">
          <div className="col-12">

            <div className="sis-comman-bottom-line-text d-flex align-items-center justify-content-center gap-3">

              <div className="sisf-users-image">
                <figure>
                  <img
                    src="images/users4.png"
                    alt="Happy Mauliwala customers"
                  />
                </figure>
              </div>

              <div className="sisf-sis-e-box d-flex align-items-center justify-content-center">

                <p className="mb-0">
                  Trusted for Force Urbania rental in Pune, Mumbai, Nashik,
                  Kolhapur, Mahabaleshwar, Lonavala and across Maharashtra.{" "}
                  <a href="testimonials.html">
                    View All Reviews
                  </a>
                </p>

              </div>

            </div>

          </div>
        </div> */}

        {/* Client Logos */}
        {/* <div className="sis-logo-slider-bottom">

          <div className="row">
            <div className="col-11 ms-auto me-auto">

              <div className="sis-logo-slider">

                <div className="sisf-comman-swiper--slider">

                  <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                    speed={800}
                    spaceBetween={30}
                    slidesPerView={2}
                    breakpoints={{
                      576: {
                        slidesPerView: 3,
                      },
                      768: {
                        slidesPerView: 4,
                      },
                      992: {
                        slidesPerView: 5,
                      },
                      1200: {
                        slidesPerView: 6,
                      },
                    }}
                  >

                    {clientLogos.map((logo, index) => (
                      <SwiperSlide key={index}>

                        <div className="sisf-e-inner">

                          <div className="sis-logo-slide-image text-center">

                            <figure>
                              <img
                                src={logo}
                                alt={`Mauliwala customer ${index + 1}`}
                              />
                            </figure>

                          </div>

                        </div>

                      </SwiperSlide>
                    ))}

                  </Swiper>

                </div>

              </div>

            </div>
          </div>

        </div> */}

      </div>
    </div>
  );
};

export default Testimonial;
