import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import ErrorPage from "./components/ErrorPage"; // ✅ TAMBAHAN
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";

function App() {
  return (
    <div className="flex bg-[#F3F4F6] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-4">
        <Header />

        <Routes>
          {/* MAIN PAGE */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />

          {/* 🔥 ERROR PAGE (Sesuai Soal) */}
          <Route
            path="/error/400"
            element={
              <ErrorPage
                code="400"
                message="Bad Request"
                image="https://cdn-icons-png.flaticon.com/512/564/564619.png"
              />
            }
          />

          <Route
            path="/error/401"
            element={
              <ErrorPage
                code="401"
                message="Unauthorized"
                image="https://cdn-icons-png.flaticon.com/512/564/564619.png"
              />
            }
          />

          <Route
            path="/error/403"
            element={
              <ErrorPage
                code="403"
                message="Forbidden"
                image="https://cdn-icons-png.flaticon.com/512/564/564619.png"
              />
            }
          />

          {/* 🔥 404 (PAKAI NotFound ATAU ErrorPage) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;