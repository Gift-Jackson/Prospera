import PropTypes from "prop-types";
import styles from "../Styles/ListCard.module.css"
const ListCard = ({ title, items }) => {
  return (
    <>
      <div className={styles.container}>
        <h3>{title}</h3>

        <ul className={styles.items}>
          {items.map((item, index) => (
            <li key={index}>
              <div className={styles.icon}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div className={styles.body}>
                <p>
                  <b>{item.main}</b>
                </p>
                <p>{item.sub}</p>
              </div>
              {item.digit && <div>{item.digit}</div>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

ListCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      main: PropTypes.string.isRequired,
      sub: PropTypes.string.isRequired,
      digit: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default ListCard;
