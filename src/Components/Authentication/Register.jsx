import { useState, useEffect } from "react";
import InputField from "../Global/Compo/InputField";
import SelectField from "../Global/Compo/SelectField";
import Title from "../LandingPage/Compo/Title";
import { fetchCountries } from "../../Utils/fetchCountries";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const Register = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const getCountries = async () => {
      const countryData = await fetchCountries();
      setCountries(countryData);
    };
    getCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email address is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!selectedCountry) newErrors.country = "Country is required";
    if (!formData.agree)
      newErrors.agree = "You must agree to the privacy policy & terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form or perform actions
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <>
      <AuthLayout>
        <Title
          title="Register"
          subtitle="Create an account with Prospera. Become Part Of Prospera today!"
        />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.gridInp}>
            <InputField
              label="First Name"
              type="text"
              placeholder="Enter your firstname..."
              name="firstname"
              id="fname"
              value={formData.firstname}
              onChange={handleChange}
            />
            {errors.firstname && (
              <p className={styles.error}>{errors.firstname}</p>
            )}
            <InputField
              label="Last Name"
              type="text"
              placeholder="Enter your lastname..."
              name="lastname"
              id="lname"
              value={formData.lastname}
              onChange={handleChange}
            />
            {errors.lastname && (
              <p className={styles.error}>{errors.lastname}</p>
            )}
          </div>
          <div className={styles.gridInp}>
            <InputField
              label="E-mail Address"
              type="email"
              placeholder="Enter your e-mail address..."
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
            <InputField
              label="Password"
              type="password"
              placeholder="Not less than 6 characters..."
              name="password"
              id="pwd"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
          </div>
          <SelectField
            label="Country"
            name="country"
            id="country"
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              handleChange(e);
            }}
            options={countries}
          />
          {errors.country && <p className={styles.error}>{errors.country}</p>}
          <div className={styles.chk}>
            <input
              type="checkbox"
              name="agree"
              id="chk"
              checked={formData.agree}
              onChange={handleChange}
            />{" "}
            &nbsp;
            <label htmlFor="chk">
              I agree to{" "}
              <a className={styles.mark} href="#">
                privacy policy & terms
              </a>
            </label>
          </div>
          {errors.agree && <p className={styles.error}>{errors.agree}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <p className={styles.text}>
          Already have an account?{" "}
          <Link to="/login" className={styles.mark}>
            Login instead
          </Link>
        </p>
      </AuthLayout>
    </>
  );
};

export default Register;
