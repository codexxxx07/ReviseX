import { useTheme } from "@/context/themeContext";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const { dark } = useTheme();

  const base =
    "font-semibold rounded-xl transition-all duration-200 select-none active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-indigo-400/50";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const primary = dark
    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[4px_4px_10px_rgba(0,0,0,0.3),-2px_-2px_8px_rgba(255,255,255,0.05)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-2px_-2px_6px_rgba(255,255,255,0.05)]"
    : "bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white shadow-[4px_4px_10px_#b8b9be,-4px_-4px_10px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]";

  const secondary = dark
    ? "bg-gray-800 text-gray-100 shadow-[4px_4px_10px_rgba(0,0,0,0.3),-2px_-2px_8px_rgba(255,255,255,0.05)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-2px_-2px_6px_rgba(255,255,255,0.05)]"
    : "bg-[#e8ecf1] text-gray-700 shadow-[4px_4px_10px_#b8b9be,-4px_-4px_10px_#ffffff] hover:shadow-[2px_2px_6px_#b8b9be,-2px_-2px_6px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]";

  const ghost = dark
    ? "text-indigo-400 hover:bg-gray-800/50"
    : "text-indigo-600 hover:bg-indigo-50";

  const variants = { primary, secondary, ghost };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
