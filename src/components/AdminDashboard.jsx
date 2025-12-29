import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Lock,
  LogOut,
  RefreshCw,
  Database,
  MessageSquare,
  Users,
  Shield,
  Trash2,
  UserPlus,
  Eye,
  EyeOff,
  Key,
  X,
  CheckCircle,
  AlertCircle,
  Search,
  Filter,
  BookOpen,
} from "lucide-react";

const AdminDashboard = () => {
  // --- AUTH STATE ---
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // --- DATA STATE ---
  const [activeTab, setActiveTab] = useState("registrations");
  const [registrations, setRegistrations] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);

  // --- SEARCH & FILTER STATE ---
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");

  // --- NEW ADMIN FORM STATE ---
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  // --- MODAL & NOTIFICATION STATE ---
  const [resetModal, setResetModal] = useState({
    show: false,
    id: null,
    name: "",
  });
  const [resetPassword, setResetPassword] = useState("");
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  // ==================================================================================
  // HELPER: SHOW NOTIFICATION
  // ==================================================================================
  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "success" }),
      3000
    );
  };

  // ==================================================================================
  // 1. LOGIN LOGIC
  // ==================================================================================
  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError("");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      setUser(res.data.admin);
      localStorage.setItem("token", res.data.token);
      setActiveTab("registrations");
      fetchData(res.data.token);
    } catch (err) {
      setAuthError(err.response?.data?.message || "Login failed");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    setRegistrations([]);
    setContacts([]);
    setAdmins([]);
    setEmail("");
    setPassword("");
    setAuthError("");
  };

  // ==================================================================================
  // 2. DATA FETCHING
  // ==================================================================================
  const fetchData = async (token = localStorage.getItem("token")) => {
    if (!token) return;
    setLoading(true);
    try {
      const [regRes, contactRes, adminRes] = await Promise.all([
        axios.get("http://localhost:5000/api/register"),
        axios.get("http://localhost:5000/api/contact"),
        axios.get("http://localhost:5000/api/auth"),
      ]);
      setRegistrations(regRes.data);
      setContacts(contactRes.data);
      setAdmins(adminRes.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  // ==================================================================================
  // 3. SEARCH & FILTER LOGIC
  // ==================================================================================

  // Filter Students
  const filteredRegistrations = registrations.filter((reg) => {
    // 1. Search Text
    const matchesSearch =
      (reg.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (reg.phone || "").includes(searchTerm);

    // 2. Filter Dropdown (Role/Mode)
    const matchesRole =
      roleFilter === "All" ||
      (roleFilter === "Online" && reg.role?.includes("Online")) ||
      (roleFilter === "Presential" && !reg.role?.includes("Online"));

    // 3. Filter Dropdown (Level) - UPDATED TO MATCH YOUR IMAGE EXACTLY
    const matchesLevel = levelFilter === "All" || reg.level === levelFilter;

    return matchesSearch && matchesRole && matchesLevel;
  });

  // Filter Contacts
  const filteredContacts = contacts.filter((msg) => {
    return (
      (msg.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (msg.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (msg.phone || "").includes(searchTerm)
    );
  });

  // ==================================================================================
  // 4. TEAM MANAGEMENT
  // ==================================================================================
  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/create", {
        ...newAdmin,
        creatorRole: user.role,
      });
      showToast("Admin created successfully!", "success");
      setNewAdmin({ name: "", email: "", password: "", role: "admin" });
      fetchData();
    } catch (err) {
      showToast(err.response?.data?.message || "Error creating admin", "error");
    }
  };

  const handleDeleteAdmin = async (id) => {
    if (!window.confirm("Are you sure you want to delete this admin?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/auth/${id}`);
      showToast("Admin deleted successfully", "success");
      fetchData();
    } catch (err) {
      showToast("Error deleting admin", "error");
    }
  };

  // --- MODAL LOGIC ---
  const openResetModal = (id, name) => {
    setResetModal({ show: true, id, name });
    setResetPassword("");
  };

  const submitResetPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/auth/${resetModal.id}`, {
        password: resetPassword,
        creatorRole: user.role,
      });
      setResetModal({ show: false, id: null, name: "" });
      showToast(
        `Password for ${resetModal.name} reset successfully!`,
        "success"
      );
    } catch (err) {
      showToast("Error resetting password", "error");
    }
  };

  // ==================================================================================
  // VIEW 1: LOGIN SCREEN
  // ==================================================================================
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-200">
          <div className="flex justify-center mb-6 text-[#004C73]">
            <div className="bg-[#004C73]/10 p-4 rounded-full">
              <Lock size={40} />
            </div>
          </div>
          <h2 className="text-2xl font-black text-center text-[#004C73] mb-2">
            Secure Login
          </h2>
          <p className="text-center text-slate-500 mb-6">
            GMED Management Portal
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004C73] outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004C73] outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-8 text-slate-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {authError && (
              <p className="text-red-500 text-sm text-center font-bold bg-red-50 p-2 rounded">
                {authError}
              </p>
            )}
            <button className="w-full bg-[#004C73] text-white font-bold py-3 rounded-lg hover:bg-[#003a57] transition-all">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ==================================================================================
  // VIEW 2: DASHBOARD
  // ==================================================================================
  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* NAVBAR */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="bg-[#004C73] text-white p-2 rounded-lg font-bold">
            GM
          </div>
          <div>
            <h1 className="font-bold text-slate-800 leading-tight">
              Admin Portal
            </h1>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {user.name} ({user.role})
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-slate-500 hover:text-red-600 font-bold transition-colors text-sm"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* TABS & SEARCH BAR ROW */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-start md:items-center">
          {/* LEFT: TABS */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("registrations")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === "registrations"
                  ? "bg-[#004C73] text-white shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Database size={18} /> Students{" "}
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                {registrations.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("contacts")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === "contacts"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              <MessageSquare size={18} /> Messages{" "}
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                {contacts.length}
              </span>
            </button>

            {user.role === "superadmin" && (
              <button
                onClick={() => setActiveTab("team")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all ${
                  activeTab === "team"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Users size={18} /> Team
              </button>
            )}
          </div>

          {/* RIGHT: SEARCH & FILTER (Only for Data Tabs) */}
          {activeTab !== "team" && (
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              {/* SEARCH INPUT */}
              <div className="relative flex-grow md:flex-grow-0 md:w-48">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004C73]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* FILTERS (Only for Registrations) */}
              {activeTab === "registrations" && (
                <>
                  {/* MODE FILTER */}
                  <div className="relative">
                    <Filter
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <select
                      className="pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004C73] appearance-none bg-white cursor-pointer font-medium text-slate-700"
                      value={roleFilter}
                      onChange={(e) => setRoleFilter(e.target.value)}
                    >
                      <option value="All">All Modes</option>
                      <option value="Online">Online</option>
                      <option value="Presential">Presential</option>
                    </select>
                  </div>

                  {/* LEVEL FILTER (EXACT MATCH FROM IMAGE) */}
                  <div className="relative">
                    <BookOpen
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <select
                      className="pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#004C73] appearance-none bg-white cursor-pointer font-medium text-slate-700"
                      value={levelFilter}
                      onChange={(e) => setLevelFilter(e.target.value)}
                    >
                      <option value="All">All Levels</option>
                      <option value="A1 (Débutant)">A1 (Débutant)</option>
                      <option value="A2 (Élémentaire)">A2 (Élémentaire)</option>
                      <option value="B1 (Intermédiaire)">
                        B1 (Intermédiaire)
                      </option>
                      <option value="B2 (Avancé / Pro)">
                        B2 (Avancé / Pro)
                      </option>
                      <option value="C1 (Expert)">C1 (Expert)</option>
                    </select>
                  </div>
                </>
              )}

              {/* REFRESH BTN */}
              <button
                onClick={() => fetchData()}
                className="bg-white p-2.5 rounded-xl text-slate-500 hover:text-[#004C73] border border-slate-200"
              >
                <RefreshCw
                  size={20}
                  className={loading ? "animate-spin" : ""}
                />
              </button>
            </div>
          )}
        </div>

        {/* CONTENT AREA */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden min-h-[400px]">
          {/* 1. REGISTRATIONS TABLE */}
          {activeTab === "registrations" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="p-4 border-b">Name</th>
                    <th className="p-4 border-b">Phone</th>
                    <th className="p-4 border-b">Mode</th>
                    <th className="p-4 border-b">Level</th>
                    <th className="p-4 border-b">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredRegistrations.length === 0 ? (
                    <tr>
                      <td
                        colSpan="5"
                        className="p-8 text-center text-slate-400"
                      >
                        No results found.
                      </td>
                    </tr>
                  ) : (
                    filteredRegistrations.map((reg) => (
                      <tr key={reg._id} className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-700">
                          {reg.name}
                        </td>
                        <td className="p-4 text-slate-600">
                          {reg.phone || (
                            <span className="text-red-300 italic">
                              No Phone
                            </span>
                          )}
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-bold ${
                              reg.role?.includes("Online")
                                ? "bg-purple-100 text-purple-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {reg.role}
                          </span>
                        </td>
                        <td className="p-4 text-[#004C73] font-medium">
                          {reg.level}
                        </td>
                        <td className="p-4 text-slate-400 text-xs">
                          {new Date(reg.date).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* 2. CONTACTS TABLE */}
          {activeTab === "contacts" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="p-4 border-b">Name</th>
                    <th className="p-4 border-b">Details</th>
                    <th className="p-4 border-b w-1/2">Message</th>
                    <th className="p-4 border-b">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredContacts.length === 0 ? (
                    <tr>
                      <td
                        colSpan="4"
                        className="p-8 text-center text-slate-400"
                      >
                        No results found.
                      </td>
                    </tr>
                  ) : (
                    filteredContacts.map((msg) => (
                      <tr key={msg._id} className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-700">
                          {msg.name}
                        </td>
                        <td className="p-4 text-sm">
                          <div className="font-bold">
                            {msg.phone || (
                              <span className="text-red-300 italic">
                                No Phone
                              </span>
                            )}
                          </div>
                          <div className="text-slate-500">{msg.email}</div>
                        </td>
                        <td className="p-4 text-slate-600 text-sm leading-relaxed">
                          {msg.message}
                        </td>
                        <td className="p-4 text-slate-400 text-xs">
                          {new Date(msg.date).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* 3. TEAM MANAGEMENT */}
          {activeTab === "team" && (
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* LIST ADMINS */}
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Shield size={20} className="text-purple-600" /> Current
                    Admins
                  </h3>
                  <div className="space-y-3">
                    {admins.map((admin) => (
                      <div
                        key={admin._id}
                        className="flex justify-between items-center p-4 bg-slate-50 border border-slate-200 rounded-xl"
                      >
                        <div>
                          <p className="font-bold text-slate-800">
                            {admin.name}
                          </p>
                          <p className="text-sm text-slate-500">
                            {admin.email}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-xs px-2 py-1 rounded font-bold uppercase ${
                              admin.role === "superadmin"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-slate-200 text-slate-600"
                            }`}
                          >
                            {admin.role}
                          </span>
                          {admin.email !== user.email && (
                            <>
                              <button
                                onClick={() =>
                                  openResetModal(admin._id, admin.name)
                                }
                                className="text-blue-400 hover:text-blue-600 mr-2"
                                title="Reset Password"
                              >
                                <Key size={18} />
                              </button>
                              <button
                                onClick={() => handleDeleteAdmin(admin._id)}
                                className="text-red-400 hover:text-red-600"
                              >
                                <Trash2 size={18} />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CREATE ADMIN FORM */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 h-fit">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <UserPlus size={20} className="text-purple-600" /> Add New
                    Member
                  </h3>
                  <form onSubmit={handleCreateAdmin} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full p-2 border rounded-lg"
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
                        className="w-full p-2 border rounded-lg"
                        value={newAdmin.email}
                        onChange={(e) =>
                          setNewAdmin({ ...newAdmin, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        required
                        className="w-full p-2 border rounded-lg"
                        value={newAdmin.password}
                        onChange={(e) =>
                          setNewAdmin({ ...newAdmin, password: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">
                        Role
                      </label>
                      <select
                        className="w-full p-2 border rounded-lg"
                        value={newAdmin.role}
                        onChange={(e) =>
                          setNewAdmin({ ...newAdmin, role: e.target.value })
                        }
                      >
                        <option value="admin">Admin (View Only)</option>
                        <option value="superadmin">
                          Super Admin (Full Access)
                        </option>
                      </select>
                    </div>
                    <button className="w-full bg-purple-600 text-white font-bold py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      Create Account
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RESET PASSWORD MODAL */}
      {resetModal.show && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 relative">
            <button
              onClick={() => setResetModal({ show: false, id: null, name: "" })}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X size={20} />
            </button>
            <div className="flex flex-col items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3">
                <Key size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Reset Password
              </h3>
              <p className="text-sm text-slate-500">
                For: <span className="font-bold">{resetModal.name}</span>
              </p>
            </div>
            <form onSubmit={submitResetPassword} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">
                  New Password
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-medium"
                  placeholder="Enter new password..."
                  value={resetPassword}
                  onChange={(e) => setResetPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setResetModal({ show: false, id: null, name: "" })
                  }
                  className="flex-1 py-3 text-slate-600 font-bold hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-blue-600 text-white font-bold hover:bg-blue-700 rounded-lg shadow-lg shadow-blue-600/20"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast.show && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-up z-50 text-white font-bold ${
            toast.type === "success" ? "bg-slate-800" : "bg-red-600"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle size={24} className="text-green-400" />
          ) : (
            <AlertCircle size={24} />
          )}{" "}
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
