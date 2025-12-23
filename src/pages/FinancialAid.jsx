import React, { useEffect } from "react";
import {
  Euro,
  Building2,
  Briefcase,
  Lightbulb,
  FileCheck,
  ArrowLeft,
  Share2,
  MapPin,
  School,
  Users,
  Ticket,
  PlayCircle,
  AlertTriangle,
  Landmark,
  CheckCircle,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const FinancialAid = ({ lang }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      navigate("/work/doctor");
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: "GMED - Financial Aid",
      text: "Guide sur les aides financières (BAMF, Agentur für Arbeit) pour médecins en Allemagne.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(lang === "ar" ? "تم نسخ الرابط!" : "Link copied to clipboard!");
    }
  };

  const content = {
    fr: {
      hero: {
        tag: "Financement",
        title: "Aides Financières & Cours",
        subtitle:
          "Le guide pour réduire vos frais de formation FSP et KP grâce aux dispositifs d'aide de l'État allemand (BAMF / Agentur für Arbeit).",
      },
      share: "Partager",
      sections: {
        aids: {
          title: "Les aides principales à connaître",
          bamf: {
            title: "BAMF",
            sub: "Office fédéral pour la migration",
            desc: "Finance souvent les cours d’allemand intégration (B1/B2) et les cours de FSP. Il faut avoir ton Visa ou titre de séjour.",
            list: [
              "Cours d'Intégration (B1/B2)",
              "Cours FSP (si école partenaire)",
            ],
          },
          agentur: {
            title: "Agentur für Arbeit",
            sub: "Pôle emploi allemand",
            desc: "Peut financer des cours C1 médicaux (FSP) et des préparations au KP (valeur jusqu’à 5.000 €).",
            list: [
              "Cours C1 Médical (FSP)",
              "Préparation KP (Kenntnisprüfung)",
            ],
            note: "⚠ Il faut être inscrit comme demandeur d’emploi.",
          },
        },
        tips: {
          title: "Astuces",
          tipsList: [
            "Cherchez les écoles certifiées BAMF pour la prise en charge.",
            "Utilisez les bibliothèques universitaires médicales (gratuites).",
            "Inscris-toi au C1 général, puis demande la prise en charge FSP sur place.",
          ],
          docsList: [
            "Titre de séjour (Visa ou Aufenthaltstitel)",
            "Enregistrement local (Anmeldung)",
            "Certificat B2 ou équivalent",
            "Lettre d’admission à un cours (parfois)",
          ],
        },
        steps: {
          title: "Guide étape par étape : Obtenir le financement",
          intro:
            "Suivez ce processus une fois arrivé en Allemagne pour maximiser vos chances.",
          list: [
            {
              icon: <MapPin size={18} />,
              title: "1. T’inscrire et te déclarer",
              text: "Faire ton Anmeldung (mairie) dès l'arrivée. Attendre ton numéro fiscal (Steuer-ID) par la poste. Ouvrir un compte bancaire allemand.",
            },
            {
              icon: <School size={18} />,
              title: "2. S’inscrire au BAMF (FSP)",
              text: "Trouver une école agréée BAMF. L’école fait la demande. Fournir : titre de séjour, Anmeldung, certificat B2.",
            },
            {
              icon: <Briefcase size={18} />,
              title: "3. S’inscrire comme demandeur d’emploi",
              text: "RDV à l’Agentur für Arbeit pour s'inscrire comme 'Arbeitssuchend'. Indispensable même pour les médecins.",
            },
            {
              icon: <Users size={18} />,
              title: "4. Expliquer ton projet (Berater)",
              text: "Explique au conseiller que tu es médecin, que tu vises le FSP/KP et insiste sur la pénurie de médecins (Fachkräftemangel).",
            },
            {
              icon: <Ticket size={18} />,
              title: "5. Obtenir le Bildungsgutschein",
              text: "Si convaincu, le conseiller te remet un 'Bildungsgutschein' (bon de formation) couvrant les frais de cours.",
            },
            {
              icon: <PlayCircle size={18} />,
              title: "6. Démarrer tes cours",
              text: "Avec le bon, la formation est 100% prise en charge. Pas d'avance de frais. Concentre-toi sur l'étude.",
            },
          ],
          warning: {
            title: "Attention aux Frais",
            text: "Les frais du FSP sont souvent remboursés après succès (BAMF). Pour le KP, demande spécifique requise. Tout frais engagé AVANT l’accord ne sera pas remboursé.",
          },
        },
      },
      cta: "Contacter un Conseiller",
    },
    de: {
      hero: {
        tag: "Finanzierung",
        title: "Finanzielle Hilfen & Kurse",
        subtitle:
          "Der Leitfaden zur Senkung Ihrer FSP- und KP-Ausbildungskosten durch staatliche Mittel (BAMF / Agentur für Arbeit).",
      },
      share: "Teilen",
      sections: {
        aids: {
          title: "Wichtige Förderungen",
          bamf: {
            title: "BAMF",
            sub: "Bundesamt für Migration",
            desc: "Finanziert oft Integrationskurse (B1/B2) und FSP-Kurse. Voraussetzung: Visum oder Aufenthaltstitel.",
            list: ["Integrationskurs (B1/B2)", "FSP-Kurs (bei Partnern)"],
          },
          agentur: {
            title: "Agentur für Arbeit",
            sub: "Arbeitsamt",
            desc: "Kann medizinische C1-Kurse (FSP) und KP-Vorbereitung finanzieren (Wert bis 5.000 €).",
            list: ["C1 Medizin (FSP)", "Vorbereitung KP"],
            note: "⚠ Sie müssen als arbeitssuchend gemeldet sein.",
          },
        },
        tips: {
          title: "Tipps",
          tipsList: [
            "Suchen Sie nach BAMF-zertifizierten Schulen.",
            "Nutzen Sie kostenlose Universitätsbibliotheken.",
            "Erst C1 allgemein anmelden, dann FSP-Förderung beantragen.",
          ],
          docsList: [
            "Aufenthaltstitel / Visum",
            "Anmeldung (Meldebescheinigung)",
            "B2-Zertifikat",
            "Zulassungsbescheid (manchmal)",
          ],
        },
        steps: {
          title: "Schritt für Schritt zur Finanzierung",
          intro: "Folgen Sie diesem Prozess nach Ihrer Ankunft in Deutschland.",
          list: [
            {
              icon: <MapPin size={18} />,
              title: "1. Anmelden & Registrieren",
              text: "Anmeldung im Bürgerbüro. Steuer-ID abwarten. Deutsches Bankkonto eröffnen.",
            },
            {
              icon: <School size={18} />,
              title: "2. BAMF-Anmeldung (FSP)",
              text: "Zugelassene Sprachschule finden. Schule stellt Antrag. Nötig: Titel, Anmeldung, B2.",
            },
            {
              icon: <Briefcase size={18} />,
              title: "3. Arbeitsuchend melden",
              text: "Termin bei der Agentur für Arbeit. Status 'Arbeitssuchend' ist Pflicht für Förderung.",
            },
            {
              icon: <Users size={18} />,
              title: "4. Projekt erklären (Berater)",
              text: "Erklären Sie, dass Sie Arzt sind und den Bildungsgutschein für FSP/KP benötigen (Ärztemangel).",
            },
            {
              icon: <Ticket size={18} />,
              title: "5. Bildungsgutschein erhalten",
              text: "Der Gutschein deckt die Kursgebühren vollständig ab.",
            },
            {
              icon: <PlayCircle size={18} />,
              title: "6. Kurs starten",
              text: "Keine Vorkasse nötig. Volle Konzentration auf das Lernen.",
            },
          ],
          warning: {
            title: "Kostenwarnung",
            text: "FSP-Gebühren oft erstattbar (BAMF). KP erfordert speziellen Antrag. Kosten VOR Zusage werden nicht erstattet.",
          },
        },
      },
      cta: "Berater kontaktieren",
    },
    ar: {
      hero: {
        tag: "التمويل",
        title: "المساعدات المالية والدورات",
        subtitle:
          "دليلك لتقليل تكاليف تدريب FSP و KP من خلال برامج المساعدة الحكومية الألمانية (BAMF / مكتب العمل).",
      },
      share: "مشاركة",
      sections: {
        aids: {
          title: "المساعدات الرئيسية",
          bamf: {
            title: "BAMF",
            sub: "المكتب الاتحادي للهجرة",
            desc: "يمول غالباً دورات الاندماج (B1/B2) و FSP. يتطلب فيزا أو إقامة.",
            list: ["دورات الاندماج (B1/B2)", "دورات FSP (مدارس شريكة)"],
          },
          agentur: {
            title: "مكتب العمل (Agentur)",
            sub: "وكالة التوظيف",
            desc: "يمكن أن يمول دورات C1 الطبية وتحضير KP (تصل لـ 5000 يورو).",
            list: ["C1 طبي (FSP)", "تحضير KP"],
            note: "⚠ يجب أن تكون مسجلاً كباحث عن عمل.",
          },
        },
        tips: {
          title: "نصائح",
          tipsList: [
            "ابحث عن مدارس معتمدة من BAMF لضمان التمويل.",
            "استخدم المكتبات الطبية الجامعية للمراجعة مجاناً.",
            "سجل في C1 عام أولاً، ثم اطلب تمويل FSP عند الوصول.",
          ],
          docsList: [
            "تصريح الإقامة أو التأشيرة",
            "شهادة السكن (Anmeldung)",
            "شهادة B2",
            "رسالة قبول للدورة (أحياناً)",
          ],
        },
        steps: {
          title: "دليل خطوة بخطوة للحصول على التمويل",
          intro: "اتبع هذه الخطوات بمجرد وصولك إلى ألمانيا.",
          list: [
            {
              icon: <MapPin size={18} />,
              title: "1. التسجيل والسكن",
              text: "قم بعمل Anmeldung في البلدية. احصل على الرقم الضريبي. افتح حساباً بنكياً ألمانياً.",
            },
            {
              icon: <School size={18} />,
              title: "2. التسجيل في BAMF",
              text: "ابحث عن مدرسة معتمدة. المدرسة تقدم الطلب. المستندات: الإقامة، السكن، B2.",
            },
            {
              icon: <Briefcase size={18} />,
              title: "3. التسجيل كباحث عن عمل",
              text: "سجل في Agentur für Arbeit كـ 'Arbeitssuchend'. ضروري للحصول على التمويل.",
            },
            {
              icon: <Users size={18} />,
              title: "4. مقابلة المستشار",
              text: "اشرح أنك طبيب وتحتاج 'Bildungsgutschein' لاجتياز FSP/KP، وركز على نقص الأطباء.",
            },
            {
              icon: <Ticket size={18} />,
              title: "5. الحصول على القسيمة",
              text: "إذا اقتنع المستشار، ستحصل على قسيمة تغطي تكاليف الدورة بالكامل.",
            },
            {
              icon: <PlayCircle size={18} />,
              title: "6. بدء الدراسة",
              text: "التكاليف مغطاة بالكامل. يمكنك التركيز على دراستك.",
            },
          ],
          warning: {
            title: "تنبيه هام",
            text: "رسوم FSP غالباً تسترد بعد النجاح. KP يتطلب طلباً خاصاً. أي مصاريف قبل الموافقة لن يتم استردادها.",
          },
        },
      },
      cta: "تواصل مع مستشار",
    },
  };

  const t = content[lang] || content.fr;

  const tSeo = {
    fr: {
      title: "Aides Financières & Financement - Médecins en Allemagne",
      desc: "Comment financer vos cours FSP/KP en Allemagne ? Guide sur le BAMF, l'Agentur für Arbeit et le Bildungsgutschein.",
    },
    de: {
      title: "Finanzierung & Bildungsgutschein - Für ausländische Ärzte",
      desc: "Kostenübernahme für FSP- und KP-Vorbereitungskurse. So erhalten Sie Fördermittel vom BAMF und der Arbeitsagentur.",
    },
    ar: {
      title: "المساعدات المالية والتمويل - للأطباء في ألمانيا",
      desc: "كيف تمول دورات اللغة والامتحانات في ألمانيا؟ دليل شامل حول BAMF، مكتب العمل، وقسائم التعليم (Bildungsgutschein).",
    },
  }[lang];

  // SHARED CARD STYLING FOR UNIFORMITY
  const cardClasses =
    "bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group h-full";
  const iconContainerClasses =
    "bg-[#004C73]/10 w-12 h-12 rounded-xl flex items-center justify-center text-[#004C73] mb-4 group-hover:scale-110 transition-transform";

  return (
    <div
      className="bg-medical-navy/15 min-h-screen pb-0"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Helmet>
        <title>{tSeo.title}</title>
        <meta name="description" content={tSeo.desc} />
        <link rel="canonical" href="https://gmed.ma/financial-aid" />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-10 pb-12 bg-medical-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#004C73_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={handleBack}
              className={`flex items-center gap-2 text-yellow-500 font-bold hover:text-white transition-colors text-sm group ${
                lang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <ArrowLeft
                size={18}
                className={lang === "ar" ? "rotate-180" : ""}
              />
              <span className="relative">
                {lang === "ar" ? "عودة" : lang === "de" ? "Zurück" : "Retour"}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
              </span>
            </button>

            <button
              onClick={handleShare}
              className={`flex items-center gap-2 text-white/80 hover:text-yellow-500 transition-colors text-sm font-medium ${
                lang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <Share2 size={18} />
              {t.share}
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div
              className={`md:w-1/2 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              {/* Tag is Gold */}
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-yellow-500/20">
                <Euro size={14} />
                {t.hero.tag}
              </div>

              {/* Title with Rouge Bordeaux Underline */}
              <h1 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight relative inline-block">
                {t.hero.title}
                <div className="absolute -bottom-2 left-0 w-1/4 h-1 bg-[#800020] rounded-full" />
              </h1>

              <p className="text-base text-slate-300 leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="md:w-1/2 relative flex justify-center items-center">
              <div className="absolute inset-0 bg-[#004C73] blur-3xl opacity-20 rounded-full"></div>
              <img
                src="/finance.png"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/800x530/0a192f/white?text=Finance";
                }}
                alt="Financial Aid"
                className="relative rounded-2xl shadow-2xl border border-white/10 z-10 w-auto h-40 md:h-52 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: MAIN AIDS --- */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-black text-medical-navy mb-8 text-center">
            {t.sections.aids.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BAMF Card */}
            <div className={cardClasses}>
              <div className={iconContainerClasses}>
                <Landmark size={24} />
              </div>
              <h3 className="text-xl font-black text-medical-navy mb-1">
                {t.sections.aids.bamf.title}
              </h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">
                {t.sections.aids.bamf.sub}
              </p>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {t.sections.aids.bamf.desc}
              </p>
              <ul className="space-y-2">
                {t.sections.aids.bamf.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm font-bold text-slate-700"
                  >
                    <CheckCircle
                      size={16}
                      className="text-[#004C73]" // Dark Blue check
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Agentur Card */}
            <div className={cardClasses}>
              <div className={iconContainerClasses}>
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-black text-medical-navy mb-1">
                {t.sections.aids.agentur.title}
              </h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">
                {t.sections.aids.agentur.sub}
              </p>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {t.sections.aids.agentur.desc}
              </p>
              <ul className="space-y-2 mb-4">
                {t.sections.aids.agentur.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm font-bold text-slate-700"
                  >
                    <CheckCircle
                      size={16}
                      className="text-[#004C73]" // Dark Blue check
                    />
                    {item}
                  </li>
                ))}
              </ul>
              {/* Alert kept Red for semantic meaning */}
              <div className="flex items-start gap-2 bg-red-50 p-3 rounded-lg text-xs text-red-700 font-medium">
                <AlertTriangle size={14} className="shrink-0 mt-0.5" />
                {t.sections.aids.agentur.note}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: TIPS & DOCS --- */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tips - UNIFIED CARD STYLE */}
            <div className={cardClasses}>
              <div className="flex items-center gap-3 mb-6">
                <div className={iconContainerClasses + " mb-0"}>
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-xl font-black text-medical-navy">
                  {t.sections.tips.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {t.sections.tips.tipsList.map((tip, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-700 text-sm font-medium"
                  >
                    {/* Bullet point uses Dark Blue */}
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-[#004C73]" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents - UNIFIED CARD STYLE */}
            <div className={cardClasses}>
              <div className="flex items-center gap-3 mb-6">
                <div className={iconContainerClasses + " mb-0"}>
                  <FileCheck size={24} />
                </div>
                <h3 className="text-xl font-black text-medical-navy">
                  Documents
                </h3>
              </div>
              <ul className="space-y-4">
                {t.sections.tips.docsList.map((doc, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 text-sm font-bold"
                  >
                    {/* Circle uses Dark Blue */}
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 bg-[#004C73]/10 text-[#004C73]">
                      {i + 1}
                    </div>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: STEP-BY-STEP --- */}
      <section className="py-16 bg-medical-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-yellow-500/20">
              <Building2 size={16} /> Guide
            </div>
            <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
              {t.sections.steps.title}
            </h2>
            <p className="text-medical-light/80 max-w-2xl mx-auto text-base leading-relaxed">
              {t.sections.steps.intro}
            </p>
          </div>

          <div className="relative pl-2 md:pl-8">
            {/* CHANGED: Solid Mustard Yellow Line for Process */}
            <div
              className={`absolute top-4 bottom-4 w-0.5 bg-[#E1AD01] ${
                lang === "ar" ? "right-5 md:right-10" : "left-5 md:left-10"
              }`}
            ></div>

            <div className="space-y-8">
              {t.sections.steps.list.map((step, i) => (
                <div
                  key={i}
                  className={`relative flex items-start ${
                    lang === "ar" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* CHANGED: Circle border is Mustard Yellow */}
                  <div
                    className={`absolute top-0 w-10 h-10 bg-medical-navy border-2 border-[#E1AD01] rounded-full flex items-center justify-center z-10 ${
                      lang === "ar" ? "right-0 md:right-5" : "left-0 md:left-5"
                    }`}
                  >
                    {/* Icon uses Mustard Yellow */}
                    <div className="text-[#E1AD01]">{step.icon}</div>
                  </div>

                  <div
                    className={`w-full ${
                      lang === "ar" ? "mr-14 md:mr-20" : "ml-14 md:ml-20"
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                      <h3 className="font-bold text-lg text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-medical-light/70 text-sm leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl max-w-2xl mx-auto text-center backdrop-blur-sm">
            <h4 className="text-amber-400 font-bold mb-2 flex items-center justify-center gap-2">
              <AlertTriangle size={18} /> {t.sections.steps.warning.title}
            </h4>
            <p className="text-amber-100 text-sm">
              {t.sections.steps.warning.text}
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/#contact"
              // CHANGED: Button is Dark Blue (#004C73)
              className="inline-flex items-center gap-3 bg-[#004C73] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#003a57] transition-colors shadow-lg shadow-[#004C73]/20"
            >
              {t.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialAid;
