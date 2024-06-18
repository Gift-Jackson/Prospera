import { motion } from "framer-motion"
import PropTypes from "prop-types"
const Transition = ({ children }) => {
    const transitionVar = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.4
            }
        },
        exit: {
            opacity: 0,
        }
    }
  return (
      <motion.div
          variants={transitionVar}
          initial="initial"
          animate="animate"
          exit="exit"
      >
          {children}
    </motion.div>
  )
}

Transition.propTypes = {
    children: PropTypes.node
}
export default Transition