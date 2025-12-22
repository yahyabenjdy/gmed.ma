import React, { useEffect } from "react";
import {
  Check,
  Calendar,
  Clock,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  Signal,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// 1. IMPORT HELMET
import { Helmet } from "react-helmet-async";

const CoursesPage = ({ lang }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    if (location.state && location.state.fromHomeSection) {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("courses-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate("/");
    }
  };

  const content = {
    de: {
      title: "Unsere Sprachprogramme",
      subtitle:
        "Gezielte Vorbereitung auf die Anforderungen im deutschen Gesundheitssystem.",
      cta: "Jetzt anmelden",
      back: "Zurück",
      courses: [
        {
          id: "intensiv",
          name: "Intensivkurs",
          level: "A1 - C1",
          price: "1400 DH",
          schedule: "5x pro Woche (je 2 Std.)",
          desc: "Der schnellste Weg zum Erfolg. Ideal für Vollzeit-Lernende.",
          features: [
            "Täglicher Unterricht",
            "Medizinisch erfahrene Lehrer",
            "Intensive Prüfungsvorbereitung",
            "Schneller Fortschritt",
          ],
          featured: true,
        },
        {
          id: "standard",
          name: "Standardkurs",
          level: "A1 - C1",
          price: "900 DH",
          schedule: "3x pro Woche (je 2 Std.)",
          desc: "Perfekte Balance zwischen Lernen und Alltag.",
          features: [
            "Regelmäßiger Unterricht",
            "Medizinisch erfahrene Lehrer",
            "Solide Grundlagen",
            "Flexibles Lernen",
          ],
        },
        {
          id: "flexibel",
          name: "Flexibler Kurs",
          level: "A1 - C1",
          price: "900 DH",
          schedule: "2x pro Woche (je 3 Std.)",
          desc: "Für Berufstätige und Studierende mit wenig Zeit.",
          features: [
            "Unterricht am Abend/Wochenende",
            "Medizinisch erfahrene Lehrer",
            "Fokus auf Kommunikation",
            "Individuelles Tempo",
          ],
        },
        {
          id: "hybrid",
          name: "Kombikurs (Hybrid)",
          level: "A1 - C1",
          price: "900 DH",
          schedule: "1x Präsenz (3h) + 2x Online (1.5h)",
          desc: "Das Beste aus beiden Welten: Persönlicher Kontakt & Flexibilität.",
          features: [
            "1x/Woche vor Ort (Agadir)",
            "2x/Woche Online-Live-Sessions",
            "Ideal für Pendler",
            "Effektiver Mix",
          ],
        },
        {
          id: "online",
          name: "Online-Kurs",
          level: "A1 - C1",
          price: "500 DH",
          schedule: "3x pro Woche (je 1.5 Std.)",
          desc: "Lernen Sie Deutsch bequem von überall aus.",
          features: [
            "100% Virtueller Unterricht",
            "Interaktive digitale Tools",
            "Keine Anfahrtswege",
            "Kostengünstig",
          ],
        },
      ],
    },
    fr: {
      title: "Nos Programmes Linguistiques",
      subtitle:
        "Préparation ciblée aux exigences du système de santé allemand.",
      cta: "S'inscrire",
      back: "Retour",
      courses: [
        {
          id: "intensiv",
          name: "Cours Intensif",
          level: "Niveau A1 - C1",
          price: "1400 DH",
          schedule: "5x par semaine (2h/séance)",
          desc: "La voie la plus rapide vers la réussite. Idéal pour un apprentissage à temps plein.",
          features: [
            "Cours quotidiens",
            "Enseignants experts médicaux",
            "Préparation intensive",
            "Progression rapide",
          ],
          featured: true,
        },
        {
          id: "standard",
          name: "Cours Standard",
          level: "Niveau A1 - C1",
          price: "900 DH",
          schedule: "3x par semaine (2h/séance)",
          desc: "L'équilibre parfait entre apprentissage et vie quotidienne.",
          features: [
            "Cours réguliers",
            "Enseignants experts médicaux",
            "Bases solides",
            "Apprentissage flexible",
          ],
        },
        {
          id: "flexibel",
          name: "Cours Flexible",
          level: "Niveau A1 - C1",
          price: "900 DH",
          schedule: "2x par semaine (3h/séance)",
          desc: "Pour les professionnels et étudiants ayant peu de temps.",
          features: [
            "Cours soirs/week-ends",
            "Enseignants experts médicaux",
            "Focus communication",
            "Rythme adapté",
          ],
        },
        {
          id: "hybrid",
          name: "Cours Hybride",
          level: "Niveau A1 - C1",
          price: "900 DH",
          schedule: "1x Présentiel (3h) + 2x En ligne (1h30)",
          desc: "Le meilleur des deux mondes : Contact personnel & Flexibilité.",
          features: [
            "1x/semaine en centre (Agadir)",
            "2x/semaine sessions Live",
            "Idéal pour ceux qui habitent loin",
            "Approche mixte efficace",
          ],
        },
        {
          id: "online",
          name: "Cours En Ligne",
          level: "Niveau A1 - C1",
          price: "500 DH",
          schedule: "3x par semaine (1h30/séance)",
          desc: "Apprenez l'allemand confortablement de n'importe où.",
          features: [
            "100% Classe virtuelle",
            "Outils numériques interactifs",
            "Aucun déplacement",
            "Prix accessible",
          ],
        },
      ],
    },
    ar: {
      title: "برامجنا اللغوية",
      subtitle: "تحضير مستهدف لمتطلبات نظام الرعاية الصحية الألماني.",
      cta: "سجل الآن",
      back: "عودة",
      courses: [
        {
          id: "intensiv",
          name: "دورة مكثفة",
          level: "المستوى A1 - C1",
          price: "1400 درهم",
          schedule: "5 حصص في الأسبوع (ساعتان)",
          desc: "أسرع طريق للنجاح. مثالي للمتفرغين للدراسة.",
          features: [
            "دروس يومية",
            "مدرسون ذوو خبرة طبية",
            "تحضير مكثف للامتحانات",
            "تقدم سريع",
          ],
          featured: true,
        },
        {
          id: "standard",
          name: "دورة قياسية",
          level: "المستوى A1 - C1",
          price: "900 درهم",
          schedule: "3 حصص في الأسبوع (ساعتان)",
          desc: "توازن مثالي بين التعلم والحياة اليومية.",
          features: [
            "دروس منتظمة",
            "مدرسون ذوو خبرة طبية",
            "أساسيات قوية",
            "تعلم مرن",
          ],
        },
        {
          id: "flexibel",
          name: "دورة مرنة",
          level: "المستوى A1 - C1",
          price: "900 درهم",
          schedule: "حصتان في الأسبوع (3 ساعات)",
          desc: "للمهنيين والطلاب ذوي الوقت المحدود.",
          features: [
            "دروس مسائية/نهاية الأسبوع",
            "مدرسون ذوو خبرة طبية",
            "التركيز على التواصل",
            "وتيرة فردية",
          ],
        },
        {
          id: "hybrid",
          name: "دورة مدمجة (هجين)",
          level: "المستوى A1 - C1",
          price: "900 درهم",
          schedule: "1x حضوري (3 ساعات) + 2x عن بعد (1.5 ساعة)",
          desc: "الأفضل من العالمين: تواصل شخصي ومرونة.",
          features: [
            "1 حصة/أسبوع في المركز (أكادير)",
            "2 حصص/أسبوع عن بعد (Live)",
            "مثالي لمن يسكن بعيداً",
            "مزيج تعليمي فعال",
          ],
        },
        {
          id: "online",
          name: "دورة عن بعد",
          level: "المستوى A1 - C1",
          price: "500 درهم",
          schedule: "3 حصص في الأسبوع (1.5 ساعة)",
          desc: "تعلم الألمانية براحة من أي مكان.",
          features: [
            "100% دروس افتراضية",
            "أدوات رقمية تفاعلية",
            "بدون تنقل",
            "سعر اقتصادي",
          ],
        },
      ],
    },
  };

  const t = content[lang] || content.de;

  // 2. SEO Content
  const seo = {
    fr: {
      title: "Cours d'Allemand Médical & Intensif - Préparation FSP/KP",
      desc: "Apprenez l'allemand du niveau A1 au C1. Cours spécialisés pour médecins et infirmiers, préparation aux examens de langue.",
    },
    de: {
      title: "Deutschkurse für Mediziner - A1 bis C1 & FSP Training",
      desc: "Lernen Sie Deutsch für den medizinischen Alltag. Intensive Vorbereitung auf Fachsprachenprüfung und Approbation.",
    },
    ar: {
      title: "دورات اللغة الألمانية للأطباء والممرضين - من A1 إلى C1",
      desc: "تعلم الألمانية الطبية مع GMED. دورات مكثفة، تحضير لامتحانات اللغة FSP و KP، ودورات عن بعد.",
    },
  };

  const tSeo = seo[lang] || seo.fr;

  return (
    <div
      className="bg-[#e0f9fd] min-h-screen pb-12"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* 3. SEO BLOCK */}
      <Helmet>
        <title>{tSeo.title}</title>
        <meta name="description" content={tSeo.desc} />
        <link rel="canonical" href="https://gmed.ma/courses" />
      </Helmet>

      {/* Header Section */}
      <div className="bg-medical-navy text-white pt-12 pb-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className={`flex items-center gap-2 text-medical-cyan font-bold mb-4 hover:text-white transition-colors text-sm group ${
              lang === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            <ArrowLeft
              size={18}
              className={lang === "ar" ? "rotate-180" : ""}
            />
            <span className="relative">
              {t.back}
              {/* GERMAN ACCENT: Gold Underline on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
            </span>
          </button>

          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-black mb-3">{t.title}</h1>
            <p className="text-medical-light/80 text-base">{t.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Courses List */}
      <div className="max-w-4xl mx-auto px-4 -mt-6">
        <div className="space-y-5">
          {t.courses.map((course) => (
            <div
              key={course.id}
              className={`bg-white rounded-[1.5rem] shadow-md overflow-hidden border border-slate-100 flex flex-col md:flex-row hover:shadow-xl transition-all duration-300 group ${
                // GERMAN ACCENT: Ring color for featured
                course.featured ? "ring-2 ring-yellow-500/50" : ""
              }`}
            >
              {/* Left Side: Icon & Title - NAVY BLUE GRADIENT */}
              <div className="bg-gradient-to-br from-medical-navy to-[#0a2e4f] p-6 md:w-1/3 flex flex-col justify-center items-center text-white text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                {course.featured && (
                  // GERMAN ACCENT: Gold Badge
                  <div className="absolute top-3 right-3 bg-yellow-500 text-black text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm">
                    Recommended
                  </div>
                )}

                <GraduationCap
                  size={36}
                  // CHANGED: Icon is Yellow/Gold
                  className="mb-3 text-yellow-500"
                />
                <h3 className="text-xl font-black">{course.name}</h3>
                {/* Text in Medical Light */}
                <div className="mt-2 inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-0.5 rounded-full text-xs font-bold text-medical-light">
                  <Signal size={12} /> {course.level}
                </div>
              </div>

              {/* Right Side: Content */}
              <div
                className={`p-6 md:w-2/3 flex flex-col justify-between ${
                  lang === "ar" ? "text-right" : "text-left"
                }`}
              >
                <div>
                  {/* Schedule & Price Row */}
                  <div
                    className={`flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs font-medium text-slate-500 border-b border-slate-100 pb-3 ${
                      lang === "ar" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-black" />
                      {course.schedule}
                    </div>
                    {/* GERMAN ACCENT: Price is Red */}
                    <div className="flex items-center gap-1.5 text-red-600 font-bold text-base">
                      {course.price}
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {course.desc}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {course.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 text-xs text-slate-700 font-medium ${
                          lang === "ar" ? "flex-row-reverse" : ""
                        }`}
                      >
                        {/* GERMAN ACCENT: Checkmark is Black */}
                        <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                          <Check size={10} className="text-black" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/register"
                  // GERMAN ACCENT: CTA is Black -> Red on hover
                  className="btn-primary w-full sm:w-auto self-start flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold bg-black text-white hover:bg-red-600 transition-colors shadow-lg text-sm"
                >
                  {t.cta}
                  <ArrowRight
                    size={16}
                    className={lang === "ar" ? "rotate-180" : ""}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
