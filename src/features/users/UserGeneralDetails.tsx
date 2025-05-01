import { useParams } from "react-router-dom";
import { Guarantor, User } from "./types";
import styles from "./UserGeneralDetails.module.scss";
import { useEffect, useState } from "react";
import { initDB } from "./services/indexedDB";

const UserGeneralDetails = () => {
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

  return (
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
            <p>
              &#8358;
              {user?.monthlyIncome.toLocaleString("en-NG", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <div>
            <span>LOAN REPAYMENT</span>
            <p>
              &#8358;
              {user?.loanRepayment.toLocaleString("en-NG", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
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
  );
};

export default UserGeneralDetails;
