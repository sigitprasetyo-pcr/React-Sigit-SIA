import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
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

          {/* 🔥 ERROR PAGE */}
          <Route path="/error/400" element={<NotFound />} />
          <Route path="/error/401" element={<NotFound />} />
          <Route path="/error/403" element={<NotFound />} />

          {/* 🔥 404 WAJIB PALING BAWAH */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;