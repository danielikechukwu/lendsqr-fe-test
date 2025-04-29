import UserCard from "./components/UserCard";
import styles from "./UsersPage.module.scss";
import user from "../../assets/users.svg"
import activeUsers from "../../assets/active-users.svg"
import usersWithLoan from "../../assets/users-with-loans.svg"
import usersWithSavings from "../../assets/users-with-savings.svg"
import UserTable from "./components/UserTable";
import { useEffect, useState } from "react";
import { User } from "./types";
import { addUsers, getAllUsers } from "./services/indexedDB";
import axios from "axios";

const MOCKY_URL = import.meta.env.VITE_API_MOCKY_URL;

const UsersPage: React.FC = () => {

    const [users, setUsersData] = useState<User[]>([]);

  useEffect(() => {
    const fetchAndStoreUsers = async () => {
      try {
        const storedUsers = await getAllUsers();
        if (storedUsers.length > 0) {
          
          // Load from IndexedDB
          setUsersData(storedUsers);
        } else {
          const response = await axios.get(MOCKY_URL);
          const data = response.data;

          if (Array.isArray(data)) {

            // Fetched from API and saving to IndexedDB
            await addUsers(data); // store all 500 users
            setUsersData(data);
          } else {
            // Data from API is not an array
            console.log(MOCKY_URL);
          }
        }
      } catch (error) {
        alert('Error fetching/storing users')
        console.error(error);
      }
    };

    fetchAndStoreUsers();
  }, []);

  const activeUserCount: number = users.filter((user: User) => user.status.toLocaleLowerCase() === 'active').length;

  const userWithLoans: number = users.filter((user: User) => user.loanRepayment > 0).length;

  const userWithSavings: number = users.filter((user: User) => user.monthlyIncome > 0).length;

  return (
    <div className={`${styles.userContainer}`}>
      <h6>Users</h6>

      <div className={`${styles.userCard}`}>
        <UserCard title="USERS" numberOfUser={users ? users.length : 0} iconSrc={user} />

        <UserCard title="ACTIVE USERS" numberOfUser={users ? activeUserCount : 0} iconSrc={activeUsers} />

        <UserCard title="USERS WITH LOANS" numberOfUser={users ? userWithLoans : 0} iconSrc={usersWithLoan} />

        <UserCard title="USERS WITH SAVINGS" numberOfUser={users ? userWithSavings : 0} iconSrc={usersWithSavings} />
      </div>

      <div className={`${styles.userTable}`}>
        <UserTable />
      </div>
      
    </div>
  );
};

export default UsersPage;
