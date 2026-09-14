import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: "fas fa-route",
      title: "Outstation Urbania Bus",
      description:
        "Premium Force Urbania rental from Pune for comfortable outstation journeys, family tours, group trips and long-distance travel.",
      tag: "OUTSTATION",
      className: "service-red",
    },
    {
      icon: "fas fa-map-marked-alt",
      title: "Pune Local Travel",
      description:
        "Book an Urbania in Pune for local sightseeing, business visits, family functions, events and convenient full-day group travel.",
      tag: "LOCAL TRAVEL",
      className: "service-dark",
    },
    {
      icon: "fas fa-plane-departure",
      title: "Airport Pickup & Drop",
      description:
        "Spacious Urbania airport transfers for families, corporate teams and groups travelling to or from Pune Airport.",
      tag: "AIRPORT",
      className: "service-light",
    },
    {
      icon: "fas fa-building",
      title: "Corporate Urbania Rentals",
      description:
        "Professional Urbania rental solutions for corporate meetings, employee movement, conferences, business events and official tours.",
      tag: "CORPORATE",
      className: "service-white",
    },
    {
      icon: "fas fa-umbrella-beach",
      title: "Holiday Packages",
      description:
        "Travel together with customized Urbania holiday packages from Pune for weekend getaways, vacations and multi-day tours.",
      tag: "HOLIDAY",
      className: "service-red-soft",
    },
    {
      icon: "fas fa-ring",
      title: "Wedding Urbania Bus",
      description:
        "Premium group transportation for weddings, guest transfers, family movement, ceremonies and destination wedding travel.",
      tag: "WEDDING",
      className: "service-black-red",
    },
    {
      icon: "fas fa-users",
      title: "Family & Group Tours",
      description:
        "Comfortable Urbania rental for family vacations, friends' trips, reunions, celebrations and private group journeys.",
      tag: "GROUP TRAVEL",
      className: "service-white",
    },
    {
      icon: "fas fa-place-of-worship",
      title: "Pilgrimage & Darshan Tours",
      description:
        "Plan group darshan trips from Pune with spacious Urbania vehicles for temples, pilgrimage destinations and religious tours.",
      tag: "DARSHAN",
      className: "service-dark",
    },
    {
      icon: "fas fa-calendar-check",
      title: "Events & Conferences",
      description:
        "Urbania transportation for exhibitions, corporate events, conferences, social gatherings and organized group movement.",
      tag: "EVENTS",
      className: "service-light",
    },
    {
      icon: "fas fa-mountain",
      title: "Weekend Getaways",
      description:
        "Enjoy weekend travel from Pune with your entire group in one comfortable Urbania for popular nearby destinations.",
      tag: "WEEKEND",
      className: "service-red",
    },
    {
      icon: "fas fa-graduation-cap",
      title: "School & College Trips",
      description:
        "Group transport options for educational visits, college tours, excursions, industrial visits and organized student trips.",
      tag: "EDUCATIONAL",
      className: "service-red-soft",
    },
    {
      icon: "fas fa-shuttle-van",
      title: "Customized Urbania Rental",
      description:
        "Need something different? Tell us your route, group size and travel plan for a customized Urbania rental solution in Pune.",
      tag: "CUSTOM TRIP",
      className: "service-black-red",
    },
  ];

  return (
    <>
      {/* =====================================================
          SERVICES HERO
      ====================================================== */}

      <section className="mauli-services-hero">
        <div className="services-hero-circle circle-one"></div>
        <div className="services-hero-circle circle-two"></div>

        <div className="container">
          <div className="services-hero-content">

            <span className="services-hero-tag">
              <i className="fas fa-shuttle-van"></i>
              MAULIWALA TRAVELS
            </span>

            <h1>
              Urbania On Rent
              <span> in Pune</span>
            </h1>

            <p>
              Premium group transportation for outstation tours,
              local travel, corporate requirements, weddings,
              airport transfers, holidays and special journeys.
            </p>

            <div className="services-hero-actions">

              <a
                href="#our-services"
                className="services-primary-btn"
              >
                Explore Our Services
                <i className="fas fa-arrow-down"></i>
              </a>

              <a
                href="tel:+919049419494"
                className="services-call-btn"
              >
                <span>
                  <i className="fas fa-phone-alt"></i>
                </span>

                <div>
                  <small>BOOKING HELPLINE</small>
                  <strong>+91 9049419494</strong>
                </div>
              </a>

            </div>

          </div>

          <div className="services-hero-stats">

            <div>
              <strong>Urbania</strong>
              <span>Premium Group Travel</span>
            </div>

            <div>
              <strong>Pune</strong>
              <span>Local & Outstation</span>
            </div>

            <div>
              <strong>Group</strong>
              <span>Travel Solutions</span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES GRID
      ====================================================== */}

      <section
        className="mauli-services-section"
        id="our-services"
      >
        <div className="container">

          {/* HEADING */}

          <div className="services-heading">

            <div className="services-heading-left">

              <span className="services-small-heading">
                <span className="services-red-dot"></span>
                WHAT WE OFFER
              </span>

              <h2>
                Travel Services For
                <span> Every Journey</span>
              </h2>

            </div>

            <div className="services-heading-right">

              <p>
                From local Pune travel to long-distance group
                journeys, Mauliwala Travels provides flexible
                Urbania rental solutions for different travel
                requirements.
              </p>

              <div className="services-heading-decoration">
                <span></span>
                <span></span>
              </div>

            </div>

          </div>


          {/* SERVICE CARDS */}

          <div className="row g-4">

            {services.map((service, index) => (

              <div
                className="col-12 col-md-6 col-lg-4"
                key={service.title}
              >

                <article
                  className={`mauli-service-card ${service.className}`}
                >

                  {/* NUMBER */}

                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>


                  {/* TOP */}

                  <div className="service-card-top">

                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>

                    <span className="service-tag">
                      {service.tag}
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div className="service-card-content">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                  </div>


                  {/* BOTTOM */}

                  <div className="service-card-bottom">

                    <a
                      href="#service-enquiry"
                      className="service-explore-link"
                    >
                      Enquire Service

                      <span>
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </a>

                  </div>

                </article>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY CHOOSE SERVICE STRIP
      ====================================================== */}

      <section className="service-benefits-section">
        <div className="container">

          <div className="service-benefits-wrapper">

            <div className="benefits-heading">

              <span>
                WHY TRAVEL WITH US
              </span>

              <h2>
                Built Around Your
                <strong> Group Journey.</strong>
              </h2>

            </div>


            <div className="benefits-grid">

              <div className="service-benefit">

                <div className="benefit-icon">
                  <i className="fas fa-shuttle-van"></i>
                </div>

                <div>
                  <h4>Premium Vehicles</h4>
                  <p>
                    Comfortable group travel options
                    for different journey requirements.
                  </p>
                </div>

              </div>


              <div className="service-benefit">

                <div className="benefit-icon">
                  <i className="fas fa-user-tie"></i>
                </div>

                <div>
                  <h4>Professional Travel</h4>
                  <p>
                    Suitable for families, corporate
                    teams, guests and organized groups.
                  </p>
                </div>

              </div>


              <div className="service-benefit">

                <div className="benefit-icon">
                  <i className="fas fa-route"></i>
                </div>

                <div>
                  <h4>Flexible Trips</h4>
                  <p>
                    Local, airport, outstation and
                    customized travel from Pune.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICE ENQUIRY CTA
      ====================================================== */}

      <section
        className="services-cta-section"
        id="service-enquiry"
      >
        <div className="container">

          <div className="services-cta">

            <div className="cta-watermark">
              URBANIA
            </div>


            <div className="services-cta-content">

              <span>
                PLAN YOUR NEXT JOURNEY
              </span>

              <h2>
                Need an Urbania for Your
                <strong> Next Group Trip?</strong>
              </h2>

              <p>
                Tell us your pickup location, destination,
                travel date and group requirement.
              </p>

            </div>


            <div className="services-cta-actions">

              <a
                href="tel:+919049419494"
                className="cta-call-button"
              >
                <i className="fas fa-phone-alt"></i>

                <div>
                  <small>CALL FOR BOOKING</small>
                  <strong>+91 9049419494</strong>
                </div>
              </a>


              <a
                href="/enquiry"
                className="cta-enquiry-button"
              >
                Send Enquiry
                <i className="fas fa-arrow-right"></i>
              </a>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Services;