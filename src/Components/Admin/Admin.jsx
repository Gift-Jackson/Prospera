import { Outlet } from "react-router-dom";
import Header from "./Header";
import Transition from "../Global/Transition";

const Admin = () => {
  return (
    <>
      <Header />
      <Transition>
        <Outlet />
      </Transition>
    </>
  );
};

export default Admin;
