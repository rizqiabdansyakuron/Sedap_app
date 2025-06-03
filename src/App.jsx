import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy loading components
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Customer = lazy(() => import("./pages/Customer"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const Forgot = lazy(() => import("./pages/Auth/Forgot"));
const Loading = lazy(() => import("./components/Loading"));
const User = lazy(() => import("./pages/User"));
const NotFound = lazy(() => import("./pages/Notfound"));
const Home = lazy(() => import("./pages/Home"));
const ProdukUnggulan = lazy(() => import("./pages/ProdukUnggulan"));
const HeroSection = lazy(() => import("./pages/Herosection"));
const RestaurantReservationForm = lazy(() => import("./pages/Booking"));
const RestaurantBookingStatic = lazy(() => import("./pages/Booking"));
const PopularDestination = lazy(() => import("./pages/PopularProduct"));
const Notes= lazy(() => import("./pages/Notes"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/user" element={<User />} />
          <Route path="/notes" element={<Notes />} />
        </Route>
        <Route path="/produkunggulan" element={<ProdukUnggulan />} />
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
