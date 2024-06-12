import PropTypes from "prop-types";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
const AuthLayout = ({ children }) => {
  return (
    <>
      <main>
        <div className={styles.container}>{children}</div>
        <Link to={-1}>
          <div className={styles.back_btn}>
            <span className="material-symbols-outlined">arrow_back</span>
            <span>Back</span>
          </div>
        </Link>
      </main>
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
