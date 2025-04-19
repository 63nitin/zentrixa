import React from 'react';
import Slider from 'react-slick';

// Import Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Import specific icons from react-icons ---
// Search https://react-icons.github.io/react-icons/ for icons
// Using 'di' for Devicons, 'si' for SimpleIcons, 'fa' for FontAwesome etc.
import { DiReact, DiNodejsSmall, DiMongodb, DiPostgresql, DiPython, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiNextdotjs, SiJavascript, SiTailwindcss } from 'react-icons/si';

// --- Define Technology Stack Data using Icon Components ---
const techStack = [
  { name: 'React.js', IconComponent: DiReact, color: "text-sky-400" }, // Assign colors if desired
  { name: 'Next.js', IconComponent: SiNextdotjs, color: "text-white" },
  { name: 'Node.js', IconComponent: DiNodejsSmall, color: "text-green-500" },
  { name: 'JavaScript', IconComponent: SiJavascript, color: "text-yellow-400" },
  { name: 'Python', IconComponent: DiPython, color: "text-blue-400" },
  { name: 'HTML5', IconComponent: DiHtml5, color: "text-orange-500" },
  { name: 'CSS3', IconComponent: DiCss3, color: "text-blue-500" },
  { name: 'Tailwind CSS', IconComponent: SiTailwindcss, color: "text-sky-500" },
  { name: 'MongoDB', IconComponent: DiMongodb, color: "text-green-600" },
  { name: 'PostgreSQL', IconComponent: DiPostgresql, color: "text-blue-600" },
];

function TechStack() {
   const settings = {
    // Keep your existing slider settings, but maybe adjust slidesToShow
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    swipeToSlide: true,
    // variableWidth might not be needed if icons have similar size/container
    // variableWidth: true,
    slidesToShow: 6, // Adjust based on icon size/spacing
    slidesToScroll: 1,
    responsive: [
         { breakpoint: 1280, settings: { slidesToShow: 6 } },
         { breakpoint: 1024, settings: { slidesToShow: 5 } },
         { breakpoint: 768, settings: { slidesToShow: 4 } },
         { breakpoint: 640, settings: { slidesToShow: 3 } },
         { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };

  return (
    <section className="py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Headline remains the same */}
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
          Powering Your Project with <span className="text-green-400">Leading Technology</span>
        </h2>
        <p className="text-base text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto">
           We leverage a modern stack including React, Node.js, Python, and more to build fast, scalable, and effective web solutions.
        </p>

        <Slider {...settings}>
          {techStack.map((tech, index) => (
            // Each tech icon is a slide
            // Use px-* for spacing. Use text-* for icon size.
            <div key={index} className="!flex flex-col justify-center items-center  px-3 h-20 text-center">
               {/* Render the Icon Component */}
               <tech.IconComponent
                  className={`text-4xl md:text-5xl ${tech.color || 'text-gray-400'} scale-110  transition-colors duration-200  border border-transparent rounded-2xl p-1 hover:border-yellow-300`}
                  title={tech.name} // Tooltip
               />
               {/* Optional: Add text label below icon */}
               {/* <span className="text-xs mt-2 text-gray-500">{tech.name}</span> */}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TechStack;