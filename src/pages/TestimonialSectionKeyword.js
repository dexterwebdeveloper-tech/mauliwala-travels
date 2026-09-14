import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSectionKeyword = ({
  title = "What Our Customers Say",
  subtitle = "Testimonial",
  testimonials = [],
  autoplay = true,
  autoplaySpeed = 3000,
}) => {
  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: "#DD1D22", marginRight: "2px" }}>
        <i className="fa fa-star"></i>
      </span>
    ));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#ccc",
        }}
      />
    ),
  };

  return (
    <div
      className="section-full "
      style={{
        background: "#f9f9f9",
        overflowX: "hidden", // ✅ Prevent horizontal scroll
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center p-0">
          <div className="col-lg-8">
            <div className="section-head">
              <div
                className="twm-sm-title"
                style={{ color: "#DD1D22", fontWeight: "600" }}
              >
                {subtitle}
              </div>
              <h2
                className="twm-large-"
                style={{ color: "#002147", fontWeight: "700" }}
              >
                {title}
              </h2>
            </div>
          </div>
        </div>

        <div className="section-content">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div className="item" key={testimonial.id}>
                <div
                  className="twm-testimonial2"
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "30px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                    textAlign: "center",
                    position: "relative",
                    maxWidth: "100%",
                    margin: "0 auto",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Quote icon */}
                  <div
                    className="twm-quote-icon"
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "10px",
                      fontSize: "30px",
                      color: "#DD1D22",
                    }}
                  >
                    <i className="fa fa-quote-right"></i>
                  </div>

                  {/* Name & role */}
                  <div className="twm-author-detail mb-3">
                    <h3
                      className="twm-title"
                      style={{ color: "#002147", marginBottom: "5px" }}
                    >
                      {testimonial.name}
                    </h3>
                    <div
                      className="twm-position"
                      style={{ color: "#555", fontSize: "14px" }}
                    >
                      {testimonial.position}
                    </div>
                  </div>

                  {/* Feedback */}
                  <div className="twm-testimonial-detail mb-3">
                    <p style={{ color: "#333", fontSize: "16px" }}>
                      {testimonial.feedback}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="twm-rating-wrap">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSectionKeyword;
