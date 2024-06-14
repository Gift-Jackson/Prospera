import { motion } from "framer-motion"
import PropTypes from "prop-types"
const Transition = ({ children }) => {
    const transitionVar = {
        initial: {
            opacity: 0,
            y:"10%"
        },
        animate: {
            opacity: 1,
            y:"0"
        },
        exit: {
            opacity: 0,
            y:"10%"
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