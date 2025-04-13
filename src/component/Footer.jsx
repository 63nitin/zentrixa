import React from 'react';

// --- Placeholder Icons ---
// TODO: Replace with actual SVGs or icons from a library (e.g., Heroicons, React Icons)
const FacebookIcon = (props) => (
    <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
);
const InstagramIcon = (props) => (
    <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
);
const XTwitterIcon = (props) => (
    <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
);
// --- End Placeholder Icons ---


// --- Services Data (from image) ---
const serviceLinks = [
  { name: 'Shared Hosting', href: '#' },
  { name: 'VPS Hosting', href: '#' },
  { name: 'Cloud Hosting', href: '#' },
  { name: 'Dedicated Server', href: '#' },
  { name: 'Domain Registration', href: '#' },
  { name: 'Website Builder', href: '#' },
];

// --- Social Links Data ---
const socialLinks = [
    { name: 'Facebook', href: '#', Icon: FacebookIcon },
    { name: 'Instagram', href: '#', Icon: InstagramIcon },
    { name: 'X/Twitter', href: '#', Icon: XTwitterIcon },
];


function Footer() {
  return (
    <footer className=" text-gray-300 py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16">

        {/* Column 1: Info & Social */}
        <div className="lg:col-span-1">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Let's Build Your <br />
            <span className="text-green-400">Online Presence!</span>
          </h2>
          <p className="text-base text-gray-400 mb-6 leading-relaxed">
            Your Website Deserves The Best. Whether It's Hosting, Domains, Or Security, We're Here To Help. Let's Get Started Today!
          </p>
          <div className="space-y-2 text-sm mb-8">
            <p><span className="font-medium text-white">Contact:</span> <a href="tel:+12125551212" className="hover:text-green-400">+1 (212) 555-1212</a></p>
            <p><span className="font-medium text-white">Instagram:</span> <a href="#" className="hover:text-green-400">@yourdomainhandle</a></p> {/* Replace handle */}
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400 transition-colors duration-300"
                aria-label={item.name}
              >
                <item.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

       
        <div className="lg:col-span-1">
          <h4 className="text-lg font-semibold text-white mb-5">
            Services
          </h4>
          <div className="flex flex-wrap gap-2">
            {serviceLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full border border-gray-700 bg-gray-800/50 text-xs text-gray-300 hover:bg-green-600/30 hover:text-white hover:border-green-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Form */}
        <div className="lg:col-span-1">
          <div className=" p-6 rounded-lg shadow-lg border border-green-600/30">
            <h4 className="text-lg font-semibold text-white mb-6">
              Secure Your Domain & Hosting Now
            </h4>
            {/* NOTE: Add form handling logic (state, onSubmit) as needed */}
            <form className="space-y-4">
              {/* Example Input (Use readOnly if it's display only) */}
              <div>
                 <label htmlFor="website" className="sr-only">Website</label>
                 <input
                    type="text"
                    name="website"
                    id="website"
                    readOnly
                    value="WebPro.com" // Or fetch dynamically
                    className="w-full px-4 py-2.5 bg-gray-800 border border-gray-600 rounded-md text-sm text-gray-400 focus:ring-green-500 focus:border-green-500 cursor-default"
                 />
              </div>
               {/* Select Hosting Plan */}
               <div>
                  <label htmlFor="hosting-plan" className="sr-only">Select hosting plan</label>
                  <select
                    id="hosting-plan"
                    name="hosting-plan"
                    className="w-full px-4 py-2.5 bg-gray-800 border border-gray-600 rounded-md text-sm text-white focus:ring-green-500 focus:border-green-500"
                    defaultValue=""
                  >
                    <option value="" disabled>Select hosting plan</option>
                    <option value="shared">Shared Hosting</option>
                    <option value="vps">VPS Hosting</option>
                    <option value="cloud">Cloud Hosting</option>
                    {/* Add other plans */}
                  </select>
               </div>
              {/* Your Email Input */}
              <div>
                <label htmlFor="email" className="sr-only">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-600 rounded-md text-sm text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              {/* Your Password Input */}
              <div>
                <label htmlFor="password" className="sr-only">Your password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your password"
                  required
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-600 rounded-md text-sm text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500"
                />
              </div>
               {/* Choose Option Select */}
               <div>
                 <label htmlFor="option-choice" className="sr-only">Please Choose Option Here</label>
                 <select
                   id="option-choice"
                   name="option-choice"
                   className="w-full px-4 py-2.5 bg-gray-800 border border-gray-600 rounded-md text-sm text-white focus:ring-green-500 focus:border-green-500"
                   defaultValue=""
                 >
                   <option value="" disabled>Please Choose Option Here</option>
                   <option value="option1">Option 1</option>
                   <option value="option2">Option 2</option>
                 </select>
               </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-md transition duration-300"
              >
                Purchase Now
              </button>
            </form>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;