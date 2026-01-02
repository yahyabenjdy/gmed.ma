import React from "react";
import { Search, Calendar, Check, AlertCircle, Filter, X } from "lucide-react";

// Full Year - Short Headers
const MONTHS_HEADER = [
  "JAN",
  "FÉV",
  "MAR",
  "AVR",
  "MAI",
  "JUI",
  "JUL",
  "AOÛ",
  "SEP",
  "OCT",
  "NOV",
  "DÉC",
];

// Full Year - Full Names for Logic
const MONTHS_FULL = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const PaymentsTable = ({ data, classes = [], handlePaymentUpdate }) => {
  // Filter: Only show students assigned to a class
  const classStudents = data.filter((s) => s.assignedClass);

  // Helper to get Class Name by ID
  const getClassName = (id) => {
    const cls = classes.find((c) => c._id === id);
    return cls ? cls.name : "Inconnue";
  };

  // Tri-State Toggle: Null (Dot) -> Paid (Green) -> Pending (Red) -> Null
  const toggleMonthStatus = (student, monthIndex) => {
    const monthFull = MONTHS_FULL[monthIndex];
    const paid = student.paidMonths || [];
    const pending = student.pendingMonths || []; // Ensure your backend supports this

    const isPaid = paid.includes(monthFull);
    const isPending = pending.includes(monthFull);

    let newPaid = [...paid];
    let newPending = [...pending];

    if (!isPaid && !isPending) {
      // Step 1: Set to PAID (Green)
      newPaid.push(monthFull);
    } else if (isPaid) {
      // Step 2: Set to PENDING (Red)
      newPaid = newPaid.filter((m) => m !== monthFull);
      newPending.push(monthFull);
    } else {
      // Step 3: Set to NULL (Reset)
      newPending = newPending.filter((m) => m !== monthFull);
    }

    // Save
    handlePaymentUpdate(student._id, {
      paidMonths: newPaid,
      pendingMonths: newPending,
    });
  };

  if (classStudents.length === 0) {
    return (
      <div className="p-12 text-center text-slate-400 flex flex-col items-center gap-3">
        <div className="bg-slate-100 p-4 rounded-full">
          <Filter size={24} className="text-slate-400" />
        </div>
        <div>
          <p className="font-bold text-slate-600">Aucun étudiant en classe</p>
          <p className="text-xs">
            Seuls les étudiants assignés à une classe apparaissent ici.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto flex-grow pb-12">
      <table className="w-full text-left border-collapse border border-slate-200 text-xs">
        <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider sticky top-0 z-10 shadow-sm border-b border-slate-200">
          <tr className="divide-x divide-slate-200">
            <th className="p-3 font-bold w-48 sticky left-0 bg-slate-50 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
              Étudiant
            </th>
            <th className="p-3 font-bold w-24">Classe</th>
            <th className="p-3 font-bold w-28">Méthode</th>
            <th className="p-3 font-bold w-28">Date Inscr.</th>
            <th className="p-3 font-bold w-28">Date Paiement</th>
            {/* Monthly Headers */}
            {MONTHS_HEADER.map((m) => (
              <th
                key={m}
                className="p-2 font-bold text-center w-12 text-[10px] text-slate-500"
              >
                {m}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm">
          {classStudents.map((student) => (
            <tr
              key={student._id}
              className="hover:bg-blue-50/30 transition-colors divide-x divide-slate-200"
            >
              {/* Name (Sticky Left) */}
              <td className="p-3 sticky left-0 bg-white z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] group-hover:bg-[#f8fafc]">
                <div className="font-bold text-slate-700">{student.name}</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  {student.phone}
                </div>
              </td>

              {/* Class */}
              <td className="p-3">
                <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-[10px] font-bold border border-slate-200 whitespace-nowrap">
                  {getClassName(student.assignedClass)}
                </span>
              </td>

              {/* Payment Method (Default: -) */}
              <td className="p-3">
                <select
                  value={student.paymentMethod || ""}
                  onChange={(e) =>
                    handlePaymentUpdate(student._id, {
                      paymentMethod: e.target.value,
                    })
                  }
                  className={`w-full border text-[11px] font-bold rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-500 cursor-pointer ${
                    !student.paymentMethod
                      ? "text-slate-400 bg-slate-50 border-slate-200"
                      : "text-slate-700 bg-white border-slate-300"
                  }`}
                >
                  <option value="">-</option>
                  <option value="Espèce">Espèce</option>
                  <option value="Virement">Virement</option>
                </select>
              </td>

              {/* Date Inscription */}
              <td className="p-3">
                <input
                  type="date"
                  className="w-full bg-transparent text-xs text-slate-500 font-medium focus:outline-none cursor-pointer hover:text-blue-600"
                  value={
                    student.date
                      ? new Date(student.date).toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    handlePaymentUpdate(student._id, { date: e.target.value })
                  }
                />
              </td>

              {/* Date Paiement (Normal Color) */}
              <td className="p-3">
                <input
                  type="date"
                  className="w-full bg-transparent text-xs text-slate-700 font-bold focus:outline-none cursor-pointer hover:text-blue-600"
                  value={
                    student.paymentDate
                      ? new Date(student.paymentDate)
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    handlePaymentUpdate(student._id, {
                      paymentDate: e.target.value,
                    })
                  }
                />
              </td>

              {/* 12 Months Columns */}
              {MONTHS_FULL.map((mFull, index) => {
                const isPaid = (student.paidMonths || []).includes(mFull);
                const isPending = (student.pendingMonths || []).includes(mFull);

                return (
                  <td key={mFull} className="p-1 text-center">
                    <div
                      onClick={() => toggleMonthStatus(student, index)}
                      className={`
                        w-6 h-6 mx-auto rounded-full flex items-center justify-center cursor-pointer transition-all duration-200
                        ${
                          isPaid
                            ? "bg-emerald-500 text-white shadow-sm shadow-emerald-200 scale-100"
                            : isPending
                            ? "bg-red-500 text-white shadow-sm shadow-red-200 scale-100"
                            : "bg-slate-100 text-slate-300 hover:bg-slate-200 scale-75 hover:scale-90"
                        }
                      `}
                    >
                      {isPaid && <Check size={12} strokeWidth={3} />}
                      {isPending && <AlertCircle size={12} strokeWidth={3} />}
                      {!isPaid && !isPending && (
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTable;
