import { Outlet } from "react-router-dom";
import Sidebar from "./Compo/Sidebar";
import Header from "./Compo/Header";
import "./DashboardLayout.css";
const DashboardLayout = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="wrapper">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
