import { NavLink } from "react-router-dom";
import logo from "../../../assets/prospera-favicon-white.png";
import styles from "../Styles/Header.module.css";
import { navLinks } from "../../../Constants/data";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.layer_1}>
          <main>
            <nav className={styles.nav_1}>
              <a href="/">
                <div className={styles.brand}>
                  <img src={logo} height={40} alt="Prospera Logo" />
                  <h2>Prospera.</h2>
                </div>
              </a>
              <a href="tel:+1 (347)-674-1640" className={styles.num}>
                <div className={styles.icon}>
                  <i className="fa-solid fa-phone-volume fa-shake"></i>
                </div>
                <p className={styles.call}>+1 (347)-674-1640</p>
              </a>
            </nav>
          </main>
        </div>
        <div className={styles.layer_2}>
          <main>
            <nav className={styles.nav_2}>
              <ul>
                {navLinks.map((items, index) => (
                  <li key={index}>
                    <NavLink className="nav-link" to={items.path}>{items.label}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </main>
        </div>
      </header>
    </>
  );
};

export default Header;
