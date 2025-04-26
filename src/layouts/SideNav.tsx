import styles from "./SideNav.module.scss";
import briefcase from "../assets/icons/briefcase.svg";
import users from "../assets/icons/users.svg";
import sack from "../assets/icons/sack.svg";
import handshake from "../assets/icons/handshake.svg";
import piggyBank from "../assets/icons/piggy-bank.svg";
import handHoldingSack from "../assets/icons/hand-holding-sack.svg";
import userCheck from "../assets/icons/user-check.svg";
import userTimes from "../assets/icons/user-times.svg";
import usersFriend from "../assets/icons/user-friends.svg";
import home from "../assets/icons/home.svg";
import next from "../assets/icons/next.svg";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className={`${styles.sideNavContainer}`}>
      <div className={`${styles.sideNavDetails}`}>
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            paddingLeft: '15%'
          }}
        >
          <img src={briefcase} alt="briefcase" width="16px" height="16px" />
          <span>Switch Organisation</span>
          <img
            src={next}
            alt="next"
            width="16px"
            height="16px"
            style={{ cursor: "pointer" }}
          />
        </div>

        <div style={{ marginTop: "10%", marginBottom: "10%" }}>
          <NavLink to="/users" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
            <div className={`${styles.linkContent}`}>
            <img src={briefcase} alt="briefcase" />
            <span>Dashboard</span>
            </div>
          </NavLink >
        </div>

        <h6>CUSTOMERS</h6>

        <div style={{ marginBottom: '2%' }}>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
            <div className={`${styles.linkContent}`}>
            <img src={usersFriend} alt="users" />
            <span>Users</span>
            </div>
          </NavLink >
        </div>

        <div style={{ marginBottom: '2%' }}>
          <NavLink to="/guarators" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
            <div className={`${styles.linkContent}`}>
            <img src={users} alt="guarantors" />
            <span>Guarantors</span>
            </div>
          </NavLink >
        </div>

        <div style={{ marginBottom: '2%' }}>
          <NavLink to="/loans" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
            <div className={`${styles.linkContent}`}>
            <img src={handHoldingSack} alt="loans" />
            <span>Loans</span>
            </div>
          </NavLink >
        </div>

        <div style={{ marginBottom: '2%' }}>
          <NavLink to="/decision-models" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
            <div className={`${styles.linkContent}`}>
            <img src={handshake} alt="decision-models" />
            <span>Decision Models</span>
            </div>
          </NavLink >
        </div>

        <div style={{ marginBottom: '2%' }}>
          <NavLink to="/savings" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
            <div className={`${styles.linkContent}`}>
            <img src={piggyBank} alt="savings" />
            <span>Savings</span>
            </div>
          </NavLink >
        </div>

        <div style={{ marginBottom: '2%' }}>
          <NavLink to="/loan-request" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
            <div className={`${styles.linkContent}`}>
            <img src={users} alt="loan-requests" />
            <span>Loan Requests</span>
            </div>
          </NavLink >
        </div>

        <div style={{ marginBottom: '2%' }}>
          <NavLink to="/whitelist" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
            <div className={`${styles.linkContent}`}>
            <img src={userCheck} alt="whitelist" />
            <span>Whitelist</span>
            </div>
          </NavLink >
        </div>

        <div style={{ marginBottom: '2%' }}>
          <NavLink to="/karma" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>
            <div className={`${styles.linkContent}`}>
            <img src={userTimes} alt="karma" />
            <span>Karma</span>
            </div>
          </NavLink >
        </div>

      </div>
    </div>
  );
};

export default Sidenav;
