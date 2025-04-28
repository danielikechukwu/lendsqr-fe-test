import styles from "./UserDetailPage.module.scss";
import back from "../../assets/icons/np-back.svg";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/user-detail-avatar.svg";
import { users } from "./users"

const UserDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.userDetailContainer}`}>
      <div className={`${styles.back}`} onClick={() => navigate("/users")}>
        <img src={back} width={30} height={30} />
        <span>Back to Users</span>
      </div>

      <div className={`${styles.header}`}>
        <h6>User Details</h6>

        <div className={`${styles.buttons}`}>
          <button className={`${styles.blacklist}`}>BLACKLIST USER</button>

          <button className={`${styles.activate}`}>ACTIVATE USER</button>
        </div>
      </div>

      <div className={`${styles.userInfoHeader}`}>
        <div className={`${styles.userInfoContainer}`}>
          <img src={avatar} width={90} height={90} />

          <div className={`${styles.userInfo}`}>
            <h6>Grace Effiom</h6>
            <p>LSQFf587g90</p>
          </div>

          <div className={`${styles.verticalLine}`} />

          <div className={`${styles.userTier}`}>
            <p>User's Tier</p>
            {/* TODO: Add star */}
          </div>

          <div className={`${styles.verticalLine}`} />

          <div className={`${styles.userBalance}`}>
            <h6>&#8358; 200,000.00</h6>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <div className={`${styles.headerTabs}`}></div>
      </div>

      <div className={`${styles.userInfoContent}`}>
        <div className={`${styles.personalInformation}`}>
          <h6>Personal Information</h6>
          <div className={`${styles.userInfoRecord}`}>
            <div>
              <span>FULL NAME</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>PHONE NUMBER</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>EMAIL ADDRESS</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>BVN</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>GENDER</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>MARITAL STATUS</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>CHILDREN</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>TYPE OF RESIDENCE</span>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>
        <div className={`${styles.horizontalLine}`} />

        <div className={`${styles.educationAndEmployment}`}>
          <h6>Education and Employment</h6>
          <div className={`${styles.userInfoRecord}`}>
            <div>
              <span>LEVEL OF EDUCATION</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>EMPLOYMENT STATUS</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>SECTOR OF EMPLOYMENT</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>DURATION OF EMPLOYMENT</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>OFFICE EMAIL</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>MONTHLY INCOME</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>LOAN REPAYMENT</span>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>
        <div className={`${styles.horizontalLine}`} />

        <div className={`${styles.socials}`}>
          <h6>Socials</h6>
          <div className={`${styles.userInfoRecord}`}>
            <div>
              <span>TWITTER</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>FACEBOOK</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>INSTAGRAM</span>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>
        <div className={`${styles.horizontalLine}`} />

        <div className={`${styles.guarators}`}>
          <h6>Guarantors</h6>
          <div className={`${styles.userInfoRecord}`}>
            <div>
              <span>FULL NAME</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>PHONE NUMBER</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>EMAIL ADDRESS</span>
              <p>Grace Effiom</p>
            </div>
            <div>
              <span>RELATIONSHIP</span>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
