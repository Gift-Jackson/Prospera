import Transition from "../../Global/Transition"
import Heading from "../Compo/Heading"
import styles from "../Styles/error.module.css"
const Error = () => {
  return (
      <>
          <Transition>
              <div className="body">
                  <Heading title="404" />
                  
                  <div className={styles.container}>
                      <h3>Error Message</h3>
                      <p>An error occurred while processing your withdrawal request. Unfortunately, you cannot withdraw the grant allocated to you at this time. For assistance, please contact our support team. Click the button below;</p>

                      <a target="_blank" href="http://t.me/Derwinrobertson">
                          <button className={styles.btn}>
                              Contact Support &nbsp; <i className="fa-regular fa-paper-plane fa-beat"></i>
                      </button>
                      </a>
                  </div>
              </div>
      </Transition>
      </>
  )
}

export default Error