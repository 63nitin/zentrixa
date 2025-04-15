import React from 'react';
import Slider from 'react-slick'; // Import Slider component

// Import Slick Carousel CSS (if not imported in main CSS file)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array of placeholder logo URLs (Replace with your actual logos)
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
  // Add more logos if desired for smoother looping effect
];

function TrustedBy() {

  // Settings object for the react-slick carousel
  const settings = {
    dots: false,            // Hide pagination dots
    arrows: false,          // Hide navigation arrows
    infinite: true,         // Enable infinite looping
    speed: 500,             // Transition speed in milliseconds (e.g., 500ms)
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 3000,    // **Slide change interval: 3000ms = 3 seconds**
    cssEase: "linear",      // Type of easing for transitions
    pauseOnHover: true,     // Pause autoplay when hovering over the slider
    swipeToSlide: true,     // Allow sliding using swipe gestures
    variableWidth: true,    // Adjust slide width based on content (good for logos)
    slidesToShow: 5,        // Default number of slides to show on larger screens
    slidesToScroll: 1,      // How many slides to scroll at a time
    responsive: [           // Responsive settings for different screen sizes
      {
        breakpoint: 1280, // screens wider than 1280px (use settings above)
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024, // screens less than 1024px wide
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,  // screens less than 768px wide
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,  // screens less than 640px wide
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    // Added background color here as it was missing
    <section className="bg-gray-950 py-16 sm:py-20 overflow-hidden"> {/* Added overflow-hidden */}
      <div className="container mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-lg sm:text-xl text-gray-300 mb-12">
          See How <span className="text-green-400 font-semibold">10,000+</span> Customers Trust Us To Power Their Websites.
        </h2>

        {/* react-slick Slider Component */}
        {/* Apply negative margins or adjust container padding if needed to make slides flow edge-to-edge */}
        <Slider {...settings}>
          {logos.map((logoUrl, index) => (
            // Each child of Slider is a slide. Add padding/margin here for spacing.
            <div key={index} className="!flex justify-center items-center px-4 h-16"> {/* Adjust padding (px-4) and height */}
              <img
                src={logoUrl}
                alt={`Client Logo ${index + 1}`} // IMPORTANT: Replace with actual client names
                className="
                  max-h-8 md:max-h-10   {/* Control max logo height */}
                  w-auto                {/* Maintain aspect ratio */}
                  opacity-60           {/* Make logos subtle */}
                  filter grayscale      {/* Make logos monochromatic */}
                  mx-auto               {/* Center logo within its slide space */}
                "
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TrustedBy;