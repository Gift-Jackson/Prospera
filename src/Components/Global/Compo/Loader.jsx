import loader from "../../../assets/loader.svg";
import "../Styles/loader.css"
const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} height={200} alt="loader" />
    </div>
  );
};

export default Loader;
