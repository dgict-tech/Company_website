import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChat() {
  return (
    <div className="fixed bottom-8 left-5 md:bottom-10 md:left-6 flex items-center gap-2 group z-50">
      <a
        href="https://wa.me/2349026752559?text=Hello%20DGICT!%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white hover:text-red-700 p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp size={28} />
      </a>
      <span className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-white text-green-700 text-sm font-semibold px-3 py-1 rounded-lg shadow-md">
        Chat with Us
      </span>
    </div>
  );
}
