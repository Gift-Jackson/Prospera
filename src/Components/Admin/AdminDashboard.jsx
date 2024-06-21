import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Styles/admin.module.css";
import Card from "./Card";

// Pulled from database ofcourse
const initialUserData = [
  {
    id: crypto.randomUUID(),
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    country: "USA",
    awardedGrants: 20000,
    requestedGrants: 25000,
    grantStatus: "Done",
  },
  {
    id: crypto.randomUUID(),
    firstname: "Jane",
    lastname: "Smith",
    email: "jane.smith@example.com",
    country: "UK",
    awardedGrants: 300000,
    requestedGrants: 350000,
    grantStatus: "Pending",
  },
  {
    id: crypto.randomUUID(),
    firstname: "Gift",
    lastname: "Jackson",
    email: "gift.jackson@example.com",
    country: "UK",
    awardedGrants: 300000,
    requestedGrants: 350000,
    grantStatus: "Pending",
  },
  {
    id: crypto.randomUUID(),
    firstname: "Alexander",
    lastname: "Paul",
    email: "alexander.paul@example.com",
    country: "USA",
    awardedGrants: 20000,
    requestedGrants: 25000,
    grantStatus: "Done",
  },
];

const AdminDashboard = () => {
  const [userData, setUserData] = useState(initialUserData);

  const handleUpdateUser = (id, amount) => {
    setUserData((prevUserData) =>
      prevUserData.map((user) =>
        user.id === id
          ? { ...user, awardedGrants: amount }
          : user
      )
    );
    alert(`User with ID: ${id} updated with amount: ${amount}`);
  };

  const handleDeleteUser = (id) => {
    setUserData((prevUserData) =>
      prevUserData.filter((user) => user.id !== id)
    );
    alert(`User with ID: ${id} deleted`);
  };

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Hello, Gift</h2>
          <p>Take Control of things here!</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <p>Total Users</p>
            <h1>{userData.length}</h1>
          </div>

          <div className={styles.card}>
            <p>Total Deposits</p>
            <h1>4</h1>
          </div>
        </div>
      </div>

      <center>
        <Link to="proofs" className={styles.link}>
          See Payment Proofs <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </center>

      <div className={styles.wrapper}>
        <h2>Users Info:</h2>
        <div className={styles.grid}>
          {userData.map((data) => (
            <Card
              {...data}
              key={data.id}
              onUpdateUser={handleUpdateUser}
              onDeleteUser={handleDeleteUser}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
