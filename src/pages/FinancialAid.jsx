import React from "react";
import {
  Landmark,
  BadgeEuro,
  FileText,
  UserCheck,
  HelpCircle,
  CheckCircle,
} from "lucide-react";

const FinancialAid = ({ lang }) => {
  const content = {
    de: {
      title: "Förderung & Finanzierung",
      subtitle:
        "Erfahren Sie, wie Sie Ihre Kurse durch staatliche Stellen finanzieren können.",
      intro:
        "In Deutschland gibt es zahlreiche Möglichkeiten, finanzielle Unterstützung für Ihre berufliche Anerkennung zu erhalten. Wir sind zertifizierter Partner für viele Förderprogramme.",
      types: [
        {
          title: "BAMF Sprachkurse",
          desc: "Kostenlose oder ermäßigte berufsbezogene Deutschkurse (BSK) für qualifizierte Zuwanderer.",
          icon: <Landmark size={24} />,
        },
        {
          title: "Bildungsgutschein (BGS)",
          desc: "Übernahme der Kursgebühren durch die Agentur für Arbeit oder das Jobcenter für Arbeitssuchende.",
          icon: <FileText size={24} />,
        },
        {
          title: "AVGS Gutschein",
          desc: "Aktivierungs- und Vermittlungsgutschein für Einzelcoaching und Anerkennungsberatung.",
          icon: <BadgeEuro size={24} />,
        },
      ],
      steps: {
        title: "So beantragen Sie die Förderung",
        list: [
          "Beratungsgespräch beim GMED Center vereinbaren",
          "Termin bei der Agentur für Arbeit oder dem Jobcenter wahrnehmen",
          "Notwendigkeit der Weiterbildung begründen (Anerkennungsbescheid)",
          "Gutschein beim GMED Center einreichen und Kurs starten",
        ],
      },
    },
    fr: {
      title: "Aide Financière & Financement",
      subtitle:
        "Découvrez comment financer vos cours via des organismes étatiques.",
      intro:
        "En Allemagne, il existe de nombreuses possibilités d'obtenir un soutien financier pour votre reconnaissance professionnelle.",
      types: [
        {
          title: "Cours BAMF",
          desc: "Cours d'allemand professionnel (BSK) gratuits ou à prix réduit pour les immigrés qualifiés.",
          icon: <Landmark size={24} />,
        },
        {
          title: "Bon de formation (BGS)",
          desc: "Prise en charge des frais de cours par l'Agence pour l'emploi pour les demandeurs d'emploi.",
          icon: <FileText size={24} />,
        },
        {
          title: "Bon AVGS",
          desc: "Bon d'activation et de placement pour le coaching individuel et le conseil en reconnaissance.",
          icon: <BadgeEuro size={24} />,
        },
      ],
      steps: {
        title: "Comment demander un financement",
        list: [
          "Prendre rendez-vous pour une consultation au GMED Center",
          "Prendre rendez-vous avec l'Agence pour l'emploi (Agentur für Arbeit)",
          "Justifier le besoin de formation (décision de reconnaissance)",
          "Remettre le bon au GMED Center et commencer le cours",
        ],
      },
    },
    ar: {
      title: "الدعم المالي والتمويل",
      subtitle: "اكتشف كيف يمكنك تمويل دوراتك من خلال الجهات الحكومية.",
      intro:
        "هناك العديد من الإمكاوات في ألمانيا للحصول على دعم مالي لمعادلة شهادتك المهنية. نحن شريك معتمد للعديد من برامج الدعم.",
      types: [
        {
          title: "دورات BAMF",
          desc: "دورات لغة ألمانية مهنية (BSK) مجانية أو مخفضة للمهاجرين المؤهلين.",
          icon: <Landmark size={24} />,
        },
        {
          title: "قسيمة التعليم (BGS)",
          desc: "تغطية تكاليف الدورة من قبل وكالة العمل (Agentur für Arbeit) للباحثين عن عمل.",
          icon: <FileText size={24} />,
        },
        {
          title: "قسيمة AVGS",
          desc: "قسيمة التفعيل والتوجيه للتدريب الفردي واستشارات الاعتراف بالشهادات.",
          icon: <BadgeEuro size={24} />,
        },
      ],
      steps: {
        title: "كيفية التقديم على التمويل",
        list: [
          "حجز موعد استشاري في مركز GMED",
          "تحديد موعد مع وكالة العمل أو مركز التوظيف (Jobcenter)",
          "تبرير الحاجة للتدريب (قرار الاعتراف بالشهادة)",
          "تسليم القسيمة لمركز GMED وبدء الدورة",
        ],
      },
    },
  };

  const t = content[lang] || content.de;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-medical-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <BadgeEuro size={48} className="text-medical-cyan mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-medical-light/80 text-lg">{t.subtitle}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div
          className={`p-8 bg-white rounded-3xl border border-slate-100 shadow-sm mb-12 ${
            lang === "ar" ? "text-right" : "text-left"
          }`}
        >
          <p className="text-slate-600 text-lg leading-relaxed">{t.intro}</p>
        </div>

        {/* Funding Types Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.types.map((type, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-medical-light text-medical-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {type.icon}
              </div>
              <h3
                className={`text-xl font-bold text-medical-navy mb-4 ${
                  lang === "ar" ? "text-right" : ""
                }`}
              >
                {type.title}
              </h3>
              <p
                className={`text-slate-500 text-sm leading-relaxed ${
                  lang === "ar" ? "text-right" : ""
                }`}
              >
                {type.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Steps to Apply Section */}
        <div className="bg-medical-light/30 border border-medical-cyan/20 rounded-3xl p-8 md:p-12">
          <div
            className={`flex items-center gap-3 mb-10 ${
              lang === "ar" ? "justify-end" : ""
            }`}
          >
            <HelpCircle className="text-medical-cyan" size={28} />
            <h2 className="text-2xl font-bold text-medical-navy">
              {t.steps.title}
            </h2>
          </div>

          <div className="space-y-6">
            {t.steps.list.map((step, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 ${
                  lang === "ar" ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-medical-cyan text-white flex items-center justify-center font-bold shrink-0 mt-1">
                  {i + 1}
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-50 flex-1">
                  <p className="text-slate-700 font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialAid;
