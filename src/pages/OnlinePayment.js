import React, { useMemo, useState } from "react";
import "./OnlinePayment.css";

const OnlinePayment = () => {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    bookingId: "",
    fullname: "",
    phone: "",
    email: "",
    pickup: "",
    destination: "",
    travelDate: "",
    vehicle: "",
    amount: "",
  });

  const paymentMethods = [
    {
      id: "upi",
      icon: "fas fa-mobile-alt",
      title: "UPI",
      subtitle: "Google Pay, PhonePe & UPI",
    },
    {
      id: "card",
      icon: "far fa-credit-card",
      title: "Cards",
      subtitle: "Credit & Debit Cards",
    },
    {
      id: "netbanking",
      icon: "fas fa-university",
      title: "Net Banking",
      subtitle: "All Major Banks",
    },
    {
      id: "wallet",
      icon: "fas fa-wallet",
      title: "Wallet",
      subtitle: "Supported Wallets",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formattedAmount = useMemo(() => {
    const amount = Number(formData.amount || 0);

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  }, [formData.amount]);

  const handlePayment = async (e) => {
    e.preventDefault();

    const amount = Number(formData.amount);

    if (!amount || amount <= 0) {
      alert("Please enter a valid payment amount.");
      return;
    }

    setLoading(true);

    try {
      /*
       =====================================================
       PAYMENT GATEWAY INTEGRATION

       IMPORTANT:
       Do NOT place your gateway Secret Key here.

       Your backend should:
       1. Validate booking ID and amount
       2. Create a payment/order with your payment gateway
       3. Return order/session details
       4. Open the gateway checkout from the frontend
       5. Verify payment on the backend
       6. Generate booking confirmation only after verification

       Example:

       const response = await fetch("/api/payment/create-order", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           ...formData,
           paymentMethod,
         }),
       });

       const order = await response.json();

       // Then launch your payment gateway checkout
       // using the order/session returned by your backend.
       =====================================================
      */

      console.log("Payment Request:", {
        ...formData,
        paymentMethod,
      });

      alert(
        "Payment Gateway API needs to be connected before accepting live payments."
      );
    } catch (error) {
      console.error(error);

      alert(
        "Unable to start payment. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

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
                Online Payment
              </h1>
            </div>
          </div>
        </div>
      </div>

    <section className="mauli-payment-section">
      <div className="payment-bg payment-bg-one"></div>
      <div className="payment-bg payment-bg-two"></div>

      <div className="container">

        {/* ==========================================
            HEADING
        =========================================== */}

        <div className="payment-page-heading text-center">

          <span className="payment-eyebrow">
            <i className="fas fa-shield-alt"></i>
            SECURE ONLINE PAYMENT
          </span>

          <h1>
            Pay For Your <span>Journey</span>
          </h1>

          <p>
            Complete your Mauliwala Travels booking payment
            through your integrated payment gateway.
          </p>

          <div className="payment-trust-row">

            <span>
              <i className="fas fa-lock"></i>
              Secure Checkout
            </span>

            <span>
              <i className="fas fa-check-circle"></i>
              Booking Confirmation
            </span>

            <span>
              <i className="fas fa-receipt"></i>
              Payment Receipt
            </span>

          </div>

        </div>


        {/* ==========================================
            MAIN PAYMENT BOX
        =========================================== */}

        <form
          className="payment-layout"
          onSubmit={handlePayment}
        >

          {/* ========================================
              LEFT SIDE
          ========================================= */}

          <div className="payment-form-panel">

            <div className="payment-panel-top">

              <div className="payment-step-number">
                01
              </div>

              <div>
                <span>BOOKING INFORMATION</span>

                <h2>
                  Enter Your Details
                </h2>
              </div>

            </div>


            <div className="row g-3">

              {/* BOOKING ID */}

              <div className="col-md-6">
                <div className="payment-field">

                  <label>
                    Booking ID *
                  </label>

                  <div className="payment-input">

                    <i className="fas fa-ticket-alt"></i>

                    <input
                      type="text"
                      name="bookingId"
                      placeholder="e.g. MW-1025"
                      value={formData.bookingId}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>
              </div>


              {/* NAME */}

              <div className="col-md-6">
                <div className="payment-field">

                  <label>
                    Customer Name *
                  </label>

                  <div className="payment-input">

                    <i className="fas fa-user"></i>

                    <input
                      type="text"
                      name="fullname"
                      placeholder="Enter full name"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>
              </div>


              {/* MOBILE */}

              <div className="col-md-6">
                <div className="payment-field">

                  <label>
                    Mobile Number *
                  </label>

                  <div className="payment-input">

                    <i className="fas fa-phone-alt"></i>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 Mobile Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>
              </div>


              {/* EMAIL */}

              <div className="col-md-6">
                <div className="payment-field">

                  <label>
                    Email Address
                  </label>

                  <div className="payment-input">

                    <i className="fas fa-envelope"></i>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                  </div>

                </div>
              </div>


              {/* PICKUP */}

              <div className="col-md-6">
                <div className="payment-field">

                  <label>
                    Pickup Location *
                  </label>

                  <div className="payment-input">

                    <i className="fas fa-map-marker-alt"></i>

                    <input
                      type="text"
                      name="pickup"
                      placeholder="Pickup location"
                      value={formData.pickup}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>
              </div>


              {/* DESTINATION */}

              <div className="col-md-6">
                <div className="payment-field">

                  <label>
                    Destination *
                  </label>

                  <div className="payment-input">

                    <i className="fas fa-location-arrow"></i>

                    <input
                      type="text"
                      name="destination"
                      placeholder="Destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>
              </div>


              {/* DATE */}

              <div className="col-md-6">
                <div className="payment-field">

                  <label>
                    Travel Date *
                  </label>

                  <div className="payment-input">

                    <i className="fas fa-calendar-alt"></i>

                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>
              </div>


              {/* VEHICLE */}

              <div className="col-md-6">
                <div className="payment-field">

                  <label>
                    Vehicle *
                  </label>

                  <div className="payment-input">

                    <i className="fas fa-shuttle-van"></i>

                    <select
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select Vehicle
                      </option>

                      <optgroup label="Force Urbania">
                        <option>
                          Force Urbania
                        </option>

                        <option>
                          Luxury Force Urbania
                        </option>
                      </optgroup>

                      <optgroup label="Tempo Traveller">
                        <option>
                          Tempo Traveller
                        </option>

                        <option>
                          Luxury Tempo Traveller
                        </option>
                      </optgroup>

                      <optgroup label="Mini Bus">
                        <option>
                          Mini Bus
                        </option>

                        <option>
                          Luxury Mini Bus
                        </option>
                      </optgroup>

                    </select>

                  </div>

                </div>
              </div>

            </div>


            {/* ========================================
                PAYMENT METHOD
            ========================================= */}

            <div className="payment-method-section">

              <div className="payment-subheading">

                <div className="payment-step-number small">
                  02
                </div>

                <div>
                  <span>PAYMENT METHOD</span>

                  <h3>
                    How Would You Like To Pay?
                  </h3>
                </div>

              </div>


              <div className="payment-method-grid">

                {paymentMethods.map((method) => (

                  <button
                    type="button"
                    key={method.id}
                    className={`payment-method-card ${
                      paymentMethod === method.id
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setPaymentMethod(method.id)
                    }
                  >

                    <div className="method-check">

                      {paymentMethod === method.id && (
                        <i className="fas fa-check"></i>
                      )}

                    </div>


                    <div className="method-icon">
                      <i className={method.icon}></i>
                    </div>


                    <div className="method-content">

                      <strong>
                        {method.title}
                      </strong>

                      <span>
                        {method.subtitle}
                      </span>

                    </div>

                  </button>

                ))}

              </div>

            </div>

          </div>


          {/* ========================================
              RIGHT SIDE - SUMMARY
          ========================================= */}

          <aside className="payment-summary-panel">

            <div className="summary-top">

              <span className="summary-label">
                PAYMENT SUMMARY
              </span>

              <h2>
                Booking Details
              </h2>

              <p>
                Review your journey and payment
                information before proceeding.
              </p>

            </div>


            {/* BOOKING REFERENCE */}

            <div className="summary-booking-id">

              <div className="summary-icon">
                <i className="fas fa-ticket-alt"></i>
              </div>

              <div>
                <span>BOOKING REFERENCE</span>

                <strong>
                  {formData.bookingId ||
                    "Enter Booking ID"}
                </strong>
              </div>

            </div>


            {/* JOURNEY */}

            <div className="summary-route">

              <div className="route-location">

                <span className="route-dot start"></span>

                <div>
                  <small>
                    PICKUP
                  </small>

                  <strong>
                    {formData.pickup || "Pickup Location"}
                  </strong>
                </div>

              </div>


              <div className="route-line">
                <span></span>

                <i className="fas fa-shuttle-van"></i>

                <span></span>
              </div>


              <div className="route-location">

                <span className="route-dot end"></span>

                <div>
                  <small>
                    DESTINATION
                  </small>

                  <strong>
                    {formData.destination ||
                      "Destination"}
                  </strong>
                </div>

              </div>

            </div>


            {/* DETAILS */}

            <div className="summary-details">

              <div>
                <span>
                  <i className="fas fa-calendar-alt"></i>
                  Travel Date
                </span>

                <strong>
                  {formData.travelDate || "Not Selected"}
                </strong>
              </div>


              <div>
                <span>
                  <i className="fas fa-shuttle-van"></i>
                  Vehicle
                </span>

                <strong>
                  {formData.vehicle || "Not Selected"}
                </strong>
              </div>


              <div>
                <span>
                  <i className="fas fa-credit-card"></i>
                  Payment Via
                </span>

                <strong>
                  {
                    paymentMethods.find(
                      (item) =>
                        item.id === paymentMethod
                    )?.title
                  }
                </strong>
              </div>

            </div>


            {/* AMOUNT */}

            <div className="payment-amount-box">

              <label>
                Enter Payment Amount *
              </label>

              <div className="amount-input">

                <span>₹</span>

                <input
                  type="number"
                  name="amount"
                  min="1"
                  step="1"
                  placeholder="0"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* TOTAL */}

            <div className="payment-total">

              <div>
                <span>
                  Total Payable
                </span>

                <small>
                  Secure gateway payment
                </small>
              </div>

              <strong>
                {formattedAmount}
              </strong>

            </div>


            {/* PAY BUTTON */}

            <button
              type="submit"
              className="secure-pay-btn"
              disabled={loading}
            >

              <div>
                <i className="fas fa-lock"></i>

                <span>
                  {loading
                    ? "Processing..."
                    : `Pay ${formattedAmount}`}
                </span>
              </div>

              <span className="pay-arrow">
                <i className="fas fa-arrow-right"></i>
              </span>

            </button>


            {/* SECURITY */}

            <div className="payment-security">

              <i className="fas fa-shield-alt"></i>

              <div>
                <strong>
                  Secure Payment
                </strong>

                <span>
                  Payment details are handled by
                  your integrated payment gateway.
                </span>
              </div>

            </div>


            <div className="accepted-payments">

              <span>
                ACCEPTED PAYMENT METHODS
              </span>

              <div>
                <strong>UPI</strong>
                <strong>VISA</strong>
                <strong>RuPay</strong>
                <strong>NET BANKING</strong>
              </div>

            </div>

          </aside>

        </form>

      </div>
    </section>

</>
  );
};

export default OnlinePayment;