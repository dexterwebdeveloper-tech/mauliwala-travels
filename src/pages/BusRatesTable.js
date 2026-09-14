


// import React from "react";

// const BusRatesTable = () => {
//   const ratesData = [
//     {
//       seater: "SWIFT DESIRE",
//       mumbai: "4+1",
//       mahabaleshwar: "13",
//       specialPermitNumber: "919695139595",
//       driver: "Extra",
//       parking: "Extra",
//     },
//     {
//       seater: "AURA",
//       mumbai: "4+1",
//       mahabaleshwar: "13",
//       specialPermitNumber: "919695139595",
//       driver: "Extra",
//       parking: "Extra",
//     },
//     {
//       seater: "TOYOTA ETIOS",
//       mumbai: "4+1",
//       mahabaleshwar: "14",
//       specialPermitNumber: "919695139595",
//       driver: "Extra",
//       parking: "Extra",
//     },
//     {
//       seater: "ERITGA",
//       mumbai: "6+1",
//       mahabaleshwar: "15",
//       specialPermitNumber: "919695139595",
//       driver: "Extra",
//       parking: "Extra",
//     },
//     {
//       seater: "INNOVA",
//       mumbai: "6+1",
//       mahabaleshwar: "18",
//       specialPermitNumber: "919695139595",
//       driver: "Extra",
//       parking: "Extra",
//     },
//         {
//       seater: "KIA Carens",
//       mumbai: "6+1/7+1",
//       mahabaleshwar: "17/KM & 18/KM",
//       specialPermitNumber: "919695139595",
//       driver: "Extra",
//       parking: "Extra",
//     },
//     {
//       seater: "SCORPIO",
//       mumbai: "8+1",
//       mahabaleshwar: "18",
//       specialPermitNumber: "919695139595",
//       driver: "Extra",
//       parking: "Extra",
//     },
//     {
//       seater: "INNOVA CRYSTA",
//       mumbai: "6+1",
//       mahabaleshwar: "21",
//       specialPermitNumber: "919695139595",
//       driver: "Extra",
//       parking: "Extra",
//     },
//     {
//       seater: "AUDI",
//       mumbai: "4+1",
//       mahabaleshwar: "ON CALL",
//       specialPermitNumber: "919695139595",
//       driver: "Extra",
//       parking: "Extra",
//     },
//     {
//       seater: "TEMPO TRAVELLER",
//       mumbai: "13/17 SEATER",
//       mahabaleshwar: "ON CALL",
//       specialPermitNumber: "919695139595",
//       driver: "Extra",
//       parking: "Extra",
//     },
//     {
//       seater: "MINI BUS",
//       mumbai: "20 SEATER",
//       mahabaleshwar: "ON CALL",
//       specialPermitNumber: "919695139595",
//       driver: "Extra",
//       parking: "Extra",
//     },
//     {
//       seater: "BUS",
//       mumbai: "32-52",
//       mahabaleshwar: "ON CALL",
//       specialPermitNumber: "919695139595",
//       driver: "Extra",
//       parking: "Extra",
//     },
//     // {
//     //   seater: "TAVERA",
//     //   mumbai: "8+1",
//     //   mahabaleshwar: "18",
//     //   specialPermitNumber: "919695139595",
//     //   driver: "Extra",
//     //   parking: "Extra",
//     // },

//   ];

//   const handleWhatsAppClick = (number, vehicle) => {
//     const message = `Hi, I would like to inquire about the rates for the ${vehicle}.`;

//     const url = `https://wa.me/${number}?text=${encodeURIComponent(
//       message
//     )}`;

//     window.open(url, "_blank");
//   };

//   const formatRate = (rate) => {
//     if (rate === "ON CALL") {
//       return (
//         <span className="onCall">
//           On Call
//         </span>
//       );
//     }

//     if (rate.includes("17/KM & 18/KM")) {
//       return (
//         <>
//           <span className="rupee">₹17</span>
//           <span className="perKm">/KM</span>
//           <span className="rateDivider">&</span>
//           <span className="rupee">₹18</span>
//           <span className="perKm">/KM</span>
//         </>
//       );
//     }

//     return (
//       <>
//         <span className="rupee">₹{rate}</span>
//         <span className="perKm">/KM</span>
//       </>
//     );
//   };

