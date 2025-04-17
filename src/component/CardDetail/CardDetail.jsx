import styles from "../CardDetail/CardDetailStyles.module.css";

function CardDetail({ companyName, details }) {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailBox}>
        <p className={styles.label}>Company</p>
        <p className={styles.value}>{companyName}</p>
      </div>
      <div className={styles.detailBox}>
        <p className={styles.label}>Project</p>
        <p className={styles.value}>{details}</p>
      </div>
    </div>
  );
}

export default CardDetail;
