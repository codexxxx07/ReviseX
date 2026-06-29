/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback } from "react";

const AppContext = createContext();

let toastId = 0;

export function AppProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const [routine, setRoutine] = useState(null);
  const [goals, setGoals] = useState([]);
  const [user, setUser] = useState(null);

  const addToast = useCallback((message, type = "success", duration = 3500) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toggleGoal = useCallback((goalId) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === goalId ? { ...g, done: !g.done } : g))
    );
  }, []);

  return (
    <AppContext.Provider
      value={{ toasts, addToast, removeToast, routine, setRoutine, goals, setGoals, toggleGoal, user, setUser }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
