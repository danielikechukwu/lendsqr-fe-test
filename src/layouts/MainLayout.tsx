import { Outlet } from "react-router-dom";
import Sidenav from "./SideNav";
import Navbar from "./Navbar";
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={`${styles.layoutContainer}`}>
      <nav>
        <Navbar />
      </nav>

      <section>
        <aside>
          <Sidenav />
        </aside>

        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default MainLayout;
