import React, { useEffect } from "react";
import {
  GraduationCap,
  BookOpen,
  Globe,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Landmark,
  Coins,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// 1. IMPORT HELMET
import { Helmet } from "react-helmet-async";

const StudyPage = ({ lang }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FIXED: Robust Back Button Logic
  const handleBack = () => {
    if (location.state && location.state.fromHomeSection) {
      navigate("/");
      setTimeout(() => {
        // Ensure your Homepage Study Section has id="study-section"
        const section = document.getElementById("study-section");
        if (section) {
          const yOffset = -80; // Adjust for sticky header
          const y =
            section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
    } else {
      navigate("/");
    }
  };

  const content = {
    de: {
      hero: {
        tag: "Akademische Zukunft",
        title: "Studieren in Deutschland",
        subtitle:
          "Verwirklichen Sie Ihren Traum von einem Medizinstudium an einer deutschen Universität. Weltklasse-Ausbildung, keine Studiengebühren.",
        cta: "Beratung starten",
      },
      back: "Zurück",
      benefits: [
        {
          title: "Kostenloses Studium",
          desc: "Fast alle öffentlichen Universitäten sind gebührenfrei.",
          icon: <Coins size={24} />,
        },
        {
          title: "Weltweite Anerkennung",
          desc: "Deutsche Abschlüsse sind international hoch angesehen.",
          icon: <Globe size={24} />,
        },
        {
          title: "Praxisorientierung",
          desc: "Modernste Ausstattung und klinische Erfahrung.",
          icon: <BookOpen size={24} />,
        },
      ],
      steps: {
        title: "Ihr Weg an die Universität",
        items: [
          {
            step: "01",
            title: "Sprachvorbereitung",
            desc: "Erreichen des C1-Niveaus (TestDaF/DSH).",
          },
          {
            step: "02",
            title: "Studienkolleg",
            desc: "Vorbereitungsjahr für ausländische Studenten (falls nötig).",
          },
          {
            step: "03",
            title: "Bewerbung",
            desc: "Einreichen der Unterlagen via Uni-Assist.",
          },
          {
            step: "04",
            title: "Visum & Ankunft",
            desc: "Sperrkonto und Immatrikulation.",
          },
        ],
      },
      services: {
        title: "Unser Servicepaket",
        list: [
          "Analyse Ihrer Zeugnisse & Noten",
          "Anmeldung zu Sprachkursen in Marokko & Deutschland",
          "Unterstützung bei Uni-Assist Bewerbungen",
          "Eröffnung des Sperrkontos (Blocked Account)",
          "Visumsvorbereitung & Motivationstraining",
        ],
      },
      ctaBox: {
        title: "Bereit für den nächsten Schritt?",
        desc: "Lassen Sie uns Ihre Chancen gemeinsam prüfen.",
        btn: "Kontakt aufnehmen",
      },
    },
    fr: {
      hero: {
        tag: "Avenir Académique",
        title: "Étudier la Médecine en Allemagne",
        subtitle:
          "Réalisez votre rêve dans une université allemande. Formation de classe mondiale, sans frais de scolarité.",
        cta: "Commencer la procédure",
      },
      back: "Retour",
      benefits: [
        {
          title: "Études Gratuites",
          desc: "Quasiment aucune frais de scolarité dans le public.",
          icon: <Coins size={24} />,
        },
        {
          title: "Reconnaissance Mondiale",
          desc: "Diplômes allemands respectés internationalement.",
          icon: <Globe size={24} />,
        },
        {
          title: "Formation Pratique",
          desc: "Équipements modernes et expérience clinique.",
          icon: <BookOpen size={24} />,
        },
      ],
      steps: {
        title: "Votre parcours vers l'université",
        items: [
          {
            step: "01",
            title: "Langue Allemande",
            desc: "Atteindre le niveau C1 (TestDaF ou DSH).",
          },
          {
            step: "02",
            title: "Studienkolleg",
            desc: "Année préparatoire (si votre Bac n'est pas équivalent).",
          },
          {
            step: "03",
            title: "Candidature",
            desc: "Dossier complet via Uni-Assist.",
          },
          {
            step: "04",
            title: "Visa & Départ",
            desc: "Compte bloqué et immatriculation.",
          },
        ],
      },
      services: {
        title: "Nos Services Étudiants",
        list: [
          "Analyse de vos relevés de notes",
          "Inscription aux cours de langue",
          "Gestion complète dossier Uni-Assist",
          "Ouverture du Compte Bloqué (Sperrkonto)",
          "Préparation entretien Visa Étudiant",
        ],
      },
      ctaBox: {
        title: "Prêt à franchir le pas ?",
        desc: "Vérifions ensemble votre éligibilité.",
        btn: "Contactez-nous",
      },
    },
    ar: {
      hero: {
        tag: "مستقبل أكاديمي",
        title: "دراسة الطب في ألمانيا",
        subtitle:
          "حقق حلمك في الجامعات الألمانية. تعليم بمستوى عالمي، ومجانية التعليم.",
        cta: "ابدأ الإجراءات",
      },
      back: "عودة",
      benefits: [
        {
          title: "دراسة مجانية",
          desc: "معظم الجامعات الحكومية بدون رسوم دراسية.",
          icon: <Coins size={24} />,
        },
        {
          title: "اعتراف عالمي",
          desc: "الشهادات الألمانية معترف بها دولياً بقوة.",
          icon: <Globe size={24} />,
        },
        {
          title: "تدريب عملي",
          desc: "معدات حديثة وخبرة سريرية متقدمة.",
          icon: <BookOpen size={24} />,
        },
      ],
      steps: {
        title: "طريقك نحو الجامعة",
        items: [
          {
            step: "01",
            title: "اللغة الألمانية",
            desc: "الوصول لمستوى C1 (TestDaF/DSH).",
          },
          {
            step: "02",
            title: "السنة التحضيرية",
            desc: "Studienkolleg (إذا كانت شهادة البكالوريا تتطلب معادلة).",
          },
          {
            step: "03",
            title: "التقديم",
            desc: "تقديم الملفات عبر Uni-Assist.",
          },
          {
            step: "04",
            title: "التأشيرة والسفر",
            desc: "الحساب البنكي المغلق والتسجيل.",
          },
        ],
      },
      services: {
        title: "خدماتنا للطلاب",
        list: [
          "تحليل كشف النقاط والشهادات",
          "التسجيل في دورات اللغة",
          "إدارة ملف Uni-Assist بالكامل",
          "فتح الحساب البنكي المغلق (Sperrkonto)",
          "التحضير لمقابلة التأشيرة الطلابية",
        ],
      },
      ctaBox: {
        title: "هل أنت مستعد للخطوة القادمة؟",
        desc: "دعنا نتحقق من أهليتك معاً.",
        btn: "اتصل بنا",
      },
    },
  };

  // 2. SEO Content
  const seo = {
    fr: {
      title: "Étudier en Allemagne - Médecine & Ingénierie",
      desc: "Guide complet pour étudier en Allemagne : Studienkolleg, Visa Étudiant, Compte bloqué et inscription universitaire (Uni-Assist).",
    },
    de: {
      title: "Studieren in Deutschland - Für Internationale Studenten",
      desc: "Ihr Weg an die deutsche Universität: Studienkolleg, Visum und Bewerbung über Uni-Assist. Wir unterstützen Sie dabei.",
    },
    ar: {
      title: "الدراسة في ألمانيا - الطب والهندسة",
      desc: "دليلك للدراسة في الجامعات الألمانية: السنة التحضيرية (Studienkolleg)، التأشيرة الدراسية، الحساب المغلق والقبول الجامعي.",
    },
  };

  const t = content[lang] || content.fr;
  const tSeo = seo[lang] || seo.fr;

  // Helper to assign flag colors (Black -> Red -> Gold)
  const getFlagColors = (index) => {
    if (index % 3 === 0)
      return {
        text: "text-medical-navy",
        bg: "bg-black/5",
        border: "border-black",
        stepBg: "bg-black",
      };
    if (index % 3 === 1)
      return {
        text: "text-red-600",
        bg: "bg-red-600/5",
        border: "border-red-600",
        stepBg: "bg-red-600",
      };
    return {
      text: "text-yellow-600",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500",
      stepBg: "bg-yellow-500",
    };
  };

  return (
    <div
      className="min-h-screen bg-[#e0f9fd] pb-0"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* 3. SEO BLOCK */}
      <Helmet>
        <title>{tSeo.title}</title>
        <meta name="description" content={tSeo.desc} />
        <link rel="canonical" href="https://gmed.ma/study" />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 pb-20 bg-medical-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className={`flex items-center gap-2 text-medical-cyan font-bold mb-6 hover:text-white transition-colors text-sm group ${
              lang === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            <ArrowLeft
              size={18}
              className={lang === "ar" ? "rotate-180" : ""}
            />
            <span className="relative">
              {t.back}
              {/* GERMAN ACCENT: Gold Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
            </span>
          </button>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div
              className={`md:w-1/2 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              {/* GERMAN ACCENT: Tag is Gold */}
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-yellow-500/20">
                <GraduationCap size={16} />
                {t.hero.tag}
              </div>

              {/* GERMAN ACCENT: Gold Underline for Title */}
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight relative inline-block">
                {t.hero.title}
                <div className="absolute -bottom-2 left-0 w-1/4 h-1.5 bg-yellow-500 rounded-full" />
              </h1>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>

              <Link
                to="/register"
                // GERMAN ACCENT: Button is Black -> Red hover
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-red-600 transition-all shadow-lg shadow-black/20 group"
              >
                {t.hero.cta}
                <ArrowRight
                  size={20}
                  className={`transition-transform group-hover:translate-x-1 ${
                    lang === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""
                  }`}
                />
              </Link>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-medical-cyan blur-3xl opacity-20 rounded-full"></div>
              <img
                src="/uni.png"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/600x400/0a192f/white?text=University+Germany";
                }}
                alt="Study in Germany"
                className="relative rounded-2xl shadow-2xl border border-white/10 z-10 w-full object-cover transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS GRID --- */}
      <section className="py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 -mt-20 relative z-20">
            {t.benefits.map((benefit, index) => {
              const colors = getFlagColors(index);
              return (
                <div
                  key={index}
                  // GERMAN ACCENT: Bottom border cycles colors
                  className={`bg-white p-6 rounded-2xl shadow-xl border-b-4 ${colors.border} hover:-translate-y-2 transition-transform duration-300`}
                >
                  {/* GERMAN ACCENT: Icon Container cycles colors */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${colors.bg} ${colors.text}`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-medical-navy mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- STEPS TIMELINE --- */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-medical-navy mb-4">
              {t.steps.title}
            </h2>
            {/* GERMAN ACCENT: Gradient Line */}
            <div className="w-16 h-1 bg-gradient-to-r from-black via-red-600 to-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {t.steps.items.map((item, index) => {
              const colors = getFlagColors(index);
              return (
                <div key={index} className="flex group">
                  <div className="flex flex-col items-center mr-4 ml-4">
                    {/* GERMAN ACCENT: Step Number Circle cycles colors */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-white z-10 shadow-lg transition-colors ${colors.stepBg}`}
                    >
                      {item.step}
                    </div>
                    {index !== t.steps.items.length - 1 && (
                      <div className="w-0.5 h-full bg-slate-300 my-2 group-hover:bg-black/30 transition-colors"></div>
                    )}
                  </div>
                  <div
                    className={`flex-1 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow ${
                      lang === "ar" ? "text-right" : "text-left"
                    }`}
                  >
                    <h3 className="text-lg font-bold text-medical-navy mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- COMPACT SERVICES SECTION --- */}
      <section className="py-8 bg-medical-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-medical-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-medical-cyan/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className={lang === "ar" ? "text-right" : "text-left"}>
                <div className="inline-flex items-center gap-2 text-medical-cyan font-bold mb-3 text-sm">
                  <Landmark size={18} /> GMED SUPPORT
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                  {t.services.title}
                </h2>
                <ul className="space-y-3">
                  {t.services.list.map((service, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-300 text-sm"
                    >
                      {/* GERMAN ACCENT: Checkmark is Gold */}
                      <CheckCircle
                        size={18}
                        className="text-yellow-500 shrink-0 mt-0.5"
                      />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-2xl">
                <h3 className="text-xl font-black text-medical-navy mb-2">
                  {t.ctaBox.title}
                </h3>
                <p className="text-slate-500 mb-6 text-sm">{t.ctaBox.desc}</p>

                <Link
                  to="/#contact"
                  // GERMAN ACCENT: Button is Black -> Red hover
                  className="w-full block bg-black text-white py-3 rounded-xl font-bold hover:bg-red-600 transition-colors shadow-lg text-sm"
                >
                  {t.ctaBox.btn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyPage;
