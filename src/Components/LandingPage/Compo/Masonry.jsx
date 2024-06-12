import masonry_1 from "../../../assets/masonry-1.jpg"
import masonry_2 from "../../../assets/masonry-2.jpg"
import masonry_3 from "../../../assets/masonry-3.jpg"
import styles from "../Styles/Masonry.module.css"
const Masonry = () => {
  return (
    <div className={styles.masonry}>
      <div>
        <img src={masonry_1} alt="masonary 1" />
      </div>
      <div>
        <img src={masonry_2} alt="masonary 2" />
      </div>
      <div>
        <img src={masonry_3} alt="masonary 3" />
      </div>
    </div>
  )
}

export default Masonry