import { useState } from "react";
import styles from "./Styles/UsersTable.module.css";
import InputField from "../Global/Compo/InputField";
import PropTypes from "prop-types";

// Dummy data
const userData = [
  {
    id: 1,
    fullname: "John Doe",
    email: "john.doe@example.com",
    country: "USA",
    awardedGrants: 20000,
    requestedGrants: 25000,
    grantStatus: "Active",
  },
  {
    id: 2,
    fullname: "Jane Smith",
    email: "jane.smith@example.com",
    country: "UK",
    awardedGrants: 300000,
    requestedGrants: 350000,
    grantStatus: "Pending",
  },
  {
    id: 3,
    fullname: "Jane Smith",
    email: "jane.smith@example.com",
    country: "UK",
    awardedGrants: 300000,
    requestedGrants: 350000,
    grantStatus: "Pending",
  },
  {
    id: 4,
    fullname: "John Doe",
    email: "john.doe@example.com",
    country: "USA",
    awardedGrants: 20000,
    requestedGrants: 25000,
    grantStatus: "Active",
  },
];

const UsersTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState(userData);
  const [selectedUser, setSelectedUser] = useState(null);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
      console.log(`User with ID: ${id} deleted`);
    }
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  return (
    <>
      <h3 className={styles.h3}>Total Number of User(s): {userData.length}</h3>

      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Fullname</th>
              <th>Email</th>
              <th style={{ textAlign: "center" }}>Country</th>
              <th style={{ textAlign: "center" }}>Requested Grants</th>
              <th style={{ textAlign: "center" }}>Awarded Grants</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td style={{ textAlign: "center" }}>{user.country}</td>
                <td style={{ textAlign: "center" }}>
                  {formatNumber(user.requestedGrants)}
                </td>
                <td style={{ textAlign: "center" }}>
                  {formatNumber(user.awardedGrants)}
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(user)}
                    className={styles.editBtn}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && <EditGrant user={selectedUser} toggleModal={toggleModal} />}
    </>
  );
};

const EditGrant = ({ user, toggleModal }) => {
  const [grant, setGrant] = useState(user.awardedGrants);

  const handleGrantChange = (e) => {
    setGrant(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log(`Grant awarded to ${user.fullname}: ${grant}`);
      alert(`Grant awarded to ${user.fullname}: ${grant}`);
    toggleModal();
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.overlay} onClick={toggleModal}></div>

        <div className={styles.modal_container}>
          <div className={styles.icon} onClick={toggleModal}>
            <span className="material-symbols-outlined">close</span>
          </div>
          <div className={styles.content}>
            <p>
              <b>Full Name:</b> {user.fullname}
            </p>
            <p>
              <b>Requested Grants:</b>{" "}
              {new Intl.NumberFormat().format(user.requestedGrants)}
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <InputField
              label="Award Grant"
              type="text"
              placeholder="Enter any amount"
              name="grant"
              id="grant"
              value={grant}
              onChange={handleGrantChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

EditGrant.propTypes = {
  user: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default UsersTable;
