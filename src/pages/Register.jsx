import React, { useState } from "react";
import {
  User,
  Phone,
  Briefcase,
  Send,
  CheckCircle2,
  HelpCircle,
  GraduationCap,
  Award,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const Register = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");

  const content = {
    de: {
      tag: "Karrierestart",
      title: "Anmeldung & Beratung",
      subtitle:
        "Starten Sie Ihre Karriere in Deutschland. Füllen Sie das Formular aus.",
      form: {
        name: "Vollständiger Name",
        phone: "Telefonnummer",
        role_label: "Aktueller Status",
        roles: [
          "Schüler / Student",
          "Arzt / Ärztin",
          "Pflegekraft",
          "Sonstiges",
        ],
        level_label: "Gewünschtes Sprachniveau",
        levels: [
          "A1 (Anfänger)",
          "A2 (Grundlagen)",
          "B1 (Fortgeschritten)",
          "B2 (Berufsniveau)",
          "C1 (Experte)",
        ],
        message: "Zusätzliche Nachricht (Optional)",
        btn: "Anmeldung abschicken",
      },
      success: {
        title: "Vielen Dank!",
        msg: "Ihre Anmeldung wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.",
        back: "Zurück zum Formular",
      },
    },
    fr: {
      tag: "Départ Carrière",
      title: "Inscription & Consultation",
      subtitle:
        "Commencez votre carrière en Allemagne. Remplissez le formulaire ci-dessous.",
      form: {
        name: "Nom complet",
        phone: "Numéro de téléphone",
        role_label: "Statut actuel",
        roles: [
          "Élève / Étudiant",
          "Médecin",
          "Infirmier / Infirmière",
          "Autre",
        ],
        level_label: "Niveau souhaité / actuel",
        levels: [
          "A1 (Débutant)",
          "A2 (Élémentaire)",
          "B1 (Intermédiaire)",
          "B2 (Avancé / Pro)",
          "C1 (Expert)",
        ],
        message: "Message supplémentaire (Optionnel)",
        btn: "Envoyer l'inscription",
      },
      success: {
        title: "Merci !",
        msg: "Votre inscription a été envoyée avec succès. Nous vous contacterons bientôt.",
        back: "Retour au formulaire",
      },
    },
    ar: {
      tag: "بداية المسار",
      title: "التسجيل والاستشارة",
      subtitle: "ابدأ مسيرتك المهنية في ألمانيا. املأ النموذج التالي.",
      form: {
        name: "الاسم الكامل",
        phone: "رقم الهاتف",
        role_label: "الوضع الحالي",
        roles: ["تلميذ / طالب", "طبيب", "ممرض", "آخر"],
        level_label: "المستوى المطلوب / الحالي",
        levels: [
          "A1 (مبتدئ)",
          "A2 (أساسي)",
          "B1 (متوسط)",
          "B2 (متقدم / مهني)",
          "C1 (خبير)",
        ],
        message: "رسالة إضافية (اختياري)",
        btn: "إرسال الطلب",
      },
      success: {
        title: "شكراً لك!",
        msg: "تم إرسال طلبك بنجاح. سنتواصل معك قريباً.",
        back: "العودة للنموذج",
      },
    },
  };

  const seo = {
    fr: {
      title: "Inscription & Candidature - Commencez votre parcours",
      desc: "Formulaire d'inscription GMED : Cours d'allemand, demande de visa et consultation pour médecins et infirmiers.",
    },
    de: {
      title: "Anmeldung & Bewerbung - Starten Sie Ihren Weg",
      desc: "GMED Anmeldeformular: Deutschkurse, Visum-Unterstützung und Beratung für medizinisches Fachpersonal.",
    },
    ar: {
      title: "التسجيل والترشيح - ابدأ مسارك الآن",
      desc: "استمارة التسجيل GMED: دورات اللغة الألمانية، دعم التأشيرة واستشارات للأطباء والممرضين.",
    },
  };

  const t = content[lang] || content.fr;
  const tSeo = seo[lang] || seo.fr;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  // Inputs have permanent Dark Blue border
  const inputClasses = `w-full py-4 bg-slate-50 border border-[#004C73] rounded-xl focus:ring-1 focus:ring-[#004C73] focus:border-[#004C73] outline-none transition-all font-medium ${
    lang === "ar" ? "pr-12 pl-4" : "pl-12 pr-4"
  }`;

  const iconClasses = `absolute top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#004C73] transition-colors ${
    lang === "ar" ? "right-4" : "left-4"
  }`;

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 bg-medical-navy/15">
        <Helmet>
          <title>
            {lang === "ar" ? "تم الإرسال بنجاح" : "Confirmation"} | GMED
          </title>
          <meta name="robots" content="noindex" />
        </Helmet>

        <div className="max-w-lg w-full bg-white p-12 rounded-3xl shadow-xl border border-slate-300 text-center animate-fade-in">
          <div className="w-24 h-24 bg-[#004C73]/10 text-[#004C73] rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-black text-medical-navy mb-4">
            {t.success.title}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            {t.success.msg}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-[#004C73] font-bold hover:text-black transition-colors text-lg"
          >
            {t.success.back}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-medical-navy/15 min-h-screen py-12 px-4"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Helmet>
        <title>{tSeo.title}</title>
        <meta name="description" content={tSeo.desc} />
        <link rel="canonical" href="https://gmed.ma/register" />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs font-bold mb-6 border border-yellow-500/20">
            <Award size={14} />
            {t.tag}
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-medical-navy mb-4 relative inline-block">
            {t.title}
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-yellow-500 rounded-full" />
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium mt-4">
            {t.subtitle}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-300 relative overflow-hidden">
          {/* Solid Rouge Bordeaux Top Border */}
          <div className="absolute top-0 left-0 w-full h-2 bg-[#800020]"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* ROW 1: Name & Phone */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.form.name} <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <User className={iconClasses} size={20} />
                  <input
                    required
                    type="text"
                    className={inputClasses}
                    placeholder="..."
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.form.phone} <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Phone className={iconClasses} size={20} />
                  <input
                    required
                    type="tel"
                    className={inputClasses}
                    placeholder="+212 ..."
                  />
                </div>
              </div>
            </div>

            {/* ROW 2: Role */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {t.form.role_label} <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <Briefcase className={iconClasses} size={20} />
                <select
                  className={`${inputClasses} appearance-none cursor-pointer`}
                >
                  {t.form.roles.map((role, i) => (
                    <option key={i} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                <div
                  className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 ${
                    lang === "ar" ? "left-4" : "right-4"
                  }`}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ROW 3: Levels */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
                <GraduationCap size={18} className="text-[#004C73]" />
                {t.form.level_label} <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {t.form.levels.map((level, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedLevel(level)}
                    // UPDATED: Border is ALWAYS border-[#004C73]
                    className={`relative p-3 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group ${
                      selectedLevel === level
                        ? "border-[#004C73] bg-[#004C73]/10 text-[#004C73] shadow-md transform scale-105"
                        : "border-[#004C73] bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <div
                      // UPDATED: Border is ALWAYS border-[#004C73]
                      className={`w-3 h-3 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        selectedLevel === level
                          ? "border-[#004C73] bg-[#004C73]"
                          : "border-[#004C73] group-hover:border-[#004C73]"
                      }`}
                    />
                    <span className="text-xs md:text-xs lg:text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                      {level.split(" ")[0]}{" "}
                      <span className="opacity-70 font-normal hidden xl:inline">
                        {level.substring(level.indexOf(" "))}
                      </span>
                      <span className="opacity-70 font-normal xl:hidden">
                        {level.substring(level.indexOf(" ")).slice(0, 4)}..
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <input
                type="hidden"
                required
                value={selectedLevel}
                onChange={() => {}}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {t.form.message}
              </label>
              <div className="relative group">
                <HelpCircle
                  className={`absolute top-5 text-slate-500 group-focus-within:text-[#004C73] transition-colors ${
                    lang === "ar" ? "right-4" : "left-4"
                  }`}
                  size={20}
                />
                <textarea
                  rows="4"
                  className={`${inputClasses} resize-none`}
                  placeholder="..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!selectedLevel}
              className={`w-full text-white text-lg font-bold py-5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 group ${
                selectedLevel
                  ? "bg-[#004C73] hover:bg-[#003a57] shadow-[#004C73]/20"
                  : "bg-slate-300 cursor-not-allowed"
              }`}
            >
              {t.form.btn}
              <Send
                size={22}
                className={`transition-transform group-hover:translate-x-1 ${
                  lang === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""
                }`}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
