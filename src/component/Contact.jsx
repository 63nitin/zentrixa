import React from 'react'; // Assuming useState might be needed later for form handling
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

// Reusing placeholder icons from previous examples or use react-icons
const PhoneIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> </svg>
);
const EmailIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> </svg>
);
const LocationIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /> </svg>
);
const ChevronDownIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /> </svg>
);


 function Contact() {
  // TODO: Add state and handler for form submission
  // const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  // const handleSubmit = (e) => { e.preventDefault(); console.log(formData); }

  return (
    // Use main dark background for the page if needed, or rely on section backgrounds
    <div className="bg-gray-950">
      <Helmet>
        {/* Updated Title/Desc slightly for Web Dev Agency context */}
        <title>Contact Us | Zentrixa - Web Development & Digital Solutions</title>
        <meta name="description" content="Get in touch with Zentrixa for inquiries about web development, SEO, and digital solutions." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="contact Zentrixa, web development contact, SEO agency contact" />
      </Helmet>

      {/* Hero Section */}
      {/* Adjusted background to fit dark theme better */}
      <section className="bg-gradient-to-br from-green-950  to-gray-900 py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            {/* Updated text slightly */}
            Get In Touch With <span className="text-green-400">Zentrixa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto" // Changed text color
          >
            {/* Updated text slightly */}
            Have questions about building your website or boosting your online presence? We're here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      {/* Changed background to fit dark theme */}
      <section className="py-12 md:py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Form/Info container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
             // Changed background, removed light shadow, added dark border
            className="max-w-5xl mx-auto bg-slate-900 rounded-xl shadow-lg overflow-hidden border border-gray-700/50"
          >
            <div className="flex flex-col md:flex-row">

              {/* Contact Form */}
              <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-10">
                {/* Changed heading color */}
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send us a message</h2>
                {/* Add onSubmit={handleSubmit} to form tag when ready */}
                <form className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      {/* Changed label color */}
                      <label htmlFor="name" className="block text-sm text-gray-300 mb-1 font-medium">Name</label>
                      {/* Changed input styling for dark theme */}
                      <input
                        type="text"
                        id="name"
                        name="name" // Added name attribute
                        className="w-full px-3 py-2.5 text-sm bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all"
                        placeholder="Your name"
                        // Add value and onChange for controlled component
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-300 mb-1 font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email" // Added name attribute
                        className="w-full px-3 py-2.5 text-sm bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-300 mb-1 font-medium">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject" // Added name attribute
                      className="w-full px-3 py-2.5 text-sm bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-300 mb-1 font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message" // Added name attribute
                      rows="4"
                      className="w-full px-3 py-2.5 text-sm bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    // Changed button styling to primary green
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-lg transition duration-300 shadow hover:shadow-lg text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info Panel */}
              {/* Changed background, adjusted text colors */}
              <div className="w-full md:w-2/5 bg-gray-900 text-gray-300 p-6 sm:p-8 md:p-10 border-t md:border-t-0 md:border-l border-gray-700/50">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white">Contact Information</h3>
                <div className="space-y-6 sm:space-y-8">
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-500/10 p-2 sm:p-3 rounded-full text-green-400">
                       <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h4 className="text-sm sm:text-base font-semibold text-white">Phone</h4>
                      <a href="tel:+918423287003" className="text-xs sm:text-sm text-gray-400 hover:text-green-400 mt-1 block">+91-8423287003</a> {/* Replace */}
                    </div>
                  </div>
                   {/* Email */}
                  <div className="flex items-start">
                     <div className="flex-shrink-0 bg-green-500/10 p-2 sm:p-3 rounded-full text-green-400">
                        <EmailIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                     </div>
                     <div className="ml-3 sm:ml-4">
                       <h4 className="text-sm sm:text-base font-semibold text-white">Email</h4>
                       <a href="mailto:support@zentrixa.com" className="text-xs sm:text-sm text-gray-400 hover:text-green-400 mt-1 block">sriyanshuawasthi@gmail.com</a> {/* Replace */}
                     </div>
                   </div>
                   {/* Address */}
                   <div className="flex items-start">
                     <div className="flex-shrink-0 bg-green-500/10 p-2 sm:p-3 rounded-full text-green-400">
                       <LocationIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                     </div>
                     <div className="ml-3 sm:ml-4">
                       <h4 className="text-sm sm:text-base font-semibold text-white">Address</h4>
                       <p className="text-xs sm:text-sm text-gray-400 mt-1">BKT Lane<br />Lucknow, UP, India</p> {/* Replace */}
                     </div>
                   </div>
                   {/* Support Hours (Optional) */}
                   {/* <div className="pt-4 border-t border-gray-700/50">
                     <h4 className="text-sm sm:text-base font-semibold text-white mb-2">Support Hours</h4>
                     <p className="text-xs sm:text-sm text-gray-400">24/7 Customer Support</p>
                   </div> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section - Placeholder only */}
      {/* Changed background, text colors, icon style */}
      <section className="py-12 md:py-16 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12"
          >
            Find Our <span className="text-green-400">Location</span>
          </motion.h2>
          {/* Replace this div with an actual map embed (e.g., Google Maps iframe) */}
          {/* Styled to look like a placeholder */}
          <div className="bg-slate-800 rounded-xl shadow-md overflow-hidden border border-gray-700/50">
            <div className="h-64 sm:h-80 md:h-96 w-full bg-dots-pattern flex items-center justify-center relative">
              {/* Placeholder Content */}
              <div className="relative z-10 text-center p-4 sm:p-6">
                 <div className="inline-block bg-gray-900 p-3 sm:p-4 rounded-full shadow-lg mb-3 sm:mb-4 border border-gray-700">
                    <LocationIcon className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
                 </div>
                 <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Zentrixa HQ</h3>
                 <p className="text-xs sm:text-sm text-gray-400">Lucknow, Uttar Pradesh</p>
                  {/* Add a link to Google Maps */}
                  <a
                     href="#" // Add Google Maps link here
                     target="_blank"
                     rel="noopener noreferrer"
                     className="mt-4 inline-block text-xs sm:text-sm text-green-400 hover:text-green-300 font-medium"
                  >
                     View on Map &rarr;
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* Changed background, heading color */}
      <section className="py-12 md:py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12"
          >
            Frequently Asked <span className="text-green-400">Questions</span>
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[ // Using example FAQs, replace with yours
              { question: "What services does Zentrixa offer?", answer: "We specialize in custom web development, SEO optimization, social media management, and online reputation boosting tailored for startups and businesses." },
              { question: "What is the typical project timeline?", answer: "Timelines vary based on project scope. A standard website typically takes 4-8 weeks, while ongoing SEO or social media management is month-to-month." },
              { question: "How do I get started?", answer: "Simply fill out the contact form above or give us a call! We'll schedule a free consultation to discuss your needs and propose a solution." }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true, amount: 0.3 }}
                 // Changed border color
                className="border border-gray-700/50 rounded-lg overflow-hidden bg-slate-900"
              >
                {/* Using <details> for native browser accordion */}
                <details className="group">
                  <summary className="flex justify-between items-center p-4 sm:p-5 cursor-pointer hover:bg-slate-800 transition-colors">
                    {/* Changed text colors */}
                    <h3 className="text-sm sm:text-base font-medium text-white">{faq.question}</h3>
                    <ChevronDownIcon className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-gray-700/50">
                     {/* Changed text color */}
                    <p className="text-sm text-gray-400 pt-3">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default React.memo(Contact)