import { useOutletContext } from "react-router-dom";
import { Ban } from "lucide-react";
import OrderCard from "../Components/OrderCard";

export default function CancelledOrder() {
  const { orders } = useOutletContext();

  const cancelledOrders = orders.filter(
    (order) => order.status === "Cancelled"
  );

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-800">
          Cancelled Orders
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Review orders that have been cancelled.
        </p>
      </div>

      {cancelledOrders.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-rose-200 bg-white p-10 text-center">
          <Ban className="mx-auto text-rose-500" size={38} />
          <h3 className="mt-3 font-bold text-slate-800">
            No cancelled orders
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {cancelledOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}