import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Loading from "./components/Loading";

import "./assets/tailwind.css";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Product = React.lazy(() => import("./pages/Product"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Components = React.lazy(() => import("./pages/Components"));
const FiturXyz = React.lazy(() => import("./pages/FiturXyz"));
const Notes = React.lazy(() => import("./pages/Notes"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />

          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />

          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          <Route path="/notes" element={<Notes />} />

          <Route path="/components" element={<Components />} />
          <Route path="/fitur-xyz" element={<FiturXyz />} />

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

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}