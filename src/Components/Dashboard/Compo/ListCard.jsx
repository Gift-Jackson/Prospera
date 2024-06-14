import PropTypes from "prop-types";
import styles from "../Styles/ListCard.module.css";
const ListCard = ({ title, items, id }) => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className={styles.container}
        id={id}
      >
        <h3>{title}</h3>

        <ul className={styles.items}>
          {items.map((item, index) => (
            <li key={index}>
              <div className={styles.icon}>
                <span id="icon" className="material-symbols-outlined">{item.icon}</span>
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
  id: PropTypes.string,
};

export default ListCard;
