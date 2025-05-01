import styles from "./UserTable.module.scss";
import filter from "../../../assets/icons/filter-results-button.svg";
import more from "../../../assets/icons/ic-more-vert.svg";

import view from "../../../assets/icons/view.svg";
import activate from "../../../assets/icons/np-user.svg";
import blacklist from "../../../assets/icons/delete-friend.svg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RawUser, User } from "../types";
import {
  addUsers,
  clearUsers,
  DB_NAME,
  getAllUsers,
  initDB,
  STORE_NAME,
} from "../services/indexedDB";
import axios from "axios";
import { openDB } from "idb";
import Pagination from "../../../components/Pagination";

const MOCKY_URL = import.meta.env.VITE_API_MOCKY_URL;

const UserTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalUsers, setTotalUsers] = useState(0);

  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  const [users, setUsersData] = useState<User[]>([]);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchAndStoreUsers = async () => {
      try {
        const storedUsers = await getAllUsers();

        if (storedUsers.length > 0) {
          // Load from IndexedDB
          setUsersData(storedUsers);

          // Set pagination total count of user from indexedDB
          setTotalUsers(storedUsers.length);

          // Load first page
          loadPage(currentPage, itemsPerPage);
        } else {
          const response = await axios.get<RawUser[]>(MOCKY_URL);

          const data: RawUser[] = response.data;

          const usersWithIds: User[] = data.map(
            (user: RawUser, index: number) => ({
              id: index + 1,
              ...user,
            })
          );

          if (Array.isArray(usersWithIds)) {
            const validUsers: User[] = usersWithIds.filter(
              (user) => typeof user.id === "number"
            );

            await clearUsers();

            // Fetched from API and saving to IndexedDB
            await addUsers(validUsers); // store all 500 users

            //setUsersData(validUsers);

            //Set the total user count returned from the url
            setTotalUsers(usersWithIds.length);

            // Load first page
            loadPage(currentPage, itemsPerPage);
          } else {
            // Data from API is not an array
            console.log(MOCKY_URL);
          }
        }
      } catch (error) {
        alert("Error fetching/storing users");
        console.error(error);
      }
    };

    fetchAndStoreUsers();
  }, []);

  // New useEffect for pagination
  useEffect(() => {
    if (totalUsers > 0) {
      // Execute when data exist
      loadPage(currentPage, itemsPerPage);
    }
  }, [currentPage, itemsPerPage, totalUsers]);

  // For pagination loader
  const loadPage = async (page: number, limit: number) => {
    // Get all from indexedDB
    const allUsers = await getAllUsers();
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const pageUsers = allUsers.slice(startIndex, endIndex);
    setUsersData(pageUsers);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  //Check for user before navigating
  const checkUser = async (userId: number) => {
    const db = await initDB();
    const user: User | undefined = await db.get("users", userId);

    if (user) {
      navigate(`/users/${userId}/general-details`);
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

  //Status change
  async function handleUserAction(userId: number, actionType: string) {
    const db = await openDB(DB_NAME, 1);

    // Check user availability in database
    const user = await db.get(STORE_NAME, userId);

    if (!user) {
      console.error("User not found");
      return;
    }

    // Perform user status change
    switch (actionType) {
      case "activate":
        user.status = "Active";
        break;
      case "blacklist":
        user.status = "Blacklisted";
        break;
      case "inactivate":
        user.status = "Inactive";
        break;
      default:
        alert(`Unknown action: ${actionType}`);
        return;
    }

    // Open transaction for writing
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    await store.put(user);
    await tx.done;

    //Update local state
    setUsersData((prevUsers: User[]) =>
      prevUsers.map((u: User) =>
        u.id === userId ? { ...u, status: user.status } : u
      )
    );

    alert(`User ${actionType}d successfully!`);
  }

  return (
    <div>
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
              users.map((user: User) => (
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
                        {/* Pending users */}
                        {user.status.toLocaleLowerCase() === "pending" && (
                          <div>
                            <div
                              className={styles.dropdownItem}
                              onClick={() => checkUser(user.id)}
                            >
                              <img src={view} alt="View" />
                              View Details
                            </div>
                            <div
                              className={styles.dropdownItem}
                              onClick={() =>
                                handleUserAction(user.id, "activate")
                              }
                            >
                              <img src={activate} alt="Activate" />
                              Activate User
                            </div>
                          </div>
                        )}

                        {/* Active users */}
                        {user.status.toLocaleLowerCase() === "active" && (
                          <div>
                            <div
                              className={styles.dropdownItem}
                              onClick={() => checkUser(user.id)}
                            >
                              <img src={view} alt="View" />
                              View Details
                            </div>
                            <div
                              className={styles.dropdownItem}
                              onClick={() =>
                                handleUserAction(user.id, "blacklist")
                              }
                            >
                              <img src={blacklist} alt="Blacklist" />
                              Blacklist User
                            </div>
                            <div
                              className={styles.dropdownItem}
                              onClick={() =>
                                handleUserAction(user.id, "inactivate")
                              }
                            >
                              <img src={blacklist} alt="inactivate" />
                              Deactivate User
                            </div>
                          </div>
                        )}

                        {/* Inactive users */}
                        {user.status.toLocaleLowerCase() === "inactive" && (
                          <div>
                            <div
                              className={styles.dropdownItem}
                              onClick={() => checkUser(user.id)}
                            >
                              <img src={view} alt="View" />
                              View Details
                            </div>
                            <div
                              className={styles.dropdownItem}
                              onClick={() =>
                                handleUserAction(user.id, "blacklist")
                              }
                            >
                              <img src={blacklist} alt="Blacklist" />
                              Blacklist User
                            </div>
                            <div
                              className={styles.dropdownItem}
                              onClick={() =>
                                handleUserAction(user.id, "activate")
                              }
                            >
                              <img src={activate} alt="Activate" />
                              Activate User
                            </div>
                          </div>
                        )}

                        {/* Blacklist users */}
                        {user.status.toLocaleLowerCase() === "blacklisted" && (
                          <div>
                            <div
                              className={styles.dropdownItem}
                              onClick={() => checkUser(user.id)}
                            >
                              <img src={view} alt="View" />
                              View Details
                            </div>
                            <div
                              className={styles.dropdownItem}
                              onClick={() =>
                                handleUserAction(user.id, "activate")
                              }
                            >
                              <img src={activate} alt="Activate" />
                              Activate User
                            </div>
                          </div>
                        )}
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

      <div className={`${styles.paginationBar}`}>
        
        <Pagination
          totalItems={totalUsers}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={setItemsPerPage}
        />

      </div>
    </div>
  );
};

export default UserTable;
