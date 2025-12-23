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
import { Helmet } from "react-helmet-async";

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
        title: "Arbeiten als Arzt in ", // Split for highlight
        highlight: "Deutschland",
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
        title: "Travailler comme Médecin en ", // Split for highlight
        highlight: "Allemagne",
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
        title: "العمل كطبيب في ", // Split for highlight
        highlight: "ألمانيا",
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

  const seo = {
    fr: {
      title: "Travailler comme Médecin en Allemagne - Guide & Recrutement",
      desc: "Devenez médecin en Allemagne : Tout sur l'Approbation, l'examen FSP/KP, le Visa 16d et le recrutement dans les hôpitaux allemands.",
    },
    de: {
      title: "Als Arzt in Deutschland arbeiten - Anerkennung & Jobs",
      desc: "Ihr Weg zur Approbation: FSP Vorbereitung, Berufserlaubnis und Vermittlung an deutsche Kliniken für internationale Ärzte.",
    },
    ar: {
      title: "العمل كطبيب في ألمانيا - التعديل والتوظيف",
      desc: "دليلك الشامل للأطباء: تعديل الشهادة، امتحان FSP/KP، والعمل في المستشفيات الألمانية. ابدأ إجراءاتك مع GMED.",
    },
  };

  const t = content[lang] || content.fr;
  const tSeo = seo[lang] || seo.fr;

  const getFlagColors = (index) => {
    if (index % 3 === 0)
      return {
        text: "text-medical-navy",
        borderHover: "hover:border-black/50",
        number: "text-slate-100 group-hover:text-black/10",
        check: "text-black",
      };
    if (index % 3 === 1)
      return {
        text: "text-red-600",
        borderHover: "hover:border-red-600/50",
        number: "text-slate-100 group-hover:text-red-600/10",
        check: "text-red-600",
      };
    return {
      text: "text-yellow-600",
      borderHover: "hover:border-yellow-500/50",
      number: "text-slate-100 group-hover:text-yellow-500/10",
      check: "text-yellow-500",
    };
  };

  return (
    <div
      className="bg-medical-navy/15 min-h-screen pb-0"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Helmet>
        <title>{tSeo.title}</title>
        <meta name="description" content={tSeo.desc} />
        <link rel="canonical" href="https://gmed.ma/work/doctor" />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 pb-20 bg-medical-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#004C73_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className={`flex items-center gap-2 text-yellow-500 font-bold mb-6 hover:text-white transition-colors text-sm group ${
              lang === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            <ArrowLeft
              size={18}
              className={lang === "ar" ? "rotate-180" : ""}
            />
            <span className="relative">
              {t.back}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
            </span>
          </button>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div
              className={`md:w-1/2 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-yellow-500/20">
                <Stethoscope size={16} />
                {t.hero.tag}
              </div>

              {/* CHANGED: White Text with Rouge Bordeaux Highlight */}
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                {t.hero.title}
                <span className="relative inline-block text-white ml-2">
                  {t.hero.highlight}
                  {/* SVG Underline #800020 */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#800020] -z-10"
                    viewBox="0 0 100 15"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 10 Q 50 15 100 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>

              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-[#004C73] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#003a57] transition-all shadow-lg shadow-[#004C73]/20 group"
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

            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-[#004C73] blur-3xl opacity-20 rounded-full"></div>
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
      {/* CHANGED: Removed bg-white/50, now transparent (shows main navy/15 bg) */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-slate-600 text-lg mb-12 text-center max-w-3xl mx-auto font-medium leading-relaxed">
            {t.intro}
          </p>

          <div className="bg-white border border-slate-100 shadow-lg rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center -mt-6">
            <div className="bg-red-600 text-white p-5 rounded-2xl shadow-md">
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
                    <div className="w-2 h-2 bg-yellow-500 rounded-full shrink-0" />
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
            {t.phases.map((phase, idx) => {
              const colors = getFlagColors(idx);
              return (
                <div
                  key={idx}
                  className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${colors.borderHover}`}
                >
                  <span
                    className={`absolute top-4 right-6 text-7xl font-black select-none transition-colors ${colors.number}`}
                  >
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
                          className="text-[#004C73] shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- COMPACT SERVICES SECTION --- */}
      <section className="py-8 bg-medical-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#004C73]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#004C73]/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className={lang === "ar" ? "text-right" : "text-left"}>
                <div className="inline-flex items-center gap-2 text-yellow-500 font-bold mb-3 text-sm">
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
                        className="text-yellow-500 shrink-0 mt-0.5"
                      />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-2xl">
                <h3 className="text-xl font-black text-medical-navy mb-2">
                  {t.ctaBox.title}
                </h3>
                <p className="text-slate-500 mb-6 text-sm">{t.ctaBox.desc}</p>

                <Link
                  to="/#contact"
                  className="w-full block bg-[#004C73] text-white py-3 rounded-xl font-bold hover:bg-[#003a57] transition-colors shadow-lg shadow-[#004C73]/20 text-sm"
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
