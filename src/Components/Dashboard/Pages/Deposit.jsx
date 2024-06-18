import CopyInput from "../Compo/CopyInput";
import Heading from "../Compo/Heading";
import styles from "../Styles/deposit.module.css";
import btc from "../../../assets/btc.png";
import cash from "../../../assets/cashapp.png";
import InputField from "../../Global/Compo/InputField";
import { useState } from "react";
import Transition from "../../Global/Transition";
const Deposit = () => {
  document.title = "Prospera | Deposit";
  const [file, setFile] = useState(null);
  const address = "bc1q9x3e8qsscvaw52ftx3k9h04f8hu8vz3cpq99pu";
  const cashapp = "Not availble yet";

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log("File to be uploaded:", file);
      // send to Admin
    } else {
      console.log("No file selected");
    }
  };
  return (
    <>
      <Transition>
        <div className="body">
          <Heading title="Deposit" />

          <div className={styles.container}>
            <h3>Payment Method</h3>

            <div className={styles.wrapper}>
              <div>
                <p>
                  <b className={styles.flex}>
                    <img src={btc} height={40} /> Bitcoin
                  </b>
                </p>
                <CopyInput text={address} />
              </div>
              <div>
                <p>
                  <b className={styles.flex}>
                    <img src={cash} height={40} />
                    CashApp
                  </b>
                </p>
                <CopyInput text={cashapp} />
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <InputField
                type="file"
                name="proof"
                label="Upload Proof"
                id="proof"
                accept=".pdf,image/*"
                onChange={handleFileChange}
              />
              <button type="submit">I have made Payment!</button>
            </form>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Deposit;
