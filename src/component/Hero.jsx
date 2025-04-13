import React, { useState, useEffect, useRef } from 'react';

function Hero() {
  // ---- Animation State & Ref ----
  // State to track if the features section is currently visible in the viewport
  const [isVisible, setIsVisible] = useState(false);
  // Ref to attach to the element we want to observe for intersection
  const featuresRef = useRef(null);

  // ---- Intersection Observer Setup ----
  useEffect(() => {
    // Create an Intersection Observer instance
    // This observer watches the 'featuresRef' element
    const observer = new IntersectionObserver(
      ([entry]) => {
        // This callback function runs whenever the observed element's
        // intersection status changes (entering or leaving the viewport)

        // Update the isVisible state based on whether the element is currently intersecting
        setIsVisible(entry.isIntersecting);

        // --- IMPORTANT: We DO NOT unobserve here anymore ---
        // This allows the observer to keep watching the element, so the
        // state is updated (and animation re-triggered) every time it
        // scrolls in or out of view.
      },
      {
        // threshold: 0.2 means the callback triggers when 20%
        // of the element becomes visible OR when it becomes less than 20% visible.
        // Adjust this value (0 to 1) to control when the animation triggers.
        threshold: 0.2,
      }
    );

    // Store the current ref value in a variable for use in the cleanup function
    // This avoids issues if the ref changes during the effect's lifecycle
    const currentFeaturesRef = featuresRef.current;

    // If the ref is attached to an element, start observing it
    if (currentFeaturesRef) {
      observer.observe(currentFeaturesRef);
    }

    // ---- Cleanup Function ----
    // This function runs when the component unmounts
    return () => {
      // If we were observing an element, it's crucial to stop observing
      // it when the component is removed, to prevent memory leaks.
      if (currentFeaturesRef) {
        observer.unobserve(currentFeaturesRef);
      }
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    // Added border class back correctly (removed -1)
    <section className="bg-gradient-to-b border border-green-800 rounded-b-xl from-green-800 to-gray-950 text-white min-h-[calc(100vh-68px)] flex items-center py-16 px-6 md:px-10 lg:px-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Column: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Fast & Reliable <br /> Hosting With <br />
            <span className="text-green-400">Trusted Domains</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            Get Secure, High Performance Hosting And Trusted Domains To Keep Your Website Running Smoothly—Anytime, Anywhere.
          </p>
           {/* Added duration class for button transition */}
          <button className="bg-green-400 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
            Explore More
          </button>
        </div>

        {/* Right Column: Illustration & Features */}
        <div className="relative flex flex-col items-center mt-10 md:mt-0">

          {/* Illustration Placeholder */}
          <div className="w-full max-w-md h-64 md:h-80 lg:h-96 rounded-lg flex items-center justify-center text-gray-500 mb-8">
            Illustration Placeholder
          </div>

          {/* Snippets Wrapper - Observed Element */}
          <div
            // --- Assign Ref ---
            // The IntersectionObserver watches the element this ref is attached to.
            ref={featuresRef}
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 w-full max-w-md md:max-w-none"
          >
            {/* Snippet 1 */}
            <div className={`
              {/* Layout & Static Styles */}
              w-full sm:w-auto md:absolute md:top-0 md:right-0 md:-mt-5 md:-mr-5 md:w-32
              p-3 rounded-lg shadow-2xl border border-green-700 text-xs text-center
              bg-gray-950/50 backdrop-blur-sm

              {/* --- Base Animation Styles --- */}
              transition-all duration-500 ease-out {/* Defines the transition effect */}

              {/* --- Conditional Animation Classes --- */}
              ${isVisible
                ? 'opacity-100 translate-y-0' /* Style when isVisible is true (in view) */
                : 'opacity-0 translate-y-10' /* Style when isVisible is false (out of view) */
              }
            `}>
              <span role="img" aria-label="support icon" className="text-6xl text-green-400">🎧</span>
              <p className='text-lg text-green-100 mt-3'>24/7 Hosting & Domain Support</p>
            </div>

            {/* Snippet 2 */}
            <div className={`
              {/* Layout & Static Styles */}
              w-full sm:w-auto md:absolute md:bottom-0 md:left-0 md:-mb-8 md:-ml-5 md:w-32
              p-3 rounded-lg shadow-2xl border border-green-700 text-xs text-center
              bg-gray-950/50 backdrop-blur-sm

              {/* --- Base Animation Styles (with delay) --- */}
              transition-all duration-500 ease-out delay-100 {/* Staggered start */}

              {/* --- Conditional Animation Classes --- */}
              ${isVisible
                ? 'opacity-100 translate-y-0' /* In view */
                : 'opacity-0 translate-y-10' /* Out of view */
              }
            `}>
              <span role="img" aria-label="guarantee icon" className="text-6xl">🛡️</span>
              <p className='text-lg text-green-100 mt-3'>Lifetime Website Guarantee</p>
            </div>

            {/* Snippet 3 */}
            <div className={`
              {/* Layout & Static Styles */}
              w-full sm:w-auto md:absolute md:bottom-0 md:right-0 md:-mb-5 md:-mr-8 md:w-32
              p-3 rounded-lg shadow-lg border border-green-700 text-xs text-center
              bg-gray-950/50 backdrop-blur-sm

              {/* --- Base Animation Styles (with delay) --- */}
              transition-all duration-500 ease-out delay-200 {/* Staggered start */}

              {/* --- Conditional Animation Classes --- */}
              ${isVisible
                ? 'opacity-100 translate-y-0' /* In view */
                : 'opacity-0 translate-y-10' /* Out of view */
              }
            `}>
              <span role="img" aria-label="security icon" className="text-6xl">🔒</span>
              <p className='text-lg text-green-100 mt-3'>Free SSL & Security Features</p>
            </div>
          </div>{/* End Snippets Wrapper */}
        </div>{/* End Right Column */}
      </div>{/* End Container */}
    </section>
  );
}

export default Hero;