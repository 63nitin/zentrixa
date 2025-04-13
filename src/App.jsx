import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import TrustedBy from "./component/Trustedby"
import WhyChooseUs from "./component/WhyChoose"
import PricingCard from "./component/PricingCard"
import ServicesPage from "./component/ServicePage"
import StepsSection from "./component/StepsSection"
import Contact from "./component/Contact"
import MyComponent from "./component/LogoAnimate"
import About from "./component/About"
import Footer from './component/Footer';

function HomePage() {
  return (
    <>
      <Hero/>
     <TrustedBy/>
     <WhyChooseUs/>
     <PricingCard/>
     <ServicesPage/>
     <StepsSection/>
    </>
  );
}


function App() {
  return(
   <div className="p-5">
      <Navbar />

      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<ServicesPage/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer />


   </div>
  )
}

export default App
