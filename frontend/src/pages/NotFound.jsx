import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import Button from "../components/ui/Button";

export default function NotFound() {
  const { dark } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="text-center max-w-md">
        <div className={`w-24 h-24 rounded-4xl flex items-center justify-center text-4xl font-bold mx-auto mb-6 transition-all duration-300 ${
          dark
            ? "bg-gray-800 shadow-[8px_8px_20px_rgba(0,0,0,0.3)]"
            : "bg-[#eef0f5] shadow-[10px_10px_25px_#d1d9e6,-10px_-10px_25px_#ffffff]"
        }`}>
          404
        </div>
        <h1 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
          dark ? "text-gray-100" : "text-gray-800"
        }`}>
          Page Not Found
        </h1>
        <p className={`text-base mb-8 transition-colors duration-300 ${
          dark ? "text-gray-400" : "text-gray-500"
        }`}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button size="lg" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}
