import React, { useState } from "react";
import "./Enquiry.css";

const Enquiry = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    vehicle: "",
    pickup: "",
    drop: "",
    triptype: "Outstation Trip",
    date: "",
    time: "",
    passengers: "1-4",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const data = new FormData();

    data.append(
      "access_key",
      "9752018f-9d16-424a-b577-bf1ff3c564af"
    );

    data.append(
      "subject",
      "New Mauliwala Travels Urbania & Mini Bus Enquiry"
    );

    data.append(
      "from_name",
      "Mauliwala Travels Website"
    );

    // Send all form fields
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      console.log(result);

      if (result.success) {
        setStatus("success");

        setFormData({
          fullname: "",
          email: "",
          phone: "",
          vehicle: "",
          pickup: "",
          drop: "",
          triptype: "Outstation Trip",
          date: "",
          time: "",
          passengers: "1-4",
          message: "",
        });
      } else {
        console.log(result);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <>
      {/* =================================
          PAGE BANNER
      ================================= */}

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
                Enquiry
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* =================================
          ENQUIRY SECTION
      ================================= */}

      <section className="enquiry-section py-5">
        <div className="container">
          <div className="enquiry-box">

            {/* =================================
                HEADER
            ================================= */}

            <div className="text-center mb-5">
              <span className="small-title text-white">
                MAULIWALA
              </span>

              <h2 className="text-white">
                Get Your Urbania & Mini Bus Quote
              </h2>

              <p className="text-white">
                Planning a family tour, corporate trip, wedding,
                group picnic or outstation journey from Pune?
                Share your travel details and get the right Urbania,
                Tempo Traveller or Mini Bus option for your group.
              </p>
            </div>

            {/* =================================
                FORM
            ================================= */}

            <form onSubmit={handleSubmit}>
              <div className="row">

                {/* FULL NAME */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* EMAIL */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* PHONE */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* VEHICLE */}

                <div className="col-lg-6 mb-4">
                  <select
                    className="form-select"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select Vehicle / Seating Capacity
                    </option>

                    {/* FORCE URBANIA */}

                    <optgroup label="Force Urbania">
                      <option value="10 Seater Force Urbania">
                        10 Seater Force Urbania
                      </option>

                      <option value="12 Seater Force Urbania">
                        12 Seater Force Urbania
                      </option>

                      <option value="13 Seater Force Urbania">
                        13 Seater Force Urbania
                      </option>

                      <option value="16 Seater Force Urbania">
                        16 Seater Force Urbania
                      </option>

                      <option value="17 Seater Force Urbania">
                        17 Seater Force Urbania
                      </option>
                    </optgroup>

                    {/* TEMPO TRAVELLER */}

                    <optgroup label="Tempo Traveller">
                      <option value="9 Seater Tempo Traveller">
                        9 Seater Tempo Traveller
                      </option>

                      <option value="12 Seater Tempo Traveller">
                        12 Seater Tempo Traveller
                      </option>

                      <option value="13 Seater Tempo Traveller">
                        13 Seater Tempo Traveller
                      </option>

                      <option value="15 Seater Tempo Traveller">
                        15 Seater Tempo Traveller
                      </option>

                      <option value="17 Seater Tempo Traveller">
                        17 Seater Tempo Traveller
                      </option>

                      <option value="20 Seater Tempo Traveller">
                        20 Seater Tempo Traveller
                      </option>

                      <option value="26 Seater Tempo Traveller">
                        26 Seater Tempo Traveller
                      </option>
                    </optgroup>

                    {/* MINI BUS */}

                    <optgroup label="Mini Bus">
                      <option value="20 Seater Mini Bus">
                        20 Seater Mini Bus
                      </option>

                      <option value="25 Seater Mini Bus">
                        25 Seater Mini Bus
                      </option>

                      <option value="27 Seater Mini Bus">
                        27 Seater Mini Bus
                      </option>

                      <option value="30 Seater Mini Bus">
                        30 Seater Mini Bus
                      </option>

                      <option value="32 Seater Mini Bus">
                        32 Seater Mini Bus
                      </option>

                      <option value="35 Seater Mini Bus">
                        35 Seater Mini Bus
                      </option>
                    </optgroup>

                    {/* LARGE BUS */}

                    <optgroup label="Bus">
                      <option value="40 Seater Bus">
                        40 Seater Bus
                      </option>

                      <option value="45 Seater Bus">
                        45 Seater Bus
                      </option>

                      <option value="50 Seater Bus">
                        50 Seater Bus
                      </option>
                    </optgroup>
                  </select>
                </div>

                {/* PICKUP */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pickup Location in Pune / Maharashtra"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* DROP */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Destination / Drop Location"
                    name="drop"
                    value={formData.drop}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* TRIP TYPE */}

                <div className="col-lg-6 mb-4">
                  <select
                    className="form-select"
                    name="triptype"
                    value={formData.triptype}
                    onChange={handleChange}
                  >
                    <option value="Outstation Trip">
                      Outstation Trip
                    </option>

                    <option value="One Way Trip">
                      One Way Trip
                    </option>

                    <option value="Round Trip">
                      Round Trip
                    </option>

                    <option value="Pune Local">
                      Pune Local
                    </option>

                    <option value="Airport Transfer">
                      Airport Transfer
                    </option>

                    <option value="Family Tour">
                      Family Tour
                    </option>

                    <option value="Group Tour">
                      Group Tour
                    </option>

                    <option value="Corporate Travel">
                      Corporate Travel
                    </option>

                    <option value="Wedding Travel">
                      Wedding Travel
                    </option>

                    <option value="School / College Trip">
                      School / College Trip
                    </option>

                    <option value="Picnic">
                      Picnic
                    </option>

                    <option value="Pilgrimage / Darshan">
                      Pilgrimage / Darshan
                    </option>
                  </select>
                </div>

                {/* PASSENGERS */}

                <div className="col-lg-6 mb-4">
                  <select
                    className="form-select"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                  >
                    <option value="1-4">
                      1 - 4 Passengers
                    </option>

                    <option value="5-9">
                      5 - 9 Passengers
                    </option>

                    <option value="10-13">
                      10 - 13 Passengers
                    </option>

                    <option value="14-17">
                      14 - 17 Passengers
                    </option>

                    <option value="18-20">
                      18 - 20 Passengers
                    </option>

                    <option value="21-25">
                      21 - 25 Passengers
                    </option>

                    <option value="26-30">
                      26 - 30 Passengers
                    </option>

                    <option value="31-35">
                      31 - 35 Passengers
                    </option>

                    <option value="36-40">
                      36 - 40 Passengers
                    </option>

                    <option value="41-50">
                      41 - 50 Passengers
                    </option>

                    <option value="50+">
                      50+ Passengers
                    </option>
                  </select>
                </div>

                {/* DATE */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>

                {/* TIME */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="time"
                    className="form-control"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>

                {/* MESSAGE */}

                <div className="col-12 mb-4">
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Tell us about your trip, destination, number of days, required vehicle, group size or any special travel requirements"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* SUBMIT */}

                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-danger px-5 py-3 rounded-pill fw-bold"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Sending Enquiry...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Get Best Travel Quote
                      </>
                    )}
                  </button>
                </div>

                {/* STATUS */}

                <div className="col-12 mt-4 text-center">
                  {status === "success" && (
                    <div className="alert alert-success rounded-4">
                      <i className="fas fa-check-circle me-2"></i>

                      Thank you! Your Mauliwala Travels enquiry has
                      been submitted successfully. Our team will
                      contact you shortly with the suitable vehicle
                      option and travel quote.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="alert alert-danger rounded-4">
                      <i className="fas fa-times-circle me-2"></i>

                      Something went wrong. Please try again or
                      contact Mauliwala Travels directly for your
                      Urbania, Tempo Traveller or Mini Bus booking.
                    </div>
                  )}
                </div>

              </div>
            </form>

          </div>
        </div>
      </section>
    </>
  );
};

export default Enquiry;