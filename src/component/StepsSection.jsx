import React from 'react';
import StepItem from './StepItem'; // Import the sub-component

// --- Placeholder Icons ---
// TODO: Replace these with actual relevant SVGs or icons
const HostingIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" /> </svg>
);
const DomainIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c1.356 0 2.695-.25 3.945-.72M12 21c-1.356 0-2.695-.25-3.945-.72m0 0A12.06 12.06 0 0 1 3 14.755m6.945 5.728A12.06 12.06 0 0 0 21 14.755M12 3c1.356 0 2.695.25 3.945.72m0 0A12.06 12.06 0 0 1 21 9.245M12 3C10.644 3 9.305.25 8.055.72m0 0A12.06 12.06 0 0 0 3 9.245m6.945-5.728A12.06 12.06 0 0 0 12 12a12.06 12.06 0 0 0-2.055 5.728m4.11 0A12.06 12.06 0 0 1 12 12m2.055-5.728A12.06 12.06 0 0 1 12 12a12.06 12.06 0 0 1 2.055 5.728m0 0A12.06 12.06 0 0 1 12 12m2.055 5.728a12.065 12.065 0 0 1-4.11 0M12 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /> </svg>
);
const SetupIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" /> </svg>
);
const GoLiveIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /> </svg>
);
// --- End Placeholder Icons ---


// --- Steps Data ---
const stepsData = [
  { stepNumber: '01', IconComponent: HostingIcon, title: 'Choose Your Hosting Plan', description: 'Select The Perfect Hosting Package That Fits Your Needs – Whether You’re A Beginner Or A Pro.', isFirst: true },
  { stepNumber: '02', IconComponent: DomainIcon, title: 'Register A Domain Name', description: 'Secure A Unique And Memorable Domain To Establish Your Online Presence.' },
  { stepNumber: '03', IconComponent: SetupIcon, title: 'Set Up Your Website', description: 'Use Our Easy Website Builder Or Install WordPress In One Click – No Coding Needed!' },
  { stepNumber: '04', IconComponent: GoLiveIcon, title: 'Go Live & Grow', description: 'Launch Your Site, Optimize Performance, And Scale As Your Business Grows.' },
];


function StepsSection() {
  return (
    <section className="bg-green-950/10 text-white py-16 md:py-24 px-6 rounded-2xl">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <span className="inline-block bg-gray-800 text-green-400 px-3 py-1 rounded-full text-xs font-medium mb-4 tracking-wide">
          Easy Steps
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
          Simple Steps To <br className="sm:hidden"/>
          <span className="text-green-400">Create Your Website</span>
        </h2>
        <p className="text-base text-gray-400 mb-16 md:mb-24 max-w-2xl mx-auto">
          Get Your Website Up And Running Effortlessly! Follow These Four Easy Steps To Choose Hosting, Register A Domain, Set Up Your Site, And Go Live.
        </p>

    
        <div className="relative">

          <div className="absolute top-10 left-0 right-0 h-px bg-gray-700 w-full z-10 hidden md:block px-10 lg:px-20"></div>

          {/* Animated Arrow (On Top) */}
          {/* Hidden on mobile (md:block), positioned absolutely */}
          {/* Adjust top-? to vertically center on the line */}
          <div className="absolute top-[30px] text-green-400 text-3xl font-bold z-30 animate-slideArrow hidden md:block" aria-hidden="true">
            <span>&rarr;</span> {/* Simple arrow character */}
          </div>

          {/* Steps Row */}
          {/* Stacks vertically on mobile, row on desktop */}
          {/* z-20 ensures icons sit above the connecting line */}
          <div className="flex flex-col md:flex-row justify-between items-start relative z-20 space-y-12 md:space-y-0">
            {stepsData.map((step) => (
              <StepItem
                key={step.stepNumber}
                stepNumber={step.stepNumber}
                IconComponent={step.IconComponent}
                title={step.title}
                description={step.description}
                isFirst={step.isFirst}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSection;