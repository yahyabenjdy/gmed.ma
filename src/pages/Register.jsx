import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Send,
  CheckCircle2,
  HelpCircle,
  GraduationCap,
  Award,
} from "lucide-react";
// 1. IMPORT HELMET
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
        email: "E-Mail-Adresse",
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
        email: "Adresse e-mail",
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
        email: "البريد الإلكتروني",
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

  // 2. SEO Content
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

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 bg-[#e0f9fd]">
        {/* Dynamic Title for Success State */}
        <Helmet>
          <title>
            {lang === "ar" ? "تم الإرسال بنجاح" : "Confirmation"} | GMED
          </title>
          <meta name="robots" content="noindex" />
        </Helmet>

        <div className="max-w-lg w-full bg-white p-12 rounded-3xl shadow-xl border border-white/50 text-center animate-fade-in">
          <div className="w-24 h-24 bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8">
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
            className="text-red-600 font-bold hover:text-black transition-colors text-lg"
          >
            {t.success.back}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-[#e0f9fd] min-h-screen py-12 px-4"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* 3. SEO BLOCK */}
      <Helmet>
        <title>{tSeo.title}</title>
        <meta name="description" content={tSeo.desc} />
        <link rel="canonical" href="https://gmed.ma/register" />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          {/* 1. Gold Tag (Above Title) */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs font-bold mb-6 border border-yellow-500/20">
            <Award size={14} />
            {t.tag}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-medical-navy mb-4 relative inline-block">
            {t.title}
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-yellow-500 rounded-full" />
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium mt-4">
            {t.subtitle}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden">
          {/* Top Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-black via-red-600 to-yellow-500"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* ROW 1: Name & Email */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.form.name} <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <User
                    className={`absolute top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-black transition-colors ${
                      lang === "ar" ? "right-4" : "left-4"
                    }`}
                    size={20}
                  />
                  <input
                    required
                    type="text"
                    className={`w-full py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-black focus:border-black outline-none transition-all font-medium ${
                      lang === "ar" ? "pr-12 pl-4" : "pl-12 pr-4"
                    }`}
                    placeholder="..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.form.email} <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Mail
                    className={`absolute top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors ${
                      lang === "ar" ? "right-4" : "left-4"
                    }`}
                    size={20}
                  />
                  <input
                    required
                    type="email"
                    className={`w-full py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-black focus:border-black outline-none transition-all font-medium ${
                      lang === "ar" ? "pr-12 pl-4" : "pl-12 pr-4"
                    }`}
                    placeholder="name@example.com"
                  />
                </div>
              </div>
            </div>

            {/* ROW 2: Phone & Role */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.form.phone} <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Phone
                    className={`absolute top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-500 transition-colors ${
                      lang === "ar" ? "right-4" : "left-4"
                    }`}
                    size={20}
                  />
                  <input
                    required
                    type="tel"
                    className={`w-full py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-black focus:border-black outline-none transition-all font-medium ${
                      lang === "ar" ? "pr-12 pl-4" : "pl-12 pr-4"
                    }`}
                    placeholder="+212 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.form.role_label} <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Briefcase
                    className={`absolute top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-black transition-colors ${
                      lang === "ar" ? "right-4" : "left-4"
                    }`}
                    size={20}
                  />
                  <select
                    className={`w-full py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-black focus:border-black outline-none transition-all font-medium appearance-none cursor-pointer ${
                      lang === "ar" ? "pr-12 pl-4" : "pl-12 pr-4"
                    }`}
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
            </div>

            {/* ROW 3: Levels (Round Checkboxes) */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
                <GraduationCap size={18} className="text-medical-cyan" />
                {t.form.level_label} <span className="text-red-500">*</span>
              </label>

              {/* 5-Column Grid for "One Line" fit on Desktop */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {t.form.levels.map((level, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedLevel(level)}
                    className={`relative p-3 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group ${
                      selectedLevel === level
                        ? "border-red-600 bg-red-50 text-red-700 shadow-md transform scale-105"
                        : "border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    {/* Tiny Indicator Dot */}
                    <div
                      className={`w-3 h-3 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        selectedLevel === level
                          ? "border-red-600 bg-red-600"
                          : "border-slate-300 group-hover:border-slate-400"
                      }`}
                    />
                    {/* Text truncated for fit, explicit small size */}
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
                  className={`absolute top-5 text-slate-400 group-focus-within:text-black transition-colors ${
                    lang === "ar" ? "right-4" : "left-4"
                  }`}
                  size={20}
                />
                <textarea
                  rows="4"
                  className={`w-full py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-black focus:border-black outline-none transition-all font-medium resize-none ${
                    lang === "ar" ? "pr-12 pl-4" : "pl-12 pr-4"
                  }`}
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
                  ? "bg-black hover:bg-red-600 shadow-black/20"
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
