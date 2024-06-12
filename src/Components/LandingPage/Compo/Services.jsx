import { services } from "../../../Constants/data";
import Title from "./Title";
import styles from "../Styles/Services.module.css"


const Services = () => {
  return (
    <main>
      <div className={styles.container}>
        <Title
          title="Our Services"
          subtitle="Explore the opportunities and support we offer to help you secure funding for your projects."
        />

        <div className={styles.wrapper}>
          {services.map((item, index) => (
            <li key={index} className={styles.item}>
              <div className={styles.icon}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>

              <div className={styles.content}>
                <h3> {item.title} </h3>
                <p> {item.content} </p>
              </div>
            </li>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
