import React from 'react';
import { motion } from "framer-motion";
// Using react-icons as in your original code
import { FaServer, FaCode, FaShieldAlt, FaRocket } from "react-icons/fa";
import { FiCpu, FiDatabase, FiCloud, FiLayers } from "react-icons/fi";

// Assuming this component is routed correctly (e.g., via /about)
const About = () => {
  return (
    // Section Styling: Changed background to match project's dark theme
    <section className=" bg-gradient-to-b  from-green-950 to-gray-950  py-16 md:py-24  text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20 max-w-4xl mx-auto"
        >
          {/* Changed badge text color to accent green */}
          <span className="text-green-400 font-semibold text-sm md:text-base tracking-wider uppercase">
            ABOUT ZENTRIXA
          </span>
          {/* Changed headline text color to white, accent span to green */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
            Powering <span className="text-green-400">Digital Transformation</span> with Cutting-Edge Solutions
          </h2>
          {/* Changed divider color */}
          <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Main Content: Two Columns */}
        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative w-full"
          >
            <div className="relative group">
              {/* Keep existing image structure, ensure image exists */}
              <img
                src="/assets/tech-team.jpg" // Replace with your relevant image
                alt="Zentrixa Team Collaboration"
                className="w-full rounded-xl shadow-xl transform group-hover:scale-[1.01] transition-all duration-500 z-10 relative"
              />
              {/* Changed decorative border color */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-green-400/40 rounded-xl z-0 hidden lg:block"></div>
            </div>

            {/* Experience Badge */}
            {/* Changed background to accent green, text to white */}
            <div className="absolute -bottom-5 -left-5 bg-green-500 text-white py-3 px-5 rounded-lg shadow-lg z-20 hidden lg:flex items-center gap-3">
              <FaRocket className="text-xl" />
              <div>
                <p className="font-bold text-lg">10+</p>
                <p className="text-xs opacity-90">Years in Tech Innovation</p>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            {/* Changed heading text color to white, accent spans to green */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
              Zentrixa – Where <span className="text-green-400">Technology</span> Meets <span className="text-green-400">Business Excellence</span>
            </h3>

            {/* Changed paragraph text color */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              At Zentrixa, we drive digital transformation through innovative software solutions, cloud infrastructure, and AI-powered platforms. For over a decade, we've been helping businesses leverage technology to achieve operational excellence and competitive advantage in the digital age.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-8">
              {[
                 // Keeping your feature data structure
                 { icon: <FaServer className="text-xl" />, title: "Cloud Infrastructure", desc: "Scalable and secure cloud solutions" },
                 { icon: <FaCode className="text-xl" />, title: "Custom Software", desc: "Tailored to your business needs" },
                 { icon: <FiCpu className="text-xl" />, title: "AI & Machine Learning", desc: "Intelligent automation solutions" },
                 { icon: <FaShieldAlt className="text-xl" />, title: "Cyber Security", desc: "Enterprise-grade protection" },
                 { icon: <FiDatabase className="text-xl" />, title: "Big Data", desc: "Actionable insights from data" },
                 { icon: <FiLayers className="text-xl" />, title: "DevOps Services", desc: "Streamlined development cycles" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                   // Changed card styling: background, border, hover state, text colors
                  className="flex items-start gap-3 p-4 bg-slate-800/70 hover:bg-slate-800 border border-gray-700/50 rounded-lg transition-all shadow-sm hover:shadow-lg"
                >
                  {/* Changed icon container styling */}
                  <div className=" p-2 rounded-lg text-green-400 bg-green-900/30">
                    {feature.icon}
                  </div>
                  <div>
                    {/* Changed text colors */}
                    <h4 className="font-semibold text-white text-sm sm:text-base">{feature.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(52, 211, 153, 0.3), 0 4px 6px -2px rgba(52, 211, 153, 0.2)" }}
                whileTap={{ scale: 0.97 }}
                href="/contact" // Assuming you have a contact route
                 // Changed button style to match primary action style
                className="px-6 py-2.5 sm:px-8 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-md transition-all text-center text-sm sm:text-base"
              >
                Schedule a Demo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/services" // Link to services page
                 // Changed button style for secondary action (bordered)
                className="px-6 py-2.5 sm:px-8 sm:py-3 bg-transparent hover:bg-green-400 border border-green-400 text-green-400 hover:text-gray-950 font-medium rounded-lg shadow-sm transition-all text-center text-sm sm:text-base"
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div> {/* End Text Section */}
        </div> {/* End Main Content */}

        {/* Tech Stack / Trusted By Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28"
        >
          {/* Changed text color */}
          <h3 className="text-center text-xl sm:text-2xl font-semibold text-white mb-8">
            Leveraging World-Class Technologies
          </h3>
          {/* Changed text color and opacity */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 items-center text-gray-500">
            {["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "React", "Node.js", "Python"].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, color: '#34d399' }} // Hover color green-400
                className="font-medium text-sm sm:text-base transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div> {/* End Container */}
    </section>
  );
};

export default React.memo(About);