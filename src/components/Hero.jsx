import React from "react";
import { ArrowRight, Users, Star, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = ({ lang }) => {
  const content = {
    fr: {
      tag: "Partenaire Officiel pour votre carrière",
      title: "Votre avenir médical en ",
      highlight: "Allemagne",
      desc: "Accompagnement complet pour médecins et infirmiers : de l'apprentissage de la langue jusqu'à l'obtention de l'Approbation.",
      ctaPrimary: "Commencer mon parcours",
      ctaSecondary: "Nos Programmes",
      stats: [
        { label: "Étudiants", value: "+500", icon: <Users size={18} /> },
        { label: "Réussite", value: "99%", icon: <Star size={18} /> },
        { label: "Partenaires", value: "+20", icon: <Building2 size={18} /> },
      ],
    },
    de: {
      tag: "Offizieller Partner für Ihre Karriere",
      title: "Ihre medizinische Zukunft in ",
      highlight: "Deutschland",
      desc: "Vollständige Unterstützung für Ärzte und Pflegekräfte: vom Sprachlernen bis zum Erhalt der Approbation.",
      ctaPrimary: "Jetzt starten",
      ctaSecondary: "Programme",
      stats: [
        { label: "Studenten", value: "+500", icon: <Users size={18} /> },
        { label: "Erfolgsquote", value: "99%", icon: <Star size={18} /> },
        { label: "Partner", value: "+20", icon: <Building2 size={18} /> },
      ],
    },
    ar: {
      tag: "شريك رسمي لمسيرتكم المهنية",
      title: "مستقبلكم الطبي في ",
      highlight: "ألمانيا",
      desc: "دعم شامل للأطباء والممرضين: من تعلم اللغة حتى الحصول على ترخيص مزاولة المهنة.",
      ctaPrimary: "ابدأ مسارك الآن",
      ctaSecondary: "برامجنا",
      stats: [
        { label: "طالب", value: "+500", icon: <Users size={18} /> },
        { label: "نسبة النجاح", value: "99%", icon: <Star size={18} /> },
        { label: "شريك", value: "+20", icon: <Building2 size={18} /> },
      ],
    },
  };

  const t = content[lang] || content.fr;

  // Helper function to assign flag colors to stats icons
  const getStatColor = (index) => {
    if (index === 0) return "text-black"; // CHANGED: First icon is now Black
    if (index === 1) return "text-red-500"; // Red for 2nd
    if (index === 2) return "text-yellow-400"; // Gold for 3rd
    return "text-medical-cyan";
  };

  return (
    <section
      // 1. Added dir attribute for automatic text alignment
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative min-h-[75vh] flex items-center justify-center bg-medical-navy pt-10 pb-10 overflow-hidden text-center"
    >
      {/* Background Logic */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="GMED Center Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-medical-navy/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 bg-medical-navy/40 backdrop-blur-sm border border-white/20 text-medical-cyan px-5 py-2 rounded-full text-sm font-bold mb-6">
          <span className="w-2 h-2 rounded-full bg-medical-cyan animate-pulse"></span>
          {t.tag}
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 max-w-4xl drop-shadow-lg">
          {t.title}
          {/* UPDATED HIGHLIGHT: Text Gradient starts with Black */}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-black via-red-500 to-yellow-500">
            {t.highlight}
            <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-black via-red-600 to-yellow-500 rounded-full" />
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white mb-10 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md">
          {t.desc}
        </p>

        {/* Premium Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <Link
            to="/register"
            className="relative group overflow-hidden px-10 py-4 bg-gradient-to-r from-medical-cyan to-[#0096b4] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:-translate-y-1 flex items-center gap-2"
          >
            <span className="relative z-10">{t.ctaPrimary}</span>
            {/* 2. Arrow Rotation Logic for Arabic */}
            <ArrowRight
              size={22}
              className={`relative z-10 transition-transform duration-300 group-hover:translate-x-1 ${
                lang === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""
              }`}
            />
            <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:animate-shine" />
          </Link>

          <Link
            to="/courses"
            className="px-10 py-4 bg-medical-navy/40 backdrop-blur-md border border-white/30 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-medical-navy/60 flex items-center gap-2 group"
          >
            {t.ctaSecondary}
            <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-medical-cyan transition-colors" />
          </Link>
        </div>

        {/* Compact Statistics Card */}
        {/* CHANGED: w-[90%] for mobile, sm:w-full for tablet/desktop */}
        <div
          className={`w-[90%] sm:w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 bg-medical-navy/50 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl divide-y sm:divide-y-0 sm:divide-x divide-white/10 ${
            lang === "ar" ? "sm:divide-x-reverse" : ""
          }`}
        >
          {t.stats.map((stat, idx) => (
            <div
              key={idx}
              className="px-6 py-4 flex flex-col items-center justify-center text-center group transition-colors hover:bg-white/5"
            >
              {/* UPDATED ICON COLOR: Cycles through Black -> Red -> Gold */}
              <div
                className={`${getStatColor(
                  idx
                )} mb-2 transition-transform group-hover:scale-110`}
              >
                {stat.icon}
              </div>
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
