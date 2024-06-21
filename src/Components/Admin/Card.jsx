import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Styles/admin.module.css";

const Card = ({
  id,
  firstname,
  lastname,
  email,
  country,
  requestedGrants,
  grantStatus,
  awardedGrants,
  onUpdateUser,
  onDeleteUser,
}) => {
  const [amount, setAmount] = useState(awardedGrants);

  const handleUpdate = () => {
    onUpdateUser(id, parseFloat(amount));
  };

  const handleDelete = () => {
    onDeleteUser(id);
  };

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={styles.user}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>
              <b className={styles.td}>Full Name:</b>
            </td>
            <td className={styles.rightAlign}>{firstname} {lastname}</td>
          </tr>
          <tr>
            <td>
              <b className={styles.td}>E-mail:</b>
            </td>
            <td className={styles.rightAlign}>{email}</td>
          </tr>
          <tr>
            <td className={styles.td}>
              <b>Country:</b>
            </td>
            <td className={styles.rightAlign}>{country}</td>
          </tr>
          <tr>
            <td>
              <b className={styles.td}>Requested Grants:</b>
            </td>
            <td className={styles.rightAlign}>
              {currencyFormatter.format(requestedGrants)} ({grantStatus})
            </td>
          </tr>
          <tr>
            <td>
              <b className={styles.td}>Award Grants:</b>
            </td>
            <td className={styles.rightAlign}>
              <input
                type="number"
                placeholder="Edit User Balance here"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.btns}>
        <button className={styles.edit} onClick={handleUpdate}>
          Save changes!
        </button>
        <button className={styles.del} onClick={handleDelete}>
          Delete User
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  requestedGrants: PropTypes.number.isRequired,
  grantStatus: PropTypes.string.isRequired,
  awardedGrants: PropTypes.number.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

export default Card;
