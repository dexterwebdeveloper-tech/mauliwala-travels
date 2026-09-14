import React, { useState } from "react";
import "./Career.css";

const Career = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    position: "",
    experience: "",
    location: "",
    license: "",
    message: "",
  });

  const openings = [
    {
      icon: "fas fa-car",
      title: "Drivers",
      text: "Professional drivers for Urbania, Tempo Traveller, Mini Bus and passenger vehicles.",
      className: "career-red",
    },
    {
      icon: "fas fa-route",
      title: "Operations Staff",
      text: "Coordinate vehicle schedules, bookings, drivers and daily travel operations.",
      className: "career-dark",
    },
    {
      icon: "fas fa-headset",
      title: "Customer Support",
      text: "Assist customers with travel enquiries, bookings and trip coordination.",
      className: "career-light",
    },
    {
      icon: "fas fa-handshake",
      title: "Partners",
      text: "Join our travel network as a vehicle owner, fleet partner or business associate.",
      className: "career-outline",
    },
    {
      icon: "fas fa-laptop",
      title: "Digital Associates",
      text: "Work with our team on digital marketing, online enquiries and business growth.",
      className: "career-gradient",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919049419494";

    const message = `
*New Career Application - Mauliwala Travels*

*Full Name:* ${formData.fullname}
*Mobile Number:* ${formData.phone}
*Email:* ${formData.email || "Not Provided"}
*Applying For:* ${formData.position}
*Experience:* ${formData.experience}
*Current Location:* ${formData.location}
*Driving Licence:* ${formData.license || "Not Applicable"}

*About Candidate / Message:*
${formData.message || "No additional message"}

I would like to apply for this opportunity at Mauliwala Travels.
    `.trim();

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* =================================================
          CAREER HERO
      ================================================== */}

      <section className="career-hero">
        <div className="career-hero-shape career-shape-one"></div>
        <div className="career-hero-shape career-shape-two"></div>

        <div className="container">
          <div className="career-hero-content">

            <span className="career-hero-label">
              <i className="fas fa-briefcase"></i>
              CAREERS AT MAULIWALA
            </span>

            <h1>
              Drive Your Career
              <span> Forward With Us.</span>
            </h1>

            <p>
              Join Mauliwala Travels and become part of a growing
              passenger transport and mobility team in Pune.
            </p>

            <a href="#career-application" className="career-hero-btn">
              View Opportunities
              <i className="fas fa-arrow-down"></i>
            </a>

          </div>
        </div>
      </section>


      {/* =================================================
          CURRENT OPENINGS
      ================================================== */}

      <section className="career-openings">
        <div className="container">

          <div className="career-section-heading">

            <div>
              <span className="career-small-heading">
                JOIN OUR TEAM
              </span>

              <h2>
                Current <span>Openings</span>
              </h2>
            </div>

            <p>
              Explore opportunities across driving, operations,
              customer service, partnerships and digital roles.
            </p>

          </div>


          <div className="row g-4">

            {openings.map((job, index) => (
              <div
                className={
                  index < 3
                    ? "col-lg-4 col-md-6"
                    : "col-lg-6 col-md-6"
                }
                key={job.title}
              >
                <div className={`career-job-card ${job.className}`}>

                  <span className="career-job-number">
                    0{index + 1}
                  </span>

                  <div className="career-job-icon">
                    <i className={job.icon}></i>
                  </div>

                  <span className="career-job-status">
                    OPEN POSITION
                  </span>

                  <h3>{job.title}</h3>

                  <p>{job.text}</p>

                  <a href="#career-application">
                    Apply Now
                    <i className="fas fa-arrow-right"></i>
                  </a>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =================================================
          APPLICATION AREA
      ================================================== */}

      <section
        className="career-application-section"
        id="career-application"
      >
        <div className="container">

          <div className="career-application-wrapper">

            {/* =============================================
                LEFT INFORMATION PANEL
            ============================================== */}

            <div className="career-application-info">

              <span className="career-apply-label">
                WORK WITH US
              </span>

              <h2>
                Ready For Your
                <span> Next Opportunity?</span>
              </h2>

              <p>
                Tell us a little about yourself and the position
                you're interested in. Your application details
                will be sent directly to our recruitment team.
              </p>


              <div className="career-feature-list">

                <div className="career-feature">
                  <div className="career-feature-icon">
                    <i className="fas fa-users"></i>
                  </div>

                  <div>
                    <h4>Growing Team</h4>
                    <p>
                      Build your career with a growing Pune
                      travel and mobility company.
                    </p>
                  </div>
                </div>


                <div className="career-feature">
                  <div className="career-feature-icon">
                    <i className="fas fa-bus-alt"></i>
                  </div>

                  <div>
                    <h4>Travel Industry</h4>
                    <p>
                      Work across Urbania, Tempo Traveller,
                      Mini Bus and group transportation.
                    </p>
                  </div>
                </div>


                <div className="career-feature">
                  <div className="career-feature-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>

                  <div>
                    <h4>Growth Opportunities</h4>
                    <p>
                      Opportunities across operations,
                      customer service and digital roles.
                    </p>
                  </div>
                </div>

              </div>


              <div className="career-direct-contact">

                <div className="career-contact-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>

                <div>
                  <span>CAREER HELPLINE</span>

                  <a href="tel:+919049419494">
                    +91 9049419494
                  </a>
                </div>

              </div>

            </div>


            {/* =============================================
                APPLICATION FORM
            ============================================== */}

            <div className="career-form-area">

              <div className="career-form-heading">

                <span>
                  APPLICATION FORM
                </span>

                <h3>
                  Apply For a Position
                </h3>

                <p>
                  Fill in your details below to apply with
                  Mauliwala Travels.
                </p>

              </div>


              <form onSubmit={handleSubmit}>

                <div className="row g-3">

                  {/* NAME */}

                  <div className="col-md-6">
                    <div className="career-input-group">

                      <label>
                        Full Name *
                      </label>

                      <div className="career-input-wrap">

                        <i className="fas fa-user"></i>

                        <input
                          type="text"
                          name="fullname"
                          placeholder="Enter your name"
                          value={formData.fullname}
                          onChange={handleChange}
                          required
                        />

                      </div>
                    </div>
                  </div>


                  {/* PHONE */}

                  <div className="col-md-6">
                    <div className="career-input-group">

                      <label>
                        Mobile Number *
                      </label>

                      <div className="career-input-wrap">

                        <i className="fas fa-phone-alt"></i>

                        <input
                          type="tel"
                          name="phone"
                          placeholder="Enter mobile number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />

                      </div>
                    </div>
                  </div>


                  {/* EMAIL */}

                  <div className="col-md-6">
                    <div className="career-input-group">

                      <label>
                        Email Address
                      </label>

                      <div className="career-input-wrap">

                        <i className="fas fa-envelope"></i>

                        <input
                          type="email"
                          name="email"
                          placeholder="Enter email address"
                          value={formData.email}
                          onChange={handleChange}
                        />

                      </div>
                    </div>
                  </div>


                  {/* POSITION */}

                  <div className="col-md-6">
                    <div className="career-input-group">

                      <label>
                        Applying For *
                      </label>

                      <div className="career-input-wrap">

                        <i className="fas fa-briefcase"></i>

                        <select
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select Position
                          </option>

                          <option value="Driver">
                            Driver
                          </option>

                          <option value="Operations Staff">
                            Operations Staff
                          </option>

                          <option value="Customer Support">
                            Customer Support
                          </option>

                          <option value="Partner">
                            Partner
                          </option>

                          <option value="Digital Associate">
                            Digital Associate
                          </option>

                          <option value="Other">
                            Other Opportunity
                          </option>
                        </select>

                      </div>
                    </div>
                  </div>


                  {/* EXPERIENCE */}

                  <div className="col-md-6">
                    <div className="career-input-group">

                      <label>
                        Experience *
                      </label>

                      <div className="career-input-wrap">

                        <i className="fas fa-clock"></i>

                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select Experience
                          </option>

                          <option value="Fresher">
                            Fresher
                          </option>

                          <option value="Less than 1 Year">
                            Less than 1 Year
                          </option>

                          <option value="1-2 Years">
                            1 - 2 Years
                          </option>

                          <option value="3-5 Years">
                            3 - 5 Years
                          </option>

                          <option value="5+ Years">
                            5+ Years
                          </option>
                        </select>

                      </div>
                    </div>
                  </div>


                  {/* LOCATION */}

                  <div className="col-md-6">
                    <div className="career-input-group">

                      <label>
                        Current Location *
                      </label>

                      <div className="career-input-wrap">

                        <i className="fas fa-map-marker-alt"></i>

                        <input
                          type="text"
                          name="location"
                          placeholder="e.g. Pune, Alandi"
                          value={formData.location}
                          onChange={handleChange}
                          required
                        />

                      </div>
                    </div>
                  </div>


                  {/* LICENCE */}

                  <div className="col-12">
                    <div className="career-input-group">

                      <label>
                        Driving Licence
                      </label>

                      <div className="career-input-wrap">

                        <i className="fas fa-id-card"></i>

                        <select
                          name="license"
                          value={formData.license}
                          onChange={handleChange}
                        >
                          <option value="">
                            Select if applicable
                          </option>

                          <option value="Yes - Valid Driving Licence">
                            Yes - Valid Driving Licence
                          </option>

                          <option value="Commercial Driving Licence">
                            Commercial Driving Licence
                          </option>

                          <option value="Heavy Vehicle Licence">
                            Heavy Vehicle Licence
                          </option>

                          <option value="No Driving Licence">
                            No Driving Licence
                          </option>

                          <option value="Not Applicable">
                            Not Applicable
                          </option>
                        </select>

                      </div>
                    </div>
                  </div>


                  {/* MESSAGE */}

                  <div className="col-12">
                    <div className="career-input-group">

                      <label>
                        Tell Us About Yourself
                      </label>

                      <div className="career-input-wrap career-textarea">

                        <i className="fas fa-comment-dots"></i>

                        <textarea
                          name="message"
                          rows="5"
                          placeholder="Tell us about your experience, skills or why you would like to join Mauliwala Travels..."
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>

                      </div>
                    </div>
                  </div>


                  {/* SUBMIT */}

                  <div className="col-12">

                    <button
                      type="submit"
                      className="career-submit-btn"
                    >
                      <span>
                        Submit Application
                      </span>

                      <div className="career-submit-icon">
                        <i className="fab fa-whatsapp"></i>
                      </div>
                    </button>

                    <p className="career-form-note">
                      <i className="fas fa-lock"></i>
                      Your application details will open securely
                      in WhatsApp for submission.
                    </p>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Career;