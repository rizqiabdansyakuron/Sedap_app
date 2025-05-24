import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customer from "./pages/Customer";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Forgot from "./pages/Auth/Forgot";
import Loading from "./components/Loading";
import { Suspense } from "react";
import User from "./pages/User";
import NotFound from "./pages/Notfound";
import Home from "./pages/Home";
import ProdukUnggulan from "./pages/ProdukUnggulan";
import HeroSection from "./pages/Herosection";
import PopularDestination from "./pages/PopularProduct";
import CekStokProduk from "./pages/CekStokProduk";


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/user" element={<User />} />
          
        </Route>

        <Route path="/cek" element={<CekStokProduk />} />
        <Route path="/pop" element={<PopularDestination />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/hero" element={<HeroSection />} />

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
