import React from "react";
import "./TermsConditions.css";

const TermsConditions = () => {
  const terms = [
    {
      number: "01",
      icon: "fas fa-calendar-check",
      title: "Booking & Confirmation",
      content:
        "All vehicle bookings with Mauliwala Travels are subject to vehicle availability and confirmation. A booking will be considered confirmed only after the required booking details and applicable advance payment have been received and acknowledged by our team.",
    },
    {
      number: "02",
      icon: "fas fa-credit-card",
      title: "Advance Payment",
      content:
        "An advance payment may be required to reserve an Urbania, Tempo Traveller, Mini Bus or other vehicle. The applicable advance amount will be communicated at the time of booking. The remaining balance must be paid as per the agreed booking terms.",
    },
    {
      number: "03",
      icon: "fas fa-tags",
      title: "Fare & Additional Charges",
      content:
        "The quoted fare is based on the trip details provided by the customer. Additional kilometres, extra hours, tolls, parking, permits, interstate taxes, driver allowance or other applicable trip expenses may be charged separately unless specifically included in the quotation.",
    },
    {
      number: "04",
      icon: "fas fa-route",
      title: "Kilometres & Travel Time",
      content:
        "Kilometres and travel time may be calculated according to the agreed garage-to-garage, pickup-to-drop or package terms. Customers should confirm the applicable calculation method before finalizing the booking.",
    },
    {
      number: "05",
      icon: "fas fa-ban",
      title: "Cancellation & Refund",
      content:
        "Cancellation charges may apply depending on the vehicle, journey date, booking amount and time remaining before departure. Any eligible refund will be processed according to the cancellation terms communicated for the particular booking.",
    },
    {
      number: "06",
      icon: "fas fa-clock",
      title: "Waiting & Extra Hours",
      content:
        "Waiting beyond the agreed schedule or use of the vehicle beyond the booked package duration may result in additional charges. Customers are requested to maintain the agreed pickup and travel schedule wherever reasonably possible.",
    },
    {
      number: "07",
      icon: "fas fa-shuttle-van",
      title: "Vehicle Allocation",
      content:
        "We make every reasonable effort to provide the confirmed vehicle or category. In case of an operational issue, breakdown, emergency or other unavoidable circumstance, a suitable replacement vehicle may be arranged subject to availability.",
    },
    {
      number: "08",
      icon: "fas fa-users",
      title: "Passenger Capacity",
      content:
        "The number of passengers must remain within the legally permitted seating capacity of the booked vehicle. Customers must provide an accurate passenger count when booking and must not request the driver to carry passengers beyond the permitted capacity.",
    },
    {
      number: "09",
      icon: "fas fa-suitcase-rolling",
      title: "Luggage",
      content:
        "Customers should inform us in advance about unusually large or excessive luggage. Luggage capacity varies according to vehicle configuration, seating requirement and group size. Unsafe or prohibited items will not be accepted for transportation.",
    },
    {
      number: "10",
      icon: "fas fa-id-card",
      title: "Passenger Information",
      content:
        "Customers may be required to provide valid contact, identity or travel information where necessary for permits, hotel arrangements, interstate travel, security requirements or other lawful operational purposes.",
    },
    {
      number: "11",
      icon: "fas fa-user-shield",
      title: "Passenger Conduct",
      content:
        "Passengers are expected to behave responsibly and avoid any activity that may endanger the driver, vehicle, other passengers or the public. Damage caused to the vehicle by a passenger may be chargeable to the customer responsible for the booking.",
    },
    {
      number: "12",
      icon: "fas fa-road",
      title: "Route & Journey Changes",
      content:
        "Changes to the destination, route, pickup point, travel date, number of days or itinerary after confirmation may change the total fare. Any major modification should be communicated to Mauliwala Travels as early as possible.",
    },
    {
      number: "13",
      icon: "fas fa-cloud-rain",
      title: "Delays & Unavoidable Events",
      content:
        "Travel time can be affected by traffic, weather, road closures, government restrictions, vehicle breakdowns, accidents, strikes, natural events or other circumstances beyond reasonable control. Such situations may affect the planned schedule.",
    },
    {
      number: "14",
      icon: "fas fa-hotel",
      title: "Multi-Day & Outstation Trips",
      content:
        "For multi-day or outstation journeys, applicable driver allowance, accommodation arrangements, permits, state taxes, tolls and parking charges should be confirmed at the time of quotation. Additional itinerary changes may result in revised charges.",
    },
    {
      number: "15",
      icon: "fas fa-plane",
      title: "Airport Pickup & Drop",
      content:
        "Customers using airport transfer services should provide correct flight and terminal information. Waiting charges or revised scheduling may apply where delays significantly exceed the agreed pickup arrangement.",
    },
    {
      number: "16",
      icon: "fas fa-building",
      title: "Corporate & Event Bookings",
      content:
        "Corporate, wedding, event and large group bookings may have customized payment schedules, cancellation conditions, reporting times and vehicle deployment requirements. The specific quotation or written confirmation will apply to such bookings.",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="terms-hero">
        <div className="terms-circle terms-circle-one"></div>
        <div className="terms-circle terms-circle-two"></div>

        <div className="container">
          <div className="terms-hero-content">

            <span className="terms-hero-tag">
              <i className="fas fa-file-contract"></i>
              MAULIWALA TRAVELS
            </span>

            <h1>
              Terms & <span>Conditions</span>
            </h1>

            <p>
              Please read these terms carefully before booking
              an Urbania, Tempo Traveller, Mini Bus or group
              transportation service with Mauliwala Travels.
            </p>

            <div className="terms-hero-info">

              <div>
                <i className="fas fa-shield-alt"></i>

                <span>
                  <small>BOOKING POLICY</small>
                  <strong>Clear & Transparent</strong>
                </span>
              </div>

              <div>
                <i className="fas fa-phone-alt"></i>

                <span>
                  <small>NEED HELP?</small>

                  <a href="tel:+919049419494">
                    +91 9049419494
                  </a>
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="terms-main-section">
        <div className="container">

          <div className="terms-intro">

            <div className="terms-intro-icon">
              <i className="fas fa-info"></i>
            </div>

            <div>
              <span>PLEASE READ BEFORE BOOKING</span>

              <h2>
                Mauliwala Travels Booking Terms
              </h2>

              <p>
                By making or confirming a booking with Mauliwala
                Travels, the customer agrees to the applicable
                booking conditions, payment terms and travel
                requirements communicated for that journey.
                Trip-specific quotations or written confirmations
                may contain additional conditions.
              </p>
            </div>

          </div>


          {/* =================================================
              TERMS
          ================================================== */}

          <div className="terms-list">

            {terms.map((term) => (

              <article
                className="term-card"
                key={term.number}
              >

                <div className="term-number">
                  {term.number}
                </div>


                <div className="term-icon">
                  <i className={term.icon}></i>
                </div>


                <div className="term-content">

                  <h3>
                    {term.title}
                  </h3>

                  <p>
                    {term.content}
                  </p>

                </div>

              </article>

            ))}

          </div>


          {/* =================================================
              IMPORTANT NOTE
          ================================================== */}

          <div className="terms-important">

            <div className="important-icon">
              <i className="fas fa-exclamation"></i>
            </div>

            <div className="important-content">

              <span>IMPORTANT</span>

              <h3>
                Confirm Your Final Trip Details
              </h3>

              <p>
                Before making an advance payment, please confirm
                your vehicle, travel date, pickup point,
                destination, itinerary, fare inclusions,
                exclusions and cancellation terms with our
                booking team.
              </p>

            </div>


            <a
              href="tel:+919049419494"
              className="important-call"
            >
              <i className="fas fa-phone-alt"></i>

              <div>
                <small>BOOKING SUPPORT</small>
                <strong>+91 9049419494</strong>
              </div>
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          PAYMENT / CONFIRMATION
      ====================================================== */}

      <section className="terms-confirm-section">
        <div className="container">

          <div className="terms-confirm-box">

            <div className="confirm-heading">

              <span>BEFORE YOU TRAVEL</span>

              <h2>
                Three Things To
                <strong> Confirm</strong>
              </h2>

            </div>


            <div className="confirm-grid">

              <div className="confirm-item">

                <span className="confirm-number">
                  01
                </span>

                <div className="confirm-icon">
                  <i className="fas fa-shuttle-van"></i>
                </div>

                <h3>Vehicle</h3>

                <p>
                  Confirm your selected vehicle and
                  required passenger capacity.
                </p>

              </div>


              <div className="confirm-item">

                <span className="confirm-number">
                  02
                </span>

                <div className="confirm-icon">
                  <i className="fas fa-map-marked-alt"></i>
                </div>

                <h3>Trip Details</h3>

                <p>
                  Verify pickup, destination, dates
                  and complete travel itinerary.
                </p>

              </div>


              <div className="confirm-item">

                <span className="confirm-number">
                  03
                </span>

                <div className="confirm-icon">
                  <i className="fas fa-receipt"></i>
                </div>

                <h3>Fare Details</h3>

                <p>
                  Check the agreed fare, inclusions,
                  exclusions and payment terms.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT CTA
      ====================================================== */}

      <section className="terms-contact-section">
        <div className="container">

          <div className="terms-contact-box">

            <div className="terms-contact-text">

              <span>
                <i className="fas fa-headset"></i>
                HAVE A QUESTION?
              </span>

              <h2>
                Need Help Understanding
                <strong> Your Booking?</strong>
              </h2>

              <p>
                Contact Mauliwala Travels before confirming
                your journey and our team can explain the
                applicable booking details.
              </p>

            </div>


            <div className="terms-contact-actions">

              <a
                href="tel:+919049419494"
                className="terms-call-btn"
              >
                <span>
                  <i className="fas fa-phone-alt"></i>
                </span>

                <div>
                  <small>CALL US</small>
                  <strong>+91 9049419494</strong>
                </div>
              </a>


              <a
                href="/enquiry"
                className="terms-enquiry-btn"
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

export default TermsConditions;