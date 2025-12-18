import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom"; // <--- 1. ADD THIS

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
  const navType = useNavigationType(); // <--- 2. GET NAVIGATION TYPE

  // Handle scrolling logic
  useEffect(() => {
    // Case 1: If there is a hash link (e.g., #infohub), scroll to it
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
    // Case 2: If it's a normal page change AND not a "Back" button click
    else if (navType !== "POP") {
      window.scrollTo(0, 0);
    }
    // If navType === "POP" (Back button), we do nothing
    // and let the browser restore the previous scroll position.
  }, [pathname, hash, navType]); // <--- 3. ADD navType TO DEPENDENCIES

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
          <Route path="/work-as-doctor" element={<WorkDoctor lang={lang} />} />
          <Route path="/work-as-nurse" element={<WorkNurse lang={lang} />} />
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
