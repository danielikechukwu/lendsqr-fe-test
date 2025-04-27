import { users } from "../users";
import styles from "./UserTable.module.scss";
import filter from "../../../assets/icons/filter-results-button.svg";
import more from "../../../assets/icons/ic-more-vert.svg";

const statusColorMap: Record<string, string> = {
  Inactive: "bg-gray-200 text-gray-700",
  Pending: "bg-yellow-100 text-yellow-800",
  Blacklisted: "bg-red-100 text-red-700",
  Active: "bg-green-100 text-green-700",
};

const UserTable = () => {
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
                <span className={`${styles.status} ${styles[user.status.toLowerCase()]}`}>
                  {user.status}
                </span>
              </td>
              <td className={`${styles.options}`}>
              <img
                  src={more}
                  width={14}
                  height={14}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
