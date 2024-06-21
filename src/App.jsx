import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./Components/LandingPage/Layout";
import Loader from "./Components/Global/Compo/Loader";

// Lazy load the components
const Home = lazy(() => import("./Components/LandingPage/Pages/Home"));
const ServicesPage = lazy(() => import("./Components/LandingPage/Pages/ServicesPage"));
const ContactsPage = lazy(() => import("./Components/LandingPage/Pages/ContactsPage"));
const AboutPage = lazy(() => import("./Components/LandingPage/Pages/AboutPage"));
const Register = lazy(() => import("./Components/Authentication/Register"));
const Login = lazy(() => import("./Components/Authentication/Login"));
const DashboardLayout = lazy(() => import("./Components/Dashboard/DashboardLayout"));
const Dashboard = lazy(() => import("./Components/Dashboard/Pages/Dashboard"));
const Application = lazy(() => import("./Components/Dashboard/Pages/Application"));
const Profile = lazy(() => import("./Components/Dashboard/Pages/Profile"));
const Deposit = lazy(() => import("./Components/Dashboard/Pages/Deposit"));
const Withdrawal = lazy(() => import("./Components/Dashboard/Pages/Withdrawal"));
const Error = lazy(() => import("./Components/Dashboard/Pages/Error"));
const Admin = lazy(() => import("./Components/Admin/Admin"));
const AdminDashboard = lazy(() => import("./Components/Admin/AdminDashboard"));
const Proofs = lazy(()=> import("./Components/Admin/Proofs"))

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Suspense fallback={<><Loader/></>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="contacts" element={<ContactsPage />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/account/:firstname/" element={<DashboardLayout />}>
              <Route path="overview" element={<Dashboard />} />
              <Route path="application" element={<Application />} />
              <Route path="profile" element={<Profile />} />
              <Route path="deposit" element={<Deposit />} />
              <Route path="withdrawal" element={<Withdrawal />} />
              <Route path="error" element={<Error />} />
            </Route>

            <Route path="/admin" element={<Admin />}>
              <Route path="" element={<AdminDashboard />} />
              <Route path="proofs" element={<Proofs />} />
            </Route>
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
};

export default App;
