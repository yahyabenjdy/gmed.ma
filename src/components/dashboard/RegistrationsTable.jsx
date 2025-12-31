import React from "react";
import { Search, MapPin, CalendarDays, ArrowUpDown } from "lucide-react";
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
  handleSort,
  getSortIcon,
  handleAssignChange,
  handleStatusChange,
  openApptModal,
}) => {
  if (data.length === 0) {
    return (
      <tr>
        <td
          colSpan="9"
          className="p-12 text-center text-slate-400 flex flex-col items-center gap-2"
        >
          <div className="bg-slate-100 p-4 rounded-full">
            <Search size={24} />
          </div>
          Aucun résultat trouvé.
        </td>
      </tr>
    );
  }

  return (
    <div className="overflow-x-auto flex-grow">
      <table className="w-full text-left border-collapse border border-slate-200">
        <thead className="bg-slate-50 text-slate-600 text-xs uppercase tracking-wider sticky top-0 z-10 shadow-sm border-b border-slate-200">
          <tr className="divide-x divide-slate-200">
            {[
              { key: "name", label: "Nom" },
              { key: "city", label: "Ville" },
              { key: "phone", label: "Téléphone" },
              { key: "role", label: "Mode" },
              { key: "level", label: "Niveau" },
              { key: "assignedTo", label: "Assigné à" },
              { key: "date", label: "Date" },
              { key: "status", label: "Statut" },
              { key: "appointment", label: "Rendez-vous" },
            ].map((header) => (
              <th
                key={header.key}
                className="p-4 font-bold cursor-pointer hover:bg-slate-100"
                onClick={() => handleSort(header.key)}
              >
                <div className="flex items-center gap-1.5">
                  {header.label}
                  {header.sortable !== false && getSortIcon(header.key)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.map((reg) => {
            const isOnline = (reg.role || "").toLowerCase().includes("online");
            return (
              <tr
                key={reg._id}
                className="hover:bg-blue-50/50 transition-colors group divide-x divide-slate-200"
              >
                <td className="p-4 font-bold text-slate-700">{reg.name}</td>
                <td className="p-4">
                  {reg.city ? (
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold border flex w-fit items-center gap-1 ${getCityStyle(
                        reg.city
                      )}`}
                    >
                      <MapPin size={12} /> {reg.city}
                    </span>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="p-4 text-slate-600 font-mono text-sm">
                  {reg.phone || "--"}
                </td>
                <td className="p-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                      isOnline
                        ? "bg-cyan-100 text-cyan-800 border-cyan-200"
                        : "bg-orange-100 text-orange-800 border-orange-200"
                    }`}
                  >
                    {cleanText(reg.role)}
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getLevelStyle(
                      reg.level
                    )}`}
                  >
                    {cleanText(reg.level)}
                  </span>
                </td>
                <td className="p-4">
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
                    <option value="">Non assigné</option>
                    {admins.map((a) => (
                      <option key={a._id} value={a.name}>
                        {a.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-4 text-slate-500 text-xs font-medium">
                  {new Date(reg.date).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="p-4">
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
                      <option key={i} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => openApptModal(reg)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border shadow-sm w-full justify-center ${
                      reg.appointment && reg.appointment.date
                        ? "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200"
                        : "bg-slate-50 text-slate-400 border-dashed border-slate-300 hover:bg-white hover:text-slate-600 hover:border-slate-400"
                    }`}
                  >
                    {reg.appointment && reg.appointment.date ? (
                      <>
                        <CalendarDays size={14} />
                        {new Date(reg.appointment.date).toLocaleDateString(
                          "fr-FR",
                          { day: "2-digit", month: "short" }
                        )}
                        <span className="opacity-60">|</span>
                        {new Date(reg.appointment.date).toLocaleTimeString(
                          "fr-FR",
                          { hour: "2-digit", minute: "2-digit" }
                        )}
                      </>
                    ) : (
                      <>+ Planifier</>
                    )}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default RegistrationsTable;
