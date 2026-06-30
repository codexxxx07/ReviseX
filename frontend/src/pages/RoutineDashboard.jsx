import { useState } from "react";
import { useTheme } from "../context/themeContext";
import { useApp } from "../context/appContext";
import { routineData } from "../utils/mockData";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import ProgressBar from "../components/ProgressBar";

function GoalItem({ goal, onToggle }) {
  const { dark } = useTheme();
  return (
    <div
      onClick={() => onToggle(goal.id)}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
        goal.done
          ? dark
            ? "bg-emerald-900/20 text-emerald-400"
            : "bg-emerald-50 text-emerald-600"
          : dark
            ? "bg-gray-700/30 text-gray-300 hover:bg-gray-700/50"
            : "bg-[#eef0f5] text-gray-600 hover:bg-white/50"
      }`}
    >
      <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold transition-all duration-200 ${
        goal.done
          ? "bg-emerald-500 text-white"
          : dark
            ? "border-2 border-gray-500"
            : "border-2 border-gray-300"
      }`}>
        {goal.done ? "✓" : ""}
      </div>
      <span className={`text-sm font-medium ${goal.done ? "line-through opacity-60" : ""}`}>
        {goal.text}
      </span>
    </div>
  );
}

export default function RoutineDashboard({ navigate }) {
  const { dark } = useTheme();
  const { goals, setGoals, toggleGoal, addToast } = useApp();
  const [routine] = useState(routineData);

  const displayGoals = goals.length > 0 ? goals : routine.goals;

  if (!displayGoals.some((g) => g.id === goals[0]?.id)) {
    setGoals(routine.goals);
  }

  const completedCount = displayGoals.filter((g) => g.done).length;
  const totalCount = displayGoals.length;

  const toggleHandler = (id) => {
    toggleGoal(id);
    const goal = displayGoals.find((g) => g.id === id);
    if (goal && !goal.done) {
      addToast("Goal completed! +25 XP 🎉", "success");
    }
  };

  const scheduleIcons = {
    notes: "📖",
    practice: "✏️",
    break: "☕",
    lecture: "🎬",
    quiz: "🧪",
    review: "🔄",
    test: "📝",
  };

  const scheduleColors = {
    notes: dark ? "border-l-indigo-500" : "border-l-indigo-400",
    practice: dark ? "border-l-emerald-500" : "border-l-emerald-400",
    break: dark ? "border-l-amber-500" : "border-l-amber-400",
    lecture: dark ? "border-l-violet-500" : "border-l-violet-400",
    quiz: dark ? "border-l-rose-500" : "border-l-rose-400",
    review: dark ? "border-l-cyan-500" : "border-l-cyan-400",
    test: dark ? "border-l-red-500" : "border-l-red-400",
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "📊 Syllabus", value: `${routine.syllabusCompleted}%`, color: "indigo" },
            { label: "⭐ XP Earned", value: routine.xp, color: "amber" },
            { label: "🔥 Streak", value: `${routine.streak} days`, color: "rose" },
            { label: "🏆 Level", value: routine.level, color: "emerald" },
          ].map((stat, i) => (
            <Card key={i} className="text-center" hover={false}>
              <p className={`text-xl sm:text-2xl font-bold mb-1 transition-colors duration-300 ${dark ? "text-gray-100" : "text-gray-800"}`}>
                {stat.value}
              </p>
              <p className={`text-xs sm:text-sm transition-colors duration-300 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                {stat.label}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Schedule Timeline */}
          <div className="lg:col-span-2">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-lg font-bold transition-colors duration-300 ${dark ? "text-gray-100" : "text-gray-800"}`}>
                  📅 Today's Schedule
                </h2>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  dark ? "bg-indigo-600/20 text-indigo-400" : "bg-indigo-100 text-indigo-600"
                }`}>
                  {routine.exam}
                </span>
              </div>
              <div className="space-y-3">
                {routine.schedule.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-4 p-4 rounded-xl border-l-4 transition-all duration-200 ${
                      dark ? "bg-gray-700/30" : "bg-[#eef0f5]"
                    } ${scheduleColors[item.type] || "border-l-gray-300"}`}
                  >
                    <div className="text-lg mt-0.5">
                      {scheduleIcons[item.type] || "📌"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold transition-colors duration-300 ${dark ? "text-gray-200" : "text-gray-700"}`}>
                        {item.title}
                      </p>
                      <p className={`text-xs mt-0.5 transition-colors duration-300 ${dark ? "text-gray-500" : "text-gray-400"}`}>
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar: Goals + Progress */}
          <div className="space-y-6">
            {/* Daily Goals */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-lg font-bold transition-colors duration-300 ${dark ? "text-gray-100" : "text-gray-800"}`}>
                  ✅ Daily Goals
                </h2>
                <span className={`text-sm font-bold ${
                  dark ? "text-gray-400" : "text-gray-500"
                }`}>
                  {completedCount}/{totalCount}
                </span>
              </div>
              <ProgressBar value={completedCount} max={totalCount} size="sm" color="emerald" />
              <div className="space-y-2 mt-4">
                {displayGoals.map((goal) => (
                  <GoalItem key={goal.id} goal={goal} onToggle={toggleHandler} />
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card>
              <h2 className={`text-lg font-bold mb-4 transition-colors duration-300 ${dark ? "text-gray-100" : "text-gray-800"}`}>
                ⚡ Quick Actions
              </h2>
              <div className="space-y-3">
                <Button className="w-full" size="sm" onClick={() => navigate("/generator")}>
                  Generate New Routine
                </Button>
                <Button className="w-full" variant="secondary" size="sm" onClick={() => navigate("/study-modes")}>
                  Switch Study Mode
                </Button>
                <Button className="w-full" variant="secondary" size="sm" onClick={() => navigate("/progress")}>
                  View Progress
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
