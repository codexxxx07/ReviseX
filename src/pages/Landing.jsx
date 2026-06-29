import { useTheme } from "../utils/themeContext";
import { features } from "../utils/mockData";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Landing({ navigate }) {
  const { dark } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in transition-colors duration-300"
              style={dark ? { background: "rgba(99,102,241,0.1)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.2)" } : { background: "rgba(99,102,241,0.08)", color: "#6366f1", border: "1px solid rgba(99,102,241,0.15)" }}
            >
              <span>✨</span> AI-Powered Study Platform
            </div>

            <h1 className={`text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 transition-colors duration-300 ${
              dark ? "text-gray-100" : "text-gray-900"
            }`}>
              Study Less.{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Score More.
              </span>
            </h1>

            <p className={`text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed transition-colors duration-300 ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}>
              ReviseX generates the perfect last-minute revision plan using AI.
              Enter your exam details and get a personalized study schedule instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => navigate("/generator")}>
                🚀 Start Planning
              </Button>
              <Button variant="secondary" size="lg" onClick={() => navigate("/dashboard")}>
                ▶ Try Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.4), transparent)" }}
        />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent)" }}
        />
      </section>

      {/* Features Section */}
      <section className={`py-20 transition-colors duration-300 ${dark ? "" : "bg-gray-100/30"}`} id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
              dark ? "text-gray-100" : "text-gray-800"
            }`}>
              Why ReviseX?
            </h2>
            <p className={`text-lg max-w-lg mx-auto transition-colors duration-300 ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}>
              Everything you need to crush your exams
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f, i) => (
              <Card key={i} className="group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                  dark ? "text-gray-100" : "text-gray-800"
                }`}>
                  {f.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                  dark ? "text-gray-400" : "text-gray-500"
                }`}>
                  {f.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
              dark ? "text-gray-100" : "text-gray-800"
            }`}>
              Ready to Ace Your Exams? 🎯
            </h2>
            <p className={`text-lg mb-8 max-w-lg mx-auto transition-colors duration-300 ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}>
              Join thousands of students who are studying smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => navigate("/signup")}>
                Get Started Free
              </Button>
              <Button variant="secondary" size="lg" onClick={() => navigate("/login")}>
                I Already Have an Account
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t transition-colors duration-300 ${
        dark ? "border-gray-800 text-gray-500" : "border-gray-200 text-gray-400"
      }`}>
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          © 2026 ReviseX — Study Less. Score More.
        </div>
      </footer>
    </div>
  );
}
