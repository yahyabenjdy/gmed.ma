import React from "react";
import {
  Stethoscope,
  HeartPulse,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Work = ({ lang }) => {
  const content = {
    de: {
      title: "Arbeiten in Deutschland",
      subtitle:
        "Direkte Vermittlung für qualifizierte Ärzte und Pflegekräfte an Top-Kliniken.",
      cards: [
        {
          id: "doctor",
          title: "Für Ärzte",
          desc: "Approbation, Facharztausbildung und direkte Festanstellung.",
          salary: "ab 5.500€ / Monat",
          icon: <Stethoscope size={32} />,
          features: [
            "Assistenzarztstellen",
            "Facharztanerkennung",
            "Blue Card EU",
          ],
          link: "/work/doctor", // Make sure this matches your App.jsx route
          btn: "Infos für Ärzte",
        },
        {
          id: "nurse",
          title: "Für Pflegekräfte",
          desc: "Anerkennung Ihres Diploms und sofortiger Arbeitsbeginn.",
          salary: "ab 2.800€ / Monat",
          icon: <HeartPulse size={32} />,
          features: [
            "Anerkennungsverfahren",
            "Unbefristete Verträge",
            "Familiennachzug",
          ],
          link: "/work/nurse", // Make sure this matches your App.jsx route
          btn: "Infos für Pflegekräfte",
        },
      ],
    },
    fr: {
      title: "Travailler en Allemagne",
      subtitle:
        "Placement direct pour médecins et infirmiers qualifiés dans les meilleures cliniques.",
      cards: [
        {
          id: "doctor",
          title: "Pour les Médecins",
          desc: "Approbation, spécialisation et contrat de travail direct.",
          salary: "à partir de 5.500€ / mois",
          icon: <Stethoscope size={32} />,
          features: ["Postes de Résident", "Spécialisation", "Carte Bleue UE"],
          link: "/work/doctor",
          btn: "Espace Médecins",
        },
        {
          id: "nurse",
          title: "Pour les Infirmiers",
          desc: "Reconnaissance de votre diplôme et démarrage immédiat.",
          salary: "à partir de 2.800€ / mois",
          icon: <HeartPulse size={32} />,
          features: [
            "Procédure d'équivalence",
            "Contrats CDI",
            "Regroupement familial",
          ],
          link: "/work/nurse",
          btn: "Espace Infirmiers",
        },
      ],
    },
    ar: {
      title: "العمل في ألمانيا",
      subtitle: "توظيف مباشر للأطباء والممرضين المؤهلين في أفضل المستشفيات.",
      cards: [
        {
          id: "doctor",
          title: "للأطباء",
          desc: "الموافقة الطبية (Approbation)، التخصص وعقود عمل مباشرة.",
          salary: "ابتداءً من 5.500€ / شهر",
          icon: <Stethoscope size={32} />,
          features: [
            "وظائف الأطباء المقيمين",
            "التخصص الطبي",
            "البطاقة الزرقاء الأوروبية",
          ],
          link: "/work/doctor",
          btn: "معلومات الأطباء",
        },
        {
          id: "nurse",
          title: "للممرضين",
          desc: "الاعتراف بدبلومك وبدء العمل الفوري.",
          salary: "ابتداءً من 2.800€ / شهر",
          icon: <HeartPulse size={32} />,
          features: ["إجراءات المعادلة", "عقود عمل دائمة", "لم الشمل العائلي"],
          link: "/work/nurse",
          btn: "معلومات الممرضين",
        },
      ],
    },
  };

  const t = content[lang] || content.fr;

  return (
    // 1. CRITICAL: Add the ID so the page can scroll back here
    <section
      id="work-section"
      className="pt-12 pb-16 bg-[#e0f9fd]"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-medical-navy mb-3">
            {t.title}
          </h2>
          <p className="text-lg text-slate-500 font-medium">{t.subtitle}</p>
        </div>

        {/* Career Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-0 w-full h-2 ${
                  card.id === "doctor" ? "bg-medical-navy" : "bg-medical-cyan"
                }`}
              ></div>

              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className={`p-4 rounded-2xl ${
                        card.id === "doctor"
                          ? "bg-medical-navy/10 text-medical-navy"
                          : "bg-medical-cyan/10 text-medical-cyan"
                      }`}
                    >
                      {card.icon}
                    </div>
                    <div className="text-right flex items-center">
                      <span className="block text-medical-navy font-black text-lg">
                        {card.salary}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-medical-navy mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    {card.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {card.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm font-bold text-slate-600"
                      >
                        <CheckCircle2
                          size={18}
                          className={`${
                            card.id === "doctor"
                              ? "text-medical-navy"
                              : "text-medical-cyan"
                          }`}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={card.link}
                  // 2. CRITICAL: Pass the state so the next page knows where to return
                  state={{ fromHomeSection: true }}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all text-white shadow-lg ${
                    card.id === "doctor"
                      ? "bg-medical-navy hover:bg-[#1a2c4e] shadow-medical-navy/30"
                      : "bg-medical-cyan hover:bg-[#0096b4] shadow-medical-cyan/30"
                  }`}
                >
                  {card.btn}
                  <ArrowRight
                    size={20}
                    className={lang === "ar" ? "rotate-180" : ""}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
