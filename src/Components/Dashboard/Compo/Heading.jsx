import PropTypes from "prop-types"
const Heading = ({title}) => {
  return (
      <>
          <h2 className="heading">{title}</h2>
      </>
  )
}
Heading.propTypes = {
    title: PropTypes.string
}

export default Heading