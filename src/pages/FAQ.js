import React from "react";

const FAQ = () => {
  const faqs = [
    {
      id: "one",
      question: "How can I book a Force Urbania with Mauliwala Travels?",
      answer:
        "You can contact Mauliwala Travels by phone or through our website to check vehicle availability, discuss your travel requirements, and confirm your Force Urbania rental booking.",
    },
    {
      id: "two",
      question: "Do you provide Force Urbania rental with a driver?",
      answer:
        "Yes, Mauliwala Travels provides Force Urbania rental with professional drivers for family trips, corporate travel, weddings, group tours, airport transfers, and outstation journeys.",
    },
    {
      id: "three",
      question: "Do you provide Urbania rental in Pune?",
      answer:
        "Yes, we provide Force Urbania rental services in Pune for local travel, airport transfers, corporate events, weddings, family functions, sightseeing, and outstation trips.",
    },
    {
      id: "four",
      question: "Can I hire a Force Urbania for outstation travel across Maharashtra?",
      answer:
        "Absolutely. Mauliwala Travels offers Force Urbania rentals from Pune to destinations across Maharashtra, including Mumbai, Nashik, Lonavala, Mahabaleshwar, Kolhapur, Shirdi, Aurangabad, Satara, and other destinations.",
    },
    {
      id: "five",
      question: "Is Force Urbania suitable for family and group travel?",
      answer:
        "Yes. Force Urbania is an excellent choice for families, corporate groups, wedding groups, friends, and large travel parties. It offers comfortable seating and spacious interiors for long-distance journeys.",
    },
    {
      id: "six",
      question: "Can I book Urbania for weddings and special events?",
      answer:
        "Yes, Mauliwala Travels provides Force Urbania rental for weddings, pre-wedding functions, family events, corporate events, religious trips, sightseeing tours, and other special occasions.",
    },
  ];

  return (
    <div className="sis-faq-section sis-comman-bg py-3">
      <div className="container">

        {/* Section Title */}
        <div className="row">
          <div className="col-12">
            <div className="sisf-sis-section-title sis-section-title">

              <span className="sisf-m-subtitle sis-text-anime-style-3">
                FAQs
              </span>

              <h2 className="sisf-m-title sis-text-anime-style-3">
                Frequently Asked Questions About Urbania Rental
              </h2>

              <div className="sisf-m-text">
                <p>
                  Find answers to common questions about Force Urbania rental,
                  booking, chauffeur services, group travel, weddings,
                  airport transfers, and outstation travel with Mauliwala
                  Travels in Pune and across Maharashtra.
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="row">

          {/* Left Side */}
          <div className="col-lg-5">
            <div className="sisf-faq-image-with-content-left position-relative">

              <div className="sisf-faq-image-left">
                <figure className="sis-image-anime sis-reveal">
                  <img
                    src="images/faq-imgg.png"
                    className="w-100 sis-radius"
                    alt="Mauliwala Travels Force Urbania Rental"
                  />
                </figure>
              </div>

              <div
                className="sisf-faq-content-left sis-radius sis-primary-background p-4"
                data-aos="zoom-in-right"
                data-aos-delay="300"
              >

                <div className="sisf-m-title mb-3">
                  <h3 className="text-white">
                    Still Have Questions?
                  </h3>
                </div>

                <div className="sisf-m-text">
                  <p className="text-white">
                    Our Mauliwala Travels team is ready to help you with
                    Urbania bookings, vehicle availability, and travel
                    arrangements.
                  </p>
                </div>

                <div className="sisf-m-button">
                  <a
                    href="contact-us"
                    className="sis-btn-default btn-light"
                  >
                    Contact Mauliwala Travels
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="col-lg-7">

            <div className="sisf-faq-accordian sisf-sis-faq-accordian rounded-0">

              <div
                className="accordion"
                id="sisf-Accordion"
                data-aos="fade-left"
                data-aos-delay="100"
              >

                {faqs.map((faq, index) => (

                  <div
                    className={`accordion-item ${
                      index === 0 ? "mt-0" : ""
                    }`}
                    key={faq.id}
                  >

                    <h2 className="accordion-header sis-comman-title">

                      <button
                        className={`accordion-button ps-4 ${
                          index !== 0 ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#sis-${faq.id}`}
                        aria-expanded={
                          index === 0 ? "true" : "false"
                        }
                        aria-controls={`sis-${faq.id}`}
                      >
                        <span>
                          {index + 1}. {faq.question}
                        </span>
                      </button>

                    </h2>

                    <div
                      id={`sis-${faq.id}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      data-bs-parent="#sisf-Accordion"
                    >

                      <div className="accordion-body">

                        <div className="sisf-e-content-inner">

                          <p className="mb-0 text-white">
                            {faq.answer}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default FAQ;
