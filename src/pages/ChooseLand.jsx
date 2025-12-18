import React, { useEffect } from "react";
import {
  Map,
  Clock,
  Wallet,
  Stethoscope,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Building2,
  TrendingUp,
  Share2,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const ChooseLand = ({ lang }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    if (location.state && location.state.fromHomeSection) {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("work-section");
        if (section) {
          const yOffset = -80;
          const y =
            section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
    } else {
      navigate("/work/doctor");
    }
  };

  // Share Functionality
  const handleShare = async () => {
    const shareData = {
      title: "GMED - Choosing a Bundesland",
      text: "Check out this comparison of German states for medical professionals.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(lang === "ar" ? "تم نسخ الرابط!" : "Link copied to clipboard!");
    }
  };

  const getStatusColor = (status) => {
    if (
      status.includes("Long") ||
      status.includes("High") ||
      status.includes("Teuer") ||
      status.includes("Lang") ||
      status.includes("مرتفع") ||
      status.includes("طويلة")
    )
      return "bg-red-100 text-red-700 border-red-200";
    if (
      status.includes("Moyen") ||
      status.includes("Medium") ||
      status.includes("Mittel") ||
      status.includes("متوسط")
    )
      return "bg-amber-100 text-amber-700 border-amber-200";
    if (
      status.includes("Rapide") ||
      status.includes("Fast") ||
      status.includes("Schnell") ||
      status.includes("schnell") ||
      status.includes("Low") ||
      status.includes("Faible") ||
      status.includes("Günstig") ||
      status.includes("سريعة") ||
      status.includes("منخفض")
    )
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    return "bg-slate-100 text-slate-600";
  };

  const content = {
    fr: {
      hero: {
        tag: "Stratégie",
        title: "Choisir son Land",
        subtitle:
          "Chaque État fédéral a ses propres règles. Le choix du Land peut accélérer ou ralentir votre carrière de 6 mois à 1 an.",
      },
      share: "Partager",
      intro:
        "S’installer en Allemagne pour exercer la médecine ne dépend pas seulement de ton diplôme. Un des choix les plus stratégiques est le Land (État fédéral) où tu vas déposer ton dossier. Les délais et les besoins varient énormément.",
      criteria: [
        { icon: <Clock />, text: "Délais de traitement (Dossier & Examens)" },
        { icon: <Wallet />, text: "Coût de la vie (Loyer, Assurance)" },
        { icon: <Stethoscope />, text: "Opportunités dans votre spécialité" },
        { icon: <AlertTriangle />, text: "Taux de saturation des autorités" },
      ],
      tableHeaders: [
        "Land",
        "Délais Dossier",
        "Délais FSP/KP",
        "Coût Vie",
        "Remarques",
      ],
      lands: [
        {
          name: "Bayern (Bavière)",
          delay: "Long (6-9 mois)",
          exam: "Long (9-12 mois)",
          cost: "Élevé",
          note: "Très saturé (Munich), mais beaucoup d'hôpitaux.",
        },
        {
          name: "Baden-Württemberg",
          delay: "Moyen (5-7 mois)",
          exam: "Moyen (3-6 mois)",
          cost: "Élevé",
          note: "Grand besoin, bon réseau hors grandes villes.",
        },
        {
          name: "NRW (Rhénanie)",
          delay: "Moyen (6-8 mois)",
          exam: "Moyen (7 mois)",
          cost: "Moyen",
          note: "Forte communauté étrangère, centres urbains.",
        },
        {
          name: "Hessen",
          delay: "Moyen (5-7 mois)",
          exam: "Variable (3-9 mois)",
          cost: "Élevé",
          note: "Francfort est un hub, mais administration parfois lente.",
        },
        {
          name: "Berlin",
          delay: "Moyen (5-7 mois)",
          exam: "Moyen (6 mois)",
          cost: "Élevé",
          note: "Très international, mais bureaucratie chaotique.",
        },
        {
          name: "Sachsen (Saxe)",
          delay: "Rapide (3-4 mois)",
          exam: "Rapide (3-4 mois)",
          cost: "Faible",
          note: "TOP pour avancer vite. Forte demande rurale.",
        },
        {
          name: "Thüringen",
          delay: "Rapide (3-4 mois)",
          exam: "Rapide (3-4 mois)",
          cost: "Faible",
          note: "Processus simple, peu de médecins locaux.",
        },
        {
          name: "Sachsen-Anhalt",
          delay: "Rapide (3-4 mois)",
          exam: "Rapide (3-4 mois)",
          cost: "Faible",
          note: "Les hôpitaux cherchent activement. Bon accueil.",
        },
        {
          name: "Brandenburg",
          delay: "Rapide (3-4 mois)",
          exam: "Rapide (3-4 mois)",
          cost: "Moyen",
          note: "Proche de Berlin mais moins cher. Forte demande.",
        },
        {
          name: "Mecklembourg",
          delay: "Rapide (3-4 mois)",
          exam: "Rapide (3-4 mois)",
          cost: "Faible",
          note: "Manque critique de médecins. KP parfois difficile.",
        },
        {
          name: "Niedersachsen",
          delay: "Moyen (5-6 mois)",
          exam: "Moyen (6 mois)",
          cost: "Moyen",
          note: "Bon maillage hospitalier, délais stables.",
        },
        {
          name: "Schleswig-Holstein",
          delay: "Moyen (5-6 mois)",
          exam: "Moyen (6 mois)",
          cost: "Moyen",
          note: "Nord maritime, moins saturé.",
        },
        {
          name: "Hambourg",
          delay: "Moyen (5-7 mois)",
          exam: "Moyen (6 mois)",
          cost: "Élevé",
          note: "Ville dynamique mais processus cher.",
        },
        {
          name: "Bremen",
          delay: "Moyen (5-6 mois)",
          exam: "Moyen (6 mois)",
          cost: "Moyen",
          note: "Rapide car peu de dossiers (petite ville).",
        },
        {
          name: "Saarland",
          delay: "Moyen (5-6 mois)",
          exam: "Moyen (6 mois)",
          cost: "Faible",
          note: "Petit, calme, bonne prise en charge.",
        },
        {
          name: "Rhénanie-Palatinat",
          delay: "Moyen (5-6 mois)",
          exam: "Moyen (6 mois)",
          cost: "Moyen",
          note: "Villes moyennes attractives, stable.",
        },
      ],
      summary: {
        fast: {
          title: "Pour avancer vite",
          text: "Privilégiez l'Est : Saxe, Thuringe, Brandebourg. Délais courts & vie moins chère.",
        },
        cosmo: {
          title: "Vie Cosmopolite",
          text: "Berlin, Hambourg, NRW. Idéal pour le social, mais plus cher et lent.",
        },
        stable: {
          title: "Stabilité & Emploi",
          text: "Baden-Württemberg, Bayern (hors Munich), Niedersachsen.",
        },
      },
      tips: {
        title: "Nos Conseils",
        list: [
          "Contactez les 'Approbationsbehörden' pour les délais actuels.",
          "Comparez les loyers sur Mietspiegel.de ou Numbeo.",
          "Regardez où votre spécialité est demandée (Indeed, Ärzteblatt).",
          "Vérifiez le financement des cours par l'Agentur für Arbeit.",
        ],
      },
    },
    de: {
      hero: {
        tag: "Strategie",
        title: "Bundesland Wahl",
        subtitle:
          "Jedes Bundesland hat eigene Regeln. Die Wahl kann Ihre Karriere um 6-12 Monate beschleunigen.",
      },
      share: "Teilen",
      intro:
        "Der Start in Deutschland hängt nicht nur von Ihrem Diplom ab. Die Wahl des Bundeslandes ist strategisch entscheidend für die Dauer des Anerkennungsverfahrens.",
      criteria: [
        { icon: <Clock />, text: "Bearbeitungszeiten (Antrag & Prüfungen)" },
        { icon: <Wallet />, text: "Lebenshaltungskosten (Miete, etc.)" },
        { icon: <Stethoscope />, text: "Jobchancen in Ihrer Fachrichtung" },
        { icon: <AlertTriangle />, text: "Auslastung der Behörden" },
      ],
      tableHeaders: [
        "Bundesland",
        "Dauer Antrag",
        "Dauer FSP/KP",
        "Kosten",
        "Bemerkung",
      ],
      lands: [
        {
          name: "Bayern",
          delay: "Lang (6-9 Mon)",
          exam: "Lang (9-12 Mon)",
          cost: "Hoch",
          note: "Sehr beliebt, Behörden oft überlastet.",
        },
        {
          name: "Baden-Württemberg",
          delay: "Mittel (5-7 Mon)",
          exam: "Mittel (3-6 Mon)",
          cost: "Hoch",
          note: "Hoher Bedarf, gute Netzwerke.",
        },
        {
          name: "NRW",
          delay: "Mittel (6-8 Mon)",
          exam: "Mittel (7 Mon)",
          cost: "Mittel",
          note: "Viele Kliniken, internationale Community.",
        },
        {
          name: "Hessen",
          delay: "Mittel (5-7 Mon)",
          exam: "Variabel (3-9 Mon)",
          cost: "Hoch",
          note: "Frankfurt ist Hub, aber teils langsam.",
        },
        {
          name: "Berlin",
          delay: "Mittel (5-7 Mon)",
          exam: "Mittel (6 Mon)",
          cost: "Hoch",
          note: "International, aber chaotische Bürokratie.",
        },
        {
          name: "Sachsen",
          delay: "Schnell (3-4 Mon)",
          exam: "Schnell (3-4 Mon)",
          cost: "Günstig",
          note: "TOP für Schnelligkeit. Hoher Bedarf.",
        },
        {
          name: "Thüringen",
          delay: "Schnell (3-4 Mon)",
          exam: "Schnell (3-4 Mon)",
          cost: "Günstig",
          note: "Einfacher Prozess, wenig Konkurrenz.",
        },
        {
          name: "Sachsen-Anhalt",
          delay: "Schnell (3-4 Mon)",
          exam: "Schnell (3-4 Mon)",
          cost: "Günstig",
          note: "Kliniken suchen aktiv. Gute Betreuung.",
        },
        {
          name: "Brandenburg",
          delay: "Schnell (3-4 Mon)",
          exam: "Schnell (3-4 Mon)",
          cost: "Mittel",
          note: "Berlin-Nähe, aber günstiger.",
        },
        {
          name: "Mecklenburg-Vorp.",
          delay: "Schnell (3-4 Mon)",
          exam: "Schnell (3-4 Mon)",
          cost: "Günstig",
          note: "Ar Ärztemangel. KP anspruchsvoll.",
        },
        {
          name: "Niedersachsen",
          delay: "Mittel (5-6 Mon)",
          exam: "Mittel (6 Mon)",
          cost: "Mittel",
          note: "Gute Klinikdichte, stabile Zeiten.",
        },
        {
          name: "Schleswig-Holstein",
          delay: "Mittel (5-6 Mon)",
          exam: "Mittel (6 Mon)",
          cost: "Mittel",
          note: "Maritim, weniger überlaufen.",
        },
        {
          name: "Hamburg",
          delay: "Mittel (5-7 Mon)",
          exam: "Mittel (6 Mon)",
          cost: "Hoch",
          note: "Dynamische Stadt, teurer Prozess.",
        },
        {
          name: "Bremen",
          delay: "Mittel (5-6 Mon)",
          exam: "Mittel (6 Mon)",
          cost: "Mittel",
          note: "Schnell da klein (Stadtstaat).",
        },
        {
          name: "Saarland",
          delay: "Mittel (5-6 Mon)",
          exam: "Mittel (6 Mon)",
          cost: "Günstig",
          note: "Klein, ruhig, individuelle Betreuung.",
        },
        {
          name: "Rheinland-Pfalz",
          delay: "Mittel (5-6 Mon)",
          exam: "Mittel (6 Mon)",
          cost: "Mittel",
          note: "Attraktive Mittelstädte, stabil.",
        },
      ],
      summary: {
        fast: {
          title: "Für Schnelligkeit",
          text: "Ostdeutschland: Sachsen, Thüringen. Kurze Wartezeiten & günstige Mieten.",
        },
        cosmo: {
          title: "International",
          text: "Berlin, Hamburg, NRW. Toll fürs Soziale, aber teurer.",
        },
        stable: {
          title: "Stabilität & Job",
          text: "Baden-Württemberg, Niedersachsen, Rheinland-Pfalz.",
        },
      },
      tips: {
        title: "Unsere Tipps",
        list: [
          "Kontaktieren Sie die Approbationsbehörden für aktuelle Zeiten.",
          "Vergleichen Sie Mieten auf Mietspiegel.de.",
          "Prüfen Sie Jobangebote auf 'Ärzteblatt' oder 'Indeed'.",
          "Fragen Sie nach Förderung durch die Agentur für Arbeit.",
        ],
      },
    },
    ar: {
      hero: {
        tag: "خطة العمل",
        title: "اختيار الولاية (Land)",
        subtitle:
          "كل ولاية لها قوانينها. اختيار المكان المناسب قد يسرع مسارك المهني 6-12 شهراً.",
      },
      share: "مشاركة",
      intro:
        "الانتقال إلى ألمانيا لا يعتمد فقط على شهادتك. اختيار الولاية التي ستقدم فيها ملفك هو قرار استراتيجي يؤثر على سرعة الإجراءات وفرص العمل.",
      criteria: [
        { icon: <Clock />, text: "مدة معالجة الملف والامتحانات" },
        { icon: <Wallet />, text: "تكاليف المعيشة (الإيجار)" },
        { icon: <Stethoscope />, text: "فرص العمل في تخصصك" },
        { icon: <AlertTriangle />, text: "درجة ازدحام السلطات" },
      ],
      tableHeaders: [
        "الولاية",
        "مدة الملف",
        "مدة FSP/KP",
        "التكلفة",
        "ملاحظات",
      ],
      lands: [
        {
          name: "بافاريا (Bayern)",
          delay: "طويلة (6-9 أشهر)",
          exam: "طويلة (9-12 شهر)",
          cost: "مرتفع",
          note: "مزدحمة جداً (ميونخ)، لكن فرص العمل كثيرة.",
        },
        {
          name: "بادن-فورتمبيرغ",
          delay: "متوسطة (5-7 أشهر)",
          exam: "متوسطة (3-6 أشهر)",
          cost: "مرتفع",
          note: "احتياج كبير، شبكة مستشفيات جيدة.",
        },
        {
          name: "شمال الراين (NRW)",
          delay: "متوسطة (6-8 أشهر)",
          exam: "متوسطة (7 أشهر)",
          cost: "متوسط",
          note: "مجتمع أجنبي كبير، مدن حضرية.",
        },
        {
          name: "هيسن (Hessen)",
          delay: "متوسطة (5-7 أشهر)",
          exam: "متغيرة (3-9 أشهر)",
          cost: "مرتفع",
          note: "فرانكفورت مركز رئيسي، الإجراءات قد تكون بطيئة.",
        },
        {
          name: "برلين",
          delay: "متوسطة (5-7 أشهر)",
          exam: "متوسطة (6 أشهر)",
          cost: "مرتفع",
          note: "مدينة عالمية، لكن البيروقراطية فوضوية.",
        },
        {
          name: "ساكسونيا (Sachsen)",
          delay: "سريعة (3-4 أشهر)",
          exam: "سريعة (3-4 أشهر)",
          cost: "منخفض",
          note: "الخيار الأفضل للسرعة. طلب عالي.",
        },
        {
          name: "تورينغن (Thüringen)",
          delay: "سريعة (3-4 أشهر)",
          exam: "سريعة (3-4 أشهر)",
          cost: "منخفض",
          note: "إجراءات بسيطة، منافسة قليلة.",
        },
        {
          name: "ساكسونيا انهالت",
          delay: "سريعة (3-4 أشهر)",
          exam: "سريعة (3-4 أشهر)",
          cost: "منخفض",
          note: "المستشفيات تبحث بنشاط عن أطباء.",
        },
        {
          name: "براندنبورغ",
          delay: "سريعة (3-4 أشهر)",
          exam: "سريعة (3-4 أشهر)",
          cost: "متوسط",
          note: "قريبة من برلين وأرخص.",
        },
        {
          name: "مكلنبورغ",
          delay: "سريعة (3-4 أشهر)",
          exam: "سريعة (3-4 أشهر)",
          cost: "منخفض",
          note: "نقص حاد في الأطباء. امتحان KP صعب.",
        },
        {
          name: "ساكسونيا السفلى",
          delay: "متوسطة (5-6 أشهر)",
          exam: "متوسطة (6 أشهر)",
          cost: "متوسط",
          note: "توزيع جيد للمستشفيات، إجراءات مستقرة.",
        },
        {
          name: "شليسفيغ هولشتاين",
          delay: "متوسطة (5-6 أشهر)",
          exam: "متوسطة (6 أشهر)",
          cost: "متوسط",
          note: "منطقة ساحلية، أقل ازدحاماً.",
        },
        {
          name: "هامبورغ",
          delay: "متوسطة (5-7 أشهر)",
          exam: "متوسطة (6 أشهر)",
          cost: "مرتفع",
          note: "مدينة ديناميكية لكن الإجراءات مكلفة.",
        },
        {
          name: "بريمن",
          delay: "متوسطة (5-6 أشهر)",
          exam: "متوسطة (6 أشهر)",
          cost: "متوسط",
          note: "سريعة لأنها ولاية صغيرة.",
        },
        {
          name: "سارلاند",
          delay: "متوسطة (5-6 أشهر)",
          exam: "متوسطة (6 أشهر)",
          cost: "منخفض",
          note: "صغيرة وهادئة، دعم فردي جيد.",
        },
        {
          name: "راينلاند بالاتينات",
          delay: "متوسطة (5-6 أشهر)",
          exam: "متوسطة (6 أشهر)",
          cost: "متوسط",
          note: "مدن متوسطة جذابة، استقرار.",
        },
      ],
      summary: {
        fast: {
          title: "للسرعة",
          text: "شرق ألمانيا: ساكسونيا، تورينغن. إجراءات سريعة وتكلفة منخفضة.",
        },
        cosmo: {
          title: "حياة عالمية",
          text: "برلين، هامبورغ، NRW. مثالية اجتماعياً لكنها أغلى.",
        },
        stable: {
          title: "الاستقرار والعمل",
          text: "بادن-فورتمبيرغ، بافاريا، ساكسونيا السفلى.",
        },
      },
      tips: {
        title: "نصائحنا",
        list: [
          "تواصل مع هيئات التعديل (Approbation) لمعرفة المواعيد الحالية.",
          "قارن أسعار الإيجار في المواقع المحلية.",
          "ابحث عن الوظائف في Indeed لتعرف أين تخصصك مطلوب.",
          "استفسر عن تمويل الكورسات من مكتب العمل.",
        ],
      },
    },
  };

  const t = content[lang] || content.fr;

  return (
    <div
      className="bg-[#e0f9fd] min-h-screen pb-0"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* --- HERO HEADER (Reduced Size: pt-8 pb-10) --- */}
      <section className="relative pt-8 pb-10 bg-medical-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Bar: Back & Share */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={handleBack}
              className={`flex items-center gap-2 text-medical-cyan font-bold hover:text-white transition-colors text-sm ${
                lang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <ArrowLeft
                size={18}
                className={lang === "ar" ? "rotate-180" : ""}
              />
              {lang === "ar" ? "عودة" : lang === "de" ? "Zurück" : "Retour"}
            </button>

            <button
              onClick={handleShare}
              className={`flex items-center gap-2 text-white/80 hover:text-medical-cyan transition-colors text-sm font-medium ${
                lang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <Share2 size={18} />
              {t.share}
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div
              className={`md:w-1/2 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 text-medical-cyan px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-white/20">
                <Map size={16} />
                {t.hero.tag}
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>
            <div className="md:w-1/2 relative flex justify-center items-center">
              <div className="absolute inset-0 bg-medical-cyan blur-3xl opacity-20 rounded-full"></div>
              {/* Ensure you have /map.png or change this source */}
              <img
                src="/map.png"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/600x400/0a192f/white?text=Germany+Map";
                }}
                alt="Germany Map"
                // CHANGED: Reduced height, added object-contain and mx-auto for centering
                className="relative rounded-2xl shadow-2xl border border-white/10 z-10 w-auto h-48 md:h-64 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- INTRO & CRITERIA (Reduced Size: py-8) --- */}
      <section className="py-8 bg-white/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-8 text-center">
            <p className="text-slate-700 text-base md:text-lg font-medium leading-relaxed max-w-4xl mx-auto">
              {t.intro}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.criteria.map((c, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-2 hover:-translate-y-1 transition-transform"
              >
                <div className="text-medical-cyan bg-medical-cyan/10 p-2 rounded-full">
                  {c.icon}
                </div>
                <span className="text-sm font-bold text-medical-navy">
                  {c.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMPARISON TABLE (Kept Original Size: py-12) --- */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-medical-navy mb-8 text-center">
            {lang === "fr"
              ? "Comparatif des Länder"
              : lang === "de"
              ? "Bundesland Vergleich"
              : "مقارنة الولايات"}
          </h2>

          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-medical-navy text-white text-sm uppercase tracking-wider">
                    {t.tableHeaders.map((h, i) => (
                      <th
                        key={i}
                        className={`p-5 font-bold ${
                          lang === "ar" ? "text-right" : "text-left"
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm md:text-base">
                  {t.lands.map((land, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="p-5 font-bold text-medical-navy flex items-center gap-2">
                        <Building2 size={16} className="text-slate-300" />
                        {land.name}
                      </td>
                      <td className="p-5">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(
                            land.delay
                          )}`}
                        >
                          {land.delay}
                        </span>
                      </td>
                      <td className="p-5">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(
                            land.exam
                          )}`}
                        >
                          {land.exam}
                        </span>
                      </td>
                      <td className="p-5">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(
                            land.cost
                          )}`}
                        >
                          {land.cost}
                        </span>
                      </td>
                      <td className="p-5 text-slate-600 italic">
                        "{land.note}"
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">
            * Source: FragdenStaat 2023.{" "}
            {lang === "fr"
              ? "Données indicatives susceptibles de changer."
              : "Daten können variieren."}
          </p>
        </div>
      </section>

      {/* --- SUMMARY & TIPS (Reduced Size: py-8) --- */}
      <section className="py-8 bg-medical-navy text-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-3 mb-3 text-emerald-300">
                <TrendingUp size={24} />
                <h3 className="font-black text-xl">{t.summary.fast.title}</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.summary.fast.text}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-3 mb-3 text-amber-300">
                <Map size={24} />
                <h3 className="font-black text-xl">{t.summary.cosmo.title}</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.summary.cosmo.text}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-3 mb-3 text-blue-300">
                <Building2 size={24} />
                <h3 className="font-black text-xl">{t.summary.stable.title}</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.summary.stable.text}
              </p>
            </div>
          </div>

          {/* Advice Checklist */}
          <div className="bg-white text-medical-navy rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
              <CheckCircle className="text-medical-cyan" /> {t.tips.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {t.tips.list.map((tip, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl"
                >
                  <div className="w-2 h-2 bg-medical-cyan rounded-full mt-2 shrink-0" />
                  <span className="font-medium text-slate-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseLand;
