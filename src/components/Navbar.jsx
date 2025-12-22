import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  UserPlus,
  Stethoscope,
  Syringe,
  Map,
  FileText,
  Euro,
  Users,
} from "lucide-react";

const Navbar = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [doctorOpen, setDoctorOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // New state for mobile sub-menu toggle
  const [mobileDoctorOpen, setMobileDoctorOpen] = useState(false);

  const location = useLocation();

  const navTranslations = {
    de: {
      ausbildung: "Ausbildung",
      work: "Arbeit",
      doctor: "Arzt",
      nurse: "Pflegekraft",
      land: "Bundesland",
      finance: "Förderung",
      integration: "Integration",
      visa: "Visum",
    },
    fr: {
      ausbildung: "Ausbildung",
      work: "Travail",
      doctor: "Médecin",
      nurse: "Infirmier",
      land: "Choisir un Land",
      finance: "Aide Financière",
      integration: "Intégration",
      visa: "Guide Visa",
    },
    ar: {
      ausbildung: "تكوين مهني",
      work: "العمل",
      doctor: "طبيب",
      nurse: "ممرض",
      land: "اختيار الولاية",
      finance: "الدعم المالي",
      integration: "الاندماج",
      visa: "دليل التأشيرة",
    },
  };

  const navLinks = {
    de: [
      { name: "Startseite", path: "/" },
      { name: "Kurse", path: "/courses" },
      { name: "Studium", path: "/study" },
    ],
    fr: [
      { name: "Accueil", path: "/" },
      { name: "Cours", path: "/courses" },
      { name: "Études", path: "/study" },
    ],
    ar: [
      { name: "الرئيسية", path: "/" },
      { name: "الدورات", path: "/courses" },
      { name: "الدراسة", path: "/study" },
    ],
  };

  const languages = [
    { code: "fr", label: "FR", flag: "https://flagcdn.com/w40/fr.png" },
    { code: "ar", label: "AR", flag: "https://flagcdn.com/w40/ma.png" },
    { code: "de", label: "DE", flag: "https://flagcdn.com/w40/de.png" },
  ];

  const t = navLinks[lang] || navLinks.fr;
  const labels = navTranslations[lang] || navTranslations.fr;
  const currentLangObj = languages.find((l) => l.code === lang);

  const isActive = (path) => location.pathname === path;

  const isWorkActive =
    location.pathname.startsWith("/work") ||
    [
      "/choose-land",
      "/financial-aid",
      "/integration-guide",
      "/visa-guide",
    ].includes(location.pathname);

  // CHANGED: Use the Darker Blue #004C73
  const activeColorClass = "text-[#004C73]";
  const hoverColorClass = "hover:text-[#004C73]";

  return (
    <nav
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100 font-sans relative"
    >
      {/* 1. TOP BORDER: Solid Rouge Bordeaux (#800020) */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-[#800020] z-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-full">
            <Link to="/" className="flex items-center h-full group">
              <img
                src="/logo.png"
                alt="GMED Logo"
                className="h-full w-auto max-h-[70px] py-1 object-contain transition-transform group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-6 lg:gap-8">
              <Link
                to={t[0].path}
                className={`font-semibold transition-colors relative group ${
                  isActive(t[0].path)
                    ? activeColorClass
                    : `text-medical-navy ${hoverColorClass}`
                }`}
              >
                {t[0].name}
                {isActive(t[0].path) && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                )}
              </Link>

              <Link
                to={t[1].path}
                className={`font-semibold transition-colors relative group ${
                  isActive(t[1].path)
                    ? activeColorClass
                    : `text-medical-navy ${hoverColorClass}`
                }`}
              >
                {t[1].name}
                {isActive(t[1].path) && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                )}
              </Link>

              <Link
                to="/ausbildung"
                className={`font-semibold transition-colors relative group ${
                  isActive("/ausbildung")
                    ? activeColorClass
                    : `text-medical-navy ${hoverColorClass}`
                }`}
              >
                {labels.ausbildung}
                {isActive("/ausbildung") && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                )}
              </Link>

              <Link
                to={t[2].path}
                className={`font-semibold transition-colors relative group ${
                  isActive(t[2].path)
                    ? activeColorClass
                    : `text-medical-navy ${hoverColorClass}`
                }`}
              >
                {t[2].name}
                {isActive(t[2].path) && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                )}
              </Link>

              {/* Work Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setWorkOpen(true)}
                onMouseLeave={() => {
                  setWorkOpen(false);
                  setDoctorOpen(false);
                }}
              >
                <button
                  className={`flex items-center gap-1 font-semibold transition-colors cursor-pointer py-4 relative ${
                    isWorkActive || workOpen
                      ? activeColorClass
                      : `text-medical-navy ${hoverColorClass}`
                  }`}
                >
                  {labels.work}{" "}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      workOpen ? "rotate-180" : ""
                    }`}
                  />
                  {isWorkActive && (
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  )}
                </button>

                {workOpen && (
                  <div
                    className={`absolute top-[85%] mt-0 w-48 bg-white border border-slate-100 shadow-xl rounded-xl py-2 z-50 animate-fade-in ${
                      lang === "ar" ? "right-0 text-right" : "left-0"
                    }`}
                  >
                    {/* Doctor Sub-Menu Trigger */}
                    <div
                      className="relative"
                      onMouseEnter={() => setDoctorOpen(true)}
                      onMouseLeave={() => setDoctorOpen(false)}
                    >
                      <Link
                        to="/work/doctor"
                        className={`flex items-center justify-between px-4 py-2.5 text-sm font-bold cursor-pointer transition-colors ${
                          isActive("/work/doctor") || doctorOpen
                            ? `${activeColorClass} bg-slate-50`
                            : `text-medical-navy hover:bg-slate-50 ${hoverColorClass}`
                        }`}
                      >
                        <div
                          className={`flex items-center gap-2 ${
                            lang === "ar" ? "flex-row-reverse" : ""
                          }`}
                        >
                          <Stethoscope size={16} className="text-[#004C73]" />{" "}
                          {labels.doctor}
                        </div>
                        <ChevronDown
                          size={12}
                          className={`transition-transform duration-200 ${
                            lang === "ar"
                              ? doctorOpen
                                ? "rotate-180"
                                : "rotate-90"
                              : doctorOpen
                              ? "rotate-0"
                              : "-rotate-90"
                          }`}
                        />
                      </Link>

                      {/* Doctor Sub-Menu Items */}
                      {doctorOpen && (
                        <div
                          className={`absolute top-0 w-48 bg-white border border-slate-100 shadow-xl rounded-xl py-2 animate-fade-in ${
                            lang === "ar" ? "right-full mr-0" : "left-full ml-0"
                          }`}
                        >
                          {[
                            {
                              to: "/choose-land",
                              l: labels.land,
                              icon: <Map size={16} />,
                            },
                            {
                              to: "/visa-guide",
                              l: labels.visa,
                              icon: <FileText size={16} />,
                            },
                            {
                              to: "/financial-aid",
                              l: labels.finance,
                              icon: <Euro size={16} />,
                            },
                            {
                              to: "/integration-guide",
                              l: labels.integration,
                              icon: <Users size={16} />,
                            },
                          ].map((sub) => (
                            <Link
                              key={sub.to}
                              to={sub.to}
                              className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                                isActive(sub.to)
                                  ? `${activeColorClass} font-bold bg-medical-light/5`
                                  : `text-slate-600 font-medium hover:bg-slate-50 ${hoverColorClass}`
                              } ${lang === "ar" ? "flex-row-reverse" : ""}`}
                            >
                              <span className="text-[#004C73]/80">
                                {sub.icon}
                              </span>
                              {sub.l}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Nurse Link */}
                    <Link
                      to="/work/nurse"
                      className={`flex items-center gap-2 px-4 py-2.5 font-bold transition-colors border-t border-slate-50 ${
                        isActive("/work/nurse")
                          ? `${activeColorClass} bg-slate-50`
                          : `text-medical-navy hover:bg-slate-50 ${hoverColorClass}`
                      } ${lang === "ar" ? "flex-row-reverse justify-end" : ""}`}
                    >
                      <Syringe size={16} className="text-[#004C73]" />{" "}
                      {labels.nurse}
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Language & CTA */}
            <div
              className="relative"
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <button
                className={`flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg font-bold text-sm border transition-all duration-200 cursor-pointer ${
                  langOpen
                    ? "border-[#004C73] text-[#004C73] bg-slate-100"
                    : "border-slate-200 text-medical-navy hover:border-[#004C73]/50"
                }`}
              >
                <img
                  src={currentLangObj?.flag}
                  alt={lang}
                  className="w-5 h-auto rounded-sm shadow-sm"
                />
                <span>{lang.toUpperCase()}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    langOpen ? "rotate-180" : ""
                  } ${langOpen ? "text-[#004C73]" : "text-slate-400"}`}
                />
              </button>

              <div
                className={`absolute mt-1 w-28 bg-white border border-slate-100 rounded-xl shadow-xl transition-all duration-200 z-50 py-2 ${
                  lang === "ar" ? "left-0" : "right-0"
                } ${
                  langOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors cursor-pointer hover:bg-slate-50 ${hoverColorClass} ${
                      lang === l.code
                        ? `${activeColorClass} font-bold bg-medical-light/10`
                        : "text-medical-navy"
                    } ${lang === "ar" ? "flex-row-reverse" : ""}`}
                  >
                    <img
                      src={l.flag}
                      alt={l.label}
                      className="w-5 h-auto rounded-xs shadow-xs"
                    />
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. SIGNUP BUTTON - Uses New Darker Blue Color */}
            <Link
              to="/register"
              className={`py-3 px-6 text-sm flex items-center gap-2 whitespace-nowrap shadow-md hover:scale-105 transition-all duration-300 rounded-lg font-bold bg-[#004C73] text-white hover:bg-[#003a57] ${
                isActive("/register")
                  ? "ring-2 ring-offset-2 ring-[#004C73]"
                  : ""
              }`}
            >
              <UserPlus size={18} />{" "}
              {lang === "ar"
                ? "سجل الآن"
                : lang === "de"
                ? "Anmelden"
                : "S'inscrire"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center h-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-medical-navy p-2 cursor-pointer ${hoverColorClass} transition-colors`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-t border-slate-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div
          className={`px-4 py-6 space-y-4 overflow-y-auto max-h-[calc(100vh-80px)]`}
        >
          {/* Main Links */}
          <div className={lang === "ar" ? "text-right" : "text-left"}>
            {t.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block font-bold py-2 text-lg ${
                  isActive(link.path) ? activeColorClass : "text-medical-navy"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/ausbildung"
              className={`block font-bold py-2 text-lg ${
                isActive("/ausbildung") ? activeColorClass : "text-medical-navy"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {labels.ausbildung}
            </Link>

            {/* Mobile Doctor Dropdown */}
            <div>
              <button
                onClick={() => setMobileDoctorOpen(!mobileDoctorOpen)}
                className={`w-full flex items-center justify-between font-bold py-2 text-lg transition-colors ${
                  isActive("/work/doctor") || mobileDoctorOpen
                    ? activeColorClass
                    : "text-medical-navy"
                }`}
              >
                <span>{labels.doctor}</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    mobileDoctorOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileDoctorOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className={`flex flex-col space-y-2 mt-1 mb-2 ${
                    lang === "ar" ? "pr-4 border-r-2" : "pl-4 border-l-2"
                  } border-slate-100`}
                >
                  {/* Parent Doctor Link */}
                  <Link
                    to="/work/doctor"
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-base font-semibold ${hoverColorClass} text-medical-navy`}
                  >
                    {labels.doctor} (Main)
                  </Link>

                  {/* Sub Pages */}
                  {[
                    { to: "/choose-land", l: labels.land },
                    { to: "/visa-guide", l: labels.visa },
                    { to: "/financial-aid", l: labels.finance },
                    { to: "/integration-guide", l: labels.integration },
                  ].map((sub) => (
                    <Link
                      key={sub.to}
                      to={sub.to}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-base transition-colors ${
                        isActive(sub.to)
                          ? `${activeColorClass} font-bold`
                          : `text-slate-600 ${hoverColorClass}`
                      }`}
                    >
                      {sub.l}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Nurse Link */}
            <Link
              to="/work/nurse"
              className={`block font-bold py-2 text-lg text-medical-navy ${hoverColorClass}`}
              onClick={() => setIsOpen(false)}
            >
              {labels.nurse}
            </Link>
          </div>

          {/* Mobile Language Selector */}
          <div className="border-t border-slate-100 pt-4 mt-4">
            <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">
              {lang === "ar" ? "اللغة" : "Language / Sprache"}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setIsOpen(false);
                  }}
                  className={`flex flex-col items-center justify-center gap-2 p-2 rounded-lg border transition-colors ${
                    lang === l.code
                      ? `border-[#004C73] bg-medical-light/10 ${activeColorClass} font-bold`
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <img
                    src={l.flag}
                    alt={l.label}
                    className="w-6 h-auto rounded-sm shadow-sm"
                  />
                  <span className="text-xs">{l.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Register Button */}
          <Link
            to="/register"
            className="w-full py-4 rounded-xl font-bold text-center mt-4 flex justify-center items-center gap-2 bg-[#004C73] text-white hover:bg-[#003a57] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <UserPlus size={20} />
            {lang === "ar" ? "سجل الآن" : "S'inscrire"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
