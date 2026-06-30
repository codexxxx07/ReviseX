import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import Button from "./ui/Button";

const links = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Study Modes", path: "/study-modes" },
];

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 relative ${
      isActive
        ? dark
          ? "bg-indigo-600/20 text-indigo-400 font-bold shadow-[inset_2px_2px_6px_rgba(0,0,0,0.25)]"
          : "bg-white/70 text-indigo-600 font-bold shadow-[inset_2px_2px_6px_#d1d9e6,inset_-2px_-2px_6px_#ffffff]"
        : dark
          ? "text-gray-300 hover:text-gray-100 hover:bg-gray-800"
          : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive
        ? dark
          ? "bg-indigo-600/20 text-indigo-400 font-bold shadow-[inset_2px_2px_6px_rgba(0,0,0,0.25)]"
          : "bg-white/70 text-indigo-600 font-bold shadow-[inset_2px_2px_6px_#d1d9e6,inset_-2px_-2px_6px_#ffffff]"
        : dark
          ? "text-gray-300 hover:text-gray-100 hover:bg-gray-800"
          : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
    }`;

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        dark
          ? "bg-gray-900/80 backdrop-blur-lg border-b border-gray-800/50"
          : "bg-[#eef0f5]/80 backdrop-blur-lg border-b border-gray-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 group"
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                dark
                  ? "bg-indigo-600 text-white shadow-[3px_3px_8px_rgba(0,0,0,0.3)]"
                  : "bg-linear-to-br from-indigo-500 to-purple-600 text-white shadow-[3px_3px_8px_#b8b9be,-3px_-3px_8px_#ffffff]"
              }`}
            >
              RX
            </div>
            <span
              className={`text-xl font-bold tracking-tight ${
                dark ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Revise<span className="text-indigo-500 font-extrabold">X</span>
            </span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1.5 bg-gray-500/5 p-1 rounded-2xl border border-gray-500/10">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={navLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-300 ${
                dark
                  ? "bg-gray-800 text-amber-400 shadow-[3px_3px_8px_rgba(0,0,0,0.3),-2px_-2px_6px_rgba(255,255,255,0.04)] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.4)]"
                  : "bg-[#eef0f5] text-indigo-500 shadow-[3px_3px_8px_#b8b9be,-3px_-3px_8px_#ffffff] hover:shadow-[inset_3px_3px_6px_#b8b9be]"
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
              <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button size="sm" onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
            </div>

            {/* Mobile Hamburger Menu Icon */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1 transition-all duration-200 ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <span
                className={`block h-0.5 w-5 rounded transition-all duration-300 ${
                  dark ? "bg-gray-300" : "bg-gray-600"
                } ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded transition-all duration-300 ${
                  dark ? "bg-gray-300" : "bg-gray-600"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded transition-all duration-300 ${
                  dark ? "bg-gray-300" : "bg-gray-600"
                } ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`px-4 pb-4 space-y-1 ${
            dark ? "border-t border-gray-800" : "border-t border-gray-200"
          }`}
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={mobileNavLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex gap-2 pt-2">
            <Button
              variant="ghost"
              size="sm"
              className="flex-1"
              onClick={() => { navigate("/login"); setMobileOpen(false); }}
            >
              Login
            </Button>
            <Button
              size="sm"
              className="flex-1"
              onClick={() => { navigate("/signup"); setMobileOpen(false); }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}