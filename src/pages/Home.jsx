import React from "react";

// Homepage Sections
import Hero from "../components/Hero";
import InfoHub from "../components/InfoHub"; // Positioned after Hero
import Courses from "../components/Courses";
import Ausbildung from "../components/Ausbildung";
import Study from "../components/Study";
import Work from "../components/Work";
import Contact from "../components/Contact";

const Home = ({ lang }) => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero lang={lang} />

      {/* 2. News & Blog (Moved here) */}
      <InfoHub lang={lang} />

      {/* 3. Language Courses */}
      <Courses lang={lang} />

      {/* 4. Ausbildung */}
      <Ausbildung lang={lang} />

      {/* 5. University Studies (Above Work) */}
      <Study lang={lang} />

      {/* 6. Work Opportunities */}
      <Work lang={lang} />

      {/* 7. Contact Section */}
      <Contact lang={lang} />
    </div>
  );
};

export default Home;
