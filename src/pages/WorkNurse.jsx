import React from "react";
import {
  Heart,
  BookOpen,
  ClipboardCheck,
  Award,
  CheckCircle,
  Info,
} from "lucide-react";

const WorkNurse = ({ lang }) => {
  const content = {
    de: {
      title: "Arbeiten als Pflegekraft",
      subtitle: "Ihr Weg zur staatlichen Anerkennung in Deutschland.",
      intro:
        "Pflegefachkräfte werden in Deutschland händeringend gesucht. Wir unterstützen Sie beim Anerkennungsverfahren (Anerkennung) und der sprachlichen Vorbereitung.",
      process: [
        {
          title: "Sprachniveau B2",
          desc: "Für die Berufserlaubnis ist in fast allen Bundesländern ein B2-Zertifikat (telc oder Goethe) erforderlich.",
          icon: <BookOpen size={24} />,
        },
        {
          title: "Gleichwertigkeitsprüfung",
          desc: "Ihre Ausbildung wird mit dem deutschen Lehrplan verglichen. Bei Defiziten wählen Sie eine Ausgleichsmaßnahme.",
          icon: <ClipboardCheck size={24} />,
        },
        {
          title: "Kenntnisprüfung (KP)",
          desc: "Eine mündliche und praktische Prüfung über die pflegerischen Kernkompetenzen.",
          icon: <Award size={24} />,
        },
      ],
      details: {
        title: "Wichtige Informationen",
        items: [
          "Vollständiges Diplom und Fächernachweis erforderlich",
          "Möglichkeit der Finanzierung über Arbeitgeber",
          "Unterstützung bei der Wohnungssuche",
          "Direkte Vermittlung in Krankenhäuser oder Pflegeheime",
        ],
      },
    },
    fr: {
      title: "Travailler comme Infirmier",
      subtitle: "Votre parcours vers la reconnaissance d'État en Allemagne.",
      intro:
        "Le personnel infirmier est très recherché en Allemagne. Nous vous aidons dans la procédure de reconnaissance (Anerkennung).",
      process: [
        {
          title: "Niveau de langue B2",
          desc: "Un certificat B2 (telc ou Goethe) est requis pour l'autorisation d'exercer dans presque tous les Länder.",
          icon: <BookOpen size={24} />,
        },
        {
          title: "Examen d'équivalence",
          desc: "Votre formation est comparée au programme allemand pour identifier d'éventuels écarts.",
          icon: <ClipboardCheck size={24} />,
        },
        {
          title: "Kenntnisprüfung (KP)",
          desc: "Un examen oral et pratique sur les compétences de base en soins infirmiers.",
          icon: <Award size={24} />,
        },
      ],
      details: {
        title: "Informations Importantes",
        items: [
          "Diplôme complet et relevé de notes requis",
          "Possibilité de financement par l'employeur",
          "Aide à la recherche de logement",
          "Placement direct en hôpital ou maison de retraite",
        ],
      },
    },
    ar: {
      title: "العمل كممرض في ألمانيا",
      subtitle: "طريقك نحو الاعتراف الحكومي بالشهادة (Anerkennung).",
      intro:
        "يوجد طلب كبير على الكوادر التمريضية في ألمانيا. نحن نساعدك في إجراءات الاعتراف والتحضير اللغوي.",
      process: [
        {
          title: "مستوى اللغة B2",
          desc: "شهادة B2 (telc أو Goethe) مطلوبة للحصول على إذن العمل في معظم الولايات.",
          icon: <BookOpen size={24} />,
        },
        {
          title: "فحص المعادلة",
          desc: "تتم مقارنة تكوينك المهني مع المنهج الألماني لتحديد أي فروقات.",
          icon: <ClipboardCheck size={24} />,
        },
        {
          title: "امتحان المعرفة (KP)",
          desc: "امتحان شفهي وعملي يركز على الكفاءات الأساسية في التمريض.",
          icon: <Award size={24} />,
        },
      ],
      details: {
        title: "معلومات هامة",
        items: [
          "مطلوب دبلوم كامل وكشف النقاط",
          "إمكانية التمويل من قبل صاحب العمل",
          "دعم في البحث عن سكن",
          "توظيف مباشر في المستشفيات أو دور الرعاية",
        ],
      },
    },
  };

  const t = content[lang] || content.de;

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-medical-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart size={48} className="text-medical-cyan mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-medical-navy mb-4">
            {t.title}
          </h1>
          <p className="text-slate-600 text-lg">{t.subtitle}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div
          className={`p-8 bg-slate-50 rounded-3xl mb-16 ${
            lang === "ar" ? "text-right" : "text-left"
          }`}
        >
          <p className="text-slate-700 leading-relaxed text-lg">{t.intro}</p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-20">
          {t.process.map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row gap-6 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow ${
                lang === "ar" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-16 h-16 bg-medical-cyan/10 text-medical-cyan rounded-2xl flex items-center justify-center shrink-0">
                {step.icon}
              </div>
              <div className={lang === "ar" ? "text-right" : "text-left"}>
                <h3 className="text-xl font-bold text-medical-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Details Grid */}
        <div className="bg-medical-navy text-white p-10 rounded-3xl">
          <div
            className={`flex items-center gap-3 mb-8 ${
              lang === "ar" ? "justify-end" : ""
            }`}
          >
            <Info size={24} className="text-medical-cyan" />
            <h4 className="text-2xl font-bold">{t.details.title}</h4>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {t.details.items.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 ${
                  lang === "ar" ? "flex-row-reverse text-right" : ""
                }`}
              >
                <CheckCircle
                  size={20}
                  className="text-medical-cyan shrink-0 mt-1"
                />
                <span className="text-medical-light/90 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkNurse;
