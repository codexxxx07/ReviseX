import { NavLink } from "react-router-dom";
import { useTheme } from "../context/themeContext";

const sidebarLinks = [
  { path: "/dashboard", label: "📊 Routine", icon: "📊" },
  { path: "/progress", label: "📈 Progress", icon: "📈" },
  { path: "/study-modes", label: "📚 Study Modes", icon: "📚" },
  { path: "/generator", label: "✨ Generator", icon: "✨" },
  { path: "/gamification", label: "🏆 Gamification", icon: "🏆" },
];

export default function Sidebar({ collapsed, setCollapsed }) {
  const { dark } = useTheme();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive
        ? dark
          ? "bg-indigo-600/20 text-indigo-400 font-bold shadow-[inset_2px_2px_6px_rgba(0,0,0,0.25)]"
          : "bg-white/70 text-indigo-600 font-bold shadow-[inset_2px_2px_6px_#d1d9e6,inset_-2px_-2px_6px_#ffffff]"
        : dark
          ? "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50"
          : "text-gray-500 hover:text-gray-700 hover:bg-white/40"
    }`;

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`fixed bottom-4 left-4 z-30 md:hidden w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${
          dark
            ? "bg-gray-800 text-gray-100 shadow-[4px_4px_10px_rgba(0,0,0,0.3)]"
            : "bg-[#eef0f5] text-indigo-500 shadow-[4px_4px_10px_#b8b9be,-4px_-4px_10px_#ffffff]"
        }`}
      >
        {collapsed ? "☰" : "✕"}
      </button>

      {/* Overlay */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black/20 z-20 md:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      <aside
        className={`fixed md:sticky top-20 z-20 h-[calc(100vh-5rem)] transition-all duration-300 ${
          collapsed ? "-translate-x-full md:translate-x-0 md:w-16" : "translate-x-0 w-64"
        } ${
          dark
            ? "bg-gray-900/90 border-r border-gray-800/50"
            : "bg-[#eef0f5]/90 border-r border-gray-200/50"
        }`}
      >
        <div className="flex flex-col gap-1 p-3">
          {sidebarLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setCollapsed(true)}
              className={linkClass}
            >
              <span className="text-lg">{link.icon}</span>
              {!collapsed && <span className="md:inline">{link.label}</span>}
            </NavLink>
          ))}
        </div>
      </aside>
    </>
  );
}
