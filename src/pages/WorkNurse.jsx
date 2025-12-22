import React, { useEffect } from "react";
import {
  Heart,
  BookOpen,
  ClipboardCheck,
  Award,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Landmark,
  AlertCircle,
  Star,
  Clock,
  Euro,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// 1. IMPORT HELMET
import { Helmet } from "react-helmet-async";

const WorkNurse = ({ lang }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Back Button Logic
  const handleBack = () => {
    if (location.state && location.state.fromHomeSection) {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("work-section");
        if (section) {
          const yOffset = -80;
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
        tag: "Pflegekarriere",
        title: "Arbeiten als Pflegekraft",
        subtitle:
          "Ihr Weg zur staatlichen Anerkennung in Deutschland. Wir unterstützen Sie beim Anerkennungsverfahren.",
        cta: "Beratung starten",
      },
      back: "Zurück",
      intro:
        "Pflegefachkräfte werden in Deutschland händeringend gesucht. Das deutsche Gesundheitssystem bietet sichere Arbeitsplätze, faire Bezahlung und hervorragende Arbeitsbedingungen.",
      requirements: {
        title: "Voraussetzungen",
        list: [
          "Abgeschlossenes Pflegestudium (Diplom/Bachelor)",
          "B2-Sprachzertifikat (Telc/Goethe/ÖSD)",
          "Gesundheitliche Eignung",
          "Straffreiheit (Polizeiliches Führungszeugnis)",
        ],
      },
      process: [
        {
          title: "Sprachniveau B2",
          desc: "Für die Berufserlaubnis ist in fast allen Bundesländern ein B2-Zertifikat erforderlich.",
          icon: <BookOpen size={24} />,
        },
        {
          title: "Anerkennungsverfahren",
          desc: "Ihre Ausbildung wird mit dem deutschen Standard verglichen (Gleichwertigkeitsprüfung).",
          icon: <ClipboardCheck size={24} />,
        },
        {
          title: "Kenntnisprüfung (KP)",
          desc: "Bei Defiziten absolvieren Sie eine mündliche und praktische Prüfung an einer Pflegeschule.",
          icon: <Award size={24} />,
        },
      ],
      benefits: {
        title: "Ihre Vorteile in Deutschland",
        items: [
          {
            text: "Einstiegsgehalt ca. 2.800€ - 3.400€ Brutto",
            icon: <Euro size={18} />,
          },
          {
            text: "30 Tage bezahlter Urlaub pro Jahr",
            icon: <Star size={18} />,
          },
          {
            text: "Unbefristete Arbeitsverträge",
            icon: <CheckCircle size={18} />,
          },
          {
            text: "Geregelte Arbeitszeiten (Schichtsystem)",
            icon: <Clock size={18} />,
          },
        ],
      },
      services: {
        title: "Unser Service für Pflegekräfte",
        list: [
          "Prüfung Ihrer Diplome & Zeugnisse",
          "Anmeldung zu Deutschkursen (B1/B2 Pflege)",
          "Unterstützung beim Anerkennungsantrag",
          "Vorbereitung auf die Kenntnisprüfung",
          "Vermittlung an Top-Arbeitgeber",
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
        tag: "Carrière Soins Infirmiers",
        title: "Travailler comme Infirmier",
        subtitle:
          "Votre parcours vers la reconnaissance d'État en Allemagne. Nous vous accompagnons dans toutes les démarches.",
        cta: "Commencer la procédure",
      },
      back: "Retour",
      intro:
        "Le personnel infirmier est très recherché en Allemagne. Le système de santé allemand offre des emplois stables, une rémunération équitable et d'excellentes conditions de travail.",
      requirements: {
        title: "Conditions Requises",
        list: [
          "Diplôme d'infirmier (Diplôme d'État/Licence)",
          "Certificat de langue B2 (Telc/Goethe/ÖSD)",
          "Aptitude physique (Certificat médical)",
          "Casier judiciaire vierge",
        ],
      },
      process: [
        {
          title: "Niveau de langue B2",
          desc: "Un certificat B2 est requis pour l'autorisation d'exercer dans presque tous les Länder.",
          icon: <BookOpen size={24} />,
        },
        {
          title: "Procédure d'Homologation",
          desc: "Votre formation est comparée aux standards allemands (Gleichwertigkeitsprüfung).",
          icon: <ClipboardCheck size={24} />,
        },
        {
          title: "Examen de Connaissances",
          desc: "En cas de différences, vous passez un examen oral et pratique (Kenntnisprüfung).",
          icon: <Award size={24} />,
        },
      ],
      benefits: {
        title: "Vos Avantages en Allemagne",
        items: [
          {
            text: "Salaire débutant env. 2.800€ - 3.400€ Brut",
            icon: <Euro size={18} />,
          },
          { text: "30 jours de congés payés par an", icon: <Star size={18} /> },
          {
            text: "Contrats de travail à durée indéterminée",
            icon: <CheckCircle size={18} />,
          },
          {
            text: "Horaires de travail réglementés",
            icon: <Clock size={18} />,
          },
        ],
      },
      services: {
        title: "Nos Services pour Infirmiers",
        list: [
          "Vérification de vos diplômes & relevés",
          "Inscription aux cours d'allemand (B1/B2)",
          "Assistance dossier d'homologation",
          "Préparation à l'examen de connaissances",
          "Placement chez des employeurs premium",
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
        tag: "مهنة التمريض",
        title: "العمل كممرض في ألمانيا",
        subtitle:
          "طريقك نحو الاعتراف الحكومي بالشهادة (Anerkennung). نحن ندعمك في جميع خطوات المعادلة.",
        cta: "ابدأ الإجراءات",
      },
      back: "عودة",
      intro:
        "يوجد طلب كبير على الكوادر التمريضية في ألمانيا. يوفر النظام الصحي الألماني وظائف مستقرة، رواتب عادلة، وظروف عمل ممتازة.",
      requirements: {
        title: "شروط التقديم",
        list: [
          "شهادة دبلوم أو إجازة في التمريض",
          "شهادة لغة ألمانية مستوى B2",
          "شهادة اللياقة الطبية",
          "سجل عدلي خالٍ من السوابق",
        ],
      },
      process: [
        {
          title: "مستوى اللغة B2",
          desc: "شهادة B2 مطلوبة للحصول على إذن العمل في معظم الولايات الألمانية.",
          icon: <BookOpen size={24} />,
        },
        {
          title: "إجراءات المعادلة",
          desc: "تتم مقارنة تكوينك المهني مع المعايير الألمانية لتحديد الفروقات.",
          icon: <ClipboardCheck size={24} />,
        },
        {
          title: "امتحان المعرفة (KP)",
          desc: "في حال وجود نقص، تجتاز امتحاناً شفهياً وعملياً للمعادلة.",
          icon: <Award size={24} />,
        },
      ],
      benefits: {
        title: "مميزات العمل في ألمانيا",
        items: [
          {
            text: "راتب يبدأ من 2800€ - 3400€ يورو",
            icon: <Euro size={18} />,
          },
          { text: "30 يوم إجازة مدفوعة سنوياً", icon: <Star size={18} /> },
          {
            text: "عقود عمل دائمة غير محددة المدة",
            icon: <CheckCircle size={18} />,
          },
          {
            text: "ساعات عمل منظمة (نظام المناوبات)",
            icon: <Clock size={18} />,
          },
        ],
      },
      services: {
        title: "خدماتنا للممرضين",
        list: [
          "تدقيق الشهادات وكشوف النقاط",
          "التسجيل في دورات اللغة (B1/B2)",
          "المساعدة في ملف الاعتراف (Anerkennung)",
          "التحضير لامتحان المعرفة (KP)",
          "التوظيف لدى أفضل المستشفيات",
        ],
      },
      ctaBox: {
        title: "هل أنت مستعد للخطوة القادمة؟",
        desc: "دعنا نتحقق من أهليتك معاً.",
        btn: "اتصل بنا",
      },
    },
  };

  // 2. SEO Data
  const seo = {
    fr: {
      title: "Travailler comme Infirmier en Allemagne - Homologation & Emploi",
      desc: "Devenez infirmier en Allemagne : Guide complet sur la reconnaissance de diplôme, l'examen de connaissances (Kenntnisprüfung) et le recrutement.",
    },
    de: {
      title: "Als Pflegekraft in Deutschland arbeiten - Anerkennung & Jobs",
      desc: "Ihr Weg zur Anerkennung als Pflegefachkraft: B2 Deutsch, Kenntnisprüfung und Vermittlung an deutsche Arbeitgeber.",
    },
    ar: {
      title: "العمل كممرض في ألمانيا - المعادلة والتوظيف",
      desc: "دليلك الشامل للممرضين: الاعتراف بالدبلوم، امتحان المعادلة (KP)، وفرص العمل في المستشفيات الألمانية.",
    },
  };

  const t = content[lang] || content.fr;
  const tSeo = seo[lang] || seo.fr;

  // Helper for flag colors (Black -> Red -> Gold)
  const getFlagColors = (index) => {
    if (index % 3 === 0)
      return {
        borderHover: "hover:border-black/50",
        number: "text-slate-100 group-hover:text-black/10",
        check: "text-black",
      };
    if (index % 3 === 1)
      return {
        borderHover: "hover:border-red-600/50",
        number: "text-slate-100 group-hover:text-red-600/10",
        check: "text-red-600",
      };
    return {
      borderHover: "hover:border-yellow-500/50",
      number: "text-slate-100 group-hover:text-yellow-500/10",
      check: "text-yellow-500",
    };
  };

  return (
    <div
      className="bg-[#e0f9fd] min-h-screen pb-0"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* 3. SEO BLOCK */}
      <Helmet>
        <title>{tSeo.title}</title>
        <meta name="description" content={tSeo.desc} />
        <link rel="canonical" href="https://gmed.ma/work/nurse" />
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
            {/* Text Content */}
            <div
              className={`md:w-1/2 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              {/* GERMAN ACCENT: Tag is Gold */}
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-yellow-500/20">
                <Heart size={16} />
                {t.hero.tag}
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                {t.hero.title}
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

            {/* Hero Image/Card */}
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-medical-cyan blur-3xl opacity-20 rounded-full"></div>
              <img
                src="/nurse.jpg"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/600x400/0a192f/white?text=Nurse+Germany";
                }}
                alt="Nurse in Germany"
                className="relative rounded-2xl shadow-2xl border border-white/10 z-10 w-full object-cover transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- INTRO & REQUIREMENTS --- */}
      <section className="py-12 bg-white/50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-slate-600 text-lg mb-12 text-center max-w-3xl mx-auto font-medium leading-relaxed">
            {t.intro}
          </p>

          {/* Requirements Box */}
          <div className="bg-white border border-slate-100 shadow-lg rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center -mt-6">
            {/* GERMAN ACCENT: Alert Icon bg is Red */}
            <div className="bg-red-600 text-white p-5 rounded-2xl shadow-md">
              <AlertCircle size={32} />
            </div>
            <div
              className={`flex-1 ${lang === "ar" ? "text-right" : "text-left"}`}
            >
              <h4 className="text-xl font-bold text-medical-navy mb-4">
                {t.requirements.title}
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.requirements.list.map((req, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 text-slate-700 font-medium ${
                      lang === "ar" ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* GERMAN ACCENT: Bullet point is Gold */}
                    <div className="w-2 h-2 bg-yellow-500 rounded-full shrink-0" />
                    {req}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS STEPS --- */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid gap-6">
            {t.process.map((step, idx) => {
              const colors = getFlagColors(idx);
              return (
                <div
                  key={idx}
                  // GERMAN ACCENT: Border hover cycles colors
                  className={`flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    lang === "ar"
                      ? "md:flex-row-reverse text-right"
                      : "text-left"
                  } ${colors.borderHover}`}
                >
                  <div className="w-16 h-16 bg-medical-cyan/10 text-medical-cyan rounded-2xl flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-medical-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- BENEFITS GRID --- */}
      <section className="py-12 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-black text-medical-navy text-center mb-10">
            {t.benefits.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.benefits.items.map((item, index) => {
              const colors = getFlagColors(index);
              return (
                <div
                  key={index}
                  // GERMAN ACCENT: Border hover cycles colors
                  className={`flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 transition-colors ${
                    lang === "ar" ? "flex-row-reverse text-right" : ""
                  } ${colors.borderHover}`}
                >
                  <div className="w-10 h-10 bg-medical-light rounded-full flex items-center justify-center text-medical-navy shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-bold text-slate-700">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- COMPACT SERVICES SECTION (Flush to footer) --- */}
      <section className="py-8 bg-medical-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-medical-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-medical-cyan/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Column: Services List */}
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

              {/* Right Column: CTA Box */}
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

export default WorkNurse;
