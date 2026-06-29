import { useState } from "react";
import { useTheme } from "../utils/themeContext";
import { useApp } from "../utils/appContext";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Signup({ navigate }) {
  const { dark } = useTheme();
  const { addToast } = useApp();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      addToast("Account created successfully! 🎉", "success");
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className={`rounded-2xl p-8 sm:p-10 transition-all duration-300 ${
          dark
            ? "bg-gray-800 shadow-[8px_8px_20px_rgba(0,0,0,0.3),-4px_-4px_12px_rgba(255,255,255,0.04)]"
            : "bg-[#eef0f5] shadow-[10px_10px_25px_#d1d9e6,-10px_-10px_25px_#ffffff]"
        }`}>
          <div className="text-center mb-8">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 transition-all duration-300 ${
              dark
                ? "bg-indigo-600 text-white shadow-[3px_3px_8px_rgba(0,0,0,0.3)]"
                : "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-[3px_3px_8px_#b8b9be,-3px_-3px_8px_#ffffff]"
            }`}>
              R
            </div>
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              dark ? "text-gray-100" : "text-gray-800"
            }`}>
              Create Account
            </h1>
            <p className={`text-sm mt-1 transition-colors duration-300 ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}>
              Start your smart study journey
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              type="text"
              icon="👤"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              label="Email"
              type="email"
              icon="✉️"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              label="Password"
              type="password"
              icon="🔒"
              placeholder="Create a strong password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />

            <Button
              type="submit"
              className="w-full mt-2"
              size="lg"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className={`text-sm transition-colors duration-300 ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}>
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-indigo-500 hover:text-indigo-400 font-medium transition-colors"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
