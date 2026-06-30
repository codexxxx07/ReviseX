import { useTheme } from "../context/themeContext";
import { routineData } from "../utils/mockData";
import Card from "../components/ui/Card";
import ProgressBar from "../components/ProgressBar";

const weeklyData = [
  { day: "Mon", hours: 4 },
  { day: "Tue", hours: 6 },
  { day: "Wed", hours: 5 },
  { day: "Thu", hours: 7 },
  { day: "Fri", hours: 3 },
  { day: "Sat", hours: 8 },
  { day: "Sun", hours: 6 },
];

const subjectProgress = [
  { name: "Limits & Continuity", pct: 85 },
  { name: "Differentiation", pct: 72 },
  { name: "Integration", pct: 45 },
  { name: "Differential Equations", pct: 30 },
  { name: "Vector Calculus", pct: 60 },
];

export default function ProgressDashboard() {
  const { dark } = useTheme();

  const maxHours = Math.max(...weeklyData.map((d) => d.hours));
  const totalHours = weeklyData.reduce((s, d) => s + d.hours, 0);
  const avgHours = (totalHours / weeklyData.length).toFixed(1);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 transition-colors duration-300 ${
            dark ? "text-gray-100" : "text-gray-800"
          }`}>
            📈 Progress Dashboard
          </h1>
          <p className={`text-lg transition-colors duration-300 ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}>
            Track your study journey
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Hours", value: `${totalHours}h`, icon: "⏱️" },
            { label: "Daily Avg", value: `${avgHours}h`, icon: "📊" },
            { label: "Syllabus Done", value: `${routineData.syllabusCompleted}%`, icon: "✅" },
            { label: "Streak", value: `${routineData.streak} days`, icon: "🔥" },
          ].map((stat, i) => (
            <Card key={i} className="text-center" hover={false}>
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${dark ? "text-gray-100" : "text-gray-800"}`}>
                {stat.value}
              </p>
              <p className={`text-xs sm:text-sm transition-colors duration-300 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                {stat.label}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly chart */}
          <Card>
            <h2 className={`text-lg font-bold mb-6 transition-colors duration-300 ${dark ? "text-gray-100" : "text-gray-800"}`}>
              📊 Weekly Study Hours
            </h2>
            <div className="flex items-end justify-between gap-2 h-40">
              {weeklyData.map((d) => {
                const height = maxHours > 0 ? (d.hours / maxHours) * 100 : 0;
                return (
                  <div key={d.day} className="flex flex-col items-center gap-2 flex-1">
                    <span className={`text-xs font-medium transition-colors duration-300 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                      {d.hours}h
                    </span>
                    <div
                      className="w-full rounded-lg bg-gradient-to-t from-indigo-500 to-purple-500 transition-all duration-500"
                      style={{ height: `${height}%`, minHeight: "8px" }}
                    />
                    <span className={`text-xs font-medium transition-colors duration-300 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                      {d.day}
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Subject Progress */}
          <Card>
            <h2 className={`text-lg font-bold mb-6 transition-colors duration-300 ${dark ? "text-gray-100" : "text-gray-800"}`}>
              📚 Subject-wise Progress
            </h2>
            <div className="space-y-4">
              {subjectProgress.map((s) => (
                <ProgressBar
                  key={s.name}
                  label={s.name}
                  value={s.pct}
                  max={100}
                  size="md"
                  color={s.pct >= 70 ? "emerald" : s.pct >= 40 ? "amber" : "rose"}
                />
              ))}
            </div>
          </Card>

          {/* Weak Topics */}
          <Card>
            <h2 className={`text-lg font-bold mb-4 transition-colors duration-300 ${dark ? "text-gray-100" : "text-gray-800"}`}>
              ⚠️ Weak Topics
            </h2>
            <p className={`text-sm mb-4 transition-colors duration-300 ${dark ? "text-gray-400" : "text-gray-500"}`}>
              Focus more on these areas
            </p>
            <div className="space-y-3">
              {routineData.weakTopics.map((topic, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                    dark
                      ? "bg-rose-900/20 border border-rose-900/30"
                      : "bg-rose-50 border border-rose-100"
                  }`}
                >
                  <span className={`text-sm font-medium ${dark ? "text-rose-400" : "text-rose-600"}`}>
                    {topic}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    dark ? "bg-rose-900/30 text-rose-400" : "bg-rose-100 text-rose-600"
                  }`}>
                    Needs work
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* XP & Level */}
          <Card>
            <h2 className={`text-lg font-bold mb-6 transition-colors duration-300 ${dark ? "text-gray-100" : "text-gray-800"}`}>
              ⭐ Experience & Level
            </h2>
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold ${
                dark
                  ? "bg-amber-600/20 text-amber-400"
                  : "bg-amber-100 text-amber-600"
              }`}>
                {routineData.level}
              </div>
              <div className="flex-1">
                <p className={`font-semibold transition-colors duration-300 ${dark ? "text-gray-200" : "text-gray-700"}`}>
                  Level {routineData.level}
                </p>
                <p className={`text-xs mb-2 transition-colors duration-300 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                  {routineData.xp} / {routineData.nextLevelXp} XP to next level
                </p>
                <ProgressBar
                  value={routineData.xp}
                  max={routineData.nextLevelXp}
                  size="sm"
                  color="amber"
                  showPercent={false}
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔥</span>
              <div>
                <p className={`font-semibold transition-colors duration-300 ${dark ? "text-gray-200" : "text-gray-700"}`}>
                  {routineData.streak}-Day Streak
                </p>
                <p className={`text-xs transition-colors duration-300 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                  Keep going! You're on fire!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
