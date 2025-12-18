import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const TopBar = ({ lang }) => {
  const content = {
    de: {
      address: "App. 8, Residenz Al Masjid | Av Fal Ould Oumeir, Rabat",
      workingHours: "Mo - Sa: 10:00 - 19:00 Uhr",
    },
    fr: {
      address: "Apprt 8, Résidence Al Masjid | Av Fal Ould Oumeir, Rabat",
      workingHours: "Lun - Sam: 10h00 - 19h00",
    },
    ar: {
      address: "شقة 8، إقامة المسجد | شارع فال ولد عمير، الرباط",
      workingHours: "الاثنين - السبت: 10:00 - 19:00",
    },
  };

  const t = content[lang] || content.fr;

  return (
    <div className="bg-medical-navy text-white py-2.5 text-[10px] xl:text-xs hidden lg:block border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container with equal spacing between all 4 elements */}
        <div
          className={`flex items-center justify-between w-full ${
            lang === "ar" ? "flex-row-reverse" : ""
          } gap-4`}
        >
          {/* 1. Address */}
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-medical-cyan shrink-0" />
            <span className="whitespace-nowrap">{t.address}</span>
          </div>

          {/* 2. Phone Numbers */}
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-medical-cyan shrink-0" />
            <div className="flex gap-2">
              <a
                href="tel:+212702455555"
                className="hover:text-medical-cyan transition-colors whitespace-nowrap"
              >
                07 02 45 55 55
              </a>
              <span className="text-white/30">/</span>
              <a
                href="tel:+212775430287"
                className="hover:text-medical-cyan transition-colors whitespace-nowrap"
              >
                07 75 43 02 87
              </a>
            </div>
          </div>

          {/* 3. Email */}
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-medical-cyan shrink-0" />
            <a
              href="mailto:contact@gmed.ma"
              className="hover:text-medical-cyan transition-colors lowercase whitespace-nowrap"
            >
              contact@gmed.ma
            </a>
          </div>

          {/* 4. Working Time */}
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-medical-cyan shrink-0" />
            <span className="whitespace-nowrap">{t.workingHours}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
