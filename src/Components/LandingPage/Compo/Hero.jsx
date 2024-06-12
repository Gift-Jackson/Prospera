import { Link } from "react-router-dom";
import styles from "../Styles/Hero.module.css";
const Hero = () => {
  return (
    <>
      <section className={styles.hero_section}>
        <main>
          <div className={styles.hero_content}>
            <h1>Empowering Growth Through Grants</h1>
            <p>
              At Prospera, we are dedicated to providing grants that fuel
              innovation, support growth, and empower dreams. Whether you are an
              individual with a vision or a business with a mission, we have the
              resources to help you succeed.
            </p>

            <div className={styles.cta_btns}>
              <Link to="about">
                <button title="Learn more about Prospera" className={styles.btn_1}>Learn More</button>
              </Link>
              <Link to="register">
                <button title="Sign up with Prospera to apply for grant." className={styles.btn_2}>Apply for grant &nbsp; <i className="fa-solid fa-arrow-right"></i></button>
              </Link>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Hero;
