import {
  ShoppingBag,
  Truck,
  CheckCircle2,
  Ban,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import StatusCard from "../Components/StatusCard";
import OrderCard from "../Components/OrderCard";

export default function Dashboard({ orders }) {
  const current = orders.filter((o) =>
    ["Processing", "Shipped"].includes(o.status)
  ).length;

  const delivered = orders.filter(
    (o) => o.status === "Delivered"
  ).length;

  const cancelled = orders.filter(
    (o) => o.status === "Cancelled"
  ).length;

  return (
    <div>
      <div className="mb-7">
        <p className="text-sm font-semibold text-violet-600">
          OVERVIEW
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-800">
          Welcome back, Admin!
        </h1>
        <p className="mt-2 text-slate-500">
          Here is what's happening with your store orders.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatusCard
          title="Total Orders"
          count={orders.length}
          icon={ShoppingBag}
          color="bg-violet-100 text-violet-600"
          description="All orders in the system"
        />

        <StatusCard
          title="Current Orders"
          count={current}
          icon={Truck}
          color="bg-blue-100 text-blue-600"
          description="Processing and shipped"
        />

        <StatusCard
          title="Delivered"
          count={delivered}
          icon={CheckCircle2}
          color="bg-emerald-100 text-emerald-600"
          description="Successfully completed"
        />

        <StatusCard
          title="Cancelled"
          count={cancelled}
          icon={Ban}
          color="bg-rose-100 text-rose-600"
          description="Cancelled order records"
        />
      </div>

      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Recent Orders
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            A quick look at your latest order records.
          </p>
        </div>

        <Link
          to="/orders/current-orders"
          className="flex shrink-0 items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
        >
          View Orders <ArrowRight size={16} />
        </Link>
      </div>

      {orders.length === 0 ? (
        <div className="rounded-2xl bg-white p-10 text-center text-slate-500">
          No orders available.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {orders.slice(0, 4).map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}