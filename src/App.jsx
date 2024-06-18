import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Components/LandingPage/Layout";
import Home from "./Components/LandingPage/Pages/Home";
import ServicesPage from "./Components/LandingPage/Pages/ServicesPage";
import ContactsPage from "./Components/LandingPage/Pages/ContactsPage";
import AboutPage from "./Components/LandingPage/Pages/AboutPage";
import Register from "./Components/Authentication/Register";
import Login from "./Components/Authentication/Login";
import DashboardLayout from "./Components/Dashboard/DashboardLayout";
import Dashboard from "./Components/Dashboard/Pages/Dashboard";
import { AnimatePresence } from "framer-motion";
import Application from "./Components/Dashboard/Pages/Application";
import Profile from "./Components/Dashboard/Pages/Profile";
import Deposit from "./Components/Dashboard/Pages/Deposit";
import Withdrawal from "./Components/Dashboard/Pages/Withdrawal";
import Error from "./Components/Dashboard/Pages/Error";
const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
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
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
