import React from 'react';

// Assume IconComponent is a React component passed as a prop
function FeatureCard({ IconComponent, title, description }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-green-600/30 shadow-md text-center sm:text-left"> {/* Card styling */}
      {IconComponent && (
        <div className="flex justify-center sm:justify-start mb-4">
             {/* Render the icon passed as a prop */}
             <IconComponent className="h-10 w-10 text-green-400" aria-hidden="true" />
         </div>
      )}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-base text-gray-400">{description}</p>
    </div>
  );
}

export default FeatureCard;