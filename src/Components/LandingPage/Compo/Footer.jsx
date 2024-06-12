import styles from "../Styles/Footer.module.css";
import logo from "../../../assets/prospera-favicon-white.png";
import { navLinks } from "../../../Constants/data";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <main>
        <div className={styles.wrapper}>
          <div>
            <div className={styles.brand}>
              <img src={logo} height={50} alt="Prospera Logo" />
              <h2>Prospera</h2>
            </div>
            <ul className={styles.lists}>
              <li>156 2nd St, San Francisco,Califonia, United States</li>
              <li>
                <a href="tel:+13476741640">+1 (347)-674-1640</a>
              </li>
              <li>
                <a href="mailto:support@prospera.org">support@prospera.org</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Quick links</h3>
            <ul className={styles.lists}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Subscribe to Our Newsletter</h3>
            <form className={styles.form}>
              <input
                type="email"
                name="email"
                placeholder="Enter e-mail address..."
              />
              <button type="submit">Subscribe <i className="fa-regular fa-envelope"></i></button>
            </form>

            <div>
              <h3>Social Media</h3>
              <ul className={styles.social}>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram fa-bounce"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook fa-bounce"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-x-twitter fa-bounce"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className={styles.text}>Copyright © {new Date().getFullYear()}. All Rights Reserved — Prospera</p>

      </main>
    </footer>
  );
};

export default Footer;
