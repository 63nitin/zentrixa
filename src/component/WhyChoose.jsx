import React from 'react';
import FeatureCard from './FeatureCard'; // Import the sub-component
import { FaRocket, FaShieldAlt,FaSearch } from 'react-icons/fa';
import {FiTarget} from 'react-icons/fi'




// Data for the feature cards
const features = [
  {
    IconComponent: FaRocket,
    title: 'Performance-Driven Code',
    description: ' We build custom websites using modern frameworks like React & Next.js, optimized for blazing-fast load times, scalability, and a seamless user experience.', // Replace with relevant text
  },
  {
    IconComponent: FaSearch,
    title: ' SEO Integration',
    description: 'Enjoy Dependable Hosting With Our Promise To Keep Your Website Running Smoothly And Reliably.', // Replace with relevant text
  },
  {
    IconComponent: FiTarget,
    title: '  Custom Solutions / Startup Fit',
    description: 'We create bespoke websites and landing pages perfectly aligned with your brand identity and business goals, designed for flexibility as you grow.', // Replace with relevant text
  },
];

function WhyChooseUs() {
  return (
    <section className=" text-white py-16 md:py-24 px-6"> {/* Main section styling */}
      <div className="container mx-auto">

        {/* Top Part: Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24">

          {/* Left Column (Illustration) */}
          <div className="flex justify-center">
            {/* Replace with your actual illustration */}
            <div className="w-full max-w-md lg:max-w-lg h-64 md:h-80 bg-gradient-to-br from-green-500/20 to-gray-800/20 rounded-lg flex items-center justify-center text-gray-500">
             <img src="/Choose.png" alt="" className='rounded-2xl' />
              {/* e.g., <img src="/path/to/your/illustration.svg" alt="Hosting hardware illustration" className="w-full h-auto object-contain" /> */}
            </div>
          </div>

          {/* Right Column (Text Content) */}
          <div className="text-center md:text-left">
            <span className="inline-block bg-green-900/50 text-green-300  px-5 py-2 rounded-full text-lg font-medium mb-4 tracking-wide">
              Why Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-5">
            Beyond Code <br /> <span className="text-green-400">Building Your Digital Foundation</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
            We don't just build websites; we build digital assets designed for growth. Our team combines clean code, user-centric design, and strategic SEO insights to ensure your online presence is powerful and effective from day one.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300">
              Explore More
            </button>
          </div>
        </div> {/* End Top Part Grid */}

        {/* Bottom Part: Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              IconComponent={feature.IconComponent} // Pass the component itself
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div> {/* End Bottom Part Grid */}

      </div> {/* End Container */}
    </section>
  );
}

export default WhyChooseUs;