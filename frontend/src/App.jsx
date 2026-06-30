import { useState, useCallback } from "react";
import { ThemeProvider, useTheme } from "./context/themeContext";
import { AppProvider } from "./context/appContext";

// THE REAL PATHS: Removing /ui/ because these files live directly in components/
import Navbar from "@/components/Navbar.jsx";
import Sidebar from "@/components/Sidebar.jsx";
import Toast from "@/components/Toast.jsx"; 

import Landing from "@/pages/Landing.jsx";
import Login from "@/pages/Login.jsx";
import Signup from "@/pages/Signup.jsx";
import RoutineDashboard from "@/pages/RoutineDashboard.jsx";
import ProgressDashboard from "@/pages/ProgressDashboard.jsx";

import RoutineGenerator from "@/features/routine/RoutineGenerator.jsx";
import StudyModes from "@/features/study/StudyModes.jsx";
import Gamification from "@/features/gamification/Gamification.jsx";
const routes = {
  "/": { page: "landing", sidebar: false },
  "/login": { page: "login", sidebar: false },
  "/signup": { page: "signup", sidebar: false },
  "/features": { page: "landing", sidebar: false },
  "/generator": { page: "generator", sidebar: true },
  "/dashboard": { page: "dashboard", sidebar: true },
  "/study-modes": { page: "study-modes", sidebar: true },
  "/progress": { page: "progress", sidebar: true },
  "/gamification": { page: "gamification", sidebar: true },
};

function AppContent() {
  const { dark } = useTheme();
  const [currentPath, setCurrentPath] = useState("/");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const navigate = useCallback((path) => {
    if (routes[path]) {
      setCurrentPath(path);
    }
    if (path === "/features") {
      setCurrentPath("/");
      setTimeout(() => {
        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const route = routes[currentPath] || routes["/"];
  const showSidebar = route.sidebar;

  const renderPage = () => {
    switch (route.page) {
      case "landing": return <Landing navigate={navigate} />;
      case "login": return <Login navigate={navigate} />;
      case "signup": return <Signup navigate={navigate} />;
      case "generator": return <RoutineGenerator navigate={navigate} />;
      case "dashboard": return <RoutineDashboard navigate={navigate} />;
      case "study-modes": return <StudyModes navigate={navigate} />;
      case "progress": return <ProgressDashboard />;
      case "gamification": return <Gamification />;
      default: return <Landing navigate={navigate} />;
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "bg-gray-900 text-gray-100" : "bg-[#eef0f5] text-gray-800"
      }`}
    >
      <Navbar navigate={navigate} />      <Toast />

      <div className="flex">
        {showSidebar && (
          <Sidebar
            navigate={navigate}
            currentPath={currentPath}
            collapsed={sidebarCollapsed}
            setCollapsed={setSidebarCollapsed}
          />
        )}
        <main className={`flex-1 min-h-[calc(100vh-5rem)] transition-all duration-300 ${
          showSidebar ? "md:ml-0" : ""
        }`}>
          {renderPage()}
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