import React from "react";
import {
  Search,
  Filter,
  BookOpen,
  Calendar,
  RefreshCw,
  Download,
  MapPin,
  User,
  ChevronDown,
} from "lucide-react";

// Full list of Moroccan cities for the filter
const MOROCCAN_CITIES = [
  "Agadir",
  "Al Hoceima",
  "Beni Mellal",
  "Berkane",
  "Berrechid",
  "Casablanca",
  "Chefchaouen",
  "Dakhla",
  "El Jadida",
  "Errachidia",
  "Essaouira",
  "Fès",
  "Guelmim",
  "Ifrane",
  "Kénitra",
  "Khemisset",
  "Khouribga",
  "Laâyoune",
  "Larache",
  "Marrakech",
  "Meknès",
  "Mohammedia",
  "Nador",
  "Ouarzazate",
  "Oujda",
  "Rabat",
  "Safi",
  "Salé",
  "Sefrou",
  "Settat",
  "Sidi Kacem",
  "Sidi Slimane",
  "Skhirate",
  "Tanger",
  "Tan-Tan",
  "Taroudant",
  "Taza",
  "Témara",
  "Tétouan",
  "Tiznit",
].sort();

const RegistrationsToolbar = ({
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
  admins,
  fetchData,
  downloadExcel,
  loading,
}) => {
  // Helper Component with DYNAMIC WIDTH calculation
  const CustomSelect = ({
    icon: Icon,
    value,
    onChange,
    options,
    defaultText,
    colorClass = "text-slate-500",
  }) => {
    // 1. Determine what text is currently showing to calculate width
    // We check if options are objects {value, label} or simple strings
    const currentOption = options.find((o) => (o.value || o) === value);
    const currentLabel =
      value === "All"
        ? defaultText
        : currentOption?.label || currentOption || value;

    // 2. Calculate width: Base padding (60px) + approx 9px per character
    // "En ligne" (8 chars) -> ~132px
    // "A1" (2 chars) -> ~78px (but we set min-width 100)
    const dynamicWidth = Math.max(100, currentLabel.length * 9 + 60);

    return (
      <div
        className="relative group transition-all duration-300 ease-in-out"
        style={{ width: `${dynamicWidth}px` }}
      >
        <div
          className={`absolute left-3 top-1/2 -translate-y-1/2 ${colorClass} pointer-events-none transition-colors group-hover:text-[#004C73]`}
        >
          <Icon size={15} />
        </div>
        <select
          className="appearance-none w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#004C73]/20 focus:border-[#004C73] cursor-pointer hover:bg-white transition-all shadow-sm whitespace-nowrap overflow-hidden text-ellipsis"
          value={value}
          onChange={onChange}
        >
          <option value="All">{defaultText}</option>
          {options.map((opt) => (
            <option key={opt.value || opt} value={opt.value || opt}>
              {opt.label || opt}
            </option>
          ))}
        </select>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
          <ChevronDown size={14} />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col xl:flex-row items-center gap-3 animate-fade-in mb-6">
      {/* 1. SEARCH BAR */}
      <div className="relative w-full xl:w-48 group flex-shrink-0">
        <Search
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#004C73] transition-colors"
          size={18}
        />
        <input
          type="text"
          placeholder="Rechercher..."
          className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#004C73]/20 focus:border-[#004C73] text-sm font-medium text-slate-700 transition-all shadow-sm placeholder:text-slate-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="h-8 w-[1px] bg-slate-200 hidden xl:block mx-1"></div>

      {/* 2. FILTERS GROUP (Auto-Resizing) */}
      <div className="flex flex-wrap xl:flex-nowrap items-center gap-2 w-full xl:w-auto">
        {/* Mode Filter: Updated labels */}
        <CustomSelect
          icon={Filter}
          colorClass="text-purple-500"
          defaultText="Mode"
          value={filters.role}
          onChange={(e) => setFilters({ ...filters, role: e.target.value })}
          options={[
            { value: "Online", label: "En ligne" },
            { value: "Presential", label: "Présentiel" },
          ]}
        />

        {/* Level Filter: Cleaned up options (No parentheses) */}
        <CustomSelect
          icon={BookOpen}
          colorClass="text-orange-500"
          defaultText="Niveau"
          value={filters.level}
          onChange={(e) => setFilters({ ...filters, level: e.target.value })}
          options={["A1", "A2", "B1", "B2", "C1"]}
        />

        {/* City Filter */}
        <CustomSelect
          icon={MapPin}
          colorClass="text-red-500"
          defaultText="Villes"
          value={filters.city}
          onChange={(e) => setFilters({ ...filters, city: e.target.value })}
          options={MOROCCAN_CITIES}
        />

        {/* Admin Filter */}
        <CustomSelect
          icon={User}
          colorClass="text-blue-600"
          defaultText="Resp."
          value={filters.assignee}
          onChange={(e) => setFilters({ ...filters, assignee: e.target.value })}
          options={admins.map((a) => ({ value: a.name, label: a.name }))}
        />

        {/* Date Filter - Increased width to 130px to ensure YYYY fits comfortably */}
        <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-2 py-2 shadow-sm group hover:bg-white hover:border-[#004C73]/50 transition-all flex-shrink-0">
          <Calendar
            className="text-slate-400 mr-1.5 group-hover:text-[#004C73] transition-colors"
            size={16}
          />
          <input
            type="date"
            className="bg-transparent border-none text-xs font-bold text-slate-600 focus:outline-none uppercase cursor-pointer w-[130px]"
            value={filters.startDate}
            onChange={(e) =>
              setFilters({ ...filters, startDate: e.target.value })
            }
          />
          <span className="text-slate-300 mx-1">/</span>
          <input
            type="date"
            className="bg-transparent border-none text-xs font-bold text-slate-600 focus:outline-none uppercase cursor-pointer w-[130px]"
            value={filters.endDate}
            onChange={(e) =>
              setFilters({ ...filters, endDate: e.target.value })
            }
          />
        </div>
      </div>

      {/* 3. ACTIONS GROUP */}
      <div className="flex gap-2 ml-auto flex-shrink-0">
        <button
          onClick={() => fetchData()}
          className="p-2.5 rounded-lg text-slate-500 hover:text-[#004C73] hover:bg-blue-50 border border-slate-200 transition-all active:scale-95"
          title="Actualiser"
        >
          <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
        </button>
        <button
          onClick={downloadExcel}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-md shadow-emerald-600/20 transition-all active:scale-95 text-sm"
        >
          <Download size={16} /> <span className="hidden sm:inline">Excel</span>
        </button>
      </div>
    </div>
  );
};

export default RegistrationsToolbar;
