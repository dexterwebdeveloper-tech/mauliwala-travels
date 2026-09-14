

import React from "react";
import "./ContactShowcase.css";

const defaultData = {
  contactNumbers: ["+91 9695139595 "],
  email: "booking@mauliwalatravels.com",
};

const phoneToWhatsApp = (num) => {
  const digits = (num || "").replace(/\D/g, "");
  const withCC = digits.startsWith("91")
    ? digits
    : `91${digits}`;

  return `https://wa.me/${withCC}`;
};

const copy = (text) => {
  navigator.clipboard
    ?.writeText(text)
    .catch(() => {});
};

export default function ContactShowcase({
  keyword = "",
  contactData: incoming,
}) {

  const data = {
    ...defaultData,
    ...(incoming || {}),
    contactNumbers:
      Array.isArray(incoming?.contactNumbers) &&
      incoming.contactNumbers.length
        ? incoming.contactNumbers
        : defaultData.contactNumbers,
  };

  const primary = data.contactNumbers[0] || "";

  const heading =
    keyword && keyword.trim() !== ""
      ? `${keyword} Contact Number`
      : "Sai Shirdi Cab Contact Number";

  return (
    <section className="contactWrap">
      <div className="contactCard">

        <header className="contactHeader">
          <h3>{heading}</h3>

          {/* <span className="openBadge text-white">
            Open 24×7
          </span> */}
        </header>

        <p className="subText">
          For booking inquiries or any assistance,
          please feel free to contact us:
        </p>

        <div className="grid">

          {/* Mobile Number */}
          <div>

            <label className="fieldLabel">
              Mobile Number
            </label>

            <ul className="phones">

              {data.contactNumbers.map(
                (number, index) => (
                  <li
                    key={index}
                    className="phoneRow"
                  >
                    <a
                      href={`tel:${number}`}
                      className="btnCall "
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.11 5.18 2 2 0 0 1 5.09 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.69.6 2.49a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.88 6.88l1.27-1.27a2 2 0 0 1 2.11-.45c.8.28 1.63.48 2.49.6A2 2 0 0 1 22 16.92z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                      </svg>

                      <span>{number}</span>
                    </a>

                    <button
                      className="btnGhost"
                      onClick={() =>
                        copy(number)
                      }
                    >
                      Copy
                    </button>
                  </li>
                )
              )}

            </ul>

            <div className="ctaRow">

              <a
                href={phoneToWhatsApp(primary)}
                target="_blank"
                rel="noopener noreferrer"
                className="btnWhats"
              >
                <i className="bi bi-whatsapp"></i>
                Chat on WhatsApp
              </a>

              <a
                href={`tel:${primary}`}
                className="btnPrimary"
              >
                Call Now
              </a>

            </div>

          </div>

          {/* Email */}
          <div>

            <label className="fieldLabel">
              Email Address
            </label>

            <div className="emailRow">

              <a
                href={`mailto:${data.email}`}
                className="emailLink"
              >
                {data.email}
              </a>

              <button
                className="btnGhost"
                onClick={() =>
                  copy(data.email)
                }
              >
                Copy
              </button>

            </div>

            <ul className="bullets">
              {/* <li>No Hidden Charges</li>
              <li>GPS Enabled Clean Cabs</li>
              <li>Professional Drivers</li> */}
              <li>24×7 Customer Support</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

