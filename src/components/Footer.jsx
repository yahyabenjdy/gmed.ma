import React from "react";

const Footer = () => {
  return (
    <footer className="bg-medical-navy py-6 relative">
      {/* 1. TOP BORDER: Solid Rouge Bordeaux (Replaces Gradient) */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-[#800020]"></div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm font-medium">
          &copy; 2025 GMED Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
