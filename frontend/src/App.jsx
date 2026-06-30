import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/themeContext";
import { AppProvider } from "./context/appContext";

import Navbar from "@/components/Navbar.jsx";
import Sidebar from "@/components/Sidebar.jsx";
import Toast from "@/components/Toast.jsx";

import Landing from "@/pages/Landing.jsx";
import Features from "@/pages/Features.jsx";
import Login from "@/pages/Login.jsx";
import Signup from "@/pages/Signup.jsx";
import Dashboard from "@/pages/Dashboard.jsx";
import StudyModes from "@/pages/StudyModes.jsx";
import ProgressDashboard from "@/pages/ProgressDashboard.jsx";

import RoutineGenerator from "@/features/routine/RoutineGenerator.jsx";
import Gamification from "@/features/gamification/Gamification.jsx";
import NotFound from "@/pages/NotFound.jsx";

const sidebarPaths = ["/dashboard", "/generator", "/study-modes", "/progress", "/gamification"];

function AppContent() {
  const { dark } = useTheme();
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const showSidebar = sidebarPaths.includes(location.pathname);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "bg-gray-900 text-gray-100" : "bg-[#eef0f5] text-gray-800"
      }`}
    >
      <Navbar />
      <Toast />

      <div className="flex">
        {showSidebar && (
          <Sidebar
            collapsed={sidebarCollapsed}
            setCollapsed={setSidebarCollapsed}
          />
        )}
        <main className="flex-1 min-h-[calc(100vh-5rem)] transition-all duration-300">
          <div key={location.pathname} className="animate-page-enter">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/features" element={<Features />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/study-modes" element={<StudyModes />} />
              <Route path="/generator" element={<RoutineGenerator />} />
              <Route path="/progress" element={<ProgressDashboard />} />
              <Route path="/gamification" element={<Gamification />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  );
}