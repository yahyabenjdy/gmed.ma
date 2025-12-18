import React from "react";
import {
  Languages,
  FileCheck,
  Stethoscope,
  Plane,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Ausbildung = ({ lang }) => {
  const content = {
    de: {
      title: "Ausbildung (Berufsausbildung)",
      subtitle: "Werden Sie Pflegekraft in Deutschland - Bezahlte Ausbildung.",
      steps: [
        {
          num: "1",
          title: "Sprachvorbereitung",
          desc: "Erreichen des B2-Niveaus (Goethe/Telc/ÖSD).",
          icon: <Languages size={28} />,
        },
        {
          num: "2",
          title: "Dokumentenvorbereitung",
          desc: "Übersetzung und Anerkennung der Zeugnisse.",
          icon: <FileCheck size={28} />,
        },
        {
          num: "3",
          title: "Vorstellungsgespräche",
          desc: "Vermittlung an Partnerkliniken.",
          icon: <Stethoscope size={28} />,
        },
        {
          num: "4",
          title: "Visum & Abreise",
          desc: "Komplette Unterstützung bei Behördengängen.",
          icon: <Plane size={28} />,
        },
      ],
      cta: "Karriere starten",
    },
    fr: {
      title: "Ausbildung (Formation Professionnelle)",
      subtitle: "Devenez infirmier(e) en Allemagne - Formation rémunérée.",
      steps: [
        {
          num: "1",
          title: "Préparation Linguistique",
          desc: "Atteindre le niveau B2 certifié (Goethe/Telc/ÖSD).",
          icon: <Languages size={28} />,
        },
        {
          num: "2",
          title: "Préparation Dossier",
          desc: "Traduction et reconnaissance des diplômes.",
          icon: <FileCheck size={28} />,
        },
        {
          num: "3",
          title: "Entretiens",
          desc: "Mise en relation avec des cliniques partenaires.",
          icon: <Stethoscope size={28} />,
        },
        {
          num: "4",
          title: "Visa & Départ",
          desc: "Assistance complète pour les démarches consulaires.",
          icon: <Plane size={28} />,
        },
      ],
      cta: "Lancer ma carrière",
    },
    ar: {
      title: "Ausbildung (التكوين المهني)",
      subtitle: "كن ممرضاً في ألمانيا - تدريب مدفوع الأجر.",
      steps: [
        {
          num: "1",
          title: "التحضير اللغوي",
          desc: "الوصول لمستوى B2 معتمد (Goethe/Telc/ÖSD).",
          icon: <Languages size={28} />,
        },
        {
          num: "2",
          title: "تجهيز الملف",
          desc: "ترجمة والاعتراف بالشهادات.",
          icon: <FileCheck size={28} />,
        },
        {
          num: "3",
          title: "المقابلات",
          desc: "الربط مع العيادات الشريكة.",
          icon: <Stethoscope size={28} />,
        },
        {
          num: "4",
          title: "التأشيرة والسفر",
          desc: "دعم شامل للإجراءات القنصلية.",
          icon: <Plane size={28} />,
        },
      ],
      cta: "ابدأ مسيرتك المهنية",
    },
  };

  const t = content[lang] || content.de;

  return (
    // Updated background to #e0f9fd (15% intensity)
    <section className="py-16 bg-[#e0f9fd]" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-medical-navy mb-3">
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 font-medium">{t.subtitle}</p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-medical-navy/10 -z-10 px-12">
            <div className="w-full h-full bg-medical-navy/10"></div>
          </div>

          {t.steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-2xl border border-white/50 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out group text-center"
            >
              {/* MAIN ICON CIRCLE */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full bg-slate-50 border-4 border-white rounded-full flex items-center justify-center text-medical-cyan shadow-inner group-hover:bg-medical-cyan group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>

                {/* SMALL NUMBER BADGE */}
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-medical-navy text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white shadow-md z-10">
                  {step.num}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-lg font-bold text-medical-navy mb-2 group-hover:text-medical-cyan transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/ausbildung"
            className="inline-flex items-center gap-2 bg-medical-navy text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-medical-navy/20 hover:bg-medical-cyan hover:shadow-medical-cyan/30 transition-all hover:-translate-y-1 group"
          >
            {t.cta}
            <ArrowRight
              size={18}
              className={`transition-transform group-hover:translate-x-1 ${
                lang === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""
              }`}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ausbildung;
