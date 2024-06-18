import { useState } from "react";
import Transition from "../../Global/Transition";
import Heading from "../Compo/Heading";
import InputField from "../../Global/Compo/InputField";
import styles from "../Styles/withdrawal.module.css";
import { useNavigate } from "react-router-dom";

const bankFields = [
  {
    label: "Account Number",
    type: "number",
    name: "accountNumber",
    placeholder: "Enter your account number",
    id: "acctnum",
  },
  {
    label: "Account Name",
    type: "text",
    name: "accountName",
    placeholder: "Enter your account name",
    id: "acctname",
  },
  {
    label: "Bank Name",
    type: "text",
    name: "bankName",
    placeholder: "Enter your bank name",
    id: "bankname",
  },
  {
    label: "Amount",
    type: "number",
    name: "amount",
    placeholder: "Enter the amount",
    id: "amount",
  },
];

const cryptoFields = [
  {
    label: "Wallet Address (BTC)",
    type: "text",
    name: "walletAddress",
    placeholder: "Enter your wallet address",
    id: "walletAddress",
  },
  {
    label: "Amount",
    type: "number",
    name: "amount",
    placeholder: "Enter the amount",
    id: "amount",
  },
];

const cashAppFields = [
  {
    label: "CashApp ID",
    type: "text",
    name: "cashAppId",
    placeholder: "Enter your CashApp ID",
    id: "cashAppId",
  },
  {
    label: "Amount",
    type: "number",
    name: "amount",
    placeholder: "Enter the amount",
    id: "amount",
  },
];

const Withdrawal = () => {
  const [selectedTab, setSelectedTab] = useState("bank");

  const renderFormFields = (fields) => {
    return fields.map((field) => (
      <InputField
        key={field.id}
        type={field.type}
        name={field.name}
        label={field.label}
        placeholder={field.placeholder}
        id={field.id}
      />
    ));
    };
    
    let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
      console.log("Form submitted");
      navigate("../error")
  };

  return (
    <>
      <Transition>
        <div className="body">
          <Heading title="Funds Withdrawal" />

          <div className={styles.container}>
            <h3>Withdrawal Method</h3>
            <p>
              <small>
                Withdraw your funds with ease using the available withdrawal
                methods below:
              </small>
            </p>

            <div className={styles.btns}>
              <button
                onClick={() => setSelectedTab("bank")}
                className={selectedTab === "bank" ? styles.active : ""}
              >
                Bank
              </button>
              <button
                onClick={() => setSelectedTab("crypto")}
                className={selectedTab === "crypto" ? styles.active : ""}
              >
                Cryptocurrency
              </button>
              <button
                onClick={() => setSelectedTab("cashApp")}
                className={selectedTab === "cashApp" ? styles.active : ""}
              >
                CashApp
              </button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              {selectedTab === "bank" && renderFormFields(bankFields)}
              {selectedTab === "crypto" && renderFormFields(cryptoFields)}
              {selectedTab === "cashApp" && renderFormFields(cashAppFields)}
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Withdrawal;
