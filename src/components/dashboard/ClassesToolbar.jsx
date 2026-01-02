import React from "react";
import {
  Search,
  School,
  User,
  Plus,
  ChevronDown,
  GraduationCap,
} from "lucide-react";

const ClassesToolbar = ({
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
  classes,
  openClassModal,
}) => {
  // 1. EXTRACT UNIQUE DATA DYNAMICALLY
  // This ensures that if you add a new class or professor, they appear here instantly.
  const uniqueNames = [
    ...new Set(classes.map((c) => c.name).filter(Boolean)),
  ].sort();
  const uniqueProfessors = [
    ...new Set(classes.map((c) => c.professor).filter(Boolean)),
  ].sort();

  // Helper Component with DYNAMIC WIDTH calculation
  const CustomSelect = ({
    icon: Icon,
    value,
    onChange,
    options,
    defaultText,
    colorClass = "text-slate-500",
  }) => {
    const currentLabel = value === "All" ? defaultText : value;

    // Calculate width: Base 60px + approx 9px per character
    const dynamicWidth = Math.max(120, currentLabel.length * 9 + 60);

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
            <option key={opt} value={opt}>
              {opt}
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

      {/* 2. FILTERS GROUP */}
      <div className="flex flex-wrap xl:flex-nowrap items-center gap-2 w-full xl:w-auto">
        {/* Class Name Filter */}
        <CustomSelect
          icon={School}
          colorClass="text-emerald-600"
          defaultText="Toutes Classes"
          value={filters.className || "All"}
          onChange={(e) =>
            setFilters({ ...filters, className: e.target.value })
          }
          options={uniqueNames}
        />

        {/* Professor Filter */}
        <CustomSelect
          icon={GraduationCap}
          colorClass="text-purple-600"
          defaultText="Tous Profs"
          value={filters.professor || "All"}
          onChange={(e) =>
            setFilters({ ...filters, professor: e.target.value })
          }
          options={uniqueProfessors}
        />
      </div>

      {/* 3. ACTIONS GROUP */}
      <div className="flex gap-2 ml-auto flex-shrink-0">
        <button
          onClick={() => openClassModal(true)}
          className="bg-[#004C73] hover:bg-[#003a57] text-white px-4 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-md shadow-blue-900/20 transition-all active:scale-95 text-sm"
        >
          <Plus size={16} />{" "}
          <span className="hidden sm:inline">Nouvelle Classe</span>
        </button>
      </div>
    </div>
  );
};

export default ClassesToolbar;
