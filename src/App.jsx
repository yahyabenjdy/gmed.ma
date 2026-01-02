import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
// 1. IMPORT HELMET AND PROVIDER
import { Helmet, HelmetProvider } from "react-helmet-async";

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
import NotFound from "./pages/NotFound";

// Admin Component
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [lang, setLang] = useState("fr");
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  // --- NEW: Check if current page is Admin ---
  const isAdminPage = pathname.startsWith("/admin");

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
    <HelmetProvider>
      <div className="min-h-screen bg-white flex flex-col">
        {/* 2. GLOBAL SEO CONFIGURATION */}
        <Helmet titleTemplate="%s | GMED">
          <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} />
          <title>GMED - Carrière Médicale en Allemagne</title>
          <meta
            name="description"
            content="GMED accompagne les médecins, infirmiers et étudiants marocains vers une carrière en Allemagne. Ausbildung, Études, et Emploi médical."
          />
        </Helmet>

        {/* HIDE TopBar & Navbar on Admin Page */}
        {!isAdminPage && <TopBar lang={lang} />}
        {!isAdminPage && <Navbar lang={lang} setLang={setLang} />}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/news" element={<News lang={lang} />} />
            <Route path="/news/:id" element={<NewsDetail lang={lang} />} />

            {/* Career & Study Routes */}
            <Route path="/courses" element={<CoursesPage lang={lang} />} />
            <Route
              path="/ausbildung"
              element={<AusbildungPage lang={lang} />}
            />
            <Route path="/study" element={<StudyPage lang={lang} />} />

            {/* Work Routes */}
            <Route path="/work/doctor" element={<WorkDoctor lang={lang} />} />
            <Route path="/work/nurse" element={<WorkNurse lang={lang} />} />

            {/* Guides Routes */}
            <Route path="/choose-land" element={<ChooseLand lang={lang} />} />
            <Route
              path="/financial-aid"
              element={<FinancialAid lang={lang} />}
            />
            <Route
              path="/integration-guide"
              element={<IntegrationGuide lang={lang} />}
            />
            <Route path="/visa-guide" element={<VisaGuide lang={lang} />} />

            {/* Registration Route */}
            <Route path="/register" element={<Register lang={lang} />} />

            {/* Admin Route */}
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Fallback */}
            <Route path="*" element={<NotFound lang={lang} />} />
          </Routes>
        </main>

        {/* HIDE Footer on Admin Page */}
        {!isAdminPage && <Footer lang={lang} />}

        {/* HIDE Floating Buttons on Admin Page */}
        {!isAdminPage && <WhatsAppButton />}
        {!isAdminPage && <ScrollToTop />}
      </div>
    </HelmetProvider>
  );
}

export default App;
