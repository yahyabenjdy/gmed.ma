import React, { useEffect } from "react";
import {
  Stethoscope,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  CheckCircle,
  Landmark,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const WorkDoctor = ({ lang }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Back Button Logic
  const handleBack = () => {
    if (location.state && location.state.fromHomeSection) {
      navigate("/");
      setTimeout(() => {
        // Ensure your Homepage Work Section has id="work-section"
        const section = document.getElementById("work-section");
        if (section) {
          const yOffset = -80;
          const y =
            section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
    } else {
      navigate("/");
    }
  };

  const content = {
    de: {
      hero: {
        tag: "Medizinische Karriere",
        title: "Arbeiten als Arzt in Deutschland",
        subtitle:
          "Der Weg zur Approbation und Facharztweiterbildung. Wir begleiten Sie durch den Anerkennungsprozess.",
        cta: "Beratung starten",
      },
      back: "Zurück",
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
      services: {
        title: "Unser Service für Ärzte",
        list: [
          "Analyse Ihrer medizinischen Dokumente",
          "Anmeldung zum FSP-Vorbereitungskurs",
          "Beantragung der Berufserlaubnis",
          "Vorbereitung auf die Kenntnisprüfung (KP)",
          "Jobvermittlung an deutsche Kliniken",
        ],
      },
      ctaBox: {
        title: "Bereit für den nächsten Schritt?",
        desc: "Lassen Sie uns Ihre Chancen gemeinsam prüfen.",
        btn: "Kontakt aufnehmen",
      },
    },
    fr: {
      hero: {
        tag: "Carrière Médicale",
        title: "Travailler comme Médecin en Allemagne",
        subtitle:
          "Le parcours vers l'Approbation et la spécialisation. Nous vous guidons à travers le processus de reconnaissance.",
        cta: "Commencer la procédure",
      },
      back: "Retour",
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
      services: {
        title: "Nos Services pour Médecins",
        list: [
          "Analyse de vos diplômes et documents",
          "Inscription au cours de préparation FSP",
          "Demande de Permis de Travail (Berufserlaubnis)",
          "Préparation à l'examen de connaissances (KP)",
          "Placement dans des cliniques allemandes",
        ],
      },
      ctaBox: {
        title: "Prêt à franchir le pas ?",
        desc: "Vérifions ensemble votre éligibilité.",
        btn: "Contactez-nous",
      },
    },
    ar: {
      hero: {
        tag: "مهنة الطب",
        title: "العمل كطبيب في ألمانيا",
        subtitle:
          "طريقك نحو الحصول على ترخيص مزاولة المهنة (Approbation) والتخصص. نرافقك في جميع مراحل الاعتراف.",
        cta: "ابدأ الإجراءات",
      },
      back: "عودة",
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
      services: {
        title: "خدماتنا للأطباء",
        list: [
          "تحليل الشهادات والوثائق الطبية",
          "التسجيل في دورة التحضير لامتحان FSP",
          "التقديم على تصريح العمل (Berufserlaubnis)",
          "التحضير لامتحان المعادلة (KP)",
          "توفير فرص عمل في المستشفيات الألمانية",
        ],
      },
      ctaBox: {
        title: "هل أنت مستعد للخطوة القادمة؟",
        desc: "دعنا نتحقق من أهليتك معاً.",
        btn: "اتصل بنا",
      },
    },
  };

  const t = content[lang] || content.fr;

  return (
    // MAIN WRAPPER: pb-0 ensures flush footer
    <div
      className="bg-[#e0f9fd] min-h-screen pb-0"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 pb-20 bg-medical-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className={`flex items-center gap-2 text-medical-cyan font-bold mb-6 hover:text-white transition-colors text-sm ${
              lang === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            <ArrowLeft
              size={18}
              className={lang === "ar" ? "rotate-180" : ""}
            />
            {t.back}
          </button>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div
              className={`md:w-1/2 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 text-medical-cyan px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-white/20">
                <Stethoscope size={16} />
                {t.hero.tag}
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>

              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-medical-cyan text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0096b4] transition-all shadow-lg shadow-medical-cyan/20 group"
              >
                {t.hero.cta}
                <ArrowRight
                  size={20}
                  className={`transition-transform group-hover:translate-x-1 ${
                    lang === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""
                  }`}
                />
              </Link>
            </div>

            {/* Hero Image/Card */}
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-medical-cyan blur-3xl opacity-20 rounded-full"></div>
              {/* Ensure you have /doctor.png in your public folder */}
              <img
                src="/doctor.png"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/600x400/0a192f/white?text=Doctors+Germany";
                }}
                alt="Doctor in Germany"
                className="relative rounded-2xl shadow-2xl border border-white/10 z-10 w-full object-cover transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- INTRO & REQUIREMENTS --- */}
      <section className="py-12 bg-white/50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-slate-600 text-lg mb-12 text-center max-w-3xl mx-auto font-medium leading-relaxed">
            {t.intro}
          </p>

          {/* Requirements Alert Box */}
          <div className="bg-white border border-slate-100 shadow-lg rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center -mt-6">
            <div className="bg-medical-navy text-white p-5 rounded-2xl shadow-md">
              <AlertCircle size={32} />
            </div>
            <div
              className={`flex-1 ${lang === "ar" ? "text-right" : "text-left"}`}
            >
              <h4 className="text-xl font-bold text-medical-navy mb-4">
                {t.requirements.title}
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.requirements.list.map((req, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 text-slate-700 font-medium ${
                      lang === "ar" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-2 h-2 bg-medical-cyan rounded-full shrink-0" />
                    {req}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHASES (Roadmap) --- */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {t.phases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Large Background Number */}
                <span className="absolute top-4 right-6 text-slate-100 text-7xl font-black select-none transition-colors group-hover:text-medical-cyan/10">
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

                <div className="w-full h-px bg-slate-100 mb-6"></div>

                <ul className="space-y-3 relative z-10">
                  {phase.items.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-2 text-sm text-slate-700 font-medium ${
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
        </div>
      </section>

      {/* --- COMPACT SERVICES SECTION (Flush to footer) --- */}
      {/* Changed pb-16 to py-8 for reduced bottom space */}
      <section className="py-8 bg-medical-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-medical-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-medical-cyan/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Column: Services List */}
              <div className={lang === "ar" ? "text-right" : "text-left"}>
                <div className="inline-flex items-center gap-2 text-medical-cyan font-bold mb-3 text-sm">
                  <Landmark size={18} /> GMED SUPPORT
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                  {t.services.title}
                </h2>
                <ul className="space-y-3">
                  {t.services.list.map((service, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-300 text-sm"
                    >
                      <CheckCircle
                        size={18}
                        className="text-medical-cyan shrink-0 mt-0.5"
                      />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: CTA Box */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-2xl">
                <h3 className="text-xl font-black text-medical-navy mb-2">
                  {t.ctaBox.title}
                </h3>
                <p className="text-slate-500 mb-6 text-sm">{t.ctaBox.desc}</p>

                <Link
                  to="/#contact"
                  className="w-full block bg-medical-navy text-white py-3 rounded-xl font-bold hover:bg-medical-cyan transition-colors shadow-lg text-sm"
                >
                  {t.ctaBox.btn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkDoctor;
