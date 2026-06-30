import { useTheme } from "../context/themeContext";

export default function ProgressBar({
  value = 0,
  max = 100,
  label,
  showPercent = true,
  size = "md",
  color = "indigo",
  className = "",
}) {
  const { dark } = useTheme();
  const pct = Math.min(Math.round((value / max) * 100), 100);

  const heights = { sm: "h-2", md: "h-3", lg: "h-4" };

  const colors = {
    indigo: dark
      ? "bg-gradient-to-r from-indigo-500 to-purple-500"
      : "bg-gradient-to-r from-indigo-500 to-purple-600",
    emerald: "bg-gradient-to-r from-emerald-400 to-teal-500",
    amber: "bg-gradient-to-r from-amber-400 to-orange-500",
    rose: "bg-gradient-to-r from-rose-400 to-pink-500",
  };

  return (
    <div className={`${className}`}>
      {(label || showPercent) && (
        <div className="flex items-center justify-between mb-2">
          {label && (
            <span
              className={`text-sm font-medium ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {label}
            </span>
          )}
          {showPercent && (
            <span
              className={`text-sm font-semibold ${
                dark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {pct}%
            </span>
          )}
        </div>
      )}
      <div
        className={`w-full rounded-full ${
          dark ? "bg-gray-700/50" : "bg-gray-200/60"
        } ${heights[size]} ${dark ? "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)]" : "shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]"}`}
      >
        <div
          className={`${heights[size]} rounded-full transition-all duration-700 ease-out ${colors[color] || colors.indigo}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
