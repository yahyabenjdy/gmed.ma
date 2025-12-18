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

  return (
    <div
      className="bg-[#e0f9fd] min-h-screen pb-0"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* --- HERO SECTION --- */}
      <section className="relative pt-10 pb-12 bg-medical-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Actions */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={handleBack}
              className={`flex items-center gap-2 text-medical-cyan font-bold hover:text-white transition-colors text-sm ${
                lang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <ArrowLeft
                size={18}
                className={lang === "ar" ? "rotate-180" : ""}
              />
              {lang === "ar" ? "عودة" : lang === "de" ? "Zurück" : "Retour"}
            </button>

            <button
              onClick={handleShare}
              className={`flex items-center gap-2 text-white/80 hover:text-medical-cyan transition-colors text-sm font-medium ${
                lang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <Share2 size={18} />
              {t.share}
            </button>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div
              className={`md:w-1/2 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 text-medical-cyan px-3 py-1 rounded-full text-xs font-bold mb-4 border border-white/20">
                <MapPin size={14} />
                {t.hero.tag}
              </div>
              <h1 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-base text-slate-300 leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Image (Small Fixed Size) */}
            <div className="md:w-1/2 relative flex justify-center items-center">
              <div className="absolute inset-0 bg-medical-cyan blur-3xl opacity-20 rounded-full"></div>
              {/* Image Name: integration.png */}
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

      {/* --- MAIN STEPS (White Background, Blue Cards) --- */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="relative pl-2 md:pl-8">
            {/* Vertical Chain Line (Slate for visibility on white) */}
            <div
              className={`absolute top-4 bottom-4 w-0.5 bg-slate-200 ${
                lang === "ar" ? "right-5 md:right-10" : "left-5 md:left-10"
              }`}
            ></div>

            <div className="space-y-8">
              {t.steps.map((step, i) => (
                <div
                  key={i}
                  className={`relative flex items-start ${
                    lang === "ar" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Icon Circle (Navy background) */}
                  <div
                    className={`absolute top-0 w-10 h-10 bg-medical-navy border-2 border-medical-cyan rounded-full flex items-center justify-center z-10 shadow-lg ${
                      lang === "ar" ? "right-0 md:right-5" : "left-0 md:left-5"
                    }`}
                  >
                    <div className="text-medical-cyan">{step.icon}</div>
                  </div>

                  {/* Content Box (Blue Card) */}
                  <div
                    className={`w-full ${
                      lang === "ar" ? "mr-14 md:mr-20" : "ml-14 md:ml-20"
                    }`}
                  >
                    <div className="bg-medical-navy p-6 rounded-2xl shadow-lg border border-medical-cyan/20 hover:shadow-xl transition-shadow group text-white">
                      <h3 className="font-bold text-xl text-medical-cyan mb-2">
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
                              className="text-medical-cyan shrink-0 mt-0.5"
                            />
                            {det}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- ADMIN EXTRAS (Dark Blue Background) --- */}
      <section className="py-12 bg-medical-navy text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-black text-white mb-8 text-center">
            {t.extras.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Driving License */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:bg-white/15 transition-colors">
              <div className="bg-amber-500/20 p-3 rounded-xl text-amber-300 shrink-0">
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
              <div className="bg-emerald-500/20 p-3 rounded-xl text-emerald-300 shrink-0">
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

          {/* CTA Bottom */}
          <div className="mt-12 text-center">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 bg-medical-cyan text-medical-navy px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors shadow-lg"
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
