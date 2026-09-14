


import React from "react";

const FaqSection = ({ title = "Asked Questions", subtitle = "Faq", items = [] }) => {
  return (
    <section className="faq-section">
      <div className="container">
        {/* Title */}
        <div className="faq-title text-center">
          <span className="faq-subtitle">{subtitle}</span>
          <h2 className="faq-heading">{title}</h2>
        </div>

        {/* Accordion */}
        <div className="accordion" id="accordionFaq">
          {items.map((item, index) => {
            const collapseId = `collapse${index}`;
            const headingId = `heading${index}`;
            return (
              <div className="accordion-item faq-item" key={index}>
                <h6 className="accordion-header" id={headingId}>
                  <button
                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={collapseId}
                  >
                    {item.question}
                  </button>
                </h6>
                <div
                  id={collapseId}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
