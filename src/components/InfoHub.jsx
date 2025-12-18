import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // <--- 1. Import useNavigate

const InfoHub = ({ lang }) => {
  const navigate = useNavigate(); // <--- 2. Initialize hook

  const content = {
    de: {
      title: "News & Blog",
      subtitle: "Bleiben Sie informiert.",
      viewAll: "Alle Artikel",
      readMore: "Weiterlesen",
      articles: [
        {
          id: 1,
          date: "15. Mai 2024",
          title: "Neue Visumregeln",
          desc: "Fachkräfteeinwanderungsgesetz.",
          img: "/visa-news.png",
        },
        {
          id: 2,
          date: "10. Mai 2024",
          title: "Vorbereitung auf die FSP",
          desc: "Tipps für Ärzte.",
          img: "/fsp-prep.png",
        },
      ],
    },
    fr: {
      title: "Actualités & Blog",
      subtitle: "Restez informé sur le système de santé.",
      viewAll: "Voir tous les articles",
      readMore: "Lire la suite",
      articles: [
        {
          id: 1,
          date: "15 Mai 2024",
          title: "Nouvelles règles de visa",
          desc: "Changements de la loi sur l'immigration.",
          img: "/visa-news.png",
        },
        {
          id: 2,
          date: "10 Mai 2024",
          title: "Préparation au FSP",
          desc: "Conseils pour l'examen de langue.",
          img: "/fsp-prep.png",
        },
      ],
    },
    ar: {
      title: "الأخبار والمدونة",
      subtitle: "ابق على اطلاع دائم.",
      viewAll: "عرض جميع المقالات",
      readMore: "اقرأ المزيد",
      articles: [
        {
          id: 1,
          date: "15 مايو 2024",
          title: "قواعد التأشيرة الجديدة",
          desc: "قانون هجرة العمالة الماهرة.",
          img: "/visa-news.png",
        },
        {
          id: 2,
          date: "10 مايو 2024",
          title: "التحضير لامتحان FSP",
          desc: "نصائح للأطباء.",
          img: "/fsp-prep.png",
        },
      ],
    },
  };

  const t = content[lang] || content.fr;

  // <--- 3. ADD THIS FUNCTION
  const handleReadMore = (id) => {
    // A. Go to the main News page first (adds it to browser history)
    navigate("/news");

    // B. Immediately jump to the specific article
    // The tiny timeout ensures the browser registers the first move
    setTimeout(() => {
      navigate(`/news/${id}`);
    }, 10);
  };

  return (
    // Changed background to #e0f9fd (approx 15% intensity)
    <section
      id="infohub"
      className="py-20 bg-[#e0f9fd] scroll-mt-24"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col md:flex-row justify-between items-end mb-12 gap-6`}
        >
          <div className={lang === "ar" ? "text-right" : "text-left"}>
            <h2 className="text-3xl md:text-4xl font-black text-medical-navy mb-3">
              {t.title}
            </h2>
            <p className="text-slate-600 font-medium max-w-xl">{t.subtitle}</p>
          </div>
          <Link
            to="/news"
            className={`flex items-center gap-2 text-medical-cyan font-bold hover:text-medical-navy group ${
              lang === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            {t.viewAll}
            <ArrowRight
              size={20}
              className={`group-hover:translate-x-1 transition-transform ${
                lang === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""
              }`}
            />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {t.articles.slice(0, 2).map((article) => (
            <div
              key={article.id}
              className={`group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-white/50 hover:-translate-y-1 duration-300 ${
                lang === "ar" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img
                  src={article.img}
                  alt={article.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div
                className={`p-8 md:w-3/5 flex flex-col justify-between ${
                  lang === "ar" ? "text-right" : "text-left"
                }`}
              >
                <div>
                  <div
                    className={`flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-4 ${
                      lang === "ar" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Calendar size={14} className="text-medical-cyan" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-medical-navy mb-3 group-hover:text-medical-cyan transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-3 mb-6">
                    {article.desc}
                  </p>
                </div>

                {/* <--- 4. CHANGED FROM <LINK> TO <BUTTON> */}
                <button
                  onClick={() => handleReadMore(article.id)}
                  className={`inline-flex items-center gap-2 text-medical-cyan font-black text-sm group/btn ${
                    lang === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  {t.readMore}
                  <ArrowRight
                    size={16}
                    className={`transition-transform group-hover/btn:translate-x-1 ${
                      lang === "ar"
                        ? "rotate-180 group-hover/btn:-translate-x-1"
                        : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoHub;
