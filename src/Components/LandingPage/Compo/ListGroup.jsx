import PropTypes from 'prop-types';
import styles from "../Styles/ListGroup.module.css";

const ListGroup = ({ items, title, subtitle }) => {
  return (
    <div className={styles.listGroup}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <ul className={styles.items}>
        {items.map((item, index) => (
          <li key={index}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div className={styles.body}>
                <h4>{item.label}</h4>
                <p>{item.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

ListGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default ListGroup;
