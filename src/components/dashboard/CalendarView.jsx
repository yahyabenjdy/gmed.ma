import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CalendarView = ({
  registrations,
  currentDate,
  setCurrentDate,
  openDayModal,
  openViewApptModal,
}) => {
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return {
      days: new Date(year, month + 1, 0).getDate(),
      firstDay: new Date(year, month, 1).getDay(),
    };
  };

  const changeMonth = (offset) =>
    setCurrentDate(
      new Date(currentDate.setMonth(currentDate.getMonth() + offset))
    );

  const { days, firstDay } = getDaysInMonth(currentDate);
  const monthName = currentDate.toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });
  const blanks = Array(firstDay).fill(null);
  const daysArray = Array.from({ length: days }, (_, i) => i + 1);
  const today = new Date();
  const isCurrentMonth =
    today.getMonth() === currentDate.getMonth() &&
    today.getFullYear() === currentDate.getFullYear();

  const appointmentsMap = {};
  registrations.forEach((reg) => {
    if (reg.appointment?.date) {
      const apptDate = new Date(reg.appointment.date);
      if (
        apptDate.getMonth() === currentDate.getMonth() &&
        apptDate.getFullYear() === currentDate.getFullYear()
      ) {
        const day = apptDate.getDate();
        if (!appointmentsMap[day]) appointmentsMap[day] = [];
        appointmentsMap[day].push(reg);
      }
    }
  });

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden animate-fade-in h-full flex flex-col">
      <div className="flex justify-between items-center p-6 border-b border-slate-200 bg-slate-50">
        <button
          onClick={() => changeMonth(-1)}
          className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-300 hover:shadow-sm"
        >
          <ChevronLeft className="text-slate-600" />
        </button>
        <h2 className="text-xl font-black text-[#004C73] capitalize">
          {monthName}
        </h2>
        <button
          onClick={() => changeMonth(1)}
          className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-300 hover:shadow-sm"
        >
          <ChevronRight className="text-slate-600" />
        </button>
      </div>
      <div className="grid grid-cols-7 text-center border-b border-slate-200 bg-slate-100">
        {["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"].map((day) => (
          <div
            key={day}
            className="py-3 text-xs font-bold text-slate-500 uppercase tracking-wider"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 auto-rows-fr bg-slate-200 gap-px border-b border-slate-200 flex-grow">
        {blanks.map((_, i) => (
          <div
            key={`blank-${i}`}
            className="bg-slate-50/50 min-h-[120px]"
          ></div>
        ))}
        {daysArray.map((day) => {
          const hasAppts =
            appointmentsMap[day] && appointmentsMap[day].length > 0;
          const dayAppts = hasAppts
            ? appointmentsMap[day].sort(
                (a, b) =>
                  new Date(a.appointment.date) - new Date(b.appointment.date)
              )
            : [];
          const isToday = isCurrentMonth && day === today.getDate();
          return (
            <div
              key={day}
              onClick={() => openDayModal(day)}
              className={`bg-white min-h-[120px] p-2 transition-all cursor-pointer group flex flex-col ${
                isToday ? "bg-blue-50/30" : "hover:bg-slate-50"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span
                  className={`text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full ${
                    isToday ? "bg-blue-600 text-white" : "text-slate-500"
                  }`}
                >
                  {day}
                </span>
                {hasAppts && (
                  <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-1.5 py-0.5 rounded-md border border-slate-200">
                    {dayAppts.length} RDV
                  </span>
                )}
              </div>
              <div className="space-y-1.5 overflow-hidden">
                {dayAppts.slice(0, 3).map((reg) => (
                  <div
                    key={reg._id}
                    onClick={(e) => openViewApptModal(e, reg)}
                    className="text-[11px] bg-indigo-50 border border-indigo-100 text-indigo-700 px-2 py-1 rounded shadow-sm hover:bg-indigo-100 hover:border-indigo-300 transition-all truncate flex items-center gap-1.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
                    <span className="font-bold font-mono">
                      {new Date(reg.appointment.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    <span className="truncate font-medium">
                      {reg.name.split(" ")[0]}
                    </span>
                  </div>
                ))}
                {dayAppts.length > 3 && (
                  <div className="text-[10px] text-slate-400 text-center font-medium italic">
                    + {dayAppts.length - 3} autres...
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CalendarView;
