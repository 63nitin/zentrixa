import React from 'react';
import { Helmet } from 'react-helmet';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- Placeholder Icons ---
// TODO: Replace these with actual relevant SVGs or icons from a library (e.g., Heroicons)
const WebDevIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
);
const SocialIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
     <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
    </svg>
);
const ReviewIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
);
const AnalyticsIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
);
// --- End Placeholder Icons ---


// --- Service Data from your original code ---
const servicesData = [
  {
    IconComponent: WebDevIcon,
    title: '🌐 Custom Web Development',
    description: 'We build fast, responsive, and user-friendly websites tailored for individuals, schools, and businesses. Whether it’s a portfolio, e-learning portal, or a brand site – Zentrixa delivers.',
  },
  {
    IconComponent: SocialIcon,
    title: '📱 Social Media Management',
    description: 'From creating engaging content to scheduling posts and managing campaigns – we handle everything to grow your digital presence across platforms like Instagram, Facebook, and LinkedIn.',
  },
  {
    IconComponent: ReviewIcon,
    title: '⭐ Online Review Boosting',
    description: 'We monitor and improve your Google and third-party reviews using reputation management strategies, increasing your visibility and trust online.',
  },
  {
    IconComponent: AnalyticsIcon,
    title: '📊 Analytics & Reporting',
    description: 'Get real-time reports on web performance, engagement metrics, and social media growth. We help you make data-driven decisions.',
  },
  // Add more services here if needed, or handle empty slots below
];


function ServicesPage() {
  return (
    <div className="bg-gradient-to-b  from-green-950 to-gray-950  text-white min-h-screen">
   

      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          {/* Left Side */}
          <div>
            <span className="inline-block bg-green-900/50 text-green-300 px-3 py-1 rounded-full font-medium mb-4 tracking-wide">
              Our Services
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Explore Our <br />
              <span className="text-green-400">Digital Services</span> {/* Adapted Title */}
            </h1>
          </div>
          {/* Right Side */}
          <div className="md:text-right">
             {/* Using description from image as none was in code header */}
            <p className="text-base hover:text-green-200 text-gray-400 mb-6">
              Explore Top-Tier Web And Digital Services To Kickstart And Grow Your Online Presence With Ease And Reliability.
            </p>
            <Link to="/plans">
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
    whileHover={{ y: -3, scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="inline-block bg-green-500 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md"
  >
    Explore More
  </motion.button>
</Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              IconComponent={service.IconComponent}
              title={service.title}
              description={service.description}
            />
          ))}
         
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;