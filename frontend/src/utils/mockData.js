export const features = [
  {
    title: "AI Study Planner",
    desc: "Smart algorithm creates optimized revision schedules based on your exam dates, subjects, and learning pace.",
    icon: "🧠",
  },
  {
    title: "Crash Courses",
    desc: "Intensive revision modes for last-minute prep — 1 day, 3 days, or 7 days to exam.",
    icon: "⚡",
  },
  {
    title: "Progress Tracking",
    desc: "Visual dashboards with XP, streaks, and syllabus completion stats to keep you motivated.",
    icon: "📊",
  },
  {
    title: "Skeuomorphic UI",
    desc: "Premium neumorphic design with realistic shadows and tactile interactions for an immersive feel.",
    icon: "🎨",
  },
  {
    title: "Gamification",
    desc: "Earn XP, build streaks, unlock badges, and level up as you conquer your study goals.",
    icon: "🏆",
  },
  {
    title: "Smart Calendar",
    desc: "Visual calendar view of your study plan with drag-and-drop task management.",
    icon: "📅",
  },
];

export const studyModes = [
  {
    id: "emergency",
    title: "Exam Tomorrow",
    subtitle: "🚀 Emergency Mode",
    desc: "24-hour intensive revision covering key topics and high-weightage chapters.",
    color: "from-rose-400 to-pink-500",
    shadow: "shadow-rose-200 dark:shadow-rose-900/30",
    icon: "🚀",
  },
  {
    id: "crash",
    title: "3-Day Crash Course",
    subtitle: "🔥 Sprint Mode",
    desc: "Accelerated 3-day plan covering 70% syllabus with focused revision techniques.",
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-200 dark:shadow-amber-900/30",
    icon: "🔥",
  },
  {
    id: "weekly",
    title: "7-Day Revision",
    subtitle: "📚 Marathon Mode",
    desc: "Comprehensive 7-day revision with balanced schedule for complete syllabus coverage.",
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-200 dark:shadow-emerald-900/30",
    icon: "📚",
  },
];

export const routineData = {
  date: "2026-07-15",
  exam: "Mathematics - Semester Final",
  targetScore: 92,
  xp: 450,
  streak: 7,
  level: 5,
  nextLevelXp: 600,
  syllabusCompleted: 68,
  weakTopics: ["Integral Calculus", "Differential Equations"],
  goals: [
    { id: 1, text: "Review Unit 1 Notes", done: true },
    { id: 2, text: "Solve 10 Practice Problems", done: true },
    { id: 3, text: "Watch Lecture 3 Video", done: false },
    { id: 4, text: "Complete Chapter 5 Quiz", done: false },
    { id: 5, text: "Revise Formulas Sheet", done: false },
  ],
  schedule: [
    { time: "7:00 – 8:00 AM", title: "Unit 1: Limits & Continuity", type: "notes" },
    { time: "8:00 – 9:00 AM", title: "Practice Problems (Set A)", type: "practice" },
    { time: "9:00 – 9:30 AM", title: "☕ Break", type: "break" },
    { time: "9:30 – 10:30 AM", title: "Unit 3: Integration Basics", type: "lecture" },
    { time: "10:30 – 11:30 AM", title: "Integration Practice Quiz", type: "quiz" },
    { time: "11:30 – 12:00 PM", title: "Review Mistakes & Notes", type: "review" },
    { time: "12:00 – 1:00 PM", title: "🧘 Lunch Break", type: "break" },
    { time: "1:00 – 2:00 PM", title: "Unit 4: Differential Equations", type: "notes" },
    { time: "2:00 – 3:00 PM", title: "Problem Solving Session", type: "practice" },
    { time: "3:00 – 3:30 PM", title: "☕ Break", type: "break" },
    { time: "3:30 – 4:30 PM", title: "Mock Test (2 Sections)", type: "test" },
    { time: "4:30 – 5:00 PM", title: "Daily Goals Review", type: "review" },
  ],
  badges: [
    { id: 1, name: "Early Bird", icon: "🌅", unlocked: true },
    { id: 2, name: "Streak Master", icon: "🔥", unlocked: true },
    { id: 3, name: "Quiz Whiz", icon: "🧠", unlocked: true },
    { id: 4, name: "Iron Will", icon: "💪", unlocked: false },
    { id: 5, name: "Math Genius", icon: "📐", unlocked: false },
    { id: 6, name: "Night Owl", icon: "🦉", unlocked: true },
  ],
};

export const subjects = [
  "Mathematics", "Physics", "Chemistry", "Biology",
  "Computer Science", "English", "History", "Geography",
];

export const preparationLevels = [
  { value: "not_started", label: "Not Started" },
  { value: "barely", label: "Barely Started" },
  { value: "halfway", label: "Halfway There" },
  { value: "almost", label: "Almost Done" },
  { value: "reviewing", label: "Just Reviewing" },
];

export const studyHours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const timePreferences = [
  "Early Morning (5-8 AM)",
  "Morning (8-12 PM)",
  "Afternoon (12-4 PM)",
  "Evening (4-8 PM)",
  "Night (8-12 AM)",
  "Late Night (12-5 AM)",
];
