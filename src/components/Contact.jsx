import React from "react";
import { Facebook, Instagram, Send } from "lucide-react";

// Custom TikTok Icon
const TikTokIcon = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Contact = ({ lang }) => {
  const content = {
    de: {
      title: "Kontaktieren Sie uns",
      subtitle: "Wir sind für Sie da.",
      labels: {
        social: "Social Media:",
        phone: "Telefon:",
        email: "E-Mail:",
        address: "Adresse:",
      },
      form: {
        name: "Name",
        phone: "Telefon",
        email: "E-Mail Adresse",
        msg: "Nachricht",
        btn: "Senden",
      },
      address: "Apprt 8, Résidence Al Masjid | Av Fal Ould Oumeir, Rabat",
    },
    fr: {
      title: "Contactez-nous",
      subtitle: "Nous sommes à votre écoute.",
      labels: {
        social: "Réseaux Sociaux :",
        phone: "Téléphone :",
        email: "E-Mail :",
        address: "Adresse :",
      },
      form: {
        name: "Nom complet",
        phone: "Téléphone",
        email: "Adresse E-mail",
        msg: "Message",
        btn: "Envoyer",
      },
      address: "Apprt 8, Résidence Al Masjid | Av Fal Ould Oumeir, Rabat",
    },
    ar: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لمساعدتك.",
      labels: {
        social: "وسائل التواصل:",
        phone: "الهاتف:",
        email: "البريد:",
        address: "العنوان:",
      },
      form: {
        name: "الاسم الكامل",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        msg: "الرسالة",
        btn: "إرسال",
      },
      address: "شقة 8، إقامة المسجد | شارع فال ولد عمير، الرباط",
    },
  };

  const t = content[lang] || content.fr;

  return (
    <section
      id="contact"
      className="py-12 bg-medical-navy text-white relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-medical-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Left Aligned */}
        <div className="text-left mb-8">
          <h2 className="text-3xl font-black mb-2">{t.title}</h2>
          <p className="text-slate-400 text-base">{t.subtitle}</p>
        </div>

        {/* items-stretch forces both columns to be equal height */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT: Form Card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl h-full flex flex-col justify-center">
            <form className="space-y-4">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:border-medical-cyan focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:border-medical-cyan focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:border-medical-cyan focus:outline-none transition-colors"
                />
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  {t.form.msg}
                </label>
                <textarea
                  rows="3"
                  className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:border-medical-cyan focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-medical-cyan text-white font-bold py-3 rounded-lg hover:bg-[#0096b4] transition-all shadow-lg flex items-center justify-center gap-2 text-sm"
              >
                {t.form.btn}
                <Send size={16} className={lang === "ar" ? "rotate-180" : ""} />
              </button>
            </form>
          </div>

          {/* RIGHT: Info Wrapper */}
          <div className="flex flex-col h-full pt-1">
            {/* Top Content (Info Rows) */}
            <div className="flex flex-col gap-4 mb-4">
              {/* Socials Row */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400 font-bold text-sm shrink-0">
                  {t.labels.social}
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/gmed.ma/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 transition-all text-white"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="https://web.facebook.com/profile.php?id=61581045256544#"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all text-white"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@gmed.ma?lang=fr"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition-all text-white"
                  >
                    <TikTokIcon size={14} />
                  </a>
                </div>
              </div>

              {/* Phone Row */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400 font-bold text-sm shrink-0">
                  {t.labels.phone}
                </span>
                {/* Non-bold info with | separator */}
                <p className="text-white text-sm text-right">
                  07 02 45 55 55 | 07 75 43 02 87
                </p>
              </div>

              {/* Email Row */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400 font-bold text-sm shrink-0">
                  {t.labels.email}
                </span>
                {/* Non-bold info */}
                <p className="text-white text-sm">contact@gmed.ma</p>
              </div>

              {/* Address Row */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400 font-bold text-sm shrink-0 mr-4">
                  {t.labels.address}
                </span>
                {/* Non-bold info */}
                <p className="text-white text-sm text-right leading-snug truncate">
                  {t.address}
                </p>
              </div>
            </div>

            {/* Map (flex-1 makes it fill ALL remaining space to align bottom) */}
            <div className="w-full flex-1 rounded-xl overflow-hidden border border-white/20 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d512.5234494561815!2d-6.850055353194053!3d33.99986985883619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76d9d613b8661%3A0xf55dac11fdc7b425!2sGMED%20-%20German%20Medical%20institute!5e1!3m2!1sen!2sma!4v1766003972585!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
