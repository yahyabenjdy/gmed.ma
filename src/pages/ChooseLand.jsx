import React from "react";
import { Map, Info, CheckCircle, Search } from "lucide-react";

const ChooseLand = ({ lang }) => {
  const content = {
    de: {
      title: "Den richtigen Ort wählen",
      subtitle:
        "Jedes Bundesland hat eigene Regeln für die Anerkennung. Wir helfen Ihnen bei der Auswahl.",
      tableHeaders: ["Bundesland", "Wartezeit", "Prüfungsfokus", "Bedarf"],
      tableData: [
        {
          name: "NRW",
          wait: "3-6 Monate",
          focus: "Klinikalltag",
          demand: "Sehr Hoch",
        },
        {
          name: "Bayern",
          wait: "6-9 Monate",
          focus: "Fachwissen",
          demand: "Hoch",
        },
        {
          name: "Hessen",
          wait: "4-7 Monate",
          focus: "Kommunikation",
          demand: "Hoch",
        },
        {
          name: "BW",
          wait: "5-8 Monate",
          focus: "Praxis",
          demand: "Sehr Hoch",
        },
      ],
      advice:
        "Hinweis: Die Wahl des Bundeslandes beeinflusst die Dauer Ihres Anerkennungsprozesses erheblich.",
    },
    fr: {
      title: "Choisir le bon État",
      subtitle:
        "Chaque Land a ses propres règles de reconnaissance. Nous vous aidons à choisir.",
      tableHeaders: [
        "État (Land)",
        "Temps d'attente",
        "Focus examen",
        "Demande",
      ],
      tableData: [
        {
          name: "NRW",
          wait: "3-6 mois",
          focus: "Quotidien clinique",
          demand: "Très élevé",
        },
        {
          name: "Bavière",
          wait: "6-9 mois",
          focus: "Théorie",
          demand: "Élevé",
        },
        {
          name: "Hesse",
          wait: "4-7 mois",
          focus: "Communication",
          demand: "Élevé",
        },
        {
          name: "BW",
          wait: "5-8 mois",
          focus: "Pratique",
          demand: "Très élevé",
        },
      ],
      advice:
        "Note: Le choix de l'État influence considérablement la durée de votre processus de reconnaissance.",
    },
    ar: {
      title: "اختيار الولاية المناسبة",
      subtitle:
        "لكل ولاية اتحادية قواعدها الخاصة بالاعتراف بالشهادات. نحن نساعدك في الاختيار.",
      tableHeaders: ["الولاية", "مدة الانتظار", "تركيز الامتحان", "الطلب"],
      tableData: [
        {
          name: "NRW",
          wait: "3-6 أشهر",
          focus: "الواقع السريري",
          demand: "مرتفع جداً",
        },
        {
          name: "بايرن",
          wait: "6-9 أشهر",
          focus: "المعرفة النظرية",
          demand: "مرتفع",
        },
        { name: "هيسن", wait: "4-7 أشهر", focus: "التواصل", demand: "مرتفع" },
        {
          name: "BW",
          wait: "5-8 أشهر",
          focus: "الجانب العملي",
          demand: "مرتفع جداً",
        },
      ],
      advice:
        "ملاحظة: يؤثر اختيار الولاية بشكل كبير على مدة عملية الاعتراف بشهادتك.",
    },
  };

  const t = content[lang] || content.de;

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-medical-navy text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Map size={48} className="text-medical-cyan mx-auto mb-6" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-medical-light/80 text-lg">{t.subtitle}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12">
        {/* Advice Alert */}
        <div
          className={`flex items-center gap-4 p-4 bg-medical-light/30 border border-medical-cyan/20 rounded-2xl mb-12 ${
            lang === "ar" ? "flex-row-reverse text-right" : ""
          }`}
        >
          <Info className="text-medical-cyan shrink-0" />
          <p className="text-medical-navy font-medium text-sm md:text-base">
            {t.advice}
          </p>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto bg-white rounded-3xl border border-slate-100 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                {t.tableHeaders.map((header, i) => (
                  <th
                    key={i}
                    className={`p-6 text-medical-navy font-bold uppercase tracking-wider text-sm ${
                      lang === "ar" ? "text-right" : ""
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {t.tableData.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td
                    className={`p-6 font-bold text-medical-navy ${
                      lang === "ar" ? "text-right" : ""
                    }`}
                  >
                    {row.name}
                  </td>
                  <td
                    className={`p-6 text-slate-600 ${
                      lang === "ar" ? "text-right" : ""
                    }`}
                  >
                    {row.wait}
                  </td>
                  <td
                    className={`p-6 text-slate-600 ${
                      lang === "ar" ? "text-right" : ""
                    }`}
                  >
                    {row.focus}
                  </td>
                  <td className={`p-6 ${lang === "ar" ? "text-right" : ""}`}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-medical-light text-medical-cyan">
                      {row.demand}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Support Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center bg-slate-50 p-8 md:p-12 rounded-3xl">
          <div className={lang === "ar" ? "text-right" : "text-left"}>
            <h3 className="text-2xl font-bold text-medical-navy mb-4">
              Brauchen Sie Hilfe bei der Analyse?
            </h3>
            <p className="text-slate-600 mb-6 italic">
              Wir analysieren Ihr Profil und schlagen Ihnen das passende
              Bundesland vor.
            </p>
            <button className="btn-primary">Analyse starten</button>
          </div>
          <div className="hidden md:flex justify-center opacity-20">
            <Search size={120} className="text-medical-navy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseLand;
