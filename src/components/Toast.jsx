import { useApp } from "../utils/appContext";

const icons = {
  success: "✓",
  error: "✕",
  info: "ℹ",
  warning: "⚠",
};

const colors = {
  success: "bg-emerald-500",
  error: "bg-rose-500",
  info: "bg-indigo-500",
  warning: "bg-amber-500",
};

export default function ToastContainer() {
  const { toasts, removeToast } = useApp();

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-lg animate-slide-in ${
            colors[toast.type] || colors.info
          } text-white`}
        >
          <span className="text-lg font-bold leading-none mt-0.5">
            {icons[toast.type] || icons.info}
          </span>
          <p className="flex-1 text-sm font-medium">{toast.message}</p>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-white/80 hover:text-white transition-colors text-lg leading-none"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
