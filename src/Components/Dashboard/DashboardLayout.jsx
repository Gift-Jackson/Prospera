import { Outlet, useParams } from "react-router-dom";
import Sidebar from "./Compo/Sidebar";
import Header from "./Compo/Header";
import "./DashboardLayout.css";
const DashboardLayout = () => {
  const {firstname} = useParams()
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
