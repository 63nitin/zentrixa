import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

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

// --- Social Links Data ---
const socialLinks = [
    { name: 'Facebook', href: '#', Icon: FacebookIcon },
    { name: 'Instagram', href: '#', Icon: InstagramIcon },
    { name: 'X/Twitter', href: '#', Icon: XTwitterIcon },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  // Reusable link style
  const linkStyle = "hover:text-green-400 transition-colors duration-200";

  return (
    <footer className=" text-gray-400 border-t border-gray-700/50">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Column 1: Logo & Tagline */}
          <div>
            {/* Logo (reuse from navbar) */}
            <Link to="/" className="inline-block mb-4" aria-label="Go to Homepage">
              <img src="/ZentrixaLogo.png" alt="Zentrixa Logo" className="h-12 w-auto ml-4 scale-300 " />
              {/* Optionally add text part if needed: <span className="text-xl font-bold text-white ml-2">entrixa</span> */}
            </Link>
            <p className="text-sm leading-relaxed mt-3">
              Building stunning digital experiences. We help businesses grow online with web development, social media, and reputation management.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-base font-semibold text-white mb-4 tracking-wide">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className={linkStyle}>Home</Link></li>
              <li><Link to="/about" className={linkStyle}>About Us</Link></li>
              <li><Link to="/services" className={linkStyle}>Services</Link></li>
              {/* Add other key links */}
              {/* <li><Link to="/contact" className={linkStyle}>Contact</Link></li> */}
            </ul>
          </div>

          {/* Column 3: Key Services */}
          <div>
            <h5 className="text-base font-semibold text-white mb-4 tracking-wide">Our Expertise</h5>
            <ul className="space-y-2 text-sm">
               {/* Update these links if you have specific service anchors/pages */}
              <li><Link to="/services#web-development" className={linkStyle}>Web Development</Link></li>
              <li><Link to="/services#social-media" className={linkStyle}>Social Media</Link></li>
              <li><Link to="/services#reputation" className={linkStyle}>Reputation Management</Link></li>
              <li><Link to="/services#analytics" className={linkStyle}>Analytics</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h5 className="text-base font-semibold text-white mb-4 tracking-wide">Get In Touch</h5>
            <ul className="space-y-3 text-sm">
              <li>
                 <a href="tel:+12125551212" className={`flex items-center ${linkStyle}`}>
                   {/* Phone Icon Placeholder */}
                   <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                   +1 (212) 555-1212 {/* Replace */}
                 </a>
              </li>
              <li>
                 <a href="mailto:info@zentrixa.com" className={`flex items-center ${linkStyle}`}>
                   {/* Email Icon Placeholder */}
                   <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                   info@zentrixa.com {/* Replace */}
                 </a>
               </li>
              <li className="flex items-start">
                 {/* Location Icon Placeholder */}
                 <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                 <span>Prayagraj, Uttar Pradesh, India</span> {/* Replace with your address if needed */}
               </li>
            </ul>
          </div>

        </div> {/* End Top Grid */}

        {/* Bottom Bar: Copyright & Social */}
        <div className="border-t border-gray-800/50 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} Zentrixa. All Rights Reserved.</p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
             {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank" // Open social links in new tab
                rel="noopener noreferrer" // Security best practice
                className="text-gray-500 hover:text-green-400 transition-colors duration-300"
                aria-label={item.name}
              >
                <item.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div> {/* End Bottom Bar */}

      </div> {/* End Container */}
    </footer>
  );
}

export default Footer;