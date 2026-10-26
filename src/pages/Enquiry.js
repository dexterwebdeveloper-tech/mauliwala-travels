
import React, { useState } from "react";
import "./Enquiry.css";

const WEB3FORMS_ACCESS_KEY =
  "e8e07040-bf64-4a17-b066-746b2a624cf9";

const initialFormData = {
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
};

const vehicleGroups = [
  {
    label: "Force Urbania",
    vehicles: [
      "10 Seater Force Urbania",
      "12 Seater Force Urbania",
      "13 Seater Force Urbania",
      "16 Seater Force Urbania",
      "17 Seater Force Urbania",
    ],
  },
  {
    label: "Tempo Traveller",
    vehicles: [
      "9 Seater Tempo Traveller",
      "12 Seater Tempo Traveller",
      "13 Seater Tempo Traveller",
      "15 Seater Tempo Traveller",
      "17 Seater Tempo Traveller",
      "20 Seater Tempo Traveller",
      "26 Seater Tempo Traveller",
    ],
  },
  {
    label: "Mini Bus",
    vehicles: [
      "20 Seater Mini Bus",
      "25 Seater Mini Bus",
      "27 Seater Mini Bus",
      "30 Seater Mini Bus",
      "32 Seater Mini Bus",
      "35 Seater Mini Bus",
    ],
  },
  {
    label: "Bus",
    vehicles: [
      "40 Seater Bus",
      "45 Seater Bus",
      "50 Seater Bus",
    ],
  },
];

const tripTypes = [
  "Outstation Trip",
  "One Way Trip",
  "Round Trip",
  "Pune Local",
  "Airport Transfer",
  "Family Tour",
  "Group Tour",
  "Corporate Travel",
  "Wedding Travel",
  "School / College Trip",
  "Picnic",
  "Pilgrimage / Darshan",
];

const passengerOptions = [
  "1-4",
  "5-9",
  "10-13",
  "14-17",
  "18-20",
  "21-25",
  "26-30",
  "31-35",
  "36-40",
  "41-50",
  "50+",
];

const getTodayLocal = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const Enquiry = () => {
  const [formData, setFormData] = useState({
    ...initialFormData,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

    if (formData.date < getTodayLocal()) {
      setStatus("error");
      setErrorMessage(
        "Please select today or a future travel date."
      );
      return;
    }

    setLoading(true);
    setStatus("");
    setErrorMessage("");

    const data = new FormData();

    // Web3Forms Access Key
    data.append(
      "access_key",
      WEB3FORMS_ACCESS_KEY
    );

    // Email Subject
    data.append(
      "subject",
      `New Mauliwala Travels Enquiry - ${formData.vehicle}`
    );

    // Sender Name
    data.append(
      "from_name",
      "Mauliwala Travels Website"
    );

    // Customer Details
    data.append("Full Name", formData.fullname.trim());
    data.append("Email", formData.email.trim());
    data.append("Phone", `+91 ${phone}`);

    // Booking Details
    data.append("Vehicle", formData.vehicle);
    data.append("Pickup Location", formData.pickup.trim());
    data.append("Drop Location", formData.drop.trim());
    data.append("Trip Type", formData.triptype);
    data.append("Travel Date", formData.date);
    data.append("Travel Time", formData.time || "Not specified");
    data.append("Passengers", formData.passengers);

    // Additional Information
    data.append(
      "Customer Message",
      formData.message.trim() || "No additional message"
    );

    data.append(
      "Enquiry Source",
      "Mauliwala Travels Website"
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

        setFormData({
          ...initialFormData,
        });
      } else {
        setStatus("error");

        setErrorMessage(
          result.message ||
            "Unable to submit your enquiry. Please try again."
        );
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);

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

            {/* HEADER */}

            <div className="text-center mb-5">
              <span className="small-title text-white">
                MAULIWALA TRAVELS
              </span>

              <h2 className="text-white">
                Get Your Urbania & Mini Bus Quote
              </h2>

              <p className="text-white">
                Planning a family tour, corporate trip,
                wedding, group picnic or outstation
                journey from Pune? Share your travel
                details and get the right Urbania,
                Tempo Traveller or Mini Bus option
                for your group.
              </p>
            </div>

            {/* FORM */}

            <form onSubmit={handleSubmit}>
              <div className="row">

                {/* FULL NAME */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name *"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </div>

                {/* EMAIL */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address *"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                {/* PHONE */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="10-Digit Mobile Number *"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    inputMode="numeric"
                    pattern="[6-9][0-9]{9}"
                    title="Enter a valid 10-digit Indian mobile number"
                    maxLength={10}
                    autoComplete="tel-national"
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
                      Select Vehicle / Seating Capacity *
                    </option>

                    {vehicleGroups.map((group) => (
                      <optgroup
                        key={group.label}
                        label={group.label}
                      >
                        {group.vehicles.map((vehicle) => (
                          <option
                            key={vehicle}
                            value={vehicle}
                          >
                            {vehicle}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                {/* PICKUP */}

                <div className="col-lg-6 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pickup Location in Pune / Maharashtra *"
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
                    placeholder="Destination / Drop Location *"
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
                    {tripTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
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
                    {passengerOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                      >
                        {option === "50+"
                          ? "50+ Passengers"
                          : `${option.replace("-", " - ")} Passengers`}
                      </option>
                    ))}
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
                    min={getTodayLocal()}
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
                    placeholder="Tell us about your trip, destination, number of days, group size or special travel requirements"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={2000}
                  />
                </div>

                {/* SUBMIT BUTTON */}

                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-danger px-5 py-3 rounded-pill fw-bold"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        />
                        Sending Enquiry...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2" />
                        Get Best Travel Quote
                      </>
                    )}
                  </button>
                </div>

                {/* STATUS MESSAGE */}

                <div
                  className="col-12 mt-4 text-center"
                  aria-live="polite"
                >
                  {status === "success" && (
                    <div
                      className="alert alert-success rounded-4"
                      role="status"
                    >
                      <i className="fas fa-check-circle me-2" />

                      Thank you! Your Mauliwala Travels
                      enquiry has been submitted
                      successfully.

                      Our team will contact you shortly
                      with a suitable vehicle option
                      and travel quote.
                    </div>
                  )}

                  {status === "error" && (
                    <div
                      className="alert alert-danger rounded-4"
                      role="alert"
                    >
                      <i className="fas fa-times-circle me-2" />

                      {errorMessage}
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
