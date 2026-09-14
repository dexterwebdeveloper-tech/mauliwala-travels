import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* =========================================
   Animated Counter Component
========================================= */

const Counter = ({
  end,
  duration = 2000,
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Ease-out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = end * easeOut;

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, end, duration]);

  return (
    <span ref={counterRef} className="sis-counter text-white">
      {count.toFixed(decimals)}
    </span>
  );
};

/* =========================================
   Book Your Ride Component
========================================= */

const BookYourRide = () => {
  const featuresRowOne = [
    "Urbania Rental Service",
    "Mini Bus & Tempo Traveller",
    "Comfortable Group Travel",
  ];

  const featuresRowTwo = [
    "Local & Outstation Trips",
    "Experienced Drivers",
    "Safe & Reliable Transportation",
  ];

  const counters = [
    {
      value: 50,
      suffix: "+",
      label: "Vehicles Available",
      delay: 100,
      decimals: 0,
    },
    {
      value: 1000,
      suffix: "+",
      label: "Happy Customers",
      delay: 300,
      decimals: 0,
    },
    {
      value: 100,
      suffix: " K+",
      label: "Kilometers Covered",
      delay: 500,
      decimals: 0,
    },
    {
      value: 4.9,
      suffix: " /5",
      label: "Customer Rating",
      delay: 700,
      decimals: 1,
    },
  ];

  return (
    <section className="sis-book-your-ride-section">
      <div className="sis-book-your-ride-background section">
        <div className="container">

          {/* =========================================
              Section Header
          ========================================= */}

          <div className="row">

            <div className="col-12">

              <div className="sisf-sis-section-title text-center sis-section-title">

                <span className="sisf-m-subtitle white sis-text-anime-style-3">
                  BOOK YOUR RIDE
                </span>

                <h2 className="sisf-m-title text-white sis-text-anime-style-3">
                  Travel Comfortably With Mauliwala Travels
                </h2>

                <div
                  className="sisf-m-text"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p className="text-white">
                    Book our comfortable Urbania rentals, mini buses, and
                    group travel vehicles for local trips, outstation
                    journeys,
                    <br className="d-none d-md-block" />
                    family tours, corporate travel, weddings, and every
                    special occasion.
                  </p>
                </div>

              </div>

            </div>

            {/* =========================================
                Features Row 1
            ========================================= */}

            <div className="col-12">

              <div className="sisf-sis-listing-items d-flex justify-content-center align-items-center gap-4 flex-wrap mb-3">

                {featuresRowOne.map((feature, index) => (
                  <p
                    className="mb-2"
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 200}
                    key={feature}
                  >
                    <span className="text-white">
                      <i className="fa-solid pe-3 fa-check"></i>
                    </span>

                    <span className="text-white">
                      {feature}
                    </span>
                  </p>
                ))}

              </div>

              {/* =========================================
                  Features Row 2
              ========================================= */}

              <div className="sisf-sis-listing-items d-flex justify-content-center align-items-center gap-4 flex-wrap">

                {featuresRowTwo.map((feature, index) => (
                  <p
                    className="mb-2"
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 200}
                    key={feature}
                  >
                    <span className="text-white">
                      <i className="fa-solid pe-3 fa-check"></i>
                    </span>

                    <span className="text-white">
                      {feature}
                    </span>
                  </p>
                ))}

              </div>

            </div>

            {/* =========================================
                CTA Button
            ========================================= */}

            <div className="col-12 d-flex justify-content-center align-items-center">

              <div
                className="sisf-m-button pt-4 mt-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Link
                  to="/contact"
                  className="sis-btn-default btn-light"
                >
                  Book Your Vehicle Now
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>

            </div>

          </div>

          {/* =========================================
              Counters
          ========================================= */}

          <div className="sis-book-your-ride-counters">

            <div className="row">

              {counters.map((counter) => (
                <div
                  className="col-md-3 col-6"
                  key={counter.label}
                >

                  <div
                    className="sis-counter-item"
                    data-aos="fade-up"
                    data-aos-delay={counter.delay}
                  >

                    {/* Counter Number */}

                    <div className="sis-counter-title mb-3">

                      <h2 className="d-flex align-items-center">

                        <Counter
                          end={counter.value}
                          decimals={counter.decimals}
                          duration={2000}
                        />

                        <span className="sisf-digit-label text-white">
                          {counter.suffix}
                        </span>

                      </h2>

                    </div>

                    {/* Counter Label */}

                    <div className="sis-counter-content">

                      <span className="sisf-content text-white">
                        {counter.label}
                      </span>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BookYourRide;
