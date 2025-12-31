import React, { useState, useMemo } from "react";
import axios from "axios";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
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
  Calendar,
  Download,
  ChevronUp,
  ChevronDown,
  MapPin,
  ArrowUpDown,
  UserCheck,
  CalendarDays,
  FileText,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Clock,
  Edit3,
  Briefcase,
  School,
  Plus,
  User,
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
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  // --- CALENDAR STATE ---
  const [currentDate, setCurrentDate] = useState(new Date());

  // --- FILTER STATE ---
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");
  const [cityFilter, setCityFilter] = useState("All");
  const [assigneeFilter, setAssigneeFilter] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // --- SORTING & EXPANSION ---
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "desc",
  });

  // 👇 THIS IS THE MISSING PART CAUSING YOUR ERROR
  const [expandedRows, setExpandedRows] = useState({});

  // --- FORMS ---
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });
  const [newClass, setNewClass] = useState({
    name: "",
    professor: "",
    schedule: "",
  });

  // --- MODAL STATES ---
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

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  // ==================================================================================
  // HELPER: CLEAN TEXT
  // ==================================================================================
  const cleanText = (text) => {
    if (!text) return "";
    return String(text).split("(")[0].trim();
  };

  // ==================================================================================
  // HELPER 1: CRM STATUS COLORS
  // ==================================================================================
  const crmStatuses = [
    "Nouveau prospect",
    "Appel 1",
    "Appel 2",
    "Appel 3",
    "Intéressé",
    "Proposition envoyée",
    "Hésitant",
    "Relance paiement 1",
    "Relance paiement 2",
    "Inscrit",
    "Futur client",
    "Perdu",
  ];

  const getStatusStyle = (status) => {
    const s = status || "Nouveau prospect";
    switch (s) {
      case "Nouveau prospect":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Appel 1":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "Appel 2":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Appel 3":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "Intéressé":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "Proposition envoyée":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Hésitant":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Relance paiement 1":
        return "bg-rose-100 text-rose-700 border-rose-200";
      case "Relance paiement 2":
        return "bg-rose-200 text-rose-800 border-rose-300";
      case "Inscrit":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Futur client":
        return "bg-cyan-100 text-cyan-800 border-cyan-200";
      case "Perdu":
        return "bg-slate-200 text-slate-600 border-slate-300";
      default:
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  // ==================================================================================
  // HELPER 2: LEVEL COLORS
  // ==================================================================================
  const getLevelStyle = (levelStr) => {
    if (!levelStr) return "bg-slate-100 text-slate-600 border-slate-200";
    const lvl = String(levelStr).substring(0, 2).toUpperCase();
    switch (lvl) {
      case "A1":
        return "bg-green-100 text-green-700 border-green-200";
      case "A2":
        return "bg-green-200 text-green-800 border-green-300";
      case "B1":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "B2":
        return "bg-blue-200 text-blue-900 border-blue-300";
      case "C1":
        return "bg-red-50 text-[#800020] border-[#800020]/20 font-bold";
      default:
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  // ==================================================================================
  // HELPER 3: CITY COLORS
  // ==================================================================================
  const getCityStyle = (city) => {
    if (!city) return "bg-slate-100 text-slate-500 border-slate-200";
    const map = {
      Rabat: "bg-blue-100 text-blue-700 border-blue-200",
      Salé: "bg-sky-100 text-sky-700 border-sky-200",
      Témara: "bg-teal-100 text-teal-700 border-teal-200",
      Harhoura: "bg-cyan-100 text-cyan-600 border-cyan-200",
      Skhirate: "bg-indigo-100 text-indigo-800 border-indigo-200",
      Bouznika: "bg-emerald-100 text-emerald-600 border-emerald-200",
      Kénitra: "bg-cyan-50 text-cyan-600 border-cyan-100",
      "Sidi Taibi": "bg-green-50 text-green-600 border-green-200",
      Mehdia: "bg-teal-50 text-teal-700 border-teal-200",
      Bouknadel: "bg-emerald-200 text-emerald-800 border-emerald-300",
      "Sidi Slimane": "bg-lime-100 text-lime-800 border-lime-200",
      "Sidi Kacem": "bg-green-200 text-green-800 border-green-300",
      Khemisset: "bg-green-100 text-green-900 border-green-200",
      Tiflet: "bg-green-200 text-green-950 border-green-300",
      Agadir: "bg-orange-100 text-orange-600 border-orange-200",
      Agdz: "bg-orange-200 text-orange-800 border-orange-300",
      Aghbala: "bg-amber-100 text-amber-700 border-amber-200",
      Agourai: "bg-amber-200 text-amber-800 border-amber-300",
      Casablanca: "bg-white text-slate-800 border-slate-300",
    };
    return map[city] || "bg-slate-100 text-slate-500 border-slate-200";
  };

  // ==================================================================================
  // HELPER 4: ADMIN COLORS
  // ==================================================================================
  const getAdminColor = (name) => {
    if (!name) return "bg-slate-100 text-slate-500 border-slate-200";
    const colors = [
      "bg-blue-100 text-blue-700 border-blue-200",
      "bg-purple-100 text-purple-700 border-purple-200",
      "bg-orange-100 text-orange-700 border-orange-200",
      "bg-pink-100 text-pink-700 border-pink-200",
      "bg-cyan-100 text-cyan-700 border-cyan-200",
      "bg-emerald-100 text-emerald-700 border-emerald-200",
      "bg-violet-100 text-violet-700 border-violet-200",
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "success" }),
      3000
    );
  };

  // ==================================================================================
  // 1. DATA FETCHING & AUTH
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
      setAuthError(err.response?.data?.message || "Échec de la connexion");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    setRegistrations([]);
    setContacts([]);
    setAdmins([]);
    setClasses([]);
    setEmail("");
    setPassword("");
    setAuthError("");
  };

  const fetchData = async (token = localStorage.getItem("token")) => {
    if (!token) return;
    setLoading(true);
    try {
      const [regRes, contactRes, adminRes, classRes] = await Promise.all([
        axios.get("http://localhost:5000/api/register"),
        axios.get("http://localhost:5000/api/contact"),
        axios.get("http://localhost:5000/api/auth"),
        axios.get("http://localhost:5000/api/classes"),
      ]);
      setRegistrations(regRes.data);
      setContacts(contactRes.data);
      setAdmins(adminRes.data);
      setClasses(classRes.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  // ==================================================================================
  // 2. ASSIGNMENT & STATUS
  // ==================================================================================
  const handleAssignChange = async (id, newAssignee, type) => {
    const assigneeValue = newAssignee === "" ? null : newAssignee;
    const endpoint =
      type === "registration"
        ? `http://localhost:5000/api/register/${id}/assign`
        : `http://localhost:5000/api/contact/${id}/assign`;

    try {
      await axios.put(endpoint, { adminName: assigneeValue });
      if (type === "registration") {
        setRegistrations((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, assignedTo: assigneeValue } : item
          )
        );
        if (viewApptModal.show && viewApptModal.data._id === id) {
          setViewApptModal((prev) => ({
            ...prev,
            data: { ...prev.data, assignedTo: assigneeValue },
          }));
        }
      } else {
        setContacts((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, assignedTo: assigneeValue } : item
          )
        );
      }
      showToast(
        assigneeValue ? `Assigné à ${assigneeValue}` : "Assignation retirée",
        "success"
      );
    } catch (err) {
      showToast("Erreur lors de l'assignation", "error");
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/register/${id}/status`, {
        status: newStatus,
      });
      setRegistrations((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: newStatus } : item
        )
      );
      if (viewApptModal.show && viewApptModal.data._id === id) {
        setViewApptModal((prev) => ({
          ...prev,
          data: { ...prev.data, status: newStatus },
        }));
      }
      showToast(`Statut mis à jour`, "success");
    } catch (err) {
      showToast("Erreur mise à jour statut", "error");
    }
  };

  const handleClassAssign = async (studentId, classId) => {
    try {
      const val = classId === "" ? null : classId;
      await axios.put(`http://localhost:5000/api/register/${studentId}/class`, {
        classId: val,
      });
      setRegistrations((prev) =>
        prev.map((item) =>
          item._id === studentId ? { ...item, assignedClass: val } : item
        )
      );
      fetchData();
      showToast("Classe mise à jour", "success");
    } catch (err) {
      showToast("Erreur assignation classe", "error");
    }
  };

  const handleCreateClass = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/classes", newClass);
      showToast("Classe créée !", "success");
      setNewClass({ name: "", professor: "", schedule: "" });
      setClassModal(false);
      fetchData();
    } catch (err) {
      showToast("Erreur création classe", "error");
    }
  };

  // ==================================================================================
  // 3. APPOINTMENT LOGIC
  // ==================================================================================
  const openApptModal = (reg) => {
    let date = "";
    let time = "";
    let note = "";

    if (reg.appointment && reg.appointment.date) {
      const d = new Date(reg.appointment.date);
      date = d.toISOString().split("T")[0];
      time = d.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      note = reg.appointment.note || "";
    }
    setApptModal({ show: true, id: reg._id, date, time, note });
    setViewApptModal({ show: false, data: null });
  };

  const openViewApptModal = (e, reg) => {
    e.stopPropagation();
    setViewApptModal({ show: true, data: reg });
  };

  const openDayModal = (day) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const apps = registrations
      .filter((reg) => {
        if (reg.appointment?.date) {
          const d = new Date(reg.appointment.date);
          return (
            d.getDate() === day &&
            d.getMonth() === month &&
            d.getFullYear() === year
          );
        }
        return false;
      })
      .sort(
        (a, b) => new Date(a.appointment.date) - new Date(b.appointment.date)
      );

    setDayModal({
      show: true,
      date: new Date(year, month, day),
      appointments: apps,
    });
  };

  const handleSaveAppointment = async (e) => {
    e.preventDefault();
    try {
      const fullDate = new Date(`${apptModal.date}T${apptModal.time}`);
      await axios.put(
        `http://localhost:5000/api/register/${apptModal.id}/appointment`,
        {
          date: fullDate,
          note: apptModal.note,
        }
      );

      setRegistrations((prev) =>
        prev.map((item) =>
          item._id === apptModal.id
            ? { ...item, appointment: { date: fullDate, note: apptModal.note } }
            : item
        )
      );

      setApptModal({ show: false, id: null, date: "", time: "", note: "" });
      showToast("Rendez-vous enregistré !", "success");
    } catch (err) {
      showToast("Erreur lors de l'enregistrement", "error");
    }
  };

  // ==================================================================================
  // 4. SORTING & PROCESSING
  // ==================================================================================
  const toggleRow = (id) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key)
      return <ArrowUpDown size={14} className="text-slate-400" />;
    return sortConfig.direction === "asc" ? (
      <ChevronUp size={16} className="text-blue-600" />
    ) : (
      <ChevronDown size={16} className="text-blue-600" />
    );
  };

  const sortData = (data) => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      let valA = a[sortConfig.key];
      let valB = b[sortConfig.key];

      if (sortConfig.key === "date") {
        valA = new Date(valA || "").getTime();
        valB = new Date(valB || "").getTime();
      } else if (sortConfig.key === "appointment") {
        valA = a.appointment?.date ? new Date(a.appointment.date).getTime() : 0;
        valB = b.appointment?.date ? new Date(b.appointment.date).getTime() : 0;
      } else {
        valA = String(valA || "").toLowerCase();
        valB = String(valB || "").toLowerCase();
      }

      if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
      if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  };

  const uniqueCities = useMemo(() => {
    const cities = registrations.map((r) => r.city).filter(Boolean);
    return [...new Set(cities)].sort();
  }, [registrations]);

  const processedRegistrations = useMemo(() => {
    let data = [...registrations];

    // FILTERING
    if (
      searchTerm ||
      roleFilter !== "All" ||
      levelFilter !== "All" ||
      cityFilter !== "All" ||
      assigneeFilter !== "All" ||
      startDate ||
      endDate
    ) {
      data = data.filter((reg) => {
        const lowerSearch = searchTerm.toLowerCase();
        const searchMatch =
          (reg.name || "").toLowerCase().includes(lowerSearch) ||
          (reg.phone || "").includes(lowerSearch);

        const roleMatch =
          roleFilter === "All" ||
          (roleFilter === "Online" &&
            reg.role.toLowerCase().includes("online")) ||
          (roleFilter === "Presential" &&
            !reg.role.toLowerCase().includes("online"));
        const levelMatch = levelFilter === "All" || reg.level === levelFilter;
        const cityMatch = cityFilter === "All" || reg.city === cityFilter;
        const assigneeMatch =
          assigneeFilter === "All" || reg.assignedTo === assigneeFilter;

        const regDate = new Date(reg.date);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;
        if (end) end.setHours(23, 59, 59, 999);
        const dateMatch =
          (!start || regDate >= start) && (!end || regDate <= end);

        return (
          searchMatch &&
          roleMatch &&
          levelMatch &&
          cityMatch &&
          assigneeMatch &&
          dateMatch
        );
      });
    }

    return sortData(data);
  }, [
    registrations,
    searchTerm,
    roleFilter,
    levelFilter,
    cityFilter,
    assigneeFilter,
    startDate,
    endDate,
    sortConfig,
  ]);

  const processedClasses = useMemo(() => {
    if (!searchTerm) return classes;
    return classes.filter(
      (cls) =>
        cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cls.professor.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [classes, searchTerm]);

  const processedContacts = useMemo(() => {
    let data = [...contacts];
    if (searchTerm || startDate || endDate) {
      data = data.filter((msg) => {
        const lowerSearch = searchTerm.toLowerCase();
        const searchMatch =
          (msg.name || "").toLowerCase().includes(lowerSearch) ||
          (msg.phone || "").includes(lowerSearch);

        const msgDate = new Date(msg.date);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;
        if (end) end.setHours(23, 59, 59, 999);
        const dateMatch =
          (!start || msgDate >= start) && (!end || msgDate <= end);

        return searchMatch && dateMatch;
      });
    }
    return sortData(data);
  }, [contacts, searchTerm, startDate, endDate, sortConfig]);

  // ==================================================================================
  // 5. EXCEL EXPORT (EXCELJS)
  // ==================================================================================
  const downloadExcel = async () => {
    const dataToExport =
      activeTab === "registrations"
        ? processedRegistrations
        : processedContacts;
    if (dataToExport.length === 0) {
      showToast("Aucune donnée à exporter", "error");
      return;
    }

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(
      activeTab === "registrations" ? "Etudiants" : "Messages"
    );

    if (activeTab === "registrations") {
      worksheet.columns = [
        { header: "Nom Complet", key: "name", width: 25 },
        { header: "Téléphone", key: "phone", width: 15 },
        { header: "Ville", key: "city", width: 15 },
        { header: "Mode", key: "role", width: 15 },
        { header: "Niveau", key: "level", width: 10 },
        { header: "Assigné à", key: "assignedTo", width: 20 },
        { header: "Date Insc.", key: "date", width: 15 },
        { header: "Statut CRM", key: "status", width: 20 },
        { header: "RDV Date", key: "apptDate", width: 15 },
        { header: "RDV Note", key: "apptNote", width: 30 },
      ];
    } else {
      worksheet.columns = [
        { header: "Nom", key: "name", width: 25 },
        { header: "Email", key: "email", width: 25 },
        { header: "Téléphone", key: "phone", width: 15 },
        { header: "Message", key: "message", width: 40 },
        { header: "Assigné à", key: "assignedTo", width: 20 },
        { header: "Date", key: "date", width: 15 },
      ];
    }

    dataToExport.forEach((item) => {
      const row = {
        ...item,
        role: cleanText(item.role),
        level: cleanText(item.level),
        assignedTo: item.assignedTo || "Non assigné",
        status: item.status || "Nouveau prospect",
        date: new Date(item.date).toLocaleDateString(),
        message: item.message
          ? item.message.replace(/(\r\n|\n|\r)/gm, " ")
          : "",
        apptDate: item.appointment?.date
          ? new Date(item.appointment.date).toLocaleDateString() +
            " " +
            new Date(item.appointment.date).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : "",
        apptNote: item.appointment?.note || "",
      };
      worksheet.addRow(row);
    });

    const headerRow = worksheet.getRow(1);
    headerRow.eachCell((cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF004C73" },
      };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });
    headerRow.height = 25;

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber !== 1) {
        row.eachCell((cell) => {
          cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" },
          };
          cell.alignment = {
            vertical: "middle",
            horizontal: "left",
            wrapText: true,
          };
        });
      }
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(
      blob,
      `GMED_Export_${activeTab}_${new Date().toISOString().slice(0, 10)}.xlsx`
    );
  };

  // ==================================================================================
  // 7. ADMIN LOGIC (Create/Delete/Reset)
  // ==================================================================================
  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/create", {
        ...newAdmin,
        creatorRole: user.role,
      });
      showToast("Admin créé avec succès !", "success");
      setNewAdmin({ name: "", email: "", password: "", role: "admin" });
      fetchData();
    } catch (err) {
      showToast(
        err.response?.data?.message || "Erreur lors de la création",
        "error"
      );
    }
  };

  const openDeleteModal = (id, name) =>
    setDeleteModal({ show: true, id, name });
  const confirmDeleteAdmin = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/${deleteModal.id}`);
      setDeleteModal({ show: false, id: null, name: "" });
      showToast("Admin supprimé", "success");
      fetchData();
    } catch (err) {
      showToast("Erreur lors de la suppression", "error");
    }
  };

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
      showToast("Mot de passe réinitialisé", "success");
    } catch (err) {
      showToast("Erreur lors de la réinitialisation", "error");
    }
  };

  // ==================================================================================
  // 5. CALENDAR RENDERER
  // ==================================================================================
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { days, firstDay };
  };

  const changeMonth = (offset) => {
    const newDate = new Date(
      currentDate.setMonth(currentDate.getMonth() + offset)
    );
    setCurrentDate(new Date(newDate));
  };

  const renderCalendar = () => {
    const { days, firstDay } = getDaysInMonth(currentDate);
    const monthName = currentDate.toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
    });
    const blanks = Array(firstDay).fill(null);
    const daysArray = Array.from({ length: days }, (_, i) => i + 1);

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

    const today = new Date();
    const isCurrentMonth =
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear();

    return (
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden animate-fade-in h-full flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-slate-200 bg-slate-50">
          <button
            onClick={() => changeMonth(-1)}
            className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-300 hover:shadow-sm transition-all"
          >
            <ChevronLeft className="text-slate-600" />
          </button>
          <h2 className="text-xl font-black text-[#004C73] capitalize">
            {monthName}
          </h2>
          <button
            onClick={() => changeMonth(1)}
            className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-300 hover:shadow-sm transition-all"
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
                      isToday
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-500 group-hover:bg-slate-200"
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

  // ==================================================================================
  // RENDER
  // ==================================================================================
  if (!user) {
    return (
      <div className="min-h-screen bg-[#004C73]/15 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-200">
          <div className="flex justify-center mb-6 text-[#004C73]">
            <div className="bg-[#004C73]/10 p-4 rounded-full">
              <Lock size={40} />
            </div>
          </div>
          <h2 className="text-2xl font-black text-center text-[#004C73] mb-2">
            Connexion Sécurisée
          </h2>
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
                Mot de passe
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
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

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
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex gap-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab("registrations")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg font-bold transition-all text-xs ${
                activeTab === "registrations"
                  ? "bg-[#004C73] text-white shadow-md translate-y-1"
                  : "bg-white/80 text-slate-600 hover:bg-white"
              }`}
            >
              <Database size={16} /> Étudiants{" "}
              <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-[10px] ml-1">
                {registrations.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("classes")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg font-bold transition-all text-xs ${
                activeTab === "classes"
                  ? "bg-emerald-600 text-white shadow-md translate-y-1"
                  : "bg-white/80 text-slate-600 hover:bg-white"
              }`}
            >
              <School size={16} /> Classes
            </button>
            <button
              onClick={() => setActiveTab("contacts")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg font-bold transition-all text-xs ${
                activeTab === "contacts"
                  ? "bg-orange-500 text-white shadow-md translate-y-1"
                  : "bg-white/80 text-slate-600 hover:bg-white"
              }`}
            >
              <MessageSquare size={16} /> Messages{" "}
              <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-[10px] ml-1">
                {contacts.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("calendar")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg font-bold transition-all text-xs ${
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
                className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg font-bold transition-all text-xs ${
                  activeTab === "team"
                    ? "bg-purple-600 text-white shadow-md translate-y-1"
                    : "bg-white/80 text-slate-600 hover:bg-white"
                }`}
              >
                <Users size={16} /> Équipe
              </button>
            )}
          </div>

          {activeTab === "registrations" && (
            <div className="bg-white p-3 rounded-b-xl rounded-tr-xl shadow-sm border border-slate-300 flex flex-wrap xl:flex-nowrap gap-3 items-center">
              <div className="relative flex-grow md:flex-grow-0 md:w-64">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500"
                  size={14}
                />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full pl-9 pr-3 py-1.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004C73] bg-slate-50 text-xs"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="h-6 w-[1px] bg-slate-200 hidden md:block"></div>
              <select
                className="px-2 py-1.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004C73] bg-slate-50 text-xs font-medium text-slate-700 cursor-pointer"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="All">Mode</option>
                <option value="Online">En ligne</option>
                <option value="Presential">Présentiel</option>
              </select>
              <select
                className="px-2 py-1.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004C73] bg-slate-50 text-xs font-medium text-slate-700 cursor-pointer"
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
              >
                <option value="All">Niveau</option>
                <option value="A1 (Débutant)">A1</option>
                <option value="A2 (Élémentaire)">A2</option>
                <option value="B1 (Intermédiaire)">B1</option>
                <option value="B2 (Avancé)">B2</option>
                <option value="C1 (Expert)">C1</option>
              </select>
              <select
                className="px-2 py-1.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004C73] bg-slate-50 text-xs font-medium text-slate-700 cursor-pointer"
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
              >
                <option value="All">Villes</option>
                {uniqueCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <select
                className="px-2 py-1.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#004C73] bg-slate-50 text-xs font-medium text-slate-700 cursor-pointer"
                value={assigneeFilter}
                onChange={(e) => setAssigneeFilter(e.target.value)}
              >
                <option value="All">Responsable</option>
                {admins.map((admin) => (
                  <option key={admin._id} value={admin.name}>
                    {admin.name}
                  </option>
                ))}
              </select>
              <div className="h-6 w-[1px] bg-slate-200 hidden md:block"></div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Calendar
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-green-500 pointer-events-none"
                    size={14}
                  />
                  <input
                    type="date"
                    className="pl-8 pr-2 py-2 w-32 rounded-lg border border-slate-300 text-xs bg-slate-50 uppercase"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <span className="text-slate-300">-</span>
                <div className="relative">
                  <Calendar
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-green-500 pointer-events-none"
                    size={14}
                  />
                  <input
                    type="date"
                    className="pl-8 pr-2 py-2 w-32 rounded-lg border border-slate-300 text-xs bg-slate-50 uppercase"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-2 ml-auto">
                <button
                  onClick={() => fetchData()}
                  className="p-1.5 rounded text-indigo-500 hover:bg-slate-100 border border-slate-300 transition-colors"
                >
                  <RefreshCw
                    size={16}
                    className={loading ? "animate-spin" : ""}
                  />
                </button>
                <button
                  onClick={downloadExcel}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded font-bold flex items-center gap-2 shadow-sm transition-all text-xs"
                >
                  <Download size={14} /> Excel
                </button>
              </div>
            </div>
          )}
          {activeTab === "classes" && (
            <div className="bg-white p-3 rounded-b-xl rounded-tr-xl shadow-sm border border-slate-300 flex items-center">
              <div className="relative flex-grow md:flex-grow-0 md:w-64">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Rechercher une classe..."
                  className="w-full pl-9 pr-3 py-1.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-slate-50 text-xs"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          )}
          {/* Added Search Bar for Contacts */}
          {activeTab === "contacts" && (
            <div className="bg-white p-3 rounded-b-xl rounded-tr-xl shadow-sm border border-slate-300 flex items-center justify-between">
              <div className="relative flex-grow md:flex-grow-0 md:w-64">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Rechercher un message..."
                  className="w-full pl-9 pr-3 py-1.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-slate-50 text-xs"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={downloadExcel}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded font-bold flex items-center gap-2 shadow-sm transition-all text-xs"
              >
                <Download size={14} /> Excel
              </button>
            </div>
          )}
        </div>

        <div
          className={
            activeTab === "calendar"
              ? ""
              : "bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden min-h-[500px] flex flex-col"
          }
        >
          {/* 1. REGISTRATIONS TABLE */}
          {activeTab === "registrations" && (
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
                  {processedRegistrations.map((reg) => (
                    <React.Fragment key={reg._id}>
                      <tr
                        className={`transition-colors group divide-x divide-slate-200 ${
                          expandedRows[reg._id]
                            ? "bg-blue-50"
                            : "hover:bg-blue-50/30"
                        }`}
                      >
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
                        <td className="p-3 font-bold text-slate-700">
                          {reg.name}
                        </td>
                        <td className="p-3 text-slate-600 font-mono text-xs">
                          {reg.phone}
                        </td>
                        <td className="p-3">
                          <select
                            value={reg.assignedClass || ""}
                            onChange={(e) =>
                              handleClassAssign(reg._id, e.target.value)
                            }
                            className={`px-3 py-1 rounded-full text-xs font-bold border appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-offset-1 focus:ring-emerald-300 transition-all ${
                              reg.assignedClass
                                ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                                : "bg-slate-100 text-slate-500 border-slate-200"
                            }`}
                          >
                            <option
                              value=""
                              className="bg-white text-slate-500"
                            >
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
                            <option
                              value=""
                              className="bg-white text-slate-500"
                            >
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
                        <td className="p-3 text-xs text-slate-500 font-medium">
                          {new Date(reg.date).toLocaleDateString()}
                        </td>
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
                        <td className="p-3">
                          <button
                            onClick={() => openApptModal(reg)}
                            className={`px-2 py-1 rounded border text-xs flex items-center gap-1 ${
                              reg.appointment?.date
                                ? "bg-blue-100 text-blue-700 border-blue-200"
                                : "bg-slate-50 text-slate-400 border-dashed border-slate-300 hover:bg-white hover:text-slate-600 hover:border-slate-400"
                            }`}
                          >
                            {reg.appointment?.date ? (
                              <>
                                <CalendarDays size={14} />{" "}
                                {new Date(
                                  reg.appointment.date
                                ).toLocaleDateString()}
                              </>
                            ) : (
                              "+ RDV"
                            )}
                          </button>
                        </td>
                      </tr>
                      {expandedRows[reg._id] && (
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <td colSpan="8" className="p-3 pl-12 text-xs">
                            <div className="flex gap-8 text-slate-600">
                              <span className="flex items-center gap-2">
                                <MapPin size={14} className="text-red-500" />{" "}
                                Ville:{" "}
                                <span className="font-bold text-slate-800">
                                  {reg.city || "-"}
                                </span>
                              </span>
                              <span className="flex items-center gap-2">
                                <Filter size={14} className="text-purple-500" />{" "}
                                Mode:{" "}
                                <span className="font-bold text-slate-800">
                                  {cleanText(reg.role)}
                                </span>
                              </span>
                              <span className="flex items-center gap-2">
                                <BookOpen
                                  size={14}
                                  className="text-orange-500"
                                />{" "}
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
          )}

          {/* 2. CLASSES TAB */}
          {activeTab === "classes" && (
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black text-slate-800">
                  Gestion des Classes
                </h2>
                <button
                  onClick={() => setClassModal(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
                >
                  <Plus size={20} /> Nouvelle Classe
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processedClasses.map((cls) => {
                  const classStudents = registrations.filter(
                    (r) => r.assignedClass === cls._id
                  );
                  return (
                    <div
                      key={cls._id}
                      className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group"
                    >
                      <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg text-[#004C73]">
                            {cls.name}
                          </h3>
                          <p className="text-sm text-slate-500 flex items-center gap-1">
                            <UserCheck size={14} /> Prof. {cls.professor}
                          </p>
                        </div>
                        <div className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full">
                          {classStudents.length} Élèves
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-2">
                          Horaire
                        </p>
                        <p className="text-sm text-slate-700 font-medium mb-4 flex items-center gap-2">
                          <Clock size={16} className="text-slate-400" />{" "}
                          {cls.schedule || "Non défini"}
                        </p>
                        <div className="border-t border-slate-100 pt-3">
                          <p className="text-xs font-bold text-slate-400 uppercase mb-2">
                            Liste des élèves
                          </p>
                          <div className="max-h-32 overflow-y-auto custom-scrollbar space-y-1">
                            {classStudents.length > 0 ? (
                              classStudents.map((student) => (
                                <div
                                  key={student._id}
                                  className="text-xs flex justify-between items-center bg-slate-50 p-1.5 rounded"
                                >
                                  <span className="font-medium text-slate-700">
                                    {student.name}
                                  </span>
                                  <span className="text-[10px] text-slate-400">
                                    {cleanText(student.level)}
                                  </span>
                                </div>
                              ))
                            ) : (
                              <p className="text-xs text-slate-400 italic">
                                Aucun élève assigné.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 3. CALENDAR TAB */}
          {activeTab === "calendar" && renderCalendar()}

          {/* 4. CONTACTS TAB (RESTORED) */}
          {activeTab === "contacts" && (
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
                  {processedContacts.map((msg) => (
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
                            handleAssignChange(
                              msg._id,
                              e.target.value,
                              "contact"
                            )
                          }
                          className={`px-3 py-1 rounded-full text-xs font-bold border appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-300 transition-all ${getAdminColor(
                            msg.assignedTo
                          )}`}
                        >
                          <option value="">Non assigné</option>
                          {admins.map((admin) => (
                            <option
                              key={admin._id}
                              value={admin.name}
                              className="bg-white text-slate-800"
                            >
                              {admin.name}
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
          )}

          {/* 5. TEAM TAB (RESTORED) */}
          {activeTab === "team" && (
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-slate-800">
                    <Shield size={20} className="text-purple-600" />{" "}
                    Administrateurs actuels
                  </h3>
                  <div className="space-y-3">
                    {admins.map((admin) => (
                      <div
                        key={admin._id}
                        className="flex justify-between items-center p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
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
                                ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                                : "bg-slate-100 text-slate-600 border border-slate-200"
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
                                className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                              >
                                <Key size={16} />
                              </button>
                              <button
                                onClick={() =>
                                  openDeleteModal(admin._id, admin.name)
                                }
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
                    <UserPlus size={20} className="text-purple-600" /> Ajouter
                    un membre
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
                        <option value="superadmin">
                          Super Admin (Accès total)
                        </option>
                      </select>
                    </div>
                    <button className="w-full bg-purple-600 text-white font-bold py-2.5 rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20">
                      Créer un compte
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ALL MODALS (Class, Appt, View, Delete, Reset) - KEPT SAME AS WORKING VERSION */}
      {classModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[70]">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl p-6 relative">
            <button
              onClick={() => setClassModal(false)}
              className="absolute top-4 right-4 text-slate-400"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold mb-4">Créer une classe</h3>
            <form onSubmit={handleCreateClass} className="space-y-4">
              <input
                type="text"
                placeholder="Nom"
                className="w-full p-2 border rounded"
                value={newClass.name}
                onChange={(e) =>
                  setNewClass({ ...newClass, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Professeur"
                className="w-full p-2 border rounded"
                value={newClass.professor}
                onChange={(e) =>
                  setNewClass({ ...newClass, professor: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Horaire"
                className="w-full p-2 border rounded"
                value={newClass.schedule}
                onChange={(e) =>
                  setNewClass({ ...newClass, schedule: e.target.value })
                }
              />
              <button className="w-full bg-emerald-600 text-white font-bold py-2 rounded">
                Créer
              </button>
            </form>
          </div>
        </div>
      )}

      {apptModal.show && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[70]">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl p-6 relative">
            <button
              onClick={() =>
                setApptModal({
                  show: false,
                  id: null,
                  date: "",
                  time: "",
                  note: "",
                })
              }
              className="absolute top-4 right-4 text-slate-400"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold mb-4">Planifier RDV</h3>
            <form onSubmit={handleSaveAppointment} className="space-y-4">
              <input
                type="date"
                className="w-full p-2 border rounded"
                value={apptModal.date}
                onChange={(e) =>
                  setApptModal({ ...apptModal, date: e.target.value })
                }
              />
              <input
                type="time"
                className="w-full p-2 border rounded"
                value={apptModal.time}
                onChange={(e) =>
                  setApptModal({ ...apptModal, time: e.target.value })
                }
              />
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Note..."
                value={apptModal.note}
                onChange={(e) =>
                  setApptModal({ ...apptModal, note: e.target.value })
                }
              ></textarea>
              <button className="w-full bg-blue-600 text-white font-bold py-2 rounded">
                Enregistrer
              </button>
            </form>
          </div>
        </div>
      )}

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

      {dayModal.show && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6 relative max-h-[80vh] flex flex-col">
            <button
              onClick={() =>
                setDayModal({ show: false, date: null, appointments: [] })
              }
              className="absolute top-4 right-4 text-slate-400"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold mb-4 capitalize">
              {dayModal.date?.toLocaleDateString("fr-FR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </h3>
            <div className="overflow-y-auto flex-grow space-y-2">
              {dayModal.appointments.length === 0 ? (
                <p className="text-slate-400 italic">Aucun rendez-vous.</p>
              ) : (
                dayModal.appointments.map((reg) => (
                  <div
                    key={reg._id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewApptModal({ show: true, data: reg });
                    }}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded border hover:bg-blue-50 cursor-pointer"
                  >
                    <div className="font-bold text-blue-600">
                      {new Date(reg.appointment.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{reg.name}</p>
                      <p className="text-xs text-slate-500">{reg.city}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

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

      {resetModal.show && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 relative">
            <button
              onClick={() => setResetModal({ show: false })}
              className="absolute top-4 right-4"
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-bold mb-4">Réinitialiser MDP</h3>
            <form onSubmit={submitResetPassword}>
              <input
                className="w-full border p-2 rounded mb-4"
                value={resetPassword}
                onChange={(e) => setResetPassword(e.target.value)}
                placeholder="Nouveau mot de passe"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded">
                Valider
              </button>
            </form>
          </div>
        </div>
      )}

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
