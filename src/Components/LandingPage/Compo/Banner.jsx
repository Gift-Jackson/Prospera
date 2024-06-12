import ListGroup from "./ListGroup";
import styles from "../Styles/Banner.module.css";
import { listOne } from "../../../Constants/data";
import banner from "../../../assets/masonry-3.jpg"

const Banner = () => {
  return (
    <>
      <main>
        <div className={styles.banner}>
          <div>
            <img src={banner} alt="Banner" />
          </div>
          <ListGroup 
            items={listOne} 
            title="Unlock Financial Freedom" 
            subtitle="Discover a world of possibilities with Prospera and take control of your financial future." 
          />
        </div>
      </main>
    </>
  );
}

export default Banner;
