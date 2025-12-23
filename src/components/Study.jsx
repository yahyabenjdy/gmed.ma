import React from "react";
import {
  GraduationCap,
  Globe,
  Coins,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const Study = ({ lang }) => {
  const content = {
    de: {
      tag: "Akademische Laufbahn",
      title: "Studium in Deutschland",
      subtitle:
        "Erfüllen Sie sich Ihren Traum vom Medizinstudium an weltbesten Universitäten – fast ohne Studiengebühren.",
      cta: "Studienprogramme ansehen",
      features: [
        {
          title: "Kostenloses Studium",
          desc: "Keine Studiengebühren an staatlichen Universitäten.",
          icon: <Coins size={24} />,
        },
        {
          title: "Weltweite Anerkennung",
          desc: "Ein deutscher Abschluss öffnet Türen weltweit.",
          icon: <Globe size={24} />,
        },
        {
          title: "Praxisorientierung",
          desc: "Modernste Ausstattung und klinische Forschung.",
          icon: <BookOpen size={24} />,
        },
      ],
    },
    fr: {
      tag: "Parcours Académique",
      title: "Étudier en Allemagne",
      subtitle:
        "Réalisez votre rêve de devenir médecin dans les meilleures universités mondiales – quasiment sans frais de scolarité.",
      cta: "Découvrir les programmes",
      features: [
        {
          title: "Études Gratuites",
          desc: "Aucun frais de scolarité dans les universités publiques.",
          icon: <Coins size={24} />,
        },
        {
          title: "Reconnaissance Mondiale",
          desc: "Un diplôme allemand ouvre des portes partout dans le monde.",
          icon: <Globe size={24} />,
        },
        {
          title: "Formation Pratique",
          desc: "Équipements modernes et recherche clinique.",
          icon: <BookOpen size={24} />,
        },
      ],
    },
    ar: {
      tag: "المسار الأكاديمي",
      title: "الدراسة في ألمانيا",
      subtitle:
        "حقق حلمك بدراسة الطب في أفضل الجامعات العالمية - دراسة مجانية تقريباً.",
      cta: "اكتشف البرامج الدراسية",
      features: [
        {
          title: "دراسة مجانية",
          desc: "بدون رسوم دراسية في الجامعات الحكومية.",
          icon: <Coins size={24} />,
        },
        {
          title: "اعتراف عالمي",
          desc: "الشهادة الألمانية تفتح لك الأبواب في جميع أنحاء العالم.",
          icon: <Globe size={24} />,
        },
        {
          title: "تدريب عملي",
          desc: "أحدث المعدات والبحوث السريرية.",
          icon: <BookOpen size={24} />,
        },
      ],
    },
  };

  const t = content[lang] || content.de;

  // Helper to assign flag colors to the feature list (White -> Red -> Gold)
  const getFeatureColors = (index) => {
    if (index === 0)
      return {
        // Using White for the "Black" band because black is invisible on the navy background
        icon: "text-white",
        bg: "bg-white/10",
        hover: "group-hover:bg-white group-hover:text-medical-navy",
      };
    if (index === 1)
      return {
        icon: "text-red-500",
        bg: "bg-red-500/10",
        hover: "group-hover:bg-red-600 group-hover:text-white",
      };
    return {
      icon: "text-yellow-500",
      bg: "bg-yellow-500/10",
      hover: "group-hover:bg-yellow-500 group-hover:text-black",
    };
  };

  return (
    <section
      id="study-section"
      className="py-14 bg-medical-navy relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Background Decor - White/5 for subtle effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT: Content */}
          <div
            className={`lg:w-1/2 ${lang === "ar" ? "text-right" : "text-left"}`}
          >
            {/* Tag: Dark Blue Background with White Text */}
            <span className="inline-block py-1 px-3 rounded-lg bg-[#004C73] text-white font-bold text-xs uppercase tracking-wider mb-4 border border-white/20">
              {t.tag}
            </span>

            {/* German Accent: Gold Underline */}
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight relative inline-block">
              {t.title}
              <div className="absolute -bottom-1 left-0 w-1/4 h-1.5 bg-yellow-500 rounded-full" />
            </h2>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {t.subtitle}
            </p>

            <Link
              to="/study"
              state={{ fromHomeSection: true }}
              // CHANGED: Default is Dark Blue, Hover is White
              className="inline-flex items-center gap-2 bg-[#004C73] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white hover:text-[#004C73] transition-all shadow-lg hover:shadow-white/20 group"
            >
              {t.cta}
              <ArrowRight
                size={20}
                className={`transition-transform group-hover:translate-x-1 ${
                  lang === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""
                }`}
              />
            </Link>
          </div>

          {/* RIGHT: Features Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid gap-4">
              {t.features.map((feature, index) => {
                // 1. Get German Colors for this index
                const colors = getFeatureColors(index);

                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:bg-white/10 transition-colors duration-300 group"
                  >
                    {/* 2. Apply German Colors to Icon Container */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${colors.icon} ${colors.bg} ${colors.hover}`}
                    >
                      {feature.icon}
                    </div>
                    <div className={lang === "ar" ? "text-right" : "text-left"}>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
