import React from 'react';
import FeatureCard from './FeatureCard'; // Import the sub-component

// Placeholder Icon Components (Replace with actual SVGs or library icons)
const SupportIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);
const UptimeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
);
const ControlPanelIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
    </svg>
);


// Data for the feature cards
const features = [
  {
    IconComponent: SupportIcon,
    title: '24/7 Customer Support',
    description: 'Choose A Payment Plan That Works For You And Start Learning Without Financial Worries.', // Replace with relevant text
  },
  {
    IconComponent: UptimeIcon,
    title: '99.9% Uptime Guarantee',
    description: 'Enjoy Dependable Hosting With Our Promise To Keep Your Website Running Smoothly And Reliably.', // Replace with relevant text
  },
  {
    IconComponent: ControlPanelIcon,
    title: 'Easy-To-Use Control Panel',
    description: 'Our Intuitive Control Panel Makes Managing Your Website And Domains Simple, Even For Beginners.', // Replace with relevant text
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
              We Are Experts In <br /> {/* Consider <span className="text-green-400">Experts In</span> */}
              Hosting & Domain Solutions
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              With Rapidhost, You Gain Full Control Over Your Website's Performance, Security, And Stability. Our Proactive Solutions Ensure Your Online Presence Is Fast, Secure, And Hassle-Free, Giving You The Freedom To Focus On What Matters Most – Growing Your Business. {/* Replace with relevant text */}
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