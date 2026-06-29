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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        dark
          ? "bg-slate-950/75 backdrop-blur-xl border-b border-slate-800/60 text-slate-200"
          : "bg-white/75 backdrop-blur-xl border-b border-slate-200/60 text-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <button
            onClick={() => {
              navigate("/");
              setMobileOpen(false);
            }}
            className="flex items-center gap-2.5 group transition-transform duration-200"
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black tracking-wider transition-all duration-300 transform group-hover:scale-105 ${
                dark
                  ? "bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                  : "bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-[0_4px_12px_rgba(79,70,229,0.2)]"
              }`}
            >
              R
            </div>
            <span
              className={`text-xl font-bold tracking-tight transition-colors duration-200 ${
                dark ? "text-white group-hover:text-indigo-400" : "text-slate-900 group-hover:text-indigo-600"
              }`}
            >
              Revise<span className="text-indigo-500 font-extrabold">X</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group/link ${
                  dark
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-indigo-500 transform scale-x-0 transition-transform duration-200 origin-left group-hover/link:scale-x-100" />
              </button>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 border transform active:scale-95 ${
                dark
                  ? "bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800 hover:text-amber-300"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
              aria-label="Toggle theme"
            >
              {dark ? (
                <span className="text-base">☀️</span>
              ) : (
                <span className="text-base">🌙</span>
              )}
            </button>

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate("/login")}
                className={dark ? "hover:bg-slate-900 text-slate-300" : "hover:bg-slate-100 text-slate-700"}
              >
                Login
              </Button>
              <Button 
                size="sm" 
                onClick={() => navigate("/signup")}
                className="bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/10 text-white"
              >
                Sign Up
              </Button>
            </div>

            {/* Mobile Hamburger Menu Icon */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all duration-200 border ${
                dark 
                  ? "border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-white" 
                  : "border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span
                className={`block h-0.5 w-5 rounded transition-all duration-300 transform ${
                  dark ? "bg-current" : "bg-current"
                } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded transition-all duration-300 ${
                  dark ? "bg-current" : "bg-current"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded transition-all duration-300 transform ${
                  dark ? "bg-current" : "bg-current"
                } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[400px] opacity-100 border-t" : "max-h-0 opacity-0 pointer-events-none"
        } ${dark ? "border-slate-900 bg-slate-950/95" : "border-slate-100 bg-white/95"}`}
      >
        <div className="px-4 py-4 space-y-1.5">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => {
                navigate(link.path);
                setMobileOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                dark
                  ? "text-slate-400 hover:text-white hover:bg-slate-900"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <div className="flex gap-2 pt-4 border-t mt-3 border-dashed border-slate-800/40">
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 py-2.5 justify-center"
              onClick={() => {
                navigate("/login");
                setMobileOpen(false);
              }}
            >
              Login
            </Button>
            <Button
              size="sm"
              className="flex-1 py-2.5 justify-center bg-indigo-600 hover:bg-indigo-500 text-white"
              onClick={() => {
                navigate("/signup");
                setMobileOpen(false);
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}