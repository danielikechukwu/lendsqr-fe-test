import { users } from "../users";
import styles from "./UserTable.module.scss";
import filter from "../../../assets/icons/filter-results-button.svg";
import more from "../../../assets/icons/ic-more-vert.svg";

import view from "../../../assets/icons/view.svg";
import activate from "../../../assets/icons/np-user.svg";
import blacklist from "../../../assets/icons/delete-friend.svg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserTable = () => {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const popupRef = useRef<HTMLDivElement>(null);

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

  const togglePopup = (id: string) => {
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
            <th></th> {/* For 3 dots */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
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
                      onClick={() => navigate(`/users/${user.id}`)}
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
