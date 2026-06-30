import { useTheme } from "../context/themeContext";
import { features } from "../utils/mockData";
import Button from "../components/ui/Button";

export default function Landing({ navigate }) {
  const { dark } = useTheme();

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ease-in-out ${
      dark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
    }`}>
      
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-150 pointer-events-none opacity-40 dark:opacity-30 z-0">
        <div className="absolute top-[-10%] left-[10%] w-100 h-100 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 blur-[120px]" />
        <div className="absolute top-[5%] right-[5%] w-87.5 h-87.5 rounded-full bg-linear-to-br from-fuchsia-400 to-cyan-400 blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Tagline Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md mb-8 animate-fade-in border transition-all duration-300 ${
            dark 
              ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.15)]" 
              : "bg-indigo-500/5 text-indigo-600 border-indigo-500/15"
          }`}>
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            ✨ AI-Powered Study Platform
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6">
            Study Less.{" "}
            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-sm animate-gradient-text">
              Score More.
            </span>
          </h1>

          {/* Paragraph Context */}
          <p className={`text-base sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium transition-colors duration-300 ${
            dark ? "text-slate-400" : "text-slate-600"
          }`}>
            ReviseX generates the perfect last-minute revision plan using AI. 
            Enter your exam details and unlock a personalized study schedule instantly.
          </p>

          {/* Core CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto sm:max-w-md">
            <Button 
              size="lg" 
              className="w-full sm:w-auto shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transform active:scale-95 transition-all duration-200" 
              onClick={() => navigate("/generator")}
            >
              🚀 Start Planning Free
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className={`w-full sm:w-auto backdrop-blur-sm transform active:scale-95 transition-all duration-200 border ${
                dark ? "border-slate-800 hover:bg-slate-900" : "border-slate-200 hover:bg-slate-100"
              }`}
              onClick={() => navigate("/dashboard")}
            >
              ▶ Try Interactive Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 z-10" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Block */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Why Choose ReviseX?
            </h2>
            <div className="w-12 h-1 bg-linear-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-4" />
            <p className={`text-base sm:text-lg max-w-md mx-auto transition-colors duration-300 ${
              dark ? "text-slate-400" : "text-slate-600"
            }`}>
              Everything you need to crush your upcoming exams without the burnout.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div 
                key={i} 
                className={`group relative rounded-2xl p-6 sm:p-8 backdrop-blur-xl border transform hover:-translate-y-2 active:scale-[0.99] transition-all duration-300 ease-out hover:shadow-2xl ${
                  dark 
                    ? "bg-slate-900/40 border-slate-800/80 hover:border-indigo-500/50 hover:shadow-indigo-500/5" 
                    : "bg-white/60 border-slate-200/80 hover:border-indigo-500/30 hover:shadow-indigo-500/10"
                }`}
              >
                {/* Icon Wrapper Component */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  dark ? "bg-slate-800/80 text-indigo-400" : "bg-indigo-50 text-indigo-600"
                }`}>
                  {f.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {f.title}
                </h3>
                
                <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                  dark ? "text-slate-400" : "text-slate-600"
                }`}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Card CTA Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center border backdrop-blur-2xl shadow-xl ${
            dark 
              ? "bg-slate-900/60 border-slate-800/80 shadow-slate-950/50" 
              : "bg-white/70 border-slate-200/80 shadow-slate-200/50"
          }`}>
            
            {/* Background Accent Gradients specific to CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Ready to Ace Your Exams? 🎯
            </h2>
            
            <p className={`text-base sm:text-lg mb-10 max-w-xl mx-auto font-medium leading-relaxed ${
              dark ? "text-slate-300" : "text-slate-600"
            }`}>
              Join thousands of high-achieving students who are optimizing their workflow. Study smarter, minimize stress, and yield execution.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto shadow-lg shadow-indigo-500/20 transform active:scale-95 transition-all duration-200" 
                onClick={() => navigate("/signup")}
              >
                Get Started Free
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className={`w-full sm:w-auto backdrop-blur-sm transform active:scale-95 transition-all duration-200 border ${
                  dark ? "border-slate-800 hover:bg-slate-900/60" : "border-slate-200 hover:bg-slate-100"
                }`}
                onClick={() => navigate("/login")}
              >
                Sign In to Account
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Element */}
      <footer className={`py-12 border-t relative z-10 transition-colors duration-500 ${
        dark ? "border-slate-900 bg-slate-950/60 text-slate-500" : "border-slate-200 bg-white/40 text-slate-400"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium">
          <div>
            © 2026 ReviseX — Study Less. Score More.
          </div>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-indigo-500 transition-colors duration-200">Features</a>
            <a href="#" className="hover:text-indigo-500 transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-indigo-500 transition-colors duration-200">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}