//   return (
//     <>
//       <style>{`
//         .busRatesSection {
//           width: 100%;
//           padding: 45px 15px;
//           background:
//             radial-gradient(circle at top right, rgba(240, 99, 56, 0.12), transparent 30%),
//             radial-gradient(circle at bottom left, rgba(79, 42, 20, 0.10), transparent 30%),
//             #fffaf7;
//           font-family: Arial, sans-serif;
//         }

//         .busRatesContainer {
//           max-width: 1250px;
//           margin: auto;
//         }

//         .ratesHeader {
//           text-align: center;
//           margin-bottom: 30px;
//         }

//         .ratesBadge {
//           display: inline-block;
//           padding: 7px 16px;
//           border-radius: 30px;
//           background: #4F2A14;
//           color: #fff;
//           font-size: 12px;
//           font-weight: 700;
//           letter-spacing: 1px;
//           text-transform: uppercase;
//           margin-bottom: 12px;
//         }

//         .ratesTitle {
//           margin: 0;
//           color: #4F2A14;
//           font-size: 34px;
//           font-weight: 800;
//         }

//         .ratesTitle span {
//           color: #DD1D22;
//         }

//         .ratesSubtitle {
//           margin-top: 8px;
//           color: #806b5e;
//           font-size: 15px;
//         }

//         .tableCard {
//           background: white;
//           border-radius: 22px;
//           overflow: hidden;
//           border: 1px solid rgba(79, 42, 20, 0.12);
//           box-shadow: 0 15px 45px rgba(79, 42, 20, 0.12);
//         }

//         .tableResponsive {
//           width: 100%;
//           overflow-x: auto;
//         }

//         .busTable {
//           width: 100%;
//           min-width: 850px;
//           border-collapse: collapse;
//         }

//         .busTable thead {
//           background: #4F2A14;
//         }

//         .busTable th {
//           padding: 18px 15px;
//           color: white;
//           font-size: 13px;
//           font-weight: 700;
//           text-transform: uppercase;
//           letter-spacing: 0.6px;
//           text-align: center;
//           white-space: nowrap;
//         }

//         .busTable th:first-child {
//           text-align: left;
//           padding-left: 25px;
//         }

//         .busTable tbody tr {
//           transition: all 0.25s ease;
//           border-bottom: 1px solid #f1e6df;
//         }

//         .busTable tbody tr:last-child {
//           border-bottom: none;
//         }

//         .busTable tbody tr:nth-child(even) {
//           background: #fff8f4;
//         }

//         .busTable tbody tr:hover {
//           background: #fff0e9;
//           transform: scale(1.002);
//           box-shadow: 0 4px 15px rgba(240, 99, 56, 0.10);
//         }

//         .busTable td {
//           padding: 15px;
//           text-align: center;
//           color: #4F2A14;
//           font-size: 14px;
//           font-weight: 500;
//         }

//         .busTable td:first-child {
//           text-align: left;
//           padding-left: 25px;
//         }

//         .vehicleName {
//           display: flex;
//           align-items: center;
//           gap: 11px;
//           font-weight: 800;
//           color: #4F2A14;
//         }

//         .vehicleIcon {
//           width: 38px;
//           height: 38px;
//           border-radius: 11px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: linear-gradient(
//             135deg,
//             #DD1D22,
//             #ff8a5c
//           );
//           color: white;
//           font-size: 17px;
//           box-shadow: 0 5px 12px rgba(240, 99, 56, 0.25);
//         }

//         .seaterBadge {
//           display: inline-block;
//           padding: 7px 12px;
//           border-radius: 20px;
//           background: #f8e7dd;
//           color: #4F2A14;
//           font-weight: 700;
//           font-size: 12px;
//         }

//         .rateBox {
//           display: inline-flex;
//           align-items: baseline;
//           gap: 2px;
//           padding: 7px 12px;
//           border-radius: 10px;
//           background: #fff0e9;
//           border: 1px solid #ffd7c7;
//         }

//         .rupee {
//           color: #DD1D22;
//           font-size: 17px;
//           font-weight: 800;
//         }

//         .perKm {
//           color: #4F2A14;
//           font-size: 10px;
//           font-weight: 700;
//         }

