import React, { useEffect } from "react";
import {
  Briefcase,
  Languages,
  FileCheck,
  Plane,
  ArrowRight,
  ArrowLeft,
  Star,
  CheckCircle,
  Landmark,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AusbildungPage = ({ lang }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // IMPROVED Back Button Logic
  const handleBack = () => {
    if (location.state && location.state.fromHomeSection) {
      navigate("/"); // Move to homepage
      setTimeout(() => {
        const section = document.getElementById("ausbildung-section");
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
      title: "Ausbildung in Deutschland",
      subtitle:
        "Starten Sie Ihre Karriere mit einer dualen Ausbildung im Gesundheitswesen. Theorie und Praxis kombiniert, mit Vergütung ab dem ersten Tag.",
      cta: "Jetzt bewerben",
      back: "Zurück",
      heroImg: "/ausbildung.png",
      tag: "Berufsausbildung",
      highlight: "Deutschland",
      benefitsTitle: "Warum eine Ausbildung?",
      benefits: [
        {
          title: "Bezahlte Ausbildung",
          desc: "Erhalten Sie während Ihrer Ausbildung monatlich zwischen 1000€ und 1300€ netto.",
        },
        {
          title: "Jobgarantie",
          desc: "95% der Absolventen werden direkt von ihrem Ausbildungsbetrieb übernommen.",
        },
        {
          title: "Staatliches Diplom",
          desc: "Erhalten Sie einen in der gesamten Europäischen Union anerkannten Abschluss.",
        },
      ],
      stepsTitle: "Der GMED Prozess",
      steps: [
        {
          title: "Sprachvorbereitung (B2)",
          desc: "Der Schlüssel zum Erfolg. Wir bringen Sie in unseren Intensivkursen auf das Niveau B2, inklusive medizinischem Fachvokabular.",
          icon: <Languages size={24} />,
        },
        {
          title: "Bewerbung & Interview",
          desc: "Wir optimieren Ihren Lebenslauf und trainieren Vorstellungsgespräche, um den perfekten Arbeitgeber für Sie zu finden.",
          icon: <Briefcase size={24} />,
        },
        {
          title: "Ausbildungsvertrag",
          desc: "Sicherung eines offiziellen Ausbildungsvertrags mit einer deutschen Klinik oder Pflegeeinrichtung.",
          icon: <FileCheck size={24} />,
        },
        {
          title: "Visum & Ankunft",
          desc: "Komplette Unterstützung beim Visumantrag und Begleitung bei Ihrer Ankunft und Integration in Deutschland.",
          icon: <Plane size={24} />,
        },
      ],
      services: {
        title: "Unser Ausbildung-Service",
        list: [
          "Optimierung von Lebenslauf & Anschreiben",
          "Vorbereitung auf Vorstellungsgespräche",
          "Prüfung des Ausbildungsvertrags",
          "Unterstützung beim Visumantrag",
          "Integrationshilfe in Deutschland",
        ],
      },
      ctaCard: {
        title: "Bereit für den Start?",
        desc: "Lassen Sie uns Ihre Chancen gemeinsam prüfen.",
        btn: "Kontaktieren Sie uns",
      },
    },
    fr: {
      title: "Ausbildung en ",
      highlight: "Allemagne",
      subtitle:
        "Accédez à une formation rémunérée d'excellence. Apprenez un métier tout en percevant un salaire mensuel dès le premier jour.",
      cta: "Postuler maintenant",
      back: "Retour",
      heroImg: "/ausbildung.png",
      tag: "Formation Professionnelle",
      benefitsTitle: "Pourquoi choisir l'Ausbildung ?",
      benefits: [
        {
          title: "Formation Rémunérée",
          desc: "Percevez entre 1000€ et 1300€ net par mois durant vos études.",
        },
        {
          title: "Emploi Garanti",
          desc: "95% des diplômés sont embauchés immédiatement par leur entreprise d'accueil.",
        },
        {
          title: "Diplôme d'État",
          desc: "Obtenez un diplôme reconnu dans toute l'Union Européenne.",
        },
      ],
      stepsTitle: "Le Processus GMED",
      steps: [
        {
          title: "Préparation Linguistique (B2)",
          desc: "La clé du succès. Nous vous amenons au niveau B2 grâce à nos cours intensifs, incluant le vocabulaire médical spécifique.",
          icon: <Languages size={24} />,
        },
        {
          title: "Candidature & Entretien",
          desc: "Optimisation de CV et coaching d'entretien pour vous trouver l'employeur idéal (Clinique ou Maison de retraite).",
          icon: <Briefcase size={24} />,
        },
        {
          title: "Contrat d'Ausbildung",
          desc: "Obtention et signature d'un contrat de formation officiel garantissant votre salaire et votre place.",
          icon: <FileCheck size={24} />,
        },
        {
          title: "Visa & Arrivée",
          desc: "Support complet pour la procédure de Visa et accompagnement personnalisé lors de votre installation.",
          icon: <Plane size={24} />,
        },
      ],
      services: {
        title: "Nos Services Ausbildung",
        list: [
          "Optimisation CV & Lettre de motivation",
          "Préparation aux entretiens d'embauche",
          "Vérification du contrat de formation",
          "Assistance complète demande de Visa",
          "Support à l'intégration en Allemagne",
        ],
      },
      ctaCard: {
        title: "Prêt à franchir le pas ?",
        desc: "Vérifions ensemble votre éligibilité.",
        btn: "Contactez-nous",
      },
    },
    ar: {
      title: "مسار الأوسبيلدونغ في ",
      highlight: "ألمانيا",
      subtitle:
        "احصل على تكوين مهني متميز ومدفوع الأجر. تعلم مهنة مع الحصول على راتب شهري منذ اليوم الأول.",
      cta: "قدم الآن",
      back: "عودة",
      heroImg: "/ausbildung.png",
      tag: "التكوين المهني",
      benefitsTitle: "لماذا تختار الأوسبيلدونغ؟",
      benefits: [
        {
          title: "تكوين مدفوع الأجر",
          desc: "تقاضى ما بين 1000 و 1300 يورو صافية شهرياً خلال فترة دراستك.",
        },
        {
          title: "وظيفة مضمونة",
          desc: "95٪ من الخريجين يتم توظيفهم مباشرة من قبل شركاتهم.",
        },
        {
          title: "دبلوم معترف به",
          desc: "احصل على دبلوم معترف به في جميع أنحاء الاتحاد الأوروبي.",
        },
      ],
      stepsTitle: "مسار GMED",
      steps: [
        {
          title: "التحضير اللغوي (B2)",
          desc: "مفتاح النجاح. نؤهلك للوصول لمستوى B2 عبر دورات مكثفة تشمل المصطلحات الطبية الضرورية.",
          icon: <Languages size={24} />,
        },
        {
          title: "الترشيح والمقابلات",
          desc: "تحسين السيرة الذاتية والتدريب على مقابلات العمل لضمان قبولك لدى صاحب عمل ألماني.",
          icon: <Briefcase size={24} />,
        },
        {
          title: "عقد التدريب",
          desc: "تأمين عقد تدريب رسمي (Ausbildungsvertrag) يضمن لك الراتب والحقوق القانونية.",
          icon: <FileCheck size={24} />,
        },
        {
          title: "التأشيرة والوصول",
          desc: "دعم شامل في إجراءات التأشيرة واستقبالك عند الوصول لضمان اندماج سلس.",
          icon: <Plane size={24} />,
        },
      ],
      services: {
        title: "خدماتنا للأوسبيلدونغ",
        list: [
          "تحسين السيرة الذاتية وخطاب التحفيز",
          "التحضير لمقابلات العمل",
          "مراجعة وتدقيق عقد التكوين",
          "المساعدة الكاملة في ملف التأشيرة",
          "دعم الاندماج عند الوصول لألمانيا",
        ],
      },
      ctaCard: {
        title: "هل أنت مستعد للخطوة القادمة؟",
        desc: "دعنا نتحقق من أهليتك معاً.",
        btn: "اتصل بنا",
      },
    },
  };

  const seo = {
    fr: {
      title: "Ausbildung en Allemagne - Formation Rémunérée & Visa",
      desc: "Devenez infirmier via l'Ausbildung en Allemagne. Formation 100% financée, salaire mensuel dès le début et emploi garanti.",
    },
    de: {
      title: "Ausbildung in Deutschland - Berufsausbildung für Internationale",
      desc: "Starten Sie Ihre Karriere in Deutschland mit einer dualen Ausbildung. Bezahlte Lehre, Visum-Unterstützung und Jobgarantie.",
    },
    ar: {
      title: "الأوسبيلدونغ في ألمانيا - تكوين مهني مدفوع الأجر",
      desc: "احصل على عقد أوسبيلدونغ في التمريض. راتب شهري، سكن، وتأشيرة مضمونة مع GMED.",
    },
  };

  const t = content[lang] || content.fr;
  const tSeo = seo[lang] || seo.fr;

  // Helper to assign flag colors (Black -> Red -> Gold)
  const getFlagColors = (index) => {
    if (index % 3 === 0)
      return {
        icon: "text-black",
        bg: "bg-black/10",
        hoverBg: "group-hover:bg-black",
        borderHover: "hover:border-black/50",
      };
    if (index % 3 === 1)
      return {
        icon: "text-red-600",
        bg: "bg-red-600/10",
        hoverBg: "group-hover:bg-red-600",
        borderHover: "hover:border-red-600/50",
      };
    return {
      icon: "text-yellow-500",
      bg: "bg-yellow-500/10",
      hoverBg: "group-hover:bg-yellow-500",
      borderHover: "hover:border-yellow-500/50",
    };
  };

  return (
    <div
      className="bg-medical-navy/15 min-h-screen pb-0"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* 3. SEO BLOCK */}
      <Helmet>
        <title>{tSeo.title}</title>
        <meta name="description" content={tSeo.desc} />
        <link rel="canonical" href="https://gmed.ma/ausbildung" />
      </Helmet>

      {/* 1. Header Section */}
      <div className="bg-medical-navy text-white pt-12 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#004C73_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <button
            onClick={handleBack}
            className={`flex items-center gap-2 text-yellow-500 font-bold mb-6 hover:text-white transition-colors text-sm group ${
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

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-[10px] font-bold uppercase tracking-widest mb-4 border border-yellow-500/30">
                {t.tag}
              </span>
              <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                {t.title}
                {/* CHANGED: Text White, with a Curved SVG Underline */}
                <span className="relative inline-block text-white ml-2">
                  {t.highlight}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#800020] -z-10"
                    viewBox="0 0 100 15"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 10 Q 50 15 100 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-medical-light/90 text-lg mb-8 leading-relaxed">
                {t.subtitle}
              </p>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-[#004C73] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#003a57] transition-all shadow-lg shadow-[#004C73]/30"
              >
                {t.cta}
                <ArrowRight
                  size={20}
                  className={lang === "ar" ? "rotate-180" : ""}
                />
              </Link>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={t.heroImg}
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/600x400/0a192f/white?text=Ausbildung+Image";
                  }}
                  alt="Ausbildung Germany"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Benefits Section */}
      <div className="max-w-5xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {t.benefits.map((benefit, idx) => {
            const colors = getFlagColors(idx);
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg border border-white/50 hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${colors.bg} ${colors.icon} ${colors.hoverBg} group-hover:text-white`}
                >
                  <Star size={24} />
                </div>
                <h3 className="text-lg font-bold text-medical-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3. Steps / Timeline Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-black text-medical-navy text-center mb-10">
            {t.stepsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.steps.map((step, index) => {
              const colors = getFlagColors(index);
              return (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-2xl shadow-md border border-white/60 transition-colors flex items-start gap-4 ${colors.borderHover}`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 ${colors.bg} ${colors.icon}`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-medical-navy mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. COMPACT SERVICES SECTION */}
      <section className="py-8 bg-medical-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#004C73]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#004C73]/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className={lang === "ar" ? "text-right" : "text-left"}>
                <div className="inline-flex items-center gap-2 text-yellow-500 font-bold mb-3 text-sm">
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
                  {t.ctaCard.title}
                </h3>
                <p className="text-slate-500 mb-6 text-sm">{t.ctaCard.desc}</p>

                <Link
                  to="/#contact"
                  className="w-full block bg-[#004C73] text-white py-3 rounded-xl font-bold hover:bg-[#003a57] transition-colors shadow-lg shadow-[#004C73]/20 text-sm"
                >
                  {t.ctaCard.btn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AusbildungPage;
