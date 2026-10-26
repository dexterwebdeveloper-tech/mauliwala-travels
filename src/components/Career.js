
import React, { useState } from "react";
import "./Career.css";

// Web3Forms Access Key
const WEB3FORMS_ACCESS_KEY =
  "e8e07040-bf64-4a17-b066-746b2a624cf9";

const initialFormData = {
  fullname: "",
  phone: "",
  email: "",
  position: "",
  experience: "",
  location: "",
  license: "",
  message: "",
};

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

const Career = () => {
  const [formData, setFormData] = useState({
    ...initialFormData,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // =====================================
  // HANDLE INPUT CHANGE
  // =====================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status) {
      setStatus("");
      setErrorMessage("");
    }
  };

  // =====================================
  // SUBMIT APPLICATION TO WEB3FORMS
  // =====================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const phone = formData.phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setStatus("error");
      setErrorMessage(
        "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    setLoading(true);
    setStatus("");
    setErrorMessage("");

    const data = new FormData();

    // Access Key
    data.append(
      "access_key",
      WEB3FORMS_ACCESS_KEY
    );

    // Email Subject
    data.append(
      "subject",
      `New Career Application - ${formData.position} - Mauliwala Travels`
    );

    // Sender
    data.append(
      "from_name",
      "Mauliwala Travels Career Portal"
    );

    // Candidate Information
    data.append(
      "Full Name",
      formData.fullname.trim()
    );

    data.append(
      "Mobile Number",
      `+91 ${phone}`
    );

    data.append(
      "Email",
      formData.email.trim() || "Not Provided"
    );

    data.append(
      "Applying For",
      formData.position
    );

    data.append(
      "Experience",
      formData.experience
    );

    data.append(
      "Current Location",
      formData.location.trim()
    );

    data.append(
      "Driving Licence",
      formData.license || "Not Applicable"
    );

    data.append(
      "Candidate Message",
      formData.message.trim() ||
        "No additional message"
    );

    data.append(
      "Application Source",
      "Mauliwala Travels Website - Career Page"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");

        // Reset Form
        setFormData({
          ...initialFormData,
        });
      } else {
        setStatus("error");

        setErrorMessage(
          result.message ||
            "Application submission failed. Please try again."
        );
      }
    } catch (error) {
      console.error(
        "Career Form Submission Error:",
        error
      );

      setStatus("error");

      setErrorMessage(
        "Network error. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* =====================================
          CAREER HERO
      ===================================== */}

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
              Join Mauliwala Travels and become part
              of a growing passenger transport and
              mobility team in Pune.
            </p>

            <a
              href="#career-application"
              className="career-hero-btn"
            >
              View Opportunities
              <i className="fas fa-arrow-down"></i>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          CURRENT OPENINGS
      ===================================== */}

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
              Explore opportunities across driving,
              operations, customer service,
              partnerships and digital roles.
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
                <div
                  className={`career-job-card ${job.className}`}
                >
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

      {/* =====================================
          APPLICATION SECTION
      ===================================== */}

      <section
        className="career-application-section"
        id="career-application"
      >
        <div className="container">
          <div className="career-application-wrapper">

            {/* LEFT INFORMATION PANEL */}

            <div className="career-application-info">
              <span className="career-apply-label">
                WORK WITH US
              </span>

              <h2>
                Ready For Your
                <span> Next Opportunity?</span>
              </h2>

              <p>
                Tell us a little about yourself and
                the position you're interested in.
                Your application details will be
                sent directly to our recruitment team.
              </p>

              <div className="career-feature-list">

                <div className="career-feature">
                  <div className="career-feature-icon">
                    <i className="fas fa-users"></i>
                  </div>

                  <div>
                    <h4>Growing Team</h4>
                    <p>
                      Build your career with a growing
                      Pune travel and mobility company.
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
                      Work across Urbania,
                      Tempo Traveller, Mini Bus
                      and group transportation.
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
                  <i className="fas fa-phone-alt"></i>
                </div>

                <div>
                  <span>CAREER HELPLINE</span>

                  <a href="tel:+919049419494">
                    +91 9049419494
                  </a>
                </div>
              </div>
            </div>

            {/* =====================================
                APPLICATION FORM
            ===================================== */}

            <div className="career-form-area">
              <div className="career-form-heading">
                <span>APPLICATION FORM</span>

                <h3>Apply For a Position</h3>

                <p>
                  Fill in your details below to apply
                  with Mauliwala Travels.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  {/* FULL NAME */}

                  <div className="col-md-6">
                    <div className="career-input-group">
                      <label htmlFor="career-fullname">
                        Full Name *
                      </label>

                      <div className="career-input-wrap">
                        <i className="fas fa-user"></i>

                        <input
                          id="career-fullname"
                          type="text"
                          name="fullname"
                          placeholder="Enter your name"
                          value={formData.fullname}
                          onChange={handleChange}
                          autoComplete="name"
                          maxLength={100}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* PHONE */}

                  <div className="col-md-6">
                    <div className="career-input-group">
                      <label htmlFor="career-phone">
                        Mobile Number *
                      </label>

                      <div className="career-input-wrap">
                        <i className="fas fa-phone-alt"></i>

                        <input
                          id="career-phone"
                          type="tel"
                          name="phone"
                          placeholder="Enter 10-digit mobile number"
                          value={formData.phone}
                          onChange={handleChange}
                          inputMode="numeric"
                          pattern="[6-9][0-9]{9}"
                          maxLength={10}
                          title="Enter a valid 10-digit Indian mobile number"
                          autoComplete="tel-national"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* EMAIL */}

                  <div className="col-md-6">
                    <div className="career-input-group">
                      <label htmlFor="career-email">
                        Email Address
                      </label>

                      <div className="career-input-wrap">
                        <i className="fas fa-envelope"></i>

                        <input
                          id="career-email"
                          type="email"
                          name="email"
                          placeholder="Enter email address"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                        />
                      </div>
                    </div>
                  </div>

                  {/* POSITION */}

                  <div className="col-md-6">
                    <div className="career-input-group">
                      <label htmlFor="career-position">
                        Applying For *
                      </label>

                      <div className="career-input-wrap">
                        <i className="fas fa-briefcase"></i>

                        <select
                          id="career-position"
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
                      <label htmlFor="career-experience">
                        Experience *
                      </label>

                      <div className="career-input-wrap">
                        <i className="fas fa-clock"></i>

                        <select
                          id="career-experience"
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
                      <label htmlFor="career-location">
                        Current Location *
                      </label>

                      <div className="career-input-wrap">
                        <i className="fas fa-map-marker-alt"></i>

                        <input
                          id="career-location"
                          type="text"
                          name="location"
                          placeholder="e.g. Pune, Alandi"
                          value={formData.location}
                          onChange={handleChange}
                          maxLength={150}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* DRIVING LICENCE */}

                  <div className="col-12">
                    <div className="career-input-group">
                      <label htmlFor="career-license">
                        Driving Licence
                      </label>

                      <div className="career-input-wrap">
                        <i className="fas fa-id-card"></i>

                        <select
                          id="career-license"
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
                      <label htmlFor="career-message">
                        Tell Us About Yourself
                      </label>

                      <div className="career-input-wrap career-textarea">
                        <i className="fas fa-comment-dots"></i>

                        <textarea
                          id="career-message"
                          name="message"
                          rows="5"
                          placeholder="Tell us about your experience, skills or why you would like to join Mauliwala Travels..."
                          value={formData.message}
                          onChange={handleChange}
                          maxLength={2000}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* SUBMIT */}

                  <div className="col-12">
                    <button
                      type="submit"
                      className="career-submit-btn"
                      disabled={loading}
                    >
                      <span>
                        {loading
                          ? "Sending Application..."
                          : "Submit Application"}
                      </span>

                      <div className="career-submit-icon">
                        {loading ? (
                          <i className="fas fa-spinner fa-spin"></i>
                        ) : (
                          <i className="fas fa-paper-plane"></i>
                        )}
                      </div>
                    </button>

                    <p className="career-form-note">
                      <i className="fas fa-lock"></i>
                      Your application will be submitted
                      securely through our online form
                      and delivered to our recruitment
                      email inbox.
                    </p>
                  </div>

                  {/* SUCCESS MESSAGE */}

                  {status === "success" && (
                    <div className="col-12">
                      <div
                        className="alert alert-success rounded-3 mt-3"
                        role="status"
                      >
                        <i className="fas fa-check-circle me-2"></i>

                        Thank you! Your career application
                        has been submitted successfully
                        to Mauliwala Travels.

                        Our recruitment team will review
                        your details and contact you
                        if your profile matches an opportunity.
                      </div>
                    </div>
                  )}

                  {/* ERROR MESSAGE */}

                  {status === "error" && (
                    <div className="col-12">
                      <div
                        className="alert alert-danger rounded-3 mt-3"
                        role="alert"
                      >
                        <i className="fas fa-exclamation-circle me-2"></i>

                        {errorMessage}
                      </div>
                    </div>
                  )}

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
