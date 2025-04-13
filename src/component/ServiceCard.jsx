import React from 'react';

function ServiceCard({ IconComponent, title, description }) {
  return (
    <div className="bg-slate-900 p-6 rounded-lg border border-green-600/30 shadow-md h-full  transition delay-150 duration-300 ease-in-out hover:scale-105"> {/* Card styling */}
      {IconComponent && (
        <div className="mb-4">
          {/* Render the icon */}
          <IconComponent className="h-10 w-10 text-green-400" aria-hidden="true" />
        </div>
      )}
      {/* Remove emoji from title if icon is present */}
      <h3 className="text-lg font-semibold text-white mb-2">{title.replace(/[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}]/gu, '').trim()}</h3>
      <p className="text-md text-gray-400">{description}</p>
    </div>
  );
}

export default ServiceCard;