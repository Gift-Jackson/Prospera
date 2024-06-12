import PropTypes from "prop-types"
import styles from "../Styles/Title.module.css"
const Title = ({title="Title", subtitle="Some attractive subtitle"}) => {
  return (
      <>
          <div className={styles.container}>
              <h2>{title}</h2>
              <p>{subtitle} </p>
          </div>
      </>
  )
}

Title.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default Title