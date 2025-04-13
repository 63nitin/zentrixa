import React from 'react';

// Array of placeholder logo URLs (Replace with actual logo paths/URLs)
const logos = [
  'https://logoipsum.com/288/logoipsum-logo-5.svg',
  'https://logoipsum.com/288/logoipsum-logo-6.svg',
  'https://logoipsum.com/288/logoipsum-logo-7.svg',
  'https://logoipsum.com/288/logoipsum-logo-10.svg',
  'https://logoipsum.com/288/logoipsum-logo-13.svg',
  'https://logoipsum.com/288/logoipsum-logo-14.svg',
  'https://logoipsum.com/288/logoipsum-logo-11.svg',
  'https://logoipsum.com/288/logoipsum-logo-3.svg',
  'https://logoipsum.com/288/logoipsum-logo-1.svg',
];

function TrustedBy() {
  return (
    <section className=" py-16 sm:py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-lg sm:text-xl text-gray-300 mb-12">
          See How <span className="text-green-400 font-semibold">10,000+</span> Customers Trust Us To Power Their Websites.
        </h2>

        {/* Outer container - acts as the viewport, hides overflow */}
        <div className="relative w-full overflow-hidden">
          {/* Inner container - holds TWO copies of logos, applies animation */}
          {/* The 'animate-marquee' class applies the animation defined in tailwind.config.js */}
          {/* 'hover:paused' stops the animation on hover (requires Tailwind v3.1+) */}
          <div className="flex animate-marquee hover:paused">
            {/* Render the logos array twice for seamless infinite scroll */}
            {[...logos, ...logos].map((logoUrl, index) => (
              // Each logo container needs to prevent shrinking and have horizontal margin
              <div key={index} className="flex-shrink-0 mx-6 sm:mx-8 md:mx-10 py-2"> {/* Adjust mx-* for spacing */}
                <img
                  src={logoUrl}
                  // Use modulo (%) to get correct index for alt text within the original list length
                  alt={`Client Logo ${index % logos.length + 1}`} // IMPORTANT: Replace with actual client names
                  className="
                    h-6 sm:h-7 md:h-8      {/* Control logo height */}
                    w-auto                  {/* Maintain aspect ratio */}
                    opacity-60             {/* Make logos subtle */}
                    filter grayscale        {/* Make logos monochromatic */}
                    transition-opacity duration-300
                    /* Removed individual hover effects as they interfere with pausing */
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;