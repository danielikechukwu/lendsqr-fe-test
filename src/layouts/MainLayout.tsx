import { Outlet } from "react-router-dom"
import Sidenav from "./SideNav"

const MainLayout = () => {
  return (
    <div className="flex">
    <Sidenav />
    <main className="flex-1 p-4">
      {/* <Outlet /> */}
      <Outlet />
    </main>
  </div>
  )
}

export default MainLayout