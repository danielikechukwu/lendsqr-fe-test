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
import coinSolid from "../assets/icons/coins-solid.svg";
import home from "../assets/icons/home.svg";
import transaction from "../assets/icons/transaction.svg";
import bank from "../assets/icons/bank.svg";
import galaxy from "../assets/icons/galaxy.svg";
import userCog from "../assets/icons/user-cog.svg";
import next from "../assets/icons/next.svg";
import scroll from "../assets/icons/scroll.svg";
import chartBar from "../assets/icons/chart-bar.svg";
import sliders from "../assets/icons/sliders.svg";
import badgePercent from "../assets/icons/badge-percent.svg";
import clipBoard from "../assets/icons/clipboard-list.svg";
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
            paddingLeft: "15%",
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
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={home} alt="home" />
              <span>Dashboard</span>
            </div>
          </NavLink>
        </div>

        <h6>CUSTOMERS</h6>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={usersFriend} alt="users" />
              <span>Users</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/guarators"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={users} alt="guarantors" />
              <span>Guarantors</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/loans"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={sack} alt="loans" />
              <span>Loans</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/decision-models"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={handshake} alt="decision-models" />
              <span>Decision Models</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/savings"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={piggyBank} alt="savings" />
              <span>Savings</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/loan-request"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={users} alt="loan-requests" />
              <span>Loan Requests</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/whitelist"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={userCheck} alt="whitelist" />
              <span>Whitelist</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "8%" }}>
          <NavLink
            to="/karma"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={userTimes} alt="karma" />
              <span>Karma</span>
            </div>
          </NavLink>
        </div>

        <h6>BUSINESSES</h6>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/organization"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={briefcase} alt="org." />
              <span>Organization</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/loan-products"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={handHoldingSack} alt="loan" />
              <span>Loan Products</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/savings-products"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={bank} alt="savings" />
              <span>Savings Products</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/fees-and-charges"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={coinSolid} alt="fees" />
              <span>Fees and Charges</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={transaction} alt="transac." />
              <span>Transactions</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={galaxy} alt="services" />
              <span>Services</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/service-account"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={userCog} alt="service" />
              <span>Service Account</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/settlements"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={scroll} alt="settlement" />
              <span>Settlements</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "8%" }}>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={chartBar} alt="reports" />
              <span>Reports</span>
            </div>
          </NavLink>
        </div>

        <h6>SETTINGS</h6>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/preferences"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={sliders} alt="preferences" />
              <span>Preferences</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/fees-and-pricing"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={badgePercent} alt="pricing" />
              <span>Fees and Pricing</span>
            </div>
          </NavLink>
        </div>

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/audit-logs"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={clipBoard} alt="logs" />
              <span>Audit Logs</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
