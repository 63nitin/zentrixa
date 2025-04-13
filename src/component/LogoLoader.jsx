import React from 'react';

/**
 * A loading indicator component that displays the site logo with an animation.
 * @param {object} props - Component props
 * @param {string} [props.size='h-16 w-16'] - Tailwind classes for logo size (e.g., 'h-12 w-12', 'h-20 w-20').
 * @param {string} [props.className=''] - Additional classes for the container div.
 * @param {string} [props.animationType='spin'] - Type of animation ('spin' or 'pulse').
 */
function LogoLoader({ size = 'h-16 w-16', className = '', animationType = 'spin' }) {

  const animationClass = animationType === 'pulse' ? 'animate-pulse opacity-75' : 'animate-spin';

  return (
    // Container div - centers the logo. Add more classes via props if needed.
    // Example: For a full-screen overlay, add 'fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-75 backdrop-blur-sm' via className prop
    <div className={`flex justify-center items-center ${className}`}>
      <img
        // Ensure your logo path is correct (assuming it's in /public)
        src="/fullLog.png"
        // Alt text for accessibility during loading state
        alt="Loading..."
        // Apply size and the chosen animation class
        className={`${size} ${animationClass}`}
      />
    </div>
  );
}

export default LogoLoader;