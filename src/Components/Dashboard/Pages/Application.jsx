import { useParams } from "react-router-dom";
import Transition from "../../Global/Transition";
import Heading from "../Compo/Heading";
import ApplicationForm from "../Compo/ApplicationForm";
import ApplicationTable from "../Compo/ApplicationTable";
import { useState } from "react";

const Application = () => {
  document.title = "Prospera | Application";
  const { firstname } = useParams();

  const [showTable, setShowTable] = useState(false);

  const handleFormSubmit = () => {
    setShowTable(true);
    console.log("Form submitted successfully!");
  };

  const handleApplyNowClick = () => {
    setShowTable(false);
  };

  return (
    <Transition>
      <div className="body">
        <Heading title="Grant Application" />
        {showTable ? (
          <>
            <ApplicationTable />
            <button className="apply-btn" onClick={handleApplyNowClick}>
              Apply Now <i className="fa-regular fa-paper-plane"></i>
            </button>
          </>
        ) : (
          <ApplicationForm onFormSubmit={handleFormSubmit} />
        )}
      </div>
    </Transition>
  );
};

export default Application;
