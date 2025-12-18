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
} from "lucide-react";

const Register = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);

  const content = {
    de: {
      title: "Anmeldung & Beratung",
      subtitle:
        "Starten Sie Ihre Karriere in Deutschland. Füllen Sie das Formular aus für Ausbildung, Studium oder Job-Vermittlung.",
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
        service_label: "Gewünschte Dienstleistung",
        services: [
          "Sprache lernen (Deutschkurs)", // Added first option
          "Ausbildung (Berufsausbildung)",
          "Medizinstudium Platzierung",
          "Approbation (für Ärzte)",
          "Anerkennung (für Pflegekräfte)",
          "Allgemeine Beratung",
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
      title: "Inscription & Consultation", // Updated Title
      subtitle:
        "Commencez votre carrière en Allemagne. Remplissez le formulaire pour l'Ausbildung, les études ou l'immigration médicale.", // Updated Subtitle
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
        service_label: "Service souhaité",
        services: [
          "Apprendre la langue (Cours d'allemand)", // Added first option
          "Formation Professionnelle (Ausbildung)",
          "Placement Études de Médecine",
          "Procédure d'Approbation (Médecins)",
          "Reconnaissance de diplôme (Infirmiers)",
          "Consultation Générale",
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
      title: "التسجيل والاستشارة",
      subtitle:
        "ابدأ مسيرتك المهنية في ألمانيا. املأ النموذج للتكوين المهني، الدراسة، أو إجراءات الهجرة للأطباء والممرضين.",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        role_label: "الوضع الحالي",
        roles: ["تلميذ / طالب", "طبيب", "ممرض", "آخر"],
        service_label: "الخدمة المطلوبة",
        services: [
          "تعلم اللغة (دورة لغة ألمانية)", // Added first option
          "تكوين مهني (Ausbildung)",
          "توجيه لدراسة الطب",
          "معادلة الشهادة (للأطباء)",
          "الاعتراف بالدبلوم (للممرضين)",
          "استشارة عامة",
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

  const t = content[lang] || content.fr;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 bg-[#e0f9fd]">
        <div className="max-w-lg w-full bg-white p-12 rounded-3xl shadow-xl border border-white/50 text-center animate-fade-in">
          <div className="w-24 h-24 bg-medical-cyan/10 text-medical-cyan rounded-full flex items-center justify-center mx-auto mb-8">
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
            className="text-medical-cyan font-bold hover:text-medical-navy transition-colors text-lg"
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
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-medical-navy mb-4">
            {t.title}
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden">
          {/* Decorative Top Line */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-medical-navy to-medical-cyan"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* ROW 1: Name & Email */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.form.name} <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <User
                    className={`absolute top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-medical-cyan transition-colors ${
                      lang === "ar" ? "right-4" : "left-4"
                    }`}
                    size={20}
                  />
                  <input
                    required
                    type="text"
                    className={`w-full py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-medical-cyan focus:border-transparent outline-none transition-all font-medium ${
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
                    className={`absolute top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-medical-cyan transition-colors ${
                      lang === "ar" ? "right-4" : "left-4"
                    }`}
                    size={20}
                  />
                  <input
                    required
                    type="email"
                    className={`w-full py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-medical-cyan focus:border-transparent outline-none transition-all font-medium ${
                      lang === "ar" ? "pr-12 pl-4" : "pl-12 pr-4"
                    }`}
                    placeholder="name@example.com"
                  />
                </div>
              </div>
            </div>

            {/* ROW 2: Phone & Current Status */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.form.phone} <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Phone
                    className={`absolute top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-medical-cyan transition-colors ${
                      lang === "ar" ? "right-4" : "left-4"
                    }`}
                    size={20}
                  />
                  <input
                    required
                    type="tel"
                    className={`w-full py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-medical-cyan focus:border-transparent outline-none transition-all font-medium ${
                      lang === "ar" ? "pr-12 pl-4" : "pl-12 pr-4"
                    }`}
                    placeholder="+212 ..."
                  />
                </div>
              </div>

              {/* ROLE SELECTION */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.form.role_label} <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <GraduationCap
                    className={`absolute top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-medical-cyan transition-colors ${
                      lang === "ar" ? "right-4" : "left-4"
                    }`}
                    size={20}
                  />
                  <select
                    className={`w-full py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-medical-cyan focus:border-transparent outline-none transition-all font-medium appearance-none cursor-pointer ${
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

            {/* ROW 3: Service Selection */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {t.form.service_label} <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <Briefcase
                  className={`absolute top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-medical-cyan transition-colors ${
                    lang === "ar" ? "right-4" : "left-4"
                  }`}
                  size={20}
                />
                <select
                  className={`w-full py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-medical-cyan focus:border-transparent outline-none transition-all font-medium appearance-none cursor-pointer ${
                    lang === "ar" ? "pr-12 pl-4" : "pl-12 pr-4"
                  }`}
                >
                  {t.form.services.map((service, i) => (
                    <option key={i} value={service}>
                      {service}
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

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {t.form.message}
              </label>
              <div className="relative group">
                <HelpCircle
                  className={`absolute top-5 text-slate-400 group-focus-within:text-medical-cyan transition-colors ${
                    lang === "ar" ? "right-4" : "left-4"
                  }`}
                  size={20}
                />
                <textarea
                  rows="4"
                  className={`w-full py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-medical-cyan focus:border-transparent outline-none transition-all font-medium resize-none ${
                    lang === "ar" ? "pr-12 pl-4" : "pl-12 pr-4"
                  }`}
                  placeholder="..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-medical-navy text-white text-lg font-bold py-5 rounded-xl hover:bg-medical-cyan transition-all shadow-lg hover:shadow-medical-cyan/30 flex items-center justify-center gap-3 group"
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
