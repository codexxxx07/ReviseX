import { useState } from "react";
import { useTheme } from "../../context/themeContext";
import { useApp } from "../../context/appContext";
import { studyModes } from "../../utils/mockData";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function StudyModes({ navigate }) {
  const { dark } = useTheme();
  const { addToast } = useApp();
  const [selected, setSelected] = useState(null);

  const handleSelect = (mode) => {
    setSelected(mode.id);
    addToast(`Switched to ${mode.title} mode! 🚀`, "info");
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-4xl mb-3">📚</div>
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 transition-colors duration-300 ${
            dark ? "text-gray-100" : "text-gray-800"
          }`}>
            Study Modes
          </h1>
          <p className={`text-lg transition-colors duration-300 ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}>
            Choose your intensity level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {studyModes.map((mode) => {
            const isSelected = selected === mode.id;
            return (
              <Card
                key={mode.id}
                className={`relative overflow-hidden transition-all duration-300 ${
                  isSelected
                    ? "ring-2 ring-indigo-500 scale-[1.02]"
                    : ""
                }`}
                onClick={() => handleSelect(mode)}
              >
                {/* Gradient top bar */}
                <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${mode.color} -mx-6 -mt-6 mb-4`} />

                <div className="text-4xl mb-3">{mode.icon}</div>
                <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                  dark ? "text-gray-100" : "text-gray-800"
                }`}>
                  {mode.title}
                </h3>
                <p className={`text-sm font-medium mb-3 ${dark ? "text-indigo-400" : "text-indigo-600"}`}>
                  {mode.subtitle}
                </p>
                <p className={`text-sm leading-relaxed mb-6 transition-colors duration-300 ${
                  dark ? "text-gray-400" : "text-gray-500"
                }`}>
                  {mode.desc}
                </p>

                <Button
                  variant={isSelected ? "primary" : "secondary"}
                  size="sm"
                  className="w-full"
                  onClick={() => handleSelect(mode)}
                >
                  {isSelected ? "✓ Active" : "Select Mode"}
                </Button>

                {isSelected && (
                  <div className="absolute top-3 right-3">
                    <span className="flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500" />
                    </span>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {selected && (
          <div className="text-center mt-10 animate-fade-in">
            <Button size="lg" onClick={() => navigate("/dashboard")}>
              Go to Dashboard →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
