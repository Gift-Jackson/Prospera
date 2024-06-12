import { rowItems } from "../../../Constants/data";
import styles from "../Styles/Row.module.css";
rowItems;
const Row = () => {
  return (
    <div className={styles.container}>
      <main>
        <ul className={styles.wrapper}>
          {rowItems.map((item, index) => (
            <li key={index}>
              <div className={styles.icon}>
                <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div className={styles.body}>
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                  </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Row;
