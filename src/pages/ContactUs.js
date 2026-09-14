import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
  <>
   <div className="sisf-banner sis-br-radius mt-3 position-relative">
        <div className="banner-img">
          <figure>
            <img
              src="/images/page-banner.jpg"
              alt="Mauliwala Travels Urbania and Mini Bus Rental Pune"
            />
          </figure>
        </div>

        <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
          <div className="sisf-m-inner container">
            <div className="sisf-m-content sisf-content-grid">
              <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </div>
    <section className="mauli-contact-section">
      <div className="container">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mauli-contact-header text-center">
          <span className="mauli-contact-tag">
            CONTACT US
          </span>

          <h2>
            Let's Plan Your <span>Journey</span>
          </h2>

          <p>
            Contact Mauliwala Travels for Force Urbania, Tempo Traveller,
            Mini Bus and group travel bookings in Pune.
          </p>
        </div>


        {/* =========================
            CONTACT CARDS
        ========================== */}
        <div className="row g-4">

          {/* =========================
              MOBILE NUMBERS
          ========================== */}
          <div className="col-md-4">
            <div className="mauli-info-card phone-card">

              <span className="card-bg-number">
                01
              </span>

              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>

              <span className="contact-mini-title">
                CALL US
              </span>

              <h3>
                Booking Helpline
              </h3>

              <div className="contact-phone-list">

                <a href="tel:+919049419494">
                  <i className="fas fa-phone"></i>

                  <span>
                    +91 9049419494
                  </span>
                </a>

                <a href="tel:+919695139595">
                  <i className="fas fa-phone"></i>

                  <span>
                    +91 9695139595
                  </span>
                </a>

              </div>

              <div className="contact-card-footer">
                <span className="footer-dot"></span>

                Urbania & Mini Bus Booking
              </div>

            </div>
          </div>


          {/* =========================
              EMAIL
          ========================== */}
          <div className="col-md-4">
            <div className="mauli-info-card email-card">

              <span className="card-bg-number">
                02
              </span>

              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>

              <span className="contact-mini-title">
                EMAIL US
              </span>

              <h3>
                Send Your Enquiry
              </h3>

              <a
                href="mailto:booking@mauliwalatravels.com"
                className="contact-email"
              >
                booking@mauliwalatravels.com
              </a>

              <p>
                Share your destination, travel date, passenger count
                and preferred vehicle with our booking team.
              </p>

              <div className="contact-card-footer">
                <span className="footer-dot"></span>

                Quick Booking Assistance
              </div>

            </div>
          </div>


          {/* =========================
              ADDRESS
          ========================== */}
          <div className="col-md-4">
            <div className="mauli-info-card address-card">

              <span className="card-bg-number">
                03
              </span>

              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>

              <span className="contact-mini-title">
                VISIT US
              </span>

              <h3>
                Pune Office
              </h3>

              <address>
                <strong>
                  Pune Urbania On Rent
                </strong>

                <span>
                  Tapkir Nagar, MIT Engineering Campus,
                </span>

                <span>
                  Dehu Phata Alandi Devachi,
                </span>

                <span>
                  Pune, Maharashtra - 412105.
                </span>
              </address>

              <div className="contact-card-footer">
                <span className="footer-dot"></span>

                Pune, Maharashtra
              </div>

            </div>
          </div>

        </div>

<div class="map-container mt-5">
    <iframe
        class="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5757.9817211650125!2d73.8899227!3d18.6820154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9001b8c003b%3A0xb16b90e74a55080e!2z4KSV4KWD4KSq4KS-4KSV4KWB4KSC4KScICjgpIngpK7gpYfgpLYg4KSu4KS54KS-4KSw4KS-4KScIOCkpuCktuCksOCkpeClhyk!5e1!3m2!1sen!2sin!4v1789301541475!5m2!1sen!2sin"
        allowfullscreen
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin">
    </iframe>
</div>


        {/* =========================
            BOTTOM CONTACT STRIP
        ========================== */}
        <div className="mauli-contact-strip">

          <div className="strip-content">

            <div className="strip-icon">
              <i className="fas fa-bus"></i>
            </div>

            <div>
              <span>
                NEED A VEHICLE FOR YOUR GROUP?
              </span>

              <h4>
                Book Urbania, Tempo Traveller & Mini Bus in Pune
              </h4>
            </div>

          </div>


          <a
            href="tel:+919049419494"
            className="strip-call-btn"
          >
            <i className="fas fa-phone-alt"></i>

            Call Now
          </a>

        </div>

      </div>
    </section>
    </>
  );
};

export default ContactUs;