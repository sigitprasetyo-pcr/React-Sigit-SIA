import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout"; // Tambahan untuk Auth Layout

// Import Pages Main
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound"; // ✅ TAMBAHAN

// Import Pages Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";

import "./assets/tailwind.css";

function App() {
  return (
    <Routes>
      {/* Route MainLayout (Sesuai dengan kode asli kamu, tanpa diubah) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />

        {/* ✅ ROUTE 404 (WAJIB PALING BAWAH) */}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Route AuthLayout (Ditambahkan sesuai dengan tahap 2) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>
    </Routes>
  );
}

export default App;