import { useEffect } from "react";
import { useTheme } from "../context/themeContext";

// Simple global array/state simulation for display purposes 
// (or you can connect this to your global AppProvider state)
export default function Toast({ message = "Action successful!", type = "success", onClose }) {
  const { dark } = useTheme();

  useEffect(() => {
    if (onClose) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [onClose]);

  if (!message) return null;

  return (
    <div className="fixed top-5 right-5 z-50 animate-fade-in">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border backdrop-blur-md transition-all duration-300 ${
          dark
            ? "bg-slate-900/90 text-slate-100 border-slate-800"
            : "bg-white/90 text-slate-800 border-slate-200"
        }`}
      >
        {/* Status Indicator Dot */}
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            type === "success"
              ? "bg-emerald-500 animate-pulse"
              : type === "error"
              ? "bg-rose-500"
              : "bg-amber-500"
          }`}
        />
        
        <p className="text-sm font-medium tracking-wide">{message}</p>
        
        {onClose && (
          <button
            onClick={onClose}
            className="ml-2 text-xs font-bold opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}