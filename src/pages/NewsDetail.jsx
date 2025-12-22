import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
// 1. Import Helmet for SEO
import { Helmet } from "react-helmet-async";

const NewsDetail = ({ lang }) => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = {
    fr: [
      {
        id: 1,
        date: "15 Mai 2024",
        title: "Nouvelles règles de visa pour les professionnels de santé",
        img: "/visa-news.png",
        content: `Le gouvernement allemand a mis en place en 2024 une réforme historique concernant l'immigration des travailleurs qualifiés (Fachkräfteeinwanderungsgesetz). Pour les médecins et infirmiers marocains, c'est une opportunité sans précédent.\n\nLa principale nouveauté est la "Chancenkarte" (Carte d'opportunité). Ce système à points permet aux candidats d'entrer en Allemagne pour chercher un emploi pendant un an, à condition d'avoir un diplôme reconnu et des bases en allemand (niveau A1/A2 minimum). Cela supprime la barrière de devoir trouver un contrat de travail depuis le Maroc avant de partir.\n\nDe plus, la procédure de reconnaissance des diplômes (Approbation) a été accélérée pour les dossiers complets. Les autorités régionales (Landesprüfungsamt) sont désormais tenues de traiter les demandes plus rapidement, réduisant les délais d'attente qui pouvaient auparavant dépasser 12 mois.`,
      },
      {
        id: 2,
        date: "10 Mai 2024",
        title: "Comment réussir votre examen FSP du premier coup",
        img: "/fsp-prep.png",
        content: `L'examen de langue spécialisée (Fachsprachenprüfung - FSP) est souvent l'étape la plus redoutée par les médecins étrangers. Contrairement au certificat B2 général, le FSP teste votre capacité à communiquer dans un environnement clinique réel.\n\nL'examen se déroule en trois parties strictes de 20 minutes chacune. La première est l'anamnèse (discussion avec un acteur jouant le patient), où vous devez poser les bonnes questions tout en étant empathique. La deuxième est la documentation écrite (Arztbrief), qui doit être rédigée sans fautes en un temps record. La troisième est la présentation du patient à un médecin-chef (Arzt-Arzt-Gespräch).\n\nChez GMED Center, nous avons constaté que 80% des échecs sont dus à la partie écrite ou à une mauvaise gestion du stress, et non à un manque de vocabulaire. C'est pourquoi notre préparation inclut des simulations en temps réel.`,
      },
      {
        id: 3,
        date: "05 Mai 2024",
        title: "Trouver un logement en Allemagne : Guide Pratique",
        img: "/logement.png",
        content: `Arriver en Allemagne est une chose, mais s'y loger en est une autre. Le marché immobilier allemand, surtout dans les grandes villes comme Berlin, Munich ou Hambourg, est extrêmement tendu. Il est crucial de comprendre la différence entre "Kaltmiete" (loyer hors charges) et "Warmmiete" (loyer charges comprises).\n\nPour un nouvel arrivant sans historique de crédit (Schufa), il est souvent difficile de louer un appartement seul. Nous conseillons fortement de commencer par une "WG" (Wohngemeinschaft - colocation) ou un appartement meublé temporaire (Wohnen auf Zeit). Cela vous permet d'obtenir votre "Anmeldung" (enregistrement à la mairie), document indispensable pour ouvrir un compte bancaire et signer votre contrat de travail.\n\nPrévoyez toujours une caution (Kaution) équivalente à 3 mois de loyer froid ("Kaltmiete"), qui doit être versée au moment de la signature du bail.`,
      },
    ],
    de: {
      id: 1, // Fallback for specific text labels if needed
    },
    de_articles: [
      {
        id: 1,
        date: "15. Mai 2024",
        title: "Neue Visaregeln für Fachkräfte im Gesundheitswesen",
        img: "/visa-news.png",
        content: `Die Bundesregierung hat 2024 eine historische Reform des Fachkräfteeinwanderungsgesetzes umgesetzt. Für marokkanische Ärzte und Pflegekräfte ist dies eine beispiellose Chance.\n\nDie wichtigste Neuerung ist die "Chancenkarte". Dieses Punktesystem ermöglicht es Kandidaten, für ein Jahr nach Deutschland zu kommen, um Arbeit zu suchen, vorausgesetzt, sie verfügen über einen anerkannten Abschluss und Grundkenntnisse der deutschen Sprache (mindestens A1/A2). Dies beseitigt die Hürde, bereits von Marokko aus einen Arbeitsvertrag finden zu müssen.\n\nZudem wurde das Anerkennungsverfahren (Approbation) für vollständige Unterlagen beschleunigt. Die Landesprüfungsämter sind nun angehalten, Anträge schneller zu bearbeiten, was die Wartezeiten, die früher oft über 12 Monate lagen, deutlich verkürzt.`,
      },
      {
        id: 2,
        date: "10. Mai 2024",
        title: "Wie Sie die Fachsprachenprüfung (FSP) beim ersten Mal bestehen",
        img: "/fsp-prep.png",
        content: `Die Fachsprachenprüfung (FSP) ist oft die am meisten gefürchtete Hürde für ausländische Ärzte. Im Gegensatz zum allgemeinen B2-Zertifikat testet die FSP Ihre Fähigkeit, in einem echten klinischen Umfeld zu kommunizieren.\n\nDie Prüfung besteht aus drei strikten Teilen von je 20 Minuten. Der erste ist die Anamnese (Gespräch mit einem Schauspieler-Patienten). Der zweite ist die schriftliche Dokumentation (Arztbrief), die in Rekordzeit fehlerfrei verfasst werden muss. Der dritte Teil ist die Patientenvorstellung bei einem Chefarzt (Arzt-Arzt-Gespräch).\n\nIm GMED Center haben wir festgestellt, dass 80% der Misserfolge auf den schriftlichen Teil oder schlechtes Stressmanagement zurückzuführen sind, nicht auf fehlendes Vokabular. Deshalb beinhaltet unsere Vorbereitung Echtzeit-Simulationen.`,
      },
      {
        id: 3,
        date: "05. Mai 2024",
        title: "Wohnungssuche in Deutschland: Ein praktischer Leitfaden",
        img: "/logement.png",
        content: `In Deutschland anzukommen ist das eine, eine Unterkunft zu finden das andere. Der deutsche Immobilienmarkt, besonders in Großstädten wie Berlin, München oder Hamburg, ist extrem angespannt. Es ist entscheidend, den Unterschied zwischen "Kaltmiete" und "Warmmiete" zu verstehen.\n\nFür Neuankömmlinge ohne Kredithistorie (Schufa) ist es oft schwierig, allein eine Wohnung zu mieten. Wir empfehlen dringend, mit einer "WG" (Wohngemeinschaft) oder einer möblierten Wohnung auf Zeit ("Wohnen auf Zeit") zu beginnen. Dies ermöglicht es Ihnen, Ihre "Anmeldung" beim Bürgeramt zu erhalten – ein Dokument, das für die Eröffnung eines Bankkontos unerlässlich ist.\n\nPlanen Sie immer eine Kaution in Höhe von 3 Kaltmieten ein, die bei Vertragsunterzeichnung fällig wird.`,
      },
    ],
    ar: [
      {
        id: 1,
        date: "15 مايو 2024",
        title: "قواعد التأشيرة الجديدة للمهنيين الصحيين",
        img: "/visa-news.png",
        content: `نفذت الحكومة الألمانية في عام 2024 إصلاحاً تاريخياً فيما يتعلق بقانون هجرة العمالة الماهرة (Fachkräfteeinwanderungsgesetz). بالنسبة للأطباء والممرضين المغاربة، تعد هذه فرصة غير مسبوقة.\n\nالجديد الرئيسي هو "بطاقة الفرصة" (Chancenkarte). يسمح هذا النظام القائم على النقاط للمرشحين بدخول ألمانيا للبحث عن عمل لمدة عام، بشرط الحصول على دبلوم معترف به وأساسيات في اللغة الألمانية (مستوى A1/A2 كحد أدنى). هذا يزيل عقبة ضرورة العثور على عقد عمل من المغرب قبل السفر.\n\nبالإضافة إلى ذلك، تم تسريع إجراءات الاعتراف بالشهادات (Approbation) للملفات المكتملة. أصبحت السلطات الإقليمية (Landesprüfungsamt) ملزمة الآن بمعالجة الطلبات بشكل أسرع، مما يقلل من أوقات الانتظار التي كانت تتجاوز في السابق 12 شهراً.`,
      },
      {
        id: 2,
        date: "10 مايو 2024",
        title: "كيف تنجح في امتحان FSP من المحاولة الأولى",
        img: "/fsp-prep.png",
        content: `غالباً ما يكون امتحان اللغة الطبية المتخصص (FSP) الخطوة الأكثر رعباً للأطباء الأجانب. على عكس شهادة B2 العامة، يختبر FSP قدرتك على التواصل في بيئة سريرية حقيقية.\n\nيتكون الامتحان من ثلاثة أجزاء صارمة مدة كل منها 20 دقيقة. الأول هو أخذ التاريخ المرضي (محادثة مع ممثل يلعب دور المريض). الثاني هو التوثيق الكتابي (تقرير الطبيب)، الذي يجب كتابته بدون أخطاء في وقت قياسي. الثالث هو تقديم المريض لطبيب كبير (محادثة طبيب لطبيب).\n\nفي مركز GMED، وجدنا أن 80٪ من حالات الفشل ترجع إلى الجزء الكتابي أو سوء إدارة التوتر، وليس نقص المفردات. لهذا السبب يتضمن تحضيرنا محاكاة في الوقت الفعلي.`,
      },
      {
        id: 3,
        date: "05 مايو 2024",
        title: "البحث عن سكن في ألمانيا: دليل عملي",
        img: "/logement.png",
        content: `الوصول إلى ألمانيا شيء، والعثور على سكن شيء آخر. سوق العقارات الألماني، خاصة في المدن الكبرى مثل برلين أو ميونيخ أو هامبورغ، يشهد ضغطاً شديداً. من الضروري فهم الفرق بين "الإيجار البارد" (Kaltmiete) و"الإيجار الدافئ" (Warmmiete).\n\nبالنسبة للوافد الجديد الذي ليس لديه تاريخ ائتماني (Schufa)، غالباً ما يكون من الصعب استئجار شقة بمفرده. نوصي بشدة بالبدء بـ "السكن المشترك" (WG) أو شقة مفروشة مؤقتة. هذا يسمح لك بالحصول على "شهادة التسجيل" (Anmeldung)، وهي وثيقة ضرورية لفتح حساب بنكي وتوقيع عقد العمل.\n\nخطط دائماً لدفع تأمين (Kaution) يعادل 3 أشهر من الإيجار البارد، والذي يجب دفعه عند توقيع العقد.`,
      },
    ],
  };

  // Logic to handle the 'de' structure safely
  let articleData;
  if (lang === "de") articleData = articles.de_articles;
  else if (lang === "ar") articleData = articles.ar;
  else articleData = articles.fr;

  const article = articleData.find((a) => a.id === parseInt(id));

  // Translation helpers for UI
  const uiText = {
    fr: {
      back: "Retour aux articles",
      author: "Expertise GMED",
      readTime: "5 min de lecture",
      notFound: "Article introuvable.",
    },
    de: {
      back: "Zurück zu den Artikeln",
      author: "GMED Expertise",
      readTime: "5 Min. Lesezeit",
      notFound: "Artikel nicht gefunden.",
    },
    ar: {
      back: "العودة للمقالات",
      author: "خبرة GMED",
      readTime: "5 دقائق قراءة",
      notFound: "المقال غير موجود.",
    },
  };
  const t = uiText[lang] || uiText.fr;

  if (!article)
    return (
      <div className="pt-40 text-center py-20 text-slate-500">{t.notFound}</div>
    );

  return (
    // 2. SEO Helmet Block
    <>
      <Helmet>
        <title>{article.title}</title>
        {/* Uses the first 160 characters of content as description */}
        <meta
          name="description"
          content={article.content.substring(0, 160) + "..."}
        />
        <link rel="canonical" href={`https://gmed.ma/news/${id}`} />
      </Helmet>

      {/* BACKGROUND: Exact #caf0f8 (30% Blue) */}
      <div className="pt-28 pb-24 min-h-screen bg-[#caf0f8]">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Link */}
          <Link
            to="/news"
            className={`inline-flex items-center gap-2 text-[#0077b6] font-bold mb-8 hover:-translate-x-2 transition-transform ${
              lang === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            <ArrowLeft
              size={20}
              className={lang === "ar" ? "rotate-180" : ""}
            />
            <span className="text-slate-600 hover:text-medical-cyan transition-colors">
              {t.back}
            </span>
          </Link>

          {/* Article Card */}
          <article className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-white/60">
            <div className="relative h-[350px] md:h-[500px]">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient to make text over image readable if we had any */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div
              className={`p-8 md:p-12 ${
                lang === "ar" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`flex flex-wrap gap-6 text-slate-500 text-sm mb-8 pb-6 border-b border-slate-100 ${
                  lang === "ar" ? "flex-row-reverse" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-medical-cyan" />{" "}
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-medical-cyan" /> {t.author}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-medical-cyan" /> {t.readTime}
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-medical-navy mb-8 leading-tight">
                {article.title}
              </h1>

              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
                {article.content.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="mb-6 first-letter:text-3xl first-letter:font-bold first-letter:text-medical-cyan"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
