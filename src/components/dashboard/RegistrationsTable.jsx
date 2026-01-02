import React from "react";
import {
  Search,
  MapPin,
  Filter,
  BookOpen,
  ChevronUp,
  ChevronDown,
  ArrowUpDown,
  CalendarDays,
} from "lucide-react";
import {
  cleanText,
  crmStatuses,
  getStatusStyle,
  getLevelStyle,
  getCityStyle,
  getAdminColor,
} from "../../utils/adminHelpers";

const RegistrationsTable = ({
  data,
  admins,
  classes,
  handleSort,
  getSortIcon,
  expandedRows,
  toggleRow,
  handleAssignChange,
  handleStatusChange,
  handleClassAssign,
  openApptModal,
}) => {
  if (data.length === 0) {
    return (
      <div className="p-12 text-center text-slate-400 flex flex-col items-center gap-2">
        <div className="bg-slate-100 p-4 rounded-full">
          <Search size={24} />
        </div>
        Aucun résultat trouvé.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto flex-grow">
      <table className="w-full text-left border-collapse border border-slate-200 text-xs">
        <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider sticky top-0 z-10 shadow-sm border-b border-slate-200">
          <tr className="divide-x divide-slate-200">
            <th className="p-3 w-8"></th>
            {[
              { key: "name", label: "Nom" },
              { key: "phone", label: "Téléphone" },
              { key: "assignedClass", label: "Classe" },
              { key: "assignedTo", label: "Assigné à" },
              { key: "date", label: "Date" },
              { key: "status", label: "Statut" },
              { key: "appointment", label: "Rendez-vous" },
            ].map((header) => (
              <th
                key={header.key}
                className="p-3 font-bold cursor-pointer hover:bg-slate-100"
                onClick={() => handleSort(header.key)}
              >
                <div className="flex items-center gap-1.5">
                  {header.label}{" "}
                  <ArrowUpDown size={12} className="text-slate-400" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm">
          {data.map((reg) => (
            <React.Fragment key={reg._id}>
              <tr
                className={`transition-colors group divide-x divide-slate-200 ${
                  expandedRows[reg._id] ? "bg-blue-50" : "hover:bg-blue-50/30"
                }`}
              >
                {/* Expand Toggle */}
                <td
                  className="p-3 text-center cursor-pointer"
                  onClick={() => toggleRow(reg._id)}
                >
                  {expandedRows[reg._id] ? (
                    <ChevronUp size={16} className="text-[#004C73]" />
                  ) : (
                    <ChevronDown size={16} className="text-slate-400" />
                  )}
                </td>

                {/* Name */}
                <td className="p-3 font-bold text-slate-700">{reg.name}</td>

                {/* Phone */}
                <td className="p-3 text-slate-600 font-mono text-xs">
                  {reg.phone}
                </td>

                {/* Class Assignment */}
                <td className="p-3">
                  <select
                    value={reg.assignedClass || ""}
                    onChange={(e) => handleClassAssign(reg._id, e.target.value)}
                    className={`px-3 py-1 rounded-full text-xs font-bold border appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-offset-1 focus:ring-emerald-300 transition-all ${
                      reg.assignedClass
                        ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                        : "bg-slate-100 text-slate-500 border-slate-200"
                    }`}
                  >
                    <option value="" className="bg-white text-slate-500">
                      -- Classe --
                    </option>
                    {classes.map((cls) => (
                      <option
                        key={cls._id}
                        value={cls._id}
                        className="bg-white text-slate-800"
                      >
                        {cls.name}
                      </option>
                    ))}
                  </select>
                </td>

                {/* Admin Assignment */}
                <td className="p-3">
                  <select
                    value={reg.assignedTo || ""}
                    onChange={(e) =>
                      handleAssignChange(
                        reg._id,
                        e.target.value,
                        "registration"
                      )
                    }
                    className={`px-3 py-1 rounded-full text-xs font-bold border appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-300 transition-all ${getAdminColor(
                      reg.assignedTo
                    )}`}
                  >
                    <option value="" className="bg-white text-slate-500">
                      Non assigné
                    </option>
                    {admins.map((a) => (
                      <option
                        key={a._id}
                        value={a.name}
                        className="bg-white text-slate-800"
                      >
                        {a.name}
                      </option>
                    ))}
                  </select>
                </td>

                {/* Registration Date */}
                <td className="p-3 text-xs text-slate-500 font-medium">
                  {new Date(reg.date).toLocaleDateString()}
                </td>

                {/* Status Dropdown */}
                <td className="p-3">
                  <select
                    value={reg.status || "Nouveau prospect"}
                    onChange={(e) =>
                      handleStatusChange(reg._id, e.target.value)
                    }
                    className={`px-3 py-1 rounded-full text-xs font-bold border appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-300 transition-all ${getStatusStyle(
                      reg.status
                    )}`}
                  >
                    {crmStatuses.map((s, i) => (
                      <option
                        key={i}
                        value={s}
                        className="bg-white text-slate-800"
                      >
                        {s}
                      </option>
                    ))}
                  </select>
                </td>

                {/* Appointment Button (UPDATED WITH TIME) */}
                <td className="p-3">
                  <button
                    onClick={() => openApptModal(reg)}
                    className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border shadow-sm w-full ${
                      reg.appointment?.date
                        ? "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200"
                        : "bg-slate-50 text-slate-400 border-dashed border-slate-300 hover:bg-white hover:text-slate-600 hover:border-slate-400"
                    }`}
                  >
                    {reg.appointment?.date ? (
                      <>
                        <CalendarDays size={14} />
                        <span>
                          {new Date(reg.appointment.date).toLocaleDateString(
                            "fr-FR",
                            { day: "2-digit", month: "2-digit" }
                          )}
                        </span>
                        <span className="opacity-40">|</span>
                        <span>
                          {new Date(reg.appointment.date).toLocaleTimeString(
                            "fr-FR",
                            { hour: "2-digit", minute: "2-digit" }
                          )}
                        </span>
                      </>
                    ) : (
                      "+ Planifier"
                    )}
                  </button>
                </td>
              </tr>

              {/* Collapsible Details */}
              {expandedRows[reg._id] && (
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td colSpan="8" className="p-3 pl-12 text-xs">
                    <div className="flex gap-8 text-slate-600">
                      <span className="flex items-center gap-2">
                        <MapPin size={14} className="text-red-500" /> Ville:{" "}
                        <span className="font-bold text-slate-800">
                          {reg.city || "-"}
                        </span>
                      </span>
                      <span className="flex items-center gap-2">
                        <Filter size={14} className="text-purple-500" /> Mode:{" "}
                        <span className="font-bold text-slate-800">
                          {cleanText(reg.role)}
                        </span>
                      </span>
                      <span className="flex items-center gap-2">
                        <BookOpen size={14} className="text-orange-500" />{" "}
                        Niveau:{" "}
                        <span className="font-bold text-slate-800">
                          {cleanText(reg.level)}
                        </span>
                      </span>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationsTable;
