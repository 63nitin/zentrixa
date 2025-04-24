import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import TechStack from './component/Trustedby';
import WhyChooseUs from "./component/WhyChoose"
import PricingCard from "./component/PricingCard"
import ServicesPage from "./component/ServicePage"
import StepsSection from "./component/StepsSection"
import Contact from "./component/Contact"
import MyComponent from "./component/LogoAnimate"
import About from "./component/About"
import Footer from './component/Footer';
import WhatsAppButton from "./component/WhatsAppButton";
import Plan from './component/Plan';

function HomePage() {
  return (
    <>
      <Hero/>
     <TechStack/>
     <WhyChooseUs/>
     {/* <PricingCard/> */}
     <ServicesPage/>
     <StepsSection/>
    </>
  );
}


function App() {
  return(
   <div className="p-4">
      <Navbar />

      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<ServicesPage/> } />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/plans" element={<Plan/>} />
      </Routes>

      <Footer />
      <WhatsAppButton />

   </div>
  )
}

export default App
