import React from "react";
import { ArrowUpDown } from "lucide-react";
import { getAdminColor } from "../../utils/adminHelpers";

const ContactsTable = ({
  data,
  admins,
  handleSort,
  getSortIcon,
  handleAssignChange,
}) => {
  if (data.length === 0)
    return (
      <div className="p-12 text-center text-slate-400">
        Aucun message trouvé.
      </div>
    );

  return (
    <div className="overflow-x-auto flex-grow">
      <table className="w-full text-left border-collapse border border-slate-200 text-sm">
        <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider sticky top-0 z-10 shadow-sm border-b border-slate-200">
          <tr className="divide-x divide-slate-200">
            <th
              className="p-3 cursor-pointer hover:bg-slate-100"
              onClick={() => handleSort("name")}
            >
              <div className="flex items-center gap-2">
                Nom {getSortIcon("name")}
              </div>
            </th>
            <th className="p-3">Détails (Tel/Email)</th>
            <th className="p-3 w-1/3">Message</th>
            <th className="p-3">Assigné à</th>
            <th
              className="p-3 cursor-pointer hover:bg-slate-100"
              onClick={() => handleSort("date")}
            >
              <div className="flex items-center gap-2">
                Date {getSortIcon("date")}
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.map((msg) => (
            <tr
              key={msg._id}
              className="hover:bg-blue-50/50 transition-colors divide-x divide-slate-200"
            >
              <td className="p-3 font-bold text-slate-700 align-top">
                {msg.name}
              </td>
              <td className="p-3 text-sm align-top space-y-1">
                <div className="font-bold text-slate-700 font-mono">
                  {msg.phone || "--"}
                </div>
                <div className="text-slate-500">{msg.email}</div>
              </td>
              <td className="p-3 text-slate-600 text-sm leading-relaxed align-top">
                <div className="bg-slate-50 p-2 rounded border border-slate-100">
                  {msg.message}
                </div>
              </td>
              <td className="p-3 align-top">
                <select
                  value={msg.assignedTo || ""}
                  onChange={(e) =>
                    handleAssignChange(msg._id, e.target.value, "contact")
                  }
                  className={`px-3 py-1 rounded-full text-xs font-bold border appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-300 transition-all ${getAdminColor(
                    msg.assignedTo
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
              <td className="p-3 text-slate-400 text-xs align-top font-medium">
                {new Date(msg.date).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ContactsTable;
