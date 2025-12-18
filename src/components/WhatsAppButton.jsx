import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "212702455555"; // Format: Country Code + Number
  const message = encodeURIComponent(
    "Bonjour GMED Center, j'aimerais avoir plus d'informations sur vos programmes."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] group flex items-center gap-3"
      aria-label="Contact us on WhatsApp"
    >
      {/* Tooltip Label (Appears on Hover) */}
      <span className="bg-white text-medical-navy font-bold text-sm px-4 py-2 rounded-full shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block border border-slate-100">
        Contactez-nous
      </span>

      {/* The Button */}
      <div className="relative">
        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>

        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
          <MessageCircle size={28} fill="currentColor" className="text-white" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
