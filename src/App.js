
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header';
import HeroSection from './components/HeroSlider';
import Footer from './components/Footer';
import Enquiry from './pages/Enquiry';
import ContactUs from './pages/ContactUs';
import Career from './components/Career';
import Gallery from './pages/Gallery';
import OnlinePayment from './pages/OnlinePayment';
import Services from './pages/Services';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './components/AboutSection';
import Urbaniaonrentpune from './pages/Urbania On Rent Pune';
import ScrollToTop from './components/ScrollToTop';
import Urbaniaonrentinpimprichichwad from './pages/Urbania On Rent in Pimpri Chinchwad';
import Urbaniahireforcorporateevets from './pages/Urbania Hire for Corporate Events in Pune';
import Oneseavenseaterurbaniaonrentinpune from './pages/17 Seater Urbania on Rent in Pune';
import Onefourseaterurbaniaonrent from './pages/14 Seater Urbania on Rent in Pune';
import Urbaniaonrentinkharadi from './pages/Urbania on Rent in Kharadi';
import Urbaniaonrentinhadapsar from './pages/Urbania on Rent in Hadapsar';
import Urbaniaonrentinkothrud from './pages/Urbania on Rent in Kothrud';
import Urbaniaonrentinbibwewadi from './pages/Urbania On Rent in Bibwewadi';
import Urbaniaonrentinkaregaon from './pages/Urbania on Rent in Koregaon Park';
import Urbaniaonrentinkalyaninagar from './pages/Urbania On Rent in Kalyani Nagar';
import Urbaniaonrentinmundhwa from './pages/Urbania On Rent in Mundhwa Pune';
import Urbaniabusonrentinbaner from './pages/Urbania Bus On Rent in Baner';
import Urbaniaacbusonrentinaundh from './pages/Urbania Ac Bus On Rent in Aundh ';
import Urbaniabusonrentinhinjewadi from './pages/Urbania Bus On Rent in Hinjewadi ';
import Urbaniaonrentinbhosarii from './pages/Urbania on Rent in Bhosari';
import Urbaniaonrentinpunestation from './pages/Urbania on Rent in Pune Station';
import Urbaniaonrentinchakan from './pages/Urbania On Rent in Chakan';
import Urbaniaonrentinmoshi from './pages/Urbania On Rent in Moshi';
import Urbaniaonrentincharholibadruk from './pages/Urbania On Rent in Charholi Budruk';
import Urbaniaonrentinnigdipradhikaran from './pages/Urbania On Rent in Nigdi Pradhikaran';
import Urbaniaonrentinlohegaon from './pages/Urbania On Rent in Lohegaon';
import Urbaniaonrentinwagholi from './pages/Urbania On Rent in Wagholi';
import Urbaniarentalserviceinpune from './pages/Urbania Rental Service in Pune';
import Besturbaniaonrentinpune from './pages/Best Urbania on Rent in Pune';
import Affordableurbaniaonrentpune from './pages/Affordable Urbania on Rent Pune';
import Acurbaniaonrentpune from './pages/AC Urbania on Rent Pune';
import Luxuryurbaniaonrentpune from './pages/Luxury Urbania on Rent Pune';
import Nonacurbaniaonrentpune from './pages/Non AC Urbania on Rent Pune';
import Urbaniaforoutstaioninpune from './pages/Urbania for Outstation in Pune';
import Urbaniaforpunetoshirdionrent from './pages/Urbania for Pune to Shirdi On Rent';
import Urbaniaforpunetonashikrent from './pages/Urbania for Pune to Nashik On Rent';
import Urbaniaforpunetomahabaleshwarhire from './pages/Urbania for Pune to Mahabaleshwar Hire';
import Urbaniaforpunetogoatour from './pages/Urbania for Pune to Goa Tour Package';
import Urbaniaforpunetokolhapuronrent from './pages/Urbania for Pune to Kolhapur On Rent';
import Urbaniaforpunetoaurangabadonrent from './pages/Urbania for Pune to Aurangabad on Rent';
import Punetolonavalaurbaniaonrent from './pages/Pune to Lonavala Urbania On Rent';
import Urbaniaonrentforroundtrip from './pages/Urbania On Rent for Round Trip Pune';
import Urbanistravellerrentinpune from './pages/Urbania Traveller Rent in Pune';
import Urbaniamonthlycorporatehirepune from './pages/Urbania Monthly Corporate Hire Pune';
import Coorporateurbaniarentalservvicepune from './pages/Corporate Urbania Rental Services Pune';
import Urabaniahireforpicnicinpune from './pages/Urbania Hire for Picnic in Pune';
import Urbaniahireforlocaltrippune from './pages/Urbania Hire for Local Trip in Pune';
import Urbaniaonrentforpuneairport from './pages/Urbania On Rent for Pune Airport';
import Punetomumbaiurbaniaonrent from './pages/Pune to Mumbai Urbania On Rent';
import Urbaniaforweddingevepunentin from './pages/Urbania for Wedding Events in Pune';
import Urbaniaperkmrateinpune from './pages/Urbania per km rate in Pune';
import Cheapesturbaniarentalserviceinpune from './pages/Cheapest Urbania Rental Service in Pune';
import Acurbaniaonrentinakurdi from './pages/AC Urbania on Rent in Akurdi Pune';
import Urbaniaonrentinwakad from './pages/Urbania On Rent in Wakad';
import Luxuryurbaniaonrentinpashan from './pages/Luxury Urbania On Rent in Pashan';
import Urbaniaonrentinbalewadi from './pages/Urbania On Rent in Balewadi';
import Urbaniaonrentinsangvi from './pages/Urbania On Rent in Sangvi';
import Urbaniabushireinchikhali from './pages/Urbania Bus Hire in Chikhali';
import Urbaniaonrentintalawade from './pages/Urbania On Rent in Talawade MIDC';
import Urbaniaonrentinpurandarairport from './pages/Urbania On Rent in Purandar Airport';
import Urbaniaonrentinravetpunawala from './pages/Urbania on rent in Ravet & Punawale';
import Urbaniaonrentinrajgurunagar from './pages/Urbania On Rent in Rajgurunagar Khed';
import Urbaniabusonrentjunnnarpune from './pages/Urbania Bus On Rent in Junnar Pune';
import Urbaniaonambegaonpune from './pages/Urbania on Ambegaon Pune';
import Urbaniabusonrentinshirur from './pages/Urbania Bus On Rent in Shirur';
import Urbaniabusonrentinmavel from './pages/Urbania Bus Hire in Maval';
import Urbaniaonrentinmulshi from './pages/Urbania On Rent in Mulshi';
import Urbaniaonrentindaund from './pages/Urbania On Rent in Daund';
import Urbaniaonrentinbhor from './pages/Urbania On Rent in Bhor';
import Urbaniaonrentinpurandar from './pages/Urbania On Rent in Purandar';
import Urbaniaonrentininderpur from './pages/Urbania On Rent in Indapur';
import Urbaniaonrentinvelhe from './pages/Urbania On Rent in Velhe';
import Urbaniaonrentinmumbai from './pages/Urbania On Rent in Mumbai';
import Forceurbaniaonrentinnavimumbai from './pages/Force Urbania On Rent in Navi Mumbai';
import Luxuryurbaniabushireinthane from './pages/Luxury urbania Bus Hire in Thane';
import Urbaniabusonrentinmumbaiairport from './pages/Urbania Bus On Rent in Mumbai Airport';
import Luxuryurbaniaonrentinlonavala from './pages/Luxury Urbania On Rent in Lonavala';
import Urbaniaonrentinkolhapur from './pages/Urbania On Rent in Kolhapur';
import Urbaniabusonrentinsangli from './pages/Urbania Bus On Rent in Sangli';
import Urbaniabusonrentinsolapur from './pages/Urbania Bus On Rent in Solapur';
import Urbaniabusonrentshirdi from './pages/Urbania Bus On Rent in Shirdi';
import Luxuryurbaniabusrentalsinnashik from './pages/Luxury Urbania Bus Rentals in Nashik';
import Luxuryurbaniarentalinahmedabad from './pages/Luxury Urbania Rentals in Ahmednagar';
import Acluxuryurbaniahireinmahabaleshwar from './pages/Ac Luxury Urbania Hire in Mahabaleshwar';
import Punetokonkandarshan from './pages/Pune to Konkan Darshan Urbania Bus Package';
import Minibusonrentinpune from './pages/Mini Bus On Rent in Pune';
import Minibusrentalinpimprichichwad from './pages/Mini Bus On Rental in Pimpri Chinchwad';
import Onefiveseateracminibusonrent from './pages/15 Seater Ac Mini Luxury Bus On Rent Pune';
import Forceurbaniaonrentinsatara from './pages/Force Urbania On Rent in Satara';
import Forceurbaniaonrentinkatraj from './pages/Force Urbania on Rent in Katraj Pune';
import Forceurbniaonrentinshivajinagarpune from './pages/Force Urbania On Rent in Shivaji Nagar Pune';
import Urbaniaonrentforjyotilingadarshan from './pages/Urbania on Rent for Jyotirlinga Darshan from Pune';
import Punetoujjainurbaniabushire from './pages/Pune to Ujjain Urbania Bus Hire';
import Punetoashtavinayakdarshan from './pages/Pune to Ashtavinayak Darshan Urbania Bus';
import Punetonashikurbaniabushire from './pages/Pune to Nashik Urbania Bus Hire';
import Urbaniatouristbusonrentinpune from './pages/Urbania Tourist Bus On Rent in Pune';
import Punetopandharpururbaniatour from './pages/Pune to Pandharpur Urbania Tour Package';
import Urbaniabusonrentinnashik from './pages/Urbania Bus On Rent in Nashik';
import Punetoayodhyaurbaniabusonrent from './pages/Pune to Ayodhya Urbania Bus On Rent ';
import Punetobhimashankarurbaniahire from './pages/Pune to Bhimashankar Urbania Hire';
import Punetohyderabadurbaniaonrent from './pages/Pune to Hyderabad Urbania On Rent';
import Punetobangloreurbaniarental from './pages/Pune to Bangalore Urbania Rental Service';
import Punetorajsthanurbaniarentalservice from './pages/Pune to Rajasthan Urbania Rental Service';
import Busonrentpune from './pages/Bus On Rent Pune';
import Urbaniaonrentinaurangabad from './pages/Urbania On Rent in Aurangabad';
import Bushireforweddinginpune from './pages/Bus Hire for Wedding in Pune';
import Urbaniaonrentpuneforwedding from './pages/Urbania on Rent Pune for Wedding Functions';
import Punetooutstationurbaniaonrent from './pages/Pune to Outstation Urbania on Rent';
import Urbaniabusonrentinpunawale from './pages/Urbania Bus on Rent in Punawale';
import Urbaniahireinpimpriforcorporate from './pages/Urbania Hire in Pimpri for Corporate Travel';
import Urbaniaonrentinpunecontact from './pages/Urbania on Rent in Pune Contact Number';
import Busrentalserviceinsaswadpune from './pages/Bus Rental Service in Saswad Pune';
import Punetogoaurbaniaonrent from './pages/Pune to Goa Urbania On Rent';
import Urbaniaonrentinalandipune from './pages/Urbania On Rent in Alandi Pune';
import Urbaniaonrentindighi from './pages/Urbania On Rent in Dighi';
import Urbaniaonrentinranjangaonmidc from './pages/Urbania On Rent in Ranjangaon Midc';
import Urbaniaonrentinchakanmidc from './pages/Urbania On Rent in Chakan MIDC';
import Urbaniaonrentinpimpri from './pages/Urbania on Rent in Pimpri';
import Urbaniaonrentinwadmukhwadi from './pages/Urbania On Rent in Wadmukhwadi';
import Urbaniaonrentinravetpcmc from './pages/Urbania On Rent in Ravet PCMC';
import Urbaniaonrentintalwade from './pages/Urbania On Rent in Talwade';
import Urbaniaonrentinrahatani from './pages/Urbania On Rent in Rahatani';
import Urbaniaonrentinkalewadi from './pages/Urbania On Rent in Kalewadi';
import Urbaniaonrentindapoli from './pages/Urbania On Rent in Dapodi';
import Urbaniaonrentinkasarwadi from './pages/Urbania On Rent in Kasarwadi';
import Urbaniaonrentintalegaon from './pages/Urbania On Rent in Talegaon Dabhade';
import OurFleets from './pages/OurFleets';
import Packages from './pages/Packages';
import ContactButtons from './components/ContactButtons';

