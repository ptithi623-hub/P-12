import { Bell, Search, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-violet-100 bg-white/90 px-5 backdrop-blur-xl md:px-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">
          Commerce Studio
        </p>
        <h2 className="mt-1 text-lg font-bold text-slate-800">
          Order Management
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-xl bg-violet-50 px-3 py-2 text-sm text-violet-500 sm:flex">
          <Sparkles size={16} />
          <span>Admin workspace</span>
        </div>

        <button
          aria-label="Notifications"
          className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-violet-50"
        >
          <Bell size={19} />
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 font-bold text-white">
          A
        </div>
      </div>
    </header>
  );
}