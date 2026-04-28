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