//         .rateDivider {
//           color: #b18c78;
//           margin: 0 5px;
//           font-weight: bold;
//         }

//         .onCall {
//           display: inline-block;
//           padding: 8px 14px;
//           border-radius: 20px;
//           background: #4F2A14;
//           color: white;
//           font-size: 11px;
//           font-weight: 800;
//           letter-spacing: 0.5px;
//         }

//         .extraBadge {
//           color: #4F2A14;
//           font-size: 12px;
//           font-weight: 700;
//         }

//         .bookButton {
//           border: none;
//           cursor: pointer;
//           padding: 10px 17px;
//           border-radius: 10px;
//           background: linear-gradient(
//             135deg,
//             #DD1D22,
//             #e84e22
//           );
//           color: white;
//           font-size: 12px;
//           font-weight: 800;
//           transition: all 0.25s ease;
//           box-shadow: 0 6px 15px rgba(240, 99, 56, 0.25);
//         }

//         .bookButton:hover {
//           transform: translateY(-2px);
//           background: #4F2A14;
//           box-shadow: 0 8px 18px rgba(79, 42, 20, 0.25);
//         }

//         .bookButton:active {
//           transform: scale(0.96);
//         }

//         .ratesFooter {
//           display: flex;
//           justify-content: center;
//           gap: 10px;
//           margin-top: 20px;
//           color: #806b5e;
//           font-size: 12px;
//         }

//         .dot {
//           color: #DD1D22;
//           font-weight: bold;
//         }

//         @media (max-width: 768px) {
//           .busRatesSection {
//             padding: 30px 10px;
//           }

//           .ratesTitle {
//             font-size: 27px;
//           }

//           .ratesSubtitle {
//             font-size: 13px;
//           }

//           .tableCard {
//             border-radius: 15px;
//           }

//           .busTable th {
//             padding: 14px 10px;
//           }

//           .busTable td {
//             padding: 12px 10px;
//           }

//           .busTable td:first-child {
//             padding-left: 15px;
//           }

//           .vehicleIcon {
//             width: 32px;
//             height: 32px;
//           }

//           .vehicleName {
//             font-size: 12px;
//           }
//         }
//       `}</style>

//       <section className="busRatesSection">
//         <div className="busRatesContainer">

//           <div className="ratesHeader">
//             <div className="ratesBadge">
//               🚗 Premium Travel
//             </div>

//             <h2 className="ratesTitle">
//               Our <span>Vehicle Rates</span>
//             </h2>

//             <p className="ratesSubtitle">
//               Comfortable & reliable vehicles for your journey
//             </p>
//           </div>

//           <div className="tableCard">
//             <div className="tableResponsive">
//               <table className="busTable">
//                 <thead>
//                   <tr>
//                     <th>Vehicle</th>
//                     <th>Seater</th>
//                     <th>Per KM</th>
//                     <th>Driver Food</th>
//                     <th>Toll / Parking</th>
//                     <th>Book Now</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {ratesData.map((row, index) => (
//                     <tr key={index}>

//                       <td>
//                         <div className="vehicleName">
//                           <div className="vehicleIcon">
//                             🚘
//                           </div>
//                           {row.seater}
//                         </div>
//                       </td>

//                       <td>
//                         <span className="seaterBadge">
//                           {row.mumbai}
//                         </span>
//                       </td>

//                       <td>
//                         <div className="rateBox">
//                           {formatRate(row.mahabaleshwar)}
//                         </div>
//                       </td>

//                       <td>
//                         <span className="extraBadge">
//                           🍴 {row.driver}
//                         </span>
//                       </td>

//                       <td>
//                         <span className="extraBadge">
//                           🅿️ {row.parking}
//                         </span>
//                       </td>

//                       <td>
//                         <button
//                           className="bookButton"
//                           onClick={() =>
//                             handleWhatsAppClick(
//                               row.specialPermitNumber,
//                               row.seater
//                             )
//                           }
//                         >
//                           Book Now ↗
//                         </button>
//                       </td>

//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="ratesFooter">
//             <span>✓ Best Rates</span>
//             <span className="dot">•</span>
//             <span>✓ Comfortable Vehicles</span>
//             <span className="dot">•</span>
//             <span>✓ Easy Booking</span>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default BusRatesTable;


