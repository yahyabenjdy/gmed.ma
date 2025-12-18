import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";

// Layout Components
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

// Page Components
import Home from "./pages/Home";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import CoursesPage from "./pages/CoursesPage";
import AusbildungPage from "./pages/AusbildungPage";
import StudyPage from "./pages/StudyPage";
import WorkDoctor from "./pages/WorkDoctor";
import WorkNurse from "./pages/WorkNurse";
import ChooseLand from "./pages/ChooseLand";
import FinancialAid from "./pages/FinancialAid";
import IntegrationGuide from "./pages/IntegrationGuide";
import VisaGuide from "./pages/VisaGuide";
import Register from "./pages/Register";

function App() {
  const [lang, setLang] = useState("fr");
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  // Handle scrolling logic
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else if (navType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, navType]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar lang={lang} />
      <Navbar lang={lang} setLang={setLang} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/news" element={<News lang={lang} />} />
          <Route path="/news/:id" element={<NewsDetail lang={lang} />} />

          {/* Career & Study Routes */}
          <Route path="/courses" element={<CoursesPage lang={lang} />} />
          <Route path="/ausbildung" element={<AusbildungPage lang={lang} />} />
          <Route path="/study" element={<StudyPage lang={lang} />} />

          {/* --- FIXED ROUTES TO MATCH WORK.JSX --- */}
          <Route path="/work/doctor" element={<WorkDoctor lang={lang} />} />
          <Route path="/work/nurse" element={<WorkNurse lang={lang} />} />
          {/* -------------------------------------- */}

          {/* Guides Routes */}
          <Route path="/choose-land" element={<ChooseLand lang={lang} />} />
          <Route path="/financial-aid" element={<FinancialAid lang={lang} />} />
          <Route
            path="/integration-guide"
            element={<IntegrationGuide lang={lang} />}
          />
          <Route path="/visa-guide" element={<VisaGuide lang={lang} />} />

          {/* Registration Route */}
          <Route path="/register" element={<Register lang={lang} />} />

          {/* Fallback */}
          <Route path="*" element={<Home lang={lang} />} />
        </Routes>
      </main>

      <Footer lang={lang} />

      {/* Floating Buttons */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export default App;
