import { useTheme } from "../../context/themeContext";
import { routineData } from "../../utils/mockData";
import Card from "../../components/ui/Card";
import ProgressBar from "../../components/ProgressBar";

const allBadges = routineData.badges;

export default function Gamification() {
  const { dark } = useTheme();
  const unlockedCount = allBadges.filter((b) => b.unlocked).length;
  const totalBadges = allBadges.length;


  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-4xl mb-3">🏆</div>
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 transition-colors duration-300 ${
            dark ? "text-gray-100" : "text-gray-800"
          }`}>
            Gamification Hub
          </h1>
          <p className={`text-lg transition-colors duration-300 ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}>
            Level up your study game
          </p>
        </div>

        {/* Main XP/Level Card */}
        <Card className="mb-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-6">
            {/* Level circle */}
            <div className={`w-28 h-28 rounded-[2rem] flex flex-col items-center justify-center transition-all duration-300 ${
              dark
                ? "bg-gradient-to-br from-amber-600/30 to-orange-600/20 shadow-[6px_6px_14px_rgba(0,0,0,0.3)]"
                : "bg-gradient-to-br from-amber-400 to-orange-500 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]"
            }`}>
              <span className="text-3xl font-bold text-white">{routineData.level}</span>
              <span className="text-xs font-medium text-white/80">LEVEL</span>
            </div>

            {/* Stats */}
            <div className="text-left">
              <div className="flex items-center gap-6 mb-2">
                <div>
                  <p className={`text-2xl font-bold transition-colors duration-300 ${dark ? "text-gray-100" : "text-gray-800"}`}>
                    {routineData.xp}
                  </p>
                  <p className={`text-xs transition-colors duration-300 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                    Total XP
                  </p>
                </div>
                <div>
                  <p className={`text-2xl font-bold transition-colors duration-300 ${dark ? "text-gray-100" : "text-gray-800"}`}>
                    🔥 {routineData.streak}
                  </p>
                  <p className={`text-xs transition-colors duration-300 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                    Day Streak
                  </p>
                </div>
              </div>
              <div className="w-64">
                <ProgressBar
                  value={routineData.xp}
                  max={routineData.nextLevelXp}
                  label={`${routineData.xp} / ${routineData.nextLevelXp} XP`}
                  size="md"
                  color="amber"
                  showPercent={false}
                />
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t transition-colors duration-300 ${
            dark ? "border-gray-700" : "border-gray-200"
          }`}>
            {[
              { label: "Study Sessions", value: "47" },
              { label: "Quizzes Done", value: "23" },
              { label: "Perfect Scores", value: "12" },
              { label: "Hours This Week", value: "39" },
            ].map((s, i) => (
              <div key={i}>
                <p className={`text-lg font-bold transition-colors duration-300 ${dark ? "text-gray-100" : "text-gray-800"}`}>
                  {s.value}
                </p>
                <p className={`text-xs transition-colors duration-300 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Badges */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-lg font-bold transition-colors duration-300 ${dark ? "text-gray-100" : "text-gray-800"}`}>
              🎖️ Badges ({unlockedCount}/{totalBadges})
            </h2>
            <ProgressBar value={unlockedCount} max={totalBadges} size="sm" color="amber" showPercent className="w-32" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {allBadges.map((badge) => (
              <div
                key={badge.id}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200 ${
                  badge.unlocked
                    ? dark
                      ? "bg-gray-700/50 shadow-[3px_3px_8px_rgba(0,0,0,0.3)]"
                      : "bg-[#eef0f5] shadow-[4px_4px_10px_#b8b9be,-4px_-4px_10px_#ffffff]"
                    : dark
                      ? "bg-gray-800/50 opacity-40"
                      : "bg-gray-100/50 opacity-40"
                }`}
              >
                <span className="text-3xl">{badge.icon}</span>
                <p className={`text-xs font-medium text-center transition-colors duration-300 ${
                  badge.unlocked
                    ? dark ? "text-gray-300" : "text-gray-700"
                    : "text-gray-400"
                }`}>
                  {badge.name}
                </p>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                  badge.unlocked
                    ? "bg-emerald-500/20 text-emerald-500"
                    : "text-gray-400"
                }`}>
                  {badge.unlocked ? "Unlocked" : "Locked"}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* XP Earning Tips */}
        <div className="mt-8">
          <Card>
            <h2 className={`text-lg font-bold mb-4 transition-colors duration-300 ${dark ? "text-gray-100" : "text-gray-800"}`}>
              💡 How to Earn More XP
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "✅", title: "Complete Goals", desc: "+25 XP per goal" },
                { icon: "🧪", title: "Take Quizzes", desc: "+50 XP per quiz" },
                { icon: "🔥", title: "Maintain Streak", desc: "Bonus XP daily" },
                { icon: "📚", title: "Study Hours", desc: "+10 XP per hour" },
              ].map((tip, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-4 rounded-xl transition-all duration-200 ${
                    dark ? "bg-gray-700/30" : "bg-[#eef0f5]"
                  }`}
                >
                  <span className="text-xl">{tip.icon}</span>
                  <div>
                    <p className={`text-sm font-semibold transition-colors duration-300 ${dark ? "text-gray-200" : "text-gray-700"}`}>
                      {tip.title}
                    </p>
                    <p className={`text-xs transition-colors duration-300 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                      {tip.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
