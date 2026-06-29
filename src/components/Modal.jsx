import { useEffect } from "react";
import { useTheme } from "../utils/themeContext";

export default function Modal({ open, onClose, title, children }) {
  const { dark } = useTheme();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl transition-all duration-300 ${
          dark
            ? "bg-gray-800 shadow-[8px_8px_20px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.04)]"
            : "bg-[#eef0f5] shadow-[10px_10px_25px_#d1d9e6,-10px_-10px_25px_#ffffff]"
        }`}
      >
        <div className="flex items-center justify-between p-6 pb-0">
          <h2
            className={`text-xl font-bold ${
              dark ? "text-gray-100" : "text-gray-800"
            }`}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
              dark
                ? "hover:bg-gray-700 text-gray-400"
                : "hover:bg-gray-200 text-gray-500"
            }`}
          >
            ✕
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
