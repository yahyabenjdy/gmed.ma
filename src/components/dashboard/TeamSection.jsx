import React from "react";
import { Shield, Key, Trash2, UserPlus } from "lucide-react";

const TeamSection = ({
  admins,
  user,
  openResetModal,
  openDeleteModal,
  handleCreateAdmin,
  newAdmin,
  setNewAdmin,
}) => {
  return (
    <div className="p-8">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-slate-800">
            <Shield size={20} className="text-purple-600" /> Administrateurs
            actuels
          </h3>
          <div className="space-y-3">
            {admins.map((admin) => (
              <div
                key={admin._id}
                className="flex justify-between items-center p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="font-bold text-slate-800">{admin.name}</p>
                  <p className="text-sm text-slate-500">{admin.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs px-2 py-1 rounded font-bold uppercase ${
                      admin.role === "superadmin"
                        ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                        : "bg-slate-100 text-slate-600 border border-slate-200"
                    }`}
                  >
                    {admin.role}
                  </span>
                  {admin.email !== user.email && (
                    <>
                      <button
                        onClick={() => openResetModal(admin._id, admin.name)}
                        className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                      >
                        <Key size={16} />
                      </button>
                      <button
                        onClick={() => openDeleteModal(admin._id, admin.name)}
                        className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 h-fit shadow-inner">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-slate-800">
            <UserPlus size={20} className="text-purple-600" /> Ajouter un membre
          </h3>
          <form onSubmit={handleCreateAdmin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1">
                Nom
              </label>
              <input
                type="text"
                required
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                value={newAdmin.name}
                onChange={(e) =>
                  setNewAdmin({ ...newAdmin, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                value={newAdmin.email}
                onChange={(e) =>
                  setNewAdmin({ ...newAdmin, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                required
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                value={newAdmin.password}
                onChange={(e) =>
                  setNewAdmin({ ...newAdmin, password: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1">
                Rôle
              </label>
              <select
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none bg-white"
                value={newAdmin.role}
                onChange={(e) =>
                  setNewAdmin({ ...newAdmin, role: e.target.value })
                }
              >
                <option value="admin">Admin (Lecture seule)</option>
                <option value="superadmin">Super Admin (Accès total)</option>
              </select>
            </div>
            <button className="w-full bg-purple-600 text-white font-bold py-2.5 rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20">
              Créer un compte
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TeamSection;
