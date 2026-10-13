import { Package, CalendarDays, UserRound, XCircle } from "lucide-react";

export default function OrderCard({ order, onCancel }) {
  const statusStyles = {
    Processing: "bg-amber-50 text-amber-700 ring-amber-200",
    Shipped: "bg-blue-50 text-blue-700 ring-blue-200",
    Delivered: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    Cancelled: "bg-rose-50 text-rose-700 ring-rose-200",
  };

  const productIcons = {
    Electronics: "🎧",
    Fashion: "👕",
    Footwear: "👟",
    Accessories: "⌚",
    Home: "☕",
  };

  return (
    <article className="rounded-2xl border border-violet-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-3xl">
            {productIcons[order.category] || "📦"}
          </div>

          <div>
            <h3 className="font-bold text-slate-800">{order.product}</h3>
            <p className="mt-1 text-sm text-slate-400">{order.id}</p>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1.5 text-xs font-bold ring-1 ring-inset ${
            statusStyles[order.status] || "bg-slate-50 text-slate-600 ring-slate-200"
          }`}
        >
          {order.status}
        </span>
      </div>

      <div className="my-5 grid grid-cols-1 gap-3 border-y border-slate-100 py-4 text-sm sm:grid-cols-2">
        <p className="flex items-center gap-2 text-slate-600">
          <UserRound size={16} className="text-violet-500" />
          {order.customer}
        </p>

        <p className="flex items-center gap-2 text-slate-600">
          <CalendarDays size={16} className="text-violet-500" />
          {order.date}
        </p>

        <p className="flex items-center gap-2 text-slate-600">
          <Package size={16} className="text-violet-500" />
          {order.category}
        </p>

        <p className="font-bold text-slate-800">
          ₹{order.price.toLocaleString("en-IN")}
        </p>
      </div>

      {order.status === "Processing" && onCancel && (
        <button
          onClick={() => onCancel(order.id)}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-semibold text-rose-600 transition hover:bg-rose-600 hover:text-white"
        >
          <XCircle size={17} />
          Cancel Order
        </button>
      )}
    </article>
  );
}