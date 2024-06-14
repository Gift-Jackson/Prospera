import { useParams } from "react-router-dom";
import "../DashboardLayout.css";
import Cards from "../Compo/Cards";
import ListCard from "../Compo/ListCard";
import { listCardOne, listCardTwo } from "../../../Constants/data";
import Heading from "../Compo/Heading";
import Transition from "../../Global/Transition";
const Dashboard = () => {
  const { firstname } = useParams();

  return (
    <>
      <Transition>
        <div className="body">
          <Heading title="Overview" />
          <div className="grid-container">
            <Cards icon="payments" label="Balance" amount="3400.00" />
            <Cards
              icon="account_balance_wallet"
              label="Donations"
              amount="400.00"
              rate="0.02"
              className="increase"
              rateIcon="arrow_upward"
            />
            <Cards
              icon="social_leaderboard"
              label="Grants Awarded"
              amount="2.42m"
              rate="-14.82"
              rateIcon="arrow_downward"
              className="decrease"
            />
            <Cards
              icon="wallet"
              label="Transactions"
              amount="125"
              rate="+28.14"
              className="increase"
              rateIcon="arrow_upward"
            />
          </div>
          <div className="flex">
            <ListCard items={listCardOne} title="Our Humantarian Support" />
            <ListCard items={listCardTwo} title="Recent Grant Recipients" id="green" />
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Dashboard;
