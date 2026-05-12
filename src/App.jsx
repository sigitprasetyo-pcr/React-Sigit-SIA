import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// --- 1. LAYOUTS ---
// Layout tidak di-lazy load agar struktur utama aplikasi langsung muncul
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// --- 2. COMPONENTS ---
import Loading from "./components/Loading";

// --- 3. STYLES ---
import "./assets/tailwind.css";

// --- 4. LAZY LOAD PAGES ---
// Menggunakan React.lazy untuk optimasi performa (Code Splitting)
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Product = React.lazy(() => import("./pages/Product")); 
const ProductDetail = React.lazy(() => import("./pages/ProductDetail")); 
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage")); 

// Auth Pages
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

export default function App() {
  return (
    // 5. BUNGKUS DENGAN SUSPENSE
    // Loading component akan muncul saat file JS halaman sedang diunduh
    <Suspense fallback={<Loading />}>
      <Routes>
        
        {/* --- GROUP: MAIN DASHBOARD (Memakai Sidebar & Header) --- */}
        <Route element={<MainLayout />}>
          {/* Halaman Utama */}
          <Route path="/" element={<Dashboard />} />
          
          {/* Halaman Pesanan & Pelanggan */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />

          {/* 🔥 MODUL PRODUK (PERTEMUAN 9 - DYNAMIC ROUTE) */}
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* 🔥 ERROR HANDLING ROUTES */}
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

          {/* Catch-all 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* --- GROUP: AUTHENTICATION (Tanpa Sidebar) --- */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

      </Routes>
    </Suspense>
  );
}