// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

// const testimonials = [
//   {
//     text: "We booked a Force Urbania from Mauliwala for our family trip from Pune. The vehicle was clean, spacious, and very comfortable. The driver was professional and the entire journey was smooth.",
//     image: "images/author1.png",
//     name: "Mr. Rahul Patil",
//     job: "Family Traveller",
//   },
//   {
//     text: "Excellent Urbania rental service in Pune. We hired the vehicle for a corporate trip and were very happy with the comfort, cleanliness, and punctual service. Highly recommended for group travel.",
//     image: "images/author2.png",
//     name: "Mr. Amit Deshmukh",
//     job: "Corporate Client",
//   },
//   {
//     text: "Mauliwala provided a very comfortable Force Urbania for our wedding group. The vehicle was spacious and well maintained, and the driver was polite and helpful throughout our Maharashtra trip.",
//     image: "images/author3.png",
//     name: "Miss. Sneha Kulkarni",
//     job: "Wedding Traveller",
//   },
//   {
//     text: "We hired an Urbania from Mauliwala for our Pune to Mahabaleshwar trip. The journey was extremely comfortable for our group, and the vehicle was in excellent condition. Great service and very convenient booking.",
//     image: "images/author1.png",
//     name: "Mr. Sagar Jadhav",
//     job: "Outstation Traveller",
//   },
//   {
//     text: "Our experience with Mauliwala was excellent. We booked a Force Urbania for a group trip across Maharashtra. The vehicle was clean, comfortable, and spacious, making the long journey enjoyable for everyone.",
//     image: "images/author2.png",
//     name: "Miss. Priya Shinde",
//     job: "Group Traveller",
//   },
// ];


// const clientLogos = [
//   "images/clien-logo1.png",
//   "images/clien-logo2.png",
//   "images/clien-logo3.png",
//   "images/clien-logo4.png",
//   "images/clien-logo5.png",
//   "images/clien-logo6.png",
//   "images/clien-logo2.png",
// ];

// const Testimonial = () => {
//   return (
//     <div className="sis-testimonial-section py-3">
//       <div className="container">
//         <div className="row">

//           {/* Left Content */}
//           <div className="col-lg-5">
//             <div className="sisf-sis-section-title sis-section-title">
//               <span className="sisf-m-subtitle sis-text-anime-style-3">
//                 TESTIMONIALS
//               </span>

//               <h2 className="sisf-m-title sis-text-anime-style-3">
//                 What Our Customers Say About Mauliwala Travels
//               </h2>
//             </div>

           
//           </div>

//           {/* Testimonials */}
//           <div className="col-lg-7">
//             <div className="row">
//               <div className="col-12">

//                 <div className="testimonial-right page">

//                   <div className="sisf-comman--swiper-slider testimonial-slider">

//                     <Swiper
//                       modules={[Autoplay, Navigation]}
//                       navigation={{
//                         prevEl: ".testimonial-prev",
//                         nextEl: ".testimonial-next",
//                       }}
//                       autoplay={{
//                         delay: 3000,
//                         disableOnInteraction: false,
//                         pauseOnMouseEnter: true,
//                       }}
//                       loop={true}
//                       spaceBetween={20}
//                       slidesPerView={1}
//                       speed={800}
//                     >

//                       {testimonials.map((testimonial, index) => (
//                         <SwiperSlide key={index}>

//                           <div className="sisf-e-inner d-flex flex-column justify-content-between sis-comman-bg p-3 sis-radius position-relative">

//                             {/* Top */}
//                             <div className="sis-e-top d-flex align-items-center justify-content-between mb-3">

//                               <div className="quote-left-icon mb-0">
//                                 <span className="text-white">
//                                   <i className="fa-solid fa-quote-left"></i>
//                                 </span>
//                               </div>

//                               <div className="sisf-ratings">
//                                 <div className="sisf-m-star sisf--initial">
//                                   <span className="star">★</span>
//                                   <span className="star">★</span>
//                                   <span className="star">★</span>
//                                   <span className="star">★</span>
//                                   <span className="star">★</span>
//                                 </div>
//                               </div>

//                             </div>

//                             {/* Description */}
//                             <div className="sisf-e-top">

