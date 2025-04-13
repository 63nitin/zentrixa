import React from 'react';

function StepItem({ stepNumber, IconComponent, title, description, isFirst = false }) {
  return (
    // Container for a single step - takes full width on mobile, 1/4 on desktop
    <div className="flex flex-col items-center text-center w-full md:w-1/4 px-3">
      {/* Icon Container */}
      <div className={`
        w-20 h-20 rounded-xl flex items-center justify-center relative mb-5 shadow-md
        ${isFirst ? 'bg-green-500' : 'bg-slate-800 border border-gray-700/60'}
      `}>
        {/* Step Number Badge */}
        <span className="absolute -top-3 -right-3 bg-gray-600 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center border-2 border-gray-950">
          {stepNumber}
        </span>
        {/* Icon */}
        <IconComponent className={`w-9 h-9 ${isFirst ? 'text-white' : 'text-green-400'}`} />
      </div>
      {/* Text Content */}
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

export default StepItem;