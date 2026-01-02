import React from "react";
import {
  Users,
  Clock,
  MapPin,
  Globe,
  GraduationCap,
  ChevronRight,
  Trash2,
} from "lucide-react";

const ClassesSection = ({
  classes,
  registrations,
  openClassDetails,
  onDeleteClass,
}) => {
  if (classes.length === 0) {
    return (
      <div className="p-12 text-center text-slate-400 flex flex-col items-center gap-3">
        <div className="bg-slate-50 p-6 rounded-full">
          <GraduationCap size={32} className="text-slate-300" />
        </div>
        <p>Aucune classe trouvée.</p>
      </div>
    );
  }

  return (
    <div className="p-6 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => {
          const studentCount = registrations.filter(
            (r) => r.assignedClass === cls._id
          ).length;
          const isOnline = cls.mode === "Online";

          return (
            <div
              key={cls._id}
              onClick={() => openClassDetails(cls)}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden"
            >
              {/* Top Stripe */}
              <div
                className={`absolute top-0 left-0 w-full h-1.5 ${
                  isOnline ? "bg-purple-500" : "bg-emerald-500"
                }`}
              ></div>

              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-700 transition-colors pr-8">
                    {cls.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mt-1">
                    <GraduationCap size={14} />
                    {cls.professor || "Non assigné"}
                  </div>
                </div>

                {/* Icons Container */}
                <div className="flex gap-2">
                  {/* Mode Icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isOnline
                        ? "bg-purple-50 text-purple-600"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    {isOnline ? <Globe size={16} /> : <MapPin size={16} />}
                  </div>

                  {/* DELETE BUTTON (Stops Propagation) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents opening the details modal
                      onDeleteClass(cls._id, cls.name);
                    }}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors z-10"
                    title="Supprimer la classe"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-sm text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <Clock size={16} className="text-slate-400" />
                  <span className="font-bold">
                    {cls.schedule || "Horaire non défini"}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs font-medium pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Users size={14} />
                    <span>{studentCount} Étudiants</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                    Voir détails <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassesSection;
