import { Outlet } from "react-router-dom"
import Header from "./Compo/Header"
import Footer from "./Compo/Footer"
const Layout = () => {
  return (
      <>
          <Header/>
          <Outlet />
          <Footer/>
      </>
  )
}

export default Layout