import React, { useState, useEffect } from 'react';
import LogoLoader from './LogoLoader'; // Adjust the path

function MyComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setData("Some loaded data");
      setIsLoading(false);
    }, 3000); // Simulate 3 seconds loading time

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // --- Render Loader while loading ---
  if (isLoading) {
    // You can customize size and container style
    // return <LogoLoader size="h-20 w-20" />; // Just the loader centered
    return (
        <LogoLoader
            size=""
            animationType="spin" // Or "pulse"
            // Example: Make it a full-screen overlay
            className="fixed inset-0 z-50    backdrop-blur-sm"
        />
    );
  }

  // --- Render content when loaded ---
 

}

export default MyComponent;