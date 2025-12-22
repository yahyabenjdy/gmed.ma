import React from "react";
// 1. Import Helmet for SEO
import { Helmet } from "react-helmet-async";

// Homepage Sections
import Hero from "../components/Hero";
import InfoHub from "../components/InfoHub";
import Courses from "../components/Courses";
import Ausbildung from "../components/Ausbildung";
import Study from "../components/Study";
import Work from "../components/Work";
import Contact from "../components/Contact";

const Home = ({ lang }) => {
  // 2. Define SEO Content based on language
  const seo = {
    fr: {
      title: "Accueil - Votre Avenir Médical en Allemagne",
      desc: "GMED : L'agence spécialiste pour les médecins, infirmiers et étudiants marocains souhaitant réussir leur carrière en Allemagne. Cours, Visa & Emploi.",
    },
    de: {
      title: "Startseite - Ihre Medizinische Karriere in Deutschland",
      desc: "GMED unterstützt Ärzte und Pflegekräfte aus Marokko auf dem Weg nach Deutschland. Sprachkurse, Approbation, Visum und Jobvermittlung.",
    },
    ar: {
      title: "الرئيسية - مستقبلك الطبي في ألمانيا",
      desc: "GMED: وكالتك المتخصصة للأطباء والممرضين والطلاب المغاربة الراغبين في العمل والدراسة في ألمانيا. دورات لغة، تأشيرة وتوظيف.",
    },
  };

  const t = seo[lang] || seo.fr;

  return (
    <>
      {/* 3. Add Specific SEO Tags for Homepage */}
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.desc} />
        {/* Canonical link tells Google this is the 'original' homepage URL */}
        <link rel="canonical" href="https://gmed.ma/" />
      </Helmet>

      <div className="flex flex-col w-full overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero lang={lang} />

        {/* 2. News & Blog */}
        <InfoHub lang={lang} />

        {/* 3. Language Courses */}
        <Courses lang={lang} />

        {/* 4. Ausbildung */}
        <Ausbildung lang={lang} />

        {/* 5. University Studies */}
        <Study lang={lang} />

        {/* 6. Work Opportunities */}
        <Work lang={lang} />

        {/* 7. Contact Section */}
        <Contact lang={lang} />
      </div>
    </>
  );
};

export default Home;
