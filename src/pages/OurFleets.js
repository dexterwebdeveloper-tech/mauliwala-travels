import React from "react";
import "./OurFleets.css";

const OurFleets = () => {
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
                Our Fleets
              </h1>
            </div>
          </div>
        </div>
      </div>

    <section className="mf-fleet-section">

      {/* ================= HEADER ================= */}
      <div className="container">

        <div className="mf-fleet-head">
          <div>
            <span className="mf-fleet-kicker">
              MAULIWALA TRAVELS
            </span>

            <h2>
              Our <span>Fleets</span>
            </h2>

            <p>
              Choose the right vehicle for family tours, corporate travel,
              outstation trips, weddings, events and group journeys from Pune.
            </p>
          </div>

          <div className="mf-fleet-head-badge">
            <i className="fa-solid fa-route"></i>
            <div>
              <strong>Group Travel</strong>
              <span>Comfort for every journey</span>
            </div>
          </div>
        </div>


        {/* ================= FLEET GRID ================= */}
        <div className="row g-4">


          {/* 10 SEATER URBANIA */}
          <div className="col-12 col-md-6 col-xl-4">
            <article className="mf-fleet-card mf-red">

              <div className="mf-fleet-image">
                <img
                  src="/images/Fleet/10-Seater-urbania.jpg"
                  alt="10 Seater Urbania"
                  loading="lazy"
                />

                <span className="mf-category">
                  Urbania
                </span>

                <span className="mf-seat-badge">
                  <i className="fa-solid fa-user-group"></i>
                  10 Seater
                </span>
              </div>

              <div className="mf-fleet-body">

                <div className="mf-fleet-number">
                  01
                </div>

                <h3>10 Seater Urbania</h3>

                <p>
                  A compact premium group vehicle suitable for small family
                  groups, business teams, airport transfers and comfortable
                  outstation travel.
                </p>

                <div className="mf-feature-row">
                  <span>
                    <i className="fa-solid fa-users"></i>
                    Small Groups
                  </span>

                  <span>
                    <i className="fa-solid fa-plane-departure"></i>
                    Airport
                  </span>
                </div>

              </div>
            </article>
          </div>


          {/* 13 SEATER URBANIA */}
          <div className="col-12 col-md-6 col-xl-4">
            <article className="mf-fleet-card mf-dark">

              <div className="mf-fleet-image">
                <img
                  src="/images/Fleet/13-Seater-urbania.jpg"
                  alt="13 Seater Urbania"
                  loading="lazy"
                />

                <span className="mf-category">
                  Urbania
                </span>

                <span className="mf-seat-badge">
                  <i className="fa-solid fa-user-group"></i>
                  13 Seater
                </span>
              </div>

              <div className="mf-fleet-body">

                <div className="mf-fleet-number">
                  02
                </div>

                <h3>13 Seater Urbania</h3>

                <p>
                  Designed for medium-size groups looking for a convenient
                  vehicle for corporate travel, family tours, sightseeing and
                  intercity journeys.
                </p>

                <div className="mf-feature-row">
                  <span>
                    <i className="fa-solid fa-building"></i>
                    Corporate
                  </span>

                  <span>
                    <i className="fa-solid fa-road"></i>
                    Outstation
                  </span>
                </div>

              </div>
            </article>
          </div>


          {/* 17 SEATER TEMPO TRAVELLER */}
          <div className="col-12 col-md-6 col-xl-4">
            <article className="mf-fleet-card mf-cream">

              <div className="mf-fleet-image">
                <img
                  src="/images/Fleet/17-Seater-Tempo-Traveller.jpg"
                  alt="17 Seater Tempo Traveller"
                  loading="lazy"
                />

                <span className="mf-category">
                  Traveller
                </span>

                <span className="mf-seat-badge">
                  <i className="fa-solid fa-user-group"></i>
                  17 Seater
                </span>
              </div>

              <div className="mf-fleet-body">

                <div className="mf-fleet-number">
                  03
                </div>

                <h3>17 Seater Tempo Traveller</h3>

                <p>
                  A practical group travel option for family outings,
                  pilgrimage tours, weekend trips, sightseeing and group
                  journeys from Pune.
                </p>

                <div className="mf-feature-row">
                  <span>
                    <i className="fa-solid fa-people-group"></i>
                    Group Tours
                  </span>

                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                    Pilgrimage
                  </span>
                </div>

              </div>
            </article>
          </div>


          {/* 17 SEATER URBANIA */}
          <div className="col-12 col-md-6 col-xl-4">
            <article className="mf-fleet-card mf-silver">

              <div className="mf-fleet-image">
                <img
                  src="/images/Fleet/17-Seater-urbania.jpg"
                  alt="17 Seater Urbania"
                  loading="lazy"
                />

                <span className="mf-category">
                  Urbania
                </span>

                <span className="mf-seat-badge">
                  <i className="fa-solid fa-user-group"></i>
                  17 Seater
                </span>
              </div>

              <div className="mf-fleet-body">

                <div className="mf-fleet-number">
                  04
                </div>

                <h3>17 Seater Urbania</h3>

                <p>
                  A spacious Urbania option for larger families, corporate
                  teams, wedding groups, events and long-distance group
                  transportation.
                </p>

                <div className="mf-feature-row">
                  <span>
                    <i className="fa-solid fa-briefcase"></i>
                    Business
                  </span>

                  <span>
                    <i className="fa-solid fa-champagne-glasses"></i>
                    Events
                  </span>
                </div>

              </div>
            </article>
          </div>


          {/* 20 SEATER TEMPO TRAVELLER */}
          <div className="col-12 col-md-6 col-xl-4">
            <article className="mf-fleet-card mf-red">

              <div className="mf-fleet-image">
                <img
                  src="/images/Fleet/20-Seater-Tempo-Traveller.jpg"
                  alt="20 Seater Tempo Traveller"
                  loading="lazy"
                />

                <span className="mf-category">
                  Traveller
                </span>

                <span className="mf-seat-badge">
                  <i className="fa-solid fa-user-group"></i>
                  20 Seater
                </span>
              </div>

              <div className="mf-fleet-body">

                <div className="mf-fleet-number">
                  05
                </div>

                <h3>20 Seater Tempo Traveller</h3>

                <p>
                  Suitable for larger tour groups planning outstation travel,
                  picnics, family functions, pilgrimage trips and organized
                  group tours.
                </p>

                <div className="mf-feature-row">
                  <span>
                    <i className="fa-solid fa-mountain-sun"></i>
                    Tours
                  </span>

                  <span>
                    <i className="fa-solid fa-people-roof"></i>
                    Family Groups
                  </span>
                </div>

              </div>
            </article>
          </div>


          {/* 32 SEATER BUS */}
          <div className="col-12 col-md-6 col-xl-4">
            <article className="mf-fleet-card mf-dark">

              <div className="mf-fleet-image">
                <img
                  src="/images/Fleet/32-Seater-Bus.jpg"
                  alt="32 Seater Bus"
                  loading="lazy"
                />

                <span className="mf-category">
                  Bus
                </span>

                <span className="mf-seat-badge">
                  <i className="fa-solid fa-user-group"></i>
                  32 Seater
                </span>
              </div>

              <div className="mf-fleet-body">

                <div className="mf-fleet-number">
                  06
                </div>

                <h3>32 Seater Bus</h3>

                <p>
                  A group transport option for corporate teams, school or
                  college trips, wedding guests, sightseeing and organized
                  tours.
                </p>

                <div className="mf-feature-row">
                  <span>
                    <i className="fa-solid fa-building"></i>
                    Corporate
                  </span>

                  <span>
                    <i className="fa-solid fa-graduation-cap"></i>
                    Group Trips
                  </span>
                </div>

              </div>
            </article>
          </div>


          {/* 40 SEATER BUS */}
          <div className="col-12 col-md-6 col-xl-4">
            <article className="mf-fleet-card mf-cream">

              <div className="mf-fleet-image">
                <img
                  src="/images/Fleet/40-Seater-Bus.jpg"
                  alt="40 Seater Bus"
                  loading="lazy"
                />

                <span className="mf-category">
                  Bus
                </span>

                <span className="mf-seat-badge">
                  <i className="fa-solid fa-user-group"></i>
                  40 Seater
                </span>
              </div>

              <div className="mf-fleet-body">

                <div className="mf-fleet-number">
                  07
                </div>

                <h3>40 Seater Bus</h3>

                <p>
                  Ideal for large groups requiring coordinated transportation
                  for company outings, weddings, tours, events and outstation
                  journeys.
                </p>

                <div className="mf-feature-row">
                  <span>
                    <i className="fa-solid fa-users"></i>
                    Large Groups
                  </span>

                  <span>
                    <i className="fa-solid fa-route"></i>
                    Outstation
                  </span>
                </div>

              </div>
            </article>
          </div>


          {/* 45 SEATER AC BUS */}
          <div className="col-12 col-md-6 col-xl-4">
            <article className="mf-fleet-card mf-silver">

              <div className="mf-fleet-image">
                <img
                  src="/images/Fleet/45-Seater-AC-Bus.jpg"
                  alt="45 Seater AC Bus"
                  loading="lazy"
                />

                <span className="mf-category">
                  AC Bus
                </span>

                <span className="mf-seat-badge">
                  <i className="fa-solid fa-user-group"></i>
                  45 Seater
                </span>
              </div>

              <div className="mf-fleet-body">

                <div className="mf-fleet-number">
                  08
                </div>

                <h3>45 Seater AC Bus</h3>

                <p>
                  A high-capacity AC bus for large group movement including
                  corporate travel, weddings, events, group tours and
                  long-distance journeys.
                </p>

                <div className="mf-feature-row">
                  <span>
                    <i className="fa-solid fa-snowflake"></i>
                    AC Bus
                  </span>

                  <span>
                    <i className="fa-solid fa-people-group"></i>
                    Large Groups
                  </span>
                </div>

              </div>
            </article>
          </div>

        </div>
      </div>
    </section>

</>
  );
};

export default OurFleets;