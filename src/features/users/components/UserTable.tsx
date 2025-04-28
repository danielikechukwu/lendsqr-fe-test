import styles from "./UserTable.module.scss";
import filter from "../../../assets/icons/filter-results-button.svg";
import more from "../../../assets/icons/ic-more-vert.svg";

import view from "../../../assets/icons/view.svg";
import activate from "../../../assets/icons/np-user.svg";
import blacklist from "../../../assets/icons/delete-friend.svg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types";
import { addUsers, getAllUsers, initDB } from "../services/indexedDB";
import axios from "axios";

const MOCKY_URL = import.meta.env.VITE_API_MOCKY_URL;

const UserTable = () => {
  const [menuOpen, setMenuOpen] = useState<number | null>(null);

  const [users, setUsersData] = useState<User[]>([]);

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchAndStoreUsers = async () => {
      try {
        const storedUsers = await getAllUsers();
        if (storedUsers.length > 0) {
          console.log("Loaded from IndexedDB");
          setUsersData(storedUsers);
        } else {
          const response = await axios.get(MOCKY_URL);
          const data = response.data;

          if (Array.isArray(data)) {
            console.log("Fetched from API and saving to IndexedDB");
            await addUsers(data); // store all 500 users
            setUsersData(data);
          } else {
            console.error("Data from API is not an array");
            console.log(MOCKY_URL);
          }
        }
      } catch (error) {
        console.error("Error fetching/storing users:", error);
      }
    };

    fetchAndStoreUsers();
  }, []);

  //Check for user before navigating
  const checkUser = async (userId: number) => {
    const db = await initDB();
    const user = await db.get("users", userId);

    if (user) {
      navigate(`/users/${userId}`);
    } else {
      alert("User not found in IndexedDB");
    }
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setMenuOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigate = useNavigate();

  const togglePopup = (id: number) => {
    setMenuOpen(menuOpen === id ? null : id);
  };

  return (
    <div className={`${styles.userTableContainer}`}>
      <table className={`${styles.userTable}`}>
        <thead>
          <tr>
            <th>
              <div className={`${styles.thContent}`}>
                <span>ORGANIZATION</span>
                <img
                  src={filter}
                  width={12}
                  height={12}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </th>
            <th>
              <div className={`${styles.thContent}`}>
                <span>USERNAME</span>
                <img
                  src={filter}
                  width={12}
                  height={12}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </th>
            <th>
              <div className={`${styles.thContent}`}>
                <span>EMAIL</span>
                <img
                  src={filter}
                  width={12}
                  height={12}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </th>
            <th>
              <div className={`${styles.thContent}`}>
                <span>PHONE NUMBER</span>
                <img
                  src={filter}
                  width={12}
                  height={12}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </th>
            <th>
              <div className={`${styles.thContent}`}>
                <span>DATE JOINED</span>
                <img
                  src={filter}
                  width={12}
                  height={12}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </th>
            <th>
              <div className={`${styles.thContent}`}>
                <span>STATUS</span>
                <img
                  src={filter}
                  width={12}
                  height={12}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.organization}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.dateJoined}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      styles[user.status.toLowerCase()]
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className={`${styles.options}`}>
                  <div onClick={() => togglePopup(user.id)}>
                    <img
                      src={more}
                      width={14}
                      height={14}
                      style={{ cursor: "pointer" }}
                    />
                  </div>

                  {/* Menu dropdown */}
                  {menuOpen === user.id && (
                    <div ref={popupRef} className={styles.dropdown}>
                      <div
                        className={styles.dropdownItem}
                        onClick={() => checkUser(user.id)}
                      >
                        <img src={view} alt="View" />
                        View Details
                      </div>
                      <div
                        className={styles.dropdownItem}
                        onClick={() => navigate("/")}
                      >
                        <img src={blacklist} alt="Blacklist" />
                        Blacklist User
                      </div>
                      <div
                        className={styles.dropdownItem}
                        onClick={() => navigate("/")}
                      >
                        <img src={activate} alt="Activate" />
                        Activate User
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={12} style={{ textAlign: "center" }}>
                No user record available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
