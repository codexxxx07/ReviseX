import { useState } from "react";
import { useTheme } from "../utils/themeContext";

export default function Input({
  label,
  icon,
  error,
  className = "",
  ...props
}) {
  const { dark } = useTheme();
  const [focused, setFocused] = useState(false);

  const inputBase = dark
    ? "w-full bg-gray-700/50 text-gray-100 placeholder-gray-400 rounded-xl px-4 py-3 border border-gray-600/50 transition-all duration-300 outline-none"
    : "w-full bg-[#eef0f5] text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 border border-transparent transition-all duration-300 outline-none";

  const inputShadow = dark
    ? "shadow-[inset_3px_3px_8px_rgba(0,0,0,0.3),inset_-3px_-3px_8px_rgba(255,255,255,0.04)]"
    : "shadow-[inset_3px_3px_8px_#d1d9e6,inset_-3px_-3px_8px_#ffffff]";

  const focusStyles = dark
    ? "focus:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.04)] focus:border-indigo-500/50"
    : "focus:shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] focus:border-indigo-400/50";

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
            dark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span
            className={`absolute left-3 top-1/2 -translate-y-1/2 text-lg transition-colors duration-300 ${
              focused ? "text-indigo-500" : dark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            {icon}
          </span>
        )}
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${inputBase} ${inputShadow} ${focusStyles} ${
            icon ? "pl-10" : ""
          } ${error ? "border-red-400 dark:border-red-500" : ""}`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