//                               <div className="sisf-e-discription mt-1">
//                                 <p className="mb-0">
//                                   {testimonial.text}
//                                 </p>
//                               </div>

//                             </div>

//                             {/* Author */}
//                             <div className="sisf-bottom--content d-flex align-items-center gap-4">

//                               {/* <div className="sisf-e-media-image">
//                                 <img
//                                   src={testimonial.image}
//                                   className="w-100"
//                                   alt={testimonial.name}
//                                 />
//                               </div> */}

//                               <div className="sisf-e-author">

//                                 <span className="sisf-e-author-name d-block">
//                                   {testimonial.name}
//                                 </span>

//                                 <span className="sisf-e-author-job d-block">
//                                   {testimonial.job}
//                                 </span>

//                               </div>

//                             </div>

//                           </div>

//                         </SwiperSlide>
//                       ))}

//                       {/* Navigation */}
//                       <div className="sis-slider-arrow ms-auto me-auto">

//                         <div className="sis-swiper-button swiper-button-prev testimonial-prev">
//                           <span>
//                             <i className="fa-solid fa-chevron-left"></i>
//                           </span>
//                         </div>

//                         <div className="sis-swiper-button swiper-button-next testimonial-next">
//                           <span>
//                             <i className="fa-solid fa-chevron-right"></i>
//                           </span>
//                         </div>

//                       </div>

//                     </Swiper>

//                   </div>

//                 </div>

//               </div>
//             </div>
//           </div>

//         </div>

    

//       </div>
//     </div>
//   );
// };

// export default Testimonial;




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const googleReviewLink =
  "https://g.page/r/CbAJg1pAGZ5eECE/review";

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
    <div className="sis-testimonial-section py-3">
      <div className="container">

        {/* =====================================
            ORIGINAL ROW
        ===================================== */}

        <div className="row">

          {/* LEFT CONTENT */}

          <div className="col-lg-5">
            <div className="sisf-sis-section-title sis-section-title">

              <span className="sisf-m-subtitle sis-text-anime-style-3">
                TESTIMONIALS
              </span>

              <h2 className="sisf-m-title sis-text-anime-style-3">
                What Our Customers Say About Mauliwala Travels
              </h2>

              {/* =====================================
                  NEW GOOGLE REVIEW LINK
                  ONLY ADDED SECTION
              ===================================== */}

              <div className="mt-4">

                <a
                  href={googleReviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-flex align-items-center gap-3 text-decoration-none bg-white border rounded-pill px-4 py-3 shadow-sm"
                  aria-label="Write a Google review for Mauliwala Travels"
                >

                  {/* GOOGLE ICON */}

                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6C44.4 38.03 46.98 31.88 46.98 24.55z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.2A23.9 23.9 0 0 0 0 24c0 3.87.93 7.51 2.56 10.78l7.97-6.19z"
                    />
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.8l-7.73-6C30.01 37.65 27.25 38.5 24 38.5c-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    />
                  </svg>

                  <span
                    className="fw-bold"
                    style={{
                      color: "#202124",
                      fontSize: "14px",
                    }}
                  >
                    Write a Google Review
                  </span>

                  <i
                    className="fas fa-arrow-up-right-from-square"
                    style={{
                      color: "#ED1C24",
                      fontSize: "12px",
                    }}
                  ></i>

                </a>

              </div>

              {/* GOOGLE REVIEW LINK END */}

            </div>
          </div>

          {/* =====================================
              ORIGINAL TESTIMONIAL SLIDER
          ===================================== */}

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

                            {/* TOP */}

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

                            {/* DESCRIPTION */}

                            <div className="sisf-e-top">

                              <div className="sisf-e-discription mt-1">

                                <p className="mb-0">
                                  {testimonial.text}
                                </p>

                              </div>

                            </div>

                            {/* AUTHOR */}

                            <div className="sisf-bottom--content d-flex align-items-center gap-4">

                              {/*
                              <div className="sisf-e-media-image">
                                <img
                                  src={testimonial.image}
                                  className="w-100"
                                  alt={testimonial.name}
                                />
                              </div>
                              */}

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

                      {/* ORIGINAL NAVIGATION */}

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

      </div>
    </div>
  );
};

export default Testimonial;
