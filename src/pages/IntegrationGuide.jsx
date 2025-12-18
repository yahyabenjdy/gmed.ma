import React from "react";
import {
  Home,
  UserPlus,
  HeartPulse,
  CreditCard,
  Coffee,
  CheckCircle,
} from "lucide-react";

const IntegrationGuide = ({ lang }) => {
  const content = {
    de: {
      title: "Ankunft & Integration",
      subtitle: "Ihr Leitfaden für die ersten Schritte im deutschen Alltag.",
      intro:
        "Nach der Landung beginnt ein neuer Lebensabschnitt. Wir helfen Ihnen, sich schnell wie zu Hause zu fühlen.",
      steps: [
        {
          title: "Anmeldung",
          desc: "Innerhalb von 14 Tagen müssen Sie sich beim Einwohnermeldeamt (Bürgeramt) registrieren.",
          icon: <UserPlus size={24} />,
        },
        {
          title: "Wohnungssuche",
          desc: "Tipps für die Suche nach einer Unterkunft und das Verständnis von Mietverträgen.",
          icon: <Home size={24} />,
        },
        {
          title: "Bankkonto & Kasse",
          desc: "Eröffnung eines Girokontos und Wahl einer gesetzlichen Krankenkasse.",
          icon: <CreditCard size={24} />,
        },
        {
          title: "Soziales Leben",
          desc: "Kulturelle Besonderheiten und wie man in Deutschland Kontakte knüpft.",
          icon: <Coffee size={24} />,
        },
      ],
      checklist: [
        "Rundfunkbeitrag anmelden",
        "Steuer-ID erhalten",
        "Handyvertrag abschließen",
      ],
    },
    fr: {
      title: "Arrivée & Intégration",
      subtitle:
        "Votre guide pour les premières étapes de la vie quotidienne en Allemagne.",
      intro:
        "Après l'atterrissage, une nouvelle phase de vie commence. Nous vous aidons à vous sentir rapidement chez vous.",
      steps: [
        {
          title: "Enregistrement",
          desc: "Vous devez vous enregistrer à la mairie (Bürgeramt) dans les 14 jours suivant votre arrivée.",
          icon: <UserPlus size={24} />,
        },
        {
          title: "Logement",
          desc: "Conseils pour trouver un logement et comprendre les contrats de location.",
          icon: <Home size={24} />,
        },
        {
          title: "Banque & Santé",
          desc: "Ouverture d'un compte courant et choix d'une caisse d'assurance maladie.",
          icon: <CreditCard size={24} />,
        },
        {
          title: "Vie Sociale",
          desc: "Particularités culturelles et comment nouer des contacts en Allemagne.",
          icon: <Coffee size={24} />,
        },
      ],
      checklist: [
        "Redevance TV/Radio",
        "Numéro d'identification fiscale",
        "Contrat mobile",
      ],
    },
    ar: {
      title: "الوصول والاندماج",
      subtitle: "دليلك للخطوات الأولى في الحياة اليومية الألمانية.",
      intro:
        "بعد الوصول تبدأ مرحلة جديدة في حياتك. نحن نساعدك على الشعور بالاستقرار والراحة بسرعة.",
      steps: [
        {
          title: "تسجيل السكن",
          desc: "يجب عليك التسجيل في مكتب شؤون المواطنين (Bürgeramt) في غضون 14 يوماً.",
          icon: <UserPlus size={24} />,
        },
        {
          title: "البحث عن سكن",
          desc: "نصائح للبحث عن سكن وفهم عقود الإيجار في ألمانيا.",
          icon: <Home size={24} />,
        },
        {
          title: "البنك والتأمين",
          desc: "فتح حساب بنكي واختيار شركة التأمين الصحي المناسبة.",
          icon: <CreditCard size={24} />,
        },
        {
          title: "الحياة الاجتماعية",
          desc: "الخصوصيات الثقافية وكيفية تكوين علاقات اجتماعية في ألمانيا.",
          icon: <Coffee size={24} />,
        },
      ],
      checklist: [
        "تسجيل ضريبة التلفاز",
        "استلام الرقم الضريبي",
        "عقد الهاتف المحمول",
      ],
    },
  };

  const t = content[lang] || content.de;

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-medical-navy text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{t.title}</h1>
        <p className="text-medical-light/80 text-lg max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div
          className={`p-6 bg-slate-50 rounded-2xl mb-12 border-l-4 border-medical-cyan ${
            lang === "ar" ? "text-right border-l-0 border-r-4" : ""
          }`}
        >
          <p className="text-slate-700 text-lg italic">{t.intro}</p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {t.steps.map((step, idx) => (
            <div
              key={idx}
              className="flex gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-medical-light text-medical-cyan rounded-2xl flex items-center justify-center shrink-0">
                {step.icon}
              </div>
              <div className={lang === "ar" ? "text-right" : ""}>
                <h3 className="text-xl font-bold text-medical-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final Checklist Card */}
        <div className="bg-medical-light/30 rounded-3xl p-8 border border-medical-cyan/20">
          <h3
            className={`text-xl font-bold text-medical-navy mb-6 ${
              lang === "ar" ? "text-right" : ""
            }`}
          >
            Checklist
          </h3>
          <div className="flex flex-wrap gap-4">
            {t.checklist.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-medical-cyan/10 text-slate-700 text-sm font-medium ${
                  lang === "ar" ? "flex-row-reverse" : ""
                }`}
              >
                <CheckCircle size={16} className="text-medical-cyan" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationGuide;