import React from "react";

const BusRatesTable = () => {

  /* ========================================================
     MAULIWALA FLEET
  ======================================================== */

  const ratesData = [
    {
      vehicle: "10 Seater Urbania",
      type: "Urbania",
      seating: "10 Seater",
      rate: "ON CALL",
      number: "919695139595",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "13 Seater Urbania",
      type: "Urbania",
      seating: "13 Seater",
      rate: "ON CALL",
      number: "919695139595",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "17 Seater Urbania",
      type: "Urbania",
      seating: "17 Seater",
      rate: "ON CALL",
      number: "919695139595",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "17 Seater Tempo Traveller",
      type: "Tempo Traveller",
      seating: "17 Seater",
      rate: "ON CALL",
      number: "919695139595",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "20 Seater Tempo Traveller",
      type: "Tempo Traveller",
      seating: "20 Seater",
      rate: "ON CALL",
      number: "919695139595",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "32 Seater Bus",
      type: "Bus",
      seating: "32 Seater",
      rate: "ON CALL",
      number: "919695139595",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "40 Seater Bus",
      type: "Bus",
      seating: "40 Seater",
      rate: "ON CALL",
      number: "919695139595",
      driver: "Extra",
      parking: "Extra",
    },
    {
      vehicle: "45 Seater AC Bus",
      type: "AC Bus",
      seating: "45 Seater",
      rate: "ON CALL",
      number: "919695139595",
      driver: "Extra",
      parking: "Extra",
    },
  ];


  /* ========================================================
     WHATSAPP
  ======================================================== */

  const handleWhatsAppClick = (number, vehicle) => {

    const message =
      `Hello Mauliwala, I would like to know the rental rate and availability for ${vehicle}. Please share the quotation and booking details.`;

    const url =
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };


  /* ========================================================
     VEHICLE ICON
  ======================================================== */

  const getVehicleIcon = (type) => {

    if (
      type === "Bus" ||
      type === "AC Bus"
    ) {
      return (
        <i className="fa-solid fa-bus"></i>
      );
    }

    return (
      <i className="fa-solid fa-van-shuttle"></i>
    );
  };


  return (
    <>

      <style>{`

/* =========================================================
   MAULIWALA FLEET RATE SECTION
========================================================= */

.mauliRatesSection {
  position: relative;

  width: 100%;

  padding:
    65px
    15px;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 5% 10%,
      rgba(227, 30, 36, 0.10),
      transparent 25%
    ),
    radial-gradient(
      circle at 95% 90%,
      rgba(255, 145, 30, 0.09),
      transparent 25%
    ),
    linear-gradient(
      135deg,
      #f5f5f7,
      #fff4f4 50%,
      #fff9f0
    );
}


/* Decorative circle */

.mauliRatesSection::before {
  content: "";

  position: absolute;

  width: 260px;
  height: 260px;

  right: -150px;
  top: -140px;

  border-radius: 50%;

  border:
    45px solid
    rgba(227, 30, 36, 0.035);

  pointer-events: none;
}


/* =========================================================
   CONTAINER
========================================================= */

.mauliRatesContainer {
  position: relative;
  z-index: 2;

  max-width: 1250px;

  margin: auto;
}


/* =========================================================
   HEADER
========================================================= */

.mauliRatesHeader {
  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  gap: 30px;

  margin-bottom: 32px;
}


.mauliRatesHeading {
  max-width: 700px;
}


/* Small badge */

.mauliRatesBadge {
  display: inline-flex;

  align-items: center;

  gap: 7px;

  margin-bottom: 12px;

  padding:
    7px
    13px;

  border-radius: 30px;

  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #ed2931,
      #b80d15
    );

  font-size: 9px;
  font-weight: 900;

  letter-spacing: 1.4px;

  text-transform: uppercase;

  box-shadow:
    0 7px 17px
    rgba(227, 30, 36, 0.20);
}


/* Heading */

.mauliRatesTitle {
  margin:
    0
    0
    9px;

  color: #19191b;

  font-size:
    clamp(
      29px,
      4vw,
      44px
    );

  font-weight: 900;

  line-height: 1.15;
}


.mauliRatesTitle span {
  color: #e31e24;
}


/* Subtitle */

.mauliRatesSubtitle {
  max-width: 650px;

  margin: 0;

  color: #6c6c72;

  font-size: 13px;

  line-height: 1.75;
}


/* =========================================================
   HEADER INFO BOX
========================================================= */

.mauliRateInfo {
  display: flex;

  align-items: center;

  gap: 11px;

  flex: 0 0 auto;

  padding:
    13px
    16px;

  border-radius: 14px;

  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #303034,
      #171719
    );

  box-shadow:
    0 10px 27px
    rgba(20, 20, 25, 0.14);
}


.mauliRateInfoIcon {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border-radius: 11px;

  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #ef2b33,
      #b60b13
    );
}


.mauliRateInfoText {
  display: flex;

  flex-direction: column;
}


.mauliRateInfoText strong {
  font-size: 11px;

  font-weight: 900;
}


.mauliRateInfoText span {
  margin-top: 2px;

  color: #ababaf;

  font-size: 8px;
}


/* =========================================================
   TABLE CARD
========================================================= */

.mauliTableCard {
  position: relative;

  overflow: hidden;

  border-radius: 23px;

  background: #ffffff;

  border:
    1px solid
    rgba(20, 20, 22, 0.07);

  box-shadow:
    0 18px 45px
    rgba(20, 20, 25, 0.10);
}


.mauliTableResponsive {
  width: 100%;

  overflow-x: auto;
}


/* Scrollbar */

.mauliTableResponsive::-webkit-scrollbar {
  height: 6px;
}


.mauliTableResponsive::-webkit-scrollbar-track {
  background: #eeeeef;
}


.mauliTableResponsive::-webkit-scrollbar-thumb {
  border-radius: 20px;

  background: #e31e24;
}


/* =========================================================
   TABLE
========================================================= */

.mauliBusTable {
  width: 100%;

  min-width: 900px;

  border-collapse: collapse;
}


/* =========================================================
   TABLE HEADER
========================================================= */

.mauliBusTable thead {
  background:
    radial-gradient(
      circle at 90% 0%,
      rgba(227, 30, 36, 0.30),
      transparent 25%
    ),
    linear-gradient(
      135deg,
      #303034,
      #171719
    );
}


.mauliBusTable th {
  padding:
    19px
    14px;

  color: #ffffff;

  font-size: 10px;
  font-weight: 900;

  letter-spacing: 0.7px;

  text-align: center;

  text-transform: uppercase;

  white-space: nowrap;
}


.mauliBusTable th:first-child {
  padding-left: 25px;

  text-align: left;
}


/* =========================================================
   ROW
========================================================= */

.mauliBusTable tbody tr {
  position: relative;

  border-bottom:
    1px solid
    #eeeeef;

  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;
}


.mauliBusTable tbody tr:last-child {
  border-bottom: 0;
}


/* Alternating rows */

.mauliBusTable tbody tr:nth-child(4n + 1) {
  background: #fff4f5;
}


.mauliBusTable tbody tr:nth-child(4n + 2) {
  background: #ffffff;
}


.mauliBusTable tbody tr:nth-child(4n + 3) {
  background: #fff9f0;
}


.mauliBusTable tbody tr:nth-child(4n + 4) {
  background: #f3f3f5;
}


.mauliBusTable tbody tr:hover {
  background: #ffe8ea;

  box-shadow:
    inset 5px 0 0
    #e31e24;
}


/* =========================================================
   TABLE CELLS
========================================================= */

.mauliBusTable td {
  padding:
    15px
    14px;

  color: #3d3d42;

  font-size: 12px;
  font-weight: 600;

  text-align: center;
}


.mauliBusTable td:first-child {
  padding-left: 25px;

  text-align: left;
}


/* =========================================================
   VEHICLE
========================================================= */

.mauliVehicle {
  display: flex;

  align-items: center;

  gap: 12px;
}


/* Vehicle icon */

.mauliVehicleIcon {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 42px;
  height: 42px;

  flex: 0 0 42px;

  border-radius: 12px;

  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #ef2b33,
      #b70b13
    );

  font-size: 14px;

  box-shadow:
    0 6px 15px
    rgba(227, 30, 36, 0.19);
}


/* Vehicle info */

.mauliVehicleInfo {
  display: flex;

  flex-direction: column;

  gap: 3px;
}


.mauliVehicleInfo strong {
  color: #202023;

  font-size: 12px;
  font-weight: 900;

  line-height: 1.3;
}


.mauliVehicleInfo small {
  color: #e31e24;

  font-size: 8px;
  font-weight: 800;

  text-transform: uppercase;

  letter-spacing: 0.7px;
}


/* =========================================================
   SEATER BADGE
========================================================= */

.mauliSeater {
  display: inline-flex;

  align-items: center;

  gap: 5px;

  padding:
    7px
    10px;

  border-radius: 20px;

  color: #252528;

  background:
    rgba(227, 30, 36, 0.08);

  border:
    1px solid
    rgba(227, 30, 36, 0.10);

  font-size: 10px;
  font-weight: 900;

  white-space: nowrap;
}


.mauliSeater i {
  color: #e31e24;

  font-size: 9px;
}


/* =========================================================
   RATE
========================================================= */

.mauliOnCall {
  display: inline-flex;

  align-items: center;

  gap: 6px;

  padding:
    8px
    12px;

  border-radius: 9px;

  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #303034,
      #171719
    );

  font-size: 9px;
  font-weight: 900;

  white-space: nowrap;
}


.mauliOnCall i {
  color: #ff5259;
}


/* =========================================================
   EXTRA
========================================================= */

.mauliExtra {
  display: inline-flex;

  align-items: center;

  gap: 6px;

  color: #55555b;

  font-size: 10px;
  font-weight: 800;

  white-space: nowrap;
}


.mauliExtra i {
  color: #e31e24;

  font-size: 10px;
}


/* =========================================================
   BOOK BUTTON
========================================================= */

.mauliBookBtn {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 7px;

  min-width: 105px;

  padding:
    10px
    13px;

  border: 0;

  border-radius: 10px;

  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #ef2c34,
      #b90c14
    );

  font-size: 9px;
  font-weight: 900;

  cursor: pointer;

  box-shadow:
    0 7px 17px
    rgba(227, 30, 36, 0.19);

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}


.mauliBookBtn:hover {
  transform:
    translateY(-2px);

  background:
    linear-gradient(
      135deg,
      #303034,
      #171719
    );

  box-shadow:
    0 10px 22px
    rgba(20, 20, 25, 0.18);
}


/* =========================================================
   FOOTER
========================================================= */

.mauliRatesFooter {
  display: flex;

  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  gap: 10px;

  margin-top: 22px;
}


.mauliRatesFooter span {
  display: inline-flex;

  align-items: center;

  gap: 5px;

  color: #67676d;

  font-size: 10px;
  font-weight: 700;
}


.mauliRatesFooter i {
  color: #e31e24;
}


/* =========================================================
   NOTE
========================================================= */

.mauliRateNote {
  display: flex;

  align-items: flex-start;

  gap: 8px;

  margin-top: 16px;

  padding:
    12px
    15px;

  border-radius: 11px;

  color: #696970;

  background:
    rgba(227, 30, 36, 0.055);

  border:
    1px solid
    rgba(227, 30, 36, 0.08);

  font-size: 9px;

  line-height: 1.6;
}


.mauliRateNote i {
  margin-top: 2px;

  color: #e31e24;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 991px) {

  .mauliRatesSection {
    padding:
      50px
      12px;
  }


  .mauliRatesHeader {
    align-items: flex-start;

    flex-direction: column;

    gap: 18px;
  }


  .mauliRateInfo {
    width: 100%;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 576px) {

  .mauliRatesSection {
    padding:
      38px
      10px;
  }


  .mauliRatesTitle {
    font-size: 27px;
  }


  .mauliRatesSubtitle {
    font-size: 11.5px;
  }


  .mauliTableCard {
    border-radius: 16px;
  }


  .mauliBusTable th {
    padding:
      14px
      10px;

    font-size: 9px;
  }


  .mauliBusTable td {
    padding:
      12px
      10px;
  }


  .mauliBusTable td:first-child,
  .mauliBusTable th:first-child {
    padding-left: 14px;
  }


  .mauliVehicleIcon {
    width: 35px;
    height: 35px;

    flex-basis: 35px;

    border-radius: 9px;
  }


  .mauliVehicleInfo strong {
    font-size: 10px;
  }


  .mauliRatesFooter {
    justify-content: flex-start;
  }

}

      `}</style>


      {/* ===================================================
          SECTION
      =================================================== */}

      <section className="mauliRatesSection">

        <div className="mauliRatesContainer">


          {/* ================= HEADER ================= */}

          <div className="mauliRatesHeader">

            <div className="mauliRatesHeading">

              <span className="mauliRatesBadge">
                <i className="fa-solid fa-bus"></i>
                Mauliwala Fleet
              </span>

              <h2 className="mauliRatesTitle">
                Urbania, Traveller &
                <span> Bus Rental Rates</span>
              </h2>

              <p className="mauliRatesSubtitle">
                Choose from Urbania, Tempo Traveller and buses
                for family tours, corporate travel, weddings,
                events, pilgrimage tours and outstation group trips
                from Pune.
              </p>

            </div>


            <div className="mauliRateInfo">

              <div className="mauliRateInfoIcon">
                <i className="fa-solid fa-headset"></i>
              </div>

              <div className="mauliRateInfoText">
                <strong>Need a Custom Quote?</strong>
                <span>Contact Mauliwala for current rates</span>
              </div>

            </div>

          </div>


          {/* ================= TABLE ================= */}

          <div className="mauliTableCard">

            <div className="mauliTableResponsive">

              <table className="mauliBusTable">

                <thead>
                  <tr>
                    <th>Vehicle</th>
                    <th>Capacity</th>
                    <th>Rental Rate</th>
                    <th>Driver Allowance</th>
                    <th>Toll / Parking</th>
                    <th>Enquiry</th>
                  </tr>
                </thead>


                <tbody>

                  {ratesData.map((row, index) => (

                    <tr key={index}>

                      {/* VEHICLE */}

                      <td>

                        <div className="mauliVehicle">

                          <div className="mauliVehicleIcon">
                            {getVehicleIcon(row.type)}
                          </div>

                          <div className="mauliVehicleInfo">

                            <strong>
                              {row.vehicle}
                            </strong>

                            <small>
                              {row.type}
                            </small>

                          </div>

                        </div>

                      </td>


                      {/* CAPACITY */}

                      <td>

                        <span className="mauliSeater">

                          <i className="fa-solid fa-users"></i>

                          {row.seating}

                        </span>

                      </td>


                      {/* RATE */}

                      <td>

                        <span className="mauliOnCall">

                          <i className="fa-solid fa-phone"></i>

                          On Call

                        </span>

                      </td>


                      {/* DRIVER */}

                      <td>

                        <span className="mauliExtra">

                          <i className="fa-solid fa-user-tie"></i>

                          {row.driver}

                        </span>

                      </td>


                      {/* PARKING */}

                      <td>

                        <span className="mauliExtra">

                          <i className="fa-solid fa-square-parking"></i>

                          {row.parking}

                        </span>

                      </td>


                      {/* BOOK */}

                      <td>

                        <button
                          type="button"
                          className="mauliBookBtn"
                          onClick={() =>
                            handleWhatsAppClick(
                              row.number,
                              row.vehicle
                            )
                          }
                        >

                          <i className="bi bi-whatsapp"></i>

                          Get Quote

                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>


          {/* ================= FOOTER ================= */}

          <div className="mauliRatesFooter">

            <span>
              <i className="fa-solid fa-check"></i>
              Urbania Rentals
            </span>

            <span>•</span>

            <span>
              <i className="fa-solid fa-check"></i>
              Tempo Traveller
            </span>

            <span>•</span>

            <span>
              <i className="fa-solid fa-check"></i>
              Bus Rentals
            </span>

            <span>•</span>

            <span>
              <i className="fa-solid fa-check"></i>
              Group Travel
            </span>

          </div>


          {/* ================= RATE NOTE ================= */}

          <div className="mauliRateNote">

            <i className="fa-solid fa-circle-info"></i>

            <span>
              Rental charges may vary depending on travel date,
              pickup and drop location, trip duration, route,
              vehicle requirement and other applicable trip
              charges. Contact Mauliwala for the current quotation.
            </span>

          </div>

        </div>

      </section>

    </>
  );
};

export default BusRatesTable;