import { useState } from "react";
import { useTheme } from "../../context/themeContext";
import { useApp } from "../../context/appContext";
import { subjects, preparationLevels, studyHours, timePreferences } from "../../utils/mockData";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Card from "../../components/ui/Card";

export default function RoutineGenerator({ navigate }) {
  const { dark } = useTheme();
  const { setRoutine, addToast } = useApp();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    examName: "",
    examDate: "",
    subjects: [],
    targetScore: 90,
    preparation: "not_started",
    studyHours: 4,
    timePreference: "Morning (8-12 PM)",
  });

  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const toggleSubject = (s) => {
    setForm((f) => ({
      ...f,
      subjects: f.subjects.includes(s)
        ? f.subjects.filter((x) => x !== s)
        : [...f.subjects, s],
    }));
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!form.examName || !form.examDate || form.subjects.length === 0) {
      addToast("Please fill all required fields", "warning");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRoutine(form);
      addToast("Your AI routine is ready! 🎯", "success");
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-4xl mb-3">✨</div>
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 transition-colors duration-300 ${
            dark ? "text-gray-100" : "text-gray-800"
          }`}>
            AI Routine Generator
          </h1>
          <p className={`text-lg transition-colors duration-300 ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}>
            Answer a few questions and let AI build your perfect study plan
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                step >= s
                  ? dark
                    ? "bg-indigo-600 text-white shadow-[2px_2px_6px_rgba(0,0,0,0.3)]"
                    : "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-[2px_2px_6px_#b8b9be,-2px_-2px_6px_#ffffff]"
                  : dark
                    ? "bg-gray-700 text-gray-500"
                    : "bg-gray-200 text-gray-400"
              }`}>
                {s}
              </div>
              {s < 3 && (
                <div className={`w-8 h-0.5 rounded transition-colors duration-300 ${
                  step > s ? "bg-indigo-500" : dark ? "bg-gray-700" : "bg-gray-200"
                }`} />
              )}
            </div>
          ))}
        </div>

        <Card>
          <form onSubmit={handleGenerate}>
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${dark ? "text-gray-200" : "text-gray-700"}`}>
                  📋 Exam Details
                </h3>
                <Input
                  label="Exam Name"
                  icon="📝"
                  placeholder="e.g. Mathematics Final"
                  value={form.examName}
                  onChange={(e) => update("examName", e.target.value)}
                />
                <Input
                  label="Exam Date"
                  type="date"
                  icon="📅"
                  value={form.examDate}
                  onChange={(e) => update("examDate", e.target.value)}
                />
                <Input
                  label="Target Score (%)"
                  type="number"
                  icon="🎯"
                  min="0" max="100"
                  value={form.targetScore}
                  onChange={(e) => update("targetScore", e.target.value)}
                />
                <div className="flex justify-end pt-2">
                  <Button type="button" onClick={() => setStep(2)}>
                    Next →
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Subjects */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${dark ? "text-gray-200" : "text-gray-700"}`}>
                  📚 Select Subjects
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {subjects.map((s) => {
                    const selected = form.subjects.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleSubject(s)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          selected
                            ? dark
                              ? "bg-indigo-600/30 text-indigo-400 border border-indigo-500/50 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]"
                              : "bg-white text-indigo-600 border border-indigo-300 shadow-[inset_2px_2px_6px_#d1d9e6,inset_-2px_-2px_6px_#ffffff]"
                            : dark
                              ? "bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:bg-gray-700"
                              : "bg-[#eef0f5] text-gray-600 border border-transparent hover:bg-white/50 shadow-[3px_3px_8px_#b8b9be,-3px_-3px_8px_#ffffff]"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-between pt-2">
                  <Button type="button" variant="secondary" onClick={() => setStep(1)}>
                    ← Back
                  </Button>
                  <Button type="button" onClick={() => setStep(3)}>
                    Next →
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${dark ? "text-gray-200" : "text-gray-700"}`}>
                  ⚙️ Study Preferences
                </h3>

                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${dark ? "text-gray-300" : "text-gray-600"}`}>
                    Preparation Level
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {preparationLevels.map((p) => (
                      <button
                        key={p.value}
                        type="button"
                        onClick={() => update("preparation", p.value)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200 ${
                          form.preparation === p.value
                            ? dark
                              ? "bg-indigo-600/30 text-indigo-400 border border-indigo-500/50"
                              : "bg-white text-indigo-600 border border-indigo-300 shadow-[inset_2px_2px_6px_#d1d9e6]"
                            : dark
                              ? "bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:bg-gray-700"
                              : "bg-[#eef0f5] text-gray-600 shadow-[3px_3px_8px_#b8b9be,-3px_-3px_8px_#ffffff] hover:bg-white/50"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${dark ? "text-gray-300" : "text-gray-600"}`}>
                    Study Hours Per Day
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {studyHours.map((h) => (
                      <button
                        key={h}
                        type="button"
                        onClick={() => update("studyHours", h)}
                        className={`w-10 h-10 rounded-xl text-sm font-medium transition-all duration-200 ${
                          form.studyHours === h
                            ? dark
                              ? "bg-indigo-600/30 text-indigo-400 border border-indigo-500/50"
                              : "bg-white text-indigo-600 border border-indigo-300 shadow-[inset_2px_2px_6px_#d1d9e6]"
                            : dark
                              ? "bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:bg-gray-700"
                              : "bg-[#eef0f5] text-gray-600 shadow-[2px_2px_6px_#b8b9be,-2px_-2px_6px_#ffffff] hover:bg-white/50"
                        }`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${dark ? "text-gray-300" : "text-gray-600"}`}>
                    Preferred Time
                  </label>
                  <select
                    value={form.timePreference}
                    onChange={(e) => update("timePreference", e.target.value)}
                    className={`w-full rounded-xl px-4 py-3 text-sm transition-all duration-300 outline-none ${
                      dark
                        ? "bg-gray-700/50 text-gray-100 border border-gray-600/50 shadow-[inset_3px_3px_8px_rgba(0,0,0,0.3)]"
                        : "bg-[#eef0f5] text-gray-700 shadow-[inset_3px_3px_8px_#d1d9e6,inset_-3px_-3px_8px_#ffffff]"
                    }`}
                  >
                    {timePreferences.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-between pt-2">
                  <Button type="button" variant="secondary" onClick={() => setStep(2)}>
                    ← Back
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? "Generating..." : "✨ Generate Routine"}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
}
