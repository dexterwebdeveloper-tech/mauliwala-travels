import React from 'react';
import Carousel from './Carousel';
import AboutUs from '../pages/AboutUs';
import OurServices from '../pages/OurServices';
import WhyChooseUs from '../pages/whyChooseItems';
import VehicleList from '../pages/VehicleList';
import PremiumFeatures from '../pages/FeatureCard';
import WhatWeDo from '../pages/WhatWeDo';
import BookYourRide from '../pages/BookYourRide';
import Testimonial from '../pages/Testimonial';
import FAQ from '../pages/FAQ';
import VideoSlider from './VideoSlider';



const HeroSection = () => {
  
  return (

    <div className="th-hero-wrapper hero-1" id="hero">
              {/* <Carousel/> */}
              <VideoSlider/>
              <AboutUs/>
              <OurServices/>
              <WhyChooseUs/>
              <VehicleList/>
              <PremiumFeatures/>
              <WhatWeDo/>
              <BookYourRide/>
              <Testimonial/>
              <FAQ></FAQ>
    </div>
  );
};

export default HeroSection;
