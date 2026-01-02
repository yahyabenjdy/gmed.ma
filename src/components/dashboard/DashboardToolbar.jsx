import React from "react";
import {
  Database,
  School,
  MessageSquare,
  CalendarDays,
  Users,
  CreditCard,
} from "lucide-react";

const DashboardToolbar = ({ activeTab, setActiveTab, user, counts }) => {
  return (
    <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide mb-4">
      <button
        onClick={() => setActiveTab("registrations")}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg font-bold transition-all text-xs whitespace-nowrap ${
          activeTab === "registrations"
            ? "bg-[#004C73] text-white shadow-md translate-y-1"
            : "bg-white/80 text-slate-600 hover:bg-white"
        }`}
      >
        <Database size={16} /> Étudiants{" "}
        <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-[10px] ml-1">
          {counts.registrations}
        </span>
      </button>

      <button
        onClick={() => setActiveTab("payments")}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg font-bold transition-all text-xs whitespace-nowrap ${
          activeTab === "payments"
            ? "bg-teal-600 text-white shadow-md translate-y-1"
            : "bg-white/80 text-slate-600 hover:bg-white"
        }`}
      >
        <CreditCard size={16} /> Paiements
      </button>

      <button
        onClick={() => setActiveTab("classes")}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg font-bold transition-all text-xs whitespace-nowrap ${
          activeTab === "classes"
            ? "bg-emerald-600 text-white shadow-md translate-y-1"
            : "bg-white/80 text-slate-600 hover:bg-white"
        }`}
      >
        <School size={16} /> Classes
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg font-bold transition-all text-xs whitespace-nowrap ${
          activeTab === "contacts"
            ? "bg-orange-500 text-white shadow-md translate-y-1"
            : "bg-white/80 text-slate-600 hover:bg-white"
        }`}
      >
        <MessageSquare size={16} /> Messages{" "}
        <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-[10px] ml-1">
          {counts.contacts}
        </span>
      </button>

      <button
        onClick={() => setActiveTab("calendar")}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg font-bold transition-all text-xs whitespace-nowrap ${
          activeTab === "calendar"
            ? "bg-indigo-600 text-white shadow-md translate-y-1"
            : "bg-white/80 text-slate-600 hover:bg-white"
        }`}
      >
        <CalendarDays size={16} /> Agenda
      </button>

      {user.role === "superadmin" && (
        <button
          onClick={() => setActiveTab("team")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg font-bold transition-all text-xs whitespace-nowrap ${
            activeTab === "team"
              ? "bg-purple-600 text-white shadow-md translate-y-1"
              : "bg-white/80 text-slate-600 hover:bg-white"
          }`}
        >
          <Users size={16} /> Équipe
        </button>
      )}
    </div>
  );
};

export default DashboardToolbar;
