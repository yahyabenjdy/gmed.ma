import React from "react";
import {
  Stethoscope,
  FileText,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

const WorkDoctor = ({ lang }) => {
  const content = {
    de: {
      title: "Arbeiten als Arzt in Deutschland",
      subtitle: "Der Weg zur Approbation und Facharztweiterbildung.",
      intro:
        "Internationale Ärzte sind ein Rückgrat des deutschen Gesundheitssystems. Der Anerkennungsprozess ist jedoch streng und folgt klaren Phasen.",
      phases: [
        {
          title: "Phase 1: Vorbereitung",
          desc: "Erlernen der deutschen Sprache bis zum C1-Niveau (Medizin).",
          items: [
            "Allgemeines Deutsch (B2)",
            "Fachsprachenkurs (C1)",
            "Dokumentensammlung",
          ],
        },
        {
          title: "Phase 2: Berufserlaubnis",
          desc: "Beantragung der vorübergehenden Arbeitserlaubnis (§10 BÄO).",
          items: [
            "Defizitbescheid erhalten",
            "Antragstellung bei der Behörde",
            "Zuweisung zum Prüfungsort",
          ],
        },
        {
          title: "Phase 3: FSP & KP",
          desc: "Erfolgreiches Bestehen der Fachsprachenprüfung und Kenntnisprüfung.",
          items: [
            "FSP (Kommunikation)",
            "KP (Medizinisches Wissen)",
            "Erhalt der Approbation",
          ],
        },
      ],
      requirements: {
        title: "Wichtige Voraussetzungen",
        list: [
          "Abgeschlossenes Medizinstudium",
          "Straffreiheit (Führungszeugnis)",
          "Gesundheitliche Eignung",
          "C1 Medizin Sprachzertifikat",
        ],
      },
    },
    fr: {
      title: "Travailler comme Médecin en Allemagne",
      subtitle: "Le parcours vers l'Approbation et la spécialisation.",
      intro:
        "Les médecins internationaux sont un pilier du système de santé allemand. Cependant, le processus de reconnaissance est strict.",
      phases: [
        {
          title: "Phase 1: Préparation",
          desc: "Apprentissage de l'allemand jusqu'au niveau C1 (Médical).",
          items: [
            "Allemand général (B2)",
            "Cours de langue médicale (C1)",
            "Collecte des documents",
          ],
        },
        {
          title: "Phase 2: Autorisation",
          desc: "Demande de l'autorisation provisoire d'exercer (§10 BÄO).",
          items: [
            "Réception du Defizitbescheid",
            "Dépôt du dossier",
            "Affectation au centre d'examen",
          ],
        },
        {
          title: "Phase 3: Examens",
          desc: "Réussite de la Fachsprachenprüfung (FSP) et de la Kenntnisprüfung (KP).",
          items: [
            "FSP (Communication)",
            "KP (Connaissances médicales)",
            "Obtention de l'Approbation",
          ],
        },
      ],
      requirements: {
        title: "Conditions Importantes",
        list: [
          "Diplôme de médecine complété",
          "Casier judiciaire vierge",
          "Aptitude physique et mentale",
          "Certificat de langue C1 Médical",
        ],
      },
    },
    ar: {
      title: "العمل كطبيب في ألمانيا",
      subtitle: "طريقك نحو الحصول على ترخيص مزاولة المهنة (Approbation).",
      intro:
        "الأطباء الدوليون ركيزة أساسية في النظام الصحي الألماني، لكن عملية الاعتراف بالشهادات تخضع لمراحل صارمة.",
      phases: [
        {
          title: "المرحلة 1: التحضير",
          desc: "تعلم اللغة الألمانية وصولاً إلى مستوى C1 الطبي.",
          items: [
            "اللغة العامة (B2)",
            "اللغة الطبية المتخصصة (C1)",
            "جمع وتجهيز الملف",
          ],
        },
        {
          title: "المرحلة 2: إذن العمل",
          desc: "طلب الحصول على إذن العمل المؤقت (§10 BÄO).",
          items: [
            "استلام قرار العجز (Defizitbescheid)",
            "تقديم الطلب للجهات المختصة",
            "تحديد موعد الامتحان",
          ],
        },
        {
          title: "المرحلة 3: الاختبارات",
          desc: "اجتياز امتحان اللغة الطبية (FSP) وامتحان المعرفة (KP).",
          items: [
            "امتحان FSP (التواصل)",
            "امتحان KP (المعرفة الطبية)",
            "استلام ترخيص مزاولة المهنة",
          ],
        },
      ],
      requirements: {
        title: "متطلبات هامة",
        list: [
          "شهادة تخرج في الطب",
          "شهادة حسن سيرة وسلوك",
          "اللياقة الصحية",
          "شهادة لغة C1 طبية",
        ],
      },
    },
  };

  const t = content[lang] || content.de;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-medical-navy text-white py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="p-3 bg-medical-cyan/20 rounded-2xl mb-6">
            <Stethoscope size={40} className="text-medical-cyan" />
          </div>
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-medical-light/70 text-lg">{t.subtitle}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <p
          className={`text-slate-600 text-lg mb-12 text-center max-w-3xl mx-auto ${
            lang === "ar" ? "rtl" : ""
          }`}
        >
          {t.intro}
        </p>

        {/* Roadmap Phases */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {t.phases.map((phase, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group"
            >
              <span className="absolute top-4 right-4 text-slate-100 text-6xl font-black group-hover:text-medical-light/50 transition-colors">
                0{idx + 1}
              </span>
              <h3
                className={`text-xl font-bold text-medical-navy mb-4 relative z-10 ${
                  lang === "ar" ? "text-right" : ""
                }`}
              >
                {phase.title}
              </h3>
              <p
                className={`text-slate-500 text-sm mb-6 relative z-10 ${
                  lang === "ar" ? "text-right" : ""
                }`}
              >
                {phase.desc}
              </p>
              <ul className="space-y-3 relative z-10">
                {phase.items.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 text-sm text-slate-700 ${
                      lang === "ar" ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <ShieldCheck
                      size={16}
                      className="text-medical-cyan shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Requirements Alert Box */}
        <div className="bg-medical-navy/5 border border-medical-navy/10 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="bg-medical-navy text-white p-4 rounded-2xl">
            <AlertCircle size={32} />
          </div>
          <div className={`flex-1 ${lang === "ar" ? "text-right" : ""}`}>
            <h4 className="text-xl font-bold text-medical-navy mb-4">
              {t.requirements.title}
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {t.requirements.list.map((req, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 text-slate-700 font-medium ${
                    lang === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-2 h-2 bg-medical-cyan rounded-full" />
                  {req}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDoctor;
