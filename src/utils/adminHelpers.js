export const cleanText = (text) => {
  if (!text) return "";
  return String(text).split("(")[0].trim();
};

export const crmStatuses = [
  "Nouveau prospect",
  "Appel 1",
  "Appel 2",
  "Appel 3",
  "Intéressé",
  "Proposition envoyée",
  "Hésitant",
  "Relance paiement 1",
  "Relance paiement 2",
  "Inscrit",
  "Futur client",
  "Perdu",
];

export const getStatusStyle = (status) => {
  const s = status || "Nouveau prospect";
  switch (s) {
    case "Nouveau prospect":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "Appel 1":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "Appel 2":
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    case "Appel 3":
      return "bg-amber-100 text-amber-800 border-amber-300";
    case "Intéressé":
      return "bg-indigo-100 text-indigo-800 border-indigo-200";
    case "Proposition envoyée":
      return "bg-purple-100 text-purple-800 border-purple-200";
    case "Hésitant":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "Relance paiement 1":
      return "bg-rose-100 text-rose-700 border-rose-200";
    case "Relance paiement 2":
      return "bg-rose-200 text-rose-800 border-rose-300";
    case "Inscrit":
      return "bg-emerald-100 text-emerald-800 border-emerald-200";
    case "Futur client":
      return "bg-cyan-100 text-cyan-800 border-cyan-200";
    case "Perdu":
      return "bg-slate-200 text-slate-600 border-slate-300";
    default:
      return "bg-slate-100 text-slate-600 border-slate-200";
  }
};

export const getLevelStyle = (levelStr) => {
  if (!levelStr) return "bg-slate-100 text-slate-600 border-slate-200";
  const lvl = String(levelStr).substring(0, 2).toUpperCase();
  switch (lvl) {
    case "A1":
      return "bg-green-100 text-green-700 border-green-200";
    case "A2":
      return "bg-green-200 text-green-800 border-green-300";
    case "B1":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "B2":
      return "bg-blue-200 text-blue-900 border-blue-300";
    case "C1":
      return "bg-red-50 text-[#800020] border-[#800020]/20 font-bold";
    default:
      return "bg-slate-100 text-slate-600 border-slate-200";
  }
};

export const getCityStyle = (city) => {
  if (!city) return "bg-slate-100 text-slate-500 border-slate-200";
  const map = {
    Rabat: "bg-blue-100 text-blue-700 border-blue-200",
    Salé: "bg-sky-100 text-sky-700 border-sky-200",
    Témara: "bg-teal-100 text-teal-700 border-teal-200",
    Agadir: "bg-orange-100 text-orange-600 border-orange-200",
    Casablanca: "bg-white text-slate-800 border-slate-300",
    // ... add others if needed
  };
  return map[city] || "bg-slate-100 text-slate-500 border-slate-200";
};

export const getAdminColor = (name) => {
  if (!name) return "bg-slate-100 text-slate-500 border-slate-200";
  const colors = [
    "bg-blue-100 text-blue-700 border-blue-200",
    "bg-purple-100 text-purple-700 border-purple-200",
    "bg-orange-100 text-orange-700 border-orange-200",
    "bg-pink-100 text-pink-700 border-pink-200",
    "bg-cyan-100 text-cyan-700 border-cyan-200",
    "bg-emerald-100 text-emerald-700 border-emerald-200",
    "bg-violet-100 text-violet-700 border-violet-200",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};
