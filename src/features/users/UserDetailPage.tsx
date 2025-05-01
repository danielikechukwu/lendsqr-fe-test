import styles from "./UserDetailPage.module.scss";
import back from "../../assets/icons/np-back.svg";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import avatar from "../../assets/user-detail-avatar.svg";
import { useEffect, useState } from "react";
import { User } from "./types";
import { DB_NAME, initDB, STORE_NAME } from "./services/indexedDB";
import { openDB } from "idb";

const UserDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const db = await initDB();
      const userData = await db.get("users", Number(id));
      setUser(userData ?? null);
    };

    fetchUser();
  }, [id]);

  async function handleUserAction(actionType: string) {
    const db = await openDB(DB_NAME, 1);
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);

    //update status
    const updatedUser = { ...user } as User;

    switch (actionType) {
      case "activate":
        updatedUser.status = "Active";
        break;
      case "blacklist":
        updatedUser.status = "Blacklisted";
        break;
      case "inactivate":
        updatedUser.status = "Inactive";
        break;
      default:
        alert(`Unknown action: ${actionType}`);
        return;
    }

    // `put` will update based on primaryKey
    await store.put(updatedUser);
    await tx.done;

    //updating local state
    setUser(updatedUser);

    alert(`User ${actionType}d successfully!`);
  }

  return (
    <div className={`${styles.userDetailContainer}`}>
      <div className={`${styles.back}`} onClick={() => navigate("/users")}>
        <img src={back} width={30} height={30} />
        <span>Back to Users</span>
      </div>

      <div className={`${styles.header}`}>
        <h6>User Details</h6>

        {user?.status.toLocaleLowerCase() === "pending" && (
          <div className={`${styles.buttons}`}>
            <button
              className={`${styles.activate}`}
              onClick={() => handleUserAction("activate")}
            >
              ACTIVATE USER
            </button>
          </div>
        )}

        {user?.status.toLocaleLowerCase() === "active" && (
          <div className={`${styles.buttons}`}>
            <button
              className={`${styles.blacklist}`}
              onClick={() => handleUserAction("blacklist")}
            >
              BLACKLIST USER
            </button>

            <button
              className={`${styles.deactivate}`}
              onClick={() => handleUserAction("inactivate")}
            >
              DEACTIVATE USER
            </button>
          </div>
        )}

        {user?.status.toLocaleLowerCase() === "inactive" && (
          <div className={`${styles.buttons}`}>
            <button
              className={`${styles.activate}`}
              onClick={() => handleUserAction("activate")}
            >
              ACTIVATE USER
            </button>

            <button
              className={`${styles.blacklist}`}
              onClick={() => handleUserAction("blacklist")}
            >
              BLACKLIST USER
            </button>
          </div>
        )}

        {user?.status.toLocaleLowerCase() === "blacklisted" && (
          <div className={`${styles.buttons}`}>
            <button
              className={`${styles.activate}`}
              onClick={() => handleUserAction("activate")}
            >
              ACTIVATE USER
            </button>
          </div>
        )}
      </div>

      <div className={`${styles.userInfoHeader}`}>
        <div className={`${styles.userInfoContainer}`}>
          <img src={avatar} width={90} height={90} />

          <div className={`${styles.userInfo}`}>
            <h6>{user?.fullName}</h6>
            <p>{user?.code}</p>
          </div>

          <div className={`${styles.verticalLine}`} />

          <div className={`${styles.userTier}`}>
            <p>User's Tier</p>
            {/* TODO: Add star */}
          </div>

          <div className={`${styles.verticalLine}`} />

          <div className={`${styles.userBalance}`}>
            <h6>
              &#8358;
              {user?.loanRepayment.toLocaleString("en-NG", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h6>
            <p>
              {user?.accountNumber}/{user?.bankName}
            </p>
          </div>
        </div>
        <div className={`${styles.headerTabs}`}>
          {/* TODO: Implement tab navigation */}

          <NavLink
            to={`/users/${id}/general-details`}
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <span>General Details</span>
            </div>
          </NavLink>

          <NavLink
            to={`/users/${id}/documents`}
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <span>Documents</span>
            </div>
          </NavLink>

          <NavLink
            to={`/users/${id}/bank-details`}
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <span>Bank Details</span>
            </div>
          </NavLink>

          <NavLink
            to={`/users/${id}/loans`}
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <span>Loans</span>
            </div>
          </NavLink>

          <NavLink
            to={`/users/${id}/savings`}
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <span>Savings</span>
            </div>
          </NavLink>

          <NavLink
            to={`/users/${id}/app-and-system`}
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
          >
            <div className={`${styles.linkContent}`}>
              <span>App and System</span>
            </div>
          </NavLink>
        </div>
      </div>

      {/* User information detail contents */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserDetailPage;
