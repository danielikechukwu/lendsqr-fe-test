import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import collapse from "../assets/icons/np-previous.svg";
import expand from "../assets/icons/np-next.svg";
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

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${styles.sidebar} ${
        collapsed ? styles.collapsed : styles.expanded
      }`}
    >
      <div className={styles.switch}>
        <img src={briefcase} alt="briefcase" className={styles.icon} />
        {!collapsed && <span>Switch Organisation</span>}
        {!collapsed && (
          <img
            src={next}
            alt="next"
            style={{ cursor: "pointer" }}
          />
        )}
      </div>

      <nav className={styles.nav}>

        <div style={{ marginBottom: "10%" }}>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={home} alt="home" />              
              {!collapsed && <span>Dashboard</span>}
            </div>
          </NavLink>
        </div>

        {!collapsed && <h6>CUSTOMERS</h6>}

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={usersFriend} alt="users" />
              {!collapsed && <span>Users</span>}              
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
              {!collapsed && <span>Guarantors</span>}              
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
              {!collapsed && <span>Loans</span>}              
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
              {!collapsed && <span>Decision Models</span>}              
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
              {!collapsed && <span>Savings</span>}               
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
              {!collapsed && <span>Loan Requests</span>}               
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
              {!collapsed && <span>Whitelist</span>} 
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
              {!collapsed && <span>Karma</span>}               
            </div>
          </NavLink>
        </div>
        
        {!collapsed && <h6>BUSINESSES</h6>}

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/organization"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={briefcase} alt="org." />
              {!collapsed && <span>Organization</span>}               
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
              {!collapsed && <span>Loan Products</span>}                
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
              {!collapsed && <span>Savings Products</span>}
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
              {!collapsed && <span>Fees and Charges</span>}              
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
              {!collapsed && <span>Transactions</span>}
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
              {!collapsed && <span>Services</span>}              
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
              {!collapsed && <span>Service Account</span>}
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
              {!collapsed && <span>Settlements</span>}              
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
              {!collapsed && <span>Reports</span>} 
            </div>
          </NavLink>
        </div>
        
        {!collapsed && <h6>SETTINGS</h6>}

        <div style={{ marginBottom: "2%" }}>
          <NavLink
            to="/preferences"
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <img src={sliders} alt="preferences" />
              {!collapsed && <span>Preferences</span>}
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
              {!collapsed &&<span>Fees and Pricing</span>}              
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
              {!collapsed && <span>Audit Logs</span>}              
            </div>
          </NavLink>
        </div>

      </nav>

      {/* Button for expansion */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={styles.toggleButton}
      >
        {collapsed ? (
          <img src={expand} width={20} height={20} alt="collapse" />
        ) : (
          <img src={collapse} width={20} height={20} alt="collapse" />
        )}

        {!collapsed && <span className={`${styles.collapse}`}>Collapse</span>}
      </button>
      
    </div>
  );
};

export default Sidebar;
