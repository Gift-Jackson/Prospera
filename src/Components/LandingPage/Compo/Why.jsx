import { listTwo } from "../../../Constants/data";
import styles from "../Styles/Why.module.css";
import banner from "../../../assets/grow.jpg";
import ListGroup from "./ListGroup";
listTwo;
const Why = () => {
  return (
    <>
      <div className={styles.container}>
        <main>
          <div className={styles.wrapper}>
            <ListGroup
              items={listTwo}
              title="Empower Your Finances"
              subtitle="Unlock the Potential of Your Financial Future with Our Expert Guidance and Support."
            />

            <div>
              <img src={banner} alt="banner" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Why;
