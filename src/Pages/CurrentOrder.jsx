import { useOutletContext } from "react-router-dom";
import OrderCard from "../Components/OrderCard";

export default function CurrentOrder() {
  const { orders, onCancel } = useOutletContext();

  const currentOrders = orders.filter((order) =>
    ["Processing", "Shipped"].includes(order.status)
  );

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-800">
          Current Orders
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Orders being prepared or shipped to customers.
        </p>
      </div>

      {currentOrders.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-violet-200 bg-white p-10 text-center">
          <p className="text-4xl">📦</p>
          <h3 className="mt-3 font-bold text-slate-800">
            No current orders
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            All caught up! There are no current orders to display.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {currentOrders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              onCancel={onCancel}
            />
          ))}
        </div>
      )}
    </div>
  );
}