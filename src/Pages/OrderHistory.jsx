import { useOutletContext } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import OrderCard from "../Components/OrderCard";

export default function OrderHistory() {
  const { orders } = useOutletContext();

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  );

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-800">
          Order History
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          A record of successfully delivered customer orders.
        </p>
      </div>

      {deliveredOrders.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-emerald-200 bg-white p-10 text-center">
          <CheckCircle2 className="mx-auto text-emerald-500" size={38} />
          <h3 className="mt-3 font-bold text-slate-800">
            No delivered orders yet
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {deliveredOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}