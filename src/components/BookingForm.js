














import React from "react";

const BookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const passenger = form.passenger.value;
    const vehicle = form.vehicle.value;
    const end = form.end.value;
    const journeyDate = form.journeyDate.value;
    const returnDate = form.returnDate.value;

    const message = `New Booking Inquiry

---------------------------
• Name: ${name}
• Phone: ${phone}
• Passengers: ${passenger}
• Vehicle Type: ${vehicle}
• To: ${end}
• Journey Date: ${journeyDate}
• Return Date: ${returnDate || "One Way"}
---------------------------`;

    const whatsappNumber = "919695139595";

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="garud-booking-section">
      <div className="container">

        {/* HEADER */}
        <div className="garud-booking-heading">

          <div className="garud-booking-tag">
            <span></span>
            ONLINE BOOKING
            <span></span>
          </div>

          <h2>
            Book Your <strong>Garud Cab</strong>
          </h2>

          {/* <p>
            Enter your trip details and get started with a comfortable,
            safe and reliable journey.
          </p> */}

        </div>


        {/* BOOKING CARD */}
        <div className="garud-booking-card">

          <div className="booking-card-top">

            <div>
              <h3>Plan Your Journey</h3>
              <p>Fill in the details below to request your cab.</p>
            </div>

            <div className="booking-badge">
              <i className="fa fa-car"></i>
              Easy Booking
            </div>

          </div>


          <form onSubmit={handleSubmit}>

            <div className="garud-booking-grid">


              {/* NAME */}
              <div className="garud-field">

                <label>
                  Your Name
                </label>

                <div className="garud-input-box">

                  <div className="garud-field-icon">
                    <i className="fa fa-user"></i>
                  </div>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />

                </div>

              </div>


              {/* PHONE */}
              <div className="garud-field">

                <label>
                  Phone Number
                </label>

                <div className="garud-input-box">

                  <div className="garud-field-icon">
                    <i className="fa fa-phone"></i>
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="10 digit mobile number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                  />

                </div>

              </div>


              {/* PASSENGER */}
              <div className="garud-field">

                <label>
                  Passengers
                </label>

                <div className="garud-input-box">

                  <div className="garud-field-icon">
                    <i className="fa fa-users"></i>
                  </div>

                  <input
                    type="number"
                    name="passenger"
                    placeholder="No. of passengers"
                    min="1"
                    required
                  />

                </div>

              </div>


              {/* VEHICLE */}
              <div className="garud-field">

                <label>
                  Vehicle Type
                </label>

                <div className="garud-input-box">

                  <div className="garud-field-icon">
                    <i className="fa fa-car"></i>
                  </div>

                  <select
                    name="vehicle"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select vehicle
                    </option>

                    <option value="Sedan">Sedan</option>
                    <option value="Innova Crysta">
                      Innova Crysta
                    </option>
                    <option value="Innova Cab">
                      Innova Cab
                    </option>
                    <option value="Ertiga">Ertiga</option>
                    <option value="Kia Carens">
                      Kia Carens
                    </option>
                    <option value="Tata Winger">
                      Tata Winger
                    </option>
                    <option value="Tempo Traveller 9 Seater">
                      Tempo Traveller 9 Seater
                    </option>
                    <option value="Tempo Traveller 13 Seater">
                      Tempo Traveller 13 Seater
                    </option>
                    <option value="Tempo Traveller 17 Seater">
                      Tempo Traveller 17 Seater
                    </option>
                    <option value="Other">Other</option>

                  </select>

                </div>

              </div>


              {/* DESTINATION */}
              <div className="garud-field">

                <label>
                  Destination
                </label>

                <div className="garud-input-box">

                  <div className="garud-field-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>

                  <input
                    type="text"
                    name="end"
                    placeholder="Where are you going?"
                    required
                  />

                </div>

              </div>


              {/* JOURNEY DATE */}
              <div className="garud-field">

                <label>
                  Journey Date
                </label>

                <div className="garud-input-box">

                  <div className="garud-field-icon">
                    <i className="fa fa-calendar"></i>
                  </div>

                  <input
                    type="date"
                    name="journeyDate"
                    min={today}
                    required
                  />

                </div>

              </div>


              {/* RETURN DATE */}
              <div className="garud-field">

                <label>
                  Return Date
                  <small>Optional</small>
                </label>

                <div className="garud-input-box">

                  <div className="garud-field-icon">
                    <i className="fa fa-calendar-check-o"></i>
                  </div>

                  <input
                    type="date"
                    name="returnDate"
                    min={today}
                  />

                </div>

              </div>


            </div>


            {/* SUBMIT */}
            <div className="garud-booking-action">

              <button
                type="submit"
                className="garud-book-btn"
              >

                {/* <span className="whatsapp-icon">
                  <i className="fa fa-whatsapp"></i>
                </span> */}

                <span>Book Now</span>

                <span className="booking-arrow">
                  <i className="fa fa-arrow-right"></i>
                </span>

              </button>

              <div className="booking-note">
                <i className="fa fa-shield"></i>
                Quick & Secure Booking via WhatsApp
              </div>

            </div>

          </form>

        </div>


        {/* BOTTOM BENEFITS */}
        {/* <div className="garud-booking-benefits">

          <div className="booking-benefit">

            <div className="benefit-icon">
              <i className="fa fa-clock-o"></i>
            </div>

            <div>
              <strong>24/7 Support</strong>
              <span>Always available</span>
            </div>

          </div>


          <div className="booking-benefit">

            <div className="benefit-icon">
              <i className="fa fa-shield"></i>
            </div>

            <div>
              <strong>Safe & Reliable</strong>
              <span>Professional drivers</span>
            </div>

          </div>


          <div className="booking-benefit">

            <div className="benefit-icon">
              <i className="fa fa-inr"></i>
            </div>

            <div>
              <strong>Best Prices</strong>
              <span>Transparent fares</span>
            </div>

          </div>

        </div> */}

      </div>
    </section>
  );
};

export default BookingForm;
