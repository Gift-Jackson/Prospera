import { useParams } from "react-router-dom"

const Dashboard = () => {
    const {firstname} = useParams()
  return (
    <div>Dashboard {firstname}</div>
  )
}

export default Dashboard