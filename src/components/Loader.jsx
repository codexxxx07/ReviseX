import { useTheme } from "../utils/themeContext";

export default function Loader({ size = "md", text = "Loading..." }) {
  const { dark } = useTheme();

  const sizes = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <div
        className={`${sizes[size]} relative`}
      >
        <div
          className={`absolute inset-0 rounded-full border-4 ${
            dark ? "border-gray-700" : "border-gray-200"
          }`}
        />
        <div
          className={`absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500 animate-spin`}
        />
        <div
          className={`absolute inset-2 rounded-full ${
            dark ? "bg-gray-800" : "bg-[#eef0f5]"
          }`}
        />
      </div>
      {text && (
        <p
          className={`text-sm font-medium animate-pulse ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
