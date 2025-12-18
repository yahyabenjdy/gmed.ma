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
          link: "/courses", // Updated link
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
          link: "/courses", // Updated link
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
          link: "/courses", // Updated link
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
          link: "/courses", // Updated link
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
          link: "/courses", // Updated link
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
          link: "/courses", // Updated link
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
          price: "900 درهم", // CHANGED: Arabic Currency
          features: [
            "حصتان في الأسبوع (3 ساعات)",
            "مدرسون ذوو خبرة طبية",
            "... والمزيد",
          ],
          button: "التفاصيل",
          link: "/courses", // Updated link
        },
        {
          title: "دورة مكثفة",
          level: "المستوى A1 - C1",
          price: "1400 درهم", // CHANGED: Arabic Currency
          features: [
            "5 حصص في الأسبوع (ساعتان)",
            "مدرسون ذوو خبرة طبية",
            "... والمزيد",
          ],
          button: "التفاصيل",
          featured: true,
          link: "/courses", // Updated link
        },
        {
          title: "دورة قياسية",
          level: "المستوى A1 - C1",
          price: "900 درهم", // CHANGED: Arabic Currency
          features: [
            "3 حصص في الأسبوع (ساعتان)",
            "مدرسون ذوو خبرة طبية",
            "... والمزيد",
          ],
          button: "التفاصيل",
          link: "/courses", // Updated link
        },
      ],
    },
  };

  const t = content[lang] || content.de;

  return (
    // REDUCED VERTICAL PADDING: py-20 -> py-14
    // Added ID for navigation back
    <section
      id="courses-section"
      className="py-14 bg-medical-navy"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Reduced margin-bottom (mb-12 -> mb-10) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className={lang === "ar" ? "text-right" : "text-left"}>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              {t.title}
            </h2>
            <p className="text-medical-light/80 text-lg max-w-2xl font-medium">
              {t.subtitle}
            </p>
          </div>

          <Link
            to="/courses"
            className={`hidden md:flex items-center gap-2 text-medical-cyan font-bold hover:text-white transition-colors ${
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
                // REDUCED PADDING: p-8 -> p-6
                className={`relative bg-white p-6 rounded-[1.5rem] transition-all duration-300 group
                  ${
                    isActive
                      ? "shadow-2xl border-2 border-medical-cyan ring-4 ring-medical-cyan/40 -translate-y-2"
                      : "shadow-xl border border-white/10 hover:-translate-y-2"
                  }`}
              >
                {card.featured && (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 bg-medical-cyan text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-50 grayscale"
                    }`}
                  >
                    {t.popularBadge}
                  </span>
                )}

                {/* Title & Price: Reduced margins (mb-6 -> mb-4, pb-6 -> pb-4) */}
                <div className="mb-4 border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-black text-medical-navy mb-1">
                    {card.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                    <Signal size={16} className="text-medical-cyan" />
                    <span className="font-bold text-medical-cyan">
                      {card.level}
                    </span>
                  </div>
                  <div className="text-3xl font-black text-medical-navy">
                    {card.price}
                  </div>
                </div>

                {/* Features: Reduced spacing (space-y-4 -> space-y-3, mb-8 -> mb-6) */}
                <ul className="space-y-3 mb-6">
                  {card.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-600 font-medium text-sm"
                    >
                      <div className="w-5 h-5 rounded-full bg-medical-cyan/10 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-medical-cyan" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button: Updated Link Logic */}
                <Link
                  to={card.link || "/courses"}
                  state={{ fromHomeSection: true }} // <--- PASSING STATE HERE
                  className={`w-full block text-center py-3 rounded-xl font-bold transition-all shadow-md active:scale-95 text-sm
                    ${
                      isActive
                        ? "bg-medical-cyan text-white shadow-medical-cyan/30"
                        : "bg-slate-100 text-medical-navy hover:bg-slate-200"
                    }`}
                >
                  {card.button}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-medical-cyan font-bold"
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
