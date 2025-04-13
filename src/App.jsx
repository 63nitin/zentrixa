import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import TrustedBy from "./component/Trustedby"
import WhyChooseUs from "./component/WhyChoose"
import PricingCard from "./component/PricingCard"
import ServicesPage from "./component/ServicePage"
import StepsSection from "./component/StepsSection"
import Footer from "./component/Footer"

function App() {
  return(
   <div className="p-5">
     <Navbar/>
     <Hero/>
     <TrustedBy/>
     <WhyChooseUs/>
     <PricingCard/>
     <ServicesPage/>
     <StepsSection/>
     <Footer/>

   </div>
  )
}

export default App
