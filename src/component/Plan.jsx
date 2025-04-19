import React from 'react';

const Plan = () => {
  const plans = [
    {
      no: 1,
      name: "Static Website",
      description: "4 pages",
      price: "₹7,000",
      total: "₹7,000",
      features: [
        "Basic 4-page website",
        "Static HTML/CSS",
        "Contact form",
        "Basic hosting setup",
        "❌ Mobile responsive",
        "❌ SEO optimization",
        "❌ Domain included"
      ],
    },
    {
      no: 2,
      name: "Fully Responsive Website",
      description: "4 pages",
      price: "₹8,000",
      total: "₹8,000",
      features: [
        "4-page website",
        "Mobile responsive design",
        "Contact form",
        "Basic hosting setup",
        "Modern UI/UX",
        "❌ SEO optimization",
        "❌ Domain included"
      ],
    },
    {
      no: 3,
      name: "Responsive website + SEO",
      description: "4 pages",
      price: "₹9,000",
      total: "₹9,000",
      features: [
        "4-page website",
        "Mobile responsive design",
        "Basic SEO optimization",
        "Contact form",
        "Hosting setup",
        "Google Analytics",
        "❌ Domain included"
      ],
    },
    {
      no: 4,
      name: "Responsive website + SEO + Domain",
      description: "4 pages",
      price: "₹10,000",
      total: "₹10,000",
      features: [
        "4-page website",
        "Mobile responsive design",
        "SEO optimization",
        "Free domain (1 year)",
        "Hosting setup",
        "Google Analytics",
        "SSL Certificate"
      ],
    },
    {
      no: 5,
      name: "Additional Pages",
      description: "Per Page",
      price: "₹1,500",
      total: "₹1,500",
      features: [
        "Additional web pages",
        "Custom design",
        "Mobile responsive",
        "SEO optimized",
        "Integrated with existing site",
        "Fast turnaround"
      ],
    },
    {
      no: 6,
      name: "Meta Ads (Facebook/Instagram)",
      description: "Per Ad",
      price: "Custom Quote",
      total: "As per client",
      features: [
        "Ad campaign setup",
        "Target audience research",
        "Ad creative design",
        "Performance tracking",
        "A/B testing",
        "Monthly reporting"
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-950/10 text-white rounded-2xl">
      <div className="text-center w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-10">Website Development Packages</h2>
        
        {/* Table for larger screens */}
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-900 text-left">
                <th className="p-3 border border-green-700">NO</th>
                <th className="p-3 border border-green-700">DESCRIPTION</th>
                <th className="p-3 border border-green-700">QTY</th>
                <th className="p-3 border border-green-700">PRICE</th>
                <th className="p-3 border border-green-700">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => (
                <tr key={index} className="hover:bg-green-950/50 transition-colors">
                  <td className="p-3 border border-green-700">{plan.no}</td>
                  <td className="p-3 border border-green-700 font-medium">{plan.name}</td>
                  <td className="p-3 border border-green-700">{plan.description}</td>
                  <td className="p-3 border border-green-700">{plan.price}</td>
                  <td className="p-3 border border-green-700">{plan.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards for mobile view */}
        <div className="md:hidden grid grid-cols-1 gap-6 mt-6">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-900 via-green-950 to-gray-900 border border-green-600/30 rounded-lg p-5 shadow-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>
                <span className="bg-green-800 text-emerald-200 px-2 py-1 rounded text-sm">#{plan.no}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div>
                  <p className="text-sm text-gray-400">Price</p>
                  <p className="font-medium">{plan.price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total</p>
                  <p className="font-medium">{plan.total}</p>
                </div>
              </div>
              
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                {plan.features.slice(0, 3).map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-2 rounded-lg font-medium hover:from-green-600 hover:to-green-800 transition">
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plan;