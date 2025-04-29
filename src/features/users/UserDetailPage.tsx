import styles from "./UserDetailPage.module.scss";
import back from "../../assets/icons/np-back.svg";
import { useNavigate, useParams } from "react-router-dom";
import avatar from "../../assets/user-detail-avatar.svg";
import { useEffect, useState } from "react";
import { Guarantor, User } from "./types";
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
        </div>
      </div>

      <div className={`${styles.userInfoContent}`}>
        <div className={`${styles.personalInformation}`}>
          <h6>Personal Information</h6>
          <div className={`${styles.userInfoRecord}`}>
            <div>
              <span>FULL NAME</span>
              <p>{user?.fullName}</p>
            </div>
            <div>
              <span>PHONE NUMBER</span>
              <p>{user?.phoneNumber}</p>
            </div>
            <div>
              <span>EMAIL ADDRESS</span>
              <p>{user?.email}</p>
            </div>
            <div>
              <span>BVN</span>
              <p>{user?.bvn}</p>
            </div>
            <div>
              <span>GENDER</span>
              <p>{user?.gender}</p>
            </div>
            <div>
              <span>MARITAL STATUS</span>
              <p>{user?.maritalStatus}</p>
            </div>
            <div>
              <span>CHILDREN</span>
              <p>{user?.children}</p>
            </div>
            <div>
              <span>TYPE OF RESIDENCE</span>
              <p>{user?.residenceType}</p>
            </div>
          </div>
        </div>
        <div className={`${styles.horizontalLine}`} />

        <div className={`${styles.educationAndEmployment}`}>
          <h6>Education and Employment</h6>
          <div className={`${styles.userInfoRecord}`}>
            <div>
              <span>LEVEL OF EDUCATION</span>
              <p>{user?.levelOfEducation}</p>
            </div>
            <div>
              <span>EMPLOYMENT STATUS</span>
              <p>{user?.employmentStatus}</p>
            </div>
            <div>
              <span>SECTOR OF EMPLOYMENT</span>
              <p>{user?.sectorOfEmployment}</p>
            </div>
            <div>
              <span>DURATION OF EMPLOYMENT</span>
              <p>{user?.durationOfEmployment}</p>
            </div>
            <div>
              <span>OFFICE EMAIL</span>
              <p>{user?.officeEmail}</p>
            </div>
            <div>
              <span>MONTHLY INCOME</span>
              <p>&#8358;{user?.monthlyIncome.toLocaleString("en-NG", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</p>
            </div>
            <div>
              <span>LOAN REPAYMENT</span>
              <p>&#8358;{user?.loanRepayment.toLocaleString("en-NG", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}</p>
            </div>
          </div>
        </div>
        <div className={`${styles.horizontalLine}`} />

        <div className={`${styles.socials}`}>
          <h6>Socials</h6>
          <div className={`${styles.userInfoRecord}`}>
            <div>
              <span>TWITTER</span>
              <p>{user?.twitter}</p>
            </div>
            <div>
              <span>FACEBOOK</span>
              <p>{user?.facebook}</p>
            </div>
            <div>
              <span>INSTAGRAM</span>
              <p>{user?.instagram}</p>
            </div>
          </div>
        </div>
        <div className={`${styles.horizontalLine}`} />

        <div className={`${styles.guarators}`}>
          <h6>Guarantors</h6>
          {user?.guarantors.map((guarantor: Guarantor, index: number) =>
            guarantor ? (
              <div className={`${styles.userInfoRecord}`} key={index}>
                <div>
                  <span>FULL NAME</span>
                  <p>{guarantor.name}</p>
                </div>
                <div>
                  <span>PHONE NUMBER</span>
                  <p>{guarantor.phoneNumber}</p>
                </div>
                <div>
                  <span>EMAIL ADDRESS</span>
                  <p>{guarantor.email}</p>
                </div>
                <div>
                  <span>RELATIONSHIP</span>
                  <p>{guarantor.relationship}</p>
                </div>

                <div className={`${styles.guarantorHorizontalLine}`} />
              </div>
            ) : (
              <span key={`no-guarantor-${index}`}>No Guarantor provided</span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
