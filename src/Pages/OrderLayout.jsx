import { NavLink, Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { ShoppingBag, History, Ban } from "lucide-react";

export default function OrderLayout({ orders, onCancel }) {
  const tabs = [
    {
      to: "current-orders",
      label: "Current Orders",
      icon: ShoppingBag,
      count: orders.filter((o) =>
        ["Processing", "Shipped"].includes(o.status)
      ).length,
    },
    {
      to: "order-history",
      label: "Order History",
      icon: History,
      count: orders.filter((o) => o.status === "Delivered").length,
    },
    {
      to: "cancelled-orders",
      label: "Cancelled Orders",
      icon: Ban,
      count: orders.filter((o) => o.status === "Cancelled").length,
    },
  ];

  return (
    <section>
      <div className="mb-7">
        <p className="text-sm font-semibold text-violet-600">
          MANAGEMENT / ORDERS
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-800">
          Orders
        </h1>
        <p className="mt-2 text-slate-500">
          Manage current orders, delivered purchases, and cancellations.
        </p>
      </div>

      <div className="mb-7 flex flex-wrap gap-2 rounded-2xl border border-violet-100 bg-white p-2 shadow-sm">
        {tabs.map(({ to, label, icon: Icon, count }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-violet-600 text-white shadow-md shadow-violet-200"
                  : "text-slate-500 hover:bg-violet-50 hover:text-violet-700"
              }`
            }
          >
            <Icon size={17} />
            <span>{label}</span>
            <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs">
              {count}
            </span>
          </NavLink>
        ))}
      </div>

      <Outlet context={{ orders, onCancel }} />
    </section>
  );
}