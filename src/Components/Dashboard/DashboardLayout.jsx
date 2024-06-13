import { Outlet } from "react-router-dom"
import Sidebar from "./Compo/Sidebar"
import Header from "./Compo/Header"



const DashboardLayout = () => {
  return (
      <>
          <Sidebar />
          <Header/>
          <Outlet/>
      </>
  )
}

export default DashboardLayout