import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  // ---- Animation State & Ref ----
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef(null);

  // Calculate the delay for the green text fade-in based on typing animation
  // The first part of the text is 23 characters (including spaces and newlines)
  // With speed=50, it will take 23 * 50 = 1150ms + 1000ms pause = 2150ms
  const greenTextFadeInDelay = 2.15; // seconds

  // ---- Intersection Observer Setup ----
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const currentFeaturesRef = featuresRef.current;

    if (currentFeaturesRef) {
      observer.observe(currentFeaturesRef);
    }

    return () => {
      if (currentFeaturesRef) {
        observer.unobserve(currentFeaturesRef);
      }
    };
  }, []);

  return (
    <section className="bg-gradient-to-b  from-green-950 to-gray-950  rounded-b-xl text-white min-h-[calc(100vh-68px)] flex items-center py-16 px-6 md:px-10 lg:px-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Column: Text Content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold transform transition duration-300 leading-tight mb-4 text-white"
          >
            <TypeAnimation
              sequence={[
                'Fast & Reliable \nHosting With \n',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ whiteSpace: 'pre-line', display: 'inline' }}
              repeat={0}
              cursor={false}
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: greenTextFadeInDelay }}
              className="text-green-400"
              style={{ display: 'inline' }}
            >
              Trusted Domains
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
          >
            Get Secure, High Performance Hosting And Trusted Domains To Keep Your Website Running Smoothly—Anytime, Anywhere.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ y: -3, scale: 1.03, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
            className="bg-green-500 text-white font-semibold transform transition duration-500 py-3 px-8 rounded-lg text-lg shadow-md"
          >
            Explore More
          </motion.button>
        </div>

        {/* Right Column: Illustration & Features */}
        <div className="relative flex flex-col items-center mt-10 md:mt-0">
          <div className="w-full max-w-md h-64 md:h-80 lg:h-96 rounded-lg flex items-center justify-center transform transition duration-300 hover:scale-110 text-gray-500 mb-8">
            <img src="/Hero.png" alt="" className='rounded-2xl' />
          </div>

          <div
            ref={featuresRef}
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 w-full max-w-md md:max-w-none"
          >
            {/* Snippet 1 */}
            <div className={`
              w-full sm:w-auto md:absolute md:top-0 md:right-0 md:-mt-5 md:-mr-5 md:w-32
              p-3 rounded-lg shadow-2xl border border-green-700 text-xs text-center
               backdrop-blur-sm
              transition-all duration-500 ease-out
              ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
              }
            `}>
              <span role="img" aria-label="support icon" className="text-5xl text-green-400">🎧</span>
              <p className='text-md text-green-100 mt-3'>24/7 Hosting & Domain Support</p>
            </div>

            {/* Snippet 2 */}
            <div className={`
              w-full sm:w-auto md:absolute md:bottom-0 md:left-0 md:-mb-8 md:-ml-5 md:w-32
              p-3 rounded-lg shadow-2xl border border-green-700 text-xs text-center
               backdrop-blur-sm
              transition-all duration-500 ease-out delay-100
              ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
              }
            `}>
              <span role="img" aria-label="guarantee icon" className="text-6xl">🛡️</span>
              <p className='text-md text-green-100 mt-3'>Lifetime Website Guarantee</p>
            </div>

            {/* Snippet 3 */}
            <div className={`
              w-full sm:w-auto md:absolute md:bottom-0 md:right-0 md:-mb-5 md:-mr-8 md:w-32
              p-3 rounded-lg shadow-lg border border-green-700 text-xs text-center
              backdrop-blur-sm
              transition-all duration-500 ease-out delay-200
              ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
              }
            `}>
              <span role="img" aria-label="security icon" className="text-6xl">🔒</span>
              <p className='text-md text-green-100 mt-3'>Free SSL & Security Features</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;