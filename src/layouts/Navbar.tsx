import logo from "../assets/logo.svg";
import user from "../assets/user-avatar.png";
import notification from "../assets/icons/notification.svg";
import search from "../assets/icons/search.svg";
import styles from "./Navbar.module.scss";
import dropdown from '../assets/icons/dropdown.svg'

const Navbar = () => {

    const userDetail = JSON.parse(localStorage.getItem('user')!);

  return (
    <div className={`${styles.navContainer}`}>
        
      <div className={`${styles.logoContainer}`}>
        <img src={logo} width="100px" height="auto" />
      </div>

      <div className={`${styles.searchContainer}`}>
        <div className={`${styles.container}`}>
          <div className="row">
            <div className="col-md-12">
              <form className="d-flex">
                <div className="input-group">
                  <input
                    className={`form-control ${styles.customInput}`}
                    type="search"
                    placeholder="Search for anything"
                    aria-label="Search"
                  />
                  <button className={`btn btn-primary px-3 ${styles.btnPrimary}`} type="submit">
                    <img src={search} alt="logo" width="12px" height="12px" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={`${styles.activities}`}>

          <div>
            <a href="/">Docs</a>
          </div>

          <div>
            <img
              src={notification}
              alt="notification"
              width="18px"
              height="18px"
              style={{cursor: 'pointer'}}
            />
          </div>

          <div className={`${styles.userDetail}`}>

            <img
              src={user}
              alt="user-avatar"
              width="32px"
              height="32px"
              style={{ objectFit: "contain", borderRadius: "50%" }}
            />
            <span>{userDetail ? userDetail.name.toUpperCase() : 'Adedeji'}</span>
            <img src={dropdown} width='8px' height='8px' style={{cursor: 'pointer'}} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
