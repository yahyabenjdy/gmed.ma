import React, { useState, useMemo } from "react";
import axios from "axios";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import {
  Lock,
  LogOut,
  X,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Clock,
  Edit3,
  Briefcase,
  CalendarDays,
  MapPin,
  FileText,
  ChevronUp,
  ChevronDown,
  ArrowUpDown,
  Globe,
  ArrowRight,
  Users,
  GraduationCap,
  Mail,
  Key,
  ChevronRight,
} from "lucide-react";

// --- IMPORTS ---
import { cleanText, crmStatuses, getAdminColor } from "../utils/adminHelpers";

// 1. IMPORT NAV
import DashboardToolbar from "./dashboard/DashboardToolbar";

// 2. IMPORT SECTIONS
import RegistrationsTable from "./dashboard/RegistrationsTable";
import ContactsTable from "./dashboard/ContactsTable";
import TeamSection from "./dashboard/TeamSection";
import ClassesSection from "./dashboard/ClassesSection";
import CalendarView from "./dashboard/CalendarView";
import PaymentsTable from "./dashboard/PaymentsTable";

// 3. IMPORT SPECIFIC TOOLBARS
import RegistrationsToolbar from "./dashboard/RegistrationsToolbar";
import ClassesToolbar from "./dashboard/ClassesToolbar";
import ContactsToolbar from "./dashboard/ContactsToolbar";
import PaymentsToolbar from "./dashboard/PaymentsToolbar";

