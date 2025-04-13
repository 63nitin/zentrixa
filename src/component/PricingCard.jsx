import React from 'react';

const PricingPlan = () => {
  const plans = [
    {
      name: "Starter Plan",
      tagline: "Best For Personal Use",
      originalPrice: "$15.99",
      discount: "85%",
      price: "$3.99 /Month",
      features: [
        "Ideal For Small Websites & Blogs",
        "Free SSL & 1-Click WordPress",
        "10GB SSD Storage",
        "100GB Bandwidth",
        "❌ WooCommerce",
        "❌ Dedicated IP Address",
        "❌ Free CDN",
      ],
    },
    {
      name: "Premium Plan",
      tagline: "Maximum Power & Performance",
      originalPrice: "$51.99",
      discount: "65%",
      price: "$12.99 /Month",
      features: [
        "Dedicated Resources & Speed",
        "100GB SSD Storage",
        "Unlimited Bandwidth",
        "Advanced Security & Support",
        "Scalable Cloud Infrastructure",
        "One-Click App Installation",
        "WooCommerce",
        "Dedicated IP Address",
        "Free CDN",
      ],
    },
    {
      name: "Business Plan",
      tagline: "For Growing Websites",
      originalPrice: "$31.99",
      discount: "75%",
      price: "$7.99 /Month",
      features: [
        "High-Speed Performance",
        "50GB SSD Storage",
        "Unlimited Bandwidth",
        "Daily Backups & Priority Support",
        "WooCommerce",
        "Dedicated IP Address",
        "Free CDN",
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-950/10 text-white rounded-2xl">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-10">Choose Your Hosting Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {plans.map((plan, index) => (
            <div key={index} className="h-full w-full bg-gradient-to-r from-gray-900 via-green-950 border border-green-600/30 shadow-2xl p-5 rounded-2xl transition delay-150 duration-300 ease-in-out hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-sm mb-2">{plan.tagline}</p>
              <p className="text-sm line-through">{plan.originalPrice}</p>
              <p className="text-sm p-2"><span className='bg-green-800 px-2 py-1 rounded-full text-emerald-200'>Discount {plan.discount}</span> </p>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <p className='bg-gradient-to-r p-2 from-green-500 via-green-600 to-gray-700 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-2 '><button className=" text-lg text-gray-800 ">
                Choose Plan
              </button></p>
              <ul className="text-left text-gray-400 mt-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;