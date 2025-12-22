import React, { useEffect } from "react";
import { Calendar, ArrowRight, ArrowLeft, Send } from "lucide-react";
import {
  Link,
  useNavigate,
  useLocation,
  useNavigationType,
} from "react-router-dom";
// 1. Import Helmet
import { Helmet } from "react-helmet-async";

const News = ({ lang }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Check if we were sent here with a specific Article ID (from Home)
    // AND ensure we are not "popping" (coming back via Back button)
    if (location.state && location.state.targetArticleId && navType !== "POP") {
      navigate(`/news/${location.state.targetArticleId}`);
    } else {
      // Normal behavior: Scroll to top
      window.scrollTo(0, 0);
    }
  }, [location, navType, navigate]);

  const content = {
    fr: {
      title: "Ressources & Actualités",
      subtitle: "Expertise GMED Center pour votre projet en Allemagne.",
      readMore: "Lire l'article",
      back: "Retour au site",
      ctaTitle: "Conseil personnalisé ?",
      ctaDesc: "Posez vos questions à nos experts.",
      contactBtn: "Contactez-nous",
      articles: [
        {
          id: 1,
          date: "15 Mai 2024",
          tag: "Visa",
          title: "Nouvelles règles de visa pour les médecins",
          desc: "Décryptage des changements du Fachkräfteeinwanderungsgesetz.",
          img: "/visa-news.png",
        },
        {
          id: 2,
          date: "10 Mai 2024",
          tag: "FSP",
          title: "Préparation intensive au FSP",
          desc: "Maîtrisez la communication médicale pour réussir votre examen.",
          img: "/fsp-prep.png",
        },
        {
          id: 3,
          date: "05 Mai 2024",
          tag: "Savoir",
          title: "Logement et intégration en Allemagne",
          desc: "Guide stratégique pour votre première installation.",
          img: "/logement.png",
        },
      ],
    },
    de: {
      title: "Ressourcen & Aktuelles",
      subtitle: "GMED Center Expertise für Ihr Projekt in Deutschland.",
      readMore: "Artikel lesen",
      back: "Zurück zur Startseite",
      ctaTitle: "Persönliche Beratung?",
      ctaDesc: "Stellen Sie Ihre Fragen an unsere Experten.",
      contactBtn: "Kontaktieren Sie uns",
      articles: [
        {
          id: 1,
          date: "15. Mai 2024",
          tag: "Visum",
          title: "Neue Visaregeln für Ärzte",
          desc: "Erklärung der Änderungen im Fachkräfteeinwanderungsgesetz.",
          img: "/visa-news.png",
        },
        {
          id: 2,
          date: "10. Mai 2024",
          tag: "FSP",
          title: "Intensive FSP-Vorbereitung",
          desc: "Meistern Sie die medizinische Kommunikation für Ihre Prüfung.",
          img: "/fsp-prep.png",
        },
        {
          id: 3,
          date: "05. Mai 2024",
          tag: "Wissen",
          title: "Wohnen und Integration in Deutschland",
          desc: "Strategischer Leitfaden für Ihre erste Einrichtung.",
          img: "/logement.png",
        },
      ],
    },
    ar: {
      title: "الموارد والأخبار",
      subtitle: "خبرة GMED Center لمشروعكم في ألمانيا.",
      readMore: "اقرأ المقال",
      back: "العودة للرئيسية",
      ctaTitle: "استشارة خاصة؟",
      ctaDesc: "اطرح أسئلتك على خبرائنا.",
      contactBtn: "اتصل بنا",
      articles: [
        {
          id: 1,
          date: "15 مايو 2024",
          tag: "تأشيرة",
          title: "قواعد التأشيرة الجديدة للأطباء",
          desc: "تحليل لأحدث التغييرات في قوانين الهجرة.",
          img: "/visa-news.png",
        },
        {
          id: 2,
          date: "10 مايو 2024",
          tag: "FSP",
          title: "تحضير مكثف لامتحان FSP",
          desc: "إتقان التواصل الطبي لضمان النجاح.",
          img: "/fsp-prep.png",
        },
        {
          id: 3,
          date: "05 مايو 2024",
          tag: "معرفة",
          title: "السكن والاندماج في ألمانيا",
          desc: "دليل استراتيجي لاستقراركم الأول.",
          img: "/logement.png",
        },
      ],
    },
  };

  // 2. Define SEO Data
  const seo = {
    fr: {
      title: "Actualités & Ressources - Visa et Médecine en Allemagne",
      desc: "Restez informé sur les dernières lois d'immigration, les examens FSP/KP et la vie en Allemagne pour les professionnels de santé.",
    },
    de: {
      title: "Aktuelles & Ressourcen - Medizin in Deutschland",
      desc: "Bleiben Sie informiert über Visaregeln, FSP/KP-Prüfungen und das Leben in Deutschland für medizinisches Fachpersonal.",
    },
    ar: {
      title: "الأخبار والموارد - الطب في ألمانيا",
      desc: "آخر المستجدات حول قوانين الهجرة، امتحانات التعديل والحياة في ألمانيا للأطباء والممرضين.",
    },
  };

  const t = content[lang] || content.fr;
  const tSeo = seo[lang] || seo.fr;

  return (
    <>
      {/* 3. SEO Block */}
      <Helmet>
        <title>{tSeo.title}</title>
        <meta name="description" content={tSeo.desc} />
        <link rel="canonical" href="https://gmed.ma/news" />
      </Helmet>

      {/* Background #caf0f8 (30% intensity) */}
      <div
        className="pt-28 pb-16 min-h-screen bg-[#caf0f8]"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header Section */}
          <div
            className={`mb-12 ${lang === "ar" ? "text-right" : "text-left"}`}
          >
            <Link
              to="/#infohub"
              className="inline-flex items-center gap-2 text-[#0077b6] text-sm font-bold mb-6 hover:-translate-x-1 transition-transform cursor-pointer"
            >
              <ArrowLeft
                size={16}
                className={lang === "ar" ? "rotate-180" : ""}
              />
              {t.back}
            </Link>
            <h1 className="text-3xl md:text-4xl font-black text-medical-navy mb-2">
              {t.title}
            </h1>
            <p className="text-slate-700 text-base font-medium">{t.subtitle}</p>
          </div>

          {/* Articles List */}
          <div className="space-y-6">
            {t.articles.map((article) => (
              <Link
                to={`/news/${article.id}`}
                key={article.id}
                className={`group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-white/60 ${
                  lang === "ar" ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Text Content */}
                <div
                  className={`p-6 sm:w-2/3 flex flex-col justify-center ${
                    lang === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 text-[10px] font-bold mb-3 ${
                      lang === "ar" ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Tag bg slightly darker to match the new page bg */}
                    <span className="text-[#0077b6] uppercase tracking-widest bg-[#caf0f8] px-2 py-1 rounded">
                      {article.tag}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400">
                      <Calendar size={12} /> {article.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-medical-navy mb-2 group-hover:text-medical-cyan transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                    {article.desc}
                  </p>
                  <div className="text-medical-cyan text-xs font-black uppercase flex items-center gap-1 group/link">
                    {t.readMore}{" "}
                    <ArrowRight
                      size={14}
                      className={`transition-transform group-hover/link:translate-x-1 ${
                        lang === "ar"
                          ? "rotate-180 group-hover/link:-translate-x-1"
                          : ""
                      }`}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Card */}
          <div className="mt-12 p-6 bg-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-white/60">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#caf0f8] rounded-full flex items-center justify-center text-medical-cyan">
                <Send size={20} />
              </div>
              <div className={lang === "ar" ? "text-right" : "text-left"}>
                <h4 className="font-bold text-medical-navy">{t.ctaTitle}</h4>
                <p className="text-xs text-slate-500">{t.ctaDesc}</p>
              </div>
            </div>
            {/* CHANGED LINK HERE */}
            <Link
              to="/#contact" // <--- Updated to point to Homepage Contact Section
              className="px-6 py-2.5 bg-medical-navy text-white text-xs font-bold rounded-lg hover:bg-medical-cyan transition-all shadow-lg shadow-medical-navy/20"
            >
              {t.contactBtn}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
