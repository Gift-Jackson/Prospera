import Transition from "../Global/Transition";
import UsersTable from "./Users";

const AdminDashboard = () => {
  return (
    <>
      <Transition>
        <main>
          <div>
            <div style={{ textAlign: "center", paddingTop: "2em" }}>
              <h2>Hello, Gift</h2>
              <p>Take Controls your shits here!</p>
            </div>
            <UsersTable />
          </div>
        </main>
      </Transition>
    </>
  );
};

export default AdminDashboard;
