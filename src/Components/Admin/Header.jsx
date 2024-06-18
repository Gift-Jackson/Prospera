import styles from "./Styles/header.module.css"
import "../Global/Styles/admin.css"
const Header = () => {
  return (
    <>
      <header id="admin" className={styles.header}>
        <main>
          <nav>
            <h2>Admin</h2>
            <button>Logout <i className="fa-solid fa-right-from-bracket"></i></button>
          </nav>
        </main>
      </header>
    </>
  )
}

export default Header