import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const policies = [
    {
      number: "01",
      icon: "fas fa-user",
      title: "Information We Collect",
      content:
        "When you contact or book with Mauliwala Travels, we may collect information such as your name, mobile number, email address, pickup location, destination, travel date, passenger details, vehicle preference and other information required to process your travel enquiry or booking.",
    },
    {
      number: "02",
      icon: "fas fa-route",
      title: "Booking & Travel Information",
      content:
        "We may collect journey-related information including pickup and drop locations, itinerary, travel dates, group size, selected vehicle and special travel requirements. This information is used to arrange and manage the requested transportation service.",
    },
    {
      number: "03",
      icon: "fas fa-database",
      title: "How We Use Your Information",
      content:
        "Information provided to us may be used to respond to enquiries, prepare quotations, confirm bookings, coordinate vehicles and drivers, provide customer support, process applicable payments and communicate important information relating to your journey.",
    },
    {
      number: "04",
      icon: "fas fa-phone-alt",
      title: "Booking Communications",
      content:
        "We may contact you by phone, email, SMS, WhatsApp or another communication method provided by you when necessary to respond to an enquiry, confirm a booking, coordinate a journey or provide service-related updates.",
    },
    {
      number: "05",
      icon: "fas fa-credit-card",
      title: "Payment Information",
      content:
        "Where online payment facilities are available, payments may be processed through an integrated third-party payment gateway. Payment information handled directly by the payment provider is subject to that provider's security practices and privacy terms.",
    },
    {
      number: "06",
      icon: "fas fa-share-alt",
      title: "Information Sharing",
      content:
        "We may share information necessary to provide your booked service with relevant drivers, vehicle operators, travel partners or service providers. We do not intend to disclose personal information to unrelated parties except where required to provide the service or comply with applicable legal obligations.",
    },
    {
      number: "07",
      icon: "fas fa-user-tie",
      title: "Drivers & Travel Partners",
      content:
        "Certain booking details such as customer name, contact number, pickup location, destination and journey schedule may be provided to the assigned driver or relevant travel partner so that the booked transportation service can be completed.",
    },
    {
      number: "08",
      icon: "fas fa-cookie-bite",
      title: "Cookies & Website Usage",
      content:
        "Our website may use cookies or similar technologies to support website functionality, understand website usage and improve the visitor experience. Browser settings may allow you to control or disable certain cookies.",
    },
    {
      number: "09",
      icon: "fas fa-chart-bar",
      title: "Analytics",
      content:
        "We may use website analytics tools to understand general website traffic, page performance and visitor interactions. Depending on the tools configured on the website, these services may collect technical information such as browser, device and usage data.",
    },
    {
      number: "10",
      icon: "fas fa-lock",
      title: "Data Security",
      content:
        "We take reasonable administrative and technical measures to protect information under our control. However, no website, internet transmission or electronic storage method can be guaranteed to be completely secure.",
    },
    {
      number: "11",
      icon: "fas fa-clock",
      title: "Data Retention",
      content:
        "Information may be retained for as long as reasonably necessary for booking administration, customer support, accounting, dispute handling, legal obligations and legitimate business record purposes, after which it may be deleted or otherwise handled according to applicable requirements.",
    },
    {
      number: "12",
      icon: "fas fa-link",
      title: "Third-Party Services",
      content:
        "Our website may use or link to third-party services such as payment gateways, maps, analytics tools or communication platforms. These services may operate under their own privacy policies, and Mauliwala Travels does not control their independent privacy practices.",
    },
    {
      number: "13",
      icon: "fas fa-bullhorn",
      title: "Marketing Communications",
      content:
        "Where permitted and appropriate, we may communicate relevant service information or offers using contact details provided by customers. You may request that optional promotional communications be stopped by contacting us.",
    },
    {
      number: "14",
      icon: "fas fa-user-shield",
      title: "Your Privacy Requests",
      content:
        "You may contact Mauliwala Travels regarding personal information you have provided to us, including reasonable requests concerning correction, updating or deletion, subject to applicable legal, accounting and operational retention requirements.",
    },
    {
      number: "15",
      icon: "fas fa-child",
      title: "Children's Information",
      content:
        "Our website and booking services are not intended to knowingly collect unnecessary personal information directly from children. Where minors are travelling as part of a booking, relevant journey details should be provided by a parent, guardian or responsible booking customer.",
    },
    {
      number: "16",
      icon: "fas fa-sync-alt",
      title: "Privacy Policy Updates",
      content:
        "We may revise this Privacy Policy when our website, services, technology or applicable requirements change. Updated terms may be published on this page, and visitors are encouraged to review the current policy when using our website.",
    },
  ];

  return (
    <>
      {/* =====================================================
          PRIVACY HERO
      ====================================================== */}

      <section className="privacy-hero">

        <div className="privacy-circle privacy-circle-one"></div>
        <div className="privacy-circle privacy-circle-two"></div>

        <div className="container">

          <div className="privacy-hero-content">

            <span className="privacy-hero-tag">
              <i className="fas fa-user-shield"></i>
              MAULIWALA 
            </span>

            <h1>
              Privacy <span>Policy</span>
            </h1>

            <p>
              Learn how Mauliwala Travels collects, uses,
              manages and protects information provided
              through our website, enquiries and travel bookings.
            </p>

            <div className="privacy-hero-points">

              <div>
                <span>
                  <i className="fas fa-lock"></i>
                </span>

                <div>
                  <small>YOUR INFORMATION</small>
                  <strong>Handled Responsibly</strong>
                </div>
              </div>

              <div>
                <span>
                  <i className="fas fa-shield-alt"></i>
                </span>

                <div>
                  <small>OUR APPROACH</small>
                  <strong>Privacy Focused</strong>
                </div>
              </div>

              <div>
                <span>
                  <i className="fas fa-headset"></i>
                </span>

                <div>
                  <small>PRIVACY SUPPORT</small>

                  <a href="tel:+919049419494">
                    +91 9049419494
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN PRIVACY SECTION
      ====================================================== */}

      <section className="privacy-main-section">

        <div className="container">

          {/* INTRO */}

          <div className="privacy-intro">

            <div className="privacy-intro-icon">
              <i className="fas fa-shield-alt"></i>
            </div>

            <div className="privacy-intro-content">

              <span>
                YOUR PRIVACY MATTERS
              </span>

              <h2>
                How We Handle Your Information
              </h2>

              <p>
                This Privacy Policy explains how Mauliwala
                Travels may collect and use information when
                you visit our website, submit an enquiry,
                contact our team or make a travel booking.
                The information required may vary according
                to the service you request.
              </p>

            </div>

            <div className="privacy-intro-badge">

              <i className="fas fa-lock"></i>

              <span>
                PRIVACY
                <strong>FIRST</strong>
              </span>

            </div>

          </div>


          {/* =================================================
              PRIVACY POLICY CARDS
          ================================================== */}

          <div className="privacy-policy-grid">

            {policies.map((policy) => (

              <article
                className="privacy-policy-card"
                key={policy.number}
              >

                <span className="privacy-card-number">
                  {policy.number}
                </span>


                <div className="privacy-card-icon">
                  <i className={policy.icon}></i>
                </div>


                <div className="privacy-card-content">

                  <h3>
                    {policy.title}
                  </h3>

                  <p>
                    {policy.content}
                  </p>

                </div>


                <div className="privacy-card-line"></div>

              </article>

            ))}

          </div>


          {/* =================================================
              PRIVACY NOTICE
          ================================================== */}

          <div className="privacy-notice">

            <div className="privacy-notice-icon">
              <i className="fas fa-info"></i>
            </div>

            <div className="privacy-notice-content">

              <span>
                PRIVACY NOTICE
              </span>

              <h3>
                Only Share Information Needed
                For Your Booking
              </h3>

              <p>
                When submitting an enquiry or booking request,
                please provide only the information reasonably
                required for us to understand and arrange your
                journey. Avoid submitting passwords, card PINs,
                OTPs or other unnecessary confidential credentials.
              </p>

            </div>

            <a
              href="mailto:booking@mauliwalatravels.com"
              className="privacy-email-btn"
            >
              <i className="fas fa-envelope"></i>

              <div>
                <small>EMAIL US</small>
                <strong>booking@mauliwalatravels.com</strong>
              </div>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW INFORMATION IS USED
      ====================================================== */}

      <section className="privacy-use-section">

        <div className="container">

          <div className="privacy-use-wrapper">

            <div className="privacy-use-heading">

              <span>
                INFORMATION FLOW
              </span>

              <h2>
                From Enquiry To
                <strong> Your Journey</strong>
              </h2>

              <p>
                Your booking information is primarily used
                to understand your requirement and coordinate
                the requested travel service.
              </p>

            </div>


            <div className="privacy-process">

              {/* 1 */}

              <div className="privacy-process-item">

                <div className="process-number">
                  01
                </div>

                <div className="process-icon">
                  <i className="fas fa-edit"></i>
                </div>

                <h3>
                  You Enquire
                </h3>

                <p>
                  Submit your contact and
                  journey requirements.
                </p>

              </div>


              <div className="privacy-process-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>


              {/* 2 */}

              <div className="privacy-process-item">

                <div className="process-number">
                  02
                </div>

                <div className="process-icon">
                  <i className="fas fa-headset"></i>
                </div>

                <h3>
                  We Coordinate
                </h3>

                <p>
                  Our team uses the details
                  to assist with your booking.
                </p>

              </div>


              <div className="privacy-process-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>


              {/* 3 */}

              <div className="privacy-process-item">

                <div className="process-number">
                  03
                </div>

                <div className="process-icon">
                  <i className="fas fa-shuttle-van"></i>
                </div>

                <h3>
                  Trip Arranged
                </h3>

                <p>
                  Necessary journey information
                  supports service delivery.
                </p>

              </div>


              <div className="privacy-process-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>


              {/* 4 */}

              <div className="privacy-process-item">

                <div className="process-number">
                  04
                </div>

                <div className="process-icon">
                  <i className="fas fa-check"></i>
                </div>

                <h3>
                  Journey Complete
                </h3>

                <p>
                  Relevant records may be retained
                  where reasonably necessary.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRIVACY CONTACT
      ====================================================== */}

      <section className="privacy-contact-section">

        <div className="container">

          <div className="privacy-contact-box">

            <div className="privacy-contact-left">

              <span className="privacy-contact-tag">
                <i className="fas fa-user-shield"></i>
                PRIVACY QUESTIONS
              </span>

              <h2>
                Have a Question About
                <strong> Your Information?</strong>
              </h2>

              <p>
                Contact Mauliwala Travels if you have a
                privacy-related question concerning information
                you have provided through our website or
                booking process.
              </p>

            </div>


            <div className="privacy-contact-right">

              <a
                href="tel:+919049419494"
                className="privacy-contact-link"
              >

                <span className="privacy-contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </span>

                <div>
                  <small>CALL US</small>
                  <strong>+91 9049419494</strong>
                </div>

                <i className="fas fa-arrow-right"></i>

              </a>


              <a
                href="mailto:booking@mauliwalatravels.com"
                className="privacy-contact-link email"
              >

                <span className="privacy-contact-icon">
                  <i className="fas fa-envelope"></i>
                </span>

                <div>
                  <small>EMAIL US</small>
                  <strong>booking@mauliwalatravels.com</strong>
                </div>

                <i className="fas fa-arrow-right"></i>

              </a>

            </div>


            <span className="privacy-contact-watermark">
              PRIVACY
            </span>

          </div>

        </div>

      </section>
    </>
  );
};

export default PrivacyPolicy;