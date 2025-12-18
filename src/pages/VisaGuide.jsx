import React from "react";
import {
  Landmark,
  FileCheck,
  Calendar,
  ShieldCheck,
  Wallet,
  ArrowRight,
} from "lucide-react";

const VisaGuide = ({ lang }) => {
  const content = {
    de: {
      title: "Visum & Finanzierung",
      subtitle:
        "Schritt-für-Schritt Anleitung für Ihr Visum zur Berufsanerkennung (16d).",
      intro:
        "Der Visumsprozess ist der letzte große Schritt vor Ihrer Abreise. Hier finden Sie alle notwendigen Informationen.",
      blockedAccount: {
        title: "Das Sperrkonto",
        desc: "Um ein Visum zu erhalten, müssen Sie nachweisen, dass Sie Ihren Lebensunterhalt finanzieren können.",
        amount: "Erforderlicher Betrag: ca. 11.208 € pro Jahr",
        providers: ["Fintiba", "Expatrio", "Deutsche Bank"],
      },
      checklist: {
        title: "Dokumenten-Checkliste",
        items: [
          "Gültiger Reisepass",
          "Defizitbescheid der Anerkennungsbehörde",
          "Anmeldung zum Sprachkurs/Kenntnisprüfung",
          "Nachweis des Sperrkontos",
          "Reisekrankenversicherung",
          "Mietbestätigung oder Unterkunftsnachweis",
        ],
      },
    },
    fr: {
      title: "Visa & Financement",
      subtitle:
        "Guide étape par étape pour votre visa de reconnaissance (16d).",
      intro:
        "Le processus de visa est la dernière grande étape avant votre départ. Vous trouverez ici toutes les informations nécessaires.",
      blockedAccount: {
        title: "Le Compte Bloqué (Sperrkonto)",
        desc: "Pour obtenir un visa, vous devez prouver que vous pouvez subvenir à vos besoins.",
        amount: "Montant requis : env. 11.208 € par an",
        providers: ["Fintiba", "Expatrio", "Deutsche Bank"],
      },
      checklist: {
        title: "Liste des documents",
        items: [
          "Passeport valide",
          "Defizitbescheid de l'autorité de reconnaissance",
          "Inscription au cours de langue/examen",
          "Preuve du compte bloqué",
          "Assurance maladie de voyage",
          "Confirmation de logement",
        ],
      },
    },
    ar: {
      title: "التأشيرة والتمويل",
      subtitle:
        "دليل خطوة بخطوة للحصول على تأشيرة تعديل الشهادات المهنية (16d).",
      intro:
        "عملية الحصول على التأشيرة هي الخطوة الكبيرة الأخيرة قبل مغادرتك. ستجد هنا كل المعلومات الضرورية.",
      blockedAccount: {
        title: "الحساب البنكي المغلق (Sperrkonto)",
        desc: "للحصول على التأشيرة، يجب عليك إثبات قدرتك على تغطية تكاليف المعيشة.",
        amount: "المبلغ المطلوب: حوالي 11,208 يورو سنوياً",
        providers: ["Fintiba", "Expatrio", "Deutsche Bank"],
      },
      checklist: {
        title: "قائمة الوثائق المطلوبة",
        items: [
          "جواز سفر ساري المفعول",
          "قرار العجز (Defizitbescheid) من هيئة الاعتراف",
          "التسجيل في دورة لغة أو امتحان المعرفة",
          "إثبات الحساب البنكي المغلق",
          "تأمين صحي للسفر",
          "إثبات السكن أو حجز السكن",
        ],
      },
    },
  };

  const t = content[lang] || content.de;

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-medical-light py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Landmark size={48} className="text-medical-cyan mx-auto mb-6" />
          <h1 className="text-3xl md:text-5xl font-bold text-medical-navy mb-4">
            {t.title}
          </h1>
          <p className="text-slate-600 text-lg">{t.subtitle}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Blocked Account Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className={lang === "ar" ? "text-right" : "text-left"}>
            <div
              className={`flex items-center gap-3 mb-4 ${
                lang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <Wallet className="text-medical-cyan" size={32} />
              <h2 className="text-2xl font-bold text-medical-navy">
                {t.blockedAccount.title}
              </h2>
            </div>
            <p className="text-slate-600 mb-6">{t.blockedAccount.desc}</p>
            <div className="bg-medical-navy text-white p-6 rounded-2xl mb-6 shadow-lg">
              <p className="text-sm opacity-80 mb-1">Status 2024/2025</p>
              <p className="text-xl font-bold">{t.blockedAccount.amount}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {t.blockedAccount.providers.map((p, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-medical-navy font-bold">
                <ShieldCheck className="text-medical-cyan" /> Secure Process
              </div>
              <p className="text-sm text-slate-500 italic">
                "Das Sperrkonto ist eine zwingende Voraussetzung für das
                16d-Visum."
              </p>
            </div>
          </div>
        </div>

        {/* Checklist Section */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
          <div className="bg-medical-navy p-8 text-white">
            <div
              className={`flex items-center gap-3 ${
                lang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <FileCheck size={28} className="text-medical-cyan" />
              <h2 className="text-2xl font-bold">{t.checklist.title}</h2>
            </div>
          </div>
          <div className="p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {t.checklist.items.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-4 rounded-xl bg-slate-50 group hover:bg-medical-light/20 transition-colors ${
                    lang === "ar" ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <div className="w-6 h-6 rounded-full border-2 border-medical-cyan flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-medical-cyan group-hover:text-white transition-all">
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaGuide;