const AdminDashboard = () => {
  // --- STATE ---
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [activeTab, setActiveTab] = useState("registrations");

  const [registrations, setRegistrations] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Unified Filters State
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    role: "All",
    level: "All",
    city: "All",
    assignee: "All",
    classId: "All",
    paymentMethod: "All",
    className: "All",
    professor: "All",
    startDate: "",
    endDate: "",
  });

  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "desc",
  });
  const [expandedRows, setExpandedRows] = useState({});

  // Forms & Modals
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });
  const [newClass, setNewClass] = useState({
    name: "",
    professor: "",
    mode: "Presential",
    days: [],
    startTime: "",
    endTime: "",
  });

  const [resetModal, setResetModal] = useState({
    show: false,
    id: null,
    name: "",
  });
  const [deleteModal, setDeleteModal] = useState({
    show: false,
    id: null,
    name: "",
  });
  const [deleteClassModal, setDeleteClassModal] = useState({
    show: false,
    id: null,
    name: "",
  });
  const [resetPassword, setResetPassword] = useState("");
  const [apptModal, setApptModal] = useState({
    show: false,
    id: null,
    date: "",
    time: "",
    note: "",
  });
  const [viewApptModal, setViewApptModal] = useState({
    show: false,
    data: null,
  });
  const [dayModal, setDayModal] = useState({
    show: false,
    date: null,
    appointments: [],
  });
  const [classModal, setClassModal] = useState(false);
  const [viewClass, setViewClass] = useState(null);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "success" }),
      3000
    );
  };

  // --- LOGIC ---
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      setUser(res.data.admin);
      localStorage.setItem("token", res.data.token);
      fetchData(res.data.token);
    } catch (err) {
      setAuthError("Identifiants incorrects");
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
  };
  const fetchData = async (token = localStorage.getItem("token")) => {
    if (!token) return;
    setLoading(true);
    try {
      const [r, c, a, cl] = await Promise.all([
        axios.get("http://localhost:5000/api/register"),
        axios.get("http://localhost:5000/api/contact"),
        axios.get("http://localhost:5000/api/auth"),
        axios.get("http://localhost:5000/api/classes"),
      ]);
      setRegistrations(r.data);
      setContacts(c.data);
      setAdmins(a.data);
      setClasses(cl.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // --- ACTIONS ---
  const handleAssignChange = async (id, val, type) => {
    try {
      await axios.put(
        type === "registration"
          ? `http://localhost:5000/api/register/${id}/assign`
          : `http://localhost:5000/api/contact/${id}/assign`,
        { adminName: val || null }
      );
      type === "registration"
        ? setRegistrations((prev) =>
            prev.map((i) => (i._id === id ? { ...i, assignedTo: val } : i))
          )
        : setContacts((prev) =>
            prev.map((i) => (i._id === id ? { ...i, assignedTo: val } : i))
          );
      showToast("Assignation mise à jour");
    } catch (e) {
      showToast("Erreur", "error");
    }
  };
  const handleStatusChange = async (id, val) => {
    try {
      await axios.put(`http://localhost:5000/api/register/${id}/status`, {
        status: val,
      });
      setRegistrations((prev) =>
        prev.map((i) => (i._id === id ? { ...i, status: val } : i))
      );
      if (viewApptModal.show)
        setViewApptModal((prev) => ({
          ...prev,
          data: { ...prev.data, status: val },
        }));
      showToast("Statut mis à jour");
    } catch (e) {
      showToast("Erreur", "error");
    }
  };
  const handleClassAssign = async (studentId, classId) => {
    try {
      await axios.put(`http://localhost:5000/api/register/${studentId}/class`, {
        classId: classId || null,
      });
      setRegistrations((prev) =>
        prev.map((i) =>
          i._id === studentId ? { ...i, assignedClass: classId || null } : i
        )
      );
      fetchData();
      showToast("Classe assignée");
    } catch (e) {
      showToast("Erreur", "error");
    }
  };
  const handleSaveAppointment = async (e) => {
    e.preventDefault();
    try {
      const d = new Date(`${apptModal.date}T${apptModal.time}`);
      await axios.put(
        `http://localhost:5000/api/register/${apptModal.id}/appointment`,
        { date: d, note: apptModal.note }
      );
      setRegistrations((prev) =>
        prev.map((i) =>
          i._id === apptModal.id
            ? { ...i, appointment: { date: d, note: apptModal.note } }
            : i
        )
      );
      setApptModal({ ...apptModal, show: false });
      showToast("RDV enregistré");
    } catch (e) {
      showToast("Erreur", "error");
    }
  };
  const handlePaymentUpdate = async (id, updateData) => {
    try {
      await axios.put(
        `http://localhost:5000/api/register/${id}/payment`,
        updateData
      );
      setRegistrations((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, ...updateData } : item
        )
      );
    } catch (err) {
      showToast("Erreur paiement", "error");
    }
  };

  // --- ADMIN & CLASS MANAGEMENT ---
  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/create", {
        ...newAdmin,
        creatorRole: user.role,
      });
      showToast("Admin créé");
      setNewAdmin({ name: "", email: "", password: "", role: "admin" });
      fetchData();
    } catch (e) {
      showToast("Erreur", "error");
    }
  };

  const handleCreateClass = async (e) => {
    e.preventDefault();
    try {
      const timeRange =
        newClass.startTime && newClass.endTime
          ? `${newClass.startTime} - ${newClass.endTime}`
          : newClass.startTime;
      const formattedSchedule =
        newClass.days.length > 0
          ? `${newClass.days.join(", ")} • ${timeRange}`
          : timeRange;
      await axios.post("http://localhost:5000/api/classes", {
        name: newClass.name,
        professor: newClass.professor,
        schedule: formattedSchedule,
        mode: newClass.mode,
      });
      showToast("Classe créée");
      setNewClass({
        name: "",
        professor: "",
        mode: "Presential",
        days: [],
        startTime: "",
        endTime: "",
      });
      setClassModal(false);
      fetchData();
    } catch (e) {
      showToast("Erreur", "error");
    }
  };

  const toggleDay = (day) =>
    setNewClass((prev) => {
      const exists = prev.days.includes(day);
      return {
        ...prev,
        days: exists ? prev.days.filter((d) => d !== day) : [...prev.days, day],
      };
    });

  const confirmDeleteClass = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/classes/${deleteClassModal.id}`
      );
      setDeleteClassModal({ show: false, id: null, name: "" });
      showToast("Classe supprimée");
      fetchData();
    } catch (e) {
      showToast("Erreur suppression", "error");
    }
  };

  const confirmDeleteAdmin = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/${deleteModal.id}`);
      setDeleteModal({ show: false });
      showToast("Admin supprimé");
      fetchData();
    } catch (e) {
      showToast("Erreur", "error");
    }
  };
  const submitResetPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/auth/${resetModal.id}`, {
        password: resetPassword,
        creatorRole: user.role,
      });
      setResetModal({ show: false });
      showToast("MDP réinitialisé");
    } catch (e) {
      showToast("Erreur", "error");
    }
  };

  // --- MODAL TRIGGERS ---
  const openApptModal = (reg) => {
    const apptDate = reg.appointment?.date
      ? new Date(reg.appointment.date)
      : new Date();
    const dateStr = reg.appointment?.date
      ? apptDate.toISOString().split("T")[0]
      : "";
    const timeStr = reg.appointment?.date
      ? apptDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      : "";
    setApptModal({
      show: true,
      id: reg._id,
      date: dateStr,
      time: timeStr,
      note: reg.appointment?.note || "",
    });
  };
  const openViewApptModal = (e, reg) => {
    e.stopPropagation();
    setViewApptModal({ show: true, data: reg });
  };

  // LOGIC TO OPEN DAY CALENDAR
  const openDayModal = (day) => {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const dailyAppointments = registrations.filter((r) => {
      if (!r.appointment?.date) return false;
      const apptDate = new Date(r.appointment.date);
      return (
        apptDate.getDate() === day &&
        apptDate.getMonth() === currentDate.getMonth() &&
        apptDate.getFullYear() === currentDate.getFullYear()
      );
    });
    setDayModal({
      show: true,
      date: selectedDate,
      appointments: dailyAppointments,
    });
  };

  // --- PROCESSING ---
  const toggleRow = (id) =>
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  const handleSort = (key) =>
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  const getSortIcon = (key) =>
    sortConfig.key === key ? (
      sortConfig.direction === "asc" ? (
        <ChevronUp size={16} className="text-blue-600" />
      ) : (
        <ChevronDown size={16} className="text-blue-600" />
      )
    ) : (
      <ArrowUpDown size={14} className="text-slate-400" />
    );
  const uniqueCities = useMemo(
    () => [...new Set(registrations.map((r) => r.city).filter(Boolean))].sort(),
    [registrations]
  );

  const sortData = (data) => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      let valA = a[sortConfig.key],
        valB = b[sortConfig.key];
      if (sortConfig.key === "date") {
        valA = new Date(valA).getTime();
        valB = new Date(valB).getTime();
      } else if (sortConfig.key === "appointment") {
        valA = a.appointment?.date ? new Date(a.appointment.date).getTime() : 0;
        valB = b.appointment?.date ? new Date(b.appointment.date).getTime() : 0;
      } else {
        valA = String(valA || "").toLowerCase();
        valB = String(valB || "").toLowerCase();
      }
      return valA < valB
        ? sortConfig.direction === "asc"
          ? -1
          : 1
        : valA > valB
        ? sortConfig.direction === "asc"
          ? 1
          : -1
        : 0;
    });
  };

  const processedRegistrations = useMemo(() => {
    let data = [...registrations];
    if (
      searchTerm ||
      filters.role !== "All" ||
      filters.level !== "All" ||
      filters.city !== "All" ||
      filters.assignee !== "All" ||
      filters.classId !== "All" ||
      filters.paymentMethod !== "All" ||
      filters.startDate ||
      filters.endDate
    ) {
      data = data.filter((reg) => {
        const matchSearch =
          (reg.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
          (reg.phone || "").includes(searchTerm);
        const matchRole =
          filters.role === "All" ||
          (filters.role === "Online" &&
            reg.role.toLowerCase().includes("online")) ||
          (filters.role === "Presential" &&
            !reg.role.toLowerCase().includes("online"));
        const matchLevel =
          filters.level === "All" || reg.level === filters.level;
        const matchCity = filters.city === "All" || reg.city === filters.city;
        const matchAssignee =
          filters.assignee === "All" || reg.assignedTo === filters.assignee;
        const matchClass =
          filters.classId === "All" || reg.assignedClass === filters.classId;
        const matchPayment =
          filters.paymentMethod === "All" ||
          reg.paymentMethod === filters.paymentMethod;
        const regDate = new Date(reg.date);
        const start = filters.startDate ? new Date(filters.startDate) : null;
        const end = filters.endDate ? new Date(filters.endDate) : null;
        if (end) end.setHours(23, 59, 59, 999);
        const matchDate =
          (!start || regDate >= start) && (!end || regDate <= end);
        return (
          matchSearch &&
          matchRole &&
          matchLevel &&
          matchCity &&
          matchAssignee &&
          matchClass &&
          matchPayment &&
          matchDate
        );
      });
    }
    return sortData(data);
  }, [registrations, searchTerm, filters, sortConfig]);

  const processedClasses = useMemo(() => {
    let data = [...classes];
    if (searchTerm)
      data = data.filter(
        (cls) =>
          cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cls.professor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    if (filters.className !== "All")
      data = data.filter((cls) => cls.name === filters.className);
    if (filters.professor !== "All")
      data = data.filter((cls) => cls.professor === filters.professor);
    return data;
  }, [classes, searchTerm, filters]);

  const processedContacts = useMemo(() => {
    if (!searchTerm) return contacts;
    return contacts.filter(
      (msg) =>
        (msg.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (msg.phone || "").includes(searchTerm)
    );
  }, [contacts, searchTerm]);

  // --- EXCEL EXPORT ---
  const downloadExcel = async () => {
    let dataToExport = [],
      sheetName = "",
      fileName = "",
      columns = [];
    if (activeTab === "registrations") {
      dataToExport = processedRegistrations;
      sheetName = "Étudiants";
      fileName = "Export_Etudiants";
      columns = [
        { header: "Nom", key: "name", width: 25 },
        { header: "Téléphone", key: "phone", width: 15 },
        { header: "Ville", key: "city", width: 15 },
        { header: "Mode", key: "role", width: 15 },
        { header: "Niveau", key: "level", width: 15 },
        { header: "Classe", key: "class", width: 20 },
        { header: "Date Inscription", key: "date", width: 18 },
        { header: "Statut CRM", key: "status", width: 20 },
        { header: "Responsable", key: "assignedTo", width: 20 },
        { header: "Paiement", key: "payMethod", width: 15 },
        { header: "Mois Payés", key: "paidMonths", width: 25 },
      ];
    } else if (activeTab === "payments") {
      dataToExport = processedRegistrations;
      sheetName = "Suivi Paiements";
      fileName = "Suivi_Paiements";
      columns = [
        { header: "Nom", key: "name", width: 25 },
        { header: "Classe", key: "class", width: 20 },
        { header: "Méthode", key: "payMethod", width: 15 },
        { header: "Mois Payés", key: "paidMonths", width: 40 },
        { header: "Mois En Attente", key: "pendingMonths", width: 40 },
        { header: "Téléphone", key: "phone", width: 15 },
        { header: "Responsable", key: "assignedTo", width: 20 },
        { header: "Date Inscription", key: "date", width: 18 },
      ];
    } else if (activeTab === "contacts") {
      dataToExport = processedContacts;
      sheetName = "Messages";
      fileName = "Export_Messages";
      columns = [
        { header: "Nom", key: "name", width: 25 },
        { header: "Téléphone", key: "phone", width: 15 },
        { header: "Email", key: "email", width: 25 },
        { header: "Message", key: "message", width: 50 },
        { header: "Date", key: "date", width: 15 },
        { header: "Assigné à", key: "assignedTo", width: 20 },
      ];
    } else {
      showToast("Export indisponible", "error");
      return;
    }

    if (dataToExport.length === 0) {
      showToast("Aucune donnée à exporter", "error");
      return;
    }
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(sheetName);
    worksheet.columns = columns;
    dataToExport.forEach((item) => {
      if (activeTab === "registrations" || activeTab === "payments") {
        const clsName =
          classes.find((c) => c._id === item.assignedClass)?.name ||
          "Non assigné";
        worksheet.addRow({
          name: item.name,
          phone: item.phone,
          city: item.city,
          role: cleanText(item.role),
          level: cleanText(item.level),
          class: clsName,
          assignedTo: item.assignedTo || "Non assigné",
          date: new Date(item.date).toLocaleDateString(),
          status: item.status,
          payMethod: item.paymentMethod || "-",
          paidMonths: (item.paidMonths || []).join(", "),
          pendingMonths: (item.pendingMonths || []).join(", "),
        });
      } else if (activeTab === "contacts") {
        worksheet.addRow({
          name: item.name,
          phone: item.phone,
          email: item.email,
          message: item.message,
          date: new Date(item.date).toLocaleDateString(),
          assignedTo: item.assignedTo || "Non assigné",
        });
      }
    });
    const headerRow = worksheet.getRow(1);
    headerRow.font = {
      name: "Arial",
      size: 11,
      bold: true,
      color: { argb: "FFFFFFFF" },
    };
    headerRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF004C73" },
    };
    headerRow.alignment = { vertical: "middle", horizontal: "center" };
    headerRow.height = 32;
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell) => {
        cell.border = {
          top: { style: "thin", color: { argb: "FFCCCCCC" } },
          left: { style: "thin", color: { argb: "FFCCCCCC" } },
          bottom: { style: "thin", color: { argb: "FFCCCCCC" } },
          right: { style: "thin", color: { argb: "FFCCCCCC" } },
        };
        if (rowNumber % 2 === 0 && rowNumber > 1)
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFF9FAFB" },
          };
        if (rowNumber > 1)
          cell.alignment = {
            vertical: "middle",
            horizontal: "left",
            wrapText: true,
          };
      });
    });
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(
      new Blob([buffer]),
      `${fileName}_${new Date().toISOString().split("T")[0]}.xlsx`
    );
  };

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-[#003a57] p-6">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-fade-in">
          <div className="h-2 w-full bg-gradient-to-r from-emerald-400 to-[#004C73]"></div>
          <div className="p-10 flex flex-col">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-[#004C73]/10 text-[#004C73] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock size={32} />
              </div>
              <h1 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">
                Bienvenue
              </h1>
              <p className="text-slate-500 text-sm font-medium">
                Connectez-vous à votre espace d'administration
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                  Email
                </label>
                <div className="relative group">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#004C73] transition-colors"
                    size={18}
                  />
                  <input
                    type="email"
                    placeholder="admin@gmed.com"
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#004C73]/20 focus:border-[#004C73] transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                  Mot de passe
                </label>
                <div className="relative group">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#004C73] transition-colors"
                    size={18}
                  />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#004C73]/20 focus:border-[#004C73] transition-all"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              {authError && (
                <div className="bg-red-50 text-red-600 text-sm font-bold p-3 rounded-lg flex items-center gap-2 animate-shake">
                  <AlertCircle size={16} /> {authError}
                </div>
              )}
              <button className="w-full bg-[#004C73] hover:bg-[#003a57] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2 group">
                <span>Se connecter</span>
                <ArrowRight
                  size={18}
                  className="opacity-70 group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>
          <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
            <p className="text-xs text-slate-400 font-medium">
              © 2025 GMED Center - Portail Admin
            </p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#004C73]/15 relative font-sans text-sm">
      <div className="bg-white border-b border-slate-200 px-6 py-3 flex justify-between items-center shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="bg-[#004C73] text-white p-2 rounded-lg font-bold">
            GM
          </div>
          <div>
            <h1 className="font-bold text-slate-800 text-base">
              Portail Admin
            </h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-wide">
              {user.name}
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-slate-500 hover:text-red-600 font-bold transition-colors text-xs"
        >
          <LogOut size={16} /> Déconnexion
        </button>
      </div>

      <div className="max-w-[1600px] mx-auto p-4">
        <DashboardToolbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          user={user}
          counts={{
            registrations: registrations.length,
            contacts: contacts.length,
          }}
        />
        {activeTab === "registrations" && (
          <RegistrationsToolbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filters={filters}
            setFilters={setFilters}
            uniqueCities={uniqueCities}
            admins={admins}
            fetchData={fetchData}
            downloadExcel={downloadExcel}
            loading={loading}
          />
        )}
        {activeTab === "classes" && (
          <ClassesToolbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filters={filters}
            setFilters={setFilters}
            classes={classes}
            openClassModal={setClassModal}
          />
        )}
        {activeTab === "contacts" && (
          <ContactsToolbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filters={filters}
            setFilters={setFilters}
            admins={admins}
            fetchData={fetchData}
            downloadExcel={downloadExcel}
          />
        )}
        {activeTab === "payments" && (
          <PaymentsToolbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filters={filters}
            setFilters={setFilters}
            admins={admins}
            classes={classes}
            fetchData={fetchData}
            downloadExcel={downloadExcel}
            loading={loading}
          />
        )}

        <div
          className={
            activeTab === "calendar"
              ? ""
              : "bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden min-h-[500px] flex flex-col"
          }
        >
          {activeTab === "registrations" && (
            <RegistrationsTable
              data={processedRegistrations}
              admins={admins}
              classes={classes}
              handleSort={handleSort}
              getSortIcon={getSortIcon}
              expandedRows={expandedRows}
              toggleRow={toggleRow}
              handleAssignChange={handleAssignChange}
              handleStatusChange={handleStatusChange}
              handleClassAssign={handleClassAssign}
              openApptModal={openApptModal}
            />
          )}
          {activeTab === "payments" && (
            <PaymentsTable
              data={processedRegistrations}
              classes={classes}
              handlePaymentUpdate={handlePaymentUpdate}
            />
          )}
          {activeTab === "classes" && (
            <ClassesSection
              classes={processedClasses}
              registrations={registrations}
              openClassDetails={setViewClass}
              onDeleteClass={(id, name) =>
                setDeleteClassModal({ show: true, id, name })
              }
            />
          )}
          {activeTab === "contacts" && (
            <ContactsTable
              data={processedContacts}
              admins={admins}
              handleSort={handleSort}
              getSortIcon={getSortIcon}
              handleAssignChange={handleAssignChange}
            />
          )}
          {activeTab === "team" && (
            <TeamSection
              admins={admins}
              user={user}
              openResetModal={(id, name) => {
                setResetModal({ show: true, id, name });
                setResetPassword("");
              }}
              openDeleteModal={(id, name) =>
                setDeleteModal({ show: true, id, name })
              }
              handleCreateAdmin={handleCreateAdmin}
              newAdmin={newAdmin}
              setNewAdmin={setNewAdmin}
            />
          )}
          {activeTab === "calendar" && (
            <CalendarView
              registrations={registrations}
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              openDayModal={openDayModal}
              openViewApptModal={openViewApptModal}
            />
          )}
        </div>
      </div>

      {/* --- MODALS --- */}

      {/* 1. APPOINTMENT MODAL */}
      {apptModal.show && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[70] animate-fade-in backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl p-0 overflow-hidden scale-100 transition-all">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <CalendarDays size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    Planifier RDV
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Sélectionnez la date et l'heure
                  </p>
                </div>
              </div>
              <button
                onClick={() => setApptModal({ show: false })}
                className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSaveAppointment} className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                    Date
                  </label>
                  <div className="relative group">
                    <CalendarDays
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                      size={16}
                    />
                    <input
                      type="date"
                      required
                      className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
                      value={apptModal.date}
                      onChange={(e) =>
                        setApptModal({ ...apptModal, date: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                    Heure
                  </label>
                  <div className="relative group">
                    <Clock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                      size={16}
                    />
                    <input
                      type="time"
                      required
                      className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
                      value={apptModal.time}
                      onChange={(e) =>
                        setApptModal({ ...apptModal, time: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                  Note (Optionnel)
                </label>
                <div className="relative group">
                  <FileText
                    className="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                    size={16}
                  />
                  <textarea
                    rows="3"
                    className="w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none placeholder:text-slate-400"
                    placeholder="Ajouter une note ou un rappel..."
                    value={apptModal.note}
                    onChange={(e) =>
                      setApptModal({ ...apptModal, note: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>
              <button className="w-full py-3.5 bg-[#004C73] hover:bg-[#003a57] text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <CheckCircle size={18} /> Enregistrer le rendez-vous
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. CREATE CLASS MODAL */}
      {classModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[70] animate-fade-in backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl p-0 overflow-hidden scale-100 transition-all">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    Nouvelle Classe
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Créer un nouveau groupe d'étude
                  </p>
                </div>
              </div>
              <button
                onClick={() => setClassModal(false)}
                className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleCreateClass} className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                    Nom de la classe
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: A1 - Soir"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    value={newClass.name}
                    onChange={(e) =>
                      setNewClass({ ...newClass, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                    Professeur
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Mme. Sarah"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    value={newClass.professor}
                    onChange={(e) =>
                      setNewClass({ ...newClass, professor: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                  Mode d'enseignement
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setNewClass({ ...newClass, mode: "Presential" })
                    }
                    className={`py-2.5 rounded-xl text-sm font-bold border flex items-center justify-center gap-2 transition-all ${
                      newClass.mode === "Presential"
                        ? "bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm"
                        : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    <MapPin size={16} /> Présentiel
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewClass({ ...newClass, mode: "Online" })}
                    className={`py-2.5 rounded-xl text-sm font-bold border flex items-center justify-center gap-2 transition-all ${
                      newClass.mode === "Online"
                        ? "bg-purple-50 border-purple-500 text-purple-700 shadow-sm"
                        : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    <Globe size={16} /> En ligne
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                  Horaire (Jours & Heures)
                </label>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-4">
                  <div className="flex justify-between items-center">
                    {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map(
                      (day) => {
                        const isSelected = newClass.days.includes(day);
                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => toggleDay(day)}
                            className={`w-9 h-9 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                              isSelected
                                ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30 scale-110"
                                : "bg-white text-slate-500 border border-slate-200 hover:border-emerald-300 hover:text-emerald-600"
                            }`}
                          >
                            {day.charAt(0)}
                          </button>
                        );
                      }
                    )}
                  </div>
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-200/60">
                    <div className="flex-1 space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        Début
                      </span>
                      <div className="relative">
                        <input
                          type="time"
                          required
                          className="w-full pl-2 pr-1 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                          value={newClass.startTime}
                          onChange={(e) =>
                            setNewClass({
                              ...newClass,
                              startTime: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 mt-4" />
                    <div className="flex-1 space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        Fin
                      </span>
                      <div className="relative">
                        <input
                          type="time"
                          required
                          className="w-full pl-2 pr-1 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                          value={newClass.endTime}
                          onChange={(e) =>
                            setNewClass({
                              ...newClass,
                              endTime: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-2">
                <CheckCircle size={18} /> Créer la classe
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 3. VIEW CLASS DETAILS MODAL */}
      {viewClass && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[70] animate-fade-in backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl p-0 overflow-hidden flex flex-col max-h-[85vh]">
            <div className="bg-slate-50 px-6 py-5 border-b border-slate-200 flex justify-between items-start">
              <div className="flex gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                    viewClass.mode === "Online"
                      ? "bg-purple-100 text-purple-600"
                      : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  {viewClass.mode === "Online" ? (
                    <Globe size={24} />
                  ) : (
                    <Briefcase size={24} />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {viewClass.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap size={14} /> {viewClass.professor}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} /> {viewClass.schedule}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setViewClass(null)}
                className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 bg-slate-50/50 flex-grow overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-700 flex items-center gap-2">
                  <Users size={18} className="text-slate-400" /> Étudiants
                  inscrits
                </h4>
                <span className="text-xs font-bold bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600">
                  {
                    registrations.filter(
                      (r) => r.assignedClass === viewClass._id
                    ).length
                  }{" "}
                  Étudiants
                </span>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 overflow-y-auto flex-grow shadow-sm">
                {registrations.filter((r) => r.assignedClass === viewClass._id)
                  .length === 0 ? (
                  <div className="p-12 text-center text-slate-400">
                    Aucun étudiant dans cette classe.
                  </div>
                ) : (
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-500 border-b border-slate-100 uppercase text-xs sticky top-0">
                      <tr>
                        <th className="p-4 font-bold">Nom</th>
                        <th className="p-4 font-bold">Ville</th>
                        <th className="p-4 font-bold">Statut</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {registrations
                        .filter((r) => r.assignedClass === viewClass._id)
                        .map((student) => (
                          <tr
                            key={student._id}
                            className="hover:bg-slate-50 transition-colors"
                          >
                            <td className="p-4 font-bold text-slate-700">
                              {student.name}{" "}
                              <span className="block text-xs font-normal text-slate-400">
                                {student.phone}
                              </span>
                            </td>
                            <td className="p-4 text-slate-500">
                              {student.city}
                            </td>
                            <td className="p-4">
                              <span
                                className={`px-2 py-1 rounded text-[10px] font-bold border ${
                                  crmStatuses.includes(student.status)
                                    ? "bg-blue-50 text-blue-700 border-blue-100"
                                    : "bg-slate-50 text-slate-500 border-slate-200"
                                }`}
                              >
                                {student.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. CONFIRM DELETE CLASS MODAL */}
      {deleteClassModal.show && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[80]">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 relative">
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-lg font-bold text-center">
                Supprimer cette classe ?
              </h3>
              <p className="text-center text-sm text-slate-500 mt-2">
                Vous êtes sur le point de supprimer{" "}
                <span className="font-bold text-slate-700">
                  "{deleteClassModal.name}"
                </span>
                . Cette action est irréversible.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() =>
                  setDeleteClassModal({ show: false, id: null, name: "" })
                }
                className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 font-bold text-slate-600 rounded-xl transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={confirmDeleteClass}
                className="flex-1 py-2.5 bg-red-500 hover:bg-red-600 font-bold text-white rounded-xl transition-colors shadow-lg shadow-red-500/20"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. VIEW APPOINTMENT DETAILS */}
      {viewApptModal.show && viewApptModal.data && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[60]">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden relative">
            <div className="bg-[#004C73] p-6 text-white">
              <button
                onClick={() => setViewApptModal({ show: false, data: null })}
                className="absolute top-4 right-4 text-white"
              >
                <X size={20} />
              </button>
              <h3 className="text-xl font-bold">{viewApptModal.data.name}</h3>
              <p className="text-sm opacity-90">
                {viewApptModal.data.city} •{" "}
                {cleanText(viewApptModal.data.level)}
              </p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="text-blue-600" />
                <div>
                  <p className="font-bold text-lg">
                    {new Date(
                      viewApptModal.data.appointment.date
                    ).toLocaleDateString()}
                  </p>
                  <p className="text-blue-600 font-bold">
                    {new Date(
                      viewApptModal.data.appointment.date
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
              {viewApptModal.data.appointment.note && (
                <div className="bg-slate-50 p-3 rounded border border-slate-100 italic text-slate-600">
                  "{viewApptModal.data.appointment.note}"
                </div>
              )}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t">
                <button
                  onClick={() => openApptModal(viewApptModal.data)}
                  className="bg-slate-100 text-slate-700 font-bold py-2 rounded flex items-center justify-center gap-2"
                >
                  <Edit3 size={16} /> Modifier
                </button>
                <select
                  className="bg-blue-600 text-white font-bold py-2 rounded text-center"
                  value={viewApptModal.data.status}
                  onChange={(e) =>
                    handleStatusChange(viewApptModal.data._id, e.target.value)
                  }
                >
                  {crmStatuses.map((s, i) => (
                    <option
                      key={i}
                      value={s}
                      className="text-slate-800 bg-white"
                    >
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. DAY CALENDAR MODAL (PREMIUM DESIGN) */}
      {dayModal.show && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[80] animate-fade-in backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl p-0 overflow-hidden scale-100 transition-all max-h-[85vh] flex flex-col">
            {/* Header */}
            <div className="bg-[#004C73] p-6 text-white relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <h3 className="text-3xl font-black capitalize tracking-tight leading-none">
                    {dayModal.date?.toLocaleDateString("fr-FR", {
                      weekday: "long",
                    })}
                  </h3>
                  <p className="text-blue-200 font-medium text-lg mt-1">
                    {dayModal.date?.toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <button
                  onClick={() =>
                    setDayModal({ show: false, date: null, appointments: [] })
                  }
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all backdrop-blur-md"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 overflow-y-auto bg-slate-50 flex-grow">
              {dayModal.appointments.length === 0 ? (
                <div className="h-48 flex flex-col items-center justify-center text-slate-400 space-y-3">
                  <div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm">
                    <CalendarDays size={28} className="opacity-40" />
                  </div>
                  <p className="text-sm font-medium">
                    Aucun rendez-vous prévu.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {dayModal.appointments
                    .sort(
                      (a, b) =>
                        new Date(a.appointment.date) -
                        new Date(b.appointment.date)
                    )
                    .map((reg) => {
                      const time = new Date(
                        reg.appointment.date
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      });
                      return (
                        <div
                          key={reg._id}
                          onClick={(e) => {
                            e.stopPropagation();
                            setViewApptModal({ show: true, data: reg });
                          }}
                          className="group bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300/50 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-3 relative overflow-hidden"
                        >
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#004C73] group-hover:w-1.5 transition-all"></div>
                          <div className="ml-2 bg-slate-50 group-hover:bg-blue-50 border border-slate-100 group-hover:border-blue-100 rounded-lg px-2.5 py-2 flex flex-col items-center justify-center min-w-[60px] transition-colors">
                            <span className="text-xs font-bold text-slate-400 group-hover:text-blue-400 uppercase">
                              Heure
                            </span>
                            <span className="text-sm font-black text-slate-700 group-hover:text-blue-700">
                              {time}
                            </span>
                          </div>
                          <div className="flex-grow pl-1">
                            <h4 className="font-bold text-slate-800 text-base leading-tight group-hover:text-[#004C73] transition-colors">
                              {reg.name}
                            </h4>
                            <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-500 font-medium">
                              <MapPin size={12} className="text-slate-400" />{" "}
                              {reg.city}
                            </div>
                          </div>
                          <div className="pr-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-200">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                              <ChevronRight size={16} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>

            {/* Footer */}
            {dayModal.appointments.length > 0 && (
              <div className="bg-white border-t border-slate-200 px-6 py-3 text-xs font-bold text-slate-500 uppercase flex justify-between items-center shrink-0">
                <span>Total</span>
                <span className="bg-[#004C73] text-white px-2 py-0.5 rounded-md text-[10px]">
                  {dayModal.appointments.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 7. DELETE ADMIN MODAL */}
      {deleteModal.show && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 relative">
            <div className="flex flex-col items-center mb-6">
              <AlertTriangle className="text-red-500 mb-2" size={32} />
              <h3 className="text-lg font-bold">Supprimer l'admin ?</h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setDeleteModal({ show: false })}
                className="flex-1 py-2 bg-slate-100 rounded"
              >
                Annuler
              </button>
              <button
                onClick={confirmDeleteAdmin}
                className="flex-1 py-2 bg-red-600 text-white rounded"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. RESET PASSWORD MODAL (NEW DESIGN) */}
      {resetModal.show && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[80]">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 relative">
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4">
                <Key size={32} />
              </div>
              <h3 className="text-lg font-bold text-center">
                Réinitialiser le mot de passe
              </h3>
              <p className="text-center text-sm text-slate-500 mt-2">
                Nouveau mot de passe pour{" "}
                <span className="font-bold text-slate-700">
                  {resetModal.name}
                </span>
              </p>
            </div>
            <form onSubmit={submitResetPassword} className="space-y-4">
              <div className="relative group">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={16}
                />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  placeholder="Nouveau mot de passe"
                  value={resetPassword}
                  onChange={(e) => setResetPassword(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setResetModal({ show: false })}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 font-bold text-slate-600 rounded-xl transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-xl transition-colors shadow-lg shadow-blue-600/20"
                >
                  Sauvegarder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 9. TOAST NOTIFICATION */}
      {toast.show && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-up z-[100] text-white font-bold ${
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
