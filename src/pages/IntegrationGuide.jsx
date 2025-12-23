import React, { useEffect } from "react";
import {
  Home,
  MapPin,
  Landmark,
  Shield,
  Smartphone,
  Users,
  Car,
  FileText,
  ArrowLeft,
  Share2,
  CheckCircle,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const IntegrationGuide = ({ lang }) => {
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
      title: "GMED - Integration Guide",
      text: "Guide d'Intégration et Vie Pratique en Allemagne.",
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
        tag: "Vie Pratique",
        title: "Guide d'Intégration",
        subtitle:
          "Les étapes clés post-arrivée : logement, Anmeldung, banques, assurances et astuces quotidiennes.",
      },
      share: "Partager",
      steps: [
        {
          icon: <Home size={18} />,
          title: "1. Trouver un logement",
          desc: "WG (colocation), résidence étudiante ou appartement individuel.",
          details: [
            "Options : WG (populaire), Wohnheim (économique), Appartement (confortable).",
            "Sites : wg-gesucht.de, immobilienscout24.de, ebay-kleinanzeigen.de.",
          ],
        },
        {
          icon: <MapPin size={18} />,
          title: "2. Zoom sur l’Anmeldung",
          desc: "Déclaration officielle de ton adresse. Indispensable pour tout.",
          details: [
            "Prends rendez-vous en ligne au Bürgeramt (Rathaus) rapidement.",
            "Documents : Passeport + Wohnungsgeberbescheinigung (attestation propriétaire).",
            "Astuce : Fais-le même en logement temporaire (Airbnb, chez un ami).",
          ],
        },
        {
          icon: <Landmark size={18} />,
          title: "3. Ouvrir un compte bancaire",
          desc: "Pour recevoir salaire/aides et payer le loyer.",
          details: [
            "En ligne (Rapide) : N26, Revolut.",
            "Classique : Deutsche Bank, Sparkasse, Commerzbank.",
          ],
        },
        {
          icon: <Shield size={18} />,
          title: "4. Assurances indispensables",
          desc: "Krankenversicherung (Santé) est obligatoire.",
          details: [
            "Obligatoire : Assurance santé (Krankenversicherung).",
            "Recommandé : Responsabilité civile (Haftpflicht) et professionnelle (Berufshaftpflicht).",
          ],
        },
        {
          icon: <Users size={18} />,
          title: "5. S’intégrer et créer un réseau",
          desc: "Apprendre l'allemand et rencontrer des confrères.",
          details: [
            "Langue : Tandems, Sprachcafé, Podcasts médicaux (SWR Medizin).",
            "Réseau : Groupes Facebook médecins, journées portes ouvertes hôpital.",
          ],
        },
        {
          icon: <Smartphone size={18} />,
          title: "6. Abonnements mobiles",
          desc: "Choisir entre contrat et prépayé.",
          details: [
            "Postpaid (Contrat) : Engagement 12-24 mois, souvent moins cher.",
            "Prepaid (Prépayé) : Sans engagement, idéal au début.",
          ],
        },
      ],
      extras: {
        title: "Annexes Administratives Clés",
        license: {
          title: "Permis de conduire",
          text: "Conversion obligatoire après 6 mois de résidence. Vérifie si un examen est nécessaire selon ton pays.",
        },
        residence: {
          title: "Renouvellement Titre de Séjour",
          text: "Commencer 8-12 semaines avant expiration. Documents : Contrat, Fiche de paie, Passeport, Meldebescheinigung.",
        },
      },
      cta: "Besoin d'aide pour le renouvellement ?",
    },
    de: {
      hero: {
        tag: "Leben in DE",
        title: "Integrationsleitfaden",
        subtitle:
          "Die wichtigsten Schritte nach der Ankunft: Wohnen, Anmeldung, Banken, Versicherungen.",
      },
      share: "Teilen",
      steps: [
        {
          icon: <Home size={18} />,
          title: "1. Wohnungssuche",
          desc: "WG, Wohnheim oder eigene Wohnung.",
          details: [
            "Optionen: WG (beliebt), Wohnheim (günstig), Wohnung (privat).",
            "Seiten: wg-gesucht.de, immobilienscout24.de.",
          ],
        },
        {
          icon: <MapPin size={18} />,
          title: "2. Anmeldung (Bürgeramt)",
          desc: "Offizielle Registrierung der Adresse. Pflicht!",
          details: [
            "Termin im Bürgeramt online buchen.",
            "Dokumente: Pass + Wohnungsgeberbescheinigung.",
            "Tipp: Auch bei temporärem Wohnen sofort erledigen.",
          ],
        },
        {
          icon: <Landmark size={18} />,
          title: "3. Bankkonto (Girokonto)",
          desc: "Für Gehalt und Miete.",
          details: [
            "Online (Schnell): N26, Revolut.",
            "Filialbanken: Sparkasse, Deutsche Bank, Commerzbank.",
          ],
        },
        {
          icon: <Shield size={18} />,
          title: "4. Versicherungen",
          desc: "Krankenversicherung ist Pflicht.",
          details: [
            "Pflicht: Krankenversicherung.",
            "Empfohlen: Haftpflicht & Berufshaftpflicht (für Ärzte).",
          ],
        },
        {
          icon: <Users size={18} />,
          title: "5. Integration & Netzwerk",
          desc: "Deutsch lernen und Kollegen treffen.",
          details: [
            "Sprache: Tandem, Podcasts.",
            "Netzwerk: Facebook-Gruppen, Hospitationen.",
          ],
        },
        {
          icon: <Smartphone size={18} />,
          title: "6. Handyvertrag",
          desc: "Vertrag oder Prepaid.",
          details: [
            "Vertrag: 12-24 Monate Laufzeit.",
            "Prepaid: Flexibel, gut für den Start.",
          ],
        },
      ],
      extras: {
        title: "Wichtige Verwaltungsinfos",
        license: {
          title: "Führerschein",
          text: "Umschreibung nach 6 Monaten Pflicht. Prüfen Sie die Regeln für Ihr Herkunftsland.",
        },
        residence: {
          title: "Verlängerung Aufenthaltstitel",
          text: "8-12 Wochen vor Ablauf starten. Nötig: Arbeitsvertrag, Gehaltsabrechnung, Pass.",
        },
      },
      cta: "Hilfe bei der Verlängerung?",
    },
    ar: {
      hero: {
        tag: "الحياة العملية",
        title: "دليل الاندماج والمعيشة",
        subtitle:
          "الخطوات الأساسية بعد الوصول: السكن، التسجيل، البنوك، التأمين والحياة اليومية.",
      },
      share: "مشاركة",
      steps: [
        {
          icon: <Home size={18} />,
          title: "1. البحث عن سكن",
          desc: "سكن مشترك (WG)، سكن طلابي أو شقة خاصة.",
          details: [
            "الخيارات: WG (شائع)، سكن طلابي (اقتصادي)، شقة (مريح).",
            "مواقع: wg-gesucht.de, immobilienscout24.de.",
          ],
        },
        {
          icon: <MapPin size={18} />,
          title: "2. التسجيل (Anmeldung)",
          desc: "تسجيل العنوان في البلدية. ضروري لكل شيء.",
          details: [
            "احجز موعداً في البلدية (Bürgeramt) فوراً.",
            "الوثائق: جواز السفر + إفادة صاحب السكن.",
            "نصيحة: قم بالتسجيل حتى لو كان السكن مؤقتاً.",
          ],
        },
        {
          icon: <Landmark size={18} />,
          title: "3. فتح حساب بنكي",
          desc: "لاستلام الراتب ودفع الإيجار.",
          details: [
            "بنوك إلكترونية: N26, Revolut (سهلة وسريعة).",
            "بنوك تقليدية: Deutsche Bank, Sparkasse.",
          ],
        },
        {
          icon: <Shield size={18} />,
          title: "4. التأمينات الضرورية",
          desc: "التأمين الصحي إجباري.",
          details: [
            "إجباري: التأمين الصحي (Krankenversicherung).",
            "موصى به: المسؤولية المدنية والمهنية (للأطباء).",
          ],
        },
        {
          icon: <Users size={18} />,
          title: "5. الاندماج والشبكة",
          desc: "تعلم الألمانية وتكوين علاقات.",
          details: [
            "اللغة: شركاء لغة، بودكاست طبي.",
            "الشبكة: مجموعات فيسبوك للأطباء، أيام مفتوحة بالمستشفيات.",
          ],
        },
        {
          icon: <Smartphone size={18} />,
          title: "6. الهاتف والإنترنت",
          desc: "عقد شهري أو دفع مسبق.",
          details: [
            "عقد (Postpaid): التزام 12-24 شهر.",
            "مسبق الدفع (Prepaid): بدون التزام، مثالي للبداية.",
          ],
        },
      ],
      extras: {
        title: "إجراءات إدارية هامة",
        license: {
          title: "رخصة القيادة",
          text: "يجب استبدالها بعد 6 أشهر. تحقق مما إذا كان الامتحان مطلوباً لبلدك.",
        },
        residence: {
          title: "تجديد الإقامة",
          text: "ابدأ قبل 8-12 أسبوعاً. الوثائق: عقد عمل، كشف راتب، جواز سفر.",
        },
      },
      cta: "هل تحتاج مساعدة في التجديد؟",
    },
  };

  const t = content[lang] || content.fr;

  const getFlagColors = (index) => {
    if (index % 3 === 0)
      return {
        border: "border-black",
        text: "text-white",
        check: "text-white/70",
      };
    if (index % 3 === 1)
      return {
        border: "border-red-600",
        text: "text-red-600",
        check: "text-red-500",
      };
    return {
      border: "border-yellow-500",
      text: "text-yellow-500",
      check: "text-yellow-500",
    };
  };

  const tSeo = {
    fr: {
      title: "Vivre en Allemagne - Guide d'Intégration & Logement",
      desc: "Guide pratique pour votre arrivée en Allemagne : Comment trouver un logement, faire l'Anmeldung, ouvrir un compte et s'assurer.",
    },
    de: {
      title: "Leben in Deutschland - Integrationsguide für Fachkräfte",
      desc: "Ihr Start in Deutschland: Wohnungssuche, Anmeldung beim Bürgeramt, Bankkonto und Versicherungen einfach erklärt.",
    },
    ar: {
      title: "العيش في ألمانيا - دليل الاندماج والسكن",
      desc: "دليلك العملي عند الوصول: البحث عن سكن، التسجيل في البلدية (Anmeldung)، فتح حساب بنكي والتأمين الصحي.",
    },
  }[lang];

  return (
    // CHANGED: Background to bg-medical-navy/15
    <div
      className="bg-medical-navy/15 min-h-screen pb-0"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Helmet>
        <title>{tSeo.title}</title>
        <meta name="description" content={tSeo.desc} />
        <link rel="canonical" href="https://gmed.ma/integration-guide" />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-10 pb-12 bg-medical-navy overflow-hidden">
        {/* CHANGED: Radial gradient uses Dark Blue (#004C73) */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#004C73_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={handleBack}
              // CHANGED: Text is Mustard Yellow
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
                {/* Gold Underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
              </span>
            </button>

            <button
              onClick={handleShare}
              // CHANGED: Hover text is Mustard Yellow
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
              className={`md:w-1/2 flex flex-col justify-center ${
                lang === "ar" ? "items-end text-right" : "items-start text-left"
              }`}
            >
              {/* Tag is Gold */}
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-yellow-500/20">
                <Shield size={14} />
                {t.hero.tag}
              </div>

              {/* CHANGED: Title with Rouge Bordeaux SVG Underline */}
              <h1 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight relative inline-block">
                {t.hero.title}
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
              </h1>

              <p className="text-base text-slate-300 leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="md:w-1/2 relative flex justify-center items-center">
              {/* CHANGED: Glow uses Dark Blue (#004C73) */}
              <div className="absolute inset-0 bg-[#004C73] blur-3xl opacity-20 rounded-full"></div>
              <img
                src="/integration.png"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/800x530/0a192f/white?text=Life+In+DE";
                }}
                alt="Integration"
                className="relative rounded-2xl shadow-2xl border border-white/10 z-10 w-auto h-40 md:h-52 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN STEPS --- */}
      {/* Background is handled by parent div (navy/15) */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="relative pl-2 md:pl-8">
            {/* CHANGED: Vertical Line is Rouge Bordeaux (#800020) */}
            <div
              className={`absolute top-4 bottom-4 w-0.5 bg-[#800020] ${
                lang === "ar" ? "right-5 md:right-10" : "left-5 md:left-10"
              }`}
            ></div>

            <div className="space-y-8">
              {t.steps.map((step, i) => {
                const colors = getFlagColors(i);
                return (
                  <div
                    key={i}
                    className={`relative flex items-start ${
                      lang === "ar" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {/* Circle Border Cycles Colors (Black-Red-Gold) */}
                    <div
                      className={`absolute top-0 w-10 h-10 bg-medical-navy border-2 rounded-full flex items-center justify-center z-10 shadow-lg ${
                        colors.border
                      } ${
                        lang === "ar"
                          ? "right-0 md:right-5"
                          : "left-0 md:left-5"
                      }`}
                    >
                      <div className={colors.text}>{step.icon}</div>
                    </div>

                    <div
                      className={`w-full ${
                        lang === "ar" ? "mr-14 md:mr-20" : "ml-14 md:ml-20"
                      }`}
                    >
                      <div className="bg-medical-navy p-6 rounded-2xl shadow-lg border border-[#004C73]/20 hover:shadow-xl transition-shadow group text-white">
                        {/* CHANGED: Title color uses Mustard Yellow (#E1AD01) instead of Cyan */}
                        <h3 className="font-bold text-xl text-[#E1AD01] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-white/90 text-sm mb-4 font-medium">
                          {step.desc}
                        </p>

                        <ul className="space-y-2 border-t border-white/10 pt-3">
                          {step.details.map((det, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs md:text-sm text-slate-300"
                            >
                              <CheckCircle
                                size={14}
                                className={`${colors.check} shrink-0 mt-0.5`}
                              />
                              {det}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- ADMIN EXTRAS --- */}
      <section className="py-12 bg-medical-navy text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-black text-white mb-8 text-center">
            {t.extras.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Driving License */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:bg-white/15 transition-colors">
              <div className="bg-red-600/20 p-3 rounded-xl text-red-500 shrink-0">
                <Car size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">
                  {t.extras.license.title}
                </h3>
                <p className="text-sm text-medical-light/80 leading-relaxed">
                  {t.extras.license.text}
                </p>
              </div>
            </div>

            {/* Residence Permit */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:bg-white/15 transition-colors">
              <div className="bg-yellow-500/20 p-3 rounded-xl text-yellow-500 shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">
                  {t.extras.residence.title}
                </h3>
                <p className="text-sm text-medical-light/80 leading-relaxed">
                  {t.extras.residence.text}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/#contact"
              // CHANGED: Button is Dark Blue (#004C73)
              className="inline-flex items-center gap-3 bg-[#004C73] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#003a57] transition-colors shadow-lg shadow-[#004C73]/20"
            >
              {t.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationGuide;
