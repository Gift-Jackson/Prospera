import { Link, NavLink } from "react-router-dom";
import "../DashboardLayout.css";
import styles from "../Styles/Sidebar.module.css";
import logo from "../../../assets/prospera-favicon-color.png";
import { sideBar } from "../../../Constants/data";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className={styles.header}>
        <Link to="/dashboard" title="Dashboard">
          <div className={styles.brand}>
            <img src={logo} height={40} alt="Prospera" />
            <h3 className={styles.label}>Prospera</h3>
          </div>
        </Link>
        <div className={styles.close}>
          <span className="material-symbols-outlined">close</span>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul id="sideBar">
          {sideBar.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} className="nav-link">
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className={styles.label}>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <button className={styles.btn}>
          <span className="material-symbols-outlined">logout</span>
          <span className={styles.label}>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
