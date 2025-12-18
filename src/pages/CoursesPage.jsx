import React from "react";
import {
  Check,
  Calendar,
  Clock,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const CoursesPage = ({ lang }) => {
  const content = {
    de: {
      title: "Unsere Sprach- & Fachkurse",
      subtitle:
        "Gezielte Vorbereitung auf Ihre medizinische Karriere in Deutschland.",
      cta: "Jetzt Platz sichern",
      courses: [
        {
          id: "b1-intensive",
          name: "B1 Intensivkurs",
          duration: "3 Monate",
          schedule: "Mo - Fr | 09:00 - 13:00",
          desc: "Die Basis für Ihren Einstieg in Deutschland.",
          features: [
            "Allgemeine Sprachkenntnisse",
            "Prüfungssimulation",
            "Zertifikatstraining",
          ],
        },
        {
          id: "b2-nursing",
          name: "B2 Pflege",
          duration: "4 Monate",
          schedule: "Mo - Do | 14:00 - 18:00",
          desc: "Spezialisierter Sprachkurs für Pflegefachkräfte.",
          features: [
            "Medizinische Terminologie",
            "Patientendokumentation",
            "Teamkommunikation",
          ],
        },
        {
          id: "c1-medical",
          name: "C1 Medizin / FSP",
          duration: "3 Monate",
          schedule: "Abendkurse verfügbar",
          desc: "Vorbereitung auf die Fachsprachenprüfung für Ärzte.",
          features: [
            "Arzt-Patienten-Gespräche",
            "Arztbriefschreibung",
            "Kollegengespräche",
          ],
        },
        {
          id: "kenntnis",
          name: "Kenntnisprüfung (KP)",
          duration: "6 Monate",
          schedule: "Wochenend-Intensiv",
          desc: "Vorbereitung auf die medizinische Gleichwertigkeitsprüfung.",
          features: [
            "Innere Medizin & Chirurgie",
            "Pharmakologie",
            "Praktische Fallbeispiele",
          ],
        },
        {
          id: "telc-prep",
          name: "telc Deutsch B2/C1 Medizin",
          duration: "4 Wochen",
          schedule: "Crash-Kurs",
          desc: "Gezieltes Training für das telc Zertifikat.",
          features: [
            "Prüfungsstrategien",
            "Hörverstehen Fokus",
            "Mündlicher Ausdruck",
          ],
        },
      ],
    },
    fr: {
      title: "Nos Cours de Langue et Spécialisés",
      subtitle: "Préparation ciblée pour votre carrière médicale en Allemagne.",
      cta: "Réserver ma place",
      courses: [
        {
          id: "b1-intensive",
          name: "B1 Intensif",
          duration: "3 Mois",
          schedule: "Lun - Ven | 09:00 - 13:00",
          desc: "La base de votre intégration en Allemagne.",
          features: [
            "Compétences linguistiques générales",
            "Simulations d'examen",
            "Entraînement certificat",
          ],
        },
        {
          id: "b2-nursing",
          name: "B2 Soins Infirmiers",
          duration: "4 Mois",
          schedule: "Lun - Jeu | 14:00 - 18:00",
          desc: "Cours de langue spécialisé pour les infirmiers.",
          features: [
            "Terminologie médicale",
            "Documentation des patients",
            "Communication d'équipe",
          ],
        },
        {
          id: "c1-medical",
          name: "C1 Médical / FSP",
          duration: "3 Mois",
          schedule: "Cours du soir disponibles",
          desc: "Préparation à l'examen de langue spécialisée (FSP) pour médecins.",
          features: [
            "Entretiens médecin-patient",
            "Rédaction de rapports",
            "Discussions collégiales",
          ],
        },
        {
          id: "kenntnis",
          name: "Kenntnisprüfung (KP)",
          duration: "6 Mois",
          schedule: "Weekend Intensif",
          desc: "Préparation à l'examen d'équivalence médicale.",
          features: [
            "Médecine interne et chirurgie",
            "Pharmacologie",
            "Études de cas pratiques",
          ],
        },
        {
          id: "telc-prep",
          name: "telc Allemand B2/C1 Médical",
          duration: "4 Semaines",
          schedule: "Cours intensif",
          desc: "Entraînement ciblé pour le certificat telc.",
          features: [
            "Stratégies d'examen",
            "Focus compréhension orale",
            "Expression orale",
          ],
        },
      ],
    },
    ar: {
      title: "دوراتنا اللغوية والمتخصصة",
      subtitle: "تحضير مستهدف لمسيرتك الطبية في ألمانيا.",
      cta: "احجز مكانك الآن",
      courses: [
        {
          id: "b1-intensive",
          name: "دورة B1 المكثفة",
          duration: "3 أشهر",
          schedule: "الاثنين - الجمعة | 09:00 - 13:00",
          desc: "الأساس لانطلاقتك في ألمانيا.",
          features: [
            "مهارات اللغة العامة",
            "محاكاة الامتحانات",
            "التدريب على الشهادة",
          ],
        },
        {
          id: "b2-nursing",
          name: "B2 التمريض",
          duration: "4 أشهر",
          schedule: "الاثنين - الخميس | 14:00 - 18:00",
          desc: "دورة لغوية متخصصة لكوادر التمريض.",
          features: [
            "المصطلحات الطبية",
            "توثيق بيانات المرضى",
            "التواصل مع الفريق",
          ],
        },
        {
          id: "c1-medical",
          name: "C1 الطبي / FSP",
          duration: "3 أشهر",
          schedule: "تتوفر دورات مسائية",
          desc: "التحضير لامتحان اللغة الطبية المتخصص للأطباء.",
          features: [
            "محادثات الطبيب والمريض",
            "كتابة التقارير الطبية",
            "المناقشات الزميلة",
          ],
        },
        {
          id: "kenntnis",
          name: "امتحان المعرفة (KP)",
          duration: "6 أشهر",
          schedule: "مكثف نهاية الأسبوع",
          desc: "التحضير لامتحان معادلة الشهادة الطبية.",
          features: [
            "الطب الباطني والجراحة",
            "علم الأدوية",
            "دراسة حالات عملية",
          ],
        },
        {
          id: "telc-prep",
          name: "telc الألمانية B2/C1 الطبية",
          duration: "4 أسابيع",
          schedule: "دورة سريعة",
          desc: "تدريب مكثف للحصول على شهادة telc.",
          features: [
            "استراتيجيات الامتحان",
            "التركيز على الفهم السمعي",
            "التعبير الشفهي",
          ],
        },
      ],
    },
  };

  const t = content[lang] || content.de;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-medical-navy text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-medical-light/80 text-lg">{t.subtitle}</p>
        </div>
      </div>

      {/* Courses List */}
      <div className="max-w-5xl mx-auto px-4 -mt-10">
        <div className="space-y-8">
          {t.courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden border border-slate-100 flex flex-col md:flex-row hover:shadow-xl transition-shadow"
            >
              <div className="bg-medical-cyan p-8 md:w-1/3 flex flex-col justify-center items-center text-white text-center">
                <GraduationCap size={48} className="mb-4" />
                <h3 className="text-xl font-bold">{course.name}</h3>
              </div>

              <div
                className={`p-8 md:w-2/3 flex flex-col justify-between ${
                  lang === "ar" ? "text-right" : "text-left"
                }`}
              >
                <div>
                  <div
                    className={`flex flex-wrap gap-4 mb-6 ${
                      lang === "ar" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Clock size={16} className="text-medical-cyan" />{" "}
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar size={16} className="text-medical-cyan" />{" "}
                      {course.schedule}
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 italic">{course.desc}</p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {course.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 text-sm text-slate-700 ${
                          lang === "ar" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <Check size={16} className="text-medical-cyan" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="btn-primary w-full sm:w-auto self-start flex items-center justify-center gap-2">
                  {t.cta} <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
