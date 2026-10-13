import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  PackageCheck,
  Sparkles,
} from "lucide-react";

export default function Side() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
      isActive
        ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
        : "text-slate-500 hover:bg-violet-50 hover:text-violet-700"
    }`;

  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-violet-100 bg-white p-4 md:min-h-[calc(100vh-76px)] md:w-64 md:border-b-0 md:border-r md:p-5">
      <div className="mb-7 flex items-center gap-3 px-2 py-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-500 text-white shadow-lg">
          <ShoppingBag size={23} />
        </div>
        <div>
          <h1 className="text-xl font-black tracking-wider text-slate-800">
            LUXORA
          </h1>
          <p className="text-xs text-slate-400">Commerce Studio</p>
        </div>
      </div>

      <p className="mb-3 px-3 text-xs font-bold uppercase tracking-widest text-slate-400">
        Main menu
      </p>

      <nav className="flex flex-col gap-2">
        <NavLink to="/dashboard" className={linkClass}>
          <LayoutDashboard size={19} />
          Dashboard
        </NavLink>

        <NavLink to="/orders" className={linkClass}>
          <ShoppingBag size={19} />
          Orders
        </NavLink>
      </nav>

      <div className="mt-6 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 p-4">
        <div className="mb-2 flex items-center gap-2 text-violet-600">
          <PackageCheck size={19} />
          <span className="text-sm font-bold">Order workspace</span>
        </div>
        <p className="text-xs leading-5 text-slate-500">
          Track, review, and organize your store orders in one place.
        </p>
      </div>

      <div className="mt-auto hidden items-center gap-2 px-3 pt-8 text-xs text-slate-400 md:flex">
        <Sparkles size={14} />
        <span>Made for smarter commerce</span>
      </div>
    </aside>
  );
}