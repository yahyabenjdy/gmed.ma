import React, { useEffect } from "react";
import {
  GraduationCap,
  BookOpen,
  Globe,
  ArrowRight,
  CheckCircle,
  Landmark,
  Coins,
} from "lucide-react";
import { Link } from "react-router-dom";

const StudyPage = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    de: {
      hero: {
        tag: "Akademische Zukunft",
        title: "Studieren in Deutschland",
        subtitle:
          "Verwirklichen Sie Ihren Traum von einem Medizinstudium an einer deutschen Universität. Weltklasse-Ausbildung, keine Studiengebühren.",
        cta: "Beratung starten",
      },
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
            highlight: true,
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
            highlight: true,
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

  const t = content[lang] || content.fr;

  return (
    <div
      className="min-h-screen bg-slate-50"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-medical-navy overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div
              className={`md:w-1/2 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 text-medical-cyan px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-white/20">
                <GraduationCap size={16} />
                {t.hero.tag}
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-medical-cyan text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0096b4] transition-all shadow-lg shadow-medical-cyan/20 group"
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

            {/* Hero Image/Card */}
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-medical-cyan blur-3xl opacity-20 rounded-full"></div>
              <img
                src="/study-hero.png" // Ensure you have an image or placeholder here
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 -mt-24 relative z-20">
            {t.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-medical-cyan hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-medical-light rounded-xl flex items-center justify-center text-medical-navy mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-medical-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-500">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STEPS TIMELINE --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-medical-navy mb-4">
              {t.steps.title}
            </h2>
            <div className="w-20 h-1.5 bg-medical-cyan mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {t.steps.items.map((item, index) => (
              <div key={index} className="flex group">
                {/* Number Column */}
                <div className="flex flex-col items-center mr-6 ml-6">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-white z-10 shadow-lg ${
                      item.highlight
                        ? "bg-medical-cyan"
                        : "bg-medical-navy group-hover:bg-medical-cyan"
                    } transition-colors`}
                  >
                    {item.step}
                  </div>
                  {index !== t.steps.items.length - 1 && (
                    <div className="w-0.5 h-full bg-slate-200 my-2 group-hover:bg-medical-cyan/30 transition-colors"></div>
                  )}
                </div>
                {/* Content Column */}
                <div
                  className={`flex-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow ${
                    lang === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  <h3 className="text-xl font-bold text-medical-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES LIST --- */}
      <section className="py-20 bg-medical-navy relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-medical-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-medical-cyan/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={lang === "ar" ? "text-right" : "text-left"}>
                <div className="inline-flex items-center gap-2 text-medical-cyan font-bold mb-4">
                  <Landmark size={20} /> GMED SUPPORT
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  {t.services.title}
                </h2>
                <ul className="space-y-4">
                  {t.services.list.map((service, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <CheckCircle
                        size={20}
                        className="text-medical-cyan shrink-0 mt-1"
                      />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Box */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
                <h3 className="text-2xl font-black text-medical-navy mb-3">
                  {t.ctaBox.title}
                </h3>
                <p className="text-slate-500 mb-8">{t.ctaBox.desc}</p>
                <Link
                  to="/contact"
                  className="w-full block bg-medical-navy text-white py-4 rounded-xl font-bold hover:bg-medical-cyan transition-colors shadow-lg"
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
