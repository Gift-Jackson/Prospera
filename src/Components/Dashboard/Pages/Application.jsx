import { useParams } from "react-router-dom"
import Transition from "../../Global/Transition"
import Heading from "../Compo/Heading"
import ApplicationForm from "../Compo/ApplicationForm"

const Application = () => {
    const {firstname} = useParams()
  return (
      <>
          <Transition>
              <div className="body">
                  <Heading title="Grant Application" />
                  
                  <ApplicationForm/>
              </div>
      </Transition>
      </>
  )
}

export default Application