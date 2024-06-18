import Heading from "../Compo/Heading";
import InputField from "../../Global/Compo/InputField";
import styles from "../Styles/profile.module.css";
import Transition from "../../Global/Transition";

const Profile = () => {
  document.title = "Prospera | Profile";
  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend
    // fetch current data and insert as initial values
  };
  return (
    <>
      <Transition>
        <div className="body">
          <Heading title="Profile" />

          <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <InputField
                label="First Name"
                type="text"
                placeholder="Enter your firstname..."
                name="firstname"
                id="fname"
              />
              <InputField
                label="Last Name"
                type="text"
                placeholder="Enter your lastname..."
                name="lastname"
                id="lname"
              />
              <InputField
                label="E-mail Address"
                type="email"
                placeholder="Enter your e-mail address..."
                name="email"
                id="email"
              />
              <InputField
                label="Current Password"
                type="password"
                placeholder="Not less than 6 characters..."
                name="c-password"
                id="cpwd"
              />
              <InputField
                label="New Password"
                type="password"
                placeholder="Not less than 6 characters..."
                name="n-password"
                id="npwd"
              />
              <button type="submit">Update Profile</button>
            </form>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Profile;

// dooh
// I sabi. its just didnt work at my end

//styling dey remain
