import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Side from "./Components/Side";
import Dashboard from "./Pages/Dashboard";
import OrderLayout from "./Pages/OrderLayout";
import CurrentOrder from "./Pages/CurrentOrder";
import OrderHistory from "./Pages/OrderHistory";
import CancelledOrder from "./Pages/CancelledOrder";
import { initialOrders } from "./Data/Order";

function AppContent() {
  const [orders, setOrders] = useState(initialOrders);

  function handleCancel(orderId) {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (!confirmed) return;

    setOrders((previousOrders) =>
      previousOrders.map((order) =>
        order.id === orderId && order.status === "Processing"
          ? { ...order, status: "Cancelled" }
          : order
      )
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f6fc]">
      <Navbar />

      <div className="flex min-h-[calc(100vh-76px)] flex-col md:flex-row">
        <Side />

        <main className="min-w-0 flex-1 p-5 sm:p-7 lg:p-9">
          <div className="mx-auto max-w-7xl">
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/dashboard" replace />}
              />

              <Route
                path="/dashboard"
                element={<Dashboard orders={orders} />}
              />

              <Route
                path="/orders"
                element={
                  <OrderLayout
                    orders={orders}
                    onCancel={handleCancel}
                  />
                }
              >
                <Route
                  index
                  element={
                    <Navigate to="current-orders" replace />
                  }
                />

                <Route
                  path="current-orders"
                  element={<CurrentOrder />}
                />

                <Route
                  path="order-history"
                  element={<OrderHistory />}
                />

                <Route
                  path="cancelled-orders"
                  element={<CancelledOrder />}
                />
              </Route>

              <Route
                path="*"
                element={<Navigate to="/dashboard" replace />}
              />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}