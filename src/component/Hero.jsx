import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  // ---- Animation State & Ref ----
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef(null);
  const textLine1 = 'Fast & Reliable';
  const textLine2 = ' Hosting With ';
  const pauseBetweenLines = 150;
  const pauseBeforeRepeat = 3000; // Added: Pause for 3 seconds before repeating
  const typingSpeedMs = 20; // Milliseconds per character

  // --- Delays based on FIRST animation cycle ---
  // Calculate duration for the *first* typing sequence only
  const firstTypingDuration =
    (textLine1.length * typingSpeedMs +
      pauseBetweenLines +
      textLine2.length * typingSpeedMs) /
    1000; // Duration in seconds

  const initialH1Delay = 0.1;
  // These delays trigger based on the *first* completion of the typing animation
  const trustedDomainsDelay = initialH1Delay + firstTypingDuration + 0.2;
  const paragraphDelay = 0.5;
  const buttonDelay = trustedDomainsDelay + 0.2;

  // ---- Intersection Observer Setup (remains the same) ----
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Optional: Only set to true, don't set back to false if it scrolls out
        if (entry.isIntersecting) {
           setIsVisible(true);
           // If you want the animation only once when it becomes visible:
           // observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% is visible
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
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section className="bg-gradient-to-b from-green-950 to-gray-950 rounded-b-xl text-white min-h-[calc(100vh-68px)] flex items-center py-16 px-6 md:px-10 lg:px-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Column: Text Content */}
        <div className="text-center md:text-left">
          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.5, delay: initialH1Delay }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white"
          >
            {/* Wrapper for the Typing Animation */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 0.77, 0.47, 0.97],
                delay: initialH1Delay,
              }}
              className="inline-block mr-2 align-top"
            >
              {/* --- MODIFIED TypeAnimation --- */}
              <TypeAnimation
                sequence={[
                  textLine1,
                  pauseBetweenLines,
                  textLine2,
                  pauseBeforeRepeat, // Keep text visible before looping
                ]}
                wrapper="span"
                speed={typingSpeedMs}
                style={{
                  // Styles remain the same (no whiteSpace: nowrap)
                }}
                cursor={true}
                repeat={Infinity} // <--- Changed from 0 to Infinity
              />
              {/* --- END MODIFICATION --- */}
            </motion.span>

            {/* Part 2: "Trusted Domains" - Appears after first typing cycle */}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: trustedDomainsDelay, // Uses delay based on first cycle
                ease: 'easeOut',
              }}
              className="text-green-400 inline-block align-top"
            >
              Trusted Domains
            </motion.span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: paragraphDelay,
              ease: [0.16, 0.77, 0.47, 0.97],
            }}
            className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
          >
            Get Secure, High Performance Hosting And Trusted Domains To Keep Your Website Running Smoothly—Anytime, Anywhere.
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: buttonDelay, // Uses delay based on first cycle
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -4,
              scale: 1.05,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.15, ease: "easeOut" },
            }}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transition-colors duration-300"
          >
            Explore More
          </motion.button>
        </div>

        {/* Right Column: Illustration & Features (remains the same) */}
        <div className="relative flex flex-col items-center mt-10 md:mt-0">
          {/* Image */}
          <div className="w-full max-w-md h-64 md:h-80 lg:h-96 rounded-lg flex items-center justify-center transform transition duration-300 hover:scale-110 text-gray-500 mb-8">
            <img src="/Hero.png" alt="Hero Illustration" className='rounded-2xl object-cover w-full h-full' /> {/* Added object-cover */}
          </div>

          {/* Feature Snippets Container */}
          <div
            ref={featuresRef} // Ref for Intersection Observer
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 w-full max-w-md md:max-w-none"
          >
            {/* Snippet 1 */}
            <div className={`
              w-full sm:w-auto md:absolute md:top-0 md:right-0 md:-mt-5 md:-mr-5 lg:w-36 xl:w-40 {/* Adjusted width */}
              p-3 rounded-lg shadow-2xl border border-green-700/50 {/* Slightly subtle border */} text-xs text-center
              bg-gray-900/30 backdrop-blur-sm {/* Explicit background */}
              transition-all duration-500 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
              <span role="img" aria-label="support icon" className="text-4xl sm:text-5xl text-green-400">🎧</span>
              <p className='text-sm sm:text-md text-green-100 mt-2'>24/7 Hosting & Domain Support</p>
            </div>

            {/* Snippet 2 */}
            <div className={`
              w-full sm:w-auto md:absolute md:bottom-0 md:left-0 md:-mb-8 md:-ml-5 lg:w-36 xl:w-40 {/* Adjusted width */}
              p-3 rounded-lg shadow-2xl border border-green-700/50 text-xs text-center
              bg-gray-900/30 backdrop-blur-sm
              transition-all duration-500 ease-out delay-150 {/* Adjusted delay */}
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
              <span role="img" aria-label="guarantee icon" className="text-4xl sm:text-5xl">🛡️</span>
              <p className='text-sm sm:text-md text-green-100 mt-2'>Lifetime Website Guarantee</p>
            </div>

            {/* Snippet 3 */}
            <div className={`
              w-full sm:w-auto md:absolute md:bottom-0 md:right-0 md:-mb-5 md:-mr-8 lg:w-36 xl:w-40 {/* Adjusted width */}
              p-3 rounded-lg shadow-lg border border-green-700/50 text-xs text-center
              bg-gray-900/30 backdrop-blur-sm
              transition-all duration-500 ease-out delay-300 {/* Adjusted delay */}
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
              <span role="img" aria-label="security icon" className="text-4xl sm:text-5xl">🔒</span>
              <p className='text-sm sm:text-md text-green-100 mt-2'>Free SSL & Security Features</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;