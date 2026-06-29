import { useTheme } from "../utils/themeContext";

export default function Card({
  children,
  className = "",
  hover = true,
  padded = true,
  onClick,
}) {
  const { dark } = useTheme();

  const base = dark
    ? "bg-gray-800/80 rounded-2xl border border-gray-700/50"
    : "bg-[#eef0f5] rounded-2xl";

  const shadow = dark
    ? "shadow-[6px_6px_14px_rgba(0,0,0,0.3),-4px_-4px_12px_rgba(255,255,255,0.04)]"
    : "shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]";

  const hoverEffect = hover
    ? dark
      ? "hover:shadow-[8px_8px_18px_rgba(0,0,0,0.4),-4px_-4px_14px_rgba(255,255,255,0.06)] hover:-translate-y-0.5"
      : "hover:shadow-[10px_10px_20px_#c5cdd8,-10px_-10px_20px_#ffffff] hover:-translate-y-0.5"
    : "";

  return (
    <div
      onClick={onClick}
      className={`${base} ${shadow} ${hoverEffect} transition-all duration-300 ${
        padded ? "p-6" : ""
      } ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
