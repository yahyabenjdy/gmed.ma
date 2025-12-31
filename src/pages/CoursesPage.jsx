import React, { useEffect } from "react";
import {
  Check,
  Clock,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  Signal,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
          id: "intensive",
          name: "Intensivkurs",
          level: "A1 - C1",
          price: "900 DH / Monat",
          schedule: "3x pro Woche (je 2 Std.)",
          desc: "Solide Grundlage für Ihren Spracherwerb.",
          features: [
            "3 Sitzungen pro Woche",
            "2 Stunden pro Sitzung",
            "Medizinisch orientiert",
            "Kontinuierlicher Fortschritt",
          ],
        },
        {
          id: "very-intensive",
          name: "Sehr Intensiver Kurs",
          level: "A1 - C1",
          price: "1400 DH / Monat",
          schedule: "5x pro Woche (je 2 Std.)",
          desc: "Der schnellste Weg zum Erfolg. Tägliches Training.",
          features: [
            "5 Sitzungen pro Woche",
            "2 Stunden pro Sitzung",
            "Maximale Immersion",
            "Schnelle Ergebnisse",
          ],
          featured: true,
        },
        {
          id: "online",
          name: "Online-Kurs",
          level: "A1 - C1",
          price: "500 DH / Monat",
          schedule: "3x pro Woche (je 1.5 Std.)",
          desc: "Lernen Sie flexibel von überall aus.",
          features: [
            "3 Sitzungen pro Woche",
            "1.5 Stunden pro Sitzung",
            "Virtuelles Klassenzimmer",
            "Keine Anfahrt nötig",
          ],
        },
        {
          id: "weekend",
          name: "Wochenendkurs",
          level: "A1 - C1",
          price: "900 DH / Monat",
          schedule: "Samstag & Sonntag (je 3 Std.)",
          desc: "Ideal für Berufstätige und Studenten.",
          features: [
            "2 Sitzungen pro Woche",
            "3 Stunden pro Sitzung",
            "Samstag und Sonntag",
            "Intensives Lernen am Wochenende",
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
          id: "intensive",
          name: "Cours Intensif",
          level: "Niveau A1 - C1",
          price: "900 DH / mois",
          schedule: "3x par semaine (2h/séance)",
          desc: "Une base solide pour votre apprentissage linguistique.",
          features: [
            "3 séances par semaine",
            "2 heures par séance",
            "Orientation médicale",
            "Progression continue",
          ],
        },
        {
          id: "very-intensive",
          name: "Cours Très Intensif",
          level: "Niveau A1 - C1",
          price: "1400 DH / mois",
          schedule: "5x par semaine (2h/séance)",
          desc: "La voie la plus rapide vers la réussite. Entraînement quotidien.",
          features: [
            "5 séances par semaine",
            "2 heures par séance",
            "Immersion maximale",
            "Résultats rapides",
          ],
          featured: true,
        },
        {
          id: "online",
          name: "Cours En Ligne",
          level: "Niveau A1 - C1",
          price: "500 DH / mois",
          schedule: "3x par semaine (1h30/séance)",
          desc: "Apprenez en toute flexibilité, où que vous soyez.",
          features: [
            "3 séances par semaine",
            "1.5 heures par séance",
            "Classe virtuelle",
            "Aucun déplacement",
          ],
        },
        {
          id: "weekend",
          name: "Cours Samedi & Dimanche",
          level: "Niveau A1 - C1",
          price: "900 DH / mois",
          schedule: "Samedi & Dimanche (3h/séance)",
          desc: "Idéal pour les professionnels et les étudiants.",
          features: [
            "2 séances par semaine",
            "3 heures par séance",
            "Samedi et Dimanche",
            "Apprentissage intensif le weekend",
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
          id: "intensive",
          name: "دورة مكثفة",
          level: "المستوى A1 - C1",
          price: "900 درهم / شهر",
          schedule: "3 حصص في الأسبوع (ساعتان)",
          desc: "أساس متين لتعلم اللغة.",
          features: [
            "3 حصص في الأسبوع",
            "ساعتان لكل حصة",
            "توجيه طبي",
            "تقدم مستمر",
          ],
        },
        {
          id: "very-intensive",
          name: "دورة مكثفة جداً",
          level: "المستوى A1 - C1",
          price: "1400 درهم / شهر",
          schedule: "5 حصص في الأسبوع (ساعتان)",
          desc: "أسرع طريق للنجاح. تدريب يومي.",
          features: [
            "5 حصص في الأسبوع",
            "ساعتان لكل حصة",
            "انغماس كامل",
            "نتائج سريعة",
          ],
          featured: true,
        },
        {
          id: "online",
          name: "دورة عن بعد (أونلاين)",
          level: "المستوى A1 - C1",
          price: "500 درهم / شهر",
          schedule: "3 حصص في الأسبوع (1.5 ساعة)",
          desc: "تعلم بمرونة من أي مكان.",
          features: [
            "3 حصص في الأسبوع",
            "ساعة ونصف لكل حصة",
            "فصول افتراضية",
            "بدون تنقل",
          ],
        },
        {
          id: "weekend",
          name: "دورة السبت والأحد",
          level: "المستوى A1 - C1",
          price: "900 درهم / شهر",
          schedule: "السبت والأحد (3 ساعات)",
          desc: "مثالي للمهنيين والطلاب.",
          features: [
            "حصتان في الأسبوع",
            "3 ساعات لكل حصة",
            "السبت والأحد",
            "تعلم مكثف في نهاية الأسبوع",
          ],
        },
      ],
    },
  };

  const t = content[lang] || content.de;

  const seo = {
    fr: {
      title: "Cours d'Allemand Médical & Intensif - GMED",
      desc: "Apprenez l'allemand du niveau A1 au C1. Cours intensifs, en ligne et weekend pour médecins et infirmiers.",
    },
    de: {
      title: "Deutschkurse für Mediziner - GMED",
      desc: "Lernen Sie Deutsch für den medizinischen Alltag. Intensive, Online- und Wochenendkurse.",
    },
    ar: {
      title: "دورات اللغة الألمانية للأطباء والممرضين - GMED",
      desc: "تعلم الألمانية الطبية مع GMED. دورات مكثفة، أونلاين، ودورات نهاية الأسبوع.",
    },
  };

  const tSeo = seo[lang] || seo.fr;

  return (
    <div
      className="bg-medical-navy/15 min-h-screen pb-12"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Helmet>
        <title>{tSeo.title}</title>
        <meta name="description" content={tSeo.desc} />
        <link rel="canonical" href="https://gmed.ma/courses" />
      </Helmet>

      {/* Header Section */}
      <div className="bg-medical-navy text-white pt-12 pb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handleBack}
            className={`flex items-center gap-2 text-yellow-500 font-bold mb-4 hover:text-white transition-colors text-sm group ${
              lang === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            <ArrowLeft
              size={18}
              className={lang === "ar" ? "rotate-180" : ""}
            />
            <span className="relative">
              {t.back}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
            </span>
          </button>

          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-black mb-3">{t.title}</h1>
            <p className="text-medical-light/80 text-base">{t.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 -mt-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {" "}
          {/* Changed to 4 columns for large screens */}
          {t.courses.map((course) => (
            <div
              key={course.id}
              className={`bg-white rounded-[1.5rem] shadow-md overflow-hidden border border-slate-100 flex flex-col hover:shadow-xl transition-all duration-300 group h-full ${
                course.featured
                  ? "ring-2 ring-yellow-500/50 relative transform md:-translate-y-2"
                  : ""
              }`}
            >
              {/* Top Side: Icon & Title */}
              <div className="bg-gradient-to-br from-medical-navy to-[#0a2e4f] p-6 w-full flex flex-col justify-center items-center text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                {course.featured && (
                  <div className="absolute top-3 right-3 bg-yellow-500 text-black text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm">
                    Recommended
                  </div>
                )}

                <GraduationCap size={32} className="mb-2 text-yellow-500" />
                <h3 className="text-lg font-black leading-tight">
                  {course.name}
                </h3>
                <div className="mt-2 inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-medical-light">
                  <Signal size={10} /> {course.level}
                </div>
              </div>

              {/* Bottom Side: Content */}
              <div
                className={`p-5 w-full flex-grow flex flex-col justify-between ${
                  lang === "ar" ? "text-right" : "text-left"
                }`}
              >
                <div>
                  <div
                    className={`flex flex-wrap gap-x-2 gap-y-1 mb-3 text-[11px] font-medium text-slate-500 border-b border-slate-100 pb-3 ${
                      lang === "ar" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className="flex items-center gap-1 text-[#004C73]">
                      <Clock size={12} /> {course.schedule}
                    </div>
                    <div className="flex items-center gap-1 text-[#800020] font-bold text-sm w-full mt-1">
                      {course.price}
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4 text-xs leading-relaxed min-h-[40px]">
                    {course.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2 text-[11px] text-slate-700 font-medium ${
                          lang === "ar" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div className="w-3.5 h-3.5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={8} className="text-[#004C73]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/register"
                  className="btn-primary w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold bg-[#004C73] text-white hover:bg-[#003a57] transition-colors shadow-lg shadow-[#004C73]/20 text-xs mt-auto"
                >
                  {t.cta}
                  <ArrowRight
                    size={14}
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
