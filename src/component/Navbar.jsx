import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Simple inline SVGs for icons (replace with an icon library like Heroicons if preferred)
const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts or state changes
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  // --- Link Classes ---
  // Common classes for underline animation on both desktop and mobile
  // Common link underline classes
const commonLinkUnderlineClasses = `
relative inline-block
after:content-['']
after:absolute
after:left-0
after:w-full
after:h-[1px]
after:bg-green-400
after:scale-x-0
after:origin-left
after:transition-transform after:duration-300 after:ease-in-out
hover:after:scale-x-100
`;

// Desktop specific link classes
const desktopLinkClasses = `
${commonLinkUnderlineClasses}
py-1
text-white hover:text-green-400 transition-colors duration-300
after:bottom-[-2px]
after:bg-green-400 /* Explicitly set again for safety */
`;

// Mobile specific link classes
const mobileLinkClasses = `
${commonLinkUnderlineClasses}
block py-3 text-xl
text-white hover:text-green-400 transition-colors duration-300
after:bottom-1
after:bg-green-400 /* Explicitly set again for safety */
`;
  // --- End Link Classes ---


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // z-50 ensures navbar stays above the mobile menu panel (z-40)
    <nav className=" bg-green-950 border-none rounded-t-xl text-white py-3 px-6 md:px-10 lg:px-16  sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
      
<div className=" border-none">
<Link to="/">
  {/* Image Tag */}
  <img
    // Correct path for files in the 'public' folder: Start with '/'
    src="/fullLog.png"

    // Add descriptive alt text for accessibility
    alt="Zentrixa Logo"

    className="p-0 h-12 w-14 scale-350 ml-12 border-none "
  />
</Link>
</div>

        {/* Desktop Navigation Links */}
        {/* Desktop Navigation Links - Uses updated desktopLinkClasses */}
        <div className="hidden md:flex space-x-6 items-center">

         <Link to="/" className={desktopLinkClasses}>Home</Link>
          <Link to="/about" className={desktopLinkClasses}>About Us</Link>
          <Link to="/service" className={desktopLinkClasses}>Services</Link>
          <Link to="/contact" className={desktopLinkClasses}>Contact Us</Link>
        </div>

        {/* Login Button (Desktop) */}
        {/* <div className="hidden md:block">
          <button className=" bg-gradient-to-r from-green-400 to-gray-700 transition delay-150  ease-in-out hover:-translate-y-1 hover:scale-110  p-3 text-gray-900 font-semibold py-2 px-5  duration-300 border-none rounded-full">
            Login
          </button> */}
        {/* </div> */}

        {/* --- Mobile Menu Button --- */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="text-white bg-green-400 p-2 rounded-2xl focus:outline-none"
          >
            {/* Show close icon if menu is open, hamburger otherwise */}
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Panel --- */}
      <div
        className={`
          md:hidden /* Hide on medium screens and up */
          fixed top-0 left-0 w-full h-screen /* Full screen overlay */
           bg-opacity-50 backdrop-blur-lg /* Background color */
          z-40 /* Below navbar (z-50) but above content */
          p-6 pt-20 /* Padding, more padding top to account for navbar height/close button */
          transform transition-transform duration-300 ease-in-out /* Slide animation */
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} /* Conditional position */
        `}
        aria-hidden={!isMobileMenuOpen} // Accessibility: hide when closed
      >
         {/* Close Button (within panel, like the image) */}
         <button
           onClick={toggleMobileMenu}
           className="absolute top-5 right-6 p-2 border border-green-400 rounded text-green-400 hover:bg-green-400 hover:text-gray-900 transition-colors"
           aria-label="Close menu"
         >
            <CloseIcon />
         </button>

         {/* Mobile Navigation Links */}
         <nav className="flex flex-col space-y-5 mt-4">
            {/* Add onClick={toggleMobileMenu} to each link to close menu on navigation */}
            <Link to="/" className={mobileLinkClasses} onClick={toggleMobileMenu}>Home</Link>
            <Link to="/about" className={mobileLinkClasses} onClick={toggleMobileMenu}>About Us</Link>
            {/* Example for dropdown indicator if needed */}
            <Link to="/service" className={`${mobileLinkClasses} flex justify-between items-center`} onClick={toggleMobileMenu}>
                Services <span className="text-xs">▼</span>
            </Link>
          
            <Link to="/contact" className={mobileLinkClasses} onClick={toggleMobileMenu}>Contact Us</Link>

    
         </nav>
      </div>
    </nav>
  );
}

export default Navbar;