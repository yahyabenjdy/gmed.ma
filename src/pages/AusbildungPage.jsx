import React, { useEffect } from "react";
import {
  BookOpen,
  CheckCircle2,
  Star,
  ShieldCheck,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const AusbildungPage = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    fr: {
      tag: "Formation Professionnelle",
      title: "Votre Ausbildung en ",
      highlight: "Allemagne",
      desc: "Accédez à une formation rémunérée d'excellence. Apprenez un métier tout en percevant un salaire mensuel dès le premier jour.",
      benefitsTitle: "Pourquoi choisir l'Ausbildung ?",
      benefits: [
        {
          title: "Formation Rémunérée",
          desc: "Percevez entre 1000€ et 1300€ net par mois durant vos études.",
        },
        {
          title: "Emploi Garanti",
          desc: "95% des diplômés sont embauchés immédiatement par leur entreprise d'accueil.",
        },
        {
          title: "Diplôme d'État",
          desc: "Obtenez un diplôme reconnu dans toute l'Union Européenne.",
        },
      ],
      stepsTitle: "Le Processus GMED",
      steps: [
        {
          title: "Niveau B1/B2",
          desc: "Maîtrise de la langue allemande indispensable pour l'admission.",
        },
        {
          title: "Placement",
          desc: "Nous vous connectons avec nos entreprises partenaires en Allemagne.",
        },
        {
          title: "Visa & Départ",
          desc: "Accompagnement complet pour l'obtention du visa de formation.",
        },
      ],
      cta: "Postuler maintenant",
    },
    ar: {
      tag: "التكوين المهني",
      title: "مسار الأوسبيلدونغ في ",
      highlight: "ألمانيا",
      desc: "احصل على تكوين مهني متميز ومدفوع الأجر. تعلم مهنة مع الحصول على راتب شهري منذ اليوم الأول.",
      benefitsTitle: "لماذا تختار الأوسبيلدونغ؟",
      benefits: [
        {
          title: "تكوين مدفوع الأجر",
          desc: "تقاضى ما بين 1000 و 1300 يورو صافية شهرياً خلال فترة دراستك.",
        },
        {
          title: "وظيفة مضمونة",
          desc: "95٪ من الخريجين يتم توظيفهم مباشرة من قبل شركاتهم.",
        },
        {
          title: "دبلوم معترف به",
          desc: "احصل على دبلوم معترف به في جميع أنحاء الاتحاد الأوروبي.",
        },
      ],
      stepsTitle: "مسار GMED",
      steps: [
        {
          title: "مستوى B1/B2",
          desc: "إتقان اللغة الألمانية ضروري للقبول في التكوين.",
        },
        { title: "التوظيف", desc: "نربطك بشركاتنا الشريكة في ألمانيا." },
        {
          title: "التأشيرة والسفر",
          desc: "مواكبة كاملة للحصول على تأشيرة التكوين المهني.",
        },
      ],
      cta: "قدم الآن",
    },
  };

  const t = content[lang] || content.fr;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Mini Hero Section */}
      <section className="relative pt-32 pb-20 bg-medical-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/hero-bg.png"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-medical-cyan/20 text-medical-cyan text-xs font-bold uppercase tracking-widest mb-6 border border-medical-cyan/30">
            {t.tag}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            {t.title}
            <span className="text-medical-cyan uppercase tracking-tighter">
              {" "}
              {t.highlight}
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t.desc}
          </p>
        </div>
      </section>

      {/* 2. Benefits Grid (Glassmorphism) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`flex flex-col mb-16 ${
              lang === "ar" ? "items-end" : "items-start"
            }`}
          >
            <h2 className="text-3xl font-black text-medical-navy mb-4">
              {t.benefitsTitle}
            </h2>
            <div className="h-1.5 w-20 bg-medical-cyan rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-medical-cyan/10 rounded-2xl flex items-center justify-center mb-6 text-medical-cyan group-hover:bg-medical-cyan group-hover:text-white transition-colors">
                  <Star size={28} />
                </div>
                <h3
                  className={`text-xl font-bold text-medical-navy mb-4 ${
                    lang === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`text-slate-500 leading-relaxed ${
                    lang === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Steps / Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-black text-medical-navy text-center mb-20">
            {t.stepsTitle}
          </h2>

          <div className="space-y-12">
            {t.steps.map((step, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-8 ${
                  lang === "ar" ? "flex-row-reverse text-right" : "flex-row"
                }`}
              >
                <div className="hidden md:flex w-16 h-16 rounded-full bg-medical-navy text-white items-center justify-center text-2xl font-black shrink-0 shadow-lg shadow-medical-navy/20">
                  {idx + 1}
                </div>
                <div className="flex-grow p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-medical-cyan transition-colors">
                  <h4 className="text-xl font-bold text-medical-navy mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-medical-navy rounded-[2.5rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical-cyan/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <GraduationCap
              className="text-medical-cyan mx-auto mb-6"
              size={50}
            />
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêt à lancer votre carrière ?
            </h2>
            <Link to="/contact" className="btn-primary px-12 py-4 text-lg">
              {t.cta}{" "}
              <ArrowRight className={lang === "ar" ? "rotate-180" : ""} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AusbildungPage;
