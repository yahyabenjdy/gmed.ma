import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = ({ lang }) => {
  const content = {
    fr: {
      title: "Page non trouvée",
      desc: "Désolé, la page que vous cherchez n'existe pas ou a été déplacée.",
      btn: "Retour à l'accueil",
    },
    de: {
      title: "Seite nicht gefunden",
      desc: "Entschuldigung, die gesuchte Seite existiert nicht oder wurde verschoben.",
      btn: "Zurück zur Startseite",
    },
    ar: {
      title: "الصفحة غير موجودة",
      desc: "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
      btn: "العودة للرئيسية",
    },
  };

  const t = content[lang] || content.fr;

  return (
    <div
      // CHANGED: Reduced height from min-h-[70vh] to min-h-[50vh] to close the gap to the footer
      className="min-h-[50vh] flex flex-col items-center justify-center bg-medical-navy/15 px-4 text-center py-10"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Helmet>
        <title>404 - {t.title} | GMED</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="bg-white p-10 rounded-3xl shadow-xl border border-white/50 max-w-lg w-full">
        {/* Icon uses Rouge Bordeaux (#800020) */}
        <div className="w-20 h-20 bg-[#800020]/10 text-[#800020] rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={40} />
        </div>

        <h1 className="text-4xl font-black text-medical-navy mb-2">404</h1>
        <h2 className="text-xl font-bold text-slate-700 mb-4">{t.title}</h2>
        <p className="text-slate-500 mb-8">{t.desc}</p>

        <Link
          to="/"
          // Button uses Dark Blue (#004C73)
          className="inline-flex items-center gap-2 bg-[#004C73] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#003a57] transition-colors"
        >
          <Home size={18} />
          {t.btn}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
