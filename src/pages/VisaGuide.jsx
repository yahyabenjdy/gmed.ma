import React, { useEffect } from "react";
import {
  FileText,
  Plane,
  Landmark,
  ArrowLeft,
  Share2,
  CheckCircle,
  Clock,
  ShieldCheck,
  User,
  Upload,
  Video,
  FileCheck,
  Send,
  Check,
  Key,
  Unlock,
  AlertCircle,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// 1. IMPORT HELMET
import { Helmet } from "react-helmet-async";

const VisaGuide = ({ lang }) => {
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

  const handleShare = async () => {
    const shareData = {
      title: "GMED - Visa Guide 16d",
      text: "Guide complet pour le Visa 16d, les documents et le Compte Bloqué.",
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

  const content = {
    fr: {
      hero: {
        tag: "Administration",
        title: "Documents Indispensables & Visa D (16d)",
        subtitle:
          "Le guide étape par étape pour la constitution du dossier, le visa 16d et le Compte Bloqué (Sperrkonto).",
      },
      share: "Partager",
      sections: {
        docs: {
          title: "Liste des documents généralement requis",
          desc: "Avant même de penser à passer tes examens linguistiques ou à décrocher un poste, il te faudra constituer un dossier administratif solide. Les exigences varient selon le Land où tu postules (Landesprüfungsamt).",
          note: "Tous ces documents doivent généralement être traduits en allemand par un traducteur assermenté et légalisés.",
          list: [
            "Diplôme de médecine",
            "Relevés de notes officiels (détail des cours et stages cliniques)",
            "Attestation de stage hospitalier (internat / externat)",
            "Volume horaire de formation médicale",
            "Certificat de bonne conduite professionnelle (Ordre des Médecins)",
            "Attestations d’autorisation d’exercer (Ordre des Médecins)",
            "Attestation de réussite",
            "Pièce d’identité (passeport valide)",
            "Acte de naissance",
            "CV détaillé (en allemand, format tabulaire)",
            "Lettre de motivation (Anschreiben)",
            "Preuve de ton niveau d’allemand (certificat B2)",
          ],
        },
        visa: {
          title: "Faire la Demande de Visa D (16d)",
          desc: "Le visa national (Visa D, section 16d) te permet de préparer ton Approbation en Allemagne. Il te sera demandé un Sperrkonto et une inscription à des cours de FSP d'au moins 12 semaines.",
          timeline: "Prévois 8 à 12 semaines minimum",
          reqs: [
            "Passeport valide (validité > 6 mois)",
            "Formulaire de demande de visa",
            "Photos biométriques (2 à 3)",
            "Lettre d’acceptation (Bescheid / Defizitbescheid)",
            "Preuve de moyens financiers (Compte Bloqué)",
            "Preuve de logement en Allemagne (Réservation/Bail)",
            "Preuve de compétences linguistiques (B2 général)",
            "Assurance maladie (voyage + santé sur place)",
          ],
        },
        bank: {
          title: "Étapes pour ouvrir un Compte Bloqué (Sperrkonto)",
          intro:
            "Pour obtenir ton visa national, tu dois prouver que tu peux subvenir à tes besoins pendant au moins 12 mois. En 2025, le montant mensuel est fixé à 1.092 €, soit 13.104 € à bloquer pour un an. Les deux options les plus populaires : Fintiba et Expatrio.",
          steps: [
            {
              icon: <User size={18} />,
              title: "1/ S’inscrire en ligne",
              text: "Crée ton compte sur Fintiba ou Expatrio avec ton nom complet, email et mot de passe sécurisé.",
            },
            {
              icon: <Upload size={18} />,
              title: "2/ Remplir les infos personnelles",
              text: "Adresse, téléphone, nationalité, type de visa. Télécharge ton passeport scanné en couleur.",
            },
            {
              icon: <Video size={18} />,
              title: "3/ Vérifier ton identité",
              text: "Vérification automatisée en ligne (upload du passeport, selfie vidéo ou signature électronique).",
            },
            {
              icon: <FileCheck size={18} />,
              title: "4/ Recevoir le contrat",
              text: "Ce document précise ton IBAN, le montant à transférer et la mention du blocage mensuel.",
            },
            {
              icon: <Send size={18} />,
              title: "5/ Faire ton virement international",
              text: "Virement du montant total (13.104€ + frais) depuis ton compte dans ton pays d'origine.",
            },
            {
              icon: <Check size={18} />,
              title: "6/ Réception de la confirmation",
              text: "Dès réception de l'argent (3-5 jours), tu reçois ton certificat officiel à présenter à l’ambassade.",
            },
            {
              icon: <Unlock size={18} />,
              title: "7/ Arrivé en Allemagne : débloquer",
              text: "Une fois sur place, ouvre un compte bancaire normal (Girokonto). Fintiba/Expatrio transfère 1.092 € sur ce compte chaque mois.",
            },
          ],
        },
      },
      cta: "Contacter un Conseiller pour assistance Visa",
    },
    de: {
      hero: {
        tag: "Verwaltung",
        title: "Wichtige Dokumente & Visum D (16d)",
        subtitle:
          "Der Schritt-für-Schritt-Guide für die Akte, das Visum 16d und das Sperrkonto.",
      },
      share: "Teilen",
      sections: {
        docs: {
          title: "Liste der erforderlichen Dokumente",
          desc: "Bevor Sie an Sprachprüfungen denken, müssen Sie eine solide Verwaltungsakte erstellen. Die Anforderungen variieren je nach Bundesland.",
          note: "Alle Dokumente müssen in der Regel von einem vereidigten Übersetzer ins Deutsche übersetzt und beglaubigt werden.",
          list: [
            "Medizindiplom",
            "Offizielle Notenübersichten (Stunden & klinische Praktika)",
            "Praktikumsnachweise (Internat / Externat)",
            "Stundenumfang der medizinischen Ausbildung",
            "Unbedenklichkeitsbescheinigung (Good Standing)",
            "Berufserlaubnis (Heimatland)",
            "Erfolgsbescheinigung",
            "Reisepass & Geburtsurkunde",
            "Detaillierter Lebenslauf (Deutsch, tabellarisch)",
            "Motivationsschreiben",
            "B2-Sprachzertifikat",
          ],
        },
        visa: {
          title: "Visumantrag D (16d)",
          desc: "Das nationale Visum (16d) ermöglicht die Vorbereitung auf die Approbation. Erforderlich sind ein Sperrkonto und eine Anmeldung zu FSP-Kursen.",
          timeline: "Planen Sie 8 bis 12 Wochen ein",
          reqs: [
            "Gültiger Reisepass (> 6 Monate)",
            "Visumantragsformular",
            "Biometrische Fotos (2-3)",
            "Defizitbescheid",
            "Finanzierungsnachweis (Sperrkonto)",
            "Wohnraumnachweis in Deutschland",
            "Sprachnachweis (B2)",
            "Krankenversicherung",
          ],
        },
        bank: {
          title: "Schritte zur Eröffnung eines Sperrkontos",
          intro:
            "Für das Visum müssen Sie 13.104 € (1.092 €/Monat) nachweisen. Beliebte Optionen: Fintiba und Expatrio.",
          steps: [
            {
              icon: <User size={18} />,
              title: "1/ Online-Registrierung",
              text: "Erstellen Sie Ihr Konto bei Fintiba oder Expatrio.",
            },
            {
              icon: <Upload size={18} />,
              title: "2/ Persönliche Daten",
              text: "Adresse, Visumtyp. Reisepass hochladen.",
            },
            {
              icon: <Video size={18} />,
              title: "3/ Identitätsprüfung",
              text: "Video-Ident oder e-Signatur.",
            },
            {
              icon: <FileCheck size={18} />,
              title: "4/ Vertrag erhalten",
              text: "Dokument mit Ihrer persönlichen IBAN.",
            },
            {
              icon: <Send size={18} />,
              title: "5/ Internationale Überweisung",
              text: "Überweisung des Gesamtbetrags (13.104 €).",
            },
            {
              icon: <Check size={18} />,
              title: "6/ Bestätigung erhalten",
              text: "Offizielles Zertifikat für die Botschaft (3-5 Tage).",
            },
            {
              icon: <Unlock size={18} />,
              title: "7/ In Deutschland: Freischaltung",
              text: "Girokonto eröffnen für monatliche Auszahlungen.",
            },
          ],
        },
      },
      cta: "Visa-Berater kontaktieren",
    },
    ar: {
      hero: {
        tag: "الإجراءات الإدارية",
        title: "الوثائق الضرورية وتأشيرة D (16d)",
        subtitle:
          "دليلك خطوة بخطوة لتجهيز الملف، فيزا 16d والحساب البنكي المغلق (Sperrkonto).",
      },
      share: "مشاركة",
      sections: {
        docs: {
          title: "قائمة الوثائق المطلوبة عادةً",
          desc: "قبل التفكير في الامتحانات، يجب تجهيز ملف إداري قوي لسلطات التعديل (Landesprüfungsamt).",
          note: "يجب ترجمة جميع هذه الوثائق إلى الألمانية وتصديقها.",
          list: [
            "دبلوم الطب",
            "كشوف النقاط الرسمية (تفاصيل الساعات والتربصات)",
            "شهادات التربص الاستشفائي (Internat / Externat)",
            "الحجم الساعي للتكوين الطبي",
            "شهادة حسن السيرة المهنية (من العمادة)",
            "رخصة مزاولة المهنة",
            "شهادة النجاح",
            "جواز سفر ساري المفعول & شهادة ميلاد",
            "سيرة ذاتية مفصلة (بالألمانية)",
            "رسالة تحفيزية (Anschreiben)",
            "شهادة اللغة الألمانية (B2)",
          ],
        },
        visa: {
          title: "تقديم طلب تأشيرة D (16d)",
          desc: "تسمح لك هذه التأشيرة بالتحضير للمعادلة في ألمانيا. يُطلب حساب مغلق وتسجيل في دورات لغة.",
          timeline: "توقع 8 إلى 12 أسبوعاً على الأقل",
          reqs: [
            "جواز سفر ساري (> 6 أشهر)",
            "استمارة طلب التأشيرة",
            "صور بيومترية (2 إلى 3)",
            "رسالة القبول (Defizitbescheid)",
            "إثبات القدرة المالية (حساب مغلق)",
            "إثبات السكن في ألمانيا",
            "إثبات الكفاءة اللغوية (B2)",
            "تأمين صحي (سفر + محلي)",
          ],
        },
        bank: {
          title: "خطوات فتح حساب مغلق (Sperrkonto)",
          intro:
            "للحصول على التأشيرة، يجب إثبات مبلغ 13.104 يورو (1.092 يورو شهرياً). الخيارات الأفضل: Fintiba و Expatrio.",
          steps: [
            {
              icon: <User size={18} />,
              title: "1/ التسجيل عبر الإنترنت",
              text: "أنشئ حسابك على Fintiba أو Expatrio.",
            },
            {
              icon: <Upload size={18} />,
              title: "2/ ملء البيانات الشخصية",
              text: "العنوان، الهاتف، نوع الفيزا. تحميل الجواز.",
            },
            {
              icon: <Video size={18} />,
              title: "3/ التحقق من الهوية",
              text: "تحقق آلي عبر الفيديو أو توقيع إلكتروني.",
            },
            {
              icon: <FileCheck size={18} />,
              title: "4/ استلام العقد",
              text: "وثيقة تحتوي على رقم IBAN الخاص بك والمبلغ.",
            },
            {
              icon: <Send size={18} />,
              title: "5/ التحويل الدولي",
              text: "تحويل المبلغ الإجمالي (13.104 يورو + الرسوم).",
            },
            {
              icon: <Check size={18} />,
              title: "6/ استلام التأكيد",
              text: "شهادة رسمية للسفارة (بعد 3-5 أيام من التحويل).",
            },
            {
              icon: <Unlock size={18} />,
              title: "7/ الوصول لألمانيا: فك التجميد",
              text: "فتح حساب جاري لاستلام المبلغ الشهري.",
            },
          ],
        },
      },
      cta: "تواصل مع مستشار التأشيرة",
    },
  };

  const t = content[lang] || content.fr;

  // 2. SEO Content
  const seo = {
    fr: {
      title: "Visa 16d & Compte Bloqué - Guide Complet pour l'Allemagne",
      desc: "Tout savoir sur le Visa 16d (Reconnaissance), le Compte Bloqué (Sperrkonto) et la liste des documents pour médecins et infirmiers.",
    },
    de: {
      title: "Visum 16d & Sperrkonto - Der Guide für medizinische Fachkräfte",
      desc: "Schritt-für-Schritt-Anleitung für das Visum 16d, Sperrkonto-Eröffnung (Fintiba/Expatrio) und Dokumentenliste.",
    },
    ar: {
      title: "دليل تأشيرة 16d والحساب البنكي المغلق في ألمانيا",
      desc: "الدليل الشامل للأطباء والممرضين: الوثائق المطلوبة، فيزا 16d، وخطوات فتح الحساب المغلق (Sperrkonto).",
    },
  };

  const tSeo = seo[lang] || seo.fr;

  // Helper for tricolors
  const getFlagColors = (index) => {
    if (index % 3 === 0) return "text-black";
    if (index % 3 === 1) return "text-red-600";
    return "text-yellow-500";
  };

  // Helper for border colors
  const getBorderColors = (index) => {
    if (index % 3 === 0) return "border-black";
    if (index % 3 === 1) return "border-red-600";
    return "border-yellow-500";
  };

  return (
    <div
      className="bg-[#e0f9fd] min-h-screen pb-0"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* 3. SEO BLOCK */}
      <Helmet>
        <title>{tSeo.title}</title>
        <meta name="description" content={tSeo.desc} />
        <link rel="canonical" href="https://gmed.ma/visa-guide" />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-10 pb-12 bg-medical-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Actions */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={handleBack}
              className={`flex items-center gap-2 text-medical-cyan font-bold hover:text-white transition-colors text-sm group ${
                lang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <ArrowLeft
                size={18}
                className={lang === "ar" ? "rotate-180" : ""}
              />
              <span className="relative">
                {lang === "ar" ? "عودة" : lang === "de" ? "Zurück" : "Retour"}
                {/* 1. GERMAN ACCENT: Gold Underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
              </span>
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

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div
              className={`md:w-1/2 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              {/* 2. GERMAN ACCENT: Gold Tag */}
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-yellow-500/20">
                <FileText size={14} />
                {t.hero.tag}
              </div>
              <h1 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-base text-slate-300 leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Smaller Image */}
            <div className="md:w-1/2 relative flex justify-center items-center">
              <div className="absolute inset-0 bg-medical-cyan blur-3xl opacity-20 rounded-full"></div>
              <img
                src="/visa.png"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/800x530/0a192f/white?text=Visa+Docs";
                }}
                alt="Visa Documents"
                className="relative rounded-2xl shadow-2xl border border-white/10 z-10 w-auto h-40 md:h-52 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: DOCUMENTS --- */}
      <section className="py-12 bg-white/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div
              className={`flex items-start gap-6 mb-8 ${
                lang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <div className="bg-medical-cyan/10 p-3 rounded-2xl text-medical-cyan">
                <ShieldCheck size={32} />
              </div>
              <div className={lang === "ar" ? "text-right" : "text-left"}>
                {/* 3. GERMAN ACCENT: Gold Underline on Title */}
                <h2 className="text-2xl font-black text-medical-navy mb-2 relative inline-block">
                  {t.sections.docs.title}
                  <div className="absolute -bottom-1 left-0 w-1/4 h-1 bg-yellow-500 rounded-full" />
                </h2>
                <p className="text-base text-slate-600 mb-3">
                  {t.sections.docs.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-xs text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg font-medium border border-amber-100">
                  <AlertCircle size={14} />
                  {t.sections.docs.note}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
              {t.sections.docs.list.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-3 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition-all border border-slate-50 hover:border-slate-100 ${
                    lang === "ar" ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  {/* 4. GERMAN ACCENT: Checkmark cycles Black/Red/Gold */}
                  <CheckCircle
                    size={18}
                    className={`${getFlagColors(i)} shrink-0 mt-0.5`}
                  />
                  <span className="text-sm font-bold text-slate-700 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: VISA 16D --- */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Info Card */}
            <div className="bg-medical-navy text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-40 h-40 bg-medical-cyan/20 rounded-full blur-3xl -mr-10 -mt-10"></div>

              <Plane size={40} className="text-medical-cyan mb-4" />
              <h2 className="text-2xl font-black mb-3">
                {t.sections.visa.title}
              </h2>
              <p className="text-medical-light/80 mb-6 leading-relaxed text-base">
                {t.sections.visa.desc}
              </p>

              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10 w-fit">
                {/* 5. GERMAN ACCENT: Clock is Gold */}
                <Clock className="text-yellow-500" size={20} />
                <span className="font-bold text-base">
                  {t.sections.visa.timeline}
                </span>
              </div>
            </div>

            {/* Checklist Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-medical-navy mb-6 border-b border-slate-100 pb-3">
                Documents clés pour le Visa 16d
              </h3>
              <ul className="space-y-4">
                {t.sections.visa.reqs.map((req, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 ${
                      lang === "ar" ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      {/* 6. GERMAN ACCENT: Numbers cycle colors */}
                      <span
                        className={`text-xs font-black ${getFlagColors(i)}`}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <span className="text-slate-700 text-base font-medium">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: SPERRKONTO --- */}
      <section className="py-12 bg-medical-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-medical-cyan/20 text-medical-cyan px-3 py-1 rounded-full text-xs font-bold mb-4 border border-medical-cyan/30">
              <Landmark size={14} /> 2025 Update
            </div>
            <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
              {t.sections.bank.title}
            </h2>
            <p className="text-medical-light/80 max-w-2xl mx-auto text-base leading-relaxed">
              {t.sections.bank.intro}
            </p>
          </div>

          <div className="relative pl-2 md:pl-8">
            {/* 7. GERMAN ACCENT: Gradient Chain Line */}
            <div
              className={`absolute top-4 bottom-4 w-0.5 bg-gradient-to-b from-black via-red-600 to-yellow-500 ${
                lang === "ar" ? "right-5 md:right-10" : "left-5 md:left-10"
              }`}
            ></div>

            <div className="space-y-6">
              {t.sections.bank.steps.map((step, i) => (
                <div
                  key={i}
                  className={`relative flex items-start ${
                    lang === "ar" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* 8. GERMAN ACCENT: Border Color Cycles */}
                  <div
                    className={`absolute top-0 w-10 h-10 bg-medical-navy border-2 rounded-full flex items-center justify-center z-10 ${getBorderColors(
                      i
                    )} ${
                      lang === "ar" ? "right-0 md:right-5" : "left-0 md:left-5"
                    }`}
                  >
                    <div className="text-medical-cyan">
                      {React.cloneElement(step.icon, { size: 18 })}
                    </div>
                  </div>

                  {/* Content Box */}
                  <div
                    className={`w-full ${
                      lang === "ar" ? "mr-14 md:mr-20" : "ml-14 md:ml-20"
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                      <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2">
                        {step.title}
                      </h3>
                      <p className="text-medical-light/70 text-xs leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Bottom */}
          <div className="mt-16 text-center">
            <Link
              to="/#contact"
              // 9. GERMAN ACCENT: Button Black -> Red hover
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-red-600 transition-colors shadow-lg shadow-black/20 text-base"
            >
              {t.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisaGuide;
