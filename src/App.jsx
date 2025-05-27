import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/tailwind.css";
import React from "react";
import { Suspense } from "react";
import Loading from "./components/Loading";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import GuestLayout from "./layouts/GuestLayout";
import CheckStock from "./guest/pages/CheckStock";
import ProductDetail from "./pages/ProductDetail";
// import Dashboard2 from './pages/Dashboard2'
// import Customers from './pages/Customers'
// import Orders from './pages/Orders'
// import NotFound from './pages/NotFound'
// import Error400 from "./pages/Error400";
// import Error401 from "./pages/Error401";
// import Error403 from "./pages/Error403";
// import AddCustomers from "./pages/AddCustomers";
// import AddOrders from "./pages/AddOrders";
// import MainLayout from './layouts/MainLayout';
// import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';
// import Forgot from './pages/auth/Forgot';
// import AuthLayout from './layouts/AuthLayout';

const Dashboard2 = React.lazy(() => import("./pages/Dashboard2"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Products = React.lazy(() => import("./pages/Products"));
// const NotFound = React.lazy(() => import("./pages/NotFound"))
// const Error400 = React.lazy(() => import("./pages/Error400"))
// const Error401 = React.lazy(() => import("./pages/Error401"))
// const Error403 = React.lazy(() => import("./pages/Error403"))
const AddCustomers = React.lazy(() => import("./pages/AddCustomers"));
const AddOrders = React.lazy(() => import("./pages/AddOrders"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const UserList = React.lazy(() => import("./pages/UserList"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
      <Route path="/cekstok" element={<CheckStock/>} />
        <Route element={<MainLayout/>}>
        {/* <Route element={<GuestLayout />}> */}
          <Route path="/users" element={<UserList />} />
          {/* <Route path="/error400" element={<Error400 />} />
                    <Route path="/error401" element={<Error401 />} />
                    <Route path="/error403" element={<Error403/>} /> */}
          <Route path="/" element={<Dashboard2 />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/addorders" element={<AddOrders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/addcustomers" element={<AddCustomers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
