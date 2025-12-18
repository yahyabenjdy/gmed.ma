import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  UserPlus,
  Stethoscope,
  Syringe,
} from "lucide-react";

const Navbar = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [doctorOpen, setDoctorOpen] = useState(false);

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

  return (
    <nav
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-100 font-sans"
    >
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
                className={`font-semibold transition-colors ${
                  isActive(t[0].path)
                    ? "text-medical-cyan"
                    : "text-medical-navy hover:text-medical-cyan"
                }`}
              >
                {t[0].name}
              </Link>

              <Link
                to={t[1].path}
                className={`font-semibold transition-colors ${
                  isActive(t[1].path)
                    ? "text-medical-cyan"
                    : "text-medical-navy hover:text-medical-cyan"
                }`}
              >
                {t[1].name}
              </Link>

              <Link
                to="/ausbildung"
                className={`font-semibold transition-colors ${
                  isActive("/ausbildung")
                    ? "text-medical-cyan"
                    : "text-medical-navy hover:text-medical-cyan"
                }`}
              >
                {labels.ausbildung}
              </Link>

              <Link
                to={t[2].path}
                className={`font-semibold transition-colors ${
                  isActive(t[2].path)
                    ? "text-medical-cyan"
                    : "text-medical-navy hover:text-medical-cyan"
                }`}
              >
                {t[2].name}
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
                  className={`flex items-center gap-1 font-semibold transition-colors cursor-pointer py-4 ${
                    isWorkActive
                      ? "text-medical-cyan"
                      : "text-medical-navy hover:text-medical-cyan"
                  }`}
                >
                  {labels.work}{" "}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      workOpen ? "rotate-180" : ""
                    }`}
                  />
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
                      {/* UPDATED: Changed div to Link to make the "Doctor" text clickable */}
                      <Link
                        to="/work/doctor" // <--- FIXED PATH
                        className={`flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 text-sm font-bold cursor-pointer transition-colors ${
                          isActive("/work/doctor")
                            ? "text-medical-cyan"
                            : "text-medical-navy"
                        }`}
                      >
                        <div
                          className={`flex items-center gap-2 ${
                            lang === "ar" ? "flex-row-reverse" : ""
                          }`}
                        >
                          <Stethoscope
                            size={16}
                            className="text-medical-cyan"
                          />{" "}
                          {labels.doctor}
                        </div>
                        <ChevronDown
                          size={12}
                          className={lang === "ar" ? "rotate-90" : "-rotate-90"}
                        />
                      </Link>

                      {/* Doctor Sub-Menu Items */}
                      {doctorOpen && (
                        <div
                          className={`absolute top-0 w-48 bg-white border border-slate-100 shadow-xl rounded-xl py-2 animate-fade-in ${
                            lang === "ar" ? "right-full mr-1" : "left-full ml-1"
                          }`}
                        >
                          {[
                            { to: "/choose-land", l: labels.land },
                            { to: "/financial-aid", l: labels.finance },
                            { to: "/integration-guide", l: labels.integration },
                            { to: "/visa-guide", l: labels.visa },
                          ].map((sub) => (
                            <Link
                              key={sub.to}
                              to={sub.to}
                              className={`block px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${
                                isActive(sub.to)
                                  ? "text-medical-cyan font-bold"
                                  : "text-slate-600"
                              }`}
                            >
                              {sub.l}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Nurse Link */}
                    <Link
                      to="/work/nurse" // <--- FIXED PATH
                      className={`flex items-center gap-2 px-4 py-2.5 hover:bg-slate-50 font-bold transition-colors border-t border-slate-50 ${
                        isActive("/work/nurse")
                          ? "text-medical-cyan"
                          : "text-medical-navy"
                      } ${lang === "ar" ? "flex-row-reverse justify-end" : ""}`}
                    >
                      <Syringe size={16} className="text-medical-cyan" />{" "}
                      {labels.nurse}
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Language & CTA */}
            <div className="relative group">
              <button className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg text-medical-navy font-bold text-sm border border-slate-200 cursor-pointer">
                <img
                  src={currentLangObj?.flag}
                  alt={lang}
                  className="w-5 h-auto rounded-sm shadow-sm"
                />
                <span>{lang.toUpperCase()}</span>
                <ChevronDown size={14} className="text-slate-400" />
              </button>
              <div
                className={`absolute mt-1 w-28 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 py-2 ${
                  lang === "ar" ? "left-0" : "right-0"
                }`}
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-50 cursor-pointer ${
                      lang === l.code
                        ? "text-medical-cyan font-bold bg-medical-light/10"
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

            <Link
              to="/register"
              className={`btn-primary py-3 px-6 text-sm flex items-center gap-2 whitespace-nowrap shadow-md hover:scale-105 transition-transform ${
                isActive("/register")
                  ? "ring-2 ring-offset-2 ring-medical-cyan"
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
              className="text-medical-navy p-2 cursor-pointer"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-6 space-y-4 shadow-xl">
          <div className={lang === "ar" ? "text-right" : "text-left"}>
            {t.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block font-bold py-2 text-lg ${
                  isActive(link.path)
                    ? "text-medical-cyan"
                    : "text-medical-navy"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/ausbildung"
              className={`block font-bold py-2 text-lg ${
                isActive("/ausbildung")
                  ? "text-medical-cyan"
                  : "text-medical-navy"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {labels.ausbildung}
            </Link>

            {/* Mobile Links for Work items - FIXED PATHS */}
            <Link
              to="/work/doctor" // <--- FIXED PATH
              className="block font-bold py-2 text-lg text-medical-navy hover:text-medical-cyan"
              onClick={() => setIsOpen(false)}
            >
              {labels.doctor}
            </Link>
            <Link
              to="/work/nurse" // <--- FIXED PATH
              className="block font-bold py-2 text-lg text-medical-navy hover:text-medical-cyan"
              onClick={() => setIsOpen(false)}
            >
              {labels.nurse}
            </Link>
          </div>

          <Link
            to="/register"
            className="btn-primary w-full py-4 rounded-xl font-bold text-center mt-4 flex justify-center items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <UserPlus size={20} />
            {lang === "ar" ? "سجل الآن" : "S'inscrire"}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
