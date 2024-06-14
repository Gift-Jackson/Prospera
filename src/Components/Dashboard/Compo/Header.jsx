import { useState } from "react";
import styles from "../Styles/Header.module.css";
import MobileNav from "./MobileNav";
import { AnimatePresence } from "framer-motion";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <>
      <header className={styles.header}>
        <div
          onClick={toggleNav}
          className={[styles.box, styles.menu].join(" ")}
        >
          <span className="material-symbols-outlined">side_navigation</span>
        </div>
        <div className={styles.right}>
          <div className={[styles.box, styles.theme].join(" ")}>
            <span className="material-symbols-outlined">dark_mode</span>
          </div>
          <div className={styles.profile}>
            <p>Gift Jackson</p>
            <div className={styles.initials}>GJ</div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {showNav && <MobileNav toggleNav={toggleNav} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
