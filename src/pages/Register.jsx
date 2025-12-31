import React, { useState, useRef, useEffect } from "react";
import {
  User,
  Phone,
  Briefcase,
  Send,
  CheckCircle2,
  GraduationCap,
  Award,
  Loader2,
  MapPin,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Register = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");

  // New States for Backend Integration
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // City Search State
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Default role matches new options
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    role: "Online",
  });

  // --- CITIES LISTS (Based on Language) ---

  // 1. French / German (International Spellings)
  const citiesLatin = [
    // Priority
    "Rabat",
    "Salé",
    "Témara",
    "Harhoura",
    "Skhirate",
    "Bouznika",
    "Kénitra",
    "Sidi Taibi",
    "Mehdia",
    "Bouknadel",
    "Sidi Slimane",
    "Sidi Kacem",
    "Khemisset",
    "Tiflet",
    // Alphabetical
    "Agadir",
    "Agdz",
    "Aghbala",
    "Agourai",
    "Ait Baha",
    "Ait Iaaza",
    "Ait Melloul",
    "Ait Ourir",
    "Ait Yaazem",
    "Ajdir",
    "Akhfenir",
    "Aklim",
    "Al Hoceima",
    "Amalou Ighriben",
    "Amezmiz",
    "Amlil",
    "Aoufous",
    "Aoulouz",
    "Aourir",
    "Arfoud",
    "Assa",
    "Azemmour",
    "Azilal",
    "Azrou",
    "Bab Berred",
    "Bab Taza",
    "Bejaad",
    "Ben Ahmed",
    "Ben Guerir",
    "Beni Ansar",
    "Beni Mellal",
    "Beni Tadjite",
    "Benslimane",
    "Berkane",
    "Berrechid",
    "Bhalil",
    "Biougra",
    "Bir Jdid",
    "Bouarfa",
    "Bouguedra",
    "Bouizakarne",
    "Boujdour",
    "Boulemane",
    "Boumalne Dades",
    "Boumia",
    "Casablanca",
    "Chefchaouen",
    "Chichaoua",
    "Dakhla",
    "Dar Bouazza",
    "Dar El Kebdani",
    "Dar Ould Zidouh",
    "Demnate",
    "Deroua",
    "El Aaiún (Laâyoune)",
    "El Borouj",
    "El Gara",
    "El Hajeb",
    "El Jadida",
    "El Kelaa des Sraghna",
    "El Marsa",
    "El Menzel",
    "El Ouatia",
    "Errachidia",
    "Essaouira",
    "Fes",
    "Figuig",
    "Fnideq",
    "Fquih Ben Salah",
    "Guelmim",
    "Guercif",
    "Had Kourt",
    "Had Soualem",
    "Haj Kaddour",
    "Ifrane",
    "Imintanoute",
    "Imouzzer Kandar",
    "Imouzzer Marmoucha",
    "Inezgane",
    "Irherm",
    "Jerada",
    "Jorf",
    "Jorf El Melha",
    "Kalaat Mgouna",
    "Khenifra",
    "Khouribga",
    "Ksar El Kebir",
    "Larache",
    "Lqliâa",
    "Marrakech",
    "Martil",
    "Mechra Bel Ksiri",
    "Mediouna",
    "Meknes",
    "Midar",
    "Missour",
    "Mohammedia",
    "Moulay Abdallah",
    "Moulay Bousselham",
    "Moulay Driss Zerhoun",
    "Nador",
    "Naima",
    "Oualidia",
    "Ouarzazate",
    "Oued Zem",
    "Ouezzane",
    "Oujda",
    "Rissani",
    "Safi",
    "Sebt Ait Rahhou",
    "Sebt El Guerdane",
    "Sefrou",
    "Settat",
    "Sidi Bennour",
    "Sidi Ifni",
    "Sidi Rahhal",
    "Smara",
    "Souk El Arbaa",
    "Tafraout",
    "Taghazout",
    "Tahla",
    "Taliouine",
    "Talmest",
    "Tanger",
    "Taounate",
    "Taourirt",
    "Taroudant",
    "Tata",
    "Taza",
    "Tetouan",
    "Tinghir",
    "Tissa",
    "Tiznit",
    "Touima",
    "Youssoufia",
    "Zagora",
    "Zaio",
    "Zemamra",
  ];

  // 2. Arabic List
  const citiesArabic = [
    // Priority
    "الرباط",
    "سلا",
    "تمارة",
    "الهرهورة",
    "الصخيرات",
    "بوزنيقة",
    "القنيطرة",
    "سيدي الطيبي",
    "المهدية",
    "بوقنادل",
    "سيدي سليمان",
    "سيدي قاسم",
    "الخميسات",
    "تيفلت",
    // Alphabetical
    "أكادير",
    "أكدز",
    "أغبالة",
    "أكوراي",
    "آيت باها",
    "آيت إيعزة",
    "آيت ملول",
    "آيت أورير",
    "آيت يعزم",
    "أجدير",
    "أخفنير",
    "أكليم",
    "الحسيمة",
    "أمالو إغريبن",
    "أمزميز",
    "أمليل",
    "أوفوس",
    "أولوز",
    "أورير",
    "أرفود",
    "آسا",
    "أزمور",
    "أزيلال",
    "أزرو",
    "باب برد",
    "باب تازة",
    "بجعد",
    "بن أحمد",
    "بن جرير",
    "بني أنصار",
    "بني ملال",
    "بني تدجيت",
    "بنسليمان",
    "بركان",
    "برشيد",
    "بهاليل",
    "بيوكرى",
    "بير جديد",
    "بوعرفة",
    "بوكدورة",
    "بويزكارن",
    "بوجدور",
    "بولمان",
    "بومالن دادس",
    "بومية",
    "الدار البيضاء",
    "شفشاون",
    "شيشاوة",
    "الداخلة",
    "دار بوعزة",
    "دار الكبداني",
    "دار ولد زيدوح",
    "دمنات",
    "الدروة",
    "العيون",
    "البروج",
    "الݣارة",
    "الحاجب",
    "الجديدة",
    "قلعة السراغنة",
    "المرسى",
    "المنزل",
    "الوطية",
    "الرشيدية",
    "الصويرة",
    "فاس",
    "فكيك",
    "الفنيدق",
    "الفقيه بن صالح",
    "كلميم",
    "جرسيف",
    "حد كورت",
    "حد السوالم",
    "حاج قدور",
    "إفران",
    "إيمنتانوت",
    "إيموزار كندر",
    "إيموزار مرموشة",
    "إنزكان",
    "إيغرم",
    "جرادة",
    "الجرف",
    "جرف الملحة",
    "قلعة مكونة",
    "خنيفرة",
    "خريبكة",
    "القصر الكبير",
    "العرائش",
    "القليعة",
    "مراكش",
    "مرتيل",
    "مشرع بلقصيري",
    "مديونة",
    "مكناس",
    "ميدار",
    "ميسور",
    "المحمدية",
    "مولاي عبد الله",
    "مولاي بوسلهام",
    "مولاي إدريس زرهون",
    "الناظور",
    "نعيمة",
    "الواليدية",
    "ورزازات",
    "وادي زم",
    "وزان",
    "وجدة",
    "الريصاني",
    "آسفي",
    "سبت آيت رحو",
    "سبت الكردان",
    "صفرو",
    "سطات",
    "سيدي بنور",
    "سيدي إفني",
    "سيدي رحال",
    "السمارة",
    "سوق الأربعاء",
    "تافراوت",
    "تغازوت",
    "تاهلة",
    "تليوين",
    "تالمست",
    "طنجة",
    "تاونات",
    "تاوريرت",
    "تارودانت",
    "طاطا",
    "تازة",
    "تطوان",
    "تنغير",
    "تيصة",
    "تيزنيت",
    "تويمة",
    "اليوسفية",
    "زاكورة",
    "زايو",
    "الزمامرة",
  ];

  // Select list based on language
  const moroccanCities = lang === "ar" ? citiesArabic : citiesLatin;

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCityDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const content = {
    de: {
      tag: "Karrierestart",
      title: "Anmeldung & Beratung",
      subtitle:
        "Starten Sie Ihre Karriere in Deutschland. Füllen Sie das Formular aus.",
      form: {
        name: "Vollständiger Name",
        phone: "Telefonnummer",
        city: "Stadt",
        city_placeholder: "Wählen oder tippen...",
        role_label: "Unterrichtsform",
        roles: ["Online", "Präsenzunterricht (Vor Ort)"],
        level_label: "Gewünschtes Sprachniveau",
        levels: [
          "A1 (Anfänger)",
          "A2 (Grundlagen)",
          "B1 (Fortgeschritten)",
          "B2 (Berufsniveau)",
          "C1 (Experte)",
        ],
        btn: "Anmeldung abschicken",
        sending: "Wird gesendet...",
      },
      success: {
        title: "Vielen Dank!",
        msg: "Ihre Anmeldung wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.",
        back: "Zurück zum Formular",
      },
    },
    fr: {
      tag: "Départ Carrière",
      title: "Inscription & Consultation",
      subtitle:
        "Commencez votre carrière en Allemagne. Remplissez le formulaire ci-dessous.",
      form: {
        name: "Nom complet",
        phone: "Numéro de téléphone",
        city: "Ville",
        city_placeholder: "Sélectionnez ou tapez...",
        role_label: "Format du cours",
        roles: ["En ligne", "Présentiel (Sur place)"],
        level_label: "Niveau souhaité / actuel",
        levels: [
          "A1 (Débutant)",
          "A2 (Élémentaire)",
          "B1 (Intermédiaire)",
          "B2 (Avancé / Pro)",
          "C1 (Expert)",
        ],
        btn: "Envoyer l'inscription",
        sending: "Envoi en cours...",
      },
      success: {
        title: "Merci !",
        msg: "Votre inscription a été envoyée avec succès. Nous vous contacterons bientôt.",
        back: "Retour au formulaire",
      },
    },
    ar: {
      tag: "بداية المسار",
      title: "التسجيل والاستشارة",
      subtitle: "ابدأ مسيرتك المهنية في ألمانيا. املأ النموذج التالي.",
      form: {
        name: "الاسم الكامل",
        phone: "رقم الهاتف",
        city: "المدينة",
        city_placeholder: "اختر أو اكتب...",
        role_label: "نظام الدراسة",
        roles: ["أونلاين (عن بُعد)", "حضوري (في المركز)"],
        level_label: "المستوى المطلوب / الحالي",
        levels: [
          "A1 (مبتدئ)",
          "A2 (أساسي)",
          "B1 (متوسط)",
          "B2 (متقدم / مهني)",
          "C1 (خبير)",
        ],
        btn: "إرسال الطلب",
        sending: "جاري الإرسال...",
      },
      success: {
        title: "شكراً لك!",
        msg: "تم إرسال طلبك بنجاح. سنتواصل معك قريباً.",
        back: "العودة للنموذج",
      },
    },
  };

  const seo = {
    fr: {
      title: "Inscription & Candidature - Commencez votre parcours",
      desc: "Formulaire d'inscription GMED...",
    },
    de: {
      title: "Anmeldung & Bewerbung - Starten Sie Ihren Weg",
      desc: "GMED Anmeldeformular...",
    },
    ar: {
      title: "التسجيل والترشيح - ابدأ مسارك الآن",
      desc: "استمارة التسجيل GMED...",
    },
  };

  const t = content[lang] || content.fr;
  const tSeo = seo[lang] || seo.fr;

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle City Selection
  const handleCitySelect = (city) => {
    setFormData({ ...formData, city: city });
    setShowCityDropdown(false);
  };

  // Filter cities based on input
  const filteredCities = moroccanCities.filter((city) =>
    city.toLowerCase().startsWith(formData.city.toLowerCase())
  );

  // --- SUBMIT HANDLER ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name: formData.name,
        phone: formData.phone,
        city: formData.city,
        role: formData.role,
        level: selectedLevel,
      });

      if (response.status === 201) {
        setSubmitted(true);
        window.scrollTo(0, 0);
        setFormData({
          name: "",
          phone: "",
          city: "",
          role: t.form.roles[0],
        });
        setSelectedLevel("");
      }
    } catch (err) {
      console.error(err);
      setError("Une erreur s'est produite. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  // KEPT INPUTS WHITE TO POP AGAINST THE NEW BACKGROUND
  const inputClasses = `w-full py-4 bg-white border border-[#004C73] rounded-xl focus:ring-1 focus:ring-[#004C73] focus:border-[#004C73] outline-none transition-all font-medium ${
    lang === "ar" ? "pr-12 pl-4" : "pl-12 pr-4"
  }`;

  const iconClasses = `absolute top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#004C73] transition-colors ${
    lang === "ar" ? "right-4" : "left-4"
  }`;

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 bg-medical-navy/15">
        <Helmet>
          <title>
            {lang === "ar" ? "تم الإرسال بنجاح" : "Confirmation"} | GMED
          </title>
          <meta name="robots" content="noindex" />
        </Helmet>

        {/* THE COMMENT THAT WAS HERE IS NOW REMOVED */}

        <div className="max-w-lg w-full bg-[#EBF1F5] p-12 rounded-3xl shadow-xl border border-slate-300 text-center animate-fade-in">
          <div className="w-24 h-24 bg-[#004C73]/10 text-[#004C73] rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-black text-medical-navy mb-4">
            {t.success.title}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            {t.success.msg}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-[#004C73] font-bold hover:text-black transition-colors text-lg"
          >
            {t.success.back}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-medical-navy/15 min-h-screen py-12 px-4"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Helmet>
        <title>{tSeo.title}</title>
        <meta name="description" content={tSeo.desc} />
        <link rel="canonical" href="https://gmed.ma/register" />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs font-bold mb-6 border border-yellow-500/20">
            <Award size={14} />
            {t.tag}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-medical-navy mb-4 relative inline-block">
            {t.title}
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-yellow-500 rounded-full" />
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium mt-4">
            {t.subtitle}
          </p>
        </div>

        {/* Form Card - UPDATED COLOR TO #EBF1F5 (Cool Grey/Blue) */}
        <div className="bg-[#EBF1F5] p-8 md:p-12 rounded-3xl shadow-xl border border-slate-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#800020]"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* ROW 1: Name & Phone */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.form.name} <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <User className={iconClasses} size={20} />
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.form.phone} <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Phone className={iconClasses} size={20} />
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="+212 ..."
                  />
                </div>
              </div>
            </div>

            {/* ROW 2: City & Course Mode (New Layout) */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* CITY DROPDOWN (NEW) */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.form.city} <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <MapPin className={iconClasses} size={20} />
                  <input
                    type="text"
                    name="city"
                    required
                    autoComplete="off"
                    value={formData.city}
                    onChange={(e) => {
                      handleChange(e);
                      setShowCityDropdown(true);
                    }}
                    onFocus={() => setShowCityDropdown(true)}
                    className={inputClasses}
                    placeholder={t.form.city_placeholder}
                  />
                </div>

                {/* Autocomplete Dropdown */}
                {showCityDropdown && (
                  <ul className="absolute z-50 left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg max-h-60 overflow-y-auto overflow-x-hidden">
                    {filteredCities.length > 0 ? (
                      filteredCities.map((city, i) => (
                        <li
                          key={i}
                          onClick={() => handleCitySelect(city)}
                          className="px-4 py-3 hover:bg-slate-50 cursor-pointer text-slate-700 font-medium border-b border-slate-50 last:border-none flex items-center gap-2"
                        >
                          <MapPin size={16} className="text-[#004C73]" />
                          {city}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-3 text-slate-400 italic text-sm">
                        {lang === "ar" ? "مدينة أخرى..." : "Other city..."}
                      </li>
                    )}
                  </ul>
                )}
              </div>

              {/* Course Mode */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.form.role_label} <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <Briefcase className={iconClasses} size={20} />
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none cursor-pointer`}
                  >
                    {t.form.roles.map((role, i) => (
                      <option key={i} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 ${
                      lang === "ar" ? "left-4" : "right-4"
                    }`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 3: Levels */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
                <GraduationCap size={18} className="text-[#004C73]" />
                {t.form.level_label} <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {t.form.levels.map((level, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedLevel(level)}
                    className={`relative p-3 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group ${
                      selectedLevel === level
                        ? "border-[#004C73] bg-[#004C73]/10 text-[#004C73] shadow-md transform scale-105"
                        : "border-[#004C73] bg-white text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        selectedLevel === level
                          ? "border-[#004C73] bg-[#004C73]"
                          : "border-[#004C73] group-hover:border-[#004C73]"
                      }`}
                    />
                    <span className="text-xs md:text-xs lg:text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                      {level.split(" ")[0]}{" "}
                      <span className="opacity-70 font-normal hidden xl:inline">
                        {level.substring(level.indexOf(" "))}
                      </span>
                      <span className="opacity-70 font-normal xl:hidden">
                        {level.substring(level.indexOf(" ")).slice(0, 4)}..
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <input
                type="hidden"
                required
                value={selectedLevel}
                onChange={() => {}}
              />
            </div>

            {error && (
              <p className="text-red-600 font-bold text-center bg-red-50 p-3 rounded-lg">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!selectedLevel || loading}
              className={`w-full text-white text-lg font-bold py-5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 group ${
                selectedLevel
                  ? "bg-[#004C73] hover:bg-[#003a57] shadow-[#004C73]/20"
                  : "bg-slate-300 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  {t.form.sending}
                </>
              ) : (
                <>
                  {t.form.btn}
                  <Send
                    size={22}
                    className={`transition-transform group-hover:translate-x-1 ${
                      lang === "ar"
                        ? "rotate-180 group-hover:-translate-x-1"
                        : ""
                    }`}
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
