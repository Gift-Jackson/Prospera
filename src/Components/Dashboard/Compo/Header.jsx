import { useRef, useState, useEffect } from "react";
import styles from "../Styles/Header.module.css";
import MobileNav from "./MobileNav";
import { AnimatePresence } from "framer-motion";
import HeaderModal from "./HeaderModal";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShow(false);
    }
  };
  const closeModal = () => {
    setShow(prev => !prev)
  }

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);
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
          <div onClick={closeModal} className={styles.profile}>
            <p className={styles.label}>Gift Jackson</p>
            <div className={styles.flex}>
              <div className={styles.initials}>GJ</div>
              <i className="fa-solid fa-angle-down"></i>
           </div>

          </div>
        </div>
      </header>
      {show && <div ref={modalRef} className={styles.modal}><HeaderModal/></div>}
      <AnimatePresence>
        {showNav && <MobileNav toggleNav={toggleNav} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
