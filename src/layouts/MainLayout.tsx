import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styles from './MainLayout.module.scss';
import Sidebar from "./Sidebar";

const MainLayout: React.FC = () => {  

  return (
    <div className={`${styles.layoutContainer}`}>
      <nav>
        <Navbar />
      </nav>

      <section>
        <aside>
          <Sidebar />
        </aside>

        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default MainLayout;
