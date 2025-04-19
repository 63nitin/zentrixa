// src/components/WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon

// Define default values (replace with your actual number)
const DEFAULT_PHONE_NUMBER = '918423287003'; // IMPORTANT: Replace with your number (Country Code + Number, no '+', '-', or spaces)
const DEFAULT_MESSAGE = "Hello Zentrixa! I'm interested in your web development services."; // Optional pre-filled message

function WhatsAppButton({
  phoneNumber = DEFAULT_PHONE_NUMBER,
  message = DEFAULT_MESSAGE
}) {

  // Encode the message for the URL
  const encodedMessage = encodeURIComponent(message);

  // Construct the WhatsApp click-to-chat URL
  // wa.me is generally preferred over api.whatsapp.com/send
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank" // Open in new tab/WhatsApp app
      rel="noopener noreferrer" // Security best practice
      aria-label="Chat on WhatsApp" // Accessibility
      className="
        fixed                 
        bottom-5 right-5     
        z-40                  
        bg-green-500          
        text-white          
        p-3                  
        rounded-full          
        shadow-lg             
        hover:bg-green-600    
        hover:scale-110      
        focus:outline-none    
        focus:ring-2          
        focus:ring-offset-2
        focus:ring-green-400
        focus:ring-offset-gray-900 
        transition-all duration-300 ease-in-out 
      "
    >
      {/* WhatsApp Icon */}
      <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" /> {/* Adjust icon size */}
    </a>
  );
}

export default WhatsAppButton;