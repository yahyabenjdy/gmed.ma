import React, { useState } from "react";
import { Check, Signal, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = ({ lang }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const content = {
    de: {
      title: "Unsere Sprachprogramme",
      subtitle:
        "Gezielte Vorbereitung auf die Anforderungen im deutschen Gesundheitssystem.",
      cta: "Alle Kurse ansehen",
      popularBadge: "Beliebt",
      cards: [
        {
          title: "Flexibler Kurs",
          level: "Niveau A1 - C1",
          price: "900 DH",
          features: [
            "2x pro Woche (je 3 Std.)",
            "Medizinisch erfahrene Lehrer",
            "... und mehr",
          ],
          button: "Mehr Details",
          link: "/courses",
        },
        {
          title: "Intensivkurs",
          level: "Niveau A1 - C1",
          price: "1400 DH",
          features: [
            "5x pro Woche (je 2 Std.)",
            "Medizinisch erfahrene Lehrer",
            "... und mehr",
          ],
          button: "Mehr Details",
          featured: true,
          link: "/courses",
        },
        {
          title: "Standardkurs",
          level: "Niveau A1 - C1",
          price: "900 DH",
          features: [
            "3x pro Woche (je 2 Std.)",
            "Medizinisch erfahrene Lehrer",
            "... und mehr",
          ],
          button: "Mehr Details",
          link: "/courses",
        },
      ],
    },
    fr: {
      title: "Nos Programmes Linguistiques",
      subtitle:
        "Préparation ciblée aux exigences du système de santé allemand.",
      cta: "Voir tous les cours",
      popularBadge: "Populaire",
      cards: [
        {
          title: "Cours Flexible",
          level: "Niveau A1 - C1",
          price: "900 DH",
          features: [
            "2x par semaine (3h/séance)",
            "Enseignants experts médicaux",
            "... et plus encore",
          ],
          button: "Détails",
          link: "/courses",
        },
        {
          title: "Cours Intensif",
          level: "Niveau A1 - C1",
          price: "1400 DH",
          features: [
            "5x par semaine (2h/séance)",
            "Enseignants experts médicaux",
            "... et plus encore",
          ],
          button: "Détails",
          featured: true,
          link: "/courses",
        },
        {
          title: "Cours Standard",
          level: "Niveau A1 - C1",
          price: "900 DH",
          features: [
            "3x par semaine (2h/séance)",
            "Enseignants experts médicaux",
            "... et plus encore",
          ],
          button: "Détails",
          link: "/courses",
        },
      ],
    },
    ar: {
      title: "برامجنا اللغوية",
      subtitle: "تحضير مستهدف لمتطلبات نظام الرعاية الصحية الألماني.",
      cta: "عرض جميع الدورات",
      popularBadge: "الأكثر طلباً",
      cards: [
        {
          title: "دورة مرنة",
          level: "المستوى A1 - C1",
          price: "900 درهم",
          features: [
            "حصتان في الأسبوع (3 ساعات)",
            "مدرسون ذوو خبرة طبية",
            "... والمزيد",
          ],
          button: "التفاصيل",
          link: "/courses",
        },
        {
          title: "دورة مكثفة",
          level: "المستوى A1 - C1",
          price: "1400 درهم",
          features: [
            "5 حصص في الأسبوع (ساعتان)",
            "مدرسون ذوو خبرة طبية",
            "... والمزيد",
          ],
          button: "التفاصيل",
          featured: true,
          link: "/courses",
        },
        {
          title: "دورة قياسية",
          level: "المستوى A1 - C1",
          price: "900 درهم",
          features: [
            "3 حصص في الأسبوع (ساعتان)",
            "مدرسون ذوو خبرة طبية",
            "... والمزيد",
          ],
          button: "التفاصيل",
          link: "/courses",
        },
      ],
    },
  };

  const t = content[lang] || content.de;

  // Define consistent color classes
  const accentColorClass = "text-[#004C73]"; // Dark Blue
  const buttonBgColorClass = "bg-[#004C73]"; // Dark Blue BG

  return (
    <section
      id="courses-section"
      className="py-14 bg-medical-navy"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className={lang === "ar" ? "text-right" : "text-left"}>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 relative inline-block">
              {t.title}
              {/* Underline: Mustard Yellow (#E1AD01) */}
              <div className="absolute -bottom-1 left-0 w-1/4 h-1 bg-[#E1AD01] rounded-full" />
            </h2>
            <p className="text-medical-light/80 text-lg max-w-2xl font-medium">
              {t.subtitle}
            </p>
          </div>

          <Link
            to="/courses"
            state={{ fromHomeSection: true }}
            // CHANGED: Removed Cyan, now uses Dark Blue on hover (inverse because background is dark)
            className={`hidden md:flex items-center gap-2 text-[#E1AD01] font-bold hover:text-white transition-colors ${
              lang === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            {t.cta}
            <ArrowRight
              size={20}
              className={lang === "ar" ? "rotate-180" : ""}
            />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.cards.map((card, index) => {
            const isActive =
              hoveredIndex === index ||
              (hoveredIndex === null && card.featured);

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                // 1. CONTAINER: Handles positioning and shadow
                className={`relative rounded-[1.5rem] transition-all duration-300 group
                  ${
                    isActive
                      ? "shadow-2xl -translate-y-2"
                      : "shadow-xl hover:-translate-y-2"
                  }`}
              >
                {/* 2. GERMAN ACCENT: Solid Border (Rouge Bordeaux) */}
                {/* Changed from gradient to solid color */}
                <div
                  className={`absolute -inset-[3px] rounded-[1.6rem] bg-[#800020] transition-opacity duration-300 -z-10 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* 3. WHITE CARD CONTENT */}
                <div
                  className={`bg-white p-6 rounded-[1.5rem] h-full border transition-colors duration-300 ${
                    isActive ? "border-transparent" : "border-white/10"
                  }`}
                >
                  {card.featured && (
                    <span
                      // Badge uses Mustard Yellow (#E1AD01)
                      className={`absolute top-0 left-1/2 -translate-x-1/2 bg-[#E1AD01] text-black px-3 py-1 rounded-b-lg text-[10px] font-black uppercase tracking-widest shadow-lg transition-all duration-300 ${
                        isActive
                          ? "opacity-100 pt-3"
                          : "opacity-50 grayscale pt-1"
                      }`}
                    >
                      {t.popularBadge}
                    </span>
                  )}

                  <div className="mb-4 border-b border-slate-100 pb-4 mt-2">
                    <h3 className="text-xl font-black text-medical-navy mb-1">
                      {card.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                      {/* 4. ICON: Removed Cyan, replaced with Dark Blue */}
                      <Signal size={16} className={accentColorClass} />
                      <span className={`font-bold ${accentColorClass}`}>
                        {card.level}
                      </span>
                    </div>
                    {/* Price turns Red on hover */}
                    <div
                      className={`text-3xl font-black transition-colors ${
                        isActive ? "text-[#800020]" : "text-medical-navy"
                      }`}
                    >
                      {card.price}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {card.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-600 font-medium text-sm"
                      >
                        <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                          <Check size={12} className="text-black" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={card.link || "/courses"}
                    state={{ fromHomeSection: true }}
                    className={`w-full block text-center py-3 rounded-xl font-bold transition-all shadow-md active:scale-95 text-sm
                    ${
                      isActive
                        ? // Button becomes Dark Blue (#004C73) on hover
                          `${buttonBgColorClass} text-white shadow-medical-navy/30`
                        : "bg-slate-100 text-medical-navy hover:bg-slate-200"
                    }`}
                  >
                    {card.button}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/courses"
            state={{ fromHomeSection: true }}
            // Cyan removed, using Mustard Yellow for visibility on Dark Navy bg
            className="inline-flex items-center gap-2 text-[#E1AD01] font-bold"
          >
            {t.cta}{" "}
            <ArrowRight
              size={20}
              className={lang === "ar" ? "rotate-180" : ""}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
