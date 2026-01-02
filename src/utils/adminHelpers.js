export const cleanText = (text) =>
  text ? String(text).split("(")[0].trim() : "";

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
  if (s.includes("Nouveau")) return "bg-blue-100 text-blue-800 border-blue-200";
  if (s.includes("Inscrit"))
    return "bg-emerald-100 text-emerald-800 border-emerald-200";
  if (s.includes("Perdu"))
    return "bg-slate-200 text-slate-600 border-slate-300";
  if (s.includes("Appel"))
    return "bg-yellow-100 text-yellow-800 border-yellow-300";
  return "bg-slate-100 text-slate-600 border-slate-200";
};

export const getLevelStyle = (l) => {
  if (!l) return "bg-slate-100 text-slate-600";
  if (l.includes("A1")) return "bg-green-100 text-green-700 border-green-200";
  if (l.includes("A2")) return "bg-green-200 text-green-800 border-green-300";
  if (l.includes("B1")) return "bg-blue-100 text-blue-700 border-blue-200";
  if (l.includes("B2")) return "bg-blue-200 text-blue-900 border-blue-300";
  if (l.includes("C1"))
    return "bg-red-50 text-[#800020] border-[#800020]/20 font-bold";
  return "bg-slate-100 text-slate-600";
};

export const getCityStyle = (c) =>
  "bg-slate-100 text-slate-500 border-slate-200";

export const getAdminColor = (name) => {
  if (!name) return "bg-slate-100 text-slate-500 border-slate-200";
  const colors = [
    "bg-blue-100 text-blue-700",
    "bg-purple-100 text-purple-700",
    "bg-orange-100 text-orange-700",
    "bg-cyan-100 text-cyan-700",
  ];
  return colors[name.length % colors.length] + " border-transparent";
};
