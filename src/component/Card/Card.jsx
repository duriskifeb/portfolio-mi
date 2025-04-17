import styles from "./CardStyles.module.css";
import CardDetail from "../CardDetail/CardDetail"; 

function Card({
  banner,
  title,
  description,
  alt,
  withCardDetail = false,
  onClick,
  onSecondaryClick,
  companyName,
  details,
  buttonLabel,
  buttonSecondaryLabel,
}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.bannerContainer}>
        <img src={banner} alt={alt} />
      </div>
      <div className={styles.CardContent}>
        {withCardDetail && (
          <CardDetail companyName={companyName} details={details} />
        )}
        <div className={styles.textContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton} onClick={onClick}>
            {buttonLabel || "View more "}
          </button>
          {buttonSecondaryLabel && (
            <button
              className={styles.secondaryButton}
              onClick={onSecondaryClick}
            >
              {buttonSecondaryLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
