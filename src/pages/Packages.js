
import React from 'react';
import BusRatesTable from './BusRatesTable';


const Packages = () => {
  return (
   <div>


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
                Packages
              </h1>
            </div>
          </div>
        </div>
      </div>

 






       


    {/* <CabRatesTable/> */}
<BusRatesTable/>

<div className="rules-guidelines container">
  {/* <ul className="rules-list">
  <li>  Driver Allowance will charge extra.</li>
  <li>  Cab running km is limited to 300 km per day.</li>
  <li>  Time starts from 6:00 AM to 10:00 PM, and the cab must be free at 10:00 PM. After 10:00 PM, extra charges apply. Night charges apply from 12:00 AM to 6:00 AM.</li>
  <li>  Time and km will be calculated from our office to office.</li>
  <li>  Interstate taxes, toll taxes, parking, and service tax are charged as actuals.</li>
  <li>  Extra charges will apply for extra km and hours. Government taxes will be charged as per government rules.</li>
  <li>  The charges quoted above are calculated based on the current fuel prices. Any hike in fuel prices will result in a variation in rates.</li>
</ul> */}
<div className="rules-section">
  <h4 className="rules-title">Rules & Guidelines</h4>

  <ul className="rules-list">
    <li>
      <span className="dot">✔</span>
      Driver allowance will be charged extra.
    </li>

    <li>
      <span className="dot">✔</span>
      Cab running limit is 300 km per day.
    </li>

    <li>
      <span className="dot">✔</span>
      Service time is from <b>6:00 AM to 10:00 PM</b>. After 10:00 PM extra charges apply.
      Night charges apply from 12:00 AM to 6:00 AM.
    </li>

    <li>
      <span className="dot">✔</span>
      Time and distance are calculated from office to office basis.
    </li>

    <li>
      <span className="dot">✔</span>
      Toll tax, parking charges, interstate taxes, and service tax will be charged as actuals.
    </li>

    <li>
      <span className="dot">✔</span>
      Extra km and extra hour charges will apply as per usage.
    </li>

    <li>
      <span className="dot">✔</span>
      Fuel price changes may affect final rates.
    </li>
  </ul>
</div>

</div>

   </div>
  );
};

export default Packages;
