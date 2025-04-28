import { UserCardProps } from "../types";
import styles from "./UserCard.module.scss";

const UserCard: React.FC<UserCardProps> = (props: UserCardProps) => {
  return (
    <div className={`${styles.cardContainer}`}>
      <img src={props.iconSrc} alt="card-icon" width={40} height={40} />

      <span>{props.title}</span>

      <h6>{props.numberOfUser}</h6>
    </div>
  );
};

export default UserCard;
