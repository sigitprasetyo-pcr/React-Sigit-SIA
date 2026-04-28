import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// 1. Import Layouts (Layout tidak di-lazy load agar tampilan dasar tidak berkedip)
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// 2. Import Loading Component
import Loading from "./components/Loading";

// Import CSS
import "./assets/tailwind.css";

// 3. Terapkan React.lazy untuk semua Halaman (Pages)
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage")); 

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

export default function App() {
  return (
    // 4. Bungkus Routes dengan Suspense
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Route MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />

          {/* 🔥 ERROR PAGE */}
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

          {/* 🔥 404 (Sesuai Soal) */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Route AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}