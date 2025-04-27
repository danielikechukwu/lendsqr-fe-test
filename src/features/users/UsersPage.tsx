import UserCard from "./components/UserCard";
import styles from "./UsersPage.module.scss";
import users from "../../assets/users.svg"
import activeUsers from "../../assets/active-users.svg"
import usersWithLoan from "../../assets/users-with-loans.svg"
import usersWithSavings from "../../assets/users-with-savings.svg"

const UsersPage: React.FC = () => {
  return (
    <div className={`${styles.userContainer}`}>
      <h6>Users</h6>

      <div className={`${styles.userCard}`}>
        <UserCard title="USERS" numberOfUser={2453} iconSrc={users} />

        <UserCard title="ACTIVE USERS" numberOfUser={2453} iconSrc={activeUsers} />

        <UserCard title="USERS WITH LOANS" numberOfUser={12453} iconSrc={usersWithLoan} />

        <UserCard title="USERS WITH SAVINGS" numberOfUser={102453} iconSrc={usersWithSavings} />
      </div>

      <div className={`${styles.userTable}`}></div>
    </div>
  );
};

export default UsersPage;
