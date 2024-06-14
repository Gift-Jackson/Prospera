import styles from "../Styles/card.module.css";
import "../Styles/index.css";
import PropTypes from "prop-types";
const Cards = ({ icon, label, amount, rate, className, rateIcon }) => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className={styles.card}
      >
        <div className={styles.flex}>
          <div className={styles.icon}>
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <div>{label}</div>
        </div>
        <div className={styles.flex_between}>
          <h2>
            <span className={styles.currency}>&#x24;</span>
            {amount}
          </h2>
          {rate && (
            <div className={className}>
              <span className="material-symbols-outlined">{rateIcon}</span>
              {rate}%
            </div>
          )}
        </div>
      </div>
    </>
  );
};
Cards.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  amount: PropTypes.number,
  rate: PropTypes.number,
  className: PropTypes.string,
  rateIcon: PropTypes.string,
};

export default Cards;
