import styles from "./UsersPage.module.scss";

const UsersPage = () => {
  return (
    <div className={`${styles.userContainer}`}>
      <h6>Users</h6>

      <div className={`${styles.userCard}`}></div>

      <div className={`${styles.userTable}`}></div>
    </div>
  );
};

export default UsersPage;