function App() {
  return (
    <Router>
      <ContactButtons />
      <ScrollToTop />
<Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-fleet" element={<OurFleets />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-condition" element={<TermsConditions />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/Online-Payment" element={<OnlinePayment />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/urbania-on-rent-pune" element={<Urbaniaonrentpune />} />

<Route path="/urbania-on-rent-in-pimpri-chinchwad" element={<Urbaniaonrentinpimprichichwad />} />
<Route path="/urbania-hire-for-corporate-events-in-pune" element={<Urbaniahireforcorporateevets />} />
<Route path="/17-seater-urbania-on-rent-in-pune" element={<Oneseavenseaterurbaniaonrentinpune />} />
<Route path="/14-seater-urbania-on-rent-in-pune" element={<Onefourseaterurbaniaonrent />} />
<Route path="/urbania-on-rent-in-kharadi" element={<Urbaniaonrentinkharadi />} />
<Route path="/urbania-on-rent-in-hadapsar" element={<Urbaniaonrentinhadapsar />} />
<Route path="/urbania-on-rent-in-kothrud" element={<Urbaniaonrentinkothrud />} />
<Route path="/urbania-on-rent-in-bibwewadi" element={<Urbaniaonrentinbibwewadi />} />
<Route path="/urbania-on-rent-in-koregaon-park" element={<Urbaniaonrentinkaregaon />} />
<Route path="/urbania-on-rent-in-kalyani-nagar" element={<Urbaniaonrentinkalyaninagar />} />
<Route path="/urbania-on-rent-in-mundhwa-pune" element={<Urbaniaonrentinmundhwa />} />
<Route path="/urbania-bus-on-rent-in-baner" element={<Urbaniabusonrentinbaner />} />
<Route path="/urbania-ac-bus-on-rent-in-aundh" element={<Urbaniaacbusonrentinaundh />} />
<Route path="/urbania-bus-on-rent-in-hinjewadi" element={<Urbaniabusonrentinhinjewadi />} />
<Route path="/urbania-on-rent-in-bhosari" element={<Urbaniaonrentinbhosarii />} />
<Route path="/urbania-on-rent-in-pune-station" element={<Urbaniaonrentinpunestation />} />
<Route path="/urbania-on-rent-in-chakan" element={<Urbaniaonrentinchakan />} />
<Route path="/urbania-on-rent-in-moshi" element={<Urbaniaonrentinmoshi />} />
<Route path="/urbania-on-rent-in-charholi-budruk" element={<Urbaniaonrentincharholibadruk />} />
<Route path="/urbania-on-rent-in-nigdi-pradhikaran" element={<Urbaniaonrentinnigdipradhikaran />} />
<Route path="/urbania-on-rent-in-lohegaon" element={<Urbaniaonrentinlohegaon />} />
<Route path="/urbania-on-rent-in-wagholi" element={<Urbaniaonrentinwagholi />} />
<Route path="/urbania-rental-service-in-pune" element={<Urbaniarentalserviceinpune />} />
<Route path="/best-urbania-on-rent-in-pune" element={<Besturbaniaonrentinpune />} />
<Route path="/affordable-urbania-on-rent-pune" element={<Affordableurbaniaonrentpune />} />
<Route path="/ac-urbania-on-rent-pune" element={<Acurbaniaonrentpune />} />
<Route path="/luxury-urbania-on-rent-pune" element={<Luxuryurbaniaonrentpune />} />
<Route path="/non-ac-urbania-on-rent-pune" element={<Nonacurbaniaonrentpune />} />
<Route path="/urbania-for-outstation-in-pune" element={<Urbaniaforoutstaioninpune />} />
<Route path="/urbania-for-pune-to-shirdi-on-rent" element={<Urbaniaforpunetoshirdionrent />} />
<Route path="/urbania-for-pune-to-nashik-on-rent" element={<Urbaniaforpunetonashikrent />} />
<Route path="/urbania-for-pune-to-mahabaleshwar-hire" element={<Urbaniaforpunetomahabaleshwarhire />} />
<Route path="/urbania-for-pune-to-goa-tour-package" element={<Urbaniaforpunetogoatour />} />
<Route path="/urbania-for-pune-to-kolhapur-on-rent" element={<Urbaniaforpunetokolhapuronrent />} />
<Route path="/urbania-for-pune-to-aurangabad-on-rent" element={<Urbaniaforpunetoaurangabadonrent />} />
<Route path="/pune-to-lonavala-urbania-on-rent" element={<Punetolonavalaurbaniaonrent />} />
<Route path="/urbania-on-rent-for-round-trip-pune" element={<Urbaniaonrentforroundtrip />} />
<Route path="/urbania-traveller-rent-in-pune" element={<Urbanistravellerrentinpune />} />
<Route path="/urbania-monthly-corporate-hire-pune" element={<Urbaniamonthlycorporatehirepune />} />
<Route path="/corporate-urbania-rental-services-pune" element={<Coorporateurbaniarentalservvicepune />} />
<Route path="/urbania-hire-for-picnic-in-pune" element={<Urabaniahireforpicnicinpune />} />
<Route path="/urbania-hire-for-local-trip-in-pune" element={<Urbaniahireforlocaltrippune />} />
<Route path="/urbania-on-rent-for-pune-airport" element={<Urbaniaonrentforpuneairport />} />

<Route path="/pune-to-mumbai-urbania-on-rent" element={<Punetomumbaiurbaniaonrent />} />
<Route path="/urbania-for-wedding-events-in-pune" element={<Urbaniaforweddingevepunentin />} />
<Route path="/urbania-per-km-rate-in-pune" element={<Urbaniaperkmrateinpune />} />
<Route path="/cheapest-urbania-rental-service-in-pune" element={<Cheapesturbaniarentalserviceinpune />} />
<Route path="/ac-urbania-on-rent-in-akurdi-pune" element={<Acurbaniaonrentinakurdi />} />
<Route path="/urbania-on-rent-in-wakad" element={<Urbaniaonrentinwakad />} />
<Route path="/luxury-urbania-on-rent-in-pashan" element={<Luxuryurbaniaonrentinpashan />} />
<Route path="/urbania-on-rent-in-balewadi" element={<Urbaniaonrentinbalewadi />} />
<Route path="/urbania-on-rent-in-sangvi" element={<Urbaniaonrentinsangvi />} />
<Route path="/urbania-bus-hire-in-chikhali" element={<Urbaniabushireinchikhali />} />
<Route path="/urbania-on-rent-in-talawade-midc" element={<Urbaniaonrentintalawade />} />
<Route path="/urbania-on-rent-in-purandar-airport" element={<Urbaniaonrentinpurandarairport />} />
<Route path="/urbania-on-rent-in-ravet-punawale" element={<Urbaniaonrentinravetpunawala />} />
<Route path="/urbania-on-rent-in-rajgurunagar-khed" element={<Urbaniaonrentinrajgurunagar />} />
<Route path="/urbania-bus-on-rent-in-junnar-pune" element={<Urbaniabusonrentjunnnarpune />} />
<Route path="/urbania-on-rent-in-ambegaon-pune" element={<Urbaniaonambegaonpune />} />
<Route path="/urbania-bus-on-rent-in-shirur" element={<Urbaniabusonrentinshirur />} />
<Route path="/urbania-bus-hire-in-maval" element={<Urbaniabusonrentinmavel />} />
<Route path="/urbania-on-rent-in-mulshi" element={<Urbaniaonrentinmulshi />} />
<Route path="/urbania-on-rent-in-daund" element={<Urbaniaonrentindaund />} />
<Route path="/urbania-on-rent-in-bhor" element={<Urbaniaonrentinbhor />} />
<Route path="/urbania-on-rent-in-purandar" element={<Urbaniaonrentinpurandar />} />
<Route path="/urbania-on-rent-in-indapur" element={<Urbaniaonrentininderpur />} />
<Route path="/urbania-on-rent-in-velhe" element={<Urbaniaonrentinvelhe />} />
<Route path="/urbania-on-rent-in-mumbai" element={<Urbaniaonrentinmumbai />} />
<Route path="/force-urbania-on-rent-in-navi-mumbai" element={<Forceurbaniaonrentinnavimumbai />} />
<Route path="/luxury-urbania-bus-hire-in-thane" element={<Luxuryurbaniabushireinthane />} />
<Route path="/urbania-bus-on-rent-in-mumbai-airport" element={<Urbaniabusonrentinmumbaiairport />} />
<Route path="/luxury-urbania-on-rent-in-lonavala" element={<Luxuryurbaniaonrentinlonavala />} />
<Route path="/urbania-on-rent-in-kolhapur" element={<Urbaniaonrentinkolhapur />} />
<Route path="/urbania-bus-on-rent-in-sangli" element={<Urbaniabusonrentinsangli />} />
<Route path="/urbania-bus-on-rent-in-solapur" element={<Urbaniabusonrentinsolapur />} />
<Route path="/urbania-bus-on-rent-in-shirdi" element={<Urbaniabusonrentshirdi />} />
<Route path="/luxury-urbania-bus-rentals-in-nashik" element={<Luxuryurbaniabusrentalsinnashik />} />
<Route path="/luxury-urbania-rentals-in-ahmednagar" element={<Luxuryurbaniarentalinahmedabad />} />
<Route path="/ac-luxury-urbania-hire-in-mahabaleshwar" element={<Acluxuryurbaniahireinmahabaleshwar />} />
<Route path="/pune-to-konkan-darshan-urbania-bus-package" element={<Punetokonkandarshan />} />
<Route path="/mini-bus-on-rent-in-pune" element={<Minibusonrentinpune />} />
<Route path="/mini-bus-on-rental-in-pimpri-chinchwad" element={<Minibusrentalinpimprichichwad />} />
<Route path="/15-seater-ac-mini-luxury-bus-on-rent-pune" element={<Onefiveseateracminibusonrent />} />
<Route path="/force-urbania-on-rent-in-satara" element={<Forceurbaniaonrentinsatara />} />


<Route path="/force-urbania-on-rent-in-katraj-pune" element={<Forceurbaniaonrentinkatraj />} />
<Route path="/force-urbania-on-rent-in-shivaji-nagar-pune" element={<Forceurbniaonrentinshivajinagarpune />} />
<Route path="/urbania-on-rent-for-jyotirlinga-darshan-from-pune" element={<Urbaniaonrentforjyotilingadarshan />} />
<Route path="/pune-to-ujjain-urbania-bus-hire" element={<Punetoujjainurbaniabushire />} />
<Route path="/pune-to-ashtavinayak-darshan-urbania-bus" element={<Punetoashtavinayakdarshan />} />
<Route path="/pune-to-nashik-urbania-bus-hire" element={<Punetonashikurbaniabushire />} />
<Route path="/urbania-tourist-bus-on-rent-in-pune" element={<Urbaniatouristbusonrentinpune />} />
<Route path="/pune-to-pandharpur-urbania-tour-package" element={<Punetopandharpururbaniatour />} />
<Route path="/urbania-bus-on-rent-in-nashik" element={<Urbaniabusonrentinnashik />} />
<Route path="/pune-to-ayodhya-urbania-bus-on-rent" element={<Punetoayodhyaurbaniabusonrent />} />
<Route path="/pune-to-bhimashankar-urbania-hire" element={<Punetobhimashankarurbaniahire />} />
<Route path="/pune-to-hyderabad-urbania-on-rent" element={<Punetohyderabadurbaniaonrent />} />
<Route path="/pune-to-bangalore-urbania-rental-service" element={<Punetobangloreurbaniarental />} />
<Route path="/pune-to-rajasthan-urbania-rental-service" element={<Punetorajsthanurbaniarentalservice />} />
<Route path="/bus-on-rent-pune" element={<Busonrentpune />} />
<Route path="/urbania-on-rent-in-aurangabad" element={<Urbaniaonrentinaurangabad />} />
<Route path="/bus-hire-for-wedding-in-pune" element={<Bushireforweddinginpune />} />
<Route path="/urbania-on-rent-pune-for-wedding-functions" element={<Urbaniaonrentpuneforwedding />} />
<Route path="/pune-to-outstation-urbania-on-rent" element={<Punetooutstationurbaniaonrent />} />
<Route path="/urbania-bus-on-rent-in-punawale" element={<Urbaniabusonrentinpunawale />} />
<Route path="/urbania-hire-in-pimpri-for-corporate-travel" element={<Urbaniahireinpimpriforcorporate />} />
<Route path="/urbania-on-rent-in-pune-contact-number" element={<Urbaniaonrentinpunecontact />} />
<Route path="/bus-rental-service-in-saswad-pune" element={<Busrentalserviceinsaswadpune />} />
<Route path="/pune-to-goa-urbania-on-rent" element={<Punetogoaurbaniaonrent />} />
<Route path="/urbania-on-rent-in-alandi-pune" element={<Urbaniaonrentinalandipune />} />
<Route path="/urbania-on-rent-in-dighi" element={<Urbaniaonrentindighi />} />
<Route path="/urbania-on-rent-in-ranjangaon-midc" element={<Urbaniaonrentinranjangaonmidc />} />
<Route path="/urbania-on-rent-in-chakan-midc" element={<Urbaniaonrentinchakanmidc />} />
<Route path="/urbania-on-rent-in-pimpri" element={<Urbaniaonrentinpimpri />} />
<Route path="/urbania-on-rent-in-wadmukhwadi" element={<Urbaniaonrentinwadmukhwadi />} />
<Route path="/urbania-on-rent-in-ravet-pcmc" element={<Urbaniaonrentinravetpcmc />} />
<Route path="/urbania-on-rent-in-talwade" element={<Urbaniaonrentintalwade />} />
<Route path="/urbania-on-rent-in-rahatani" element={<Urbaniaonrentinrahatani />} />
<Route path="/urbania-on-rent-in-kalewadi" element={<Urbaniaonrentinkalewadi />} />
<Route path="/urbania-on-rent-in-dapodi" element={<Urbaniaonrentindapoli />} />
<Route path="/urbania-on-rent-in-kasarwadi" element={<Urbaniaonrentinkasarwadi />} />
<Route path="/urbania-on-rent-in-talegaon-dabhade" element={<Urbaniaonrentintalegaon />} />

      </Routes>



      <Footer />
    </Router>
  );
}

export default App;
