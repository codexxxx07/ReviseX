import { useState } from "react";
import { useTheme } from "../utils/themeContext";
import Button from "./Button";

const links = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Study Modes", path: "/study-modes" },
];

export default function Navbar({ navigate }) {
  const { dark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        dark
          ? "bg-gray-950/70 backdrop-blur-md border-gray-900"
          : "bg-white/70 backdrop-blur-md border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <button
            onClick={() => { navigate("/"); setMobileOpen(false); }}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black tracking-wider transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 ${
                dark
                  ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-[0_4px_12px_rgba(99,102,241,0.3)]"
                  : "bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-[0_4px_12px_rgba(79,70,229,0.2)]"
              }`}
            >
              RX
            </div>
            <span
              className={`text-lg font-bold tracking-tight transition-colors duration-200 ${
                dark ? "text-white group-hover:text-indigo-400" : "text-gray-900 group-hover:text-indigo-600"
              }`}
            >
              Revise<span className="text-indigo-500 font-extrabold">X</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1.5 bg-gray-500/5 p-1 rounded-2xl border border-gray-500/10">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`px-4 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 relative group overflow-hidden ${
                  dark
                    ? "text-gray-400 hover:text-white hover:bg-white/5"
                    : "text-gray-600 hover:text-gray-900 hover:bg-black/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-xl flex items-center justify-center text-base transition-all duration-200 hover:scale-105 active:scale-95 ${
                dark
                  ? "bg-gray-900 text-amber-400 border border-gray-800 hover:bg-gray-850 hover:text-amber-300"
                  : "bg-gray-50 text-indigo-600 border border-gray-200 hover:bg-gray-100 hover:text-indigo-700"
              }`}
              aria-label="Toggle theme"
            >
              {dark ? "☀️" : "🌙"}
            </button>

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate("/login")}
                className={`rounded-xl px-4 font-medium transition-colors ${
                  dark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Login
              </Button>
              <Button 
                size="sm" 
                onClick={() => navigate("/signup")}
                className="rounded-xl px-4 font-medium bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                Sign Up
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-9 h-9 rounded-xl flex flex-col items-center justify-center gap-1.5 border transition-all duration-200 ${
                dark 
                  ? "text-gray-400 border-gray-800 hover:bg-gray-900" 
                  : "text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              <span
                className={`block h-0.5 w-4 rounded transition-all duration-300 origin-center ${
                  dark ? "bg-gray-300" : "bg-gray-600"
                } ${mobileOpen ? "rotate-45 translate-y-1" : ""}`}
              />
              <span
                className={`block h-0.5 w-4 rounded transition-all duration-300 ${
                  dark ? "bg-gray-300" : "bg-gray-600"
                } ${mobileOpen ? "scale-x-0 opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-4 rounded transition-all duration-300 origin-center ${
                  dark ? "bg-gray-300" : "bg-gray-600"
                } ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Expansion */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out grid ${
          mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`px-4 pb-5 space-y-1.5 border-t ${
              dark ? "border-gray-900 bg-gray-950" : "border-gray-100 bg-white"
            }`}
          >
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => { navigate(link.path); setMobileOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                  dark
                    ? "text-gray-400 hover:text-white hover:bg-gray-900"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="flex gap-2.5 pt-3 border-t border-dashed mt-2 border-gray-500/20">
              <Button
                variant="ghost"
                size="sm"
                className={`flex-1 rounded-xl py-2.5 font-medium ${
                  dark ? "text-gray-300 hover:text-white hover:bg-gray-900" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => { navigate("/login"); setMobileOpen(false); }}
              >
                Login
              </Button>
              <Button
                size="sm"
                className="flex-1 rounded-xl py-2.5 font-medium bg-indigo-600 text-white hover:bg-indigo-500"
                onClick={() => { navigate("/signup"); setMobileOpen(false); }